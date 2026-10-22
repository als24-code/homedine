"use client";
import { FormEvent, useRef, useState } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";
import { Chars } from "@/components/ui/Chars";
import { Media } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";

const SHOTS = [
  { src: "/images/n1.jpg", cls: "news__shot--1", depth: 22 },
  { src: "/images/n2.jpg", cls: "news__shot--2", depth: 34 },
  { src: "/images/n3.jpg", cls: "news__shot--3", depth: 28 },
  { src: "/images/n4.jpg", cls: "news__shot--4", depth: 40 },
];

export function Newsletter() {
  const root = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const { contextSafe } = useGSAP({ scope: root });

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".news__title .chars__char", {
      yPercent: 110, stagger: 0.06, duration: 1, ease: "power4.out",
      scrollTrigger: { trigger: root.current, start: "top 70%", once: true },
    });
    gsap.utils.toArray<HTMLElement>(".news__shot").forEach((el, i) =>
      gsap.fromTo(el, { yPercent: i % 2 ? 14 : -10 }, { yPercent: i % 2 ? -14 : 10, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } }));
    const shots = gsap.utils.toArray<HTMLElement>(".news__drift");
    const setters = shots.map((el) => ({ x: gsap.quickTo(el, "x", { duration: 0.8 }), y: gsap.quickTo(el, "y", { duration: 0.8 }), d: Number(el.dataset.depth) }));
    const move = (e: MouseEvent) => {
      const r = root.current!.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5, ny = (e.clientY - r.top) / r.height - 0.5;
      setters.forEach((s) => { s.x(-nx * s.d); s.y(-ny * s.d); });
    };
    root.current!.addEventListener("mousemove", move);
    return () => { root.current?.removeEventListener("mousemove", move); ScrollTrigger.refresh(); };
  }, { scope: root });

  const submit = contextSafe((e: FormEvent) => {
    e.preventDefault();
    setDone(true);
    gsap.fromTo(".news__thanks", { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
  });

  return (
    <Section className="section--wide">
      <div ref={root} className="news">
        {SHOTS.map((s) => (
          <div key={s.src} className={`news__shot ${s.cls}`}>
            <div className="news__drift" data-depth={s.depth}><Media src={s.src} alt="" className="news__media" sizes="25vw" /></div>
          </div>
        ))}
        <div className="news__center">
          <p className="news__kicker">Get Recipes</p>
          <h2 className="news__title"><Chars text="10% Off" /></h2>
          <form className="news__form" onSubmit={submit}>
            <input type="email" required placeholder="Your Email" aria-label="Email" className="news__input" disabled={done} />
            <Button variant="butter" size="md" type="submit" className="news__btn" disabled={done}>{done ? "Subscribed ✓" : "Subscribe"}</Button>
          </form>
          <p className="news__note">{done ? <span className="news__thanks">Thank you! Your 10% code is on its way.</span> : "Eco-friendly recipes, cooking tips, and a 10% discount on sustainable kitchenware for a greener lifestyle."}</p>
        </div>
      </div>
    </Section>
  );
}
