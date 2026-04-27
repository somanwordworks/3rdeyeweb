import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Modules from "@/components/Modules";
import EyeGo from "@/components/EyeGo";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <About />
      <Modules />
      <EyeGo />
      <HowItWorks />
      <Industries />
      <CTA />
      <Footer />
    </main>
  );
}
