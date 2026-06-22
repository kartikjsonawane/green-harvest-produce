"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Bot, Search } from "lucide-react";

const knowledgeEntries = [
  { id: 1, question: "Do you supply onions in bulk?", answer: "Yes! We supply premium Nashik red onions. Min order 500kg. Available year-round.", category: "Products", active: true },
  { id: 2, question: "What is your minimum order quantity?", answer: "Varies by product: Onions 500kg, Potatoes 1000kg, Tomatoes 200kg, Fruits 50–200kg.", category: "Ordering", active: true },
  { id: 3, question: "Which cities do you deliver to?", answer: "200+ cities across 15 Indian states including Mumbai, Pune, Delhi, Bengaluru and more.", category: "Delivery", active: true },
  { id: 4, question: "Can you export internationally?", answer: "Yes! APEDA registered. Export to Middle East, Europe, Southeast Asia.", category: "Export", active: true },
  { id: 5, question: "What packaging options do you offer?", answer: "Jute bags, PP bags, cardboard boxes, mesh nets, IQF frozen, private label available.", category: "Products", active: true },
  { id: 6, question: "What are your business hours?", answer: "Mon–Sat 6AM–8PM IST. Phone: +91 98765 43210.", category: "General", active: true },
];

export default function ChatbotKBPage() {
  const [entries, setEntries] = useState(knowledgeEntries);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = entries.filter(
    (e) =>
      e.question.toLowerCase().includes(search.toLowerCase()) ||
      e.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-gray-900">Chatbot Knowledge Base</h1>
          <p className="text-gray-500 text-sm">Manage the Q&A entries that power the Harvy chatbot.</p>
        </div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md transition-colors">
          <Plus className="w-4 h-4" />
          Add Entry
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Entries", value: entries.length },
          { label: "Active", value: entries.filter((e) => e.active).length },
          { label: "Categories", value: new Set(entries.map((e) => e.category)).size },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
            <div className="font-heading font-bold text-2xl text-green-700">{s.value}</div>
            <div className="text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="relative max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" placeholder="Search knowledge base..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>

      <div className="space-y-3">
        {filtered.map((entry) => (
          <div key={entry.id} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{entry.category}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${entry.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {entry.active ? "Active" : "Inactive"}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">Q: {entry.question}</p>
                  <p className="text-gray-600 text-sm">A: {entry.answer}</p>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button className="w-7 h-7 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setEntries((prev) => prev.filter((e) => e.id !== entry.id))}
                  className="w-7 h-7 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-heading font-bold text-lg text-gray-900 mb-5">Add Knowledge Entry</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Question / Trigger *</label>
                <input type="text" placeholder="e.g., Do you supply onions in bulk?" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Answer *</label>
                <textarea rows={4} placeholder="Type the chatbot's response here..." className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                  {["Products", "Ordering", "Delivery", "Export", "General", "Pricing"].map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-xl transition-colors text-sm">Save Entry</button>
              <button onClick={() => setShowForm(false)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 rounded-xl transition-colors text-sm">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
