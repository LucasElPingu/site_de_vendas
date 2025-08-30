import { Product, Category } from "@/types/product";

// Expected header names in Portuguese
const HEADERS = {
  nome: ["Nome"],
  preco: ["Preço", "Preco", "Valor"],
  descricao: ["Descrição", "Descricao"],
  imagem: ["Imagem", "URLImagem"],
  linkWhatsApp: ["LinkWhatsApp", "Whatsapp", "WhatsApp"],
  disponivel: ["Disponível", "Disponivel"],
  categoria: ["Categoria"],
} as const;

function normalizeHeader(header: string) {
  return header.trim();
}

function headerIndex(headers: string[], keys: readonly string[]): number {
  for (const key of keys) {
    const idx = headers.findIndex((h) => normalizeHeader(h) === key);
    if (idx !== -1) return idx;
  }
  return -1;
}

function parseBRLToNumber(value: string): number {
  const s = value
    .replace(/\s/g, "")
    .replace(/R\$/i, "")
    .replace(/\./g, "") // remove thousands separator
    .replace(/,/g, "."); // convert decimal comma to dot
  const n = Number(s);
  return Number.isFinite(n) ? n : 0;
}

// Basic CSV parser supporting quoted values and commas
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let current = "";
  let row: string[] = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];
    if (inQuotes) {
      if (char === '"' && next === '"') {
        current += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        current += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        row.push(current);
        current = "";
      } else if (char === "\n") {
        row.push(current);
        rows.push(row);
        row = [];
        current = "";
      } else if (char === "\r") {
        // ignore CR
      } else {
        current += char;
      }
    }
  }
  // push last cell
  row.push(current);
  rows.push(row);
  // Remove empty trailing rows
  return rows.filter((r) => r.some((c) => c.trim() !== ""));
}

const DEMO_PRODUCTS: Product[] = [
  {
    id: "1",
    nome: "Camiseta Básica Feminina",
    preco: 59.9,
    descricao: "Algodão macio, várias cores.",
    imagem: "https://images.unsplash.com/photo-1520975979652-6cb97f95c930?q=80&w=800&auto=format&fit=crop",
    linkWhatsApp: "https://wa.me/5500000000000",
    disponivel: true,
    categoria: "feminino",
  },
  {
    id: "2",
    nome: "Camisa Social Masculina",
    preco: 129.9,
    descricao: "Corte moderno para o dia a dia.",
    imagem: "https://images.unsplash.com/photo-1520975682031-6ef7a6a00b17?q=80&w=800&auto=format&fit=crop",
    linkWhatsApp: "https://wa.me/5500000000000",
    disponivel: true,
    categoria: "masculino",
  },
  {
    id: "3",
    nome: "Vestido Estampado",
    preco: 179.9,
    descricao: "Leve e confortável.",
    imagem: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop",
    linkWhatsApp: "https://wa.me/5500000000000",
    disponivel: true,
    categoria: "feminino",
  },
  {
    id: "4",
    nome: "Relógio Clássico",
    preco: 249.9,
    descricao: "Acessório para qualquer ocasião.",
    imagem: "https://images.unsplash.com/photo-1524805444758-089113d48a6f?q=80&w=800&auto=format&fit=crop",
    linkWhatsApp: "https://wa.me/5500000000000",
    disponivel: true,
    categoria: "acessorios",
  },
  {
    id: "5",
    nome: "Tênis Casual",
    preco: 199.9,
    descricao: "Conforto e estilo.",
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    linkWhatsApp: "https://wa.me/5500000000000",
    disponivel: true,
    categoria: "masculino",
  },
];

export async function fetchProductsFromSheet(): Promise<Product[]> {
  const csvUrl = process.env.SHEET_CSV_URL;
  if (!csvUrl) {
    return DEMO_PRODUCTS;
  }
  const res = await fetch(csvUrl, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Falha ao carregar planilha: ${res.status}`);
  }
  const text = await res.text();
  const rows = parseCSV(text);
  if (rows.length < 2) return DEMO_PRODUCTS;

  const headers = rows[0].map(normalizeHeader);
  const idxs = {
    nome: headerIndex(headers, HEADERS.nome),
    preco: headerIndex(headers, HEADERS.preco),
    descricao: headerIndex(headers, HEADERS.descricao),
    imagem: headerIndex(headers, HEADERS.imagem),
    linkWhatsApp: headerIndex(headers, HEADERS.linkWhatsApp),
    disponivel: headerIndex(headers, HEADERS.disponivel),
    categoria: headerIndex(headers, HEADERS.categoria),
  };

  const products: Product[] = [];
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const nome = r[idxs.nome] || "";
    const precoRaw = r[idxs.preco] || "0";
    const descricao = r[idxs.descricao] || "";
    const imagem = r[idxs.imagem] || "";
    const linkWhatsApp = r[idxs.linkWhatsApp] || undefined;
    const disponivelStr = (r[idxs.disponivel] || "").toLowerCase();
    const categoriaRaw = (r[idxs.categoria] || "").toLowerCase();

    const disponivel = ["sim", "yes", "true", "1"].includes(disponivelStr);
    if (!disponivel) continue;

    const preco = parseBRLToNumber(precoRaw);
    const categoria = (['masculino','feminino','acessorios'] as const).includes(
      categoriaRaw as Category
    )
      ? (categoriaRaw as Category)
      : undefined;

    products.push({
      id: String(i),
      nome,
      preco,
      descricao,
      imagem,
      linkWhatsApp,
      disponivel,
      categoria,
    });
  }
  return products.length ? products : DEMO_PRODUCTS;
}

export { DEMO_PRODUCTS };

export function formatPriceBRL(n: number): string {
  try {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);
  } catch {
    return `R$ ${n.toFixed(2)}`;
  }
}
