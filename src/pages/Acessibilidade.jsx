import LegalPage, { LegalH2, LegalP, LegalUl } from "../components/LegalPage";

export default function Acessibilidade() {
  return (
    <LegalPage kicker="Site para todos" titulo="Acessibilidade">
      <LegalP>
        Campanha é conversa com o povo inteiro, e isso inclui quem navega com leitor de tela, teclado
        ou baixa visão. Este site é construído para ser usado pelo maior número possível de pessoas.
      </LegalP>
      <LegalH2>O que já aplicamos</LegalH2>
      <LegalUl
        items={[
          "Estrutura semântica com títulos hierárquicos, seções e navegação identificada.",
          "Textos alternativos nas imagens e rótulos acessíveis em botões e ícones.",
          "Navegação completa por teclado, incluindo menu, accordion de propostas e galeria de entregas.",
          "Contraste reforçado entre texto e fundo nas cores da campanha.",
          "Layout responsivo, que funciona bem em celular e suporta ampliação de zoom.",
          "Respeito à preferência de redução de movimento do sistema, desligando animações.",
        ]}
      />
      <LegalH2>Referência técnica</LegalH2>
      <LegalP>
        Usamos como referência as diretrizes WCAG 2.1 no nível AA e as boas práticas do modelo
        brasileiro de acessibilidade em governo eletrônico.
      </LegalP>
      <LegalH2>Limitações conhecidas</LegalH2>
      <LegalUl
        items={[
          "Alguns materiais gráficos de campanha podem conter texto embutido na imagem.",
          "Conteúdos hospedados em redes sociais seguem a acessibilidade de cada plataforma.",
        ]}
      />
      <LegalH2>Encontrou uma barreira?</LegalH2>
      <LegalP>
        Se alguma parte do site dificultou seu acesso, fale com a campanha pelo Instagram divulgado no
        rodapé. Descreva a página e o problema encontrado, e trabalhamos para corrigir o quanto antes.
      </LegalP>
    </LegalPage>
  );
}
