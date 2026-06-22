"use client";

import { useState } from "react";
import Image from "next/image";
import { Upload, Trash2, Plus } from "lucide-react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80", alt: "Farm fields", category: "Farm" },
  { id: 2, src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80", alt: "Cold storage warehouse", category: "Warehouse" },
  { id: 3, src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80", alt: "Mixed vegetables", category: "Products" },
  { id: 4, src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80", alt: "Delivery truck", category: "Delivery" },
  { id: 5, src: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80", alt: "Mango crates", category: "Products" },
  { id: 6, src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80", alt: "Team meeting", category: "Team" },
];

export default function GalleryAdminPage() {
  const [images, setImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? images : images.filter((i) => i.category === activeFilter);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-gray-900">Gallery</h1>
        <label className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-xl cursor-pointer transition-colors shadow-md">
          <Upload className="w-4 h-4" />
          Upload Images
          <input type="file" multiple accept="image/*" className="hidden" />
        </label>
      </div>

      <div className="flex gap-2 flex-wrap">
        {["All", "Farm", "Warehouse", "Products", "Delivery", "Team"].map((f) => (
          <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeFilter === f ? "bg-green-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-green-50"}`}>{f}</button>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Upload placeholder */}
        <label className="aspect-square bg-gray-100 border-2 border-dashed border-gray-300 hover:border-green-400 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors group">
          <Plus className="w-8 h-8 text-gray-300 group-hover:text-green-500 transition-colors" />
          <span className="text-xs text-gray-400 group-hover:text-green-600 transition-colors">Add Image</span>
          <input type="file" multiple accept="image/*" className="hidden" />
        </label>

        {filtered.map((img) => (
          <div key={img.id} className="aspect-square relative rounded-2xl overflow-hidden group">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <button
                onClick={() => setImages((prev) => prev.filter((i) => i.id !== img.id))}
                className="w-9 h-9 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
              {img.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
