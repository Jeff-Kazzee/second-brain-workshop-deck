# Build the Minimal Zo Brain workshop slide deck

Build a 12-slide presentation deck for the "Build Your Second Brain in Two Hours" workshop. Live-teaching deck, not a marketing page. Two hosts present from it on July 16: Ethan Davidson and Jeff Kazzee, produced by Joanna Kurylo. Non-technical audience.

Everything you need is in this folder. Read it before building.

## Step 1. Load the canonical copy

Read `Projects/minimal-zo-brain-deck/slides-copy.md` in full. It is the source of truth for every slide's headline, body, pull-line, and on-screen cue. The copy is final and voice-gated. If text doesn't fit the layout, cut it. Do not paraphrase, do not soften, do not add hedging. No em dashes anywhere in rendered text. Sentence case headers.

## Step 2. Load the spec for accuracy

Read `Projects/minimal-zo-brain-deck/spec.md`. Any file names, folder structures, or code you render on screen must match the spec. The deck teaches this system, so the details have to be right.

## Step 3. Build target

Build this as a new Zo Site using the slides template variant. Use `create_website` with `variant="slides"` and `name="minimal-zo-brain-deck"`. A Site gives full file control and custom design, which this deck needs. Do not build it as a zo.space route.

Tech: React + Vite + Bun + TypeScript + Tailwind, the slides template default. Keyboard nav: arrow right and space advance, arrow left goes back. URL hash per slide (`#slide-1` through `#slide-12`). One full-screen `<section>` per slide. A subtle slide counter and nav hint in the corner. Optimize for a projected large screen, but keep it responsive.

## Step 4. Design direction

This deck must look editorial and restrained, not like a SaaS template. Proposed direction (build one test slide first, get approval, then build the rest):

- Type pairing. A serif display face for headlines (Instrument Serif or Fraunces) paired with a mono face for body and labels (JetBrains Mono or Geist Mono). The mono ties to the deck's subject: plain text files. No Inter, Roboto, Open Sans, Lato, Montserrat, or any default SaaS face anywhere.
- Palette. Warm paper background (off-white, not pure white), near-black ink, one accent. Propose either a muted ochre or a deep teal. No blue-to-purple gradients. No gradients at all unless they earn it. Constrained: one primary, one accent, two or three neutrals.
- Layout. One full-screen section per slide. Generous spacing on a 4px scale. Headline, body, pull-line hierarchy visible at a glance. Some slides image-led, some type-led. Components should breathe.
- No emoji headers. No boldface confetti. No title-case headings.

Build slide 1 or slide 2 first, screenshot it, and show me. I approve the look before you build all 12.

## Step 5. Imagery

Generate hero images for the slides where an image carries the idea. Not every slide needs one. Recommended split:

Image-led (generate one hero image each):
- Slide 2. The two-hands-drawing-each-other metaphor. Generate an original illustration in this spirit. Do not use the real M.C. Escher artwork (rights). An original ink-line take on two hands sketching each other.
- Slide 3. The five things a brain is made of.
- Slide 4. Sources kept separate from current truth. Two distinct visual masses that don't merge.
- Slide 5. A recipe versus a template. One fixed, one frozen.
- Slide 7. Zo reading the index, following links, only loading what it needs.
- Slide 9. A source becoming structure. Something raw turning into something organized.
- Slide 11. The loops that keep it alive. A rhythm, a daily mark, compounding.

Type-led (no image, strong typography only):
- Slide 1. Title.
- Slide 6. The four depths. A clean typographic list does this better than an image.
- Slide 8. Build anchor. This is a live screen share during the workshop. No image.
- Slide 10. Gates. The concept is clear in words.
- Slide 12. Close.

All generated images must share one consistent visual language. Propose the style before generating (hand-drawn ink line, restrained editorial illustration, or geometric). Generate ONE test image first for my approval. Do not burn through seven generations if the style is wrong.

Note: the "on screen" cues in the copy that reference live demos (terminal, editor split, DVD shelf photo, Zo chat panel) are live screen shares during the workshop. Do not generate fake screenshots for those.

## Step 6. Verify before reporting done

- `bunx tsc --noEmit` passes.
- Preview the site with agent-browser on the dev URL. Screenshot every slide. Read the screenshots back and confirm layout, type, and images render correctly.
- Confirm no em dashes in any rendered text.
- Confirm keyboard nav works (arrow keys, space).

## Step 7. Report

Tell me: the site path, the dev preview URL, which slides are image-led versus type-led, where the generated images live, and any slide where the copy didn't fit the layout and what you cut.

## Constraints

- Do not mention Jeff's location or living situation anywhere in the deck or metadata.
- Do not publish the site. Build and preview only. Jeff publishes when he is ready.
- The copy in slides-copy.md is final. Cut for layout, do not paraphrase.
- If the design direction or image style is not working, stop and say so. Do not ship a deck that looks generic.
- This is a medium task. Plan in chat before building. Include a critique checkpoint after the first test slide and test image.
