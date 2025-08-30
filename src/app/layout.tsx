import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata: Metadata = {
  title: {
    default: "Sua Loja - Vitrine",
    template: "%s | Sua Loja",
  },
  description: "Vitrine de produtos - loja online",
  openGraph: {
    title: "Sua Loja - Vitrine",
    description: "Vitrine de produtos - loja online",
    type: "website",
    locale: "pt_BR",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
