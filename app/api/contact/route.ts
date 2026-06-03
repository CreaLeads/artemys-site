import { NextResponse } from "next/server";

/**
 * Réception du formulaire de contact → envoi de l'email vers Artémys via
 * FormSubmit (https://formsubmit.co). Aucune clé API à stocker.
 *
 * ⚠️ ACTIVATION (une seule fois) : au tout premier envoi, FormSubmit envoie
 * un email "Activate Form" à contact.artemys@gmail.com. Une fois ce lien
 * cliqué, tous les messages suivants arrivent directement dans la boîte.
 *
 * Note : FormSubmit rejette les appels sans en-têtes Origin/Referer
 * ("open this page through a web server") — on les fournit donc explicitement.
 */
const CONTACT_EMAIL = "contact.artemys@gmail.com";
const FALLBACK_ORIGIN = "https://www.xn--artmys-dva.fr";

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

    const origin = req.headers.get("origin") || FALLBACK_ORIGIN;

    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: `${origin}/`,
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
    const success = data?.success === "true" || data?.success === true;
    const needsActivation = /activat/i.test(data?.message ?? "");

    // On considère "ok" un envoi réussi OU le 1er envoi en attente d'activation
    // (l'email d'activation part vers la boîte ; les messages suivront).
    if (res.ok && (success || needsActivation)) {
      return NextResponse.json({ ok: true });
    }

    console.error("[contact Artémys] FormSubmit a échoué", res.status, data);
    return NextResponse.json(
      { ok: false, error: "Envoi impossible pour le moment." },
      { status: 502 },
    );
  } catch (err) {
    console.error("[contact Artémys] erreur", err);
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 },
    );
  }
}
