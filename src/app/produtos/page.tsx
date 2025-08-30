import SectionHeading from "@/components/SectionHeading";
import Catalog from "@/components/Catalog";
import { fetchProductsFromSheet } from "@/lib/sheets";

export const revalidate = 0;

export default async function ProdutosPage() {
  const products = await fetchProductsFromSheet();
  return (
    <>
      <SectionHeading>Todos os Produtos</SectionHeading>
      <Catalog initialProducts={products} />
    </>
  );
}
