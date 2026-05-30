"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "ok" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="glass glass-sheen grid gap-10 rounded-[2.5rem] p-8 sm:p-12 lg:grid-cols-2">
          {/* Colonne infos */}
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h2 className="heading-lg mt-5 text-cream">
              Parlons de votre <span className="text-orange">projet</span>
            </h2>
            <p className="mt-4 text-cream/70">
              Un pack, un abonnement ou une prestation précise ? Dites-nous où vous
              en êtes, on revient vers vous rapidement.
            </p>

            <div className="mt-9 space-y-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="glass flex items-center gap-4 rounded-2xl px-5 py-4 transition-transform hover:-translate-y-0.5"
              >
                <span className="text-orange">📞</span>
                <span className="font-semibold text-cream">{COMPANY.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="glass flex items-center gap-4 rounded-2xl px-5 py-4 transition-transform hover:-translate-y-0.5"
              >
                <span className="text-orange">✉️</span>
                <span className="font-semibold text-cream">{COMPANY.email}</span>
              </a>
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-2xl px-5 py-4 transition-transform hover:-translate-y-0.5"
              >
                <span className="text-orange">📸</span>
                <span className="font-semibold text-cream">{COMPANY.instagram}</span>
              </a>
            </div>
          </Reveal>

          {/* Colonne formulaire */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Nom" required />
                <Field name="company" label="Entreprise" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="email" label="Email" type="email" required />
                <Field name="phone" label="Téléphone" type="tel" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream/60">
                  Votre besoin
                </label>
                <select
                  name="subject"
                  className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-cream outline-none transition focus:border-orange"
                >
                  <option className="bg-ink">Un pack (Start / Premium / 360°)</option>
                  <option className="bg-ink">Un abonnement (Infinity / Pro / Ultra)</option>
                  <option className="bg-ink">Une prestation à la carte</option>
                  <option className="bg-ink">Autre / je ne sais pas encore</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream/60">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-cream outline-none transition placeholder:text-cream/30 focus:border-orange"
                  placeholder="Décrivez votre projet en quelques mots…"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-1 w-full disabled:opacity-60"
              >
                {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
              </button>

              {status === "ok" && (
                <p className="text-sm text-orange-light">
                  Merci ! Votre message a bien été envoyé, on revient vers vous vite.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Oups, l'envoi a échoué. Écrivez-nous directement à {COMPANY.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream/60">
        {label} {required && <span className="text-orange">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-cream outline-none transition focus:border-orange"
      />
    </div>
  );
}
