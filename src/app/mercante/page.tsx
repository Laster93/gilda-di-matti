import MercanteShop from "@/components/MercanteShop";
import { MERCANTE } from "@/config";

export default function MercantePage() {
  // Bottega chiusa: si mostra solo l'avviso, la merce resta nascosta.
  // Per riaprire: in src/config.ts metti  chiuso: false
  if (MERCANTE.chiuso) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8">
        <div className="text-7xl">🏖️</div>
        <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-amber-400 tracking-widest leading-tight">
          Chiuso per ferie,
          <br />
          riapriamo a {MERCANTE.riapertura.toUpperCase()}!
        </h1>
        <div className="w-24 h-px bg-amber-700" />
        <p className="font-crimson text-lg text-stone-400">
          Il mercante ha calato la saracinesca e se n&apos;è andato.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">

      <div className="flex flex-col gap-3">
        <h1 className="font-cinzel text-4xl font-bold text-amber-400 tracking-widest">
          💰 Mercante
        </h1>
        <p className="font-crimson text-lg text-stone-400">
          Oggetti, pozioni e rarità in vendita al mercato della gilda.
        </p>
        <div className="w-16 h-px bg-amber-700" />
      </div>

      <MercanteShop />

    </div>
  );
}
