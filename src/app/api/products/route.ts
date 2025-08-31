import { NextResponse } from "next/server";
import { fetchProducts } from "@/lib/sheets";

export const revalidate = 1800;

export async function GET() {
  const products = await fetchProducts();
  return NextResponse.json(products);
}
