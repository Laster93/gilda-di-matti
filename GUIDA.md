# Come aggiungere contenuti al sito

Bastano 3 passi. Non serve saper programmare.

## Passo 1 — Prepara il file

Sul **Desktop** trovi 3 modelli già pronti:

| Modello sul Desktop | Sezione del sito |
|---|---|
| `MODELLO - Articolo Gazzettino.txt` | 📰 Gazzettino |
| `MODELLO - Sessione (Cronache).txt` | ⚔️ Cronache |
| `MODELLO - Personaggio (Membri).txt` | 🧙 Membri |

**Copia** il modello giusto, aprilo col Blocco Note, leggi le istruzioni dentro e compilalo.
Tieni sempre gli originali sul Desktop come riferimento.

> Puoi salvarlo come `.txt`: lo script lo trasforma in `.md` da solo.

## Passo 2 — Metti la copia nella cartella giusta

Sposta la copia compilata nella cartella della sua sezione, dentro `src/content/`:

| Sezione | Cartella dove mettere il file |
|---|---|
| 📰 Gazzettino | `src/content/gazzettino/` |
| ⚔️ Cronache | `src/content/sessioni/` |
| 🧙 Membri | `src/content/membri/` (+ foto in `public/membri/`) |

## Passo 3 — Pubblica

Doppio click su **`pubblica.bat`** (è nella cartella principale del sito).
Aspetta il messaggio "FATTO!" e chiudi.
Dopo circa **1 minuto** il contenuto è online.

---

## Cosa fa lo script `pubblica.bat`
1. Si sincronizza con GitHub.
2. Rinomina in `.md` tutti i file `.txt` che hai messo nelle cartelle dei contenuti.
3. Invia tutto a GitHub → Vercel ricostruisce e pubblica il sito da solo.

## Regole d'oro
- Il file deve stare nella cartella giusta e avere i campi in alto (tra i `---`) compilati.
- **Nome del file** = indirizzo web della pagina. Usa SOLO lettere semplici `a-z`
  minuscole, numeri e trattini. Niente **accenti**, **apostrofi** o **spazi**,
  altrimenti la pagina dà errore 404 quando ci entri.
  (Es: `l-arrotino-e-arrivato.md`, non `l'arrotino-è-arrivato.md`.)
  Il titolo/nome tra i `---` invece può avere accenti e maiuscole: è solo testo mostrato.
- Non modificare i file che iniziano con `_` (sono i modelli, non vengono pubblicati).
- Formattazione del testo (uguale in tutte le sezioni):
  - `**grassetto**`  →  **grassetto**
  - `*corsivo*`  →  *corsivo*
  - righe che iniziano con `-` → elenco puntato
  - lascia una **riga vuota** tra un paragrafo e l'altro
- Mercante e Sede non si aggiornano con questo metodo: servono modifiche al codice,
  chiedi quando ti serve.

---

## Archivio (documenti PDF) — funziona da solo

Trascina il PDF nella sottocartella giusta dentro `public/documenti/` e fai `pubblica.bat`:

| Sottocartella | Sezione nell'Archivio |
|---|---|
| `public/documenti/manuali/` | 📚 Manuali & Regole |
| `public/documenti/classi/` | 🧙 Classi |
| `public/documenti/schede/` | 📄 Schede |
| `public/documenti/strumenti/` | 🎲 Strumenti |

- Il **nome del file** è il nome mostrato sul sito (`Talenti.pdf` → "Talenti").
- Qui **puoi** usare accenti, spazi, `&` e parentesi: `Furtività 5.5 2024.pdf` va benissimo.
- La **dimensione** viene calcolata da sola.
- Per **togliere** un documento: cancella il file e ripubblica.
- Per una **categoria nuova**: crea una nuova sottocartella e pubblica.
- ⚠️ GitHub rifiuta i file oltre i **100 MB**.

Istruzioni complete anche in `public/documenti/_LEGGIMI.txt`.
