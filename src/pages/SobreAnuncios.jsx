import LegalPage, { LegalH2, LegalP, LegalUl } from "../components/LegalPage";

export default function SobreAnuncios() {
  return (
    <LegalPage kicker="Transparência eleitoral" titulo="Sobre Anúncios">
      <LegalP>
        Toda a comunicação paga desta campanha segue a legislação eleitoral brasileira e é identificada
        como propaganda eleitoral.
      </LegalP>
      <LegalH2>Quem paga</LegalH2>
      <LegalP>
        Os impulsionamentos são contratados por Eleição 2026 Nathan Macena de Souza Deputado Federal,
        CNPJ 68.237.672/0001-59, com recursos declarados à Justiça Eleitoral e prestação de contas
        pública.
      </LegalP>
      <LegalH2>Como identificamos</LegalH2>
      <LegalUl
        items={[
          "Todas as peças pagas trazem a identificação de propaganda eleitoral e o número 1522.",
          "O impulsionamento ocorre apenas em plataformas que oferecem esse serviço de forma regular e transparente.",
          "Não usamos disparo em massa de mensagens nem contas automatizadas.",
        ]}
      />
      <LegalH2>Base legal</LegalH2>
      <LegalP>
        O impulsionamento de conteúdo eleitoral é permitido pelo art. 57-C da Lei nº 9.504/1997,
        observado o art. 29, §5º, da Resolução TSE nº 23.610/2019, sendo contratado exclusivamente por
        candidato, partido ou coligação e identificado como propaganda.
      </LegalP>
      <LegalH2>Segmentação</LegalH2>
      <LegalP>
        A segmentação usa critérios amplos oferecidos pelas próprias plataformas, como localidade e
        faixa de idade. Não construímos perfis individuais a partir de dados sensíveis.
      </LegalP>
      <LegalH2>Denúncias e dúvidas</LegalH2>
      <LegalP>
        Se você encontrar um anúncio suspeito que use o nome ou a imagem do candidato sem autorização,
        avise a campanha pelo canal de contato do site para que possamos apurar e solicitar a remoção.
      </LegalP>
    </LegalPage>
  );
}
