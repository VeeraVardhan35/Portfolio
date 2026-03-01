export default function OrangeBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] active:scale-95"
    >
      {children}
    </button>
  );
}
