"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTABanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const t = useTranslations("cta");

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-hero rounded-3xl px-8 md:px-14 py-14 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative">
            <div className="inline-block bg-white/10 text-green-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/20">
              🌿 Ready to partner with us?
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-green-100 text-lg max-w-xl mx-auto mb-10">
              {t("subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-all hover:-translate-y-0.5 shadow-lg"
              >
                {t("button1")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                {t("button2")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
