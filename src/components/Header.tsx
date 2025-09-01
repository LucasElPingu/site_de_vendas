"use client";
import Link from "next/link";
import styles from "./header.module.css";
import Brand from "./Brand";

export default function Header() {
  return (
    <header className={styles.headerRoot}>
      <div className={styles.headerInner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brand}>
            <Brand />
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            <span>Início</span>
          </Link>
          <Link href="/catalogo" className={styles.navLink}>
            <span>Catálogo</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
