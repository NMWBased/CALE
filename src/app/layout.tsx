import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "CALE Arquitetura | Espaços com funcionalidade, alma e conforto",
  description:
    "Atelier de arquitetura focado em criar projetos únicos. Ana Carolina Cruz - Arquiteta com mais de 5 anos de experiência em projetos residenciais e interiores.",
  keywords: [
    "arquitetura",
    "design",
    "interiores",
    "projetos",
    "portugal",
    "ana carolina cruz",
    "cale",
  ],
  authors: [{ name: "Ana Carolina Cruz" }],
  creator: "CALE Arquitetura",
  publisher: "CALE Arquitetura",
  // Define base URL para gerar links absolutos (OpenGraph/Twitter)
  metadataBase: new URL("https://cale-arquitetura.com"),
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://cale-arquitetura.com",
    siteName: "CALE Arquitetura",
    title: "CALE Arquitetura | Espaços com funcionalidade, alma e conforto",
    description:
      "Atelier de arquitetura focado em criar projetos únicos. Ana Carolina Cruz - Arquiteta com mais de 5 anos de experiência.",
    images: [
      {
        url: "/images/imgi_18_006 Casa Área Externa_edited.png",
        width: 1200,
        height: 630,
        alt: "CALE Arquitetura - Projeto Casa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CALE Arquitetura | Espaços com funcionalidade, alma e conforto",
    description: "Atelier de arquitetura focado em criar projetos únicos.",
    images: ["/images/imgi_18_006 Casa Área Externa_edited.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
