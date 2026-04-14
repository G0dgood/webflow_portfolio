import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white font-urbanist selection:bg-orange-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Brands />
        <Projects />
        <Skills />
        <Experience />
        <Process />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
