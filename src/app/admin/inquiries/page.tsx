"use client";

import { useState } from "react";
import { Search, Filter, Eye, CheckCircle, Clock, AlertCircle, Trash2 } from "lucide-react";

const inquiries = [
  { id: 1, name: "Rajesh Kumar", company: "Star Hotels Group", email: "rajesh@starhotels.in", phone: "+91 9876543210", product: "Onions & Tomatoes", qty: "2 Tonnes/week", message: "Need consistent weekly supply of Grade-A onions and tomatoes for our hotel chain across Pune.", status: "new", date: "2024-11-20 10:32" },
  { id: 2, name: "Meena Traders", company: "Meena Wholesale", email: "meena@meanatrade.com", phone: "+91 8765432109", product: "Potatoes", qty: "5 Tonnes/week", message: "Looking for a reliable supplier for Agra potatoes for our wholesale business.", status: "in-progress", date: "2024-11-20 07:15" },
  { id: 3, name: "Sandeep Joshi", company: "Blue Lagoon Resort", email: "sandeep@bluelagoon.in", phone: "+91 7654321098", product: "Mixed Fruits & Vegetables", qty: "1 Tonne/week", message: "5-star resort. Need premium grade produce for our kitchens.", status: "new", date: "2024-11-19 22:48" },
  { id: 4, name: "Priya Singh", company: "FreshKart India", email: "priya@freshkart.in", phone: "+91 6543210987", product: "Alphonso Mangoes", qty: "500 kg (seasonal)", message: "Want to stock Alphonso mangoes for the upcoming season. Require GI-certified.", status: "resolved", date: "2024-11-19 14:00" },
  { id: 5, name: "Arjun Mehta", company: "City Caterers", email: "arjun@citycaterers.in", phone: "+91 5432109876", product: "Cabbage & Green Peas", qty: "300 kg/week", message: "Event catering company. Need seasonal vegetables at competitive bulk rates.", status: "new", date: "2024-11-19 11:30" },
  { id: 6, name: "Sunita Rao", company: "D-Mart Vendor", email: "sunita@dmart.com", phone: "+91 4321098765", product: "Mixed Vegetables", qty: "10 Tonnes/week", message: "Supermarket sourcing inquiry for our Maharashtra stores.", status: "in-progress", date: "2024-11-18 16:45" },
];

const statusConfig: Record<string, { label: string; badge: string; icon: typeof AlertCircle }> = {
  new: { label: "New", badge: "bg-red-100 text-red-700", icon: AlertCircle },
  "in-progress": { label: "In Progress", badge: "bg-amber-100 text-amber-700", icon: Clock },
  resolved: { label: "Resolved", badge: "bg-green-100 text-green-700", icon: CheckCircle },
};

export default function InquiriesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<typeof inquiries[0] | null>(null);

  const filtered = inquiries.filter((inq) => {
    const matchSearch =
      inq.name.toLowerCase().includes(search.toLowerCase()) ||
      inq.company.toLowerCase().includes(search.toLowerCase()) ||
      inq.product.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || inq.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-gray-900">Inquiries</h1>
        <div className="text-sm text-gray-500">{inquiries.filter((i) => i.status === "new").length} new</div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search inquiries..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        <div className="flex gap-2">
          {["all", "new", "in-progress", "resolved"].map((s) => (
            <button key={s} onClick={() => setFilter(s)} className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${filter === s ? "bg-green-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-green-50"}`}>
              {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Product / Qty</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((inq) => {
                const sc = statusConfig[inq.status];
                const Icon = sc.icon;
                return (
                  <tr key={inq.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="font-medium text-gray-900">{inq.name}</div>
                      <div className="text-xs text-gray-500">{inq.company}</div>
                      <div className="text-xs text-gray-400">{inq.email}</div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="font-medium text-gray-800">{inq.product}</div>
                      <div className="text-xs text-gray-500">{inq.qty}</div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${sc.badge}`}>
                        <Icon className="w-3 h-3" />
                        {sc.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-xs text-gray-500">{inq.date}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex gap-2">
                        <button onClick={() => setSelected(inq)} className="w-7 h-7 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors" title="View details">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-7 h-7 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors" title="Delete">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-heading font-bold text-lg text-gray-900">{selected.name}</h3>
                <p className="text-sm text-gray-500">{selected.company}</p>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusConfig[selected.status].badge}`}>{statusConfig[selected.status].label}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm mb-4">
              <div><span className="text-gray-500">Email:</span> <span className="font-medium">{selected.email}</span></div>
              <div><span className="text-gray-500">Phone:</span> <span className="font-medium">{selected.phone}</span></div>
              <div><span className="text-gray-500">Product:</span> <span className="font-medium">{selected.product}</span></div>
              <div><span className="text-gray-500">Quantity:</span> <span className="font-medium">{selected.qty}</span></div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 mb-5">{selected.message}</div>
            <div className="flex gap-3">
              <a href={`mailto:${selected.email}`} className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-xl transition-colors text-sm">Reply via Email</a>
              <button onClick={() => setSelected(null)} className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-xl transition-colors text-sm">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
