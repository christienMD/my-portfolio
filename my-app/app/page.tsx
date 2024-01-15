import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/Projects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-20">
        <HeroSection />
        <AboutSection />
      </div>
      <div className="container mx-auto">
        <ProjectsSection />
      </div>
      <div className="container mx-auto px-12 py-4">
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
