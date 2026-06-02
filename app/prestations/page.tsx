import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Prestations } from "@/components/sections/Prestations";

export const metadata: Metadata = {
  title: "Prestations à la carte",
  description:
    "Toutes les prestations Artémys à l'unité, par pôle : création & web, photo & vidéo, impression, signalétique & covering, textile & goodies.",
};

export default function PrestationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-28">
        <Prestations />
      </main>
      <Footer />
    </>
  );
}
