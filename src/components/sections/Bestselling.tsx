import { products } from "@/data/site";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export function Bestselling() {
  return (
    <Section id="shop" className="section--wide">
      <Heading lead="Eco Essentials Planet-Friendly" title="Bestselling" accent="Products"
        aside={<Button href="#shop" variant="light" size="sm" icon="right" className="btn--text">More products</Button>} />
      <Carousel className="carousel--products">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </Carousel>
    </Section>
  );
}
