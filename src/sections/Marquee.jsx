export default function Marquee() {
  const text = "1522 · NATHAN MACENA · VOTE 1522 · O AMAZONAS EM PRIMEIRO LUGAR · 1522 · ".repeat(4);

  return (
    <div className="overflow-hidden bg-blue-900 py-4" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="px-2 text-[clamp(18px,3.4vw,30px)] font-black italic whitespace-nowrap text-lime-brand"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
