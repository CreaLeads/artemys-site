import { POLES } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function Poles() {
  return (
    <section id="poles" className="section-padding">
      <div className="container-custom">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Nos pôles</span>
          <h2 className="heading-lg mt-5">
            Une agence, <span className="text-gradient-orange">tous vos supports</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Six savoir-faire réunis sous un même toit : de la stratégie à la pose,
            on gère toute votre communication.{" "}
            <span className="text-cream/50">
              Cliquez un pôle pour voir ses prestations.
            </span>
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {POLES.map((pole, i) => (
            <Reveal key={pole.code} delay={i * 0.06}>
              <a
                href={
                  pole.prestaId ? `/prestations#${pole.prestaId}` : "/prestations"
                }
                className="glass glass-sheen group flex h-full flex-col rounded-3xl p-5 sm:p-7 transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl text-orange">{pole.code}</h3>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-glass/15 text-cream/50 transition-colors group-hover:border-orange group-hover:text-orange">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        d="M4 12 12 4M6 4h6v6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <p className="mt-3 font-semibold text-cream">{pole.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">
                  {pole.desc}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
