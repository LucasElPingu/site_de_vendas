"use client";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import CategorySection from "@/components/CategorySection";
import type { Product } from "@/types/product";
import styles from "./catalog-client.module.css";

export default function CatalogClient({ products }: { products: Product[] }) {
  const [active, setActive] = useState<string>("Unisex");
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    const base = ["Unisex", "Masculino", "Feminino"]; 
    const rest = [...set].filter((c) => !base.includes(c));
    return [...base.filter((c) => set.has(c)), ...rest];
  }, [products]);

  const filtered = useMemo(() => products.filter((p) => p.category === active), [products, active]);

  return (
    <div className={styles.pageWrap}>
      <div className={styles.tabsRow}>
        <div className={styles.tabs} role="tablist" aria-label="Categorias do catálogo">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              className={active === c ? styles.tabActive : styles.tab}
              onClick={() => setActive(c)}
            >
              <span className="font-graffiti text-base md:text-lg">{c}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <CategorySection title={active} divider>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </CategorySection>
      </div>
    </div>
  );
}
