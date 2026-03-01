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
      className={`py-32 transition-colors duration-500 ${dark ? "bg-[#0f0f0f]" : "bg-white"}`}
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
            className={`mb-16 text-4xl font-black transition-colors duration-300 lg:text-5xl ${dark ? "text-white" : "text-[#0f0f0f]"}`}
          >
            How I got here
          </h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500/40 to-transparent" />
          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <TimelineItem key={`${item.year}-${item.title}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
