"use client";
import { gallery } from "@/data/site";
import { useCarousel } from "@/hooks/useCarousel";
import { IconButton } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Media } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";

export function Gallery() {
  const { ref, next, prev } = useCarousel<HTMLUListElement>();
  return (
    <Section id="gallery" className="section--wide">
      <Heading lead="Thoughtful, Planet-Prioritizing Ideas" title="and Inspiration" accent="Gallery"
        aside={<div className="heading__arrows"><IconButton icon="left" label="Previous" onClick={prev} /><IconButton icon="right" label="Next" onClick={next} /></div>} />
      <ul ref={ref} className="gallery">
        {gallery.map((g) => (
          <li key={g.id} className={`gallery__item ${g.tall ? "gallery__item--tall" : ""}`} data-reveal>
            <Media src={g.image} alt={g.name} className="gallery__media" sizes="300px" />
            <p className="gallery__label">{g.name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
