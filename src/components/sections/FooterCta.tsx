"use client";
import { useRef } from "react";
import { footerLinks, socials } from "@/data/site";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";
import { Chars } from "@/components/ui/Chars";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

export function FooterCta() {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(".wordmark .chars__char", {
      yPercent: 100, stagger: 0.05, duration: 1.1, ease: "power4.out",
      scrollTrigger: { trigger: ".wordmark", start: "top 95%", once: true },
    });
  }, { scope: root });

  return (
    <Section className="footer-section">
      <div ref={root} className="footer">
        <div className="footer__top">
          <div>
            <p className="footer__lead" data-reveal>Homedine promotes sustainable dining with beautifully crafted bamboo and glass <Icon name="sparkle" size={22} /><em>Kitchenware!</em></p>
            <div data-reveal><Button href="#shop" variant="outline" size="sm" icon="upRight">Join Us Now</Button></div>
          </div>
          <ul className="footer__links" data-reveal>
            {footerLinks.map((l) => <li key={l}><a href="#shop" className="footer__link">{l}</a></li>)}
          </ul>
        </div>
        <div className="footer__base">
          <h2 className="wordmark" aria-label="Homedine"><Chars text="Homedine" /></h2>
          <ul className="footer__socials">
            {socials.map((s) => (
              <li key={s.label}><a href={s.href} className="footer__social">{s.label}<Icon name="upRight" size={12} /></a></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
