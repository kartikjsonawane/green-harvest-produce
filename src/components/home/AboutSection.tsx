"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Award, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const t = useTranslations("about");

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
                alt="Our farm operations"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-heading font-bold text-lg text-green-900">ISO Certified</div>
                  <div className="text-xs text-gray-500">Quality Assured</div>
                </div>
              </div>
              <div className="flex -space-x-2">
                {["A", "R", "S"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-xs font-bold text-green-700"
                  >
                    {letter}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-green-600 flex items-center justify-center text-xs font-bold text-white">
                  +
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">1,200+ satisfied clients</p>
            </div>
            {/* Badge */}
            <div className="absolute top-6 left-6 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Since 2001 🌿
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <Leaf className="w-4 h-4" />
              {t("badge")}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {t("title")}{" "}
              <span className="text-green-600">{t("titleHighlight")}</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t("body")}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From our state-of-the-art cold storage facilities in Pune to our delivery network spanning 15+ states, we manage every link in the supply chain with uncompromising quality standards.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Leaf, title: t("mission"), text: t("missionText") },
                { icon: Users, title: t("vision"), text: t("visionText") },
              ].map((item) => (
                <div key={item.title} className="bg-green-50 rounded-2xl p-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md hover:shadow-green-500/30"
            >
              {t("learnMore")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
