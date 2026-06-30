import { useInView } from "../../hooks/useInView";
import { useTheme } from "../../context/ThemeContext";
import toast from "react-hot-toast";

// Helper function to render inline icons
const renderIcon = (logo) => {
  const size = "w-5 h-5";
  switch (logo) {
    case "code":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    case "database":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
        </svg>
      );
    case "rescue":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      );
    case "toopz":
      return (
        <span className="font-extrabold text-sm tracking-tighter">tp</span>
      );
    case "robot":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      );
    case "chart":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 18.375v-5.25ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125v-9.75ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function ProjectCard({ project, index }) {
  const { dark } = useTheme();
  const [ref, visible] = useInView(0.1);
  const liveHref = typeof project.live === "string" ? project.live.trim() : "";
  const githubHref = typeof project.github === "string" ? project.github.trim() : "";

  const handleComingSoon = (event, href) => {
    const normalizedHref = typeof href === "string" ? href.trim() : "";
    if (!normalizedHref || normalizedHref === "#") {
      event.preventDefault();
      toast("Coming soon");
    }
  };

  return (
    <div
      ref={ref}
      className={`group flex flex-col h-full overflow-hidden rounded-[1.5rem] border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] ${
        dark ? "border-white/10 bg-white/[0.02]" : "border-black/10 bg-white"
      } ${
        visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {/* Cover Image Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Star Featured Badge */}
        <div className="absolute top-4 left-4">
          <span className="flex items-center gap-1 rounded-full border border-orange-500/30 bg-orange-950/80 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest text-orange-400">
            <span className="text-[10px]">★</span> Featured Project
          </span>
        </div>
      </div>

      {/* Floating Logo Icon */}
      <div className="relative z-10 -mt-6 ml-6 h-12 w-12 flex items-center justify-center rounded-xl border border-orange-500/30 bg-orange-950/90 text-orange-400 shadow-md">
        {renderIcon(project.logo)}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6 pt-4">
        {/* Title */}
        <h3 className={`mb-1.5 text-2xl font-black transition-colors duration-300 ${dark ? "text-white" : "text-[#111]"}`}>
          {project.title}
        </h3>
        
        {/* Subtitle / Headline (Orange) */}
        <h4 className="mb-3 text-xs font-bold leading-normal uppercase tracking-wider text-orange-400">
          {project.sub}
        </h4>
        
        {/* Description */}
        <p className={`mb-5 text-[13px] leading-relaxed flex-grow ${dark ? "text-zinc-400" : "text-[#555]"}`}>
          {project.desc}
        </p>

        {/* Tech Stack Badge Pills */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.stack.map((stackItem) => (
            <span
              key={stackItem}
              className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-md border transition-colors duration-300 ${
                dark 
                  ? "border-orange-500/10 bg-orange-950/20 text-orange-300/90" 
                  : "border-orange-200 bg-orange-50 text-orange-700"
              }`}
            >
              {stackItem}
            </span>
          ))}
        </div>

        {/* Buttons / Actions */}
        <div className="mt-auto flex items-center gap-3 pt-2">
          {/* Live Demo button */}
          <a
            href={liveHref || "#"}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => handleComingSoon(event, liveHref)}
            className="flex items-center gap-1 border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200"
          >
            Live Demo ↗
          </a>
          
          {/* GitHub button with SVG Icon */}
          <a
            href={githubHref || "#"}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => handleComingSoon(event, githubHref)}
            className={`flex items-center gap-1.5 border px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              dark 
                ? "border-white/10 text-zinc-300 hover:border-orange-500/30 hover:text-orange-400" 
                : "border-black/10 text-zinc-600 hover:border-orange-500/30 hover:text-orange-600"
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
