import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greenharvestproduce.com"),
  title: {
    default: "Green Harvest Produce | Bulk Fruits & Vegetables Supplier India",
    template: "%s | Green Harvest Produce",
  },
  description:
    "India's trusted bulk supplier of fresh fruits and vegetables. Serving wholesalers, retailers, restaurants, hotels, and institutional buyers since 2001.",
  keywords: [
    "bulk fruits vegetables India",
    "wholesale produce supplier",
    "fresh vegetables bulk order",
    "fruit distributor India",
    "Green Harvest Produce",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://greenharvestproduce.com",
    siteName: "Green Harvest Produce",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GreenHarvestIN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
