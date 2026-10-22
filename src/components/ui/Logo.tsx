export function Logo({ className = "" }: { className?: string }) {
  return <a href="#top" className={`logo ${className}`} aria-label="Homedine">Home<em className="logo__em">dine</em></a>;
}
