"use client";

import { useEffect, useState } from "react";
import { PRESTATIONS, COMPANY, SELECT_PRESTA_EVENT } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function Prestations() {
  const [active, setActive] = useState(PRESTATIONS[0].id);
  const [expanded, setExpanded] = useState(false);
  const current = PRESTATIONS.find((c) => c.id === active) ?? PRESTATIONS[0];

  function selectTab(id: string) {
    setActive(id);
    setExpanded(false); // chaque onglet repart replié sur mobile
  }

  // Onglet initial selon l'ancre d'URL (ex. /prestations#print depuis un pôle).
  useEffect(() => {
    const h =
      typeof window !== "undefined"
        ? window.location.hash.replace("#", "")
        : "";
    if (PRESTATIONS.some((c) => c.id === h)) setActive(h);
  }, []);

  // Synchronise l'onglet quand on clique sur une carte de pôle (même page).
  useEffect(() => {
    function onSelect(e: Event) {
      const id = (e as CustomEvent<string>).detail;
      if (PRESTATIONS.some((c) => c.id === id)) {
        setActive(id);
        setExpanded(false);
      }
    }
    window.addEventListener(SELECT_PRESTA_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_PRESTA_EVENT, onSelect);
  }, []);

  return (
    <section id="prestations" className="section-padding">
      <div className="container-custom">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">À la carte</span>
          <h2 className="heading-lg mt-5">
            Besoin d'un <span className="text-gradient-orange">support précis ?</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Toutes nos prestations sont aussi disponibles à l'unité. Les tarifs
            sont indicatifs et adaptés à chaque projet sur devis.
          </p>
        </Reveal>

        {/* Onglets par pôle */}
        <Reveal className="mt-10">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:justify-center">
            {PRESTATIONS.map((cat) => (
              <button
                key={cat.id}
                onClick={() => selectTab(cat.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === cat.id
                    ? "bg-orange text-white shadow-[0_8px_24px_-8px_rgba(255,77,0,0.7)]"
                    : "border border-glass/15 bg-glass/[0.05] text-cream/70 hover:bg-glass/10"
                }`}
              >
                {cat.pole}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Contenu du pôle actif */}
        <div className="glass glass-sheen mt-8 rounded-[2rem] p-7 sm:p-10">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-glass/10 pb-6">
            <div>
              <h3 className="font-display text-2xl text-cream">{current.title}</h3>
              <p className="script-accent text-xl">{current.intro}</p>
            </div>
            <span className="font-display text-lg text-orange/60">{current.pole}</span>
          </div>

          <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {current.items.map((item, idx) => (
              <div
                key={item.name}
                className={`flex-col gap-1 border-b border-glass/[0.06] pb-5 ${
                  idx >= 4 && !expanded ? "hidden sm:flex" : "flex"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold text-cream">{item.name}</span>
                  {item.price && (
                    <span className="shrink-0 whitespace-nowrap text-sm font-bold text-orange">
                      {item.price}
                    </span>
                  )}
                </div>
                {item.desc && (
                  <span className="text-sm leading-relaxed text-cream/60">
                    {item.desc}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Bouton mobile uniquement : déplier le reste des prestations */}
          {current.items.length > 4 && (
            <div className="mt-6 text-center sm:hidden">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="btn-glass"
              >
                {expanded
                  ? "Voir moins"
                  : `Voir plus (+${current.items.length - 4})`}
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`/?besoin=presta&item=${encodeURIComponent(current.title)}#contact`}
            className="btn-primary"
          >
            Demander un devis
          </a>
          <a
            href={COMPANY.catalogueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            Voir le catalogue complet
          </a>
        </div>
      </div>
    </section>
  );
}
