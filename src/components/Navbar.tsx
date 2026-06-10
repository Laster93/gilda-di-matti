import Link from "next/link";
import { GILDA } from "@/config";
import IconaMercante from "@/components/IconaMercante";

const links = [
  { href: "/sessioni", label: "📜 Cronache", icona: false },
  { href: "/membri", label: "⚔️ Membri", icona: false },
  { href: "/gazzettino", label: "📰 Gazzettino", icona: false },
  { href: "/planimetria", label: "🗺️ Sede", icona: false },
  { href: "/documenti", label: "📄 Archivio", icona: false },
  { href: "/mercante", label: "💰 Mercante", icona: false },
];

export default function Navbar() {
  return (
    <header className="border-b border-stone-800 bg-stone-950/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center gap-4">
        <Link href="/" className="font-cinzel text-xl font-bold text-amber-400 tracking-widest hover:text-amber-300 transition-colors">
          {GILDA.nome}
        </Link>
        <nav className="flex flex-wrap justify-center gap-1 sm:ml-auto">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-crimson text-base px-3 py-1 rounded text-stone-300 hover:text-amber-400 hover:bg-stone-800 transition-colors flex items-center gap-1"
            >
              {l.icona ? <IconaMercante size={18} /> : null}
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
