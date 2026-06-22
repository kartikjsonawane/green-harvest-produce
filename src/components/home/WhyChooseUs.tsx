"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  Snowflake,
  BarChart3,
  Headphones,
  Leaf,
} from "lucide-react";
import { useTranslations } from "next-intl";

const featureKeys = [
  { key: "quality", icon: ShieldCheck, color: "bg-emerald-50 text-emerald-600" },
  { key: "delivery", icon: Truck, color: "bg-blue-50 text-blue-600" },
  { key: "pricing", icon: BadgeDollarSign, color: "bg-amber-50 text-amber-600" },
  { key: "cold", icon: Snowflake, color: "bg-cyan-50 text-cyan-600" },
  { key: "tracking", icon: BarChart3, color: "bg-purple-50 text-purple-600" },
  { key: "support", icon: Headphones, color: "bg-rose-50 text-rose-600" },
] as const;

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const t = useTranslations("why");

  return (
    <section ref={ref} className="py-20 bg-white">
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
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureKeys.map((feature, i) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-green-100 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">
                {t(`features.${feature.key}.title`)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(`features.${feature.key}.desc`)}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
