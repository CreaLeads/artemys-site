import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { References } from "@/components/sections/References";
import { Packs } from "@/components/sections/Packs";
import { Poles } from "@/components/sections/Poles";
import { SloganBand } from "@/components/sections/SloganBand";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <References />
        <Packs />
        <Poles />
        <SloganBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
