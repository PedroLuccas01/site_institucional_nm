import { ArrowRight, Instagram } from "lucide-react";
import { CONTATO } from "../data/links";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-blue-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, #1e6bff 0%, transparent 55%), radial-gradient(circle at 85% 80%, #2bb34a 0%, transparent 45%)",
        }}
      />
      <div className="container-c relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="inline-block bg-blue-700 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.18em] uppercase">
            Candidato a Deputado Federal · MDB
          </p>
          <h1 className="mt-5 text-[clamp(44px,11vw,96px)] leading-[0.85] font-black tracking-tight uppercase italic">
            Nathan <span className="text-lime-brand">Macena</span>
          </h1>
          <p className="mt-2 text-[clamp(18px,4vw,32px)] font-extrabold tracking-[0.08em] uppercase">
            O Amazonas em primeiro lugar
          </p>
          <div className="mt-6 inline-flex -rotate-2 items-center rounded-2xl bg-lime-brand px-6 py-3 shadow-lg">
            <span className="text-[clamp(40px,9vw,68px)] leading-none font-black italic text-blue-900">
              1522
            </span>
          </div>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/85 sm:text-base">
            Ex-prefeito de Careiro Castanho, eleito duas vezes, agora candidato a deputado federal pelo
            Amazonas. Experiência de quem governou no interior e agenda de quem anda nas comunidades.
            Vote 1522.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#propostas" className="btn-c bg-lime-brand text-blue-900">
              Conheça as propostas
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={CONTATO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-c border-2 border-white bg-transparent text-white"
            >
              <Instagram className="size-4" aria-hidden="true" />
              Fale comigo no Instagram
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[28px] bg-lime-brand/20 blur-2xl" aria-hidden="true" />
          <img
            src="/assets/nathan-hero.jpg"
            alt="Nathan Macena, candidato a Deputado Federal pelo Amazonas, número 1522"
            width={1080}
            height={1350}
            className="relative w-full rounded-2xl object-cover object-top shadow-2xl aspect-[4/5] max-h-[640px]"
          />
        </div>
      </div>
    </section>
  );
}
