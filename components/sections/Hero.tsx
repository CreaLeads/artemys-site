"use client";

import { motion } from "framer-motion";
import { HERO, STATS, COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 md:pt-48">
      {/* Bulle de verre flottante, décorative */}
      <div className="hero-orb pointer-events-none absolute -right-20 top-28 hidden h-80 w-80 md:block">
        <div className="animate-float gpu h-full w-full">
          <div className="glass-flat glass-sheen h-full w-full rounded-full bg-gradient-to-br from-glass/[0.12] to-orange/[0.06]" />
          <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-glass/20 blur-2xl" />
        </div>
      </div>
      <div className="animate-glow-pulse pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-orange/30 blur-[90px]" />

      <div className="container-custom relative">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {HERO.eyebrow}
        </motion.span>

        <h1 className="heading-xl mt-6 max-w-4xl">
          {HERO.titleLines.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              {i === 2 ? (
                <span className="text-gradient-orange">{line}</span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="script-accent mt-6 text-3xl sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {COMPANY.baseline}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a href={HERO.primaryCta.href} className="btn-primary">
            {HERO.primaryCta.label}
          </a>
          <a href={HERO.secondaryCta.href} className="btn-glass">
            {HERO.secondaryCta.label}
          </a>
        </motion.div>

        {/* Stats en barre de verre */}
        <motion.div
          className="glass glass-sheen mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="px-6 py-7 text-center">
              <div className="font-display text-4xl text-orange">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-cream/60">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
