"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  MessageSquare,
  FileText,
  Image,
  Bot,
  LogOut,
  Menu,
  X,
  Leaf,
  Bell,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/products", icon: Package, label: "Products" },
  { href: "/admin/inquiries", icon: MessageSquare, label: "Inquiries" },
  { href: "/admin/blog", icon: FileText, label: "Blog Posts" },
  { href: "/admin/gallery", icon: Image, label: "Gallery" },
  { href: "/admin/chatbot", icon: Bot, label: "Chatbot KB" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-green-950 text-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 py-5 border-b border-green-900">
          <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-heading font-bold text-sm text-white">Green Harvest</div>
            <div className="text-[10px] text-green-400 uppercase tracking-wider">Admin Panel</div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden ml-auto text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-green-300 hover:text-white hover:bg-green-900"
                }`}
              >
                <item.icon className="w-4.5 h-4.5" style={{ width: "18px", height: "18px" }} />
                {item.label}
                {item.label === "Inquiries" && (
                  <span className="ml-auto w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-green-900">
          <div className="flex items-center gap-3 px-3 mb-3">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-sm font-bold">A</div>
            <div>
              <div className="text-sm font-medium text-white">Admin</div>
              <div className="text-xs text-green-400">admin@greenharvest.com</div>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-green-300 hover:text-white hover:bg-green-900 transition-colors"
          >
            <LogOut className="w-4.5 h-4.5" style={{ width: "18px", height: "18px" }} />
            View Website
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center gap-4 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <Menu className="w-5 h-5" />
          </button>
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-sm text-gray-500 flex-1">
            <span className="text-green-600 font-medium">Admin</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium capitalize">
              {pathname.split("/").pop() === "admin" ? "Dashboard" : pathname.split("/").pop()}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Bell className="w-4 h-4 text-gray-600" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">3</span>
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
