import { NextResponse } from "next/server";

/**
 * Réception du formulaire de contact → envoi de l'email vers Artémys.
 *
 * On relaie la demande à FormSubmit (https://formsubmit.co) qui transfère
 * le message à l'adresse ci-dessous. Aucune clé API à stocker.
 *
 * ⚠️ ACTIVATION (une seule fois) : au tout premier envoi, FormSubmit envoie
 * un email de confirmation à contact.artemys@gmail.com avec un lien
 * "Activate". Une fois ce lien cliqué, tous les messages suivants arrivent
 * directement dans la boîte.
 */
const CONTACT_EMAIL = "contact.artemys@gmail.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, company, phone, subject } = body ?? {};

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Nom et email requis." },
        { status: 400 },
      );
    }

    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Nouvelle demande site — ${subject || "Contact"}`,
          _template: "table",
          _captcha: "false",
          Nom: name,
          Entreprise: company || "—",
          Email: email,
          Téléphone: phone || "—",
          Besoin: subject || "—",
          Message: message || "—",
        }),
      },
    );

    const data = await res.json().catch(() => null);

    if (!res.ok || (data && data.success === "false")) {
      console.error("[contact Artémys] FormSubmit a échoué", res.status, data);
      return NextResponse.json(
        { ok: false, error: "Envoi impossible pour le moment." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact Artémys] erreur", err);
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 },
    );
  }
}
