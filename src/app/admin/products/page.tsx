"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Search, Edit2, Trash2, Package } from "lucide-react";

const products = [
  { id: 1, name: "Onions", category: "Vegetable", image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=100&q=80", minOrder: "500 kg", price: "₹15–₹45/kg", availability: "available", origin: "Nashik" },
  { id: 2, name: "Potatoes", category: "Vegetable", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&q=80", minOrder: "1000 kg", price: "₹12–₹28/kg", availability: "available", origin: "Agra" },
  { id: 3, name: "Tomatoes", category: "Vegetable", image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=100&q=80", minOrder: "200 kg", price: "₹15–₹60/kg", availability: "available", origin: "Nashik" },
  { id: 4, name: "Alphonso Mangoes", category: "Fruit", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=100&q=80", minOrder: "50 kg", price: "₹150–₹400/kg", availability: "seasonal", origin: "Ratnagiri" },
  { id: 5, name: "Apples", category: "Fruit", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=100&q=80", minOrder: "100 kg", price: "₹60–₹120/kg", availability: "seasonal", origin: "Himachal" },
  { id: 6, name: "Grapes", category: "Fruit", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=100&q=80", minOrder: "100 kg", price: "₹40–₹90/kg", availability: "seasonal", origin: "Nashik" },
];

export default function ProductsAdminPage() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-gray-900">Products</h1>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-md">
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      <div className="relative max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-36">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
              <div className={`absolute top-2 right-2 text-xs font-medium px-2 py-0.5 rounded-full ${p.availability === "available" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                {p.availability}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{p.name}</h3>
                  <p className="text-xs text-gray-500">{p.category} · {p.origin}</p>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mb-3">
                <span>Min: {p.minOrder}</span>
                <span className="font-medium text-green-700">{p.price}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 rounded-lg transition-colors">
                  <Edit2 className="w-3.5 h-3.5" /> Edit
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 py-2 rounded-lg transition-colors">
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Product Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-heading font-bold text-lg text-gray-900 mb-5">Add New Product</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Product Name", placeholder: "e.g., Onions" },
                { label: "Category", placeholder: "Fruit / Vegetable" },
                { label: "Origin", placeholder: "e.g., Nashik, Maharashtra" },
                { label: "Min. Order", placeholder: "e.g., 500 kg" },
                { label: "Price Range", placeholder: "e.g., ₹15–₹45/kg" },
                { label: "Season", placeholder: "e.g., Year-round" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">{field.label}</label>
                  <input type="text" placeholder={field.placeholder} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
              ))}
              <div className="col-span-2">
                <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
                <textarea rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2">
                <Package className="w-4 h-4" /> Save Product
              </button>
              <button onClick={() => setShowForm(false)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 rounded-xl transition-colors text-sm">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
