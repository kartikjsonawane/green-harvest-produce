"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const products = [
  "Apples", "Bananas", "Oranges", "Mangoes", "Grapes", "Pomegranates",
  "Potatoes", "Onions", "Tomatoes", "Carrots", "Cabbage", "Green Peas", "Mixed Vegetables", "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const t = useTranslations("contact");

  const contactDetails = [
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: Phone, label: "WhatsApp", value: "+91 98765 43210", href: "https://wa.me/919876543210" },
    { icon: Mail, label: "Sales Inquiries", value: "sales@greenharvestproduce.com", href: "mailto:sales@greenharvestproduce.com" },
    { icon: Mail, label: "General", value: "info@greenharvestproduce.com", href: "mailto:info@greenharvestproduce.com" },
    { icon: MapPin, label: "Head Office", value: "123, Agri Business Park, Pune - 411001, Maharashtra, India", href: "#" },
    { icon: Clock, label: "Business Hours", value: "Monday – Saturday: 6:00 AM – 8:00 PM IST", href: "#" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    toast.success(t("success"));
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-green-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/20">
            {t("badge")}
          </span>
          <h1 className="font-heading text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-green-100 text-xl max-w-xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact details */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">{t("contactInfo")}</h2>
              <div className="space-y-4 mb-8">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{item.label}</div>
                      {item.href !== "#" ? (
                        <a href={item.href} className="text-gray-800 text-sm hover:text-green-600 transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-gray-800 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden h-56 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242317.11609994036!2d73.72912879121894!3d18.52462555063782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Green Harvest Produce location"
                />
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Inquiry Received!</h3>
                    <p className="text-gray-600 mb-6">{t("success")}</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">{t("title")}</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("name")} *</label>
                        <input required type="text" placeholder={t("placeholders.name")} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("company")} *</label>
                        <input required type="text" placeholder={t("placeholders.company")} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("email")} *</label>
                        <input required type="email" placeholder={t("placeholders.email")} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("phone")} *</label>
                        <input required type="tel" placeholder={t("placeholders.phone")} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("product")} *</label>
                        <select required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                          <option value="">Select product...</option>
                          {products.map((p) => <option key={p}>{p}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("quantity")}</label>
                        <input type="text" placeholder={t("placeholders.quantity")} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Type</label>
                        <div className="flex flex-wrap gap-2">
                          {["Restaurant", "Hotel", "Supermarket", "Wholesaler", "Exporter", "Food Processor", "Other"].map((type) => (
                            <label key={type} className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="accent-green-600" />
                              <span className="text-sm text-gray-700">{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t("message")}</label>
                        <textarea rows={4} placeholder={t("placeholders.message")} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
                      </div>
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-md"
                        >
                          {loading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              {t("submit")}
                            </>
                          )}
                        </button>
                        <p className="text-xs text-gray-500 mt-3">We respond to all inquiries within 2 business hours.</p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
