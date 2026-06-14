const categorie = [
  {
    titolo: "📚 Manuali & Regole",
    documenti: [
      { nome: "Manuale Base D&D 5e (ITA)", file: "Manuale Base - SDR v5.2.1 - ITA.pdf" },
      { nome: "Player's Handbook 2024 (ITA)", file: "PHB-2024_IT_v1.pdf" },
      { nome: "Incantesimi 2024", file: "Incantesimi 2024.pdf" },
      { nome: "Talenti", file: "Talenti.pdf" },
      { nome: "Background e Specie", file: "Background e Speci.pdf" },
    ],
  },
  {
    titolo: "🧙 Classi",
    documenti: [
      { nome: "Barbaro", file: "Barbaro.pdf" },
      { nome: "Bardo", file: "Bardo.pdf" },
      { nome: "Chierico", file: "Chierico.pdf" },
      { nome: "Druido", file: "Druido.pdf" },
      { nome: "Guerriero", file: "Guerriero.pdf" },
      { nome: "Ladro", file: "Ladro.pdf" },
      { nome: "Mago", file: "Mago.pdf" },
      { nome: "Monaco", file: "Monaco.pdf" },
      { nome: "Paladino", file: "Paladino.pdf" },
      { nome: "Ranger", file: "Ranger.pdf" },
      { nome: "Stregone", file: "Stregone.pdf" },
      { nome: "Warlock", file: "Warlock.pdf" },
    ],
  },
  {
    titolo: "📄 Schede",
    documenti: [
      { nome: "Scheda Personaggio 2024", file: "D&D - 2024 Scheda Personaggio.pdf" },
    ],
  },
  {
    titolo: "🎲 Strumenti",
    documenti: [
      { nome: "Incantesimi Revisionati (Excel)", file: "Incantesimi_revisionati.xlsx" },
      { nome: "Grimorio del Drago (App Android)", file: "grimorio_del_drago.apk" },
    ],
  },
];

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const dimensioni: Record<string, number> = {
  "Background e Speci.pdf": 12239529,
  "Barbaro.pdf": 6534300,
  "Bardo.pdf": 6534300,
  "Chierico.pdf": 5230599,
  "D&D - 2024 Scheda Personaggio.pdf": 12084648,
  "Druido.pdf": 7609723,
  "Guerriero.pdf": 6752031,
  "Incantesimi 2024.pdf": 73339960,
  "Ladro.pdf": 6289153,
  "Mago.pdf": 7542992,
  "Manuale Base - SDR v5.2.1 - ITA.pdf": 9305130,
  "Monaco.pdf": 5250130,
  "Paladino.pdf": 6379002,
  "PHB-2024_IT_v1.pdf": 265703,
  "Ranger.pdf": 5898437,
  "Stregone.pdf": 8350164,
  "Talenti.pdf": 9336327,
  "Warlock.pdf": 7931967,
  "Incantesimi_revisionati.xlsx": 43137,
  "grimorio_del_drago.apk": 50730022,
};

export default function DocumentiPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">

      <div className="flex flex-col gap-3">
        <h1 className="font-cinzel text-4xl font-bold text-amber-400 tracking-widest">
          📄 Archivio
        </h1>
        <p className="font-crimson text-lg text-stone-400">
          Regole, classi e schede per i giocatori della Gilda dei matti.
        </p>
        <div className="w-16 h-px bg-amber-700" />
      </div>

      {categorie.map((cat) => (
        <div key={cat.titolo} className="flex flex-col gap-3">
          <h2 className="font-cinzel text-lg font-bold text-amber-600 tracking-widest">
            {cat.titolo}
          </h2>
          <div className="flex flex-col divide-y divide-stone-800 border border-stone-700 rounded-lg overflow-hidden">
            {cat.documenti.map((doc) => (
              <a
                key={doc.file}
                href={`/documenti/${doc.file}`}
                download
                className="flex items-center justify-between px-5 py-3 bg-stone-900 hover:bg-stone-800 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-stone-500 text-lg">📎</span>
                  <span className="font-crimson text-lg text-stone-200 group-hover:text-amber-300 transition-colors">
                    {doc.nome}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-crimson text-sm text-stone-500">
                    {formatSize(dimensioni[doc.file] ?? 0)}
                  </span>
                  <span className="font-crimson text-xs text-amber-700 group-hover:text-amber-500 transition-colors border border-amber-900 group-hover:border-amber-700 rounded px-2 py-0.5">
                    Scarica
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}
