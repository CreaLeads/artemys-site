import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Abonnements } from "@/components/sections/Abonnements";

export const metadata: Metadata = {
  title: "Abonnements",
  description:
    "Les abonnements Artémys : Infinity, Pro et Ultra. Votre studio créa et votre communication gérés chaque mois, sans les contraintes d'un recrutement.",
};

export default function AbonnementsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-28">
        <Abonnements />
      </main>
      <Footer />
    </>
  );
}
