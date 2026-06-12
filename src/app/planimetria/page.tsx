"use client";
import Image from "next/image";
import { useState } from "react";

const viste = [
  {
    id: "planimetria",
    label: "📐 Planimetria",
    src: "/planimetria/Planimetria.png",
    descrizione: "Vista dall'alto con tutti i piani della Locanda Lockheart — piano terra, primo piano e sotterraneo.",
  },
  {
    id: "isometrica",
    label: "🏠 Vista Isometrica",
    src: "/planimetria/Isometrica.png",
    descrizione: "Rappresentazione tridimensionale della sede della gilda.",
  },
];

export default function PlanimetriaPage() {
  const [attiva, setAttiva] = useState("planimetria");
  const vista = viste.find((v) => v.id === attiva)!;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-10">

      {/* Intestazione */}
      <div className="flex flex-col gap-3">
        <h1 className="font-cinzel text-4xl font-bold text-amber-400 tracking-widest">
          🗺️ La Sede
        </h1>
        <p className="font-crimson text-lg text-stone-400">
          La Locanda Lockheart — base operativa della Gilda dei matti.
        </p>
        <div className="w-16 h-px bg-amber-700" />
      </div>

      {/* Selettore vista */}
      <div className="flex gap-2">
        {viste.map((v) => (
          <button
            key={v.id}
            onClick={() => setAttiva(v.id)}
            className={`font-crimson text-base px-4 py-2 rounded border transition-all ${
              attiva === v.id
                ? "border-amber-600 bg-stone-800 text-amber-400"
                : "border-stone-700 bg-stone-900 text-stone-400 hover:border-stone-500 hover:text-stone-200"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Immagine */}
      <div className="flex flex-col gap-4">
        <div className="relative w-full rounded-lg overflow-hidden border border-stone-700 bg-stone-900">
          <Image
            src={vista.src}
            alt={vista.label}
            width={1200}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <p className="font-crimson text-stone-400 text-lg text-center italic">
          {vista.descrizione}
        </p>
      </div>

    </div>
  );
}
