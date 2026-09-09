import LegalPage, { LegalH2, LegalP, LegalUl } from "../components/LegalPage";

export default function Cookies() {
  return (
    <LegalPage kicker="Seu navegador" titulo="Cookies">
      <LegalP>
        Cookies são pequenos arquivos que um site guarda no seu navegador. Aqui explicamos quais
        recursos desse tipo o site da campanha utiliza e como você mantém o controle.
      </LegalP>
      <LegalH2>Tipos que utilizamos</LegalH2>
      <LegalUl
        items={[
          "Essenciais: garantem o funcionamento básico das páginas e da navegação.",
          "Preferências: guardam pequenos ajustes de uso, como estado de menus e recursos já vistos.",
          "Medição agregada: ajudam a entender quais seções são mais acessadas, sem identificar você individualmente.",
        ]}
      />
      <LegalH2>O que não fazemos</LegalH2>
      <LegalP>
        Não usamos cookies para montar perfis políticos individuais nem vendemos dados de navegação a
        terceiros. As fotos usadas na ferramenta de moldura permanecem no seu dispositivo.
      </LegalP>
      <LegalH2>Cookies de terceiros</LegalH2>
      <LegalP>
        Ao clicar em links de Instagram, Facebook ou TikTok, essas plataformas podem gravar seus
        próprios cookies, seguindo as políticas de cada empresa.
      </LegalP>
      <LegalH2>Como gerenciar</LegalH2>
      <LegalUl
        items={[
          "Nas configurações do navegador é possível bloquear ou apagar cookies a qualquer momento.",
          "O modo de navegação privada limita o armazenamento ao período da sessão.",
          "Bloquear cookies essenciais pode afetar partes do site, como a ferramenta de moldura.",
        ]}
      />
      <LegalH2>Atualizações</LegalH2>
      <LegalP>
        Se novos recursos exigirem outros cookies, esta página será atualizada com a descrição
        correspondente.
      </LegalP>
    </LegalPage>
  );
}
