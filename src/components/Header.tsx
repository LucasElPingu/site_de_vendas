"use client";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.headerRoot}>
      <div className={styles.headerInner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brand}>
            <h1 className={styles.brandTxt}>CAN SAY</h1>
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
