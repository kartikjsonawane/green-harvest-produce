"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const posts = [
  {
    id: 1, slug: "onion-price-factors-2024", title: "What Drives Onion Prices in India: A Wholesale Buyer's Guide",
    excerpt: "Understanding the key factors that cause onion price volatility helps bulk buyers plan procurement and reduce costs. Here's what you need to know.",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=700&q=80",
    author: "Rahul Desai", authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&q=80",
    category: "Market Insights", tags: ["Onions", "Pricing", "Wholesale"],
    publishedAt: "2024-11-15", readTime: 7,
  },
  {
    id: 2, slug: "cold-chain-importance-restaurants", title: "Why Cold Chain Logistics is Non-Negotiable for Restaurants",
    excerpt: "Food safety starts at the source. We explain why uninterrupted cold chain management is the backbone of safe, quality restaurant produce.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80",
    author: "Anita Sharma", authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829?w=40&q=80",
    category: "Supply Chain", tags: ["Cold Chain", "Food Safety", "Restaurants"],
    publishedAt: "2024-10-28", readTime: 5,
  },
  {
    id: 3, slug: "alphonso-mango-export-guide", title: "Exporting Alphonso Mangoes: Everything You Need to Know",
    excerpt: "From GI certification to phytosanitary requirements, this complete guide covers everything about exporting Alphonso mangoes from Ratnagiri.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=700&q=80",
    author: "Suresh Patel", authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&q=80",
    category: "Export", tags: ["Alphonso", "Export", "Mangoes"],
    publishedAt: "2024-09-10", readTime: 9,
  },
  {
    id: 4, slug: "seasonal-buying-guide-hotels", title: "Seasonal Produce Buying Guide for Hotels & Resorts",
    excerpt: "Maximise freshness and minimise costs by aligning your hotel's procurement with India's agricultural seasons. A month-by-month guide.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80",
    author: "Priya Joshi", authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80",
    category: "Hospitality", tags: ["Hotels", "Seasonal", "Buying Guide"],
    publishedAt: "2024-08-22", readTime: 6,
  },
  {
    id: 5, slug: "fssai-compliance-produce", title: "FSSAI Compliance for Bulk Produce Buyers: What You Must Know",
    excerpt: "Non-compliance with FSSAI regulations can result in heavy fines. Here's a practical compliance checklist for wholesale produce buyers.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&q=80",
    author: "Rahul Desai", authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&q=80",
    category: "Compliance", tags: ["FSSAI", "Compliance", "Food Safety"],
    publishedAt: "2024-07-05", readTime: 8,
  },
  {
    id: 6, slug: "nashik-grape-harvest-2024", title: "Nashik Grape Harvest 2024: Preview & Price Outlook",
    excerpt: "Early reports from the Nashik vineyards suggest a strong 2024 grape harvest. What does this mean for bulk buyers and exporters?",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=700&q=80",
    author: "Suresh Patel", authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&q=80",
    category: "Market Insights", tags: ["Grapes", "Nashik", "Harvest"],
    publishedAt: "2024-06-18", readTime: 4,
  },
];

export default function BlogPage() {
  const t = useTranslations("blogPage");

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-white mb-4">{t("heroTitle")}</h1>
          <p className="text-green-100 text-xl max-w-xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">{t("featured")}</span>
          </div>
          <Link href={`/blog/${posts[0].slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <Image src={posts[0].image} alt={posts[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">{posts[0].category}</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{posts[0].title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden"><Image src={posts[0].authorAvatar} alt={posts[0].author} fill className="object-cover" /></div>
                    {posts[0].author}
                  </div>
                  <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{posts[0].publishedAt}</div>
                  <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{posts[0].readTime} {t("minRead")}</div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-green-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                  {t("readMore")} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts */}
      <section className="py-8 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">{t("latestPosts")}</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">{post.category}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <div className="relative w-5 h-5 rounded-full overflow-hidden"><Image src={post.authorAvatar} alt={post.author} fill className="object-cover" /></div>
                      {post.author}
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime} {t("minRead")}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-700">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-2">{t("newsletter")}</h2>
          <p className="text-green-100 mb-6">{t("newsletterSubtitle")}</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors whitespace-nowrap">
              {t("subscribe")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
