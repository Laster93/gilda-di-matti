export const GILDA = {
  nome: "Gilda dei matti",
  sottotitolo: "Cronache di un gruppo di avventurieri improbabili",
  descrizione: "Benvenuto nel sito ufficiale della Gilda dei matti.",
}

// Sezioni del sito: titolo e icona sono definiti QUI e basta.
// Il menu in alto, la homepage e le singole pagine leggono da questa lista,
// quindi restano sempre allineati. Per cambiare un titolo o un'icona,
// modificala qui una volta sola.
export const SEZIONI = [
  { href: "/sessioni",    icona: "⚔️", titolo: "Cronache",   descrizione: "I riassunti delle nostre avventure, sessione per sessione." },
  { href: "/membri",      icona: "🧙", titolo: "Membri",     descrizione: "I valorosi (e improbabili) membri della gilda." },
  { href: "/gazzettino",  icona: "📰", titolo: "Gazzettino", descrizione: "Notizie dal regno, bacheche e side quest disponibili." },
  { href: "/planimetria", icona: "🗺️", titolo: "Gilda",      descrizione: "I tesori della gilda e le planimetrie della nostra sede." },
  { href: "/documenti",   icona: "📜", titolo: "Archivio",   descrizione: "Regole, schede, mappe e documenti per i giocatori." },
  { href: "/mercante",    icona: "💰", titolo: "Mercante",   descrizione: "Oggetti, pozioni e rarità in vendita al mercato della gilda." },
] as const;

// Scorciatoia per recuperare una sezione dal suo indirizzo.
export function sezione(href: string) {
  return SEZIONI.find((s) => s.href === href)!;
}

// Tesori condivisi: aggiorna le quantità o aggiungi nuovi oggetti e pubblica.
export const TESORI_GILDA = [
  { nome: "Monete d’oro", quantita: 200, icona: "🪙" },
];

// Bottega del Mercante.
// Per mostrarla sul sito e nei menu: metti visibile: true e pubblica.
// Per RIAPRIRLA: metti  chiuso: false  e pubblica. L'avviso sparisce da solo.
export const MERCANTE = {
  visibile: false,
  chiuso: true,
  riapertura: "Settembre",
}

export const SEZIONI_VISIBILI = SEZIONI.filter(
  (s) => s.href !== "/mercante" || MERCANTE.visibile,
);
