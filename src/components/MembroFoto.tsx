"use client";

import { useState } from "react";
import Image from "next/image";

export default function MembroFoto({ src, nome }: { src: string; nome: string }) {
  const [aperto, setAperto] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setAperto(true)}
        className="relative w-36 h-36 shrink-0 rounded-lg overflow-hidden border border-stone-700 bg-stone-800 cursor-pointer group"
        aria-label={`Ingrandisci immagine di ${nome}`}
      >
        <Image src={src} alt={nome} fill className="object-cover object-top transition-transform group-hover:scale-105" />
        <span className="absolute bottom-1 right-1 text-stone-200 bg-black/50 rounded px-1.5 py-0.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
          🔍
        </span>
      </button>

      {aperto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setAperto(false)}
        >
          <button
            type="button"
            onClick={() => setAperto(false)}
            className="absolute top-4 right-4 z-10 text-stone-300 hover:text-white text-3xl leading-none font-bold"
            aria-label="Chiudi"
          >
            ×
          </button>
          <div
            className="relative max-w-3xl max-h-[85vh] w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ height: "80vh" }}>
              <Image src={src} alt={nome} fill className="object-contain" sizes="(max-width: 768px) 100vw, 768px" />
            </div>
            <p className="font-cinzel text-amber-400 text-lg tracking-widest">{nome}</p>
          </div>
        </div>
      )}
    </>
  );
}
