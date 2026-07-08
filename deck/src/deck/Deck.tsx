import { useCallback, useEffect, useState, type ReactElement } from "react";
type SlideComponent = () => ReactElement;

/**
 * Minimal Zo Brain: workshop slide deck.
 * 12 slides. "Build your second brain in two hours."
 * Nav: ArrowRight / Space advance, ArrowLeft back. Hash per slide (#slide-N).
 * Paper / teal / coral system. Sentence case, no em dashes.
 */

const TOTAL = 12;

const QUARTER: Record<number, string> = {
  1: "Q1 · Guided fundamentals",
  2: "Q1 · Guided fundamentals",
  3: "Q1 · Guided fundamentals",
  4: "Q1 · Guided fundamentals",
  5: "Q1 · Guided fundamentals",
  6: "Q1 · Guided fundamentals",
  7: "Q1 · Guided fundamentals",
  8: "Q2 · Build hands-on",
  9: "Q3 · Polish and deepen",
  10: "Q3 · Polish and deepen",
  11: "Q3 · Polish and deepen",
  12: "Q4 · Show and tell",
};

const SLIDES: { id: number; render: () => ReactElement }[] = [
  { id: 1, render: () => <SlideTitle /> },
  { id: 2, render: () => <SlideHook /> },
  { id: 3, render: () => <SlideFiveThings /> },
  { id: 4, render: () => <SlideOneRule /> },
  { id: 5, render: () => <SlideRecipe /> },
  { id: 6, render: () => <SlideDepths /> },
  { id: 7, render: () => <SlideZoReads /> },
  { id: 8, render: () => <SlideBuildAnchor /> },
  { id: 9, render: () => <SlideIngest /> },
  { id: 10, render: () => <SlideGates /> },
  { id: 11, render: () => <SlideLoops /> },
  { id: 12, render: () => <SlideClose /> },
];

export default function Deck() {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/slide-(\d+)/);
      if (m) {
        const n = parseInt(m[1], 10);
        setCurrent(Math.min(Math.max(n, 1), TOTAL));
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const go = useCallback((n: number) => {
    const next = Math.min(Math.max(n, 1), TOTAL);
    setCurrent(next);
    window.location.hash = `slide-${next}`;
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(current + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(current - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(1);
      } else if (e.key === "End") {
        e.preventDefault();
        go(TOTAL);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go]);

  const slide = SLIDES.find((s) => s.id === current)!;

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-[var(--d-canvas)] text-[var(--d-ink)]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {slide.render()}

      {/* chrome: quarter label, top-right, clear of content */}
      <div
        className="fixed right-8 top-8 z-20 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--d-slate)]"
        aria-hidden
      >
        {QUARTER[current]}
      </div>

      {/* chrome: counter + nav hint, bottom-right */}
      <div
        className="fixed bottom-8 right-8 z-20 flex items-center gap-4 font-mono text-[11px] text-[var(--d-slate)]"
        aria-hidden
      >
        <span className="tabular-nums">
          {String(current).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </span>
        <span className="h-3 w-px bg-[var(--d-line)]" />
        <span>← → navigate</span>
      </div>

      {/* progress bar */}
      <div
        className="fixed bottom-8 left-8 z-20 h-[2px] rounded-full bg-[var(--d-teal)] transition-all duration-300"
        style={{ width: `${(current / TOTAL) * 60}px` }}
        aria-hidden
      />
    </main>
  );
}

/* ---------- shared primitives ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--d-coral)]">
      {children}
    </p>
  );
}

function PullLine({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mt-10 flex items-start gap-4 border-l-2 border-[var(--d-coral)] pl-5 ${className}`}
    >
      <p
        className="text-[22px] font-medium leading-snug text-[var(--d-teal-dark)] md:text-[26px]"
        style={{ textWrap: "balance" } as React.CSSProperties}
      >
        {children}
      </p>
    </div>
  );
}

function ScreenCue({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--d-slate)]">
      <span className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--d-coral)]" />
      On screen · {children}
    </p>
  );
}

/** Right-side image panel used by image-led split slides. */
function ImagePanel({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-[var(--d-teal-panel)] px-10 py-14 md:w-[48%] ${className}`}
    >
      <div className="absolute inset-y-0 left-0 w-[6px] bg-[var(--d-teal)]" />
      <img
        src={src}
        alt={alt}
        className="max-h-[70vh] w-auto max-w-full rounded-[2px] object-contain shadow-[0_30px_60px_-20px_rgba(14,124,134,0.35)]"
      />
      {caption && (
        <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--d-teal-dark)]">
          {caption}
        </p>
      )}
    </div>
  );
}

function NumItem({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <li className="flex items-baseline gap-4">
      <span className="font-mono text-[14px] font-medium text-[var(--d-coral)] tabular-nums">
        {n}
      </span>
      <span className="text-[20px] leading-snug text-[var(--d-ink)] md:text-[22px]">
        {children}
      </span>
    </li>
  );
}

/* ---------- Slide 1: title ---------- */

function SlideTitle() {
  return (
    <section className="flex min-h-screen items-center px-16 pt-24 pb-20 md:px-24">
      <div className="absolute left-0 top-0 h-full w-[6px] bg-[var(--d-teal)]" />
      <div className="max-w-[1120px]">
        <Eyebrow>Workshop · July 16</Eyebrow>
        <h1
          className="mt-6 text-[64px] font-bold leading-[1.02] tracking-[-0.02em] text-[var(--d-ink)] md:text-[88px]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Build your second brain in two hours.
        </h1>
        <p
          className="mt-8 max-w-[760px] text-[26px] font-medium leading-snug text-[var(--d-slate)] md:text-[30px]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          You already have a brain. Tonight we build it a second one your AI can
          read.
        </p>

        <div className="mt-14 flex flex-col gap-1 font-mono text-[14px] text-[var(--d-ink)]">
          <div className="flex items-center gap-3">
            <span className="font-medium">Ethan Davidson</span>
            <span className="text-[var(--d-line)]">·</span>
            <span className="font-medium">Jeff Kazzee</span>
          </div>
          <span className="text-[var(--d-slate)]">Joanna Kurylo, hosting</span>
        </div>

        <div className="mt-16 max-w-[680px]">
          <PullLine>Your AI works better when it can read.</PullLine>
        </div>
      </div>
    </section>
  );
}

/* ---------- Slide 2: the hook ---------- */

function SlideHook() {
  return (
    <section className="flex min-h-screen items-stretch">
      <div className="flex w-full flex-col items-stretch md:flex-row">
        <div className="flex flex-col justify-center px-16 py-20 md:w-[52%] md:px-20">
          <Eyebrow>The hook</Eyebrow>
          <h2
            className="mt-6 text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--d-ink)] md:text-[54px]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Each hand draws the other. That's you and Zo.
          </h2>
          <p className="mt-7 max-w-[520px] text-[20px] leading-relaxed text-[var(--d-slate)] md:text-[22px]">
            You write files. Zo reads them. Zo helps you write better files. The
            loop runs both ways. Most people hand their AI a blank chat every
            morning and wonder why it starts from zero. The fix is not a bigger
            model. The fix is files.
          </p>
          <div className="mt-10 max-w-[520px]">
            <PullLine>Stop telling your AI the same thing over and over.</PullLine>
          </div>
        </div>
        <ImagePanel
          src="/images/slide-2-hands.jpg"
          alt="Two hands drawing each other in a recursive loop"
          className="md:w-[48%]"
        />
      </div>
    </section>
  );
}

/* ---------- Slide 3: five things ---------- */

function SlideFiveThings() {
  return (
    <section className="flex min-h-screen items-stretch">
      <div className="flex w-full flex-col items-stretch md:flex-row">
        <div className="flex flex-col justify-center px-16 py-16 md:w-[54%] md:px-20">
          <Eyebrow>What it is</Eyebrow>
          <h2
            className="mt-6 text-[38px] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--d-ink)] md:text-[46px]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            A second brain is external memory your AI can read, write, and reason
            over.
          </h2>
          <p className="mt-6 max-w-[560px] text-[18px] leading-relaxed text-[var(--d-slate)] md:text-[20px]">
            Not a notes app. Not a folder of screenshots you'll never open. A
            living workspace where your projects, people, decisions, and sources
            live as plain Markdown, and your agent treats them as context it can
            navigate. A brain is five things:
          </p>
          <ul className="mt-7 max-w-[560px] space-y-3">
            <NumItem n="01">Context areas. The parts of your life or work that deserve their own space.</NumItem>
            <NumItem n="02">Sources. The evidence behind what you believe.</NumItem>
            <NumItem n="03">Current truth. What you're willing to work from today.</NumItem>
            <NumItem n="04">Relationships. How the parts connect.</NumItem>
            <NumItem n="05">Memory. What changed, and what should survive the next session.</NumItem>
          </ul>
          <div className="mt-8 max-w-[560px]">
            <PullLine>
              Plain files plus one instruction file. Everything else is a feature
              you add later, if you add it at all.
            </PullLine>
          </div>
        </div>
        <ImagePanel
          src="/images/slide-3-five-things.jpg"
          alt="Five icons: a folder, a stack of documents, a checked page, connected nodes, and a clock"
          className="md:w-[46%]"
        />
      </div>
    </section>
  );
}

/* ---------- Slide 4: the one rule ---------- */

function SlideOneRule() {
  return (
    <section className="flex min-h-screen items-stretch">
      <div className="flex w-full flex-col items-stretch md:flex-row">
        <ImagePanel
          src="/images/slide-4-sources-truth.jpg"
          alt="A pile of documents kept separate from a single checked page"
          className="md:order-1 md:w-[46%]"
        />
        <div className="flex flex-col justify-center px-16 py-16 md:order-2 md:w-[54%] md:px-20">
          <Eyebrow>The one rule</Eyebrow>
          <h2
            className="mt-6 text-[40px] font-bold leading-[1.06] tracking-[-0.02em] text-[var(--d-ink)] md:text-[50px]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Keep your sources separate from your current truth.
          </h2>
          <p className="mt-7 max-w-[540px] text-[19px] leading-relaxed text-[var(--d-slate)] md:text-[21px]">
            Sources are evidence. Meeting notes, transcripts, emails, links.
            Current truth is what you'll act on right now. When one new source
            lands, you don't silently rewrite current truth. You flag the
            conflict and ask how to resolve it. Merge them and your brain becomes
            a pile of things-that-might-be-true, none of it citable.
          </p>
          <p className="mt-5 max-w-[540px] text-[19px] leading-relaxed text-[var(--d-slate)] md:text-[21px]">
            This is the rule that separates a brain from a scrapbook.
          </p>
          <div className="mt-8 max-w-[540px]">
            <PullLine>One source is not final truth.</PullLine>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Slide 5: recipe, not template ---------- */

function SlideRecipe() {
  return (
    <section className="flex min-h-screen items-stretch">
      <div className="flex w-full flex-col items-stretch md:flex-row">
        <div className="flex flex-col justify-center px-16 py-14 md:w-[50%] md:px-20">
          <Eyebrow>The recipe</Eyebrow>
          <h2
            className="mt-6 text-[38px] font-bold leading-[1.06] tracking-[-0.02em] text-[var(--d-ink)] md:text-[46px]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            We're not giving you a template. We're giving you a recipe.
          </h2>
          <p className="mt-6 max-w-[540px] text-[17px] leading-relaxed text-[var(--d-slate)] md:text-[19px]">
            A template freezes before it meets you. It hands you folders named
            "Areas" and "Resources" that mean nothing yet, because nothing about
            your life is in them. Then you spend your first hour decorating
            someone else's structure. The recipe is different. One file,
            spec.md. Zo reads it, asks you five questions, proposes a structure
            sized to what you actually do, and waits. Nothing is written until
            you approve the plan.
          </p>
          <div className="mt-8 max-w-[540px]">
            <PullLine>The method is fixed. The folder shape is yours.</PullLine>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-[var(--d-teal-panel)] px-12 py-14 md:w-[50%]">
          <div className="absolute inset-y-0 right-0 w-[6px] bg-[var(--d-teal)] md:right-auto md:left-0" />
          <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--d-teal-dark)]">
            spec.md · the five questions
          </p>
          <img
            src="/images/slide-5-recipe-template.jpg"
            alt="A rigid empty grid beside a flowing set of ingredients"
            className="mb-7 max-h-[26vh] w-auto max-w-full rounded-[2px] object-contain shadow-[0_20px_40px_-18px_rgba(14,124,134,0.3)]"
          />
          <ol className="space-y-3">
            <NumItem n="01">What should this brain organize first, and how deep?</NumItem>
            <NumItem n="02">What are your active projects, goals, and recurring areas?</NumItem>
            <NumItem n="03">Who are the people, teams, and communities connected to them?</NumItem>
            <NumItem n="04">What source material do you already have nearby?</NumItem>
            <NumItem n="05">What do you want Zo to help with, and what should it never do without your approval?</NumItem>
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Slide 6: pick a depth ---------- */

function SlideDepths() {
  const depths = [
    {
      n: "01",
      name: "Starter",
      body: "Four files, one context area, useful in minutes.",
    },
    {
      n: "02",
      name: "Beginner",
      body: "A light folder map for one to three areas.",
    },
    {
      n: "03",
      name: "Intermediate",
      body: "Separate-but-connected context across the parts of your life.",
    },
    {
      n: "04",
      name: "Pro",
      body: "A typed knowledge graph with provenance and checks.",
    },
  ];
  return (
    <section className="flex min-h-screen items-center px-16 pt-24 pb-24 md:px-24">
      <div className="max-w-[1200px]">
        <Eyebrow>Pick a depth</Eyebrow>
        <h2
          className="mt-6 text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--d-ink)] md:text-[56px]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Four depths. Start at the bottom. Change whenever.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {depths.map((d) => (
            <div
              key={d.n}
              className="flex items-baseline gap-6 border-l-2 border-[var(--d-teal)] bg-[var(--d-paper)] px-7 py-7"
            >
              <span className="font-mono text-[28px] font-medium text-[var(--d-coral)] tabular-nums">
                {d.n}
              </span>
              <div>
                <p className="text-[26px] font-bold tracking-[-0.01em] text-[var(--d-ink)] md:text-[30px]">
                  {d.name}
                </p>
                <p className="mt-2 text-[18px] leading-snug text-[var(--d-slate)] md:text-[20px]">
                  {d.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-[680px]">
          <PullLine>Starter can become Pro later. Pro on day one is a mistake.</PullLine>
        </div>
      </div>
    </section>
  );
}

/* ---------- Slide 7: how Zo reads your brain ---------- */

function SlideZoReads() {
  return (
    <section className="flex min-h-screen items-stretch">
      <div className="flex w-full flex-col items-stretch md:flex-row">
        <div className="flex flex-col justify-center px-16 py-16 md:w-[54%] md:px-20">
          <Eyebrow>How Zo reads</Eyebrow>
          <h2
            className="mt-6 text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--d-ink)] md:text-[50px]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Zo reads the index first. Not the whole brain.
          </h2>
          <ScreenCue>AGENTS.md left, Zo chat right, log.md scrolling below</ScreenCue>
          <p className="mt-6 max-w-[560px] text-[18px] leading-relaxed text-[var(--d-slate)] md:text-[20px]">
            AGENTS.md is the entry point. It tells Zo where to look. Zo follows
            the links it finds, reads the smallest set of notes that could answer
            you, cites the files it used, marks what it doesn't know, and
            suggests one smallest useful next action. You don't re-explain your
            world every session. The brain scales because Zo only sees what it
            needs when it needs it.
          </p>
          <p className="mt-5 max-w-[560px] text-[18px] leading-relaxed text-[var(--d-slate)] md:text-[20px]">
            The log is the cheapest continuity move in the system: one line per
            session, append-only, and Zo reads it next time to remember where you
            left off. People skip it because it feels small. It is not small. It
            is the difference between a brain and a pile of files.
          </p>
          <div className="mt-8 max-w-[560px]">
            <PullLine>
              Zo doesn't guess. It reads. Write Unknown when a fact is missing.
              Do not invent the gap.
            </PullLine>
          </div>
        </div>
        <ImagePanel
          src="/images/slide-7-zo-reads.jpg"
          alt="A lit central node branching to a few selected nodes through a dim network"
          caption="AGENTS.md"
          className="md:w-[46%]"
        />
      </div>
    </section>
  );
}

/* ---------- Slide 8: build anchor ---------- */

function SlideBuildAnchor() {
  const questions = [
    "What should this brain organize first, and how deep?",
    "What are your active projects, goals, and recurring areas?",
    "Who are the people, teams, and communities connected to them?",
    "What source material do you already have nearby?",
    "What do you want Zo to help with, and what should it never do without your approval?",
  ];
  return (
    <section className="flex min-h-screen items-center px-16 pt-24 pb-24 md:px-24">
      <div className="grid w-full max-w-[1240px] gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center">
          <Eyebrow>Build, hands-on</Eyebrow>
          <h2
            className="mt-6 text-[36px] font-bold leading-[1.07] tracking-[-0.02em] text-[var(--d-ink)] md:text-[44px]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Your brain now exists. Answer the five questions. Watch Zo propose
            your structure.
          </h2>
          <ScreenCue>terminal · mkdir -p brain · Zo chat panel beside</ScreenCue>
          <p className="mt-6 max-w-[480px] text-[18px] leading-relaxed text-[var(--d-slate)] md:text-[20px]">
            One folder. One file. That's the whole first move. Paste the five
            questions into Zo. Answer them the way you actually talk. Three to
            five minutes. Zo reads your answers and proposes a file list sized to
            what you said. Not a default. Not a template. A plan you can approve
            or change. Stuck? Pick Starter. Four files is enough to win tonight.
          </p>
          <div className="mt-8 max-w-[480px]">
            <PullLine>
              Empty is the correct starting state. You don't build the graph. You
              write the links.
            </PullLine>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="overflow-hidden rounded-[6px] border border-[var(--d-line)] bg-[var(--d-paper)] shadow-[0_24px_50px_-22px_rgba(14,124,134,0.3)]">
            <div className="flex items-center gap-2 border-b border-[var(--d-line)] bg-[var(--d-canvas)] px-4 py-3">
              <span className="h-[10px] w-[10px] rounded-full bg-[var(--d-coral)]/70" />
              <span className="h-[10px] w-[10px] rounded-full bg-[var(--d-teal)]/50" />
              <span className="h-[10px] w-[10px] rounded-full bg-[var(--d-slate)]/30" />
              <span className="ml-3 font-mono text-[12px] text-[var(--d-slate)]">
                brain · spec.md
              </span>
            </div>
            <div className="px-7 py-7 font-mono">
              <p className="text-[13px] text-[var(--d-teal-dark)]">
                $ mkdir -p brain
              </p>
              <p className="mt-1 text-[13px] text-[var(--d-slate)]">
                # paste the five questions
              </p>
              <ol className="mt-5 space-y-4">
                {questions.map((q, i) => (
                  <li key={i} className="flex items-baseline gap-3">
                    <span className="text-[13px] text-[var(--d-coral)] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-snug text-[var(--d-ink)] md:text-[17px]">
                      {q}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <p className="mt-5 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--d-coral)]">
            <span className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--d-coral)]" />
            Gate cue · thumbs up in chat when you see a proposed file list
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Slide 9: ingest anchor ---------- */

function SlideIngest() {
  return (
    <section className="flex min-h-screen items-stretch">
      <div className="flex w-full flex-col items-stretch md:flex-row">
        <div className="flex flex-col justify-center px-16 py-16 md:w-[52%] md:px-20">
          <Eyebrow>Ingest, live</Eyebrow>
          <h2
            className="mt-6 text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--d-ink)] md:text-[50px]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Hand Zo a source. Watch it become structure.
          </h2>
          <ScreenCue>DVD shelf photo · OCR output · second-brain entry</ScreenCue>
          <p className="mt-6 max-w-[520px] text-[19px] leading-relaxed text-[var(--d-slate)] md:text-[21px]">
            A photo of your shelf. Zo runs OCR, pulls out the titles, enriches
            them into entities, and writes second-brain-ready entries you can
            approve. This is the ingest loop in one move: identify the source,
            find where it belongs, extract the facts, propose current-truth
            updates separately from the source, append the log. You watch your
            brain eat something real and turn it into something citeable.
          </p>
          <div className="mt-8 max-w-[520px]">
            <PullLine>
              Current truth never changes silently because a source arrived.
            </PullLine>
          </div>
        </div>
        <ImagePanel
          src="/images/slide-9-source-to-structure.jpg"
          alt="A book shelf transforming into a grid of labeled cards"
          caption="source → structure"
          className="md:w-[48%]"
        />
      </div>
    </section>
  );
}

/* ---------- Slide 10: gates ---------- */

function SlideGates() {
  const gates = [
    "Replace a trusted note",
    "Send a message",
    "Publish",
    "Delete",
    "Spend",
    "Contact anyone",
  ];
  return (
    <section className="flex min-h-screen items-center px-16 pt-24 pb-24 md:px-24">
      <div className="max-w-[1100px]">
        <Eyebrow>Gates</Eyebrow>
        <h2
          className="mt-6 text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--d-ink)] md:text-[58px]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Gates are where Zo stops and asks.
        </h2>
        <p className="mt-7 max-w-[720px] text-[20px] leading-relaxed text-[var(--d-slate)] md:text-[22px]">
          A gate is a checkpoint. The agent pauses before it replaces a trusted
          note, sends a message, publishes, deletes, spends, or contacts anyone.
          Both of us use them. They're the reason a brain you own doesn't become
          a brain that runs your life without you. You decide what needs
          approval. The spec bakes it in: ask before replacing trusted notes, ask
          before any external action.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {gates.map((g) => (
            <span
              key={g}
              className="rounded-full border border-[var(--d-teal)]/40 bg-[var(--d-teal-panel)] px-5 py-2 font-mono text-[14px] text-[var(--d-teal-dark)]"
            >
              {g}
            </span>
          ))}
        </div>
        <div className="mt-10 max-w-[720px]">
          <PullLine>The brain works for you. Not the other way around.</PullLine>
        </div>
      </div>
    </section>
  );
}

/* ---------- Slide 11: the loops that keep it alive ---------- */

function SlideLoops() {
  const loops = [
    "Add a source",
    "Update a current-truth line",
    "Record a decision",
    "Close a task",
    "Add a link",
    "Fix a relationship",
    "Update the index",
    "Append a log entry",
  ];
  return (
    <section className="flex min-h-screen items-stretch">
      <div className="flex w-full flex-col items-stretch md:flex-row">
        <ImagePanel
          src="/images/slide-11-loops.jpg"
          alt="A spiral of dots accumulating over time, one dot highlighted"
          className="md:order-1 md:w-[44%]"
        />
        <div className="flex flex-col justify-center px-16 py-16 md:order-2 md:w-[56%] md:px-20">
          <Eyebrow>The loops that keep it alive</Eyebrow>
          <h2
            className="mt-6 text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--d-ink)] md:text-[50px]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            One small compounding update per session.
          </h2>
          <p className="mt-6 max-w-[560px] text-[18px] leading-relaxed text-[var(--d-slate)] md:text-[20px]">
            That's the maintenance loop. The brain doesn't die because it got too
            big. It dies because nobody added one line today. Looping, dreaming,
            and automations are next week, not tonight. If you only finished the
            build tonight, you win. These compound later.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {loops.map((l) => (
              <span
                key={l}
                className="rounded-[3px] border border-[var(--d-line)] bg-[var(--d-paper)] px-3.5 py-1.5 font-mono text-[13px] text-[var(--d-ink)]"
              >
                {l}
              </span>
            ))}
          </div>
          <div className="mt-8 max-w-[560px]">
            <PullLine>
              The brain that gets one line a day outlives the brain that got a
              hundred on day one.
            </PullLine>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Slide 12: close ---------- */

function SlideClose() {
  const links = [
    {
      label: "spec gist",
      url: "gist.github.com/Jeff-Kazzee/f5409e0f20b0a7c71560d2353a9df02a",
    },
    {
      label: "repo",
      url: "github.com/Jeff-Kazzee/zo-computer-second-brain",
    },
    {
      label: "workshop repo",
      url: "github.com/Jeff-Kazzee/2nd-brain-build-hour",
    },
  ];
  return (
    <section className="flex min-h-screen items-center px-16 pt-24 pb-24 md:px-24">
      <div className="max-w-[1100px]">
        <Eyebrow>Show and tell</Eyebrow>
        <h2
          className="mt-6 text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--d-ink)] md:text-[52px]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          You came in with a blank chat. You're leaving with a brain Zo can read.
        </h2>
        <p className="mt-7 max-w-[720px] text-[19px] leading-relaxed text-[var(--d-slate)] md:text-[21px]">
          Open your brain. Find the line that surprised you, or the file that made
          the method click. Paste it in the chat. We'll pick a few to look at.
          We're looking for interesting approaches, not perfect systems. Every
          brain in this room is a draft. That's the point. One question for each
          of you on the way out: what will you add tomorrow?
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={`https://${l.url}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-baseline gap-3 border-b border-[var(--d-line)] pb-1 font-mono text-[15px] text-[var(--d-ink)] transition-colors hover:border-[var(--d-teal)]"
            >
              <span className="uppercase tracking-[0.16em] text-[var(--d-coral)]">
                {l.label}
              </span>
              <span className="text-[var(--d-slate)] group-hover:text-[var(--d-teal-dark)]">
                {l.url}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-12 max-w-[720px]">
          <PullLine>
            Start in minutes. Grow into a knowledge system only when you want to.
          </PullLine>
        </div>
      </div>
    </section>
  );
}
