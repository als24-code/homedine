"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { reviews } from "@/data/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { useCountUp } from "@/hooks/useCountUp";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

export function Reviews() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const score = useRef<HTMLSpanElement>(null);
  useCountUp(score, { to: 4.9, decimals: 1 });

  const center = useCallback((animate: boolean) => {
    const t = track.current, s = stage.current;
    const card = t?.children[active] as HTMLElement | undefined;
    if (!t || !s || !card) return;
    const x = s.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2);
    gsap.to(t, { x, duration: animate ? 0.9 : 0, ease: "power3.inOut" });
  }, [active]);

  useGSAP(() => center(true), { dependencies: [active, center], scope: stage });
  useEffect(() => {
    const r = () => center(false);
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, [center]);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % reviews.length), 3800);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <Section className="reviews-section">
      <div className="reviews" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="reviews__score" data-reveal>
          <p className="reviews__num"><span ref={score}>4.9</span><small>/5</small></p>
          <p className="reviews__caption">More than <strong>25,000</strong> <strong>5-Star</strong> Reviews for Our Award-Winning Eco Products</p>
        </div>
        <div ref={stage} className="reviews__stage">
          <ul ref={track} className="reviews__track">
            {reviews.map((r, i) => (
              <li key={r.id} className={`review ${i === active ? "review--on" : ""}`} onClick={() => setActive(i)}>
                <Icon name="quote" size={30} className="review__quote" />
                <p className="review__text">{r.text}</p>
                <p className="review__name">{r.first} <em>{r.last}</em></p>
                <p className="review__role">{r.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
