export type Category = "masculino" | "feminino" | "acessorios";

export interface Product {
  id: string; // generated from row index or sheet-provided id
  nome: string;
  preco: number; // stored as number in BRL cents or float
  descricao: string;
  imagem: string;
  linkWhatsApp?: string;
  disponivel: boolean;
  categoria?: Category;
}
