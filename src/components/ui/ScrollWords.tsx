"use client";
import Image from "next/image";
import { Fragment, useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

export interface Seg { t?: string; em?: boolean; img?: string }

export function ScrollWords({ segs, className = "" }: { segs: Seg[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.fromTo(gsap.utils.toArray(".words__w", ref.current), { opacity: 0.18 }, {
      opacity: 1, stagger: 0.12, ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top 85%", end: "bottom 55%", scrub: true },
    });
  }, { scope: ref });

  return (
    <p ref={ref} className={`words ${className}`}>
      {segs.map((s, i) =>
        s.img ? (
          <Fragment key={i}>
            <span className="words__w words__pill"><Image src={s.img} alt="" fill sizes="120px" className="media__img" /></span>{" "}
          </Fragment>
        ) : (
          <Fragment key={i}>
            {s.t!.split(" ").map((w, j) => (
              <Fragment key={j}><span className={`words__w ${s.em ? "words__w--em" : ""}`}>{w}</span>{" "}</Fragment>
            ))}
          </Fragment>
        )
      )}
    </p>
  );
}
