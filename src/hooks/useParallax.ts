"use client";
import { RefObject } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

export function useParallax(ref: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      gsap.utils.toArray<HTMLElement>("[data-parallax]", ref.current).forEach((el) => {
        const s = parseFloat(el.dataset.parallax || "0.1") * 100;
        gsap.fromTo(el, { yPercent: -s }, {
          yPercent: s, ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: ref }
  );
}
