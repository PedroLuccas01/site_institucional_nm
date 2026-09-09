import { useState } from "react";
import {
  Briefcase,
  ChevronDown,
  Flag,
  GraduationCap,
  HeartPulse,
  Map,
  Share2,
  ShieldCheck,
  Sprout,
  Trophy,
} from "lucide-react";
import { EIXOS } from "../data/propostas";
import { shareWhatsApp, siteUrl } from "../data/links";

const ICONS = {
  GraduationCap,
  HeartPulse,
  Trophy,
  Map,
  Sprout,
  Briefcase,
  ShieldCheck,
  Flag,
};

export default function Propostas() {
  const [aberto, setAberto] = useState("municipios");

  return (
    <section id="propostas" className="sec-pad bg-bg-light">
      <div className="container-c">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700">O plano</p>
        <h2 className="mt-3 grid gap-[2px]">
          <span className="t-outline">Minhas</span>
          <span className="t-solid">Propostas</span>
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed font-semibold text-ink-soft">
          Pautas que a campanha defende nas comunidades e quer levar a Brasília: municípios, saúde,
          educação, infraestrutura e o interior do Amazonas. Vote 1522.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {EIXOS.map((eixo) => {
            const Icon = ICONS[eixo.icone];
            const abertoAgora = aberto === eixo.id;
            return (
              <div key={eixo.id} id={eixo.id} className="card-c h-fit overflow-hidden">
                <button
                  type="button"
                  onClick={() => setAberto(abertoAgora ? null : eixo.id)}
                  aria-expanded={abertoAgora}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blue-700 text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-[15px] leading-tight font-extrabold uppercase text-blue-900">
                    {eixo.nome}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-5 shrink-0 text-blue-700 transition-transform ${abertoAgora ? "rotate-180" : ""}`}
                  />
                </button>
                {abertoAgora && (
                  <div className="border-t border-black/5 px-6 py-5">
                    {eixo.propostas.map((p) => (
                      <div key={p.id} className="mb-5 last:mb-0">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-[15px] font-extrabold text-blue-700">
                            {p.id}. {p.titulo}
                          </h3>
                          <a
                            href={shareWhatsApp(
                              `${p.titulo}, proposta do Nathan Macena 1522. Veja: ${siteUrl()}/#${eixo.id}`,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Compartilhar proposta ${p.titulo} no WhatsApp`}
                            className="grid size-8 shrink-0 place-items-center rounded-full bg-lime-brand text-blue-900 transition-transform hover:scale-110"
                          >
                            <Share2 className="size-4" aria-hidden="true" />
                          </a>
                        </div>
                        <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{p.texto}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
