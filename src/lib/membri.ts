import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "src/content/membri");

export type Membro = {
  slug: string;
  nome: string;
  classe: string;
  livello: number;
  razza: string;
  ruolo: string;
  allineamento: string;
  divinita: string;
  stato: string;
  monete: string;
  giocatore: string;
  immagine: string;
  ordine: number;
  bio: string;
};

export function getMembri(): Membro[] {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(".md", ""),
        nome: data.nome ?? "",
        classe: data.classe ?? "",
        livello: data.livello ?? 0,
        razza: data.razza ?? "",
        ruolo: data.ruolo ?? "",
        allineamento: data.allineamento ?? "",
        divinita: data.divinita ?? "",
        stato: data.stato ?? "Attivo",
        monete: data.monete ?? "",
        giocatore: data.giocatore ?? "",
        immagine: data.immagine ?? "",
        ordine: data.ordine ?? 99,
        bio: content.trim(),
      };
    })
    .sort((a, b) => a.ordine - b.ordine);
}

export function getMembro(slug: string): Membro | null {
  const file = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    nome: data.nome ?? "",
    classe: data.classe ?? "",
    livello: data.livello ?? 0,
    razza: data.razza ?? "",
    ruolo: data.ruolo ?? "",
    allineamento: data.allineamento ?? "",
    divinita: data.divinita ?? "",
    stato: data.stato ?? "Attivo",
    monete: data.monete ?? "",
    giocatore: data.giocatore ?? "",
    immagine: data.immagine ?? "",
    ordine: data.ordine ?? 99,
    bio: content.trim(),
  };
}
