import { Frame } from "lucide-react";

export default function VistaCampanha() {
  return (
    <section className="relative overflow-hidden bg-lime-brand py-12">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-wrap items-center gap-6 overflow-hidden text-[46px] font-black italic uppercase text-blue-900/10 select-none"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i}>Nathan 1522</span>
        ))}
      </span>
      <div className="container-c relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(28px,6vw,48px)] leading-none font-black uppercase text-blue-900">
            Vista a campanha
          </h2>
          <p className="mt-3 text-[15px] font-semibold text-blue-900/85">
            Troque sua foto de perfil e mostre pra todo mundo: você também está fechado com o 1522.
          </p>
        </div>
        <a href="#moldura" className="btn-c shrink-0 bg-blue-700 text-white">
          <Frame className="size-4" aria-hidden="true" />
          Fazer minha moldura
        </a>
      </div>
    </section>
  );
}
