import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
