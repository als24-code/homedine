"use client";
import { RefObject } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function useReveal(ref: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]", ref.current);
      if (!targets.length) return;
      targets.forEach((el) =>
        gsap.set(el, el.dataset.reveal === "scale" ? { opacity: 0, scale: 0.92 } : { opacity: 0, y: 40 })
      );
      ScrollTrigger.batch(targets, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out", stagger: 0.12, overwrite: true }),
      });
    },
    { scope: ref }
  );
}
