import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Article",
};

// In production this would come from the database
const samplePost = {
  slug: "onion-price-factors-2024",
  title: "What Drives Onion Prices in India: A Wholesale Buyer's Guide",
  excerpt: "Understanding the key factors that cause onion price volatility helps bulk buyers plan procurement and reduce costs.",
  image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=1200&q=80",
  author: "Rahul Desai",
  authorRole: "Head of Quality Assurance",
  authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
  category: "Market Insights",
  tags: ["Onions", "Pricing", "Wholesale", "Market Intelligence"],
  publishedAt: "November 15, 2024",
  readTime: 7,
  content: `
India is the world's second-largest onion producer, and its domestic market is notorious for dramatic price swings. For businesses that depend on onions as a key ingredient — restaurants, food processors, exporters — understanding the drivers of these price movements is essential for smart procurement planning.

## The Primary Drivers

**1. Rainfall and Weather Patterns**

Onion cultivation in India is highly rainfall-dependent. The key growing regions — Nashik, Solapur, and Osmanabad in Maharashtra — rely on the monsoon for their kharif crop and irrigation for their rabi crop. When rainfall is deficient or delayed, sowing gets pushed back, reducing supply. When there's excessive rainfall during harvest, the crop quality deteriorates and shelf life reduces, forcing faster sales and market volatility.

**2. Storage and Cold Chain Gaps**

Unlike grains, onions are highly perishable. A large portion of India's onion harvest is still stored in traditional wire-mesh structures (called mandis), where temperature and humidity are not controlled. Post-harvest losses can range from 15–30%, dramatically reducing effective supply.

**3. Export Policy Decisions**

When domestic prices spike, the government often restricts exports to protect local consumers. These sudden export bans — announced with little notice — can strand exporters and cause cascading effects in the domestic market. Conversely, when the government drops minimum export prices (MEP), global demand surges and domestic prices rise.

## What Wholesale Buyers Can Do

**Advance contracting**: Lock in prices 30–60 days ahead of requirement during planting season when prices are typically most stable.

**Diversify sourcing geography**: Nashik dominates, but Karnataka (Bellary), Gujarat (Rajkot), and Madhya Pradesh (Indore) offer quality alternatives.

**Build a buffer stock**: Establish cold storage arrangements for 15–20 days of inventory. This insulates you from spot market spikes.

## The Green Harvest Approach

We work directly with 200+ onion farmers in Nashik's Lasalgaon belt — the largest onion market in Asia. By committing to advance purchases, we give our clients price stability through fixed-price contracts for up to 90 days.

Get in touch with our sales team to discuss how we can structure a supply agreement that protects your business from onion price volatility.
  `,
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  await params; // Next.js 15: params is a Promise
  return (
    <div>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">{samplePost.category}</span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">{samplePost.title}</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">{samplePost.excerpt}</p>
          <div className="flex flex-wrap gap-5 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden"><Image src={samplePost.authorAvatar} alt={samplePost.author} fill className="object-cover" /></div>
              <div>
                <div className="font-medium text-gray-700">{samplePost.author}</div>
                <div className="text-xs">{samplePost.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{samplePost.publishedAt}</div>
            <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{samplePost.readTime} min read</div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="relative h-64 md:h-96">
        <Image src={samplePost.image} alt={samplePost.title} fill className="object-cover" />
      </div>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-green max-w-none">
            {samplePost.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="font-heading text-2xl font-bold text-gray-900 mt-10 mb-4">{line.slice(3)}</h2>;
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return <h3 key={i} className="font-semibold text-gray-900 mt-6 mb-2">{line.slice(2, -2)}</h3>;
              }
              if (line.trim() === '') return <div key={i} className="h-2" />;
              return <p key={i} className="text-gray-700 leading-relaxed">{line}</p>;
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {samplePost.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">
                  <Tag className="w-3 h-3" />{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-green-50 border-y border-green-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Need Onions in Bulk?</h3>
          <p className="text-gray-600 mb-6">Contact our team for price stability through advance contracts on onions and other key produce.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md">
            Get a Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
}
