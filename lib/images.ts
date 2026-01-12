/**
 * Image URL helper for CDN (R2) integration
 * CDN Base URL: https://cdn.panelmanage.com/panelmanage-nextjs/
 * R2 Storage: https://5e5f8a26d62e3255d96f4410baf43d73.r2.cloudflarestorage.com/panelmanage
 */

const CDN_BASE_URL =
  process.env.NEXT_PUBLIC_CDN_URL ||
  "https://cdn.panelmanage.com/panelmanage-nextjs";

export interface ImageConfig {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Get image URL for a solution page
 * CDN structure: https://cdn.panelmanage.com/panelmanage-nextjs/{slug}.png
 * Falls back to category-based images if slug-specific image doesn't exist
 */
export function getSolutionImage(slug: string): ImageConfig {
  // CDN structure: https://cdn.panelmanage.com/panelmanage-nextjs/{slug}.png
  // Example: https://cdn.panelmanage.com/panelmanage-nextjs/clinic-management-system.png
  // SafeImage component handles fallback to /panel-managez.png if CDN image doesn't exist
  return {
    url: `${CDN_BASE_URL}/${slug}.png`,
    alt: `${slug} management system`,
    width: 1200,
    height: 630,
  };
}

/**
 * Get image URL for comparison page
 * CDN structure: https://cdn.panelmanage.com/panelmanage-nextjs/{solutionSlug}-vs-{competitorSlug}.png
 */
export function getComparisonImage(
  solutionSlug: string,
  competitorSlug: string
): ImageConfig {
  return {
    url: `${CDN_BASE_URL}/${solutionSlug}-vs-${competitorSlug}.png`,
    alt: `${solutionSlug} vs ${competitorSlug} comparison`,
    width: 1200,
    height: 630,
  };
}

/**
 * Get image URL for feature page
 * CDN structure: https://cdn.panelmanage.com/panelmanage-nextjs/{solutionSlug}-{featureSlug}.png
 */
export function getFeatureImage(
  solutionSlug: string,
  featureSlug: string
): ImageConfig {
  return {
    url: `${CDN_BASE_URL}/${solutionSlug}-${featureSlug}.png`,
    alt: `${featureSlug} for ${solutionSlug}`,
    width: 1200,
    height: 630,
  };
}

/**
 * Get image URL for integration page
 * CDN structure: https://cdn.panelmanage.com/panelmanage-nextjs/{solutionSlug}-{integrationSlug}.png
 */
export function getIntegrationImage(
  solutionSlug: string,
  integrationSlug: string
): ImageConfig {
  return {
    url: `${CDN_BASE_URL}/${solutionSlug}-${integrationSlug}.png`,
    alt: `${integrationSlug} integration for ${solutionSlug}`,
    width: 1200,
    height: 630,
  };
}

/**
 * Get image URL for static pages
 * CDN structure: https://cdn.panelmanage.com/panelmanage-nextjs/{page}.png
 */
export function getStaticPageImage(page: string): ImageConfig {
  const imageMap: Record<string, string> = {
    home: "home",
    about: "about",
    pricing: "pricing",
    contact: "contact",
    solutions: "solutions",
    security: "security",
    "terms-of-service": "terms",
    "privacy-policy": "privacy",
    "responsible-disclosure": "security",
  };

  const imageName = imageMap[page] || "default";
  return {
    url: `${CDN_BASE_URL}/${imageName}.png`,
    alt: `${page} page`,
    width: 1200,
    height: 630,
  };
}

/**
 * Fallback to local image if CDN fails
 */
export function getFallbackImage(): ImageConfig {
  return {
    url: "/panel-managez.png",
    alt: "PanelManage Management System",
    width: 1200,
    height: 630,
  };
}
