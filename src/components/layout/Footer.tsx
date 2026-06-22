"use client";

import Link from "next/link";
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const prefix = locale === "en" ? "" : `/${locale}`;

  const products = [
    { name: "Fresh Fruits", href: "/products?cat=fruits" },
    { name: "Fresh Vegetables", href: "/products?cat=vegetables" },
    { name: "Bulk Supply", href: "/bulk-supply" },
    { name: "Cold Storage", href: "/logistics" },
    { name: "Export Services", href: "/bulk-supply#export" },
  ];

  const company = [
    { name: tn("about"), href: "/about" },
    { name: tn("blog"), href: "/blog" },
    { name: tn("gallery"), href: "/gallery" },
    { name: tn("contact"), href: "/contact" },
  ];

  return (
    <footer className="bg-green-950 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`${prefix}/`} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-white">Green Harvest</div>
                <div className="text-[10px] text-green-400 tracking-widest uppercase">Produce</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              {t("tagline")}
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-green-900 hover:bg-green-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-green-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("products")}
            </h3>
            <ul className="space-y-2.5">
              {products.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`${prefix}${item.href}`}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-600 flex-shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`${prefix}${item.href}`}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-600 flex-shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {t("contact")}
            </h3>
            <ul className="space-y-3.5">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{t("address")}</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors">
                  <Phone className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {t("phone")}
                </a>
              </li>
              <li>
                <a href="mailto:sales@greenharvestproduce.com" className="flex gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors">
                  <Mail className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {t("email")}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Clock className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                {t("hours")}
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications strip */}
        <div className="mt-12 pt-8 border-t border-green-900/60">
          <div className="flex flex-wrap gap-3 mb-6">
            {["FSSAI Certified", "ISO 9001:2015", "APEDA Registered", "Organic India", "Export Quality"].map((cert) => (
              <span
                key={cert}
                className="px-3 py-1 text-xs font-medium bg-green-900/60 text-green-300 rounded-full border border-green-800"
              >
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Green Harvest Produce Pvt. Ltd. {t("rights")}</span>
          <div className="flex gap-4">
            <Link href={`${prefix}/privacy`} className="hover:text-green-400 transition-colors">{t("privacy")}</Link>
            <Link href={`${prefix}/terms`} className="hover:text-green-400 transition-colors">{t("terms")}</Link>
            <Link href="/sitemap.xml" className="hover:text-green-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
