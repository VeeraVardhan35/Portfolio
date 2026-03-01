import { PROJECTS } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import SectionTag from "../common/SectionTag";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { dark } = useTheme();
  const [ref, visible] = useInView();

  return (
    <section
      id="projects"
      className={`py-32 transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-[#f5f5f5]"}`}
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
          <SectionTag text="Projects" />
          <h2
            className={`mb-4 text-4xl font-black transition-colors duration-300 lg:text-5xl ${dark ? "text-white" : "text-[#0f0f0f]"}`}
          >
            Things I've shipped
          </h2>
          <p className={`mb-14 max-w-lg text-base ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
            Real full-stack projects, not just tutorial clones.
          </p>
        </div>

        <div className="space-y-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
