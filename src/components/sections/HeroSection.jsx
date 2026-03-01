import { useState } from "react";
import { WORDS, HERO_IMG, HERO_IMG_FALLBACK } from "../../data/portfolioData";
import { useWordCycle } from "../../hooks/useWordCycle";
import { useTheme } from "../../context/ThemeContext";
import OrangeBtn from "../common/OrangeBtn";

export default function HeroSection() {
  const { dark } = useTheme();
  const [word, show] = useWordCycle(WORDS);
  const [heroImage, setHeroImage] = useState(HERO_IMG);

  return (
    <section
      id="hero"
      className={`relative flex min-h-screen items-center overflow-hidden transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-white"}`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/4 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[100px] ${dark ? "bg-orange-500" : "bg-orange-300"}`}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div
              className={`mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest ${
                dark
                  ? "border border-orange-500/30 bg-orange-500/10 text-orange-400"
                  : "border border-orange-200 bg-orange-50 text-orange-600"
              }`}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              Available for full-time roles
            </div>

            <h1
              className={`mb-6 text-5xl font-black leading-[1.06] tracking-tight transition-colors duration-300 lg:text-6xl xl:text-7xl ${dark ? "text-white" : "text-[#0f0f0f]"}`}
            >
              Shaping{" "}
              <span
                className="inline-block min-w-[200px] text-orange-500"
                style={{
                  opacity: show ? 1 : 0,
                  transform: show ? "translateY(0px)" : "translateY(14px)",
                  transition: "opacity 0.32s ease, transform 0.32s ease",
                }}
              >
                {word}
              </span>
              <br />
              into Real Projects
              <br />
              <span className={dark ? "text-[#b3b3b3]" : "text-[#555]"}>
                that Deliver Results
              </span>
            </h1>

            <p
              className={`mb-10 max-w-lg text-lg leading-relaxed ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}
            >
              Full-stack developer obsessed with clean architecture, meaningful
              UX, and building software that works in production.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <OrangeBtn
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Projects &rarr;
              </OrangeBtn>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`rounded-xl border px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-orange-500/60 ${
                  dark
                    ? "border-white/15 text-[#b3b3b3] hover:text-white"
                    : "border-black/15 text-[#555] hover:text-[#0f0f0f]"
                }`}
              >
                Let's Talk
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-orange-500/30 to-orange-600/10 blur-2xl" />
              <div
                className="relative h-[26rem] w-[24rem] overflow-hidden rounded-[24px] sm:h-[30rem] sm:w-[27rem]"
                style={{
                  boxShadow:
                    "0 0 0 2px #ff6b00, 0 0 60px rgba(255,107,0,0.25), 0 30px 60px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={heroImage}
                  alt="Hero visual"
                  className="h-full w-full object-cover"
                  onError={() => setHeroImage(HERO_IMG_FALLBACK)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
