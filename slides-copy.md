# Minimal Zo Brain: workshop slide deck copy

Tasteful teaching deck for the July 16 "Build Your Second Brain in Two Hours" workshop. Two hosts (Ethan Davidson, Jeff Kazzee), four quarters, non-technical audience. Built from spec.md (Jeff-Kazzee/zo-computer-second-brain) plus the full planning trail: Gemini notes 6/19, 6/24, 6/26, 6/29, 7/3; the run of show; cue cards; concept files in the forked repo (Jeff-Kazzee/2nd-brain-build-hour).

12 slides. The concept is simple: your AI works better when it can read your files, here's the shape, here's how Zo builds it with you. Each slide carries one complete idea and one line worth screenshotting. Workshop activities (live build, demos, show-and-tell) run on anchor slides the host narrates over, not a content slide per sub-step.

Voice-gated: no em dashes, sentence case headers, no banned words, no negative parallelism, ranked positions, defensive specificity, burstiness. Spoken teaching copy, a touch more out-loud than the spec site, still Jeff.

Host narration frames that are NOT slides (Ethan and Jeff carry these in speech over the anchor slides):
- Ethan's Four C's (Context, Connection, Capabilities, Cadence). Re-states slides 3-5; the cadence point folds into slide 11.
- Ethan's three levels (core context / routing / growth). Different axis from the four depths and confuses both. Drop from the deck, keep in host notes if Ethan wants it.
- Semantic frontmatter demo (type: schema:Person, schema:knows). This is a live demo, not a slide. Runs over the build anchor (slide 9) or the ingest anchor (slide 10).
- Show-and-tell. Runs over the close (slide 12). No slide needed.

---

## Q1: Guided fundamentals (30 min)

### Slide 1: title

**On screen:** Event title. Host names: Ethan Davidson, Jeff Kazzee. Joanna Kurylo hosting/producing.

**Headline:** Build your second brain in two hours.

**Subhead:** You already have a brain. Tonight we build it a second one your AI can read.

**Pull-line:** Your AI works better when it can read.

---

### Slide 2: the hook (Ethan, opening)

**On screen:** M.C. Escher, Drawing Hands. Two hands drawing each other.

**Headline:** Each hand draws the other. That's you and Zo.

**Body:** You write files. Zo reads them. Zo helps you write better files. The loop runs both ways. Most people hand their AI a blank chat every morning and wonder why it starts from zero. The fix is not a bigger model. The fix is files.

**Pull-line:** Stop telling your AI the same thing over and over.

---

### Slide 3: what it is, and the five things it's made of (Ethan + Jeff)

**Headline:** A second brain is external memory your AI can read, write, and reason over.

**Body:** Not a notes app. Not a folder of screenshots you'll never open. A living workspace where your projects, people, decisions, and sources live as plain Markdown, and your agent treats them as context it can navigate. On Zo the primitives are already there. We're adding the structure that makes them useful over time. A brain is five things:

- Context areas. The parts of your life or work that deserve their own space.
- Sources. The evidence behind what you believe.
- Current truth. What you're willing to work from today.
- Relationships. How the parts connect.
- Memory. What changed, and what should survive the next session.

**Pull-line:** Plain files plus one instruction file. Everything else is a feature you add later, if you add it at all.

---

### Slide 4: the one rule that keeps it honest (Jeff)

**Headline:** Keep your sources separate from your current truth.

**Body:** Sources are evidence. Meeting notes, transcripts, emails, links. Current truth is what you'll act on right now. When one new source lands, you don't silently rewrite current truth. You flag the conflict and ask how to resolve it. Merge them and your brain becomes a pile of things-that-might-be-true, none of it citable. This is the rule that separates a brain from a scrapbook.

**Pull-line:** One source is not final truth.

---

### Slide 5: the recipe, not the template (Jeff)

**On screen:** SPEC.md open in an editor.

**Headline:** We're not giving you a template. We're giving you a recipe.

**Body:** A template freezes before it meets you. It hands you folders named "Areas" and "Resources" that mean nothing yet, because nothing about your life is in them. Then you spend your first hour decorating someone else's structure. The recipe is different. One file, spec.md. Zo reads it, asks you five questions, proposes a structure sized to what you actually do, and waits. Nothing is written until you approve the plan.

**The five questions:** What should this brain organize first, and how deep? What are your active projects, goals, and recurring areas? Who are the people, teams, and communities connected to them? What source material do you already have nearby? What do you want Zo to help with, and what should it never do without your approval?

**Pull-line:** The method is fixed. The folder shape is yours.

---

### Slide 6: pick a depth (Jeff)

**Headline:** Four depths. Start at the bottom. Change whenever.

**Body:**
- Starter. Four files, one context area, useful in minutes.
- Beginner. A light folder map for one to three areas.
- Intermediate. Separate-but-connected context across the parts of your life.
- Pro. A typed knowledge graph with provenance and checks.

**Pull-line:** Starter can become Pro later. Pro on day one is a mistake.

---

### Slide 7: how Zo reads your brain (Jeff, demo preview)

**On screen:** Live split. AGENTS.md on the left, Zo chat on the right. log.md scrolling below.

**Headline:** Zo reads the index first. Not the whole brain.

**Body:** AGENTS.md is the entry point. It tells Zo where to look. Zo follows the links it finds, reads the smallest set of notes that could answer you, cites the files it used, marks what it doesn't know, and suggests one smallest useful next action. You don't re-explain your world every session. You don't load everything up front. The brain scales because Zo only sees what it needs when it needs it. The log is the cheapest continuity move in the system: one line per session, append-only, and Zo reads it next time to remember where you left off. People skip it because it feels small. It is not small. It is the difference between a brain and a pile of files.

**Pull-line:** Zo doesn't guess. It reads. Write Unknown when a fact is missing. Do not invent the gap.

---

## Q2: Build hands-on (30 min)

### Slide 8: build anchor (Ethan + Jeff)

**On screen:** Terminal. `mkdir -p brain`. Then the five questions, large. Zo chat panel beside them.

**Headline:** Your brain now exists. Answer the five questions. Watch Zo propose your structure.

**Body:** One folder. One file. That's the whole first move. Paste the five questions into Zo. Answer them the way you actually talk. Three to five minutes. Zo reads your answers and proposes a file list sized to what you said. Not a default. Not a template. A plan you can approve or change. Stuck? Pick Starter. Four files is enough to win tonight.

**Host narration over this slide (not separate slides):**
- Write three files: profile.md (name, role, one thing Zo should know), current.md (one active project, one goal, one question you're sitting on), people/yourname.md (one person, linked).
- Link profile to the person page. Link current to projects. Ask Zo "what am I working on?" and watch it follow the links.
- Add a line of frontmatter (type: schema:Person, schema:knows: wiki:Someone). You write the link once. Zo reads it and starts traversing. You don't maintain a graph database.

**Gate cue:** Everyone should see a proposed file list on their screen. Thumbs up in chat when you do.

**Pull-line:** Empty is the correct starting state. You don't build the graph. You write the links.

---

## Q3: Polish and deepen (30 min)

### Slide 9: ingest anchor (Ethan or Jeff, tangible demo)

**On screen:** Photo of a DVD shelf. Then OCR output. Then the second-brain entry Zo produces.

**Headline:** Hand Zo a source. Watch it become structure.

**Body:** A photo of your shelf. Zo runs OCR, pulls out the titles, enriches them into entities, and writes second-brain-ready entries you can approve. This is the ingest loop in one move: identify the source, find where it belongs, extract the facts, propose current-truth updates separately from the source, append the log. You watch your brain eat something real and turn it into something citeable.

**Pull-line:** Current truth never changes silently because a source arrived.

---

### Slide 10: gates (Jeff)

**Headline:** Gates are where Zo stops and asks.

**Body:** A gate is a checkpoint. The agent pauses before it replaces a trusted note, sends a message, publishes, deletes, spends, or contacts anyone. Both of us use them. They're the reason a brain you own doesn't become a brain that runs your life without you. You decide what needs approval. The spec bakes it in: ask before replacing trusted notes, ask before any external action.

**Pull-line:** The brain works for you. Not the other way around.

---

### Slide 11: the loops that keep it alive (Jeff)

**Headline:** One small compounding update per session.

**Body:** Add a source. Update a current-truth line. Record a decision. Close a task. Add a link. Fix a relationship. Update the index. Append a log entry. That's the maintenance loop. The brain doesn't die because it got too big. It dies because nobody added one line today. Looping, dreaming, and automations are next week, not tonight. If you only finished the build tonight, you win. These compound later.

**Pull-line:** The brain that gets one line a day outlives the brain that got a hundred on day one.

---

## Q4: Show and tell (15 min)

### Slide 12: close (Ethan + Jeff)

**On screen:** The repo. The spec gist. Host names. Chat prompt for show-and-tell.

**Headline:** You came in with a blank chat. You're leaving with a brain Zo can read.

**Body:** Open your brain. Find the line that surprised you, or the file that made the method click. Paste it in the chat. We'll pick a few to look at. We're looking for interesting approaches, not perfect systems. Every brain in this room is a draft. That's the point. One question for each of you on the way out: what will you add tomorrow?

**Links:** spec gist → gist.github.com/Jeff-Kazzee/f5409e0f20b0a7c71560d2353a9df02a · repo → github.com/Jeff-Kazzee/zo-computer-second-brain · workshop repo → github.com/Jeff-Kazzee/2nd-brain-build-hour

**Pull-line:** Start in minutes. Grow into a knowledge system only when you want to.
