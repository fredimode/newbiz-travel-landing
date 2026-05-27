import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinosDestacados from "@/components/DestinosDestacados";
import TiposDeViaje from "@/components/TiposDeViaje";
import ComoTrabajamos from "@/components/ComoTrabajamos";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import ContactoFinal from "@/components/ContactoFinal";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/ModalContext";
import ConsultaModal from "@/components/ConsultaModal";

export default function Home() {
  return (
    <ModalProvider>
      <Navbar />
      <main>
        <Hero />
        <DestinosDestacados />
        <TiposDeViaje />
        <ComoTrabajamos />
        <PorQueElegirnos />
        <ContactoFinal />
      </main>
      <Footer />
      <ConsultaModal />
    </ModalProvider>
  );
}
