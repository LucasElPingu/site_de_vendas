import styles from "./cta-button.module.css";

export default function CTAButton({ href, label }: { href: string; label: string }) {
  return (
    // Link estilizado como botão para ação principal (CTA)
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cta}
      aria-label={label}
    >
      {/* Ícone do WhatsApp para reforçar a ação de contato */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20.52 3.48C18.24 1.2 15.24 0 12.06 0 5.52 0 .18 5.34.18 11.88c0 2.1.54 4.14 1.56 5.94L0 24l6.36-1.62c1.74.96 3.72 1.44 5.7 1.44h.06c6.54 0 11.88-5.34 11.88-11.88 0-3.18-1.26-6.18-3.48-8.46ZM12.12 21.6h-.06c-1.8 0-3.54-.48-5.1-1.38l-.36-.18-3.78.96 1.02-3.66-.24-.36a9.8 9.8 0 0 1-1.62-5.28c0-5.4 4.44-9.84 9.9-9.84 2.64 0 5.1 1.02 6.96 2.88 1.86 1.86 2.88 4.32 2.88 6.96 0 5.46-4.44 9.9-9.9 9.9Zm5.52-7.38c-.3-.18-1.8-.9-2.1-1.02-.3-.12-.54-.18-.78.18-.24.36-.9 1.02-1.08 1.26-.18.24-.42.27-.72.09-.3-.18-1.26-.45-2.4-1.44-.9-.78-1.5-1.74-1.68-2.04-.18-.3-.02-.48.15-.66.15-.15.3-.36.45-.54.15-.18.2-.3.3-.48.12-.24.06-.42-.03-.6-.09-.18-.78-1.86-1.08-2.52-.27-.66-.54-.57-.78-.57h-.66c-.24 0-.6.09-.9.45-.3.36-1.14 1.11-1.14 2.7s1.17 3.12 1.32 3.36c.18.24 2.31 3.54 5.58 4.98.78.33 1.38.54 1.86.69.78.24 1.5.21 2.07.12.63-.09 1.8-.75 2.04-1.47.24-.72.24-1.32.18-1.47-.06-.15-.24-.24-.54-.39Z" fill="#000"/>
      </svg>
      {/* Texto descritivo da ação para acessibilidade e clareza */}
      <span>{label}</span>
    </a>
  );
}
