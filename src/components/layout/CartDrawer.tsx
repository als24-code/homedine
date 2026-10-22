"use client";
import { useRef } from "react";
import { formatPrice } from "@/data/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { useCart } from "@/components/providers/CartProvider";
import { Button, IconButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";

export function CartDrawer() {
  const { lines, total, open, setOpen, setQty } = useCart();
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (open) gsap.from(".cart__line", { x: 40, opacity: 0, stagger: 0.07, duration: 0.5, ease: "power3.out", delay: 0.15 });
  }, { dependencies: [open], scope: root });

  return (
    <div ref={root} className={`cart ${open ? "cart--open" : ""}`} aria-hidden={!open}>
      <div className="cart__scrim" onClick={() => setOpen(false)} />
      <aside className="cart__panel" aria-label="Shopping cart">
        <div className="cart__top">
          <h2 className="cart__title">Your <em>cart</em></h2>
          <IconButton icon="close" label="Close cart" onClick={() => setOpen(false)} />
        </div>
        {lines.length === 0 ? (
          <p className="cart__empty">Your cart is empty. Add something sustainable.</p>
        ) : (
          <ul className="cart__list">
            {lines.map(({ product, qty }) => (
              <li key={product.id} className="cart__line">
                <Media src={product.image} alt={product.name} className="cart__img" sizes="80px" />
                <div className="cart__info">
                  <p className="cart__name">{product.name}</p>
                  <p className="cart__price">{formatPrice(product.price)}</p>
                  <div className="cart__qty">
                    <button aria-label="Decrease" onClick={() => setQty(product.id, qty - 1)}><Icon name="minus" size={14} /></button>
                    <span>{qty}</span>
                    <button aria-label="Increase" onClick={() => setQty(product.id, qty + 1)}><Icon name="plus" size={14} /></button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="cart__foot">
          <p className="cart__total"><span>Total</span><strong>{formatPrice(total)}</strong></p>
          <Button variant="leaf" icon="right" disabled={!lines.length} className="cart__checkout">Checkout</Button>
        </div>
      </aside>
    </div>
  );
}
