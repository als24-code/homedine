"use client";
import { ButtonHTMLAttributes, ReactNode, useRef } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { Icon, IconName } from "./Icon";

type Variant = "butter" | "leaf" | "outline" | "light";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant; size?: "sm" | "md"; icon?: IconName; href?: string; magnetic?: boolean; children: ReactNode;
}

export function Button({ variant = "butter", size = "md", icon, href, magnetic, className = "", children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  useMagnetic(ref, magnetic ? 0.25 : 0);
  const cls = `btn btn--${variant} btn--${size} ${className}`;
  const inner = (<><span className="btn__label">{children}</span>{icon && <Icon name={icon} size={16} className="btn__icon" />}</>);
  return href
    ? <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} className={cls}>{inner}</a>
    : <button ref={ref as React.RefObject<HTMLButtonElement>} className={cls} {...rest}>{inner}</button>;
}

export function IconButton({ icon, label, variant = "light", className = "", ...rest }:
  { icon: IconName; label: string; variant?: "light" | "glass" | "dark" } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button aria-label={label} className={`icon-btn icon-btn--${variant} ${className}`} {...rest}>
      <Icon name={icon} size={18} />
    </button>
  );
}
