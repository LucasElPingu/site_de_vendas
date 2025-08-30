"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./FeaturedCarousel.module.css";
import type { Product } from "@/types/product";
import { formatPriceBRL } from "@/lib/sheets";

interface Props {
  products: Product[];
}

export default function FeaturedCarousel({ products }: Props) {
  // Usa até 5 produtos com imagem para o destaque
  const items = useMemo(() => products.filter((p) => p.imagem).slice(0, 5), [products]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, [items.length]);

  if (items.length === 0) return null;

  const goTo = (i: number) => setIndex((i + items.length) % items.length);

  return (
    <section className={styles.heroSection} aria-label="Destaques">
      <div className={styles.viewport}>
        <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((p) => (
            <div className={styles.slide} key={p.id}>
              <div className={styles.imageWrap}>
                <Image
                  src={p.imagem}
                  alt={p.nome}
                  fill
                  sizes="100vw"
                  className={styles.image}
                  priority
                  unoptimized
                />
                <div className={styles.overlay}>
                  <h2 className={styles.title}>{p.nome}</h2>
                  <p className={styles.price}>{formatPriceBRL(p.preco)}</p>
                  {p.linkWhatsApp ? (
                    <a href={`${p.linkWhatsApp}?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${p.nome}`)}`} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                      Comprar agora
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length > 1 && (
          <>
            <button type="button" className={styles.navPrev} onClick={() => goTo(index - 1)} aria-label="Anterior">‹</button>
            <button type="button" className={styles.navNext} onClick={() => goTo(index + 1)} aria-label="Próximo">›</button>
          </>
        )}
      </div>
      {items.length > 1 && (
        <div className={styles.dots}>
          {items.map((_, i) => (
            <button key={i} type="button" onClick={() => goTo(i)} className={i === index ? styles.dotActive : styles.dot} aria-label={`Ir para slide ${i + 1}`} />
          ))}
        </div>
      )}
    </section>
  );
}
