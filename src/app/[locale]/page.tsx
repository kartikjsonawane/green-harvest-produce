import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SupplyChainProcess from "@/components/home/SupplyChainProcess";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Green Harvest Produce | Bulk Fruits & Vegetables Supplier India",
  description:
    "India's trusted bulk supplier of fresh fruits and vegetables. Serving wholesalers, retailers, restaurants, hotels, and institutional buyers across India since 2001.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <WhyChooseUs />
      <SupplyChainProcess />
      <Statistics />
      <Testimonials />
      <Partners />
      <CTABanner />
    </>
  );
}
