import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { PORTFOLIO, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio — nos réalisations",
  description:
    "Les réalisations de l'agence Artémys : identité visuelle, web, print, covering, photo, vidéo et textile pour nos clients.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-10 sm:pt-44">
          <div className="container-custom">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">Portfolio</span>
              <h1 className="heading-xl mt-6">
                Nos <span className="text-gradient-orange">réalisations</span>
              </h1>
              <p className="script-accent mt-6 text-3xl sm:text-4xl">
                {COMPANY.baseline}
              </p>
              <p className="mt-6 max-w-xl text-cream/70">
                Quelques marques que nous avons accompagnées, de la création
                graphique à la pose terrain.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Études de cas */}
        <section className="relative overflow-hidden section-padding pt-8">
          <div className="section-glow" aria-hidden />
          <div className="container-custom space-y-10">
            {PORTFOLIO.map((cs, i) => (
              <Reveal key={cs.id}>
                <article className="glass glass-sheen grid gap-8 rounded-[2rem] p-7 sm:p-10 lg:grid-cols-2 lg:items-center">
                  {/* Texte */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="heading-md text-cream">{cs.client}</h2>
                    <p className="mt-4 leading-relaxed text-cream/70">
                      {cs.intro}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {cs.services.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-xs font-semibold text-orange-light"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Galerie */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    {cs.images && cs.images.length > 0 ? (
                      <div className="grid grid-cols-2 gap-3">
                        {cs.images.map((src, k) => (
                          <div
                            key={src}
                            className={`relative overflow-hidden rounded-2xl ${
                              k === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
                            }`}
                          >
                            <Image
                              src={src}
                              alt={`${cs.client} — réalisation ${k + 1}`}
                              fill
                              sizes="(max-width:1024px) 100vw, 50vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Placeholder tant que les visuels ne sont pas fournis
                      <div className="grid grid-cols-2 gap-3">
                        {[0, 1, 2].map((k) => (
                          <div
                            key={k}
                            className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange/20 to-transparent ${
                              k === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
                            }`}
                          >
                            <span className="font-display text-sm uppercase tracking-wide text-orange/60">
                              Visuel à venir
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}

            {/* CTA */}
            <Reveal className="pt-6 text-center">
              <h2 className="heading-md text-cream">
                Un projet en <span className="text-gradient-orange">tête ?</span>
              </h2>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href="/#contact" className="btn-primary">
                  Démarrer mon projet
                </a>
                <a href="/#packs" className="btn-glass">
                  Voir les packs
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
