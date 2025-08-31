import { fetchProducts } from "@/lib/sheets";
import CatalogClient from "@/components/CatalogClient";

export const revalidate = 1800;

export default async function CatalogoPage() {
  const products = await fetchProducts();
  return <CatalogClient products={products} />;
}
