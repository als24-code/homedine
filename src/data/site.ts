import type { BestSeller, Category, Feature, GalleryItem, NavLink, Product, Review } from "@/types";

export const nav: NavLink[] = [
  { label: "Shop", href: "#shop" },
  { label: "Bestsellers", href: "#bestsellers" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
];

export const hero = {
  lines: [[{ t: "Eco-Friendly" }], [{ t: "Kitchenware", em: true }, { t: "for" }], [{ t: "a greener home" }]],
  text: "Natural, sustainable kitchenware made for everyday meals. Cook well, waste less and keep your kitchen beautiful.",
  stat: { label: ["Natural.", "Sustainable.", "Eco-conscious."], value: 96 },
};

export const products: Product[] = [
  { id: "bottle", name: "Reusable Bottle", desc: "Reusable drinkware for a greener lifestyle.", price: 43.85, badge: "Promotion", colors: ["#9fd3e0", "#6f8793", "#4f7a66"], image: "/images/p1.jpg" },
  { id: "cookware", name: "Eco Cookware Set", desc: "Non-toxic cookware for sustainable cooking.", price: 78.35, badge: "New", colors: ["#b7c43a", "#8c9bb0", "#d08a4f"], image: "/images/p2.jpg" },
  { id: "kettle", name: "Eco Kettle", desc: "Kettle & Toaster eco-friendly meals.", price: 143.65, badge: "Customer favorite", colors: ["#c0966b", "#8d9bb5", "#7a9a76"], image: "/images/p3.jpg" },
  { id: "utensils", name: "Bamboo Utensil Holder", desc: "Bamboo Made Utensil Holder", price: 26.27, badge: "New", colors: ["#6b6f6b", "#b9cf5a", "#e6c23a"], image: "/images/p4.jpg" },
];

export const features: Feature[] = [
  { id: "f1", lead: "Natural", label: "Finish", icon: "leaf" },
  { id: "f2", lead: "Eco", label: "Innovation", icon: "globe" },
  { id: "f3", lead: "Sustainable", label: "Materials", icon: "sprout" },
];

export const categories: Category[] = [
  { id: "c1", name: "CupEco", image: "/images/cat1.jpg", href: "#shop" },
  { id: "c2", name: "EcoSpoonery", image: "/images/cat2.jpg", href: "#shop" },
  { id: "c3", name: "NatureSip", image: "/images/cat3.jpg", href: "#shop" },
  { id: "c4", name: "FreshPitcher", image: "/images/cat4.jpg", href: "#shop" },
];

export const bestSellers: BestSeller[] = [
  { id: "b1", name: "Reusable Bottle", price: 43.85, image: "/images/p1.jpg", fit: "contain" },
  { id: "b2", name: "Eco Cookware Set", price: 78.35, image: "/images/p2.jpg", fit: "contain" },
  { id: "b3", name: "Eco Kettle", price: 143.65, image: "/images/p3.jpg", fit: "contain" },
  { id: "b4", name: "Bamboo Utensil Holder", price: 26.27, image: "/images/p4.jpg", fit: "contain" },
  { id: "b5", name: "Mini Rice Cooker", price: 59.9, image: "/images/best.jpg", fit: "cover" },
];

export const gallery: GalleryItem[] = [
  { id: "g1", name: "SizzlePro Non-Stick Pan", image: "/images/g1.jpg" },
  { id: "g2", name: "Grain Slice Board Duo", image: "/images/g2.jpg", tall: true },
  { id: "g3", name: "Bamboo Utensil Set", image: "/images/g3.jpg" },
  { id: "g4", name: "Glow Pot Ceramic", image: "/images/g4.jpg", tall: true },
  { id: "g5", name: "StoneSip Ceramic Cup", image: "/images/g5.jpg" },
  { id: "g6", name: "SizzlePro Non-Stick Pan", image: "/images/g1.jpg", tall: true },
];

export const reviews: Review[] = [
  { id: "r1", text: "Sustainable bamboo utensils are beautiful and tough. They've become the heart of my kitchen.", first: "Wade", last: "Warren", role: "Home Cook" },
  { id: "r2", text: "HomeDine's glass jars are awesome for storage, and the bamboo utensils are perfect for daily use!", first: "Jane", last: "Cooper", role: "Nutritionist" },
  { id: "r3", text: "Fantastic products and fast delivery. My kitchen feels so much greener!", first: "Darlene", last: "Robertson", role: "Culinary Instructor" },
  { id: "r4", text: "Love HomeDine's eco-style! Glass jars keep things fresh, and bamboo utensils are so chic.", first: "Jacob", last: "Jones", role: "Food Blogger" },
  { id: "r5", text: "The sustainable cookware is a joy to use. My bamboo utensils are perfect for daily use.", first: "Esther", last: "Howard", role: "Sous Chef" },
  { id: "r6", text: "Everything arrives plastic-free and looks gorgeous on the counter. Highly recommended.", first: "Cody", last: "Fisher", role: "Interior Stylist" },
];

export const commitment = [
  { t: "Discover our commitment to" },
  { img: "/images/g5.jpg" },
  { t: "sustainable", em: true },
  { t: "materials, low-impact production, and" },
  { t: "ethical sourcing", em: true },
  { t: "partnerships — all crafted to support a healthier planet and a" },
  { img: "/images/p3.jpg" },
  { t: "greener kitchen.", em: true },
];

export const banner = [
  { t: "We craft" },
  { t: "kitchenware", em: true },
  { t: "you can trust for years to come — through everyday meals and evolving" },
  { t: "lifestyles.", em: true },
  { t: "Each piece is thoughtfully made with" },
  { t: "sustainable materials.", em: true },
];

export const socials: NavLink[] = [
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export const footerLinks = ["Drinkware", "Tableware", "Utensils"];
export const formatPrice = (n: number) => `$${n.toFixed(2)}`;
