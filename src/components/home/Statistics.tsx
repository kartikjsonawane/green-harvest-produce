"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Truck, Users, Calendar, MapPin, Sprout, Package } from "lucide-react";
import { useTranslations } from "next-intl";

const statDefs = [
  { icon: Truck, value: 500, suffix: "+", key: "tonnes", color: "text-green-600" },
  { icon: Users, value: 1200, suffix: "+", key: "clients", color: "text-blue-600" },
  { icon: Calendar, value: 25, suffix: "+", key: "years", color: "text-amber-600" },
  { icon: MapPin, value: 15, suffix: "+", key: "states", color: "text-purple-600" },
  { icon: Sprout, value: 800, suffix: "+", key: "farmers", color: "text-emerald-600" },
  { icon: Package, value: 60, suffix: "+", key: "varieties", color: "text-rose-600" },
] as const;

export default function Statistics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const t = useTranslations("stats");

  return (
    <section ref={ref} className="py-20 bg-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {statDefs.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/20 transition-colors"
            >
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="font-heading font-bold text-3xl text-white">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-green-200 text-xs mt-1 leading-tight">{t(stat.key)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
