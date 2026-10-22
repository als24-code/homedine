import { SVGProps } from "react";

const PATHS = {
  search: <><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></>,
  bag: <><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></>,
  user: <><circle cx="12" cy="8.5" r="3.5" /><path d="M5 20c1-4 4-5.5 7-5.5s6 1.5 7 5.5" /></>,
  right: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  left: <><path d="M19 12H5" /><path d="m11 6-6 6 6 6" /></>,
  upRight: <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  minus: <path d="M5 12h14" />,
  close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  sparkle: <path d="M12 3c.8 4.6 2.4 6.2 7 7-4.6.8-6.2 2.4-7 7-.8-4.6-2.4-6.2-7-7 4.6-.8 6.2-2.4 7-7Z" />,
  leaf: <><path d="M6 18C6 10 11 5 19 5c0 8-5 13-13 13Z" /><path d="M6 18c2-3 5-6 9-8" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c3 3 3 15 0 18" /><path d="M12 3c-3 3-3 15 0 18" /></>,
  sprout: <><path d="M12 21v-8" /><path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6Z" /><path d="M12 11c0-3 2-5 6-5 0 3-2 5-6 5Z" /></>,
  quote: <path fill="currentColor" stroke="none" d="M9 6C5.5 7.2 3.5 10 3.5 14v4H10v-6H7c.2-2 1.2-3.4 3-4.2V6Zm10.5 0c-3.5 1.2-5.5 4-5.5 8v4h6.5v-6h-3c.2-2 1.2-3.4 3-4.2V6Z" />,
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 18, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="icon" {...rest}>
      {PATHS[name]}
    </svg>
  );
}
