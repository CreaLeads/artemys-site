"use client";

import { PACKS, PACKS_NOTE } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 text-orange"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 10 4 4 8-9" />
    </svg>
  );
}

export function Packs() {
  return (
    <section id="packs" className="section-padding">
      <div className="container-custom">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Art&amp;Packs</span>
          <h2 className="heading-lg mt-5">
            Des packs <span className="text-orange">clés en main</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Une image complète et cohérente, sans avoir à choisir prestation par
            prestation. Vous démarrez, on s'occupe du reste.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PACKS.map((pack, i) => (
            <Reveal key={pack.id} delay={i * 0.1}>
              <article
                className={`${
                  pack.featured ? "glass-orange" : "glass glass-sheen"
                } flex h-full flex-col rounded-3xl p-8 ${
                  pack.featured ? "lg:-translate-y-4 lg:scale-[1.03]" : ""
                }`}
              >
                {pack.featured && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Le plus choisi
                  </span>
                )}
                <h3 className="heading-md text-cream">{pack.name}</h3>
                <p className="mt-1 text-sm text-cream/60">{pack.tagline}</p>

                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-5xl text-orange">
                    {pack.price}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-cream/70">
                  {pack.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
                  {pack.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-cream/85">
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-2xl bg-white/[0.05] px-4 py-3 text-center text-xs font-semibold text-orange-light">
                  🎁 {pack.bonus}
                </p>

                <a
                  href="#contact"
                  className={`mt-6 ${pack.featured ? "btn-primary" : "btn-glass"} w-full`}
                >
                  Demander ce pack
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-cream/50">{PACKS_NOTE}</p>
      </div>
    </section>
  );
}
