import { PROJECTS } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { useTheme } from "../../context/ThemeContext";
import SectionTag from "../common/SectionTag";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { dark } = useTheme();
  const [ref, visible] = useInView();

  return (
    <section
      id="projects"
      className={`py-32 transition-colors duration-500 ${dark ? "bg-[#050814]" : "bg-[#f5f5f5]"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(30px)",
            transition: "all 0.6s ease",
          }}
        >
          <div>
            <SectionTag text="Projects" />
            <h2
              className={`mb-4 text-4xl font-black transition-colors duration-300 lg:text-5xl ${
                dark ? "text-white" : "text-[#0f0f0f]"
              }`}
            >
              Things I've <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">shipped</span>
            </h2>
            <p className={`max-w-2xl text-sm md:text-base ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
              A collection of projects that showcase my passion for building scalable, high-performance products.
            </p>
          </div>

          <a
            href="https://github.com/VeeraVardhan35"
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center gap-2.5 px-6 py-3 rounded-full border text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap self-start md:self-auto ${
              dark 
                ? "border-white/10 bg-white/[0.02] text-zinc-300 hover:border-orange-500/40 hover:text-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]" 
                : "border-black/10 bg-white text-zinc-700 hover:border-orange-500/40 hover:text-orange-600 hover:shadow-[0_4px_15px_rgba(249,115,22,0.1)]"
            }`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View all on GitHub
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
