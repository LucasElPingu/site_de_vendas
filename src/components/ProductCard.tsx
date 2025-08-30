"use client";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import type { Product } from "@/types/product";
import { formatPriceBRL } from "@/lib/sheets";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const priceLabel = formatPriceBRL(product.preco);
  const waUrl = product.linkWhatsApp
    ? appendMessage(product.linkWhatsApp, `Olá! Tenho interesse no produto: ${product.nome}`)
    : undefined;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {product.imagem ? (
          <Image
            src={product.imagem}
            alt={product.nome}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={styles.productImage}
            unoptimized
            priority={false}
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-label="Sem imagem" />
        )}
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.productName}>{product.nome}</h3>
        <p className={styles.productDesc}>{product.descricao}</p>
        <div className={styles.cardFooter}>
          <span className={styles.productPrice}>{priceLabel}</span>
          {waUrl ? (
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.buyBtn} aria-label={`Comprar ${product.nome}`}>
              Comprar
            </a>
          ) : (
            <span className={styles.buyBtnDisabled} aria-disabled>
              Indisponível
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function appendMessage(url: string, msg: string) {
  try {
    const u = new URL(url);
    const text = u.searchParams.get("text");
    if (!text) u.searchParams.set("text", msg);
    return u.toString();
  } catch {
    const encoded = encodeURIComponent(msg);
    const sep = url.includes("?") ? "&" : "?";
    return `${url}${sep}text=${encoded}`;
  }
}
