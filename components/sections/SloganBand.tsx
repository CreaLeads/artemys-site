"use client";

import { COMPANY } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function SloganBand() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <Reveal>
          <div className="glass-orange relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:py-20">
            <div className="animate-glow-pulse pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,122,51,0.35),transparent_70%)]" />
            <h2 className="heading-lg relative mx-auto max-w-3xl text-cream">
              On ne vous rend pas meilleur,{" "}
              <span className="text-gradient-orange">on vous rend irrésistible.</span>
            </h2>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <a href="#contact" className="btn-primary">
                Démarrer mon projet
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="btn-glass">
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
