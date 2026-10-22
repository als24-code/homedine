import type { Metadata } from "next";
import { Albert_Sans, Fraunces } from "next/font/google";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { Header } from "@/components/layout/Header";
import { CartProvider } from "@/components/providers/CartProvider";
import "./globals.css";

const sans = Albert_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Fraunces({ subsets: ["latin"], style: ["italic", "normal"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: "Homedine — Eco-Friendly Kitchenware",
  description: "Sustainable bamboo, glass and ceramic kitchenware for a greener home.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <CartProvider>
          <Header />
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
