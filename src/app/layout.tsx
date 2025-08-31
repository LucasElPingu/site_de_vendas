import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://can-say.example.com"),
  title: "Can Say | Moda Alternativa Unissex",
  description:
    "Moda unissex, camisas oversized e estilo alternativo. Can Say: onde moda e atitude se encontram.",
  openGraph: {
    title: "Can Say | Moda Alternativa Unissex",
    description:
      "Moda unissex, camisas oversized e estilo alternativo. Can Say: onde moda e atitude se encontram.",
    url: "https://can-say.example.com/",
    type: "website",
    images: [
      {
        // Substitua por /compartilhar.jpg quando tiver o arquivo local
        url:
          "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Can Say - streetwear unissex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can Say | Moda Alternativa Unissex",
    description:
      "Moda unissex, camisas oversized e estilo alternativo. Can Say: onde moda e atitude se encontram.",
    images: [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen bg-black text-white antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
