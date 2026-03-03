import Badge from "../common/Badge";
import GhostBtn from "../common/GhostBtn";
import { useInView } from "../../hooks/useInView";
import { useTheme } from "../../context/ThemeContext";
import toast from "react-hot-toast";

export default function ProjectCard({ project, index }) {
  const { dark } = useTheme();
  const [ref, visible] = useInView(0.1);
  const even = index % 2 === 0;

  const handleComingSoon = (event) => {
    event.preventDefault();
    toast("Coming soon");
  };

  return (
    <div
      ref={ref}
      className={`group grid overflow-hidden rounded-[2rem] border backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_24px_80px_rgba(0,0,0,0.45)] lg:grid-cols-2 ${
        dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-white"
      } ${
        visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className={`relative h-64 overflow-hidden lg:h-auto ${even ? "" : "lg:order-last"}`}>
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-black/40" />
        <div className={`absolute top-5 ${even ? "left-5" : "right-5"}`}>
          <span className="rounded-full border border-orange-400/60 bg-orange-500/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-orange-200">
            Featured Project
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 lg:p-12">
        <span className="mb-3 text-xs font-bold uppercase tracking-widest text-orange-500">
          Featured Project
        </span>
        <h3 className={`mb-2 text-2xl font-black lg:text-3xl ${dark ? "text-white" : "text-[#111]"}`}>
          {project.title}
        </h3>
        <p className={`mb-4 text-sm ${dark ? "text-[#c8c8c8]" : "text-[#555]"}`}>{project.sub}</p>
        {project.status && (
          <span
            className={`mb-4 inline-flex w-fit rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${
              dark
                ? "border-orange-500/35 bg-orange-500/10 text-orange-300"
                : "border-orange-300 bg-orange-50 text-orange-700"
            }`}
          >
            {project.status}
          </span>
        )}
        <p className={`mb-6 text-sm leading-relaxed ${dark ? "text-[#b0b0b0]" : "text-[#666]"}`}>
          {project.desc}
        </p>
        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((stackItem) => (
            <Badge key={stackItem} label={stackItem} />
          ))}
        </div>
        <div className="flex gap-4">
          <GhostBtn
            href={project.live}
            aria-label={`${project.title} live demo`}
            onClick={handleComingSoon}
          >
            Live Demo
          </GhostBtn>
          <a
            href={project.github}
            aria-label={`${project.title} GitHub repository`}
            onClick={handleComingSoon}
            className={`inline-flex items-center rounded-lg border px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:border-orange-500/40 hover:text-orange-400 ${
              dark ? "border-white/15 text-[#d0d0d0]" : "border-black/15 text-[#555]"
            }`}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
