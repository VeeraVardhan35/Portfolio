import { useTheme } from "../../context/ThemeContext";

export default function ThemeSlideToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`relative h-10 w-20 rounded-full border transition-all duration-300 ${
        dark
          ? "border-white/10 bg-[#1a1a1a]"
          : "border-black/10 bg-[#f5f5f5]"
      }`}
    >
      <span
        className={`absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white shadow-lg transition-transform duration-300 ${
          dark ? "translate-x-10" : "translate-x-0"
        }`}
      >
        {dark ? "D" : "L"}
      </span>
    </button>
  );
}
