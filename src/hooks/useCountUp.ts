"use client";
import { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface Opts { to: number; decimals?: number; suffix?: string; delay?: number; onScroll?: boolean }

export function useCountUp(ref: RefObject<HTMLElement | null>, { to, decimals = 0, suffix = "", delay = 0, onScroll = true }: Opts) {
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const o = { v: 0 };
    el.textContent = (0).toFixed(decimals) + suffix;
    gsap.to(o, {
      v: to, duration: 2, delay, ease: "power2.out",
      onUpdate: () => { el.textContent = o.v.toFixed(decimals) + suffix; },
      scrollTrigger: onScroll ? { trigger: el, start: "top 90%", once: true } : undefined,
    });
  }, { scope: ref });
}
