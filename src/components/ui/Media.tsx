import Image from "next/image";

interface Props { src: string; alt: string; className?: string; sizes?: string; fit?: "cover" | "contain"; priority?: boolean; parallax?: number }

export function Media({ src, alt, className = "", sizes = "(min-width:1024px) 33vw, 90vw", fit = "cover", priority, parallax }: Props) {
  return (
    <div className={`media ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority}
        className={`media__img media__img--${fit}`} {...(parallax ? { "data-parallax": parallax } : {})} />
    </div>
  );
}
