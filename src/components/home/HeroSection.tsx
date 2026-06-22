"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const t = useTranslations("hero");

  const stats = [
    t("stat1.value") + " " + t("stat1.label"),
    t("stat2.value") + " " + t("stat2.label"),
    t("stat3.value") + " " + t("stat3.label"),
  ];

  const statCards = [
    { value: t("stat1.value"), label: t("stat1.label") },
    { value: t("stat2.value"), label: t("stat2.label") },
    { value: t("stat3.value"), label: t("stat3.label") },
    { value: "15+", label: "States" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-green-900">
      {/* Background */}
      <div className="absolute inset-0 bg-green-950">
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80"
          alt="Fresh produce"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/70 via-green-900/50 to-green-800/40" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {t("badge")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              {t("title")}{" "}
              <span className="text-green-400">{t("titleHighlight")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-green-100 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {["FSSAI Certified", "Cold Chain Assured", "Pan-India Delivery"].map((tag) => (
                <div key={tag} className="flex items-center gap-1.5 text-sm text-green-200">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {tag}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                {t("cta1")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl backdrop-blur-sm transition-all hover:-translate-y-0.5"
              >
                {t("cta2")}
              </Link>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Watch Our Story
              </button>
            </motion.div>
          </div>

          {/* Right: Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {/* Main image card */}
            <div className="col-span-2 relative h-52 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&q=80"
                alt="Fresh vegetables"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-xs text-green-300 font-medium mb-0.5">Just Harvested</div>
                <div className="font-heading font-bold text-lg">Premium Quality Produce</div>
              </div>
            </div>
            {/* Stat cards */}
            {statCards.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center"
              >
                <div className="font-heading font-bold text-3xl text-white">{stat.value}</div>
                <div className="text-green-300 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-green-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
