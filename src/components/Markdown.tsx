import ReactMarkdown from "react-markdown";

// Componente condiviso per mostrare il testo scritto in Markdown
// con lo stile della Gilda. Usato da Cronache, Membri e Gazzettino
// così il grassetto/corsivo/elenchi funzionano allo stesso modo ovunque.
export default function Markdown({
  children,
  size = "text-lg",
}: {
  children: string;
  size?: string;
}) {
  return (
    <div className={`font-crimson text-stone-300 leading-relaxed flex flex-col gap-4 ${size}`}>
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="leading-relaxed">{children}</p>,
          strong: ({ children }) => <strong className="text-amber-300 font-bold">{children}</strong>,
          em: ({ children }) => <em className="text-stone-400 italic">{children}</em>,
          ul: ({ children }) => <ul className="list-disc list-inside flex flex-col gap-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside flex flex-col gap-1">{children}</ol>,
          li: ({ children }) => <li>{children}</li>,
          h2: ({ children }) => <h2 className="font-cinzel text-2xl font-bold text-amber-500 mt-2">{children}</h2>,
          h3: ({ children }) => <h3 className="font-cinzel text-xl font-bold text-amber-500 mt-2">{children}</h3>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-amber-800 pl-4 italic text-stone-400">{children}</blockquote>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-amber-400 underline hover:text-amber-300 transition-colors">{children}</a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
