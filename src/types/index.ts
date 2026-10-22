export interface Product {
  id: string; name: string; desc: string; price: number; badge: string;
  colors: string[]; image: string;
}
export interface Category { id: string; name: string; image: string; href: string }
export interface GalleryItem { id: string; name: string; image: string; tall?: boolean }
export interface Review { id: string; text: string; first: string; last: string; role: string }
export interface Feature { id: string; lead: string; label: string; icon: "leaf" | "globe" | "sprout" }
export interface BestSeller { id: string; name: string; price: number; image: string; fit: "cover" | "contain" }
export interface NavLink { label: string; href: string }
