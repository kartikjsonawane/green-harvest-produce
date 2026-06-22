import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://greenharvestproduce.com";
  const locales = ["", "/hi", "/mr"];
  const pages = ["", "/about", "/products", "/bulk-supply", "/logistics", "/gallery", "/blog", "/contact"];

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      routes.push({
        url: `${baseUrl}${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1 : 0.8,
      });
    }
  }

  return routes;
}
