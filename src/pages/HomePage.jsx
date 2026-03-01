import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import TechStackSection from "../components/sections/TechStackSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import JourneySection from "../components/sections/JourneySection";
import ContactSection from "../components/sections/ContactSection";

export default function HomePage() {
  const { dark } = useTheme();

  return (
    <div className={`transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-white"}`}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
