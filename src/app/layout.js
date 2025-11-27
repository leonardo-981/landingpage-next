import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://movimentosmagicos.com"),

  title: {
    default: "Movimentos Mágicos – Guia Especial Exclusivo",
    template: "%s | Movimentos Mágicos",
  },

  description:
    "Assista à apresentação especial e descubra o método exclusivo dos Movimentos Mágicos. Conteúdo adulto, discreto e direto, liberado apenas para maiores de 18 anos. Oferta limitada e acesso imediato.",

  keywords: [
    "vídeo adulto",
    "conteúdo adulto",
    "método de prazer",
    "movimentos mágicos",
    "relacionamento",
    "conteúdo +18",
    "segredo da performance",
    "vídeo exclusivo",
    "promoção limitada",
  ],

  alternates: {
    canonical: "https://movimentosmagicos.com",
  },

  openGraph: {
    title: "Movimentos Mágicos — Assista Agora | +18",
    description:
      "Descubra o método exclusivo que está transformando a vida de milhares de casais. Assista à VSL completa. Conteúdo para maiores de 18.",
    url: "https://movimentosmagicos.com",
    siteName: "Movimentos Mágicos",
    images: [
      {
        url: "https://media.atomicatpages.net/u/Rc5XIMzqaTUW5KChYnmsda02uNl1/Pictures/FtDAWc2424064.png",
        width: 1200,
        height: 630,
        alt: "Movimentos Mágicos – Apresentação Exclusiva",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  category: "adult entertainment",

  authors: [{ name: "Movimentos Mágicos Team" }],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#9f0e0f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Footer />
      </body>
    </html>
  );
}
