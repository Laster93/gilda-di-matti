import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "src/content/sessioni");

export type Sessione = {
  slug: string;
  atto: number;
  etichetta: string;
  titolo: string;
  data: string;
  contenuto: string;
  notemaster: string;
};

function parse(file: string): Sessione {
  const raw = fs.readFileSync(path.join(dir, file), "utf-8");
  const { data, content } = matter(raw);
  const parts = content.split("<!-- MASTER -->");
  const atto = data.atto ?? 0;
  return {
    slug: file.replace(".md", ""),
    atto,
    etichetta: data.etichetta ?? `Atto ${atto}`,
    titolo: data.titolo ?? "",
    data: data.data ?? "",
    contenuto: parts[0].trim(),
    notemaster: parts[1]?.trim() ?? "",
  };
}

export function getSessioni(): Sessione[] {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
  return files.map(parse).sort((a, b) => a.atto - b.atto);
}

export function getSessione(slug: string): Sessione | null {
  const file = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return parse(`${slug}.md`);
}
