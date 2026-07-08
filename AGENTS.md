# AGENTS.md

Project control file for the Minimal Zo Brain workshop deck. Read this before touching anything in the folder.

## What this is

A 12-slide teaching deck for the July 16 "Build Your Second Brain in Two Hours" workshop. Two hosts: Ethan Davidson and Jeff Kazzee, produced by Joanna Kurylo. Non-technical audience. The concept is one sentence: your AI works better when it can read your files, here is the shape, here is how Zo builds it with you.

The deck teaches the Minimal Zo Brain method, which lives at `github.com/Jeff-Kazzee/zo-computer-second-brain` and is mirrored locally as `spec.md`.

## File map

- `slides-copy.md`: the canonical copy. Source of truth for every headline, body, pull-line, and on-screen cue. Final and voice-gated. Cut for layout only. Never paraphrase, soften, or hedge.
- `spec.md`: the method the deck teaches. Any file name, folder shape, or code shown on screen must match this.
- `build-deck.prompt.md`: the build prompt that produced the deck. The instructions, constraints, and design direction.
- `_plan.md`: the working plan with critique checkpoint and current state.
- `docs/index.html`: the standalone single-file export. Self-contained, runs offline by double-clicking. Rebuilt from `deck/`. Also serves as the GitHub Pages source.
- `deck/`: the Zo Site (the live build). React + Vite + Bun + TypeScript + Tailwind. See `deck/README.md` for technical detail.
  - `deck/src/deck/Deck.tsx`: the deck. 12 slide components, keyboard nav, chrome, shared primitives.
  - `deck/src/styles.css`: deck design tokens appended to the base stylesheet.
  - `deck/public/images/slide-*.jpg`: the seven original illustrations.
  - `deck/scripts/inliner.ts`: rebuilds the standalone HTML export from `deck/dist/`.

## How to edit a slide (for agents)

The copy lives in `slides-copy.md`. The code lives in `deck/src/deck/Deck.tsx`. Each slide is a separate function with a clear name. To change text on a slide:

1. Read the slide's copy in `slides-copy.md`.
2. Find the matching function in `deck/src/deck/Deck.tsx` using the map below.
3. Edit the JSX text to match the copy. Do not paraphrase.
4. Rebuild the standalone export (see "How to rebuild" below).
5. Commit with a message naming the slide and what changed.

### Slide-to-function map

| Slide | Function in Deck.tsx | Image |
|-------|---------------------|-------|
| 1. Title | `SlideTitle()` | none |
| 2. The hook | `SlideHook()` | slide-2-hands.jpg |
| 3. Five things | `SlideFiveThings()` | slide-3-five-things.jpg |
| 4. The one rule | `SlideOneRule()` | slide-4-sources-truth.jpg |
| 5. The recipe | `SlideRecipe()` | slide-5-recipe-template.jpg |
| 6. Pick a depth | `SlideDepths()` | none |
| 7. How Zo reads your brain | `SlideZoReads()` | slide-7-zo-reads.jpg |
| 8. Build anchor | `SlideBuildAnchor()` | none |
| 9. Ingest anchor | `SlideIngest()` | slide-9-source-to-structure.jpg |
| 10. Gates | `SlideGates()` | none |
| 11. The loops | `SlideLoops()` | slide-11-loops.jpg |
| 12. Close | `SlideClose()` | none |

Images live in `deck/public/images/`. Replace an image by overwriting the file with the same name. The inliner bakes every image into the standalone HTML as base64, so the export picks up changes automatically on rebuild.

## Settled decisions

Do not relitigate these without a real reason.

- 12 slides, not 24. The first draft was too dense for a simple concept. Each slide carries one complete idea and one pull-line. Workshop activities (live build, demos, show-and-tell) run on anchor slides the host narrates over, not a content slide per sub-step.
- The spine is the spec's five things (slide 3) and four depths (slide 6). Dropped: Ethan's three levels (different axis, confuses depths), the Five C's as a slide (cadence folds into slide 11). These live in host narration, not on screen.
- The five questions belong inside the recipe slide (slide 5), not on their own slide. They are the method.
- Design system: warm paper canvas, near-black ink, deep teal primary, coral accent. Space Grotesk (display + body) paired with JetBrains Mono (labels, eyebrows, counters). No SaaS fonts. No gradients. One full-screen section per slide on a 4px spacing scale.
- Imagery: seven original flat vector illustrations in one visual language (orange-red + dark teal + white on cream, no text in images). The slide 2 hands illustration is an original ink-line take, not the M.C. Escher artwork.
- Quarter label sits top-right so it never collides with a left-aligned headline. This was Jeff's fix after the first build.
- Two outputs: the Zo Site (live, navigable, the working source) and the standalone HTML export (shareable, offline, self-contained). Both render identically.

## Current state

- Deck built. 12 slides. Typecheck clean. Keyboard nav and hash deep-links verified.
- Seven illustrations generated and inlined.
- Standalone export at `docs/index.html` (about 5.4 MB, fully self-contained). Also the GitHub Pages source.
- Published as a public Zo Site at `https://deck-jeffkazzee.zocomputer.io`.
- Jeff reviewed the look and approved building all 12.

## How to rebuild the standalone export

From the `deck/` folder:

```bash
bunx vite build
bun run scripts/inliner.ts
```

The inliner writes to `../docs/index.html` (relative to the script). It uses function-based replacements so `$&` patterns inside the bundled JS are not reinterpreted, and it escapes literal `</script>` so the inlined module tag does not close early. Do not switch either to string replacements.

## Constraints

- Privacy. Never mention Jeff's location or living situation anywhere in the deck, metadata, or docs. The deck has been scanned clean.
- Voice gate. The copy in `slides-copy.md` is final and voice-gated: sentence case headers, no em dashes, no banned words, defensive specificity, ranked positions, burstiness. Any new copy must pass the same gate. Read the `jeff-writing-voice` skill before writing any prose that ships under Jeff's name.
- Copy is the source of truth. If text does not fit the layout, cut it. Do not paraphrase.
- Public actions are gated. Do not publish, post, or change anything public without Jeff's explicit per-item go. The site is already published with his approval. Republishing after edits requires the same go.

## Where to read next

- For the copy: `slides-copy.md`.
- For the method: `spec.md`.
- For technical site detail: `deck/README.md`.
- For the build prompt and constraints: `build-deck.prompt.md`.
- For plan state and the critique trail: `_plan.md`.

## Open flags

- Ethan lost his dedicated slides (Four C's, three levels, semantic frontmatter demo). Reclassified as host narration over anchor slides. If Ethan needs on-screen anchors for co-hosting balance, that is a conversation, not a unilateral change.
- The "on screen" cues that reference live demos (terminal, editor split, DVD shelf photo, Zo chat panel) are captions on the anchor slides, not generated screenshots. The hosts screen-share those live. Do not generate fake screenshots for them.
