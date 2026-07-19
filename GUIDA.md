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
- Le altre sezioni (Archivio, Mercante, Sede) non si aggiornano con questo metodo:
  servono modifiche al codice, chiedi quando ti serve.
