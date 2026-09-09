import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // I PDF dell'Archivio vengono serviti come file statici da /public e non
  // servono dentro le funzioni del sito: la pagina Archivio legge la cartella
  // solo durante il build, per costruire l'elenco.
  // Senza questa esclusione Next li impacchetta nella funzione e Vercel
  // rifiuta il deploy oltre i 250 MB.
  outputFileTracingExcludes: {
    "/**": ["public/documenti/**/*"],
    "/documenti": ["public/documenti/**/*"],
  },
};

export default nextConfig;
