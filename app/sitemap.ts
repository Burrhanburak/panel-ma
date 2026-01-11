import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "./llm";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = buildSitemapEntries();

  return entries.map((entry) => ({
    url: entry.url,
    lastModified: entry.lastModified,
  }));
}

