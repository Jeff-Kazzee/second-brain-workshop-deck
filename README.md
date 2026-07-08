# Minimal Zo Brain workshop deck

A 12-slide teaching deck for the July 16 "Build Your Second Brain in Two Hours" workshop. Ethan Davidson and Jeff Kazzee host. Joanna Kurylo produces. The audience is non-technical.

The deck teaches the Minimal Zo Brain method, which lives at [github.com/Jeff-Kazzee/zo-computer-second-brain](https://github.com/Jeff-Kazzee/zo-computer-second-brain) and is mirrored in this folder as `spec.md`.

## The editorial approach

The first draft had 24 slides. It was too dense for a concept that fits in one sentence.

The concept: your AI works better when it can read your files. Here is the shape. Here is how Zo builds it with you. That is the whole deck.

We collapsed to 12 by holding one rule. Each slide carries one complete idea and one line worth screenshotting. Workshop activities (the live build, the demos, the show-and-tell) do not get their own content slide for every sub-step. They run on anchor slides the host narrates over. The slide is the front door. The host fills the room.

We also killed competing mental models. The first draft had four depths and three levels and the Four C's and five things, all fighting for the spine. We kept the spec's five things (slide 3) and four depths (slide 6) and dropped the rest. Ethan's three levels use a different axis than the four depths and confuse both. The Four C's mostly restate slides 3 through 5, and the cadence point folds into the loops slide. Those frames now live in host narration, not on screen.

The five questions got folded into the recipe slide. They had their own slide and were listed in the recipe slide. That is the same thing twice. The questions are the method. They belong with the method.

## The slide map

Image-led (one original illustration each): slides 2, 3, 4, 5, 7, 9, 11.
Type-led (strong typography only, no image): slides 1, 6, 8, 10, 12.

The split is deliberate. Some ideas need a picture. The four depths are a clean typographic list and an image would fight them. The build anchor is a live screen share during the workshop, so a generated screenshot would be a lie. Gates and the close are clearer in words.

The "on screen" cues in the copy that reference live demos (the terminal, the editor split, the DVD shelf photo, the Zo chat panel) are captions on the anchor slides. The hosts screen-share those live. We did not generate fake screenshots for them.

## The design system

Warm paper canvas, near-black ink, one accent. No SaaS fonts anywhere.

- Palette: warm off-white paper, near-black ink, deep teal primary, coral accent, slate muted, hairline rule. Defined in `deck/src/styles.css`. No gradients.
- Type: Space Grotesk for display and body, paired with JetBrains Mono for labels, eyebrows, counters, and on-screen cues. The mono ties to the subject. The deck is about plain text files.
- Layout: one full-screen section per slide on a 4px spacing scale. Fixed chrome in the corners. The quarter label sits top-right so it never collides with a left-aligned headline. That was a fix after the first build, when the label sat over the title and was hard to read.

Seven original flat vector illustrations carry the image-led slides. They share one visual language: orange-red and dark teal and white on cream, no text inside the images. The slide 2 hands illustration is an original ink-line take on the recursive-hands idea, not the M.C. Escher artwork.

## The two outputs

The deck ships in two forms that render identically.

1. The Zo Site. The live build, the working source, the navigable preview. React plus Vite plus Bun plus TypeScript plus Tailwind. Lives in `deck/`. Published publicly at `https://deck-jeffkazzee.zocomputer.io`.
2. The standalone HTML export. A single self-contained file at `docs/index.html`, about 5.4 MB. Every image is inlined as a base64 data URI, and the JS and CSS are inlined, so it runs from any browser by double-clicking, offline, with no server. Keyboard nav and hash deep-links work the same as the site. Google Fonts load when online and fall back to system fonts offline.

We built both because the use cases differ. The site is for iterating and for projecting from a browser with a connection. The standalone file is for handing to someone, dropping in a folder, or running on a machine with no network.

## The repo

This project lives in a private GitHub repo: `Jeff-Kazzee/second-brain-workshop-deck`. The source is versioned there and agents edit it through the working copy. The Zo Site at `https://deck-jeffkazzee.zocomputer.io` is the public view. The standalone HTML at `docs/index.html` is the downloadable, offline deck with all seven images baked in.

### How to rebuild the standalone export

From the `deck/` folder:

```bash
bunx vite build
bun run scripts/inliner.ts
```

The build produces `deck/dist/`. The inliner reads `dist/`, inlines the JS and CSS, converts every image to a base64 data URI, and writes `../docs/index.html` (the downloadable standalone deck). It uses function-based replacements so `$&` patterns inside the bundled JS are not reinterpreted, and it escapes literal `</script>` so the inlined module tag does not close early. Both guards are load-bearing. Do not switch them to string replacements.

## The voice gate

Every word that ships under Jeff's name passes the `jeff-writing-voice` skill. The copy in `slides-copy.md` is final and voice-gated: sentence case headers, no em dashes, no banned words, defensive specificity, ranked positions, burstiness. Read the skill before writing any new copy for this project.

The honesty rule is hard. Never fabricate lived experience, metrics, quotes, or anecdotes. The copy only claims what Jeff and Ethan actually built and teach.

## Files in this folder

- `slides-copy.md`: the canonical copy. Source of truth.
- `spec.md`: the method the deck teaches.
- `build-deck.prompt.md`: the build prompt and constraints.
- `_plan.md`: the working plan and critique trail.
- `AGENTS.md`: the project control file. Read it first when working in this folder.
- `docs/index.html`: the standalone export (downloadable, offline, all images baked in).
- `deck/`: the Zo Site. See `deck/README.md` for technical detail.

## Credits

Hosts: Ethan Davidson, Jeff Kazzee. Producer: Joanna Kurylo. Method: the Minimal Zo Brain spec at [github.com/Jeff-Kazzee/zo-computer-second-brain](https://github.com/Jeff-Kazzee/zo-computer-second-brain). Workshop planning trail in the forked repo at [github.com/Jeff-Kazzee/2nd-brain-build-hour](https://github.com/Jeff-Kazzee/2nd-brain-build-hour).
