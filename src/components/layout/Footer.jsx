import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { dark } = useTheme();

  return (
    <footer
      className={`border-t py-8 transition-colors duration-500 ${
        dark ? "border-white/6 bg-[#0f0f0f]" : "border-black/6 bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6">
        <span
          className={`text-lg font-black transition-colors duration-300 ${dark ? "text-white" : "text-[#0f0f0f]"}`}
        >
          Alex<span className="text-orange-500">.</span>Dev
        </span>
        <p
          className={`text-xs transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}
        >
          (c) {new Date().getFullYear()} Designed and built with care.
        </p>
        <div className="flex gap-5">
          {["GitHub", "LinkedIn", "Twitter", "Email"].map((name) => (
            <a
              key={name}
              href="#"
              className={`text-xs font-semibold transition-colors duration-200 hover:text-orange-500 ${
                dark ? "text-[#b3b3b3]" : "text-[#777]"
              }`}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
