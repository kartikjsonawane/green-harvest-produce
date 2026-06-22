"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sprout, FlaskConical, Snowflake, Truck, Building2, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "Farm Sourcing",
    desc: "Partnering with 800+ certified farmers across India for direct procurement.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: FlaskConical,
    title: "Quality Inspection",
    desc: "Every batch undergoes rigorous FSSAI-standard grading and quality checks.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Snowflake,
    title: "Cold Storage",
    desc: "State-of-the-art temperature-controlled warehousing to preserve freshness.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Truck,
    title: "Dispatch & Logistics",
    desc: "Fleet of 50+ refrigerated trucks with real-time GPS tracking.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Building2,
    title: "Last-Mile Delivery",
    desc: "Reliable delivery to restaurants, hotels, supermarkets and warehouses.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: CheckCircle,
    title: "Post-Delivery Support",
    desc: "Dedicated account manager for feedback, returns, and next orders.",
    color: "bg-rose-100 text-rose-600",
  },
];

export default function SupplyChainProcess() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Supply Chain Process
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From farm to table in the most efficient, hygienic, and transparent way possible.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200 -translate-y-1/2" style={{ left: "8.33%", right: "8.33%" }} />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-sm ${step.color}`}>
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
