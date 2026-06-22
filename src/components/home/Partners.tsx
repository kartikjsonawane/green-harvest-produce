"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const partners = [
  "Reliance Retail",
  "BigBasket",
  "Spencer's",
  "METRO Cash & Carry",
  "D-Mart",
  "Taj Hotels",
  "Marriott India",
  "Zomato Hyperpure",
  "Swiggy Instamart",
  "Nature's Basket",
  "Godrej Nature's Basket",
  "Le Marché",
];

export default function Partners() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
            Trusted by India&apos;s Leading Businesses
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm font-semibold text-gray-600 hover:text-green-700 hover:border-green-200 hover:bg-green-50 transition-all cursor-default shadow-sm"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
