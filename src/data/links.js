export const INSTAGRAM = "https://www.instagram.com/nathanmacenna/";
export const FACEBOOK = "https://www.facebook.com/nathanmacenna";
export const TIKTOK = "https://www.tiktok.com/@nathanmacenasouza";
export const EMAIL = "contato@nathanmacena.social.br";

export const CONTATO = INSTAGRAM;

export const NAV = [
  { href: "/#inicio", label: "Início" },
  { href: "/#historia", label: "Quem é o Nathan" },
  { href: "/#propostas", label: "Propostas" },
  { href: "/#legado", label: "Campanha" },
  { href: "/#contato", label: "Contato" },
];

export const LEGAL = [
  { to: "/politica-de-privacidade", label: "Política de Privacidade" },
  { to: "/termos-de-uso", label: "Termos de uso" },
  { to: "/cookies", label: "Cookies" },
  { to: "/sobre-anuncios", label: "Sobre Anúncios" },
  { to: "/acessibilidade", label: "Acessibilidade" },
];

export function shareWhatsApp(text) {
  return "https://wa.me/?text=" + encodeURIComponent(text);
}

export function siteUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  return "https://nathanmacena.com.br";
}
