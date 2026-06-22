"use client";

import Image from "next/image";
import { Award, CheckCircle, Leaf, Shield, Target, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const valueKeys = [
  { key: "integrity", icon: Shield },
  { key: "sustainability", icon: Leaf },
  { key: "quality", icon: CheckCircle },
  { key: "partnership", icon: Users },
  { key: "reliability", icon: Target },
  { key: "excellence", icon: Award },
] as const;

const team = [
  {
    name: "Suresh Patel",
    role: "Founder & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
    bio: "25+ years in agri-business, pioneered the farm-to-business direct supply model in Maharashtra.",
  },
  {
    name: "Anita Sharma",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b829?w=300&q=80",
    bio: "15 years of supply chain management, certified in cold chain logistics.",
  },
  {
    name: "Rahul Desai",
    role: "Head of Quality Assurance",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    bio: "Food technology graduate, FSSAI auditor, ensures every batch meets premium standards.",
  },
  {
    name: "Priya Joshi",
    role: "Sales & Business Development",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    bio: "Manages relationships with 500+ corporate and institutional clients pan-India.",
  },
];

const certifications = [
  { name: "FSSAI License", number: "21221062000001", year: "2001" },
  { name: "ISO 9001:2015", number: "ISO-QMS-9876", year: "2015" },
  { name: "APEDA Registration", number: "APEDA/2003/1234", year: "2003" },
  { name: "Organic India Cert.", number: "OIC-2019-456", year: "2019" },
];

const milestones = [
  { year: "2001", eventKey: "m2001" },
  { year: "2005", eventKey: "m2005" },
  { year: "2010", eventKey: "m2010" },
  { year: "2015", eventKey: "m2015" },
  { year: "2019", eventKey: "m2019" },
  { year: "2022", eventKey: "m2022" },
  { year: "2024", eventKey: "m2024" },
];

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-24 bg-hero overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&q=80"
            alt="Farm landscape"
            fill
            className="object-cover opacity-20"
          />
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

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3 block">{t("storyBadge")}</span>
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">{t("storyTitle")}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t("storyP1")}</p>
                <p>{t("storyP2")}</p>
                <p>{t("storyP3")}</p>
                <p>{t("storyP4")}</p>
              </div>
            </div>
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-green-100 mt-2" />}
                  </div>
                  <div className="pb-4">
                    <div className="text-xs text-green-600 font-semibold mb-1">{m.year}</div>
                    <p className="text-gray-700 text-sm">{t(m.eventKey as any)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3 block">{t("valuesBadge")}</span>
            <h2 className="font-heading text-4xl font-bold text-gray-900">{t("valuesTitle")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueKeys.map((v) => (
              <div key={v.key} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 text-lg mb-2">{t(`values.${v.key}.title` as any)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(`values.${v.key}.desc` as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-3 block">{t("teamBadge")}</span>
            <h2 className="font-heading text-4xl font-bold text-gray-900">{t("teamTitle")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-36 h-36 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">{t("certTitle")}</h2>
            <p className="text-green-200 text-lg max-w-xl mx-auto">{t("certSubtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <div className="w-14 h-14 bg-green-600/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-green-300" />
                </div>
                <div className="font-heading font-bold text-white mb-1">{cert.name}</div>
                <div className="text-green-300 text-xs mb-1">{cert.number}</div>
                <div className="text-green-400 text-xs">{t("since")} {cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
