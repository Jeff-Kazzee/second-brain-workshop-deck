# Minimal Zo Brain deck

## Objective
A tasteful, first-principles slide deck for the July 16 "Build Your Second Brain in Two Hours" workshop. Two hosts (Ethan Davidson, Jeff Kazzee), non-technical audience. Built from spec.md, not overboard.

## Sources grounded
- spec.md (Jeff-Kazzee/zo-computer-second-brain), the canonical method
- Full planning trail in the forked repo (Jeff-Kazzee/2nd-brain-build-hour): Gemini notes 6/19, 6/24, 6/26, 6/29, 7/3; run of show; cue cards; concept files
- Jeff's own brain capture: brain/work/meetings/2026-06-26-second-brain-build-hours.md
- Gmail check: only GitHub issue notifications from Ethan, no separate workshop email thread. Substance lives in the calls, which Ethan captured into the repo.
- jeff-writing-voice skill + references (voice gate)
- Existing minimal-zo-brain-site (branding/voice reference)

## Critique checkpoint: collapse (2026-07-07)

Jeff flagged the deck was too dense for a simple concept. First-principles pass:

The concept is: your AI works better when it can read your files. Here's the shape. Here's how Zo builds it with you. That's it.

Three problems found and fixed:
1. 24 slides for a simple concept. Collapsed to 12. Each slide = one complete idea + one pull-line. Workshop activities (live build, demos, show-and-tell) run on anchor slides the host narrates over, not a content slide per sub-step.
2. Competing mental models: four depths AND three levels AND Four C's AND five things. Kept the spec's five things and four depths as the spine. Dropped three levels (different axis, confuses depths). Folded Four C's cadence into the loops slide. The rest reclassified as host narration.
3. Five questions had their own slide AND were listed in the recipe slide. Folded the questions into the recipe slide as a compact paragraph. They're the method; they belong with the method.

Open flag for Jeff: Ethan loses his dedicated slides (Four C's, three levels, semantic frontmatter demo). Reclassified as host narration over anchor slides. If Ethan needs on-screen anchors for co-hosting balance, that's a conversation.

## Current state
- [x] Fork Ethan's repo to Jeff-Kazzee/2nd-brain-build-hour
- [x] Read spec.md, README, full meeting trail, run of show, cue files
- [x] Read jeff-writing-voice skill + references
- [x] Check Gmail for workshop discussions (only GitHub notifications)
- [x] Draft v1: 24 slides (too many)
- [x] Critique: collapse to first principles
- [x] Draft v2: 12 slides, voice-gated, activities as anchor slides
- [x] Build the visual deck (Zo Site slides template, paper/teal/coral system)
- [x] Generate imagery (7 original illustrations, one visual language)
- [x] Standalone HTML export at Projects/minimal-zo-brain-deck/second-brain-deck.html
- [x] Jeff reviewed the look and approved all 12
- [x] Published as public Zo Site at https://deck-jeffkazzee.zocomputer.io
- [x] Project docs: AGENTS.md (control file), README.md (editorial + technical story), inliner moved into deck/scripts/ for durable rebuild path
- [ ] Workshop day: July 16

## Definition of done
12-slide deck, voice-gated, each slide one idea + one pull-line, built as a navigable visual (keyboard arrows + hash deep-links), with imagery on the anchor slides. Standalone single-file HTML export that runs offline. Published as a public Zo Site. Project documented. Jeff approved the look and the publish.

## Recut sprint: four shorter deck variants (2026-07-10)

### Objective
Turn the current deck into four separate shorter deck variants that teach the same workshop more clearly for true beginners, using the existing deck source, workshop research, and the new image probes.

### Phases
- Phase 1: define the four teaching angles and compress the core concepts into tighter slide spines
- Phase 2: build the four variants into the site as real routed decks with shared navigation and visual language
- Phase 3: critique the variants against workshop intent, fix weak spots, and leave a clear recommendation

### Task list
- [x] Read current deck copy, critique notes, recut notes, and voice rules
- [~] Define four shorter deck variants with distinct teaching tradeoffs
- [ ] Implement the four variants as real deck routes in `deck/`
- [ ] Add a selector route so Jeff can compare them quickly
- [ ] Run typecheck and a build check
- [ ] Critique the variants, find three real problems, and tighten them

## Critique
Pause after the first working routed version exists. Check whether the variants are actually distinct, whether they still teach the machine model before the method, and whether any slide is still doing backup-argument work instead of teaching one idea.
