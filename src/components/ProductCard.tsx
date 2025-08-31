import Image from "next/image";
import styles from "./product-card.module.css";
import type { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`${styles.card} group`}>
      <div className="relative aspect-square overflow-hidden bg-black">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm md:text-base font-medium leading-tight line-clamp-2">{product.name}</h3>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-white/80 text-sm md:text-base">R$ {product.price.toFixed(2)}</span>
          <a
            href={product.linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm font-medium text-black bg-white px-3 py-1.5 rounded-sm transition-colors hover:bg-white/90"
            aria-label={`Comprar ${product.name} no WhatsApp`}
          >
            Comprar
          </a>
        </div>
      </div>
    </article>
  );
}
