"use client";
import { useRef } from "react";
import { hero } from "@/data/site";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { useCountUp } from "@/hooks/useCountUp";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const stat = useRef<HTMLSpanElement>(null);
  useCountUp(stat, { to: hero.stat.value, suffix: "%", delay: 1.2, onScroll: false });

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(".hero__media", { scale: 1.25, duration: 2.4, ease: "power2.out" })
      .from(".hero__word", { yPercent: 110, duration: 1.1, stagger: 0.12 }, 0.2)
      .from(".hero__fade", { y: 24, opacity: 0, duration: 0.9, stagger: 0.12 }, 0.9)
      .from(".hero__card", { y: 50, opacity: 0, duration: 1 }, 1.1);
    gsap.to(".hero__media", { yPercent: 14, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero__inner", { y: -60, opacity: 0.3, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } });
  }, { scope: root });

  return (
    <section id="top" ref={root} className="hero">
      <Media src="/images/hero.jpg" alt="" className="hero__media" sizes="100vw" priority />
      <div className="hero__shade" />
      <div className="hero__inner">
        <h1 className="hero__title">
          {hero.lines.map((line, i) => (
            <span key={i} className="hero__line">
              {line.map((w) => (
                <span key={w.t} className={`hero__word ${w.em ? "hero__word--em" : ""}`}>{w.t} </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="hero__text hero__fade">{hero.text}</p>
        <Button href="#shop" icon="right" className="hero__fade" magnetic>Shop now</Button>
      </div>
      <aside className="hero__card">
        <div className="hero__card-top">
          <p className="hero__card-label">{hero.stat.label.map((l) => <span key={l}>{l}</span>)}</p>
          <Icon name="sprout" size={22} />
        </div>
        <span ref={stat} className="hero__stat">0%</span>
      </aside>
    </section>
  );
}
