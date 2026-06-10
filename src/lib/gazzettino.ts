import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "src/content/gazzettino");

export type Articolo = {
  slug: string;
  titolo: string;
  data: string;
  categoria: string;
  autore: string;
  contenuto: string;
};

export function getArticoli(): Articolo[] {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        titolo: data.titolo ?? "",
        data: data.data ?? "",
        categoria: data.categoria ?? "",
        autore: data.autore ?? "",
        contenuto: content,
      };
    })
    .sort((a, b) => {
      // sort by date descending (newest first)
      const parse = (d: string) => {
        const months: Record<string, number> = {
          Gennaio: 1, Febbraio: 2, Marzo: 3, Aprile: 4, Maggio: 5, Giugno: 6,
          Luglio: 7, Agosto: 8, Settembre: 9, Ottobre: 10, Novembre: 11, Dicembre: 12,
        };
        const parts = d.replace(" s.c.r.", "").split(" ");
        const day = parseInt(parts[0]);
        const month = months[parts[1]] ?? 0;
        const year = parseInt(parts[2]);
        return year * 10000 + month * 100 + day;
      };
      return parse(b.data) - parse(a.data);
    });
}

export function getArticolo(slug: string): Articolo | null {
  const filePath = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    titolo: data.titolo ?? "",
    data: data.data ?? "",
    categoria: data.categoria ?? "",
    autore: data.autore ?? "",
    contenuto: content,
  };
}
