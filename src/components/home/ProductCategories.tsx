"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const products = [
  {
    name: "Apples",
    category: "Fruit",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80",
    season: "Oct–Mar",
    minOrder: "100 kg",
    availability: "available" as const,
  },
  {
    name: "Bananas",
    category: "Fruit",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&q=80",
    season: "Year-round",
    minOrder: "200 kg",
    availability: "available" as const,
  },
  {
    name: "Mangoes",
    category: "Fruit",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80",
    season: "Apr–Jul",
    minOrder: "50 kg",
    availability: "seasonal" as const,
  },
  {
    name: "Grapes",
    category: "Fruit",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&q=80",
    season: "Jan–May",
    minOrder: "100 kg",
    availability: "seasonal" as const,
  },
  {
    name: "Onions",
    category: "Vegetable",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80",
    season: "Year-round",
    minOrder: "500 kg",
    availability: "available" as const,
  },
  {
    name: "Tomatoes",
    category: "Vegetable",
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=400&q=80",
    season: "Year-round",
    minOrder: "200 kg",
    availability: "available" as const,
  },
  {
    name: "Potatoes",
    category: "Vegetable",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80",
    season: "Year-round",
    minOrder: "1000 kg",
    availability: "available" as const,
  },
  {
    name: "Carrots",
    category: "Vegetable",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80",
    season: "Oct–Mar",
    minOrder: "200 kg",
    availability: "seasonal" as const,
  },
];

const availabilityColors = {
  available: "bg-green-100 text-green-700",
  seasonal: "bg-amber-100 text-amber-700",
  "pre-order": "bg-blue-100 text-blue-700",
};

export default function ProductCategories() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const t = useTranslations("products");

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Leaf className="w-4 h-4" />
            {t("badge")}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${availabilityColors[product.availability]}`}>
                      {product.availability === "available" ? t("available") : product.availability === "seasonal" ? t("seasonal") : t("preOrder")}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/40 text-white backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">{product.name}</h3>
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Season</span>
                      <span className="font-medium text-gray-700">{product.season}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">{t("minOrder")}</span>
                      <span className="font-medium text-gray-700">{product.minOrder}</span>
                    </div>
                  </div>
                  <Link
                    href={`/products/${product.name.toLowerCase()}`}
                    className="block text-center text-sm font-semibold text-green-600 hover:text-white bg-green-50 hover:bg-green-600 py-2 rounded-lg transition-colors"
                  >
                    {t("requestQuote")}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-md"
          >
            {t("viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
