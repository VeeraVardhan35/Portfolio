import { useState } from "react";
import { ABOUT_IMG, ABOUT_IMG_FALLBACK } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import OrangeBtn from "../common/OrangeBtn";
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
              className={`mb-6 text-4xl font-black leading-tight transition-colors duration-300 lg:text-5xl ${dark ? "text-white" : "text-[#0f0f0f]"}`}
            >
              I don't just write code.
              <br />
              <span className="text-orange-500">I solve problems.</span>
            </h2>
            <p
              className={`mb-5 text-base leading-relaxed ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}
            >
              I'm a fresher full-stack developer who went from complete
              beginner to shipping production-ready applications in under a
              year.
            </p>
            <p
              className={`mb-8 text-base leading-relaxed ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}
            >
              I learn fast, adapt faster, and focus on code that is
              maintainable, practical, and user-friendly.
            </p>
            <OrangeBtn
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Build Together &rarr;
            </OrangeBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
