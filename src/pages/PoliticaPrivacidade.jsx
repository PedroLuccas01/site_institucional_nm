import LegalPage, { LegalH2, LegalP, LegalUl } from "../components/LegalPage";

export default function PoliticaPrivacidade() {
  return (
    <LegalPage kicker="Transparência" titulo="Política de Privacidade">
      <LegalP>
        Esta política explica como o site oficial da campanha de Nathan Macena de Souza, candidato a
        Deputado Federal pelo Amazonas, número 1522, trata dados pessoais, em conformidade com a Lei
        Geral de Proteção de Dados (Lei nº 13.709/2018).
      </LegalP>
      <LegalH2>Quem é o controlador</LegalH2>
      <LegalP>
        Eleição 2026 Nathan Macena de Souza Deputado Federal, CNPJ 68.237.672/0001-59. O contato para
        assuntos de privacidade é o Instagram oficial da campanha, divulgado no site.
      </LegalP>
      <LegalH2>Quais dados tratamos</LegalH2>
      <LegalUl
        items={[
          "Dados que você envia voluntariamente ao nos procurar pelas redes sociais, como nome, telefone e o conteúdo da mensagem.",
          "Dados técnicos de navegação, como páginas visitadas, tipo de dispositivo e navegador, usados apenas de forma agregada.",
          "Fotos enviadas na ferramenta de moldura, que são processadas somente no seu próprio navegador e nunca enviadas aos nossos servidores.",
        ]}
      />
      <LegalH2>Para que usamos</LegalH2>
      <LegalUl
        items={[
          "Responder a mensagens, convites e pedidos de informação.",
          "Divulgar propostas, agenda e materiais de campanha.",
          "Entender de forma agregada quais conteúdos são mais acessados, para melhorar o site.",
        ]}
      />
      <LegalH2>Base legal</LegalH2>
      <LegalP>
        O tratamento se apoia no consentimento que você fornece ao nos contatar, no legítimo interesse
        da comunicação política e no cumprimento de obrigações legais e regulatórias da legislação
        eleitoral.
      </LegalP>
      <LegalH2>Compartilhamento</LegalH2>
      <LegalP>
        Não vendemos dados pessoais. Podemos compartilhar informações com prestadores de serviço de
        tecnologia que apoiam a operação do site e com autoridades, quando houver exigência legal ou
        determinação da Justiça Eleitoral.
      </LegalP>
      <LegalH2>Retenção e segurança</LegalH2>
      <LegalP>
        Guardamos dados apenas pelo tempo necessário às finalidades acima ou pelos prazos exigidos pela
        legislação eleitoral, aplicando medidas técnicas e administrativas razoáveis de proteção.
      </LegalP>
      <LegalH2>Seus direitos</LegalH2>
      <LegalP>
        Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade,
        eliminação de dados e revogação de consentimento. Basta pedir pelo canal de contato do site, e
        responderemos nos prazos legais.
      </LegalP>
      <LegalH2>Menores de idade</LegalH2>
      <LegalP>
        O site é voltado ao público em geral. Não buscamos coletar dados de crianças e adolescentes sem
        o consentimento de quem detém a responsabilidade legal.
      </LegalP>
      <LegalH2>Alterações</LegalH2>
      <LegalP>
        Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data da
        última atualização está sempre indicada no topo desta página.
      </LegalP>
    </LegalPage>
  );
}
