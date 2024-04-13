import About from "@/components/About";
import Contact from "@/components/Contact";
import Experties from "@/components/Experties";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectPreview from "@/components/ProjectPreview";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex flex-col relative">
      {/* <Header /> */}
      <Hero />
      <ProjectPreview />
      <About />
      <Experties />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
