import { useInView } from "../../hooks/useInView";
import { useTheme } from "../../context/ThemeContext";

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
      <div
        className="absolute left-5 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500"
        style={{ boxShadow: "0 0 18px rgba(255,107,0,0.5)" }}
      >
        <div className="h-2.5 w-2.5 rounded-full bg-white" />
      </div>

      <div
        className={`rounded-2xl border p-6 transition-colors duration-300 ${
          dark ? "border-white/6 bg-[#1a1a1a]" : "border-black/6 bg-[#f5f5f5]"
        }`}
      >
        <span className="text-xs font-black uppercase tracking-widest text-orange-500">
          {item.year}
        </span>
        <h3 className={`mb-2 mt-1 text-xl font-black ${dark ? "text-white" : "text-[#0f0f0f]"}`}>
          {item.title}
        </h3>
        <p className={`text-sm leading-relaxed ${dark ? "text-[#b3b3b3]" : "text-[#555]"}`}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}
