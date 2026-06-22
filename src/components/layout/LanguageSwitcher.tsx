"use client";

import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "hi", label: "हि", name: "हिंदी" },
  { code: "mr", label: "म", name: "मराठी" },
];

interface Props {
  currentLocale: string;
  scrolled: boolean;
}

export default function LanguageSwitcher({ currentLocale, scrolled }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === currentLocale) ?? languages[0];

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const getNewPath = (code: string) => {
    const locales = ["en", "hi", "mr"];
    // Remove any existing locale prefix
    const parts = pathname.split("/").filter(Boolean);
    const restParts = locales.includes(parts[0]) ? parts.slice(1) : parts;
    const cleanPath = restParts.length > 0 ? "/" + restParts.join("/") : "/";
    return code === "en" ? cleanPath : `/${code}${cleanPath}`;
  };

  const switchLocale = (code: string) => {
    setOpen(false);
    // Use absolute URL so the server always re-renders with the correct locale
    const path = getNewPath(code);
    window.location.href = window.location.origin + path;
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
          scrolled
            ? "text-gray-700 hover:bg-gray-100"
            : "text-white/90 hover:bg-white/10"
        }`}
      >
        <Globe className="w-4 h-4" />
        <span>{current.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.12 }}
            className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 py-1.5 overflow-hidden z-[100]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-3 ${
                  lang.code === currentLocale
                    ? "text-green-700 bg-green-50 font-semibold"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                <span className="text-base w-6 text-center">{lang.label}</span>
                <span>{lang.name}</span>
                {lang.code === currentLocale && (
                  <span className="ml-auto w-1.5 h-1.5 bg-green-500 rounded-full" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
