"use client";
import { useCallback, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function useCarousel<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const page = useCallback((dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    let x = el.scrollLeft + dir * el.clientWidth * 0.8;
    if (dir === 1 && el.scrollLeft >= max - 4) x = 0;
    if (dir === -1 && el.scrollLeft <= 4) x = max;
    gsap.to(el, { scrollTo: { x }, duration: 0.9, ease: "power3.inOut" });
  }, []);
  return { ref, next: () => page(1), prev: () => page(-1) };
}
