import { useState } from "react";
import { ABOUT_IMG, ABOUT_IMG_FALLBACK, SOCIAL_LINKS } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import SectionTag from "../common/SectionTag";

export default function AboutSection() {
  const { dark } = useTheme();
  const [ref, visible] = useInView();
  const [aboutImage, setAboutImage] = useState(ABOUT_IMG);

  return (
    <section
      id="about"
      className={`py-32 transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-[#f5f5f5]"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className="grid items-center gap-16 lg:grid-cols-2"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(40px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="relative mx-auto w-[58%] lg:w-[58%]">
            <div
              className={`absolute -inset-3 rounded-[28px] blur-xl ${dark ? "bg-orange-500/8" : "bg-orange-100/60"}`}
            />
            <div
              className={`relative overflow-hidden rounded-[24px] border-2 ${dark ? "border-orange-500/25" : "border-orange-300/50"}`}
            >
              <img
                src={aboutImage}
                alt="About me"
                className="h-80 w-full object-cover object-top lg:h-[420px]"
                onError={() => setAboutImage(ABOUT_IMG_FALLBACK)}
              />
            </div>
          </div>

          <div>
            <SectionTag text="About Me" />
            <h2
              className={`mb-2 text-4xl font-black leading-tight transition-colors duration-300 lg:text-5xl ${dark ? "text-white" : "text-[#0f0f0f]"}`}
            >
              Veeravardhan Lingasani
            </h2>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-orange-500">
              Backend-Focused Full-Stack Developer
            </p>
            <p
              className={`mb-6 text-sm font-medium ${dark ? "text-[#d2d2d2]" : "text-[#3a3a3a]"}`}
            >
              B.Tech, IIITDMJ (Expected 2027)
            </p>
            <h3
              className={`mb-5 text-2xl font-bold leading-snug lg:text-3xl ${dark ? "text-white" : "text-[#111]"}`}
            >
              <span className="text-orange-500">"</span>I build scalable APIs
              and production-ready backend systems.
              <span className="text-orange-500">"</span>
            </h3>
            <p
              className={`mb-8 text-base leading-relaxed ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}
            >
              I am a backend-focused full-stack developer specializing in
              MERN Stack and Django. I build secure,
              scalable, and maintainable applications with proper
              authentication, caching, database optimization, and clean
              architecture. Strong in Data Structures & Algorithms and
              competitive programming.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(255,107,0,0.45)]"
              >
                View Resume
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className={`rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  dark
                    ? "border-white/20 text-white hover:border-orange-500/60 hover:text-orange-400"
                    : "border-[#0f0f0f]/20 text-[#111] hover:border-orange-500/70 hover:text-orange-600"
                }`}
              >
                GitHub
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  dark
                    ? "border-white/20 text-white hover:border-orange-500/60 hover:text-orange-400"
                    : "border-[#0f0f0f]/20 text-[#111] hover:border-orange-500/70 hover:text-orange-600"
                }`}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
