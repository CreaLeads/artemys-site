import type { Metadata } from "next";
import { Inter, Anton, Caveat } from "next/font/google";
import "./globals.css";
import { COMPANY, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.brandName} — Création, Impression & Installation`,
    template: `%s | ${COMPANY.brandName}`,
  },
  description:
    "Agence de communication : logo & identité visuelle, sites web, print, signalétique, covering, textile et goodies. Packs clés en main et abonnements mensuels. On ne vous rend pas meilleur, mais irrésistible.",
  keywords: [
    "agence de communication",
    "création logo",
    "identité visuelle",
    "site web vitrine",
    "impression flyers cartes de visite",
    "signalétique enseigne covering",
    "community management",
    "Artémys",
  ],
  authors: [{ name: COMPANY.brandName }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: COMPANY.brandName,
    title: `${COMPANY.brandName} — Création • Impression • Installation`,
    description:
      "Une agence, tous vos supports. Packs clés en main et abonnements mensuels pour rendre votre communication irrésistible.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${anton.variable} ${caveat.variable}`}
    >
      <body className="font-sans">
        <div className="aurora-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
