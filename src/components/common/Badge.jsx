import { useTheme } from "../../context/ThemeContext";

export default function Badge({ label, forceDark = false }) {
  const { dark } = useTheme();
  const isDark = forceDark || dark;

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors duration-300 ${
        isDark
          ? "border-orange-500/25 bg-[#1a1a1a] text-orange-300"
          : "border-orange-200 bg-orange-50 text-orange-700"
      }`}
    >
      {label}
    </span>
  );
}
