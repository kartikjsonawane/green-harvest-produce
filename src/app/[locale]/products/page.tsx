"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Package, Calendar, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

const allProducts = [
  {
    id: "apples", name: "Apples", category: "fruit", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500&q=80",
    season: "October – March", minOrder: "100 kg", origin: "Himachal Pradesh, Jammu & Kashmir",
    packaging: ["5 kg boxes", "10 kg boxes", "20 kg crates"], availability: "available",
    description: "Premium Shimla and Kinnaur apples, hand-sorted and graded. Available in Royal Delicious, Fuji, and Golden varieties.",
    priceRange: "₹60–₹120/kg",
  },
  {
    id: "bananas", name: "Bananas", category: "fruit", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&q=80",
    season: "Year-round", minOrder: "200 kg", origin: "Jalgaon, Maharashtra & Tamil Nadu",
    packaging: ["10 kg bunches", "15 kg boxes", "Custom"], availability: "available",
    description: "Grade-A Robusta and Grand Naine bananas from Maharashtra's Jalgaon belt. Consistent size, colour, and ripeness.",
    priceRange: "₹18–₹35/kg",
  },
  {
    id: "oranges", name: "Oranges", category: "fruit", image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&q=80",
    season: "November – February", minOrder: "100 kg", origin: "Nagpur, Maharashtra",
    packaging: ["10 kg mesh bags", "15 kg crates", "5 kg boxes"], availability: "seasonal",
    description: "Nagpur's famous Santra oranges — juicy, sweet, and GI-tagged. India's finest citrus for wholesale and retail.",
    priceRange: "₹30–₹60/kg",
  },
  {
    id: "mangoes", name: "Mangoes", category: "fruit", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80",
    season: "April – July", minOrder: "50 kg", origin: "Ratnagiri & Devgad, Maharashtra",
    packaging: ["5 kg boxes", "10 kg boxes", "Gift packs"], availability: "seasonal",
    description: "Authentic Alphonso (Hapus) mangoes — GI-certified, naturally ripened, exported to 25+ countries.",
    priceRange: "₹150–₹400/kg",
  },
  {
    id: "grapes", name: "Grapes", category: "fruit", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&q=80",
    season: "January – May", minOrder: "100 kg", origin: "Nashik & Sangli, Maharashtra",
    packaging: ["8 kg boxes", "5 kg punnet trays", "Custom"], availability: "seasonal",
    description: "Thompson Seedless and Sharad Seedless grapes from Nashik. Crispy, sweet, and export-quality certified.",
    priceRange: "₹40–₹90/kg",
  },
  {
    id: "pomegranates", name: "Pomegranates", category: "fruit", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&q=80",
    season: "August – February", minOrder: "100 kg", origin: "Solapur & Nashik, Maharashtra",
    packaging: ["10 kg boxes", "5 kg trays", "Custom"], availability: "available",
    description: "Bhagwa variety pomegranates — deep red, sweet, and high ARILS. Exported to Europe and Middle East.",
    priceRange: "₹70–₹140/kg",
  },
  {
    id: "potatoes", name: "Potatoes", category: "vegetable", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&q=80",
    season: "Year-round", minOrder: "1000 kg", origin: "Agra (UP) & Madhya Pradesh",
    packaging: ["50 kg jute bags", "25 kg bags", "Custom"], availability: "available",
    description: "Grade-A Jyoti and Kufri Chipsona potatoes for bulk culinary and processing use.",
    priceRange: "₹12–₹28/kg",
  },
  {
    id: "onions", name: "Onions", category: "vegetable", image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500&q=80",
    season: "Year-round", minOrder: "500 kg", origin: "Nashik & Lasalgaon, Maharashtra",
    packaging: ["50 kg jute bags", "25 kg nets", "10 kg bags"], availability: "available",
    description: "Nashik red onions — India's best. Available in 35mm, 45mm, and 55mm sizes for all bulk applications.",
    priceRange: "₹15–₹45/kg",
  },
  {
    id: "tomatoes", name: "Tomatoes", category: "vegetable", image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=500&q=80",
    season: "Year-round", minOrder: "200 kg", origin: "Nashik & Pune belt, Maharashtra",
    packaging: ["10 kg crates", "20 kg crates", "Custom"], availability: "available",
    description: "Hybrid tomatoes, consistent in size and colour. Suitable for processing, hotels, and retail.",
    priceRange: "₹15–₹60/kg",
  },
  {
    id: "carrots", name: "Carrots", category: "vegetable", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&q=80",
    season: "October – March", minOrder: "200 kg", origin: "Ooty & Nainital",
    packaging: ["10 kg bags", "20 kg bags", "Custom"], availability: "seasonal",
    description: "Deep orange, crunchy Nantes variety carrots from hill farms. Perfect for hospitality and processing.",
    priceRange: "₹20–₹45/kg",
  },
  {
    id: "cabbage", name: "Cabbage", category: "vegetable", image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500&q=80",
    season: "October – March", minOrder: "300 kg", origin: "Nasik & Pune, Maharashtra",
    packaging: ["20 kg nets", "Custom bulk"], availability: "seasonal",
    description: "Green and red cabbage varieties, firm heads with good shelf life.",
    priceRange: "₹10–₹25/kg",
  },
  {
    id: "green-peas", name: "Green Peas", category: "vegetable", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&q=80",
    season: "November – February", minOrder: "100 kg", origin: "Punjab & Uttar Pradesh",
    packaging: ["10 kg bags", "25 kg bags", "IQF frozen"], availability: "seasonal",
    description: "Fresh and IQF frozen green peas for hospitality and food processing industries.",
    priceRange: "₹25–₹60/kg",
  },
];

const availabilityBadge: Record<string, string> = {
  available: "bg-green-100 text-green-700",
  seasonal: "bg-amber-100 text-amber-700",
  "pre-order": "bg-blue-100 text-blue-700",
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "fruit" | "vegetable">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations("productsPage");

  const filtered = allProducts.filter((p) => {
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <section className="pt-28 pb-20 bg-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2">
            {(["all", "fruit", "vegetable"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {cat === "all" ? t("allProducts") : cat === "fruit" ? `🍎 ${t("fruits")}` : `🥦 ${t("vegetables")}`}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-56"
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${availabilityBadge[product.availability]}`}>
                      {product.availability === "available" ? t("available") : t("seasonal")}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm capitalize">
                    {product.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>

                  <div className="space-y-2 mb-4 border-t border-gray-100 pt-4">
                    <div className="flex gap-2 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{product.origin}</span>
                    </div>
                    <div className="flex gap-2 text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      <span>{t("season")}: {product.season}</span>
                    </div>
                    <div className="flex gap-2 text-xs text-gray-500">
                      <Package className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      <span>{t("minOrder")}: {product.minOrder}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1 text-center bg-gray-50 rounded-lg py-2 text-xs font-medium text-gray-700">
                      {product.priceRange}
                    </div>
                    <Link
                      href={`/contact?product=${product.name}`}
                      className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors"
                    >
                      {t("requestQuote")}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg">{t("noProducts")} &quot;{searchQuery}&quot;</p>
            </div>
          )}
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">{t("packagingTitle")}</h2>
          <p className="text-gray-600 mb-8">{t("packagingSubtitle")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Jute Bags", "PP Woven Bags", "Cardboard Boxes", "Wooden Crates", "Mesh Net Bags", "Custom Branding", "IQF Frozen Packs", "Vacuum Sealed"].map((opt) => (
              <span key={opt} className="bg-green-50 text-green-700 border border-green-200 px-4 py-2 rounded-lg text-sm font-medium">
                ✓ {opt}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
