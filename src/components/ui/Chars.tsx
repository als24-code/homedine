export function Chars({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`chars ${className}`} aria-label={text}>
      {[...text].map((c, i) => (
        <span key={i} className="chars__mask" aria-hidden="true"><span className="chars__char">{c === " " ? "\u00A0" : c}</span></span>
      ))}
    </span>
  );
}
