import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Studio from "@/components/Studio";
import Intake from "@/components/Intake";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Motion from "@/components/Motion";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Pricing />
        <Studio />
        <Intake />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Motion />
    </>
  );
}
