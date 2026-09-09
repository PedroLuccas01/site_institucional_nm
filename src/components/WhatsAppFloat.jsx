import { INSTAGRAM } from "../data/links";

export default function WhatsAppFloat() {
  return (
    <a
      href={INSTAGRAM}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir Instagram de Nathan Macena"
      className="wa-float"
    >
      <svg className="wa-float-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="#fff" />
      </svg>
    </a>
  );
}
