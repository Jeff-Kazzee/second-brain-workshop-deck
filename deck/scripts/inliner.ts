/**
 * Inline the built deck into a single self-contained HTML file.
 * - Inlines the JS bundle and CSS as <script>/<style>.
 * - Inlines every /images/*.jpg as a base64 data URI inside the JS/HTML/CSS.
 * - Keeps the Google Fonts <link> (online: real fonts; offline: system fallback).
 * - Output: second-brain-deck.html next to the site, ready to open from anywhere.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const OUT = join(__dirname, "..", "..", "docs", "index.html");

async function main() {
  let html = await readFile(join(DIST, "index.html"), "utf8");

  const assets = await readdir(join(DIST, "assets"));
  const jsFile = assets.find((f) => f.endsWith(".js"))!;
  const cssFile = assets.find((f) => f.endsWith(".css"))!;
  const js = await readFile(join(DIST, "assets", jsFile), "utf8");
  const css = await readFile(join(DIST, "assets", cssFile), "utf8");

  // Build base64 data URIs for every image in dist/images.
  const imgDir = join(DIST, "images");
  let imgMap: Record<string, string> = {};
  try {
    const imgs = await readdir(imgDir);
    for (const name of imgs) {
      const buf = await readFile(join(imgDir, name));
      const ext = name.split(".").pop()?.toLowerCase();
      const mime =
        ext === "jpg" || ext === "jpeg"
          ? "image/jpeg"
          : ext === "png"
            ? "image/png"
            : ext === "svg"
              ? "image/svg+xml"
              : "application/octet-stream";
      imgMap[`/images/${name}`] = `data:${mime};base64,${buf.toString("base64")}`;
    }
  } catch {
    // no images dir
  }

  // favicon.svg
  let faviconUri = "";
  try {
    const fav = await readFile(join(DIST, "favicon.svg"));
    faviconUri = `data:image/svg+xml;base64,${fav.toString("base64")}`;
  } catch {}

  // Replace image refs everywhere (JS, CSS, HTML).
  let jsOut = js;
  let cssOut = css;
  let htmlOut = html;
  // Escape literal </script> inside the JS so the inlined module tag does not
  // close early and dump the rest of the bundle as visible page text.
  jsOut = jsOut.split("</script>").join("<\\/script>");
  // Same guard for </style> inside CSS, just in case.
  cssOut = cssOut.split("</style>").join("<\\/style>");
  for (const [path, uri] of Object.entries(imgMap)) {
    jsOut = jsOut.split(path).join(uri);
    cssOut = cssOut.split(path).join(uri);
    htmlOut = htmlOut.split(path).join(uri);
  }
  if (faviconUri) {
    htmlOut = htmlOut.split("/favicon.svg").join(faviconUri);
  }

  // Inline CSS into a <style> tag, replacing the <link rel="stylesheet">.
  // Use a function replacement so $-patterns in cssOut are not interpreted.
  const cssLinkRe =
    /<link[^>]*rel="stylesheet"[^>]*href="\/assets\/[^"]+"[^>]*>/;
  htmlOut = htmlOut.replace(
    cssLinkRe,
    () => `<style>\n${cssOut}\n</style>`,
  );

  // Inline JS into a <script type="module">, replacing the external src.
  // Function replacement is mandatory: the JS bundle contains literal "$&"
  // (e.g. replace(re,"$&/")), and a string replacement would substitute every
  // $& with the matched script tag, re-injecting real </script> sequences.
  const jsScriptRe =
    /<script[^>]*type="module"[^>]*src="\/assets\/[^"]+"[^>]*><\/script>/;
  htmlOut = htmlOut.replace(
    jsScriptRe,
    () => `<script type="module">\n${jsOut}\n</script>`,
  );

  // Sanity: confirm no leftover /assets/ or /images/ refs in the output.
  const leftovers = [
    ...htmlOut.matchAll(/\/assets\/[A-Za-z0-9._-]+/g),
    ...htmlOut.matchAll(/\/images\/[A-Za-z0-9._-]+/g),
  ].map((m) => m[0]);
  // (favicon handled above; ignore the data: URIs we just inserted)

  await Bun.write(OUT, htmlOut);
  const outSize = (await Bun.file(OUT).size) as number;
  console.log(`Wrote ${OUT}`);
  console.log(`Size: ${(outSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Images inlined: ${Object.keys(imgMap).length}`);
  console.log(`Leftover raw asset refs (should be empty):`);
  console.log(
    leftovers.filter((l) => !l.startsWith("data:")).slice(0, 10).join("\n") ||
      "(none)",
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
