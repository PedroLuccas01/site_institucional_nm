import { useEffect, useState } from "react";

const DIA = new Date("2026-10-04T08:00:00-04:00");

function restante() {
  const ms = Math.max(0, DIA.getTime() - Date.now());
  return {
    dias: Math.floor(ms / 864e5),
    horas: Math.floor((ms % 864e5) / 36e5),
    minutos: Math.floor((ms % 36e5) / 6e4),
    segundos: Math.floor((ms % 6e4) / 1e3),
  };
}

export default function Countdown() {
  const [tempo, setTempo] = useState(null);

  useEffect(() => {
    setTempo(restante());
    const id = window.setInterval(() => setTempo(restante()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const blocos = [
    { valor: tempo?.dias, rotulo: "dias" },
    { valor: tempo?.horas, rotulo: "horas" },
    { valor: tempo?.minutos, rotulo: "min" },
    { valor: tempo?.segundos, rotulo: "seg" },
  ];

  return (
    <div className="bg-lime-brand py-6">
      <div className="container-c text-center">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-900/70">
          Contagem regressiva para o dia 04/10
        </p>
        <div className="mt-4 flex items-end justify-center gap-2 sm:gap-4">
          {blocos.map((bloco, i) => (
            <div key={bloco.rotulo} className="flex items-end gap-2 sm:gap-4">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="pb-6 text-2xl font-extrabold text-blue-900/40 sm:text-3xl"
                >
                  :
                </span>
              )}
              <div className="min-w-[64px] rounded-xl bg-blue-900 px-3 py-2 sm:min-w-[86px] sm:px-4 sm:py-3">
                <span className="block text-2xl leading-none font-extrabold tabular-nums text-white sm:text-4xl">
                  {bloco.valor === undefined ? "--" : String(bloco.valor).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-[10px] font-extrabold tracking-widest uppercase text-lime-brand">
                  {bloco.rotulo}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[13px] font-extrabold tracking-wide uppercase text-blue-900 sm:text-base">
          Vote 1522
        </p>
      </div>
    </div>
  );
}
