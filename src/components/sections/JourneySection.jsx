import { TIMELINE } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import SectionTag from "../common/SectionTag";
import TimelineItem from "./TimelineItem";

export default function JourneySection() {
  const { dark } = useTheme();
  const [ref, visible] = useInView();

  return (
    <section
      id="journey"
      className={`py-32 transition-colors duration-500 ${dark ? "bg-[#050814]" : "bg-white"}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(30px)",
            transition: "all 0.6s ease",
          }}
        >
          <SectionTag text="Learning Journey" />
          <h2
            className={`mb-4 text-4xl font-black transition-colors duration-300 lg:text-5xl ${dark ? "text-white" : "text-[#0f0f0f]"}`}
          >
            From Algorithms to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              AI Systems
            </span>
          </h2>
          <p className={`mb-16 max-w-2xl text-sm md:text-base ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
            A journey of continuous learning, building, and solving real-world problems.
          </p>
        </div>

        {/* Timeline body wrapper */}
        <div className="relative">
          <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500/40 to-transparent" />
          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <TimelineItem key={`${item.year}-${item.title}`} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Timeline Bottom Banner Badge */}
        <div 
          className={`mt-16 flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
            dark ? "border-white/5 bg-white/[0.01] text-zinc-300" : "border-black/5 bg-zinc-50 text-zinc-700 shadow-sm"
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
              <span className="text-xs">★</span>
            </div>
            <p className="text-xs md:text-sm font-bold tracking-wide">
              Always <span className="text-orange-400">learning</span>. Always <span className="text-blue-400">building</span>. Always <span className="text-purple-400">improving</span>.
            </p>
          </div>
          <span className="text-orange-400 text-lg mr-2 font-bold pointer-events-none animate-pulse">✦</span>
        </div>
      </div>
    </section>
  );
}
