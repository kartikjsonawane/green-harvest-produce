"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useTranslations } from "next-intl";

type Category = "All" | "Farm" | "Warehouse" | "Products" | "Delivery" | "Team";

const images = [
  { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80", alt: "Green farm fields", category: "Farm" },
  { src: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80", alt: "Vegetable farm", category: "Farm" },
  { src: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80", alt: "Onion farm harvest", category: "Farm" },
  { src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80", alt: "Mango orchard", category: "Farm" },
  { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80", alt: "Cold storage warehouse", category: "Warehouse" },
  { src: "https://images.unsplash.com/photo-1586528116493-e5bf56d8bb51?w=800&q=80", alt: "Produce sorting facility", category: "Warehouse" },
  { src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80", alt: "Mixed fresh vegetables", category: "Products" },
  { src: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&q=80", alt: "Colourful vegetable display", category: "Products" },
  { src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80", alt: "Apple harvest boxes", category: "Products" },
  { src: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=80", alt: "Mango crates", category: "Products" },
  { src: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&q=80", alt: "Grape bunches", category: "Products" },
  { src: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=800&q=80", alt: "Tomato harvest", category: "Products" },
  { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", alt: "Refrigerated truck delivery", category: "Delivery" },
  { src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80", alt: "Loading produce delivery", category: "Delivery" },
  { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80", alt: "Operations team", category: "Team" },
  { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80", alt: "Team meeting", category: "Team" },
];

export default function GalleryPage() {
  const t = useTranslations("galleryPage");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxImage, setLightboxImage] = useState<null | typeof images[0]>(null);

  const categories: { key: Category; label: string }[] = [
    { key: "All", label: t("all") },
    { key: "Farm", label: t("farm") },
    { key: "Warehouse", label: t("warehouse") },
    { key: "Products", label: t("productsLabel") },
    { key: "Delivery", label: t("delivery") },
    { key: "Team", label: t("team") },
  ];

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-white mb-4">{t("heroTitle")}</h1>
          <p className="text-green-100 text-xl max-w-xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat.key ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                    i % 7 === 0 ? "sm:col-span-2 h-64" : "h-48"
                  }`}
                  onClick={() => setLightboxImage(img)}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.alt}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label={t("close")}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightboxImage.src} alt={lightboxImage.alt} width={1200} height={800} className="object-contain w-full h-full" style={{ maxHeight: "80vh" }} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">{lightboxImage.alt}</p>
                <p className="text-gray-300 text-sm">{lightboxImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
