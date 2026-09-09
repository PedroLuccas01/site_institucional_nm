import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

export default function LegalPage({
  kicker,
  titulo,
  atualizado = "31 de agosto de 2026",
  children,
}) {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <section className="bg-blue-900 py-12 text-white">
          <div className="container-c">
            <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-lime-brand">
              {kicker}
            </p>
            <h1 className="mt-3 text-[clamp(30px,6vw,52px)] leading-[0.95] font-black uppercase">
              {titulo}
            </h1>
            <p className="mt-4 text-sm text-white/70">Última atualização: {atualizado}</p>
          </div>
        </section>
        <section className="sec-pad">
          <div className="container-c max-w-3xl">
            <div className="legal-prose text-[15px] leading-relaxed text-ink-soft">{children}</div>
            <Link to="/" className="btn-c mt-10 border-2 border-blue-700 bg-transparent text-blue-700">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Voltar para o início
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export function LegalH2({ children }) {
  return <h2 className="mt-8 mb-3 text-[19px] font-extrabold uppercase text-blue-900">{children}</h2>;
}

export function LegalP({ children }) {
  return <p className="mb-4">{children}</p>;
}

export function LegalUl({ items }) {
  return (
    <ul className="mb-4 grid gap-2 pl-5">
      {items.map((item) => (
        <li key={item.slice(0, 24)} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
  );
}
