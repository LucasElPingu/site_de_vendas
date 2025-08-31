"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70 border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src="/logo.svg" alt="Can Say - logo" width={28} height={28} priority />
            <Image src="/logotype.svg" alt="Can Say - logotipo" width={96} height={20} priority />
          </Link>
        </div>
        <nav className="flex items-center gap-6 text-sm md:text-base">
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
