"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, Leaf } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Head of Procurement",
    company: "Star Hotels Group",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    rating: 5,
    text: "Green Harvest has been our go-to supplier for 5 years. The consistency in quality and the reliability of delivery have never let us down, even during peak season. Highly recommended for any hospitality business.",
  },
  {
    name: "Priya Mehta",
    role: "Operations Manager",
    company: "FreshMart Supermarkets",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829?w=80&q=80",
    rating: 5,
    text: "We switched to Green Harvest 3 years ago and haven't looked back. The cold chain management is exceptional and the pricing is the best we've found for bulk orders. Our customers love the freshness.",
  },
  {
    name: "Anil Gupta",
    role: "Purchase Director",
    company: "Gupta Food Processors",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
    rating: 5,
    text: "For our processing unit, consistency in produce quality is critical. Green Harvest delivers exactly what they promise — grade-A quality, on time, every time. Their account management is superb.",
  },
  {
    name: "Sneha Patil",
    role: "F&B Manager",
    company: "The Grand Pune Resort",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    rating: 5,
    text: "Running a 5-star kitchen requires perfect ingredients. Green Harvest understands our standards and consistently delivers premium produce. The dedicated account manager is always just a call away.",
  },
  {
    name: "Mohammed Khan",
    role: "CEO",
    company: "Khan Wholesale Traders",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80",
    rating: 5,
    text: "As a wholesale trader, I need volume, variety, and reliability. Green Harvest ticks all the boxes. Their pricing is fair and the quality certification gives my customers confidence in the produce.",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const t = useTranslations("testimonials");

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Leaf className="w-4 h-4" />
            {t("badge")}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 relative hover:shadow-md transition-shadow border border-gray-100"
            >
              <Quote className="w-8 h-8 text-green-200 mb-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remaining 2 in a wider row */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3, 5).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: (i + 3) * 0.1 }}
              className="bg-green-50 rounded-2xl p-6 relative hover:shadow-md transition-shadow border border-green-100"
            >
              <Quote className="w-8 h-8 text-green-200 mb-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-green-200">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
