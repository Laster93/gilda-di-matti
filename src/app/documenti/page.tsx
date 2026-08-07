import fs from "fs";
import path from "path";
import { sezione } from "@/config";

const SEZ = sezione("/documenti");
const DIR = path.join(process.cwd(), "public/documenti");

// Titolo mostrato per ogni sottocartella di public/documenti.
// Se crei una cartella nuova non elencata qui, compare lo stesso:
// verra' usato il nome della cartella come titolo.
const titoli: Record<string, string> = {
  manuali: "📚 Manuali & Regole",
  classi: "🧙 Classi",
  schede: "📄 Schede",
  strumenti: "🎲 Strumenti",
};

// Ordine in cui mostrare le categorie; quelle non elencate vanno in fondo.
const ordine = ["manuali", "classi", "schede", "strumenti"];

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

type Doc = { nome: string; href: string; size: number };
type Categoria = { cartella: string; titolo: string; documenti: Doc[] };

function leggiDocumenti(cartella: string): Doc[] {
  const full = cartella ? path.join(DIR, cartella) : DIR;
  return fs
    .readdirSync(full, { withFileTypes: true })
    .filter((f) => f.isFile() && !f.name.startsWith(".") && !f.name.startsWith("_"))
    .map((f) => ({
      // il nome mostrato e' il nome del file senza estensione
      nome: f.name.replace(/\.[^.]+$/, ""),
      href: cartella
        ? `/documenti/${encodeURIComponent(cartella)}/${encodeURIComponent(f.name)}`
        : `/documenti/${encodeURIComponent(f.name)}`,
      size: fs.statSync(path.join(full, f.name)).size,
    }))
    .sort((a, b) => a.nome.localeCompare(b.nome, "it"));
}

function leggiCategorie(): Categoria[] {
  if (!fs.existsSync(DIR)) return [];

  const categorie: Categoria[] = fs
    .readdirSync(DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith("_"))
    .map((e) => ({
      cartella: e.name,
      titolo: titoli[e.name] ?? `📁 ${e.name.charAt(0).toUpperCase()}${e.name.slice(1)}`,
      documenti: leggiDocumenti(e.name),
    }))
    .filter((c) => c.documenti.length > 0)
    .sort((a, b) => {
      const ia = ordine.indexOf(a.cartella);
      const ib = ordine.indexOf(b.cartella);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });

  // Documenti lasciati sciolti in public/documenti (fuori dalle sottocartelle):
  // li mostro comunque in fondo, cosi' non "spariscono" se sbagli cartella.
  const sciolti = leggiDocumenti("");
  if (sciolti.length > 0) {
    categorie.push({ cartella: "", titolo: "📁 Altri documenti", documenti: sciolti });
  }

  return categorie;
}

export default function DocumentiPage() {
  const categorie = leggiCategorie();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">

      <div className="flex flex-col gap-3">
        <h1 className="font-cinzel text-4xl font-bold text-amber-400 tracking-widest">
          {SEZ.icona} {SEZ.titolo}
        </h1>
        <p className="font-crimson text-lg text-stone-400">
          Regole, classi e schede per i giocatori della Gilda dei matti.
        </p>
        <div className="w-16 h-px bg-amber-700" />
      </div>

      {categorie.map((cat) => (
        <div key={cat.titolo} className="flex flex-col gap-3">
          <h2 className="font-cinzel text-lg font-bold text-amber-600 tracking-widest">
            {cat.titolo}
          </h2>
          <div className="flex flex-col divide-y divide-stone-800 border border-stone-700 rounded-lg overflow-hidden">
            {cat.documenti.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                download
                className="flex items-center justify-between px-5 py-3 bg-stone-900 hover:bg-stone-800 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-stone-500 text-lg">📎</span>
                  <span className="font-crimson text-lg text-stone-200 group-hover:text-amber-300 transition-colors">
                    {doc.nome}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-crimson text-sm text-stone-500">
                    {formatSize(doc.size)}
                  </span>
                  <span className="font-crimson text-xs text-amber-700 group-hover:text-amber-500 transition-colors border border-amber-900 group-hover:border-amber-700 rounded px-2 py-0.5">
                    Scarica
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}
