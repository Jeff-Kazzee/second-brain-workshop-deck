# Minimal Zo Brain deck critique and recut options

## blunt read

The current deck has a real idea in it, but it keeps trying to do three jobs at once:

1. explain the concept,
2. defend the concept,
3. narrate the workshop mechanics.

That is why it feels verbose. Every slide is carrying backup arguments because the deck does not trust itself.

The bigger problem is sequence. The room is being asked to care about `AGENTS.md`, `spec.md`, ingest, gates, and depth levels before it has a clean mental model of what AI is doing in the first place. A true beginner does not know what a prompt is, what context is, what the model sees, or why files change that. The deck acts like they do.

## pushback

**Pushback:** teaching `context window`, `tokens`, and `system prompt` by name too early will make this worse if you do it in builder language. Those labels are implementation details to a beginner.  
**Suggestion:** teach the behavior first in plain English, then optionally label it once. Example: "AI only responds to what it can currently see. The instructions come first. Then your question. Then any files it was allowed to read. That visible bundle is its working context." After that, if you want, say: "people call that bundle the context window."

## the real conceptual gaps

These are missing or too implicit in the current deck:

1. What AI is actually doing in a chat.
2. Why chat starts from zero.
3. What "read your files" means in plain English.
4. What comes first in the model's view of the world.
5. Why a file beats a remembered conversation.
6. What the win condition is for a complete beginner.

Right now the deck says "Zo reads your brain" before it cleanly explains what reading means.

## global problems

### 1. too many claims per slide

Nearly every slide has one headline, one body, one pull-line, and then an extra hidden thesis packed inside the body. That is why the copy feels swollen.

### 2. jargon arrives before the room earns it

`AGENTS.md`, `spec.md`, OCR, entities, provenance, graph, current truth, source, depth. Some of these are useful. None of them should arrive as raw nouns without translation.

### 3. the deck assumes curiosity where the room will feel threat

Non-technical people do not hear "knowledge graph" and think "cool." They hear "I am about to get lost."

### 4. the deck is explaining the method before proving the pain

Slide 2 is decent. After that, the deck rushes toward method. It needs one more beat that says what AI can and cannot see in a normal chat.

### 5. too much host burden

The live narration is doing heavy rescue work. That means the slides are under-explaining the beginner model and over-explaining the framework.

### 6. some slide labels are for the hosts, not the audience

"pick a depth," "ingest," "gates," "the loops that keep it alive." Those make sense once you already buy in. They are not first-contact language.

## slide-by-slide critique

## slide 1

Good title. Weak subhead.

"You already have a brain. Tonight we build it a second one your AI can read." is cute, but it still leaves a beginner asking what that means.

Cleaner version:

"AI is only useful when it can see the right information. Tonight you give it that information in files."

## slide 2

This is one of the better slides, but it still jumps too fast.

"The fix is files" is good. The room still needs the missing middle:

- what a normal chat can see,
- why that is not enough,
- why files persist.

You need one sentence like:

"In a normal chat, the model can only work from the instructions, your message, and whatever context you paste in right now."

That sentence may matter more than the Escher metaphor.

## slide 3

This slide is overloaded and abstract.

Problems:

- "external memory your AI can read, write, and reason over" is too dense for first contact.
- "plain Markdown" is unnecessary here.
- the five-part list is too much too early.

The audience does not need five categories before they understand the machine. They need a simpler stack:

1. instructions,
2. your question,
3. files the AI can read,
4. output.

The five-part brain model can come later, or be cut down to three.

## slide 4

The idea is strong. The phrase "current truth" is not beginner-safe on first read.

It sounds philosophical when it should sound practical.

Better label:

"Keep evidence separate from your working note."

Then later you can say the working note is what the spec calls current truth.

Also "citable" is the wrong word for this room. It sounds academic.

Better ending:

"Mix them together and you stop knowing what came from where."

## slide 5

Too long. Too many metaphors. Five questions on the same slide turns the recipe point into a wall of text.

This slide is doing two jobs:

1. no generic template,
2. five-question setup.

Split those, or compress brutally.

The audience does not need to read all five full questions on the deck if the live build is about to show them.

## slide 6

This is clear-ish, but "Intermediate" and "Pro" are pure bait for the wrong part of the brain.

It makes the hierarchy feel aspirational when you want Starter to feel correct.

Also "typed knowledge graph with provenance and checks" is dead on arrival in this room.

If this slide survives at all, it should probably be:

- small,
- medium,
- larger,
- advanced.

And even that may be unnecessary.

## slide 7

This slide is trying to explain routing, bounded context, citations, unknown handling, and the session log in one move. That is too much.

This is where you need the plain-English model:

"AI can only use what it can currently see. The instruction note tells it where to look next."

That is the meat.

The rest is host notes, not slide copy.

## slide 8

This is the worst offender.

It has:

- terminal setup,
- five questions,
- proposal logic,
- Starter reassurance,
- graph narration,
- frontmatter demo,
- gate cue.

That is not a slide. That is a runbook stuffed into a slide.

The frontmatter line needs to die for this workshop unless you are explicitly doing an advanced bonus beat. It is cool to us. It is noise to them.

## slide 9

"Ingest" is not beginner language.

The shelf example is good because it is physical and visible. The narration is bad because it instantly turns into OCR, entities, current-truth updates, and log append.

The room only needs this:

1. give Zo a source,
2. Zo pulls out useful facts,
3. Zo suggests where they belong,
4. you approve the change.

Everything else is host machinery.

## slide 10

The core idea is good and important. The copy is still one sentence too long.

Also six examples on screen is more than you need. Three is enough:

- replace a trusted note,
- send a message,
- publish something.

That teaches the idea without making the deck feel like a policy manual.

## slide 11

This is the best late slide. It still needs trimming.

The list is too long. Pick four:

- add a source,
- update one note,
- close one task,
- add one log line.

That is enough to teach maintenance.

## slide 12

This is serviceable, but the three links at the end dilute the emotional finish.

The close should end on one behavior:

"Tomorrow, add one line."

Everything else can live in the handout or follow-up.

## what to cut immediately

Cut these from the live deck unless you want an advanced appendix:

- plain Markdown
- typed knowledge graph
- provenance
- checks
- OCR
- entities
- frontmatter
- graph database
- citations
- citable
- full five-question list on a slide
- all six gate examples
- all eight loop examples

## what to introduce instead

If the audience has never touched AI, these are the concepts that actually need names:

### 1. instruction

The rule the AI is supposed to follow.

### 2. prompt

What you ask it right now.

### 3. working context

What the AI can currently see. The instructions, your prompt, and the files or text it was allowed to read.

### 4. file memory

Information that stays available after the chat ends.

### 5. approval gate

A moment where the AI stops and asks before changing something important.

That is enough. If you want to mention "context window," do it as a label after "working context" is already understood.

## recommended direction

Shrink the deck to 5 or 6 slides. Make the workshop do the heavy lifting. The slides should carry the mental model, the trust rule, the build move, the proof move, and the maintenance rule. Nothing else.

## option 1: 5-slide beginner-first recut

This is the one I would pick first.

### slide 1

**Headline:** Your AI can only help with what it can see.

**Body:** In a normal chat, it sees the instructions, your message, and whatever you paste in right now. When the chat ends, that context is gone.

**Pull-line:** Blank chat in, blank brain out.

### slide 2

**Headline:** Files fix that.

**Body:** Put the right information in a few simple files and your AI stops starting from zero. It can read the same project, people, and notes again tomorrow.

**Pull-line:** Files are memory that sticks.

### slide 3

**Headline:** Keep evidence separate from your working note.

**Body:** Raw notes are evidence. Your working note is what you trust today. One messy source should not quietly rewrite the note you act from.

**Pull-line:** Do not mix what happened with what you currently believe.

### slide 4

**Headline:** Start with one question and one folder.

**Body:** Tell Zo what this brain is for. Answer five plain questions. Let it propose a tiny file structure. Approve the plan. Done.

**Pull-line:** Tonight's win is a small brain that works.

### slide 5

**Headline:** Keep it alive with one line a day.

**Body:** Add one note. Update one task. Record one decision. That is enough. Small systems survive.

**Pull-line:** The system you can keep using beats the system that impressed you once.

### why this one works

It teaches the model before the method. It kills most jargon. It lets the demo do the showing.

## option 2: 6-slide "how AI actually works" recut

This is the clearest version if you really want to introduce prompt and context.

### slide 1

**Headline:** AI is not thinking about your life. It is responding to what it can currently see.

**Body:** That bundle usually includes instructions, your prompt, and any files or text it was allowed to read.

**Pull-line:** No context in, no context out.

### slide 2

**Headline:** A prompt is just your ask.

**Body:** "Help me plan this trip." "Summarize this note." "What am I working on?" The answer is only as good as what the model can see.

**Pull-line:** The prompt is the question. Context is the material.

### slide 3

**Headline:** Your files are the missing context.

**Body:** Project notes, people notes, decisions, and source notes give the AI something stable to read again tomorrow.

**Pull-line:** Chat is temporary. Files persist.

### slide 4

**Headline:** Keep evidence separate from your working note.

**Body:** This is how you stay sane when the AI is helpful but not perfect.

**Pull-line:** Source first. Then summary. Never backwards.

### slide 5

**Headline:** Build the smallest version tonight.

**Body:** One folder. A few files. Zo proposes the shape. You approve it.

**Pull-line:** Small is correct.

### slide 6

**Headline:** Make the AI stop before important changes.

**Body:** Replacing a trusted note, sending a message, and publishing something should all require approval.

**Pull-line:** Useful AI is supervised AI.

### why this one works

It teaches the beginner terms cleanly. It is the best option if the room truly starts at zero.

## option 3: 6-slide trust-first recut

This one is better if you think the room will be suspicious or privacy-sensitive.

### slide 1

**Headline:** AI gets weird when it has no memory.

**Body:** That is why people keep repeating themselves in chat.

**Pull-line:** Forgetful AI makes bad helpers.

### slide 2

**Headline:** Files give it memory. Gates keep it honest.

**Body:** You choose what it can read. You decide what it can change.

**Pull-line:** More context. More control.

### slide 3

**Headline:** Keep your evidence separate from your working note.

**Body:** Otherwise the system turns into a pile of half-truths.

**Pull-line:** Trace the fact back to the source.

### slide 4

**Headline:** Build a tiny brain first.

**Body:** One current note, one source note, one people note, one log. That is enough.

**Pull-line:** First useful beats fully designed.

### slide 5

**Headline:** Hand it one real source.

**Body:** A photo, transcript, or note goes in. Zo suggests what belongs where. You approve.

**Pull-line:** Source in. Structure out.

### slide 6

**Headline:** Tomorrow, add one line.

**Body:** That is how the system stays alive without becoming a second job.

**Pull-line:** Maintenance should feel boring and cheap.

### why this one works

It leads with the room's hidden fear. Control and trust. That may land better than the current conceptual build.

## option 4: 4-slide demo-led recut

This is the bold version. Very little deck. Heavy workshop.

### slide 1

**Headline:** AI only helps with what it can see.

**Body:** In a blank chat, it sees almost nothing about your real work.

### slide 2

**Headline:** Give it files, not repeated explanations.

**Body:** A few notes beat retelling your life every session.

### slide 3

**Headline:** Watch Zo build the first version.

**Body:** We answer five questions, Zo proposes a structure, and we approve it.

### slide 4

**Headline:** Keep sources separate. Keep gates on. Add one line tomorrow.

**Body:** That is the whole method.

### why this one works

Fastest version. Highest dependence on live delivery. Strong if the hosts are sharp. Dangerous if the room needs more scaffolding.

## my ranking

1. Option 2
2. Option 1
3. Option 3
4. Option 4

Option 2 is the best match for what you actually said. It introduces prompt and context cleanly without drowning the room in builder jargon.

## critique of my own recuts

### problem 1

I cut so hard that the current five-part brain model mostly disappears.

### fix

Keep it in the live build or handout, not the early deck.

### problem 2

Option 2 risks sounding a little classroom-like if the delivery is too careful.

### fix

Use physical examples fast. Trip planning, client work, family paperwork, bookshelf photo.

### problem 3

I still left "instructions" and "context" in play, which can drift back into jargon if you two get excited.

### fix

Give the hosts a one-line translation rule: every technical term must be followed by a normal-human version the first time it appears.

## next move

If you want, I should take Option 2 and turn it into a concrete replacement deck copy file at 5 or 6 slides, then we can cut it again from there.
