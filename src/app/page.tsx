import FeaturedCarousel from "@/components/FeaturedCarousel";
import PromoFeatures from "@/components/PromoFeatures";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";
import styles from "./home.module.css";
import { fetchProductsFromSheet } from "@/lib/sheets";

export const revalidate = 0;

export default async function HomePage() {
  const products = await fetchProductsFromSheet();
  const featuredCarousel = products.filter((p) => p.imagem).slice(0, 5);
  const featuredGrid = products.filter((p) => p.imagem).slice(0, 8);
  return (
    <>
      <FeaturedCarousel products={featuredCarousel} />
      <PromoFeatures />
      <SectionHeading>Destaques</SectionHeading>
      <div className="mx-auto max-w-6xl px-4">
        <ProductGrid products={featuredGrid} />
        <div className={styles.sectionActions}>
          <Link href="/produtos" className={styles.seeAllBtn}>Ver todos os produtos</Link>
        </div>
      </div>
    </>
  );
}
