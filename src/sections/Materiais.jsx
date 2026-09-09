import { Instagram, Share2 } from "lucide-react";
import { INSTAGRAM, shareWhatsApp, siteUrl } from "../data/links";

export default function Materiais() {
  const texto = `Eu voto Nathan Macena 1522, deputado federal. O Amazonas em primeiro lugar. ${siteUrl()}`;

  return (
    <section id="materiais" className="sec-pad bg-bg-light">
      <div className="container-c">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700">
          Material de campanha
        </p>
        <h2 className="mt-3 grid gap-[2px]">
          <span className="t-outline">Divulgue o</span>
          <span className="t-solid">1522</span>
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed font-semibold text-ink-soft">
          Jingle, santinho e PDF oficiais ainda estão sendo preparados. Enquanto isso, compartilhe o
          número e acompanhe a campanha no Instagram.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={shareWhatsApp(texto)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-c bg-zap text-white"
          >
            <Share2 className="size-4" aria-hidden="true" />
            Compartilhar no WhatsApp
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-c bg-blue-700 text-white"
          >
            <Instagram className="size-4" aria-hidden="true" />
            Seguir @nathanmacenna
          </a>
        </div>
      </div>
    </section>
  );
}
