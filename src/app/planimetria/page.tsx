"use client";
import Image from "next/image";
import { useState } from "react";
import { sezione, TESORI_GILDA } from "@/config";

const SEZ = sezione("/planimetria");

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
          {SEZ.icona} {SEZ.titolo}
        </h1>
        <p className="font-crimson text-lg text-stone-400">
          La Locanda Lockheart — base operativa della Gilda dei matti.
        </p>
        <div className="w-16 h-px bg-amber-700" />
      </div>

      <section aria-labelledby="tesori-gilda" className="rounded-lg border border-amber-900 bg-stone-900 p-6 flex flex-col gap-5">
        <h2 id="tesori-gilda" className="font-cinzel text-2xl font-bold text-amber-400">
          Tesori della Gilda
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TESORI_GILDA.map((tesoro) => (
            <li key={tesoro.nome} className="flex items-center gap-4">
              <span aria-hidden="true" className="text-3xl">{tesoro.icona}</span>
              <div className="flex flex-col gap-1">
                <span className="font-cinzel text-3xl font-bold text-amber-400">
                  {tesoro.quantita.toLocaleString("it-IT")}
                </span>
                <span className="font-crimson text-lg text-stone-300">{tesoro.nome}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

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
