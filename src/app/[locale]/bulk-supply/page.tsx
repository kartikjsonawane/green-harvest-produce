"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ChefHat, Hotel, ShoppingCart, Factory, Globe, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const segments = [
  {
    icon: ChefHat,
    titleKey: "seg1Title",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    descKey: "seg1Desc",
    featuresKey: "seg1Features",
    clientsKey: "seg1Clients",
  },
  {
    icon: Hotel,
    titleKey: "seg2Title",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    descKey: "seg2Desc",
    featuresKey: "seg2Features",
    clientsKey: "seg2Clients",
  },
  {
    icon: ShoppingCart,
    titleKey: "seg3Title",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&q=80",
    descKey: "seg3Desc",
    featuresKey: "seg3Features",
    clientsKey: "seg3Clients",
  },
  {
    icon: Building2,
    titleKey: "seg4Title",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    descKey: "seg4Desc",
    featuresKey: "seg4Features",
    clientsKey: "seg4Clients",
  },
  {
    icon: Factory,
    titleKey: "seg5Title",
    image: "https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?w=600&q=80",
    descKey: "seg5Desc",
    featuresKey: "seg5Features",
    clientsKey: "seg5Clients",
  },
  {
    icon: Globe,
    titleKey: "seg6Title",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    descKey: "seg6Desc",
    featuresKey: "seg6Features",
    clientsKey: "seg6Clients",
  },
] as const;

export default function BulkSupplyPage() {
  const t = useTranslations("bulkSupplyPage");

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-24 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-green-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
            {t("heroBadge")}
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Segments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {segments.map((seg, i) => {
              const features = (t.raw(seg.featuresKey as any) as string[]);
              const clients = (t.raw(seg.clientsKey as any) as string[]);
              return (
                <div
                  key={seg.titleKey}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="relative h-72 rounded-2xl overflow-hidden">
                      <Image src={seg.image} alt={t(seg.titleKey as any)} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                          <seg.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <seg.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="font-heading text-2xl font-bold text-gray-900">{t(seg.titleKey as any)}</h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{t(seg.descKey as any)}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {features.map((f: string) => (
                        <div key={f} className="flex gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4 mb-6">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t("clientsLabel")}</div>
                      <div className="flex flex-wrap gap-2">
                        {clients.map((c: string) => (
                          <span key={c} className="bg-white text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-200">{c}</span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/contact`}
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md"
                    >
                      {t("ctaButton")}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t("processBadge")}
          </span>
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-12">{t("processTitle")}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {(["s1", "s2", "s3", "s4"] as const).map((key, i) => (
              <div key={key} className="relative">
                <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{t(`steps.${key}.title` as any)}</h3>
                <p className="text-gray-600 text-sm">{t(`steps.${key}.desc` as any)}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md">
              {t("ctaButton")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
