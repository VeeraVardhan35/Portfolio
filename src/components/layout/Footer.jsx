import { useTheme } from "../../context/ThemeContext";
import { BRAND, SOCIAL_LINKS } from "../../data/portfolioData";

export default function Footer() {
  const { dark } = useTheme();
  const footerLinks = [
    { name: "GitHub", href: SOCIAL_LINKS.github },
    { name: "LinkedIn", href: SOCIAL_LINKS.linkedin },
    { name: "Codeforces", href: SOCIAL_LINKS.codeforces },
    { name: "LeetCode", href: SOCIAL_LINKS.leetcode },
    { name: "AtCoder", href: SOCIAL_LINKS.atcoder },
  ];

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
          {BRAND}
          <span className="text-orange-500">.</span>Dev
        </span>
        <p
          className={`text-xs transition-colors duration-300 ${dark ? "text-[#b3b3b3]" : "text-[#777]"}`}
        >
          (c) {new Date().getFullYear()} Designed and built with care.
        </p>
        <div className="flex flex-wrap gap-5">
          {footerLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`text-xs font-semibold transition-colors duration-200 hover:text-orange-500 ${
                dark ? "text-[#b3b3b3]" : "text-[#777]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
