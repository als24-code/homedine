"use client";
import { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function useMagnetic(ref: RefObject<HTMLElement | null>, strength = 0.3) {
  useGSAP(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * strength);
      y((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const leave = () => { x(0); y(0); };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); };
  }, { scope: ref });
}
