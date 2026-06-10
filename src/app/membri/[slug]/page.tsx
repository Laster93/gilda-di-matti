import { getMembro, getMembri } from "@/lib/membri";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getMembri().map((m) => ({ slug: m.slug }));
}

const statoColore: Record<string, string> = {
  Attivo: "text-emerald-400 border-emerald-800",
  Morto: "text-red-400 border-red-900",
  Ritirato: "text-stone-400 border-stone-700",
};

function Riga({ etichetta, valore }: { etichetta: string; valore: string }) {
  if (!valore || valore === "n.d." || valore === "undefined") return null;
  return (
    <div className="flex gap-3 py-3 border-b border-stone-800">
      <span className="font-cinzel text-xs text-amber-600 tracking-widest uppercase w-32 shrink-0 pt-0.5">
        {etichetta}
      </span>
      <span className="font-crimson text-lg text-stone-300">{valore}</span>
    </div>
  );
}

export default async function MembroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getMembro(slug);
  if (!m) notFound();

  const statoClass = statoColore[m.stato] ?? "text-stone-400 border-stone-700";

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-8">

      <Link href="/membri" className="font-crimson text-stone-500 hover:text-amber-400 transition-colors text-sm">
        ← Torna ai Compagni
      </Link>

      {/* Header */}
      <div className="flex gap-8 items-start">
        <div className="relative w-36 h-36 shrink-0 rounded-lg overflow-hidden border border-stone-700 bg-stone-800">
          {m.immagine ? (
            <Image src={m.immagine} alt={m.nome} fill className="object-cover object-top" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-5xl text-stone-600">⚔️</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-cinzel text-3xl font-bold text-amber-400 leading-tight">{m.nome}</h1>
          <p className="font-crimson text-xl text-stone-300">
            {m.classe}{m.livello ? ` ${m.livello}` : ""} · {m.razza}
          </p>
          <p className="font-crimson text-stone-500">{m.ruolo}</p>
          {m.giocatore && m.giocatore !== "NPC" && (
            <p className="font-crimson text-stone-500 text-sm">Giocatore: {m.giocatore}</p>
          )}
          <span className={`font-crimson text-sm border rounded px-2 py-0.5 w-fit mt-1 ${statoClass}`}>
            ● {m.stato}
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-amber-900" />

      {/* Dettagli */}
      <div className="flex flex-col">
        <Riga etichetta="Allineamento" valore={m.allineamento} />
        <Riga etichetta="Divinità" valore={m.divinita} />
        <Riga etichetta="Monete" valore={m.monete} />
      </div>

      {/* Biografia */}
      {m.bio && (
        <div className="flex flex-col gap-3">
          <h2 className="font-cinzel text-lg font-bold text-amber-600 tracking-widest uppercase">Biografia</h2>
          <p className="font-crimson text-xl text-stone-300 leading-relaxed whitespace-pre-wrap">{m.bio}</p>
        </div>
      )}

    </div>
  );
}
