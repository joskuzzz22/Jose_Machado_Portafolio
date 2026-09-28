import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Products from "@/components/Products";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Capabilities from "@/components/Capabilities";
import Research from "@/components/Research";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Impact />
        <Products />
        <Profile />
        <Experience />
        <Capabilities />
        <Research />
        <Education />
        <Contact />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
