"use client";

import { useState } from "react";

type Oggetto = {
  nome: string;
  quantita: number;
  descrizione: string;
  flavour?: string;
  prezzo: string;
  categoria: string;
  illKey: string;
};

// ── Illustrazioni SVG ──────────────────────────────────────────────────────────

function IllPozioneSmall() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="50" cy="100" rx="22" ry="10" fill="#a83232" opacity="0.3"/>
      <path d="M38 70 Q30 85 30 95 Q30 108 50 108 Q70 108 70 95 Q70 85 62 70 Z" fill="#c0392b"/>
      <path d="M40 72 Q33 85 33 95 Q33 105 50 105 Q52 95 50 80 Z" fill="#e74c3c" opacity="0.6"/>
      <rect x="42" y="45" width="16" height="28" rx="3" fill="#c0392b"/>
      <rect x="42" y="45" width="16" height="6" rx="2" fill="#7f8c8d"/>
      <rect x="44" y="51" width="12" height="3" fill="#95a5a6"/>
      <rect x="45" y="36" width="10" height="12" rx="2" fill="#7f8c8d"/>
      <rect x="47" y="28" width="6" height="10" rx="1" fill="#95a5a6"/>
      <path d="M40 80 Q45 75 50 82 Q55 88 60 82" stroke="#e74c3c" strokeWidth="1.5" opacity="0.5" fill="none"/>
      <ellipse cx="44" cy="88" rx="3" ry="4" fill="#f1948a" opacity="0.4"/>
    </svg>
  );
}

function IllPozioneMedia() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="50" cy="102" rx="26" ry="10" fill="#8e44ad" opacity="0.3"/>
      <path d="M34 65 Q24 83 24 96 Q24 110 50 110 Q76 110 76 96 Q76 83 66 65 Z" fill="#8e44ad"/>
      <path d="M36 67 Q27 83 27 96 Q27 107 50 107 Q53 95 50 78 Z" fill="#a569bd" opacity="0.6"/>
      <rect x="40" y="40" width="20" height="28" rx="3" fill="#8e44ad"/>
      <rect x="40" y="40" width="20" height="7" rx="2" fill="#7f8c8d"/>
      <rect x="42" y="47" width="16" height="3" fill="#95a5a6"/>
      <rect x="43" y="30" width="14" height="13" rx="2" fill="#7f8c8d"/>
      <rect x="46" y="20" width="8" height="12" rx="2" fill="#95a5a6"/>
      <path d="M36 78 Q43 72 50 80 Q57 87 64 80" stroke="#d7bde2" strokeWidth="2" opacity="0.5" fill="none"/>
      <ellipse cx="42" cy="90" rx="4" ry="5" fill="#c39bd3" opacity="0.4"/>
      <ellipse cx="58" cy="85" rx="3" ry="3" fill="#c39bd3" opacity="0.3"/>
    </svg>
  );
}

function IllUnguento() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="50" cy="100" rx="18" ry="7" fill="#1e8449" opacity="0.3"/>
      <path d="M36 65 Q32 78 32 90 Q32 102 50 102 Q68 102 68 90 Q68 78 64 65 Z" fill="#1a5276"/>
      <path d="M38 67 Q34 78 34 90 Q34 100 50 100 Q52 90 50 76 Z" fill="#1f618d" opacity="0.5"/>
      <rect x="40" y="42" width="20" height="26" rx="3" fill="#1a5276"/>
      <rect x="40" y="42" width="20" height="5" rx="2" fill="#7f8c8d"/>
      <rect x="43" y="33" width="14" height="12" rx="2" fill="#566573"/>
      <rect x="46" y="24" width="8" height="11" rx="1" fill="#717d7e"/>
      <path d="M50 24 L50 18 Q53 14 56 16 Q58 18 56 20 Q52 22 50 24" fill="#27ae60"/>
      <path d="M40 78 Q45 72 50 79 Q55 85 60 78" stroke="#82e0aa" strokeWidth="1.5" opacity="0.6" fill="none"/>
      <circle cx="44" cy="88" r="3" fill="#27ae60" opacity="0.3"/>
    </svg>
  );
}

function IllPugnali() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <line x1="28" y1="20" x2="62" y2="100" stroke="#7f8c8d" strokeWidth="6" strokeLinecap="round"/>
      <line x1="28" y1="20" x2="62" y2="100" stroke="#bdc3c7" strokeWidth="4" strokeLinecap="round"/>
      <path d="M24 22 L32 18 L34 26 Z" fill="#bdc3c7"/>
      <rect x="18" y="82" width="18" height="22" rx="2" fill="#6d4c41" transform="rotate(-28 18 82)"/>
      <line x1="72" y1="20" x2="38" y2="100" stroke="#7f8c8d" strokeWidth="6" strokeLinecap="round"/>
      <line x1="72" y1="20" x2="38" y2="100" stroke="#bdc3c7" strokeWidth="4" strokeLinecap="round"/>
      <path d="M76 22 L68 18 L66 26 Z" fill="#bdc3c7"/>
      <rect x="64" y="82" width="18" height="22" rx="2" fill="#6d4c41" transform="rotate(28 64 82)"/>
      <ellipse cx="50" cy="62" rx="8" ry="4" fill="#a93226" opacity="0.4"/>
    </svg>
  );
}

function IllScrollGold() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="25" width="60" height="75" rx="4" fill="#f0d080"/>
      <rect x="22" y="27" width="56" height="71" rx="3" fill="#f5e4a0"/>
      <ellipse cx="50" cy="25" rx="30" ry="8" fill="#e8c060"/>
      <ellipse cx="50" cy="100" rx="30" ry="8" fill="#e8c060"/>
      <line x1="30" y1="45" x2="70" y2="45" stroke="#c9a227" strokeWidth="1.5" opacity="0.7"/>
      <line x1="30" y1="54" x2="70" y2="54" stroke="#c9a227" strokeWidth="1" opacity="0.5"/>
      <line x1="30" y1="62" x2="70" y2="62" stroke="#c9a227" strokeWidth="1" opacity="0.5"/>
      <line x1="30" y1="70" x2="60" y2="70" stroke="#c9a227" strokeWidth="1" opacity="0.5"/>
      <path d="M42 52 L50 40 L58 52 L54 52 L54 64 L46 64 L46 52 Z" fill="#f39c12" opacity="0.8"/>
      <ellipse cx="50" cy="40" rx="5" ry="5" fill="#f1c40f"/>
      <circle cx="50" cy="40" r="3" fill="#fff" opacity="0.5"/>
    </svg>
  );
}

function IllScrollBlue() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="25" width="60" height="75" rx="4" fill="#f0d080"/>
      <rect x="22" y="27" width="56" height="71" rx="3" fill="#f5e4a0"/>
      <ellipse cx="50" cy="25" rx="30" ry="8" fill="#e8c060"/>
      <ellipse cx="50" cy="100" rx="30" ry="8" fill="#e8c060"/>
      <line x1="30" y1="45" x2="70" y2="45" stroke="#c9a227" strokeWidth="1.5" opacity="0.7"/>
      <line x1="30" y1="54" x2="70" y2="54" stroke="#c9a227" strokeWidth="1" opacity="0.5"/>
      <line x1="30" y1="62" x2="70" y2="62" stroke="#c9a227" strokeWidth="1" opacity="0.5"/>
      <ellipse cx="50" cy="52" rx="12" ry="14" fill="#2980b9" opacity="0.2"/>
      <path d="M50 40 Q38 50 44 62 Q50 70 56 62 Q62 50 50 40" fill="#3498db" opacity="0.6"/>
      <circle cx="50" cy="52" r="5" fill="#5dade2"/>
    </svg>
  );
}

function IllScrollGreen() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="25" width="60" height="75" rx="4" fill="#f0d080"/>
      <rect x="22" y="27" width="56" height="71" rx="3" fill="#f5e4a0"/>
      <ellipse cx="50" cy="25" rx="30" ry="8" fill="#e8c060"/>
      <ellipse cx="50" cy="100" rx="30" ry="8" fill="#e8c060"/>
      <line x1="30" y1="62" x2="70" y2="62" stroke="#c9a227" strokeWidth="1.5" opacity="0.7"/>
      <line x1="30" y1="70" x2="70" y2="70" stroke="#c9a227" strokeWidth="1" opacity="0.5"/>
      <path d="M50 38 Q42 44 44 54 Q46 62 50 62 Q54 62 56 54 Q58 44 50 38" fill="#27ae60" opacity="0.7"/>
      <path d="M36 46 Q42 40 50 44" stroke="#27ae60" strokeWidth="2" fill="none"/>
      <path d="M64 46 Q58 40 50 44" stroke="#27ae60" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="38" r="4" fill="#2ecc71"/>
    </svg>
  );
}

function IllScrollBrown() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="25" width="60" height="75" rx="4" fill="#f0d080"/>
      <rect x="22" y="27" width="56" height="71" rx="3" fill="#f5e4a0"/>
      <ellipse cx="50" cy="25" rx="30" ry="8" fill="#e8c060"/>
      <ellipse cx="50" cy="100" rx="30" ry="8" fill="#e8c060"/>
      <line x1="30" y1="62" x2="70" y2="62" stroke="#c9a227" strokeWidth="1.5" opacity="0.7"/>
      <path d="M38 40 Q50 35 62 40 Q65 52 62 62 Q50 67 38 62 Q35 52 38 40" fill="#a04000" opacity="0.15" stroke="#a04000" strokeWidth="1.5"/>
      <path d="M44 44 L56 44 M42 50 L58 50 M44 56 L56 56" stroke="#784212" strokeWidth="1.2" opacity="0.6"/>
    </svg>
  );
}

function IllScrollSpider() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="25" width="60" height="75" rx="4" fill="#f0d080"/>
      <rect x="22" y="27" width="56" height="71" rx="3" fill="#f5e4a0"/>
      <ellipse cx="50" cy="25" rx="30" ry="8" fill="#e8c060"/>
      <ellipse cx="50" cy="100" rx="30" ry="8" fill="#e8c060"/>
      <circle cx="50" cy="52" r="8" fill="#2c3e50" opacity="0.8"/>
      <circle cx="50" cy="52" r="4" fill="#1a252f"/>
      <line x1="50" y1="38" x2="42" y2="46" stroke="#2c3e50" strokeWidth="1.5"/>
      <line x1="50" y1="38" x2="58" y2="46" stroke="#2c3e50" strokeWidth="1.5"/>
      <line x1="36" y1="52" x2="44" y2="52" stroke="#2c3e50" strokeWidth="1.5"/>
      <line x1="56" y1="52" x2="64" y2="52" stroke="#2c3e50" strokeWidth="1.5"/>
      <line x1="50" y1="60" x2="42" y2="68" stroke="#2c3e50" strokeWidth="1.5"/>
      <line x1="50" y1="60" x2="58" y2="68" stroke="#2c3e50" strokeWidth="1.5"/>
      <line x1="34" y1="44" x2="42" y2="48" stroke="#2c3e50" strokeWidth="1"/>
      <line x1="66" y1="44" x2="58" y2="48" stroke="#2c3e50" strokeWidth="1"/>
    </svg>
  );
}

function IllScrollFire() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="25" width="60" height="75" rx="4" fill="#f0d080"/>
      <rect x="22" y="27" width="56" height="71" rx="3" fill="#f5e4a0"/>
      <ellipse cx="50" cy="25" rx="30" ry="8" fill="#e8c060"/>
      <ellipse cx="50" cy="100" rx="30" ry="8" fill="#e8c060"/>
      <line x1="50" y1="38" x2="50" y2="68" stroke="#7f8c8d" strokeWidth="3" strokeLinecap="round"/>
      <path d="M46 64 L54 64 L52 70 L48 70 Z" fill="#95a5a6"/>
      <path d="M44 42 L56 42 M43 46 L57 46" stroke="#95a5a6" strokeWidth="1.5" opacity="0.5"/>
      <path d="M50 36 Q45 28 48 22 Q44 26 43 32 Q40 28 42 22 Q38 28 40 34 Q37 32 38 26 Q34 32 36 38 Q34 42 38 45 Q46 50 54 45 Q58 42 56 38 Q54 32 50 36" fill="#e74c3c" opacity="0.85"/>
      <path d="M50 38 Q47 32 49 28 Q47 31 47 35 Q45 32 46 28 Q43 32 44 36 Q43 39 46 41 Q50 44 54 41 Q56 38 54 35 Q52 31 50 38" fill="#f39c12" opacity="0.8"/>
    </svg>
  );
}

function IllBastone() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <line x1="50" y1="108" x2="50" y2="30" stroke="#6d4c41" strokeWidth="5" strokeLinecap="round"/>
      <line x1="50" y1="108" x2="50" y2="30" stroke="#a1887f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M46 38 Q40 28 42 20 Q44 28 50 24 Q56 28 58 20 Q60 28 54 38 Z" fill="#c0392b"/>
      <path d="M46 38 Q43 30 44 24 Q47 28 50 26 Q50 30 46 38" fill="#e74c3c" opacity="0.6"/>
      <circle cx="50" cy="20" r="4" fill="#e74c3c"/>
      <circle cx="50" cy="20" r="2" fill="#f1948a"/>
      <path d="M42 50 Q38 44 42 40 Q46 36 50 40" stroke="#c0392b" strokeWidth="1.5" fill="none"/>
      <circle cx="41" cy="43" r="2" fill="#e74c3c" opacity="0.7"/>
      <path d="M58 55 Q62 49 60 43 Q56 38 52 42" stroke="#c0392b" strokeWidth="1.5" fill="none"/>
      <circle cx="59" cy="47" r="2" fill="#e74c3c" opacity="0.7"/>
      <path d="M44 68 Q40 62 43 57 Q47 53 50 57" stroke="#a93226" strokeWidth="1.2" fill="none"/>
      <circle cx="43" cy="62" r="1.5" fill="#e74c3c" opacity="0.5"/>
    </svg>
  );
}

function IllAscia() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <line x1="50" y1="110" x2="50" y2="35" stroke="#6d4c41" strokeWidth="6" strokeLinecap="round"/>
      <line x1="50" y1="110" x2="50" y2="35" stroke="#a1887f" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M50 20 Q30 20 28 38 Q28 52 50 52 Q38 44 38 32 Q42 24 50 20" fill="#7f8c8d"/>
      <path d="M50 20 Q70 20 72 38 Q72 52 50 52 Q62 44 62 32 Q58 24 50 20" fill="#95a5a6"/>
      <path d="M50 20 Q45 22 43 30 Q43 38 50 42 Q57 38 57 30 Q55 22 50 20" fill="#bdc3c7"/>
      <ellipse cx="50" cy="36" rx="6" ry="6" fill="#2980b9" opacity="0.9"/>
      <ellipse cx="50" cy="36" rx="4" ry="4" fill="#5dade2"/>
      <ellipse cx="50" cy="36" rx="2" ry="2" fill="#aed6f1"/>
    </svg>
  );
}

function IllSpada() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="glowSword" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#85c1e9" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#85c1e9" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="60" rx="30" ry="50" fill="url(#glowSword)"/>
      <polygon points="50,12 47,95 53,95" fill="#bdc3c7"/>
      <polygon points="50,12 47,95 53,95" fill="url(#glowSword)" opacity="0.8"/>
      <line x1="50" y1="12" x2="50" y2="95" stroke="#aed6f1" strokeWidth="1" opacity="0.7"/>
      <rect x="35" y="80" width="30" height="7" rx="2" fill="#7f8c8d"/>
      <rect x="35" y="80" width="30" height="7" rx="2" fill="#aed6f1" opacity="0.3"/>
      <rect x="44" y="87" width="12" height="22" rx="3" fill="#6d4c41"/>
      <line x1="30" y1="40" x2="70" y2="40" stroke="#aed6f1" strokeWidth="1" opacity="0.3" strokeDasharray="3,4"/>
      <line x1="28" y1="55" x2="72" y2="55" stroke="#aed6f1" strokeWidth="1" opacity="0.2" strokeDasharray="3,4"/>
    </svg>
  );
}

function IllElmo() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M20 75 Q18 55 25 42 Q35 25 50 22 Q65 25 75 42 Q82 55 80 75 Z" fill="#4a235a" opacity="0.15"/>
      <path d="M22 74 Q20 54 27 41 Q37 24 50 22 Q63 24 73 41 Q80 54 78 74 Z" fill="#6d4c41" opacity="0.2"/>
      <path d="M22 74 Q20 54 27 42 Q37 25 50 22 Q63 25 73 42 Q80 54 78 74 L22 74 Z" fill="#5d4037"/>
      <path d="M24 72 Q22 53 29 42 Q38 26 50 23 Q62 26 71 42 Q78 53 76 72 Z" fill="#795548"/>
      <path d="M24 72 Q22 55 29 44 Q38 28 50 25 Q38 35 35 50 Q32 62 34 72 Z" fill="#8d6e63" opacity="0.5"/>
      <rect x="18" y="72" width="64" height="8" rx="3" fill="#4e342e"/>
      <ellipse cx="36" cy="42" rx="5" ry="5" fill="#6a0dad" opacity="0.8"/>
      <ellipse cx="36" cy="42" rx="3" ry="3" fill="#9b59b6"/>
      <ellipse cx="50" cy="35" rx="5" ry="5" fill="#6a0dad" opacity="0.8"/>
      <ellipse cx="50" cy="35" rx="3" ry="3" fill="#9b59b6"/>
      <ellipse cx="64" cy="42" rx="5" ry="5" fill="#6a0dad" opacity="0.8"/>
      <ellipse cx="64" cy="42" rx="3" ry="3" fill="#9b59b6"/>
      <path d="M28 38 Q35 25 50 22 Q65 25 72 38" stroke="#a5692e" strokeWidth="1.5" fill="none" opacity="0.6"/>
    </svg>
  );
}

function IllScudo() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="mirrorGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
          <stop offset="40%" stopColor="#d6eaf8" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#85c1e9" stopOpacity="0.4"/>
        </radialGradient>
      </defs>
      <path d="M20 30 Q20 18 50 18 Q80 18 80 30 L80 70 Q80 100 50 108 Q20 100 20 70 Z" fill="#7f8c8d"/>
      <path d="M24 31 Q24 22 50 22 Q76 22 76 31 L76 70 Q76 97 50 104 Q24 97 24 70 Z" fill="url(#mirrorGrad)"/>
      <path d="M24 31 Q24 22 50 22 Q38 30 35 50 Q32 68 34 80 Q24 97 24 70 Z" fill="white" opacity="0.2"/>
      <path d="M50 22 L50 104 M24 55 L76 55" stroke="#7f8c8d" strokeWidth="1.5" opacity="0.3"/>
      <path d="M30 32 Q50 26 70 32" stroke="#aed6f1" strokeWidth="1.5" opacity="0.4" fill="none"/>
      <circle cx="62" cy="40" r="8" fill="white" opacity="0.15"/>
      <ellipse cx="63" cy="39" rx="3" ry="4" fill="white" opacity="0.4" transform="rotate(-20 63 39)"/>
      <path d="M24 31 Q24 22 50 22 Q76 22 76 31 L76 70 Q76 97 50 104 Q24 97 24 70 Z" stroke="#7f8c8d" strokeWidth="3" fill="none"/>
    </svg>
  );
}

const illustrazioni: Record<string, React.ReactNode> = {
  pozione_small: <IllPozioneSmall />,
  pozione_media: <IllPozioneMedia />,
  unguento: <IllUnguento />,
  pugnali: <IllPugnali />,
  scroll_gold: <IllScrollGold />,
  scroll_blue: <IllScrollBlue />,
  scroll_green: <IllScrollGreen />,
  scroll_brown: <IllScrollBrown />,
  scroll_spider: <IllScrollSpider />,
  scroll_fire: <IllScrollFire />,
  bastone: <IllBastone />,
  ascia: <IllAscia />,
  spada: <IllSpada />,
  elmo: <IllElmo />,
  scudo: <IllScudo />,
};

// ── Dati ──────────────────────────────────────────────────────────────────────

type Categoria = { titolo: string; emoji: string; oggetti: Oggetto[] };

const catalogo: Categoria[] = [
  {
    titolo: "Consumabili",
    emoji: "🧪",
    oggetti: [
      { nome: "Pozione di Guarigione", quantita: 10, descrizione: "Bere questa pozione ripristina 2d4+2 punti ferita.", flavour: undefined, prezzo: "50 mo", categoria: "Consumabili", illKey: "pozione_small" },
      { nome: "Pozione di Guarigione Superiore", quantita: 5, descrizione: "Bere questa pozione ripristina 4d4+4 punti ferita.", flavour: undefined, prezzo: "100 mo", categoria: "Consumabili", illKey: "pozione_media" },
      { nome: "Unguento Velenoso", quantita: 2, descrizione: "Applicato su un'arma da taglio o perforante, per 3 turni aggiunge 1d4 danni da veleno ai colpi andati a segno. Il bersaglio deve superare un tiro salvezza su COS cd 12 o subire la condizione Avvelenato fino alla fine del suo prossimo turno.", flavour: undefined, prezzo: "100 mo", categoria: "Consumabili", illKey: "unguento" },
      { nome: "Pugnali da Lancio", quantita: 10, descrizione: "Pugnali bilanciati per il lancio. Danno 1d4 perforante, gittata 6/18m. Proprietà: Accurata, Leggera, da Lancio.", flavour: undefined, prezzo: "2 mo cad.", categoria: "Consumabili", illKey: "pugnali" },
    ],
  },
  {
    titolo: "Pergamene",
    emoji: "📜",
    oggetti: [
      { nome: "Pergamena della Rinascita", quantita: 1, descrizione: "Incantesimo Rinascita (9° livello). Riporta in vita una creatura morta entro 10 giorni. La creatura torna con 1 PF e perde 1 punto al massimo dei PF permanentemente.", flavour: undefined, prezzo: "500 mo", categoria: "Pergamene", illKey: "scroll_gold" },
      { nome: "Pergamena — Camuffare Se Stesso", quantita: 2, descrizione: "Incantesimo Camuffare Se Stesso (1° livello). Altera magicamente il tuo aspetto fisico fino a 30cm in più o in meno. Dura 1 ora o finché non ti concentri.", flavour: undefined, prezzo: "30 mo", categoria: "Pergamene", illKey: "scroll_blue" },
      { nome: "Pergamena — Parlare con gli Animali", quantita: 2, descrizione: "Incantesimo Parlare con gli Animali (1° livello). Per 10 minuti puoi comprendere e comunicare verbalmente con le bestie. Le bestie hanno intelligenza limitata e possono non sapere rispondere.", flavour: undefined, prezzo: "30 mo", categoria: "Pergamene", illKey: "scroll_green" },
      { nome: "Pergamena — Pelle Coriacea", quantita: 1, descrizione: "Incantesimo Pelle Coriacea (2° livello). La CA del bersaglio toccato diventa 13 + modificatore DES. Dura 8 ore, richiede concentrazione.", flavour: undefined, prezzo: "50 mo", categoria: "Pergamene", illKey: "scroll_brown" },
      { nome: "Pergamena — Movimenti del Ragno", quantita: 1, descrizione: "Incantesimo Movimenti del Ragno (2° livello). Il bersaglio ottiene velocità di scalata pari alla velocità di movimento e può scalare superfici verticali e soffitti a mani libere. Dura 1 ora, richiede concentrazione.", flavour: undefined, prezzo: "50 mo", categoria: "Pergamene", illKey: "scroll_spider" },
      { nome: "Pergamena — Arma Elementale", quantita: 1, descrizione: "Incantesimo Arma Elementale (3° livello). Un'arma non magica diventa magica. Scegli un tipo di danno tra Acido, Freddo, Fulmine, Fuoco o Tuono: l'arma aggiunge 1d4 di quel danno ai colpi andati a segno. Dura 1 ora, richiede concentrazione.", flavour: undefined, prezzo: "100 mo", categoria: "Pergamene", illKey: "scroll_fire" },
    ],
  },
  {
    titolo: "Armi",
    emoji: "⚔️",
    oggetti: [
      { nome: "Bastone delle Rose", quantita: 1, descrizione: "Bastone magico utilizzabile come catalizzatore arcano. Aggiunge 1d4 danni perforanti sia agli incantesimi che ai colpi melee. Richiede attunement da parte di un incantatore.", flavour: "Un bastone ricavato da un arbusto di rose selvatiche. Sulla punta, numerose spine acuminate resistono a qualsiasi tentativo di rimozione.", prezzo: "50 mo", categoria: "Armi", illKey: "bastone" },
      { nome: "Ascia Rombo della Foresta", quantita: 1, descrizione: "Ascia bipenne magica. Quando colpisce un nemico, questi deve superare un tiro salvezza su COS cd 14 o essere respinto di 3 metri.", flavour: "Il manico è intrecciato di nocciolo vivo. Sulla lama è incastonato uno zaffiro grezzo che vibra ad ogni colpo.", prezzo: "75 mo", categoria: "Armi", illKey: "ascia" },
      { nome: "Spada Elfica Intarsiata", quantita: 1, descrizione: "Spada lunga magica. Si illumina di luce azzurra (luminosità intensa 6m, fioca ulteriori 6m) quando una creatura dalle intenzioni ostili si trova entro 30 metri.", flavour: "Una spada di fattura elfica, rifinita con intarsi d'argento. Il bagliore azzurro che emette calma stranamente chi la osserva.", prezzo: "65 mo", categoria: "Armi", illKey: "spada" },
    ],
  },
  {
    titolo: "Armature",
    emoji: "🛡️",
    oggetti: [
      { nome: "Elmo dell'Antica Quercia", quantita: 1, descrizione: "Elmo leggero magico. Mentre indossi questo elmo sei immune ai danni Psichici. Richiede attunement.", flavour: "Un elmo intagliato nel legno di una quercia secolare, ornato da piccole pietre viola. Pesa sorprendentemente poco.", prezzo: "90 mo", categoria: "Armature", illKey: "elmo" },
      { nome: "Scudo dello Specchio Riflettente", quantita: 1, descrizione: "Scudo magico. Come reazione, puoi tentare di riflettere un incantesimo che richiede un tiro per colpire: supera una prova di Abilità DES cd 15. Se riesci, l'incantesimo si ritorce contro il lanciatore usando il suo stesso tiro per colpire. Richiede attunement.", flavour: undefined, prezzo: "90 mo", categoria: "Armature", illKey: "scudo" },
    ],
  },
];

// ── Componente pergamena decorativa ───────────────────────────────────────────

function ParchmentFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, #f5e6c8 0%, #ede0b0 40%, #f0d890 60%, #e8d5a3 100%)" }}>
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Ccircle cx='1' cy='1' r='0.5' fill='%23a08030' opacity='0.4'/%3E%3C/svg%3E\")",
      }}/>
      {/* SVG decorazione bordo */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Bordo interno */}
        <rect x="8" y="8" width="calc(100%-16)" height="calc(100%-16)" rx="10" fill="none" stroke="#a07828" strokeWidth="1.5" opacity="0.5" strokeDasharray="6,4"/>
        {/* Angolo in alto a sinistra */}
        <g opacity="0.55" transform="translate(10,10)">
          <path d="M0 30 Q0 0 30 0" stroke="#5a7a20" strokeWidth="1.5" fill="none"/>
          <path d="M8 0 Q4 8 0 12" stroke="#5a7a20" strokeWidth="1" fill="none"/>
          <circle cx="8" cy="0" r="2.5" fill="#7a9a28"/>
          <circle cx="16" cy="2" r="2" fill="#7a9a28"/>
          <path d="M12 4 Q14 0 18 2 Q16 6 12 4" fill="#4a8020"/>
          <path d="M0 20 Q-2 16 2 14 Q4 18 0 20" fill="#4a8020"/>
          <circle cx="4" cy="26" r="1.5" fill="#c04040"/>
          <circle cx="2" cy="14" r="1.5" fill="#c04040"/>
        </g>
        {/* Angolo in alto a destra */}
        <g opacity="0.55" transform="translate(100%,10) scale(-1,1) translate(-10,0)">
          <path d="M0 30 Q0 0 30 0" stroke="#5a7a20" strokeWidth="1.5" fill="none"/>
          <path d="M8 0 Q4 8 0 12" stroke="#5a7a20" strokeWidth="1" fill="none"/>
          <circle cx="8" cy="0" r="2.5" fill="#7a9a28"/>
          <circle cx="16" cy="2" r="2" fill="#7a9a28"/>
          <path d="M12 4 Q14 0 18 2 Q16 6 12 4" fill="#4a8020"/>
          <path d="M0 20 Q-2 16 2 14 Q4 18 0 20" fill="#4a8020"/>
          <circle cx="4" cy="26" r="1.5" fill="#c04040"/>
          <circle cx="2" cy="14" r="1.5" fill="#c04040"/>
        </g>
        {/* Angolo in basso a sinistra */}
        <g opacity="0.55" transform="translate(10,100%) scale(1,-1) translate(0,-10)">
          <path d="M0 30 Q0 0 30 0" stroke="#5a7a20" strokeWidth="1.5" fill="none"/>
          <circle cx="8" cy="0" r="2.5" fill="#7a9a28"/>
          <circle cx="16" cy="2" r="2" fill="#7a9a28"/>
          <path d="M12 4 Q14 0 18 2 Q16 6 12 4" fill="#4a8020"/>
          <circle cx="4" cy="26" r="1.5" fill="#c04040"/>
        </g>
        {/* Angolo in basso a destra */}
        <g opacity="0.55" transform="translate(100%,100%) scale(-1,-1) translate(-10,-10)">
          <path d="M0 30 Q0 0 30 0" stroke="#5a7a20" strokeWidth="1.5" fill="none"/>
          <circle cx="8" cy="0" r="2.5" fill="#7a9a28"/>
          <circle cx="16" cy="2" r="2" fill="#7a9a28"/>
          <path d="M12 4 Q14 0 18 2 Q16 6 12 4" fill="#4a8020"/>
          <circle cx="4" cy="26" r="1.5" fill="#c04040"/>
        </g>
      </svg>
      <div className="relative z-10 p-8">
        {children}
      </div>
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function Modal({ oggetto, onClose }: { oggetto: Oggetto; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full rounded-xl shadow-2xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f5e6c8 0%, #ede0b0 50%, #f0d890 100%)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-stone-600 hover:text-stone-900 text-2xl leading-none font-bold"
        >
          ×
        </button>
        <div className="flex flex-col sm:flex-row gap-0">
          {/* Illustrazione */}
          <div className="flex items-center justify-center p-8 sm:w-48 shrink-0" style={{ background: "rgba(160,120,40,0.1)" }}>
            <div className="w-32 h-32 sm:w-36 sm:h-36">
              {illustrazioni[oggetto.illKey]}
            </div>
          </div>
          {/* Testo */}
          <div className="flex flex-col gap-3 p-6 border-l border-amber-300">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <h3 className="font-cinzel font-bold text-lg text-amber-900 leading-tight">{oggetto.nome}</h3>
              {oggetto.quantita > 1 && (
                <span className="font-crimson text-xs text-stone-600 border border-stone-400 px-1.5 py-0.5 rounded shrink-0">
                  ×{oggetto.quantita} disponibili
                </span>
              )}
            </div>
            <p className="font-cinzel text-amber-700 font-bold text-base">{oggetto.prezzo}</p>
            <div className="w-12 h-px bg-amber-600 opacity-50" />
            <p className="font-crimson text-stone-800 leading-relaxed text-base">{oggetto.descrizione}</p>
            {oggetto.flavour && (
              <p className="font-crimson text-stone-600 italic text-sm border-l-2 border-amber-600 pl-3 mt-1">
                {oggetto.flavour}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Componente principale ─────────────────────────────────────────────────────

export default function MercanteShop() {
  const [selezionato, setSelezionato] = useState<Oggetto | null>(null);

  return (
    <>
      {/* Banner */}
      <div className="border border-amber-800 rounded-lg p-6 bg-stone-900 flex flex-col gap-2">
        <p className="font-cinzel text-lg text-amber-400 font-bold">🌲 Mercante in arrivo — Specialità dalla Foresta</p>
        <p className="font-crimson text-stone-300">
          Disponibile dal <span className="text-amber-300 font-semibold">15 Giugno</span> al{" "}
          <span className="text-amber-300 font-semibold">28 Giugno</span>.
          Scorte limitate — chi prima arriva, meglio si arma.
        </p>
      </div>

      {/* Pergamena con catalogo */}
      <ParchmentFrame>
        <div className="flex flex-col gap-8">
          {catalogo.map((cat) => (
            <div key={cat.titolo} className="flex flex-col gap-3">
              <h2 className="font-cinzel text-lg font-bold text-amber-900 flex items-center gap-2 border-b border-amber-700 border-opacity-40 pb-2">
                {cat.emoji} {cat.titolo}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.oggetti.map((obj) => (
                  <button
                    key={obj.nome}
                    onClick={() => setSelezionato(obj)}
                    className="text-left flex items-center gap-4 rounded-lg p-3 border border-amber-700 border-opacity-30 hover:border-opacity-70 hover:bg-amber-900 hover:bg-opacity-10 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 shrink-0">
                      {illustrazioni[obj.illKey]}
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-cinzel text-sm font-bold text-amber-900 leading-tight line-clamp-2">{obj.nome}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-crimson text-amber-700 text-sm font-semibold">{obj.prezzo}</span>
                        {obj.quantita > 1 && (
                          <span className="font-crimson text-stone-600 text-xs">×{obj.quantita}</span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ParchmentFrame>

      {/* Modal */}
      {selezionato && (
        <Modal oggetto={selezionato} onClose={() => setSelezionato(null)} />
      )}
    </>
  );
}
