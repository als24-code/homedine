"use client";
import { useRef } from "react";
import { nav } from "@/data/site";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useCart } from "@/components/providers/CartProvider";
import { IconButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const root = useRef<HTMLElement>(null);
  const badge = useRef<HTMLSpanElement>(null);
  const { count, setOpen } = useCart();

  useGSAP(() => {
    ScrollTrigger.create({
      start: 0, end: "max",
      onUpdate: (self) => {
        const y = self.scroll();
        root.current?.classList.toggle("header--solid", y > 60);
        root.current?.classList.toggle("header--hidden", self.direction === 1 && y > 500);
      },
    });
  }, { scope: root });

  useGSAP(() => {
    if (count > 0) gsap.fromTo(badge.current, { scale: 1.8 }, { scale: 1, duration: 0.7, ease: "elastic.out(1,0.4)" });
  }, { dependencies: [count], scope: root });

  return (
    <header ref={root} className="header">
      <nav className="header__nav" aria-label="Primary">
        {nav.map((n) => <a key={n.href} href={n.href} className="header__link">{n.label}</a>)}
      </nav>
      <Logo className="header__logo" />
      <div className="header__tools">
        <label className="header__search">
          <Icon name="search" size={16} />
          <input type="search" placeholder="Search Product..." aria-label="Search products" />
        </label>
        <IconButton icon="bag" label="Open cart" variant="glass" onClick={() => setOpen(true)} />
        {count > 0 && <span ref={badge} className="header__badge">{count}</span>}
        <IconButton icon="user" label="Account" variant="glass" className="header__user" />
      </div>
    </header>
  );
}
