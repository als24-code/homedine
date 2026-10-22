"use client";
import { useRef, useState } from "react";
import { bestSellers, formatPrice } from "@/data/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";

export function BestSellers() {
  const [active, setActive] = useState(0);
  const panel = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".bests__shot--on", { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" });
  }, { dependencies: [active], scope: panel });

  return (
    <Section id="bestsellers" className="bests-section">
      <div className="bests">
        <div className="bests__left">
          <h2 className="bests__title" data-reveal>Best <em>sellers</em></h2>
          <ol className="bests__list">
            {bestSellers.map((b, i) => (
              <li key={b.id} data-reveal>
                <a href="#shop" className={`bests__row ${i === active ? "bests__row--on" : ""}`}
                  onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
                  <span className="bests__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="bests__name">{b.name}</span>
                  <span className="bests__price">{formatPrice(b.price)}</span>
                  <Icon name="upRight" size={18} className="bests__arrow" />
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div ref={panel} className="bests__panel" data-reveal="scale">
          {bestSellers.map((b, i) => (
            <Media key={b.id} src={b.image} alt={b.name} fit={b.fit} sizes="(min-width:1024px) 50vw, 100vw"
              className={`bests__shot ${i === active ? "bests__shot--on" : ""}`} />
          ))}
        </div>
      </div>
    </Section>
  );
}
