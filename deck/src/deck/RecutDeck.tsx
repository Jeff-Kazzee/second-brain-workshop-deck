import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { RecutVariant } from "./recut-data";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--d-coral)]">
      {children}
    </p>
  );
}

function PullLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 flex items-start gap-4 border-l-2 border-[var(--d-coral)] pl-5">
      <p
        className="text-[22px] font-medium leading-snug text-[var(--d-teal-dark)] md:text-[26px]"
        style={{ textWrap: "balance" } as CSSProperties}
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

export default function RecutDeck({ variant }: { variant: RecutVariant }) {
  const total = variant.slides.length;
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const apply = () => {
      const match = window.location.hash.match(/slide-(\d+)/);
      if (!match) {
        setCurrent(1);
        return;
      }
      const next = Number.parseInt(match[1], 10);
      setCurrent(Math.min(Math.max(next, 1), total));
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [total]);

  const go = useCallback(
    (next: number) => {
      const bounded = Math.min(Math.max(next, 1), total);
      setCurrent(bounded);
      window.location.hash = `slide-${bounded}`;
    },
    [total],
  );

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
        go(total);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go, total]);

  const slide = variant.slides[current - 1];
  const hasImage = Boolean(slide.image);

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-[var(--d-canvas)] text-[var(--d-ink)]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <section className="flex min-h-screen items-stretch">
        <div className="absolute left-0 top-0 h-full w-[6px] bg-[var(--d-teal)]" />
        <div className={`flex w-full ${hasImage ? "flex-col md:flex-row" : "flex-col"}`}>
          <div
            className={`flex flex-col justify-center px-16 py-24 ${
              hasImage ? "md:w-[52%] md:px-20" : "mx-auto max-w-[1120px] md:px-24"
            }`}
          >
            <Eyebrow>{slide.eyebrow}</Eyebrow>
            <h1
              className="mt-6 text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--d-ink)] md:text-[60px]"
              style={{ textWrap: "balance" } as CSSProperties}
            >
              {slide.headline}
            </h1>
            <p
              className="mt-7 max-w-[760px] text-[23px] leading-[1.45] text-[var(--d-slate)] md:text-[28px]"
              style={{ textWrap: "pretty" } as CSSProperties}
            >
              {slide.body}
            </p>
            {slide.bullets && (
              <ul className="mt-8 space-y-4">
                {slide.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-4 text-[20px] leading-snug md:text-[24px]">
                    <span className="mt-[11px] inline-block h-2.5 w-2.5 rounded-full bg-[var(--d-coral)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {slide.screenCue && <ScreenCue>{slide.screenCue}</ScreenCue>}
            <PullLine>{slide.pull}</PullLine>
          </div>

          {hasImage && (
            <div className="relative flex items-center justify-center bg-[var(--d-teal-panel)] px-10 py-14 md:w-[48%]">
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="max-h-[72vh] w-auto max-w-full rounded-[2px] object-contain shadow-[0_30px_60px_-20px_rgba(14,124,134,0.35)]"
              />
            </div>
          )}
        </div>
      </section>

      <div className="fixed left-8 top-8 z-20">
        <Link
          to="/recuts"
          className="rounded-full border border-[var(--d-line)] bg-white/80 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--d-slate)] transition hover:border-[var(--d-teal)] hover:text-[var(--d-teal)]"
        >
          Back to variants
        </Link>
      </div>

      <div
        className="fixed right-8 top-8 z-20 text-right font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--d-slate)]"
        aria-hidden
      >
        <div>{variant.title}</div>
        <div className="mt-2 text-[var(--d-coral)]">{variant.shortLabel}</div>
      </div>

      <div
        className="fixed bottom-8 right-8 z-20 flex items-center gap-4 font-mono text-[11px] text-[var(--d-slate)]"
        aria-hidden
      >
        <span className="tabular-nums">
          {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="h-3 w-px bg-[var(--d-line)]" />
        <span>← → navigate</span>
      </div>

      <div
        className="fixed bottom-8 left-8 z-20 h-[2px] rounded-full bg-[var(--d-teal)] transition-all duration-300"
        style={{ width: `${(current / total) * 60}px` }}
        aria-hidden
      />
    </main>
  );
}
