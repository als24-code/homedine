"use client";
import { useRef, useState } from "react";
import { formatPrice } from "@/data/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { useCart } from "@/components/providers/CartProvider";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [color, setColor] = useState(0);
  const [added, setAdded] = useState(false);
  const root = useRef<HTMLElement>(null);
  const { contextSafe } = useGSAP({ scope: root });

  const onAdd = contextSafe(() => {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
    gsap.fromTo(".product__img", { scale: 1.12 }, { scale: 1, duration: 0.8, ease: "elastic.out(1,0.5)" });
  });

  return (
    <article ref={root} className="product" data-reveal>
      <div className="product__visual">
        <span className="product__badge">{product.badge}</span>
        <Media src={product.image} alt={product.name} className="product__img-wrap" sizes="(min-width:1024px) 25vw, 70vw" />
      </div>
      <div className="product__body">
        <ul className="product__swatches" aria-label="Colours">
          {product.colors.map((c, i) => (
            <li key={c}>
              <button aria-label={`Colour ${i + 1}`} aria-pressed={i === color}
                className={`product__swatch ${i === color ? "product__swatch--on" : ""}`}
                style={{ background: c }} onClick={() => setColor(i)} />
            </li>
          ))}
        </ul>
        <p className="product__desc">{product.desc}</p>
        <div className="product__foot">
          <p className="product__price">{formatPrice(product.price)}</p>
          <Button variant="leaf" size="sm" icon={added ? "check" : "plus"} onClick={onAdd}>{added ? "Added" : "Cart"}</Button>
        </div>
      </div>
    </article>
  );
}
