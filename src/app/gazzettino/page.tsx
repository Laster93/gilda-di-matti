import Link from "next/link";
import { getArticoli } from "@/lib/gazzettino";

const categoriaColori: Record<string, string> = {
  "Notizia": "text-red-400 border-red-800",
  "Cultura & Spettacolo": "text-amber-400 border-amber-800",
};

export default function GazzettinoPage() {
  const articoli = getArticoli();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">

      <div className="flex flex-col gap-3">
        <h1 className="font-cinzel text-4xl font-bold text-amber-400 tracking-widest">
          📰 La Gazzetta Ladra
        </h1>
        <p className="font-crimson text-lg text-stone-400 italic">
          di notizie!
        </p>
        <div className="w-16 h-px bg-amber-700" />
      </div>

      <div className="flex flex-col gap-6">
        {articoli.map((a) => (
          <Link
            key={a.slug}
            href={`/gazzettino/${a.slug}`}
            className="group border border-stone-700 rounded-lg p-6 bg-stone-900 hover:border-amber-600 hover:bg-stone-800 transition-all flex flex-col gap-3"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`font-crimson text-sm border px-2 py-0.5 rounded ${categoriaColori[a.categoria] ?? "text-stone-400 border-stone-700"}`}>
                {a.categoria}
              </span>
              <span className="font-crimson text-sm text-stone-500">{a.data}</span>
            </div>
            <h2 className="font-cinzel text-xl font-bold text-amber-300 group-hover:text-amber-200 transition-colors leading-snug">
              {a.titolo}
            </h2>
            <p className="font-crimson text-sm text-stone-500 italic">
              {a.autore}
            </p>
          </Link>
        ))}
      </div>

    </div>
  );
}
