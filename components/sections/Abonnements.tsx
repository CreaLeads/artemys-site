"use client";

import { PLANS } from "@/lib/constants";
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

export function Abonnements() {
  return (
    <section id="abonnements" className="section-padding">
      <div className="container-custom">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Abonnements Artémys</span>
          <h2 className="heading-lg mt-5">
            Votre studio créa <span className="text-orange">en abonnement</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Un designer dédié et une communication qui tourne chaque mois — sans
            les contraintes d'un recrutement.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1}>
              <article
                className={`${
                  plan.featured ? "glass-orange" : "glass glass-sheen"
                } flex h-full flex-col rounded-3xl p-8`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="heading-md text-cream">{plan.name}</h3>
                  {plan.featured && (
                    <span className="rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      Populaire
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-cream/60">{plan.tagline}</p>

                <div className="mt-5 flex items-end gap-1.5">
                  <span className="font-display text-5xl text-orange">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-sm text-cream/60">{plan.period}</span>
                </div>
                {plan.note && (
                  <span className="mt-2 inline-flex w-fit rounded-full border border-white/15 px-3 py-1 text-xs text-cream/70">
                    {plan.note}
                  </span>
                )}

                <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-cream/85">
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs italic text-cream/50">{plan.ideal}</p>

                <a
                  href="#contact"
                  className={`mt-5 ${plan.featured ? "btn-primary" : "btn-glass"} w-full`}
                >
                  Choisir {plan.name}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
