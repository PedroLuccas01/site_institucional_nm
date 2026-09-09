const STATS = [
  { n: "2x", label: "eleito prefeito de Careiro Castanho" },
  { n: "8 anos", label: "à frente da gestão municipal" },
  { n: "11.222", label: "votos na reeleição de 2020" },
  { n: "1522", label: "número pra não esquecer" },
];

export default function Stats() {
  return (
    <section className="bg-bg-light py-10 md:py-14">
      <div className="container-c grid grid-cols-2 gap-6 lg:grid-cols-4">
        {STATS.map((item) => (
          <div key={item.n} className="border-l-4 border-lime-brand pl-4">
            <p className="text-[clamp(28px,6vw,46px)] leading-none font-black italic text-blue-700">
              {item.n}
            </p>
            <p className="mt-2 text-[13px] leading-snug font-semibold text-ink-soft">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
