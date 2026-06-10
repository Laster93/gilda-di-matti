import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "src/content/sessioni");

export type Sessione = {
  slug: string;
  atto: number;
  titolo: string;
  data: string;
  contenuto: string;
  notemaster: string;
};

export function getSessioni(): Sessione[] {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      const parts = content.split("<!-- MASTER -->");
      return {
        slug: file.replace(".md", ""),
        atto: data.atto ?? 0,
        titolo: data.titolo ?? "",
        data: data.data ?? "",
        contenuto: parts[0].trim(),
        notemaster: parts[1]?.trim() ?? "",
      };
    })
    .sort((a, b) => a.atto - b.atto);
}

export function getSessione(slug: string): Sessione | null {
  const file = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const parts = content.split("<!-- MASTER -->");
  return {
    slug,
    atto: data.atto ?? 0,
    titolo: data.titolo ?? "",
    data: data.data ?? "",
    contenuto: parts[0].trim(),
    notemaster: parts[1]?.trim() ?? "",
  };
}
