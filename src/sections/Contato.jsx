import { Facebook, Instagram } from "lucide-react";
import { CONTATO, FACEBOOK, INSTAGRAM, TIKTOK } from "../data/links";

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.5 3c.4 2.4 1.8 4.2 4.2 4.6v3.1c-1.4 0-2.7-.4-3.9-1.2v6.7c0 3.4-2.7 6.1-6.1 6.2-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.7 0-3 1.4-3 3.1s1.3 3.1 3 3.1 3.1-1.4 3.1-3.1V3h2.7Z" />
    </svg>
  );
}

export default function Contato() {
  return (
    <section id="contato" className="sec-pad bg-blue-900 text-white">
      <div className="container-c">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-lime-brand">
          Fique por dentro
        </p>
        <h2 className="mt-3 grid gap-[2px]">
          <span className="t-outline-light">Acompanhe</span>
          <span className="t-solid-light">A caminhada</span>
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 rounded-xl bg-white/8 p-6 transition-colors hover:bg-white/15"
          >
            <Instagram className="size-9 text-lime-brand" aria-hidden="true" />
            <span className="text-[15px] font-extrabold uppercase">Instagram</span>
            <span className="text-sm text-white/75">@nathanmacenna</span>
          </a>
          <a
            href={FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 rounded-xl bg-white/8 p-6 transition-colors hover:bg-white/15"
          >
            <Facebook className="size-9 text-lime-brand" aria-hidden="true" />
            <span className="text-[15px] font-extrabold uppercase">Facebook</span>
            <span className="text-sm text-white/75">Nathan Macena</span>
          </a>
          <a
            href={TIKTOK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 rounded-xl bg-white/8 p-6 transition-colors hover:bg-white/15"
          >
            <TikTokIcon className="size-9 text-lime-brand" />
            <span className="text-[15px] font-extrabold uppercase">TikTok</span>
            <span className="text-sm text-white/75">@nathanmacenasouza</span>
          </a>
        </div>
        <div className="mt-10 text-center">
          <a
            href={CONTATO}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-c bg-lime-brand text-blue-900"
          >
            <Instagram className="size-4" aria-hidden="true" />
            Fale comigo no Instagram
          </a>
          <p className="mt-4 text-sm font-extrabold tracking-widest uppercase text-lime-brand">
            Nathan Macena · 1522
          </p>
        </div>
      </div>
    </section>
  );
}
