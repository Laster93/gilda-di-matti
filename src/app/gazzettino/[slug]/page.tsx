import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticoli, getArticolo } from "@/lib/gazzettino";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  return getArticoli().map((a) => ({ slug: a.slug }));
}

const categoriaColori: Record<string, string> = {
  "Notizia": "text-red-400 border-red-800",
  "Cultura & Spettacolo": "text-amber-400 border-amber-800",
};

export default async function ArticoloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articolo = getArticolo(slug);
  if (!articolo) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col gap-8">

      <Link href="/gazzettino" className="font-crimson text-stone-400 hover:text-amber-400 transition-colors text-sm">
        ← La Gazzetta Ladra, di Notizie!
      </Link>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className={`font-crimson text-sm border px-2 py-0.5 rounded ${categoriaColori[articolo.categoria] ?? "text-stone-400 border-stone-700"}`}>
            {articolo.categoria}
          </span>
          <span className="font-crimson text-sm text-stone-500">{articolo.data}</span>
        </div>

        <h1 className="font-cinzel text-3xl font-bold text-amber-400 leading-tight">
          {articolo.titolo}
        </h1>

        <p className="font-crimson text-stone-500 italic text-sm">
          {articolo.autore}
        </p>

        <div className="w-full h-px bg-amber-900" />
      </div>

      <article className="font-crimson text-lg text-stone-300 leading-relaxed flex flex-col gap-4 prose-invert">
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="font-crimson text-lg text-stone-300 leading-relaxed">{children}</p>,
            strong: ({ children }) => <strong className="text-amber-300 font-bold">{children}</strong>,
            em: ({ children }) => <em className="text-stone-400 italic">{children}</em>,
            ul: ({ children }) => <ul className="list-disc list-inside flex flex-col gap-1 text-stone-300">{children}</ul>,
            li: ({ children }) => <li className="font-crimson text-lg">{children}</li>,
          }}
        >
          {articolo.contenuto}
        </ReactMarkdown>
      </article>

    </div>
  );
}
