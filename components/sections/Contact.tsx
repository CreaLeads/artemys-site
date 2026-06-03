"use client";

import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "ok" | "error";

// Libellés du menu "Votre besoin" (clé = paramètre d'URL ?besoin=).
const BESOIN: Record<string, string> = {
  pack: "Un pack (Start / Premium / 360°)",
  abonnement: "Un abonnement (Infinity / Pro / Ultra)",
  presta: "Une prestation à la carte",
  autre: "Autre / je ne sais pas encore",
};

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [subject, setSubject] = useState(BESOIN.pack);
  const [message, setMessage] = useState("");

  // Pré-remplissage depuis l'URL : /?besoin=pack&item=Pack%20Premium#contact
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const besoin = params.get("besoin");
    const item = params.get("item");
    if (besoin && BESOIN[besoin]) setSubject(BESOIN[besoin]);
    if (item) setMessage(`Bonjour, je suis intéressé(e) par : ${item}.`);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    try {
      // Appel direct à FormSubmit depuis le navigateur : le vrai en-tête Origin
      // est envoyé par le navigateur (impossible côté serveur) → fiable.
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(COMPANY.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `Nouvelle demande site — ${fd.get("subject") || "Contact"}`,
            _template: "table",
            _captcha: "false",
            Nom: fd.get("name"),
            Entreprise: fd.get("company") || "—",
            Email: fd.get("email"),
            Téléphone: fd.get("phone") || "—",
            Besoin: fd.get("subject") || "—",
            Message: fd.get("message") || "—",
          }),
        },
      );
      const data = await res.json().catch(() => null);
      if (data && (data.success === "true" || data.success === true)) {
        setStatus("ok");
        form.reset();
        setSubject(BESOIN.pack);
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="section-glow" aria-hidden />
      <div className="container-custom">
        <div className="glass glass-sheen grid gap-10 rounded-[2.5rem] p-8 sm:p-12 lg:grid-cols-2">
          {/* Colonne infos */}
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h2 className="heading-lg mt-5 text-cream">
              Parlons de votre <span className="text-gradient-orange">projet</span>
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-2xl border border-glass/15 bg-glass/[0.06] px-4 py-3 text-cream outline-none transition focus:border-orange"
                >
                  <option className="bg-ink" value={BESOIN.pack}>
                    Un pack (Start / Premium / 360°)
                  </option>
                  <option className="bg-ink" value={BESOIN.abonnement}>
                    Un abonnement (Infinity / Pro / Ultra)
                  </option>
                  <option className="bg-ink" value={BESOIN.presta}>
                    Une prestation à la carte
                  </option>
                  <option className="bg-ink" value={BESOIN.autre}>
                    Autre / je ne sais pas encore
                  </option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream/60">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-2xl border border-glass/15 bg-glass/[0.06] px-4 py-3 text-cream outline-none transition placeholder:text-cream/30 focus:border-orange"
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
        className="w-full rounded-2xl border border-glass/15 bg-glass/[0.06] px-4 py-3 text-cream outline-none transition focus:border-orange"
      />
    </div>
  );
}
