"use client";

import { CLIENTS, TESTIMONIALS } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

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
            className="glass-flat flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl px-6"
          >
            <span className="text-sm font-semibold tracking-wide text-cream/70">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function References() {
  return (
    <section id="references" className="section-padding">
      <div className="container-custom">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ils nous font confiance</span>
          <h2 className="heading-lg mt-5">
            Plus de 20 marques <span className="text-orange">accompagnées</span>
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

      {TESTIMONIALS.length > 0 && (
        <div className="container-custom mt-16">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="glass glass-sheen h-full rounded-3xl p-7">
                  <div className="mb-3 text-orange">★★★★★</div>
                  <blockquote className="text-cream/80">“{t.text}”</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-semibold text-cream">{t.name}</span>
                    <span className="text-cream/50"> — {t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
