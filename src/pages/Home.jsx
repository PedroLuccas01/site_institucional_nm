import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import Marquee from "../sections/Marquee";
import Historia from "../sections/Historia";
import VistaCampanha from "../sections/VistaCampanha";
import Propostas from "../sections/Propostas";
import Moldura from "../sections/Moldura";
import Legado from "../sections/Legado";
import Materiais from "../sections/Materiais";
import Countdown from "../sections/Countdown";
import Contato from "../sections/Contato";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Historia />
        <VistaCampanha />
        <Propostas />
        <Moldura />
        <Legado />
        <Materiais />
        <Countdown />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
