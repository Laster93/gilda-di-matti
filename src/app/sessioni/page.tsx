import Link from "next/link";
import { getSessioni } from "@/lib/sessioni";

export default function SessioniPage() {
  const sessioni = getSessioni();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="font-cinzel text-4xl font-bold text-amber-400 tracking-widest">
          📜 Cronache
        </h1>
        <p className="font-crimson text-lg text-stone-400">
          Le gesta della Gilda dei matti, atto per atto.
        </p>
        <div className="w-16 h-px bg-amber-700" />
      </div>

      <div className="flex flex-col gap-4">
        {sessioni.map((s) => (
          <Link
            key={s.slug}
            href={`/sessioni/${s.slug}`}
            className="group border border-stone-700 rounded-lg p-6 bg-stone-900 hover:border-amber-600 hover:bg-stone-800 transition-all flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <span className="font-cinzel text-xs text-amber-600 tracking-widest uppercase">
                Atto {s.atto}
              </span>
              {s.data && (
                <span className="font-crimson text-sm text-stone-500">{s.data}</span>
              )}
            </div>
            <h2 className="font-cinzel text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
              {s.titolo}
            </h2>
            <p className="font-crimson text-stone-400 leading-relaxed line-clamp-2">
              {s.contenuto.slice(0, 180)}…
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
