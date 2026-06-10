"use client";
import { useState } from "react";

const PASSWORD = "eclissi";

export default function MasterNotes({ note }: { note: string }) {
  const [input, setInput] = useState("");
  const [sbloccato, setSbloccato] = useState(false);
  const [errore, setErrore] = useState(false);

  if (!note) return null;

  function sblocca() {
    if (input === PASSWORD) {
      setSbloccato(true);
      setErrore(false);
    } else {
      setErrore(true);
      setInput("");
    }
  }

  return (
    <div className="mt-10 border border-stone-700 rounded-lg overflow-hidden">
      <div className="bg-stone-800 px-6 py-3 flex items-center gap-2">
        <span className="text-amber-500">🔒</span>
        <span className="font-cinzel text-sm text-amber-500 tracking-widest uppercase">
          Note del Master
        </span>
      </div>

      {sbloccato ? (
        <div className="p-6 bg-stone-900/60">
          <p className="font-crimson text-lg text-stone-300 leading-relaxed whitespace-pre-wrap">
            {note}
          </p>
        </div>
      ) : (
        <div className="p-6 bg-stone-900/60 flex flex-col gap-3">
          <p className="font-crimson text-stone-400">
            Questa sezione è riservata al Master. Inserisci la password per accedere.
          </p>
          <div className="flex gap-2">
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sblocca()}
              placeholder="Password…"
              className="bg-stone-800 border border-stone-600 rounded px-4 py-2 font-crimson text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-600 w-48"
            />
            <button
              onClick={sblocca}
              className="bg-amber-700 hover:bg-amber-600 text-stone-100 font-cinzel text-sm px-4 py-2 rounded transition-colors"
            >
              Entra
            </button>
          </div>
          {errore && (
            <p className="font-crimson text-red-400 text-sm">Password errata.</p>
          )}
        </div>
      )}
    </div>
  );
}
