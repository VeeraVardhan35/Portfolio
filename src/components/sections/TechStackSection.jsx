import { STACK } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import SectionTag from "../common/SectionTag";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";

const ICONS = {
  react: SiReact,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  htmlcss: ({ className }) => (
    <span className={`inline-flex items-center gap-1 ${className || ""}`}>
      <SiHtml5 />
      <SiCss3 />
    </span>
  ),
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,
  github: SiGithub,
  api: FiCode,
};

const ICON_COLORS = {
  react: "text-sky-400",
  javascript: "text-yellow-400",
  tailwind: "text-cyan-400",
  htmlcss: "text-orange-400",
  node: "text-green-500",
  express: "text-gray-400",
  mongodb: "text-emerald-500",
  mysql: "text-blue-500",
  github: "text-violet-400",
  api: "text-orange-500",
};

export default function TechStackSection() {
  const { dark } = useTheme();
  const [ref, visible] = useInView();

  return (
    <section
      id="stack"
      className={`py-32 transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(30px)",
            transition: "all 0.6s ease",
          }}
        >
          <SectionTag text="Tech Stack" />
          <h2
            className={`mb-4 text-4xl font-black transition-colors duration-300 lg:text-5xl ${dark ? "text-white" : "text-[#0f0f0f]"}`}
          >
            Tools I build with
          </h2>
          <p className={`mb-14 max-w-lg text-base ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
            Technologies I've invested time mastering from idea to deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {STACK.map(({ name, icon, cat }, i) => {
            const Icon = ICONS[icon] || FiCode;
            return (
              <div
                key={name}
                className={`group cursor-default rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 ${
                  dark
                    ? "border-white/8 bg-[#1a1a1a] hover:bg-[#1f1f1f]"
                    : "border-black/6 bg-[#f5f5f5] hover:bg-white"
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(30px)",
                  transitionDelay: `${i * 55}ms`,
                }}
              >
                <div className="mb-3 text-2xl font-black">
                  <Icon
                    className={`transition-colors duration-300 group-hover:text-orange-500 ${ICON_COLORS[icon] || (dark ? "text-white" : "text-[#0f0f0f]")}`}
                  />
                </div>
                <p className={`mb-1 text-sm font-bold ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
                  {name}
                </p>
                <p className={`text-xs ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>{cat}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
