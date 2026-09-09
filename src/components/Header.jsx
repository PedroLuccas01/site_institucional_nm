import { useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { CONTATO, NAV } from "../data/links";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-blue-900">
        <div className="container-c flex items-center justify-between gap-4 py-3">
          <a
            href="/#inicio"
            className="flex items-center rounded-lg bg-white px-3 py-1.5"
            aria-label="Nathan Macena 1522, início"
          >
            <Logo />
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-bold uppercase tracking-wide text-white/90 transition-colors hover:text-lime-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={CONTATO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-c bg-lime-brand text-blue-900 max-sm:hidden"
            >
              <Instagram className="size-4" aria-hidden="true" />
              Fale comigo no Instagram
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="rounded-full bg-white/10 p-2.5 text-white lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-white/10 lg:hidden" aria-label="Navegação mobile">
            <div className="container-c flex flex-col py-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-bold uppercase tracking-wide text-white/90"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={CONTATO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-c mt-2 mb-4 w-fit bg-lime-brand text-blue-900 sm:hidden"
              >
                <Instagram className="size-4" aria-hidden="true" />
                Fale comigo no Instagram
              </a>
            </div>
          </nav>
        )}
      </div>
      <p className="bg-lime-brand px-3 py-1.5 text-center text-[10px] leading-tight font-semibold text-blue-900 sm:text-[11px]">
        Propaganda Eleitoral 2026 · Pago por Eleição 2026 Nathan Macena de Souza Deputado Federal ·
        CNPJ 68.237.672/0001-59
      </p>
    </header>
  );
}
