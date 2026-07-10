import { Link } from "react-router-dom";
import { recutVariants } from "@/deck/recut-data";

export default function RecutPicker() {
  return (
    <main className="min-h-screen bg-[var(--d-canvas)] px-6 py-10 text-[var(--d-ink)] sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-[var(--d-line)] bg-white/70 p-8 shadow-[0_24px_80px_rgba(23,23,23,0.08)] backdrop-blur sm:p-10">
          <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[var(--d-coral)]">
            Minimal Zo Brain recuts
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            Four shorter deck variants built from the same workshop.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--d-slate)]">
            Same concepts. Different teaching order. The point is to find the version that teaches
            cleanly without making the room work harder than it has to.
          </p>
        </div>

        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          {recutVariants.map((variant) => (
            <article
              key={variant.slug}
              className="overflow-hidden rounded-[28px] border border-[var(--d-line)] bg-white/80 shadow-[0_24px_80px_rgba(23,23,23,0.08)]"
            >
              <img
                src={variant.hero}
                alt={variant.heroAlt}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="space-y-4 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--d-coral)]">
                      {variant.slideCount} slides
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">
                      {variant.title}
                    </h2>
                  </div>
                  <span className="rounded-full border border-[var(--d-line)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--d-slate)]">
                    {variant.shortLabel}
                  </span>
                </div>

                <p className="text-base leading-7 text-[var(--d-slate)]">{variant.stance}</p>
                <p className="text-sm leading-6 text-[var(--d-teal-dark)]">{variant.recommendation}</p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to={`/${variant.slug}`}
                    className="rounded-full bg-[var(--d-teal)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--d-teal-dark)]"
                  >
                    Open deck
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
