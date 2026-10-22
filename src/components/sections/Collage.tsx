"use client";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { Media } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";

export function Collage() {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 85%", end: "center 45%", scrub: 0.8 } });
    tl.from(".collage__card--l", { xPercent: 70, rotate: 0, scale: 0.9 }, 0)
      .from(".collage__card--r", { xPercent: -70, rotate: 0, scale: 0.9 }, 0)
      .from(".collage__card--c", { scale: 0.82, yPercent: 8 }, 0);
  }, { scope: root });

  return (
    <Section className="section--tight">
      <div ref={root} className="collage">
        <Media src="/images/col1.jpg" alt="Navy non-stick pan" className="collage__card collage__card--l" sizes="30vw" />
        <Media src="/images/col3.jpg" alt="Cream saucepan" className="collage__card collage__card--r" sizes="30vw" />
        <Media src="/images/col2.jpg" alt="Teal pan with toast" className="collage__card collage__card--c" sizes="60vw" />
      </div>
    </Section>
  );
}
