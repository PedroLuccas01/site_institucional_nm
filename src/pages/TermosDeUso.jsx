import LegalPage, { LegalH2, LegalP, LegalUl } from "../components/LegalPage";

export default function TermosDeUso() {
  return (
    <LegalPage kicker="Regras do site" titulo="Termos de Uso">
      <LegalP>
        Ao navegar neste site você concorda com os termos abaixo. Este é um canal oficial de propaganda
        eleitoral da campanha de Nathan Macena de Souza, candidato a Deputado Federal, número 1522.
      </LegalP>
      <LegalH2>Finalidade do site</LegalH2>
      <LegalP>
        O site tem finalidade informativa e de propaganda eleitoral: apresentar a trajetória do
        candidato, suas propostas, agenda de campanha e canais de contato.
      </LegalP>
      <LegalH2>Uso permitido</LegalH2>
      <LegalUl
        items={[
          "Ler, compartilhar e divulgar o conteúdo publicado, mantendo o sentido original.",
          "Baixar e usar os materiais de campanha disponibilizados para divulgação apoiadora.",
          "Usar a ferramenta de moldura com fotos próprias ou com autorização de quem aparece na imagem.",
        ]}
      />
      <LegalH2>Uso proibido</LegalH2>
      <LegalUl
        items={[
          "Alterar textos, números, imagens ou peças para criar conteúdo falso ou enganoso.",
          "Usar o material da campanha para discurso de ódio, ofensa, desinformação ou fins comerciais.",
          "Tentar invadir, sobrecarregar ou explorar falhas do site e de seus serviços.",
        ]}
      />
      <LegalH2>Ferramenta de moldura</LegalH2>
      <LegalP>
        O processamento da imagem acontece no seu próprio navegador. Você é responsável pelo conteúdo da
        foto enviada e declara ter autorização para usá-la.
      </LegalP>
      <LegalH2>Propriedade intelectual</LegalH2>
      <LegalP>
        Marca, logotipo, textos, fotos e peças gráficas pertencem à campanha e não podem ser utilizados
        de forma que sugira apoio, patrocínio ou vínculo inexistente.
      </LegalP>
      <LegalH2>Links externos</LegalH2>
      <LegalP>
        O site aponta para redes sociais. Esses serviços têm regras próprias e a campanha não responde
        pelo conteúdo ou disponibilidade de plataformas de terceiros.
      </LegalP>
      <LegalH2>Limitação de responsabilidade</LegalH2>
      <LegalP>
        Buscamos manter as informações corretas e atualizadas, mas o site é fornecido no estado em que
        se encontra, podendo passar por indisponibilidades técnicas e ajustes de conteúdo.
      </LegalP>
      <LegalH2>Legislação aplicável</LegalH2>
      <LegalP>
        Estes termos são regidos pela legislação brasileira, incluindo a Lei nº 9.504/1997 e as
        resoluções do Tribunal Superior Eleitoral aplicáveis à propaganda eleitoral na internet.
      </LegalP>
    </LegalPage>
  );
}
