"use client";
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import type { Product } from "@/types";

interface Line { product: Product; qty: number }
interface CartState {
  lines: Line[]; count: number; total: number; open: boolean;
  add: (p: Product) => void; setQty: (id: string, qty: number) => void;
  setOpen: (o: boolean) => void;
}
const Ctx = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((product: Product) =>
    setLines((l) => l.some((x) => x.product.id === product.id)
      ? l.map((x) => (x.product.id === product.id ? { ...x, qty: x.qty + 1 } : x))
      : [...l, { product, qty: 1 }]), []);
  const setQty = useCallback((id: string, qty: number) =>
    setLines((l) => l.flatMap((x) => (x.product.id !== id ? [x] : qty > 0 ? [{ ...x, qty }] : []))), []);

  const value = useMemo(() => ({
    lines, open, add, setQty, setOpen,
    count: lines.reduce((n, l) => n + l.qty, 0),
    total: lines.reduce((n, l) => n + l.qty * l.product.price, 0),
  }), [lines, open, add, setQty]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside <CartProvider>");
  return c;
}
