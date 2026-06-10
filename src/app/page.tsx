import Link from "next/link";
import { GILDA } from "@/config";
import IconaMercante from "@/components/IconaMercante";

const sezioni = [
  {
    href: "/sessioni",
    emoji: "📜",
    titolo: "Cronache",
    descrizione: "I riassunti delle nostre avventure, sessione per sessione.",
  },
  {
    href: "/membri",
    emoji: "⚔️",
    titolo: "Membri",
    descrizione: "I valorosi (e improbabili) membri della gilda.",
  },
  {
    href: "/gazzettino",
    emoji: "📰",
    titolo: "Gazzettino",
    descrizione: "Notizie dal regno, bacheche e side quest disponibili.",
  },
  {
    href: "/planimetria",
    emoji: "🗺️",
    titolo: "Sede",
    descrizione: "La planimetria della nostra gloriosa sede.",
  },
  {
    href: "/documenti",
    emoji: "📄",
    titolo: "Archivio",
    descrizione: "Regole, schede, mappe e documenti per i giocatori.",
  },
  {
    href: "/mercante",
    emoji: "💰",
    titolo: "Mercante",
    descrizione: "Oggetti, pozioni e rarità in vendita al mercato della gilda.",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center gap-16">

      {/* Hero */}
      <section className="text-center flex flex-col items-center gap-6">
        <div className="text-6xl">⚔️</div>
        <h1 className="font-cinzel text-5xl font-bold text-amber-400 tracking-widest leading-tight">
          {GILDA.nome}
        </h1>
        <p className="font-crimson text-xl text-stone-400 max-w-lg leading-relaxed">
          {GILDA.sottotitolo}
        </p>
        <div className="w-24 h-px bg-amber-700" />
        <p className="font-crimson text-lg text-stone-300 max-w-xl leading-relaxed">
          {GILDA.descrizione}
        </p>
      </section>

      {/* Sezioni */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sezioni.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group border border-stone-700 rounded-lg p-6 bg-stone-900 hover:border-amber-600 hover:bg-stone-800 transition-all flex flex-col gap-3"
          >
            <span className="text-3xl">{s.emoji}</span>
            <h2 className="font-cinzel text-lg font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
              {s.titolo}
            </h2>
            <p className="font-crimson text-stone-400 leading-relaxed">
              {s.descrizione}
            </p>
          </Link>
        ))}
      </section>

    </div>
  );
}
