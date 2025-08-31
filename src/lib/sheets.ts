import type { Product } from "@/types/product";

function parsePrice(input: string): number {
  const n = parseFloat(input.replace(/[^0-9.,]/g, "").replace(".", "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

function toId(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

async function fetchCsv(url: string): Promise<Product[]> {
  const res = await fetch(url, { next: { revalidate: 1800 } });
  if (!res.ok) throw new Error(`Falha ao carregar CSV: ${res.status}`);
  const text = await res.text();
  const [headerLine, ...rows] = text.split(/\r?\n/).filter(Boolean);
  const headers = headerLine.split(",").map((h) => h.trim());
  const idx = (label: string) => headers.findIndex((h) => h.toLowerCase() === label.toLowerCase());
  const iNome = idx("Nome");
  const iPreco = idx("Preço");
  const iDesc = idx("Descrição");
  const iImagem = idx("Imagem");
  const iZap = idx("LinkWhatsApp");
  const iCat = idx("Categoria");
  const iDisp = idx("Disponível");

  const out: Product[] = [];
  for (const line of rows) {
    const cols = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((c) => c.replace(/^"|"$/g, ""));
    const available = (cols[iDisp] || "").trim().toLowerCase() === "sim";
    if (!available) continue;
    const name = cols[iNome]?.trim() || "";
    if (!name) continue;
    out.push({
      id: toId(name),
      name,
      price: parsePrice(cols[iPreco] || "0"),
      description: cols[iDesc]?.trim() || "",
      image: cols[iImagem]?.trim() || "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1200&auto=format&fit=crop",
      linkWhatsApp: cols[iZap]?.trim() || "https://wa.me/5500000000000",
      category: cols[iCat]?.trim() || "Unisex",
      available: true,
    });
  }
  return out;
}

async function fetchGviz(sheetId: string, sheetName?: string): Promise<Product[]> {
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json` + (sheetName ? `&sheet=${encodeURIComponent(sheetName)}` : "");
  const res = await fetch(base, { next: { revalidate: 1800 } });
  if (!res.ok) throw new Error(`Falha ao carregar Google Sheets: ${res.status}`);
  const txt = await res.text();
  const json = JSON.parse(txt.replace(/^.*?\(/, "").replace(/\);?$/, ""));
  const headers = json.table.cols.map((c: any) => c.label);
  const idx = (label: string) => headers.findIndex((h: string) => (h || "").toLowerCase() === label.toLowerCase());
  const iNome = idx("Nome");
  const iPreco = idx("Preço");
  const iDesc = idx("Descrição");
  const iImagem = idx("Imagem");
  const iZap = idx("LinkWhatsApp");
  const iCat = idx("Categoria");
  const iDisp = idx("Disponível");

  const out: Product[] = [];
  for (const r of json.table.rows as any[]) {
    const cols = r.c || [];
    const get = (i: number) => (cols[i]?.v ?? "").toString();
    const available = get(iDisp).trim().toLowerCase() === "sim";
    if (!available) continue;
    const name = get(iNome).trim();
    if (!name) continue;
    out.push({
      id: toId(name),
      name,
      price: parsePrice(get(iPreco)),
      description: get(iDesc),
      image: get(iImagem) || "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
      linkWhatsApp: get(iZap) || "https://wa.me/5500000000000",
      category: get(iCat) || "Unisex",
      available: true,
    });
  }
  return out;
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const csv = process.env.NEXT_PUBLIC_SHEETS_CSV_URL;
    const sheetId = process.env.NEXT_PUBLIC_SHEETS_ID;
    const sheetName = process.env.NEXT_PUBLIC_SHEETS_SHEET;
    if (csv) return await fetchCsv(csv);
    if (sheetId) return await fetchGviz(sheetId, sheetName);
  } catch (e) {
    console.error(e);
  }

  const sample: Product[] = [
    {
      id: "oversized-onyx",
      name: "Camiseta Oversized Onyx",
      price: 129.9,
      description: "Oversized em algodão premium, caimento amplo e confortável.",
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1200&auto=format&fit=crop",
      linkWhatsApp: "https://wa.me/5500000000000?text=Quero%20a%20Oversized%20Onyx",
      category: "Unisex",
      available: true,
    },
    {
      id: "oversized-storm",
      name: "Camiseta Oversized Storm",
      price: 139.9,
      description: "Modelagem ampla, visual monocromático de alto contraste.",
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
      linkWhatsApp: "https://wa.me/5500000000000?text=Quero%20a%20Oversized%20Storm",
      category: "Unisex",
      available: true,
    },
    {
      id: "oversized-void",
      name: "Camiseta Oversized Void",
      price: 149.9,
      description: "Streetwear minimalista, tecido encorpado e macio.",
      image:
        "https://images.unsplash.com/photo-1456327102063-fb5054efe647?q=80&w=1200&auto=format&fit=crop",
      linkWhatsApp: "https://wa.me/5500000000000?text=Quero%20a%20Oversized%20Void",
      category: "Masculino",
      available: true,
    },
    {
      id: "oversized-quartz",
      name: "Camiseta Oversized Quartz",
      price: 119.9,
      description: "Estética limpa P&B, ideal para composições versáteis.",
      image:
        "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop",
      linkWhatsApp: "https://wa.me/5500000000000?text=Quero%20a%20Oversized%20Quartz",
      category: "Feminino",
      available: true,
    },
  ];
  return sample;
}
