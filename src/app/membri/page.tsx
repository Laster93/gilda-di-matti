import Link from "next/link";
import Image from "next/image";
import { getGiocatori, getNPC, type Membro } from "@/lib/membri";
import { sezione } from "@/config";

const SEZ = sezione("/membri");

const statoColore: Record<string, string> = {
  Attivo: "text-emerald-400",
  Nuovo: "text-sky-400",
  Morto: "text-red-400",
  Ritirato: "text-stone-400",
};

function Scheda({ m }: { m: Membro }) {
  return (
    <Link
      href={`/membri/${m.slug}`}
      className="group border border-stone-700 rounded-lg bg-stone-900 hover:border-amber-600 hover:bg-stone-800 transition-all flex flex-col overflow-hidden"
    >
      {/* Immagine */}
      <div className="relative w-full aspect-square bg-stone-800">
        {m.immagine ? (
          <Image
            src={m.immagine}
            alt={m.nome}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl text-stone-600">
            ⚔️
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1">
        <h2 className="font-cinzel text-sm font-bold text-amber-400 group-hover:text-amber-300 transition-colors leading-tight">
          {m.nome}
        </h2>
        <p className="font-crimson text-stone-400 text-sm">
          {m.classe}{m.livello ? ` ${m.livello}` : ""} · {m.razza}
        </p>
        <p className="font-crimson text-stone-500 text-xs">{m.ruolo}</p>
        <span className={`font-crimson text-xs mt-1 ${statoColore[m.stato] ?? "text-stone-400"}`}>
          ● {m.stato}
        </span>
      </div>
    </Link>
  );
}

function Gruppo({
  titolo,
  sottotitolo,
  membri,
}: {
  titolo: string;
  sottotitolo: string;
  membri: Membro[];
}) {
  if (membri.length === 0) return null;
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-baseline gap-3 flex-wrap">
        <h2 className="font-cinzel text-2xl font-bold text-amber-500 tracking-widest">
          {titolo}
        </h2>
        <span className="font-crimson text-stone-500">
          {sottotitolo} · {membri.length}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {membri.map((m) => (
          <Scheda key={m.slug} m={m} />
        ))}
      </div>
    </section>
  );
}

export default function MembriPage() {
  const giocatori = getGiocatori();
  const npc = getNPC();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <h1 className="font-cinzel text-4xl font-bold text-amber-400 tracking-widest">
          {SEZ.icona} {SEZ.titolo}
        </h1>
        <p className="font-crimson text-lg text-stone-400">
          I valorosi (e improbabili) membri della Gilda dei matti.
        </p>
        <div className="w-16 h-px bg-amber-700" />
      </div>

      <Gruppo
        titolo="Giocatori"
        sottotitolo="Gli avventurieri della gilda"
        membri={giocatori}
      />

      <Gruppo
        titolo="NPC"
        sottotitolo="Personaggi non giocanti"
        membri={npc}
      />
    </div>
  );
}
