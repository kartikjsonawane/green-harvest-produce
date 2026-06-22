import {
  Package,
  MessageSquare,
  TrendingUp,
  Users,
  ShoppingCart,
  FileText,
  ArrowUpRight,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "New Inquiries", value: "24", change: "+12%", icon: MessageSquare, color: "bg-blue-50 text-blue-600", trend: "up" },
  { label: "Active Products", value: "48", change: "+3", icon: Package, color: "bg-green-50 text-green-600", trend: "up" },
  { label: "Blog Posts", value: "12", change: "+1", icon: FileText, color: "bg-amber-50 text-amber-600", trend: "up" },
  { label: "Monthly Clients", value: "1,248", change: "+8.2%", icon: Users, color: "bg-purple-50 text-purple-600", trend: "up" },
];

const recentInquiries = [
  { name: "Rajesh Kumar", company: "Star Hotels", product: "Onions & Tomatoes", qty: "2T/week", status: "new", time: "2 hours ago" },
  { name: "Meena Traders", company: "Meena Wholesale", product: "Potatoes", qty: "5T/week", status: "in-progress", time: "5 hours ago" },
  { name: "Blue Lagoon Resort", company: "BLR Group", product: "Mixed Fruits & Veg", qty: "1T/week", status: "new", time: "8 hours ago" },
  { name: "FreshKart India", company: "FreshKart Pvt Ltd", product: "Mangoes", qty: "500 kg", status: "resolved", time: "1 day ago" },
  { name: "City Caterers", company: "City Events", product: "Cabbage & Peas", qty: "300 kg", status: "new", time: "1 day ago" },
];

const statusBadge: Record<string, string> = {
  new: "bg-red-100 text-red-700",
  "in-progress": "bg-amber-100 text-amber-700",
  resolved: "bg-green-100 text-green-700",
};

const statusIcon: Record<string, typeof AlertCircle> = {
  new: AlertCircle,
  "in-progress": Clock,
  resolved: CheckCircle,
};

const quickActions = [
  { label: "Add Product", href: "/admin/products", icon: Package, color: "bg-green-600 hover:bg-green-700" },
  { label: "New Blog Post", href: "/admin/blog", icon: FileText, color: "bg-blue-600 hover:bg-blue-700" },
  { label: "View Inquiries", href: "/admin/inquiries", icon: MessageSquare, color: "bg-purple-600 hover:bg-purple-700" },
  { label: "Upload Gallery", href: "/admin/gallery", icon: ShoppingCart, color: "bg-amber-600 hover:bg-amber-700" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm">Welcome back, Admin. Here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-green-600 flex items-center gap-0.5">
                <ArrowUpRight className="w-3 h-3" />
                {stat.change}
              </span>
            </div>
            <div className="font-heading font-bold text-2xl text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Recent Inquiries */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-900">Recent Inquiries</h2>
            <Link href="/admin/inquiries" className="text-xs text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
              View all <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentInquiries.map((inq, i) => {
              const Icon = statusIcon[inq.status];
              return (
                <div key={i} className="px-5 py-3.5 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                  <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center text-sm font-bold text-green-700 flex-shrink-0">
                    {inq.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 text-sm truncate">{inq.name}</div>
                    <div className="text-xs text-gray-500 truncate">{inq.company} · {inq.product} · {inq.qty}</div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 ${statusBadge[inq.status]}`}>
                      <Icon className="w-3 h-3" />
                      {inq.status}
                    </span>
                    <span className="text-xs text-gray-400">{inq.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick actions + mini chart */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="font-heading font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-2.5">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={`flex flex-col items-center justify-center gap-2 text-white text-xs font-medium p-4 rounded-xl transition-colors ${action.color}`}
                >
                  <action.icon className="w-5 h-5" />
                  {action.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="font-heading font-semibold text-gray-900 mb-3">Top Products This Month</h2>
            {[
              { name: "Onions", pct: 82, value: "12.4T" },
              { name: "Potatoes", pct: 65, value: "9.8T" },
              { name: "Tomatoes", pct: 54, value: "8.1T" },
              { name: "Mangoes", pct: 38, value: "5.7T" },
            ].map((p) => (
              <div key={p.name} className="mb-3 last:mb-0">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-700 font-medium">{p.name}</span>
                  <span className="text-gray-500">{p.value}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
