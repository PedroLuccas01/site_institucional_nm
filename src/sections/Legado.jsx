import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, X } from "lucide-react";
import { FOTOS_CAMPANHA } from "../data/legado";
import { INSTAGRAM } from "../data/links";

export default function Legado() {
  const [aberto, setAberto] = useState(null);
  const [foto, setFoto] = useState(0);
  const touchRef = useRef(null);
  const total = FOTOS_CAMPANHA.length;

  const proxima = useCallback(() => setFoto((i) => (i + 1) % total), [total]);
  const anterior = useCallback(() => setFoto((i) => (i - 1 + total) % total), [total]);

  function abrir(index) {
    setFoto(index);
    setAberto(true);
  }

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e) => {
      if (e.key === "Escape") setAberto(null);
      if (e.key === "ArrowRight") proxima();
      if (e.key === "ArrowLeft") anterior();
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [aberto, proxima, anterior]);

  const atual = FOTOS_CAMPANHA[foto];

  return (
    <section id="legado" className="sec-pad bg-white">
      <div className="container-c">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-lime-brand">
          Na rua com o povo
        </p>
        <h2 className="mt-3 grid gap-[2px]">
          <span className="t-outline">A</span>
          <span className="t-solid">Campanha</span>
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {FOTOS_CAMPANHA.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => abrir(index)}
              className="group relative flex aspect-[4/5] items-end overflow-hidden rounded-xl bg-blue-900 text-left sm:aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.titulo}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent" />
              <span className="relative z-[1] w-full p-5">
                <span className="block text-[15px] font-extrabold uppercase text-white">
                  {item.titulo}
                </span>
                <span className="mt-1 block text-xs font-semibold text-white/80">{item.detalhe}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="mt-10">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-c bg-blue-700 text-white"
          >
            <Instagram className="size-4" aria-hidden="true" />
            Ver mais no Instagram
          </a>
        </div>
      </div>
      {aberto && atual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={atual.titulo}
          onClick={() => setAberto(null)}
          className="fixed inset-0 z-[100] grid place-items-center bg-blue-900/95 p-4 sm:p-6"
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-3xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-black uppercase text-white sm:text-xl">{atual.titulo}</p>
                <p className="mt-1 text-sm text-white/70">{atual.detalhe}</p>
              </div>
              <button
                type="button"
                aria-label="Fechar"
                onClick={() => setAberto(null)}
                className="grid size-10 shrink-0 place-items-center rounded-full bg-lime-brand text-blue-900"
              >
                <X className="size-5" />
              </button>
            </div>
            <div
              className="relative mt-4 aspect-[4/5] overflow-hidden rounded-xl bg-black sm:aspect-[4/3]"
              onTouchStart={(e) => {
                touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
              }}
              onTouchEnd={(e) => {
                const start = touchRef.current;
                touchRef.current = null;
                if (!start) return;
                const dx = e.changedTouches[0].clientX - start.x;
                const dy = e.changedTouches[0].clientY - start.y;
                if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
                  dx < 0 ? proxima() : anterior();
                }
              }}
            >
              {FOTOS_CAMPANHA.map((item, i) => (
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.titulo}
                  className={`absolute inset-0 size-full object-contain transition-opacity duration-500 ${
                    i === foto ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <button
                type="button"
                aria-label="Foto anterior"
                onClick={anterior}
                className="absolute top-1/2 left-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-blue-900/70 text-white hover:bg-blue-700"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Próxima foto"
                onClick={proxima}
                className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-blue-900/70 text-white hover:bg-blue-700"
              >
                <ChevronRight className="size-5" />
              </button>
              <span className="absolute bottom-3 left-3 rounded-full bg-blue-900/75 px-3 py-1 text-[11px] font-extrabold text-lime-brand">
                {foto + 1} / {total}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
