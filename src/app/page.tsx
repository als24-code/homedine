import { Banner } from "@/components/sections/Banner";
import { BestSellers } from "@/components/sections/BestSellers";
import { Bestselling } from "@/components/sections/Bestselling";
import { Categories } from "@/components/sections/Categories";
import { Collage } from "@/components/sections/Collage";
import { Commitment } from "@/components/sections/Commitment";
import { Features } from "@/components/sections/Features";
import { FooterCta } from "@/components/sections/FooterCta";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Newsletter } from "@/components/sections/Newsletter";
import { Reviews } from "@/components/sections/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Bestselling />
      <Banner />
      <Features />
      <Categories />
      <BestSellers />
      <Gallery />
      <Reviews />
      <Collage />
      <Commitment />
      <Newsletter />
      <FooterCta />
    </main>
  );
}
