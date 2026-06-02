"use client";

import { useState } from "react";
import { CLIENTS, TESTIMONIALS, GOOGLE } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="text-orange" aria-label={`${n} sur 5`}>
      {"★".repeat(n)}
      <span className="text-orange/25">{"★".repeat(5 - n)}</span>
    </span>
  );
}

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <div className="marquee-mask flex overflow-hidden">
      <div
        className={`gpu flex shrink-0 gap-4 pr-4 ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {items.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="glass-flat flex h-20 shrink-0 items-center justify-center whitespace-nowrap rounded-2xl px-8"
          >
            <span className="text-outline-orange font-display text-xl uppercase tracking-wide text-cream/80">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function References() {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 3);

  return (
    <section id="references" className="section-padding">
      <div className="container-custom">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ils nous font confiance</span>
          <h2 className="heading-lg mt-5">
            Plus de 20 marques <span className="text-gradient-orange">accompagnées</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Des artisans aux PME, on construit des images qui se remarquent.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 flex flex-col gap-4">
        <Row />
        <Row reverse />
      </div>

      {/* Bloc Avis Google */}
      <div className="container-custom mt-20">
        <Reveal className="mx-auto mb-10 flex max-w-md flex-col items-center gap-2 text-center">
          <span className="eyebrow">Avis Google</span>
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl text-orange">
              {GOOGLE.rating.toFixed(1).replace(".", ",")}
            </span>
            <div className="text-left">
              <div className="text-2xl leading-none">
                <Stars n={5} />
              </div>
              <span className="text-sm text-cream/60">
                {GOOGLE.reviewsCount}+ avis Google
              </span>
            </div>
          </div>
          <a
            href={GOOGLE.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass mt-2"
          >
            Voir les avis sur Google
          </a>
        </Reveal>

        {TESTIMONIALS.length > 0 && (
          <>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((t, i) => (
                <Reveal
                  key={i}
                  delay={(i % 3) * 0.08}
                  className={!showAll && i === 2 ? "hidden md:block" : ""}
                >
                  <figure className="glass glass-sheen h-full rounded-3xl p-7">
                    <div className="mb-3 text-lg">
                      <Stars n={t.rating ?? 5} />
                    </div>
                    <blockquote className="text-cream/80">“{t.text}”</blockquote>
                    <figcaption className="mt-5 text-sm">
                      <span className="font-semibold text-cream">{t.name}</span>
                      <span className="text-cream/50"> — {t.role}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            {TESTIMONIALS.length > 3 && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setShowAll((v) => !v)}
                  className="btn-glass"
                >
                  {showAll ? "Voir moins" : "Voir plus d'avis"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
