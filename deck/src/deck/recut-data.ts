export type RecutSlide = {
  eyebrow: string;
  headline: string;
  body: string;
  pull: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  screenCue?: string;
};

export type RecutVariant = {
  slug: string;
  title: string;
  shortLabel: string;
  stance: string;
  slideCount: number;
  recommendation: string;
  hero: string;
  heroAlt: string;
  slides: RecutSlide[];
};

export const recutVariants: RecutVariant[] = [
  {
    slug: "context-first",
    title: "Context first",
    shortLabel: "best overall",
    stance: "Starts with the machine model. Best if the room knows almost nothing about AI.",
    slideCount: 5,
    recommendation: "This is the strongest all-around teaching cut.",
    hero: "/images/recut-01-instructional-cutaway.png",
    heroAlt: "Instructional cutaway illustration",
    slides: [
      {
        eyebrow: "Slide 1",
        headline: "AI can only help with what it can currently see.",
        body:
          "In a normal chat, the model works from the instructions it was given, the question you ask, and whatever text or files it can read right now. If your real context is missing, it fills the gap with guesses.",
        pull: "No context in. No context out.",
        image: "/images/recut-01-instructional-cutaway.png",
        imageAlt: "AI reading a small visible stack of information",
      },
      {
        eyebrow: "Slide 2",
        headline: "The prompt is the ask. The context is the material.",
        body:
          "“Help me plan this trip” is a prompt. Your dates, budget, preferences, and old notes are context. Same prompt, different context, different answer. That is why people keep repeating themselves to chat tools.",
        bullets: [
          "Prompt: what you want",
          "Context: what the model gets to work with",
          "Files: context that survives tomorrow",
        ],
        pull: "Better answers come from better context.",
      },
      {
        eyebrow: "Slide 3",
        headline: "Files give AI memory that survives the chat.",
        body:
          "A few simple files beat re-explaining your life every session. One working note. A few source notes. A few people or project notes. The point is not more notes. The point is stable context the model can read again later.",
        image: "/images/recut-02-paper-memory-collage.png",
        imageAlt: "Paper memory collage illustration",
        pull: "Chat fades. Files persist.",
      },
      {
        eyebrow: "Slide 4",
        headline: "Keep evidence separate from your working note.",
        body:
          "Raw notes, transcripts, links, and screenshots are evidence. Your working note is the version you trust today. One messy source should not quietly rewrite the note you act from. Keep them separate and the system stays honest.",
        image: "/images/recut-03-evidence-vs-working-note.png",
        imageAlt: "Evidence and working note split illustration",
        pull: "Do not mix what happened with what you currently believe.",
      },
      {
        eyebrow: "Slide 5",
        headline: "Tonight's win is small on purpose.",
        body:
          "One folder. Five plain answers. Zo proposes a file list sized to your real life. You approve the plan. If you get stuck, start with four files.",
        bullets: [
          "Build small",
          "Ask before important changes",
          "Add one line tomorrow",
        ],
        screenCue: "One folder. Five answers. Proposed file list.",
        pull: "Small is correct.",
      },
    ],
  },
  {
    slug: "trust-first",
    title: "Trust first",
    shortLabel: "safest room",
    stance: "Starts with skepticism and control. Best if the room is uneasy about AI touching their files.",
    slideCount: 5,
    recommendation: "Use this if privacy and trust are the biggest room risk.",
    hero: "/images/recut-03-evidence-vs-working-note.png",
    heroAlt: "Evidence versus working note illustration",
    slides: [
      {
        eyebrow: "Slide 1",
        headline: "AI guesses when key facts are missing.",
        body:
          "That is not magic. That is the machine doing its best with thin information. If you only give it a vague request, you get a vague answer back.",
        pull: "Bad context feels like bad AI.",
        image: "/images/recut-01-instructional-cutaway.png",
        imageAlt: "Machine model illustration",
      },
      {
        eyebrow: "Slide 2",
        headline: "Reading files is permission, not magic.",
        body:
          "Zo is not psychic. It reads what you put in the workspace and what the instruction note points it toward. It should load the smallest useful set, not your whole life at once.",
        bullets: [
          "You decide the files",
          "The instruction note points the way",
          "The model only works with what it can read",
        ],
        pull: "Useful AI is routed AI.",
      },
      {
        eyebrow: "Slide 3",
        headline: "Keep evidence and the working note apart.",
        body:
          "A meeting note is not the same thing as the note you act from. The first one records what showed up. The second one says what you trust right now. That split is where trust comes from.",
        image: "/images/recut-03-evidence-vs-working-note.png",
        imageAlt: "Split note illustration",
        pull: "One source does not get to overrule reality by itself.",
      },
      {
        eyebrow: "Slide 4",
        headline: "Make it ask before important changes.",
        body:
          "Replacing a trusted note, sending a message, and publishing something should all require approval. That is how you keep the system useful without letting it get cute.",
        image: "/images/recut-04-supervised-machine.png",
        imageAlt: "Supervised machine illustration",
        pull: "The brain works for you.",
      },
      {
        eyebrow: "Slide 5",
        headline: "Then keep it alive with one small move.",
        body:
          "Add one source. Update one note. Close one task. Add one log line. The small brain you keep will beat the big brain you abandon every time.",
        pull: "Control first. Small upkeep second.",
      },
    ],
  },
  {
    slug: "workshop-first",
    title: "Workshop first",
    shortLabel: "most practical",
    stance: "Starts with tonight's outcome and keeps the room moving toward first success.",
    slideCount: 6,
    recommendation: "Use this if you want the strongest live-workshop pacing.",
    hero: "/images/recut-02-paper-memory-collage.png",
    heroAlt: "Paper memory collage illustration",
    slides: [
      {
        eyebrow: "Slide 1",
        headline: "Tonight you are not building a life system.",
        body:
          "You are building a small workspace your AI can read. That is the whole job. If you leave with a useful starting point, the workshop worked.",
        pull: "The win condition is first success, not completeness.",
      },
      {
        eyebrow: "Slide 2",
        headline: "One folder. Five answers. Zo proposes the shape.",
        body:
          "You answer five plain questions about what matters, what is active, who is involved, what source material you already have, and what the AI should never do without approval.",
        screenCue: "Live build with the five questions on screen.",
        pull: "You do not start from a generic template.",
      },
      {
        eyebrow: "Slide 3",
        headline: "Starter is four files, not forty.",
        body:
          "This room does not need a graph. It needs a sane starting point. A working note, a people note, source notes, and a log are enough to get value tonight.",
        bullets: [
          "working note",
          "people note",
          "sources",
          "log",
        ],
        image: "/images/recut-02-paper-memory-collage.png",
        imageAlt: "Approachable file collage",
        pull: "Starter is the smart move.",
      },
      {
        eyebrow: "Slide 4",
        headline: "The machine still needs context.",
        body:
          "A prompt is only the ask. The working note, the source notes, and the files around them are what make the answer good. That is why the folder exists at all.",
        image: "/images/recut-01-instructional-cutaway.png",
        imageAlt: "Instructional cutaway",
        pull: "The folder is there so the model can stop starting cold.",
      },
      {
        eyebrow: "Slide 5",
        headline: "Hand Zo a source. Watch it suggest structure.",
        body:
          "A shelf photo, a transcript, or a messy note can become extracted facts, a source note, and a suggested update to the working note. You still approve the move.",
        screenCue: "Source in. Suggested structure out.",
        pull: "Source in. Suggestion out. Approval in the middle.",
      },
      {
        eyebrow: "Slide 6",
        headline: "Keep control, then keep going.",
        body:
          "Ask before replacing a trusted note, sending a message, or publishing something. Then tomorrow, add one line. That is enough to keep the system alive.",
        image: "/images/recut-04-supervised-machine.png",
        imageAlt: "Supervised machine",
        pull: "Useful AI is supervised AI.",
      },
    ],
  },
  {
    slug: "four-slide-cut",
    title: "Four-slide cut",
    shortLabel: "hard cut",
    stance: "The most aggressive trim. Good if you want the deck to stay out of the way of the live build.",
    slideCount: 4,
    recommendation: "Use this only if the hosts can carry more of the room verbally.",
    hero: "/images/recut-04-supervised-machine.png",
    heroAlt: "Supervised machine illustration",
    slides: [
      {
        eyebrow: "Slide 1",
        headline: "AI only helps with what it can see.",
        body:
          "Instructions. Your question. The files it can read right now. That bundle is all the model gets. Missing context becomes guesses.",
        image: "/images/recut-01-instructional-cutaway.png",
        imageAlt: "Instructional cutaway",
        pull: "No context in. No context out.",
      },
      {
        eyebrow: "Slide 2",
        headline: "Files are how context survives the chat.",
        body:
          "A few simple files beat repeating yourself every session. The point is stable memory the model can revisit, not a giant note archive.",
        image: "/images/recut-02-paper-memory-collage.png",
        imageAlt: "Paper memory collage",
        pull: "Chat fades. Files persist.",
      },
      {
        eyebrow: "Slide 3",
        headline: "Keep evidence separate from the note you act from.",
        body:
          "Meeting notes, links, photos, and transcripts are evidence. Your working note is what you trust today. Keep the split and the system stays honest.",
        image: "/images/recut-03-evidence-vs-working-note.png",
        imageAlt: "Evidence versus working note",
        pull: "Do not mix what happened with what you currently believe.",
      },
      {
        eyebrow: "Slide 4",
        headline: "Build small. Ask before important changes. Add one line tomorrow.",
        body:
          "That is the whole workshop in one sentence. One folder. Five answers. A small file list. Approval before trusted changes. Then one tiny upkeep move the next day.",
        image: "/images/recut-04-supervised-machine.png",
        imageAlt: "Supervised machine",
        pull: "Small is correct.",
      },
    ],
  },
];

export function getRecutVariant(slug: string) {
  return recutVariants.find((variant) => variant.slug === slug);
}
