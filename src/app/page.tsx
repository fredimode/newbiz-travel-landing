import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinosDestacados from "@/components/DestinosDestacados";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DestinosDestacados />
      </main>
    </>
  );
}
