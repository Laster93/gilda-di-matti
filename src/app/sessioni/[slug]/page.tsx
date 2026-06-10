import { getSessione, getSessioni } from "@/lib/sessioni";
import MasterNotes from "@/components/MasterNotes";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getSessioni().map((s) => ({ slug: s.slug }));
}

export default async function SessionePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sessione = getSessione(slug);
  if (!sessione) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-8">

      {/* Breadcrumb */}
      <Link
        href="/sessioni"
        className="font-crimson text-stone-500 hover:text-amber-400 transition-colors text-sm"
      >
        ← Torna alle Cronache
      </Link>

      {/* Intestazione */}
      <div className="flex flex-col gap-3">
        <span className="font-cinzel text-xs text-amber-600 tracking-widest uppercase">
          Atto {sessione.atto}{sessione.data ? ` · ${sessione.data}` : ""}
        </span>
        <h1 className="font-cinzel text-4xl font-bold text-amber-400 leading-tight">
          {sessione.titolo}
        </h1>
        <div className="w-16 h-px bg-amber-700" />
      </div>

      {/* Testo pubblico */}
      <div className="font-crimson text-xl text-stone-300 leading-relaxed">
        {sessione.contenuto}
      </div>

      {/* Note master protette da password */}
      <MasterNotes note={sessione.notemaster} />

      {/* Navigazione tra atti */}
      <div className="flex justify-between pt-6 border-t border-stone-800">
        {sessione.atto > 1 ? (
          <Link
            href={`/sessioni/atto-${sessione.atto - 1}`}
            className="font-crimson text-stone-400 hover:text-amber-400 transition-colors"
          >
            ← Atto {sessione.atto - 1}
          </Link>
        ) : <span />}
        <Link
          href={`/sessioni/atto-${sessione.atto + 1}`}
          className="font-crimson text-stone-400 hover:text-amber-400 transition-colors"
        >
          Atto {sessione.atto + 1} →
        </Link>
      </div>

    </div>
  );
}
