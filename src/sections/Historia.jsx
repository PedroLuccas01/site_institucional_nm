import { ArrowRight } from "lucide-react";

const PARAGRAFOS = [
  "Eu não comecei em Brasília. Eu comecei no interior.",
  "Nasci em Parintins. Foi em Careiro Castanho que o povo me deu a honra de governar: duas eleições, oito anos à frente da prefeitura, escutando comunidade, liderança e quem vive longe do asfalto da capital.",
  "Em 2020, a reeleição veio com 11.222 votos. Número que eu não esqueço, porque voto no interior tem nome, tem rosto e tem cobrança no dia seguinte.",
  "Agora o passo é outro: levar essa experiência para a Câmara dos Deputados. O Amazonas não pode ser tratado como detalhe. Município, ramal, posto de saúde, escola e produção rural precisam de voz em Brasília.",
  "A campanha é na rua. Encontro em bairro, palanque em comunidade, conversa na porta de casa. O mesmo jeito que eu trabalhei no Careiro é o jeito que eu quero trabalhar pelo Estado.",
  "Eu não venho pedir voto em troca de palanque vazio. Venho pedir voto para o Amazonas ficar em primeiro lugar.",
  "Eu sou Nathan Macena. Deputado Federal. Número 1522.",
];

export default function Historia() {
  return (
    <section id="historia" className="sec-pad bg-white">
      <div className="container-c grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-lime-brand">
            A história
          </p>
          <h2 className="mt-3 grid gap-[2px]">
            <span className="t-outline">Minha</span>
            <span className="t-solid">História</span>
          </h2>
          <img
            src="/assets/nathan-historia.jpg"
            alt="Apoiadores de Nathan Macena 1522 em campanha nas ruas do Amazonas"
            loading="lazy"
            className="mt-8 aspect-square w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
        <div>
          {PARAGRAFOS.map((p) => (
            <p key={p.slice(0, 24)} className="mb-4 text-[15px] leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
          <a href="#legado" className="btn-c mt-4 border-2 border-blue-700 bg-transparent text-blue-700">
            Ver a campanha nas ruas
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
