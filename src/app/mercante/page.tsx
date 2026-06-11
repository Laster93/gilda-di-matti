import MercanteShop from "@/components/MercanteShop";

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

      <MercanteShop />

    </div>
  );
}
