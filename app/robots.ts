import type { MetadataRoute } from "next";
import { buildRobotsConfig } from "./llm";

export default function robots(): MetadataRoute.Robots {
  const cfg = buildRobotsConfig();

  return {
    rules: {
      userAgent: "*",
      allow: cfg.allow,
      disallow: cfg.disallow,
    },
    sitemap: cfg.sitemap,
    host: cfg.host,
  };
}

