export default function MercantePage() {
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

      <div className="flex flex-col items-center justify-center py-20 gap-4 border border-stone-800 rounded-lg bg-stone-900">
        <span className="text-5xl">💰</span>
        <p className="font-crimson text-xl text-stone-400 italic text-center">
          Il mercante arriverà presto.
        </p>
      </div>

    </div>
  );
}
