"use client";

import Image from "next/image";
import { Snowflake, Truck, Warehouse, MapPin, BarChart3, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

const capabilities = [
  {
    icon: Snowflake,
    titleKey: "cap1Title",
    descKey: "cap1Desc",
    stats: "0°C – 8°C maintained 24/7",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Warehouse,
    titleKey: "cap2Title",
    descKey: "cap2Desc",
    stats: "50,000 MT combined capacity",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Truck,
    titleKey: "cap3Title",
    descKey: "cap3Desc",
    stats: "50+ refrigerated vehicles",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: MapPin,
    titleKey: "cap4Title",
    descKey: "cap4Desc",
    stats: "200+ cities covered",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: BarChart3,
    titleKey: "cap5Title",
    descKey: "cap5Desc",
    stats: "Live GPS on every truck",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Clock,
    titleKey: "cap6Title",
    descKey: "cap6Desc",
    stats: "98.7% on-time rate",
    color: "bg-rose-100 text-rose-600",
  },
] as const;

const warehouses = [
  { city: "Pune, Maharashtra", area: "18,000 sq ft", capacity: "8,000 MT", temp: "0°C to 12°C", typeKey: "wh1Type" },
  { city: "Nashik, Maharashtra", area: "12,000 sq ft", capacity: "5,000 MT", temp: "-2°C to 8°C", typeKey: "wh2Type" },
  { city: "Mumbai, Maharashtra", area: "15,000 sq ft", capacity: "6,500 MT", temp: "0°C to 10°C", typeKey: "wh3Type" },
  { city: "Aurangabad, Maharashtra", area: "10,000 sq ft", capacity: "4,000 MT", temp: "0°C to 8°C", typeKey: "wh4Type" },
] as const;

const coldChainSteps = [
  { labelKey: "ccStep1", icon: "🌾", temp: "Ambient" },
  { labelKey: "ccStep2", icon: "❄️", temp: "2–4°C" },
  { labelKey: "ccStep3", icon: "🏭", temp: "0–4°C" },
  { labelKey: "ccStep4", icon: "🚛", temp: "2–8°C" },
  { labelKey: "ccStep5", icon: "🏪", temp: "Ready to use" },
] as const;

export default function LogisticsPage() {
  const t = useTranslations("logisticsPage");

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-24 bg-hero relative overflow-hidden">
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

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">{t("capabilitiesTitle")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.titleKey} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cap.color}`}>
                  <cap.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">{t(cap.titleKey as any)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{t(cap.descKey as any)}</p>
                <div className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-lg inline-block">
                  ✓ {cap.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cold Chain Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">{t("coldChainTitle")}</h2>
          </div>
          <div className="relative">
            <div className="grid md:grid-cols-5 gap-0">
              {coldChainSteps.map((step, i) => (
                <div key={step.labelKey} className="flex items-center">
                  <div className="flex-1 text-center">
                    <div className="w-16 h-16 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3">
                      {step.icon}
                    </div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{t(step.labelKey as any)}</div>
                    <div className="text-xs text-green-600 font-medium">{step.temp}</div>
                  </div>
                  {i < 4 && (
                    <div className="hidden md:flex items-center px-1">
                      <div className="w-8 h-0.5 bg-green-300" />
                      <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-green-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warehouses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">{t("warehouseNetworkTitle")}</h2>
            <p className="text-gray-600 text-lg">{t("warehouseNetworkSubtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {warehouses.map((wh) => (
              <div key={wh.city} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Warehouse className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-xs text-green-600 font-semibold mb-1">{t(wh.typeKey as any)}</div>
                <h3 className="font-heading font-bold text-gray-900 mb-3">{wh.city}</h3>
                <div className="space-y-1.5 text-xs text-gray-600">
                  <div className="flex justify-between"><span>{t("warehouseArea")}</span><span className="font-medium">{wh.area}</span></div>
                  <div className="flex justify-between"><span>{t("warehouseCapacity")}</span><span className="font-medium">{wh.capacity}</span></div>
                  <div className="flex justify-between"><span>{t("warehouseTemp")}</span><span className="font-medium text-cyan-600">{wh.temp}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
