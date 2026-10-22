"use client";
import { ReactNode } from "react";
import { useCarousel } from "@/hooks/useCarousel";
import { IconButton } from "./Button";

export function Carousel({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, next, prev } = useCarousel<HTMLDivElement>();
  return (
    <div className={`carousel ${className}`}>
      <div ref={ref} className="carousel__track">{children}</div>
      <IconButton icon="left" label="Previous" variant="glass" className="carousel__btn carousel__btn--prev" onClick={prev} />
      <IconButton icon="right" label="Next" variant="glass" className="carousel__btn carousel__btn--next" onClick={next} />
    </div>
  );
}
