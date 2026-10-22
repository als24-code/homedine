"use client";
import { ReactNode, useRef } from "react";
import { useParallax } from "@/hooks/useParallax";
import { useReveal } from "@/hooks/useReveal";

export function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  useParallax(ref);
  return <section id={id} ref={ref} className={`section ${className}`}>{children}</section>;
}
