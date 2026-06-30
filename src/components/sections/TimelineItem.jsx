import { useInView } from "../../hooks/useInView";
import { useTheme } from "../../context/ThemeContext";

// Helper function to render specific timeline category icons
const renderJourneyIcon = (icon) => {
  const size = "w-8 h-8";
  switch (icon) {
    case "rocket":
      return (
        <svg className={`${size} text-orange-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.96 14.96 0 01-5.96 0m5.96 0a14.96 14.96 0 000-5.96m-5.96 0a14.96 14.96 0 00-5.96 0" />
        </svg>
      );
    case "brain":
      return (
        <svg className={`${size} text-orange-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a3 3 0 01-3-3H6.75m5.25 3a3 3 0 003-3h2.25m-9 0a3 3 0 013-3V3.75m3 3a3 3 0 00-3-3V3.75m0 14.25v-5.25m-3-3h6M12 9V6" />
        </svg>
      );
    case "django":
      return (
        <span className="text-emerald-500 font-extrabold text-2xl tracking-tighter">dj</span>
      );
    case "react":
      return (
        <svg className={`${size} text-sky-400 animate-[spin_10s_linear_infinite]`} viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          <circle r="2" fill="currentColor"/>
        </svg>
      );
    case "distributed":
      return (
        <svg className={`${size} text-cyan-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "agentic":
      return (
        <svg className={`${size} text-emerald-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h7.5c.621 0 1.125-.504 1.125-1.125V18m0 0l-3.375-3.375M16.5 18V6.75A2.25 2.25 0 0014.25 4.5h-10.5A2.25 2.25 0 001.5 6.75v12.75c0 1.242 1.008 2.25 2.25 2.25h2.25" />
        </svg>
      );
    default:
      return null;
  }
};

// Helper function to render tag badges with inline icons
const renderTagWithIcon = (tag, dark) => {
  const iconSize = "w-3 h-3 flex-shrink-0";
  let icon = null;
  let pillStyle = dark 
    ? "border-white/5 bg-white/[0.01] text-zinc-300 hover:border-white/10" 
    : "border-black/5 bg-zinc-50 text-zinc-700 hover:border-black/10";
    
  if (tag === "C++") {
    icon = (
      <svg className={`${iconSize} text-blue-400`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10zm9-2h-3v4h3v-4zm5 0h-1v1h-1v2h1v1h1v-1h1v-2h-1v-1zm4 0h-1v1h-1v2h1v1h1v-1h1v-2h-1v-1z" />
      </svg>
    );
    pillStyle = "border-blue-500/20 bg-blue-500/5 text-blue-300";
  } else if (tag === "Python") {
    icon = (
      <svg className={`${iconSize} text-yellow-500`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.25.18l.9.2.75.77.1.95-.23.97-.93.55-1 .1H11.2V4.8h3.35l.9.2.75.77.1.95-.23.97-.93.55-1 .1h-4.32l-.9-.2-.75-.77-.1-.95.23-.97.93-.55 1-.1h2.52v-1.1H8.75l-.9-.2-.75-.77-.1-.95.23-.97.93-.55 1-.1h4.32z" />
      </svg>
    );
    pillStyle = "border-yellow-500/20 bg-yellow-500/5 text-yellow-300";
  } else if (tag === "DSA" || tag === "Algorithms" || tag === "LangGraph") {
    icon = (
      <svg className={`${iconSize} text-orange-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
    pillStyle = "border-orange-500/20 bg-orange-500/5 text-orange-300";
  } else if (tag === "JWT" || tag === "Basics" || tag === "Problem Solving") {
    icon = (
      <svg className={`${iconSize} text-orange-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );
    pillStyle = "border-orange-500/20 bg-orange-500/5 text-orange-300";
  }
  
  return (
    <span key={tag} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold transition-all duration-300 ${pillStyle}`}>
      {icon}
      {tag}
    </span>
  );
};

export default function TimelineItem({ item, index }) {
  const { dark } = useTheme();
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="relative pl-20"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(-24px)",
        transition: `all 0.5s ease ${index * 100}ms`,
      }}
    >
      {/* timeline connector dot */}
      <div
        className="absolute left-5 top-8 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 transition-colors duration-500"
        style={{ boxShadow: "0 0 18px rgba(255,107,0,0.5)" }}
      >
        <div className="h-2.5 w-2.5 rounded-full bg-white" />
      </div>

      {/* timeline card item */}
      <div
        className={`rounded-2xl border p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between transition-colors duration-500 hover:border-orange-500/30 ${
          dark ? "border-white/5 bg-[#070a13]" : "border-black/5 bg-white"
        }`}
      >
        {/* Left/Middle content: icon & text description */}
        <div className="flex gap-5 items-start">
          {/* Square Icon Container */}
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-zinc-950/80 border border-white/5 flex-shrink-0 shadow-md">
            {renderJourneyIcon(item.icon)}
          </div>
          
          {/* Card core texts */}
          <div className="flex-grow">
            <span className="text-xs font-black uppercase tracking-widest text-orange-500">
              {item.year}
            </span>
            <h3 className={`mb-1.5 mt-1 text-xl font-black transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
              {item.title}
            </h3>
            <p className={`text-[13.5px] leading-relaxed max-w-xl ${dark ? "text-zinc-400" : "text-[#555]"}`}>
              {item.desc}
            </p>
          </div>
        </div>

        {/* Right content: pill-shaped tags */}
        <div className="flex flex-wrap gap-1.5 md:justify-end max-w-full md:max-w-[280px]">
          {item.tags?.map((t) => renderTagWithIcon(t, dark))}
        </div>
      </div>
    </div>
  );
}
