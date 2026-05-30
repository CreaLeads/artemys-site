"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Header DÉTACHÉ : flottant, jamais collé au bord du viewport.
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5">
      <nav
        className={`glass-blur glass-sheen mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full py-2.5 pl-5 pr-2.5 transition-all duration-300 ${
          scrolled ? "bg-white/[0.1] shadow-2xl" : ""
        }`}
      >
        <a href="#top" className="relative z-10 text-cream" aria-label="Artémys — accueil">
          <Logo />
        </a>

        {/* Liens desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-cream/75 transition-colors hover:bg-white/10 hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden btn-primary sm:inline-flex">
            Nous contacter
          </a>

          {/* Burger mobile */}
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-cream lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Panneau mobile */}
      {open && (
        <div className="glass-blur glass-sheen mx-auto mt-3 max-w-6xl rounded-3xl p-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-cream/85 transition-colors hover:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            {COMPANY.phone}
          </a>
        </div>
      )}
    </header>
  );
}
