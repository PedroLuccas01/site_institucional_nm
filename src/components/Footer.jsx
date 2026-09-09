import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import { FACEBOOK, INSTAGRAM, LEGAL, TIKTOK } from "../data/links";
import Logo from "./Logo";

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.5 3c.4 2.4 1.8 4.2 4.2 4.6v3.1c-1.4 0-2.7-.4-3.9-1.2v6.7c0 3.4-2.7 6.1-6.1 6.2-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.7 0-3 1.4-3 3.1s1.3 3.1 3 3.1 3.1-1.4 3.1-3.1V3h2.7Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-c grid gap-8 py-12 md:grid-cols-[1fr_auto]">
        <div>
          <span className="inline-flex rounded-lg bg-white px-3 py-1.5">
            <Logo />
          </span>
          <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2" aria-label="Navegação do rodapé">
            {[
              { href: "/#inicio", label: "Início" },
              { href: "/#propostas", label: "Propostas" },
              { href: "/#legado", label: "Campanha" },
              { href: "/#contato", label: "Contato" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-bold uppercase text-white/80 hover:text-lime-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-start gap-3">
          {[
            { href: INSTAGRAM, Icon: Instagram, label: "Instagram" },
            { href: FACEBOOK, Icon: Facebook, label: "Facebook" },
            { href: TIKTOK, Icon: TikTokIcon, label: "TikTok" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid size-11 place-items-center rounded-full bg-white/10 text-lime-brand transition-colors hover:bg-white/20"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-c grid gap-5 py-8 text-center">
          <p className="text-[12px] leading-relaxed font-bold tracking-wide uppercase text-white/80">
            Propaganda Eleitoral | MDB | Eleição 2026 Nathan Macena de Souza Deputado Federal | CNPJ
            68.237.672/0001-59
          </p>
          <p className="text-[11px] leading-relaxed text-white/55">
            (Base legal: art. 57-C da Lei nº 9.504/1997 c/c art. 29, §5º, da Resolução TSE nº
            23.610/2019)
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Páginas legais">
            {LEGAL.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[12px] font-semibold text-white/75 underline underline-offset-4 hover:text-lime-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-[11px] leading-relaxed text-white/55">
            Copyright © 2026 Nathan Macena de Souza Candidato a Deputado Federal - Todos os direitos
            reservados
          </p>
          <p className="text-[12px] text-white/70">
            <a
              href="https://deltasollutions.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-lime-brand"
            >
              Desenvolvido por Delta Sollutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
