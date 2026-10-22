import { categories } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Heading } from "@/components/ui/Heading";
import { Media } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";

export function Categories() {
  return (
    <Section className="section--wide">
      <Heading lead="Explore our thoughtful and" title="planet-first" accent="Categories" />
      <Carousel className="carousel--cats">
        {categories.map((c) => (
          <a key={c.id} href={c.href} className="category" data-reveal>
            <Media src={c.image} alt={c.name} className="category__media" sizes="(min-width:1024px) 25vw, 70vw" />
            <div className="category__body">
              <p className="category__title">Explore<em>{c.name}</em></p>
              <Button variant="butter" size="sm" icon="right" className="category__btn" tabIndex={-1}>Shop</Button>
            </div>
          </a>
        ))}
      </Carousel>
    </Section>
  );
}
