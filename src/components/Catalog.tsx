"use client";
import { useMemo, useState } from "react";
import type { Product, Category } from "@/types/product";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import styles from "./Catalog.module.css";

interface Props {
  initialProducts: Product[];
}

export default function Catalog({ initialProducts }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "todas">("todas");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return initialProducts.filter((p) => {
      const matchesQuery = q === "" || p.nome.toLowerCase().includes(q);
      const matchesCat = category === "todas" || p.categoria === category;
      return matchesQuery && matchesCat;
    });
  }, [query, category, initialProducts]);

  return (
    <section className={styles.catalogSection}>
      <div className={styles.controlsWrap}>
        <SearchBar value={query} onChange={setQuery} />
        <CategoryFilter active={category} onChange={setCategory} />
      </div>
      <ProductGrid products={filtered} />
    </section>
  );
}
