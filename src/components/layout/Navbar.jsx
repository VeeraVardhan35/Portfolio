import { useEffect, useState } from "react";
import { BRAND, NAV, SOCIAL_LINKS } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { useScrolled } from "../../hooks/useScrolled";
import OrangeBtn from "../common/OrangeBtn";
import ThemeSlideToggle from "../common/ThemeSlideToggle";

function goTo(section) {
  document
    .getElementById(section.toLowerCase())
    ?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const { dark } = useTheme();
  const scrolled = useScrolled();
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = window.scrollY + 140;
      let current = "about";

      NAV.forEach((item) => {
        const sectionId = item.toLowerCase();
        const section = document.getElementById(sectionId);
        if (!section) return;

        if (offset >= section.offsetTop) {
          current = sectionId;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? dark
            ? "border-b border-white/5 bg-[#0f0f0f]/85 shadow-lg backdrop-blur-xl"
            : "border-b border-black/5 bg-white/85 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          className={`text-xl font-black tracking-tight ${dark ? "text-white" : "text-[#0f0f0f]"}`}
        >
          {BRAND}
          <span className="text-orange-500">.</span>Dev
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((link) => (
            <div key={link} className="relative">
              <button
                onClick={() => goTo(link)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-orange-500 ${
                  dark ? "text-[#b3b3b3]" : "text-[#555]"
                }`}
              >
                {link}
              </button>
              <span
                className={`absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-orange-500 transition-all duration-300 ${
                  activeSection === link.toLowerCase() ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeSlideToggle />
          <OrangeBtn onClick={() => goTo("Contact")}>Hire Me</OrangeBtn>
        </div>
      </div>
    </nav>
  );
}
