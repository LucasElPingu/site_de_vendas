import Link from "next/link";
import styles from "./Header.module.css";

// Cabeçalho com logo e links sociais (renderiza links apenas se fornecidos via env)
export default function Header() {
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com";
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com";
  const tiktok = process.env.NEXT_PUBLIC_TIKTOK_URL || "https://tiktok.com";

  return (
    <header className={styles.headerBar}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brandLogo}>
          <span className={styles.brandText}>Sua Loja</span>
        </Link>

        <nav className={styles.socialNav} aria-label="Redes sociais">
          <a className={styles.socialLink} href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <span aria-hidden="true">📸</span>
            <span className={styles.socialText}>Instagram</span>
          </a>
          <a className={styles.socialLink} href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <span aria-hidden="true">👍</span>
            <span className={styles.socialText}>Facebook</span>
          </a>
          <a className={styles.socialLink} href={tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <span aria-hidden="true">🎵</span>
            <span className={styles.socialText}>TikTok</span>
          </a>
          <Link href="/produtos" className={styles.socialLink}>Ver todos os produtos</Link>
        </nav>
      </div>
    </header>
  );
}
