import { NextResponse } from "next/server";

/**
 * Réception des demandes du formulaire de contact.
 *
 * TODO (mise en prod) : brancher un vrai envoi d'email.
 * Options simples :
 *   - Resend (https://resend.com) : `npm i resend`, puis envoyer vers
 *     contact.artemys@gmail.com avec une clé API en variable d'env.
 *   - Ou un webhook (Make/Zapier) vers la boîte mail.
 * Pour l'instant la demande est validée et journalisée côté serveur.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body ?? {};

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Nom et email requis." },
        { status: 400 },
      );
    }

    // En attendant un service d'email, on trace la demande.
    console.log("[contact Artémys]", {
      name,
      email,
      company: body.company,
      phone: body.phone,
      subject: body.subject,
      message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 },
    );
  }
}
