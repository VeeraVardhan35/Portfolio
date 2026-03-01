export default function SectionTag({ text }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-0.5 w-6 bg-orange-500" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
        {text}
      </span>
    </div>
  );
}
