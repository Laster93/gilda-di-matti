import type { Metadata } from "next";
import { Cinzel, Crimson_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GILDA } from "@/config";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: GILDA.nome,
  description: GILDA.descrizione,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${cinzel.variable} ${crimson.variable}`}>
      <body className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-stone-800 py-6 text-center text-stone-500 text-sm font-crimson">
          © {GILDA.nome} — Tutti i diritti riservati ai Matti
        </footer>
      </body>
    </html>
  );
}
