import Badge from "../common/Badge";
import GhostBtn from "../common/GhostBtn";
import { useInView } from "../../hooks/useInView";
import { useTheme } from "../../context/ThemeContext";

export default function ProjectCard({ project, index }) {
  const { dark } = useTheme();
  const [ref, visible] = useInView(0.1);
  const even = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`group grid overflow-hidden rounded-3xl border transition-all duration-500 lg:grid-cols-2 ${
        dark
          ? "border-white/6 bg-[#1a1a1a] hover:border-orange-500/30"
          : "border-black/6 bg-white hover:border-orange-500/30"
      } ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
    >
      <div className={`relative h-64 overflow-hidden lg:h-auto ${even ? "" : "lg:order-last"}`}>
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-black/40" />
        <div
          className={`absolute top-5 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white ${even ? "left-5" : "right-5"}`}
        >
          {String(project.id).padStart(2, "0")}
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 lg:p-12">
        <span className="mb-3 text-xs font-bold uppercase tracking-widest text-orange-500">
          Featured Project
        </span>
        <h3 className={`mb-2 text-2xl font-black lg:text-3xl ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
          {project.title}
        </h3>
        <p className={`mb-4 text-sm ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}>{project.sub}</p>
        <p className={`mb-6 text-sm leading-relaxed ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
          {project.desc}
        </p>
        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((stackItem) => (
            <Badge key={stackItem} label={stackItem} />
          ))}
        </div>
        <div className="flex gap-4">
          <GhostBtn href={project.live}>Live Demo</GhostBtn>
          <a
            href={project.github}
            className={`flex items-center text-sm font-semibold transition-colors duration-200 hover:text-orange-500 ${
              dark ? "text-[#b3b3b3]" : "text-[#777]"
            }`}
          >
            GitHub &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
