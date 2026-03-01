export default function GhostBtn({ children, href }) {
  return (
    <a
      href={href}
      className="rounded-lg border border-orange-500/40 px-5 py-2.5 text-sm font-semibold text-orange-500 transition-all duration-200 hover:bg-orange-500/10"
    >
      {children}
    </a>
  );
}
