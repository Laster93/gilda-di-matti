import Link from "next/link";
import { GILDA } from "@/config";
import IconaMercante from "@/components/IconaMercante";

const sezioni = [
  {
    href: "/sessioni",
    emoji: "⚔️",
    titolo: "Cronache",
    descrizione: "I riassunti delle nostre avventure, sessione per sessione.",
  },
  {
    href: "/membri",
    emoji: "🧙",
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
    emoji: "📜",
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
        <div className="text-6xl">🌟</div>
        <h1 className="font-cinzel text-5xl font-bold text-amber-400 tracking-widest leading-tight">
          {GILDA.nome}
        </h1>
        <p className="font-crimson text-lg text-stone-300 max-w-xl leading-relaxed">
          {GILDA.descrizione}
        </p>
        <div className="w-24 h-px bg-amber-700" />
        <a
          href="https://chat.whatsapp.com/FWh4Cc81xMN7zWTsJt4x0E"
          target="_blank"
          rel="noopener noreferrer"
          className="font-crimson text-lg text-stone-300 hover:text-green-400 transition-colors flex items-center gap-2"
        >
          Inviaci il tuo messaggio tramite piccione, pipistrello, anatra qui{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#25D366"/>
            <path d="M24 10C16.268 10 10 16.268 10 24c0 2.637.687 5.116 1.887 7.264L10 38l6.94-1.82A13.93 13.93 0 0024 38c7.732 0 14-6.268 14-14S31.732 10 24 10zm0 25.6a11.55 11.55 0 01-5.89-1.61l-.42-.25-4.12 1.08 1.1-3.99-.28-.43A11.6 11.6 0 1124 35.6zm6.36-8.67c-.35-.17-2.06-1.01-2.38-1.13-.32-.12-.55-.17-.78.17-.23.35-.89 1.13-1.09 1.36-.2.23-.4.26-.74.09-.35-.17-1.46-.54-2.78-1.72-1.03-.92-1.72-2.05-1.92-2.4-.2-.35-.02-.54.15-.71.15-.15.35-.4.52-.6.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59h-.66c-.23 0-.6.09-.91.43-.32.35-1.2 1.17-1.2 2.85s1.23 3.31 1.4 3.54c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.06-.84 2.35-1.66.29-.81.29-1.51.2-1.66-.08-.14-.31-.23-.66-.4z" fill="white"/>
          </svg>
        </a>
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
