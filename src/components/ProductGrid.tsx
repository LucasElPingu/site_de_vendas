import styles from "./ProductGrid.module.css";
import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className={styles.emptyWrap}>
        <div className={styles.emptyCard}>
          <h2 className={styles.emptyTitle}>Sem produtos disponíveis</h2>
          <p className={styles.emptyText}>Volte mais tarde. Em breve teremos novidades!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
