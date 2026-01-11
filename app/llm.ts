/**
 * LLM.TS - AI Entity Recognition & Semantic Analysis Helpers (PanelManage)
 *
 * Bu modül, PanelManage sitesi için AI/LLM odaklı:
 * - Site haritası (tüm sayfalar + solutions)
 * - Semantic keyword / intent üretimi
 * - Panel türleri, sektörler ve entegrasyonlar için entity cluster'ları
 * üretmekte kullanılır.
 *
 * ChatGPT, Perplexity, Google AI gibi modeller için:
 * - Hangi sayfa neyi temsil ediyor?
 * - Hangi panel türleri ve sektörler var?
 * - Hangi kelimeler önemli?
 * sorularına net cevap verecek tek JSON/TS kaynağıdır.
 */

import { BRAND, SOLUTIONS_ALL, type Solution } from "@/data/solutions";

// ============================================================================
// CORE TYPES
// ============================================================================

export type LlmEntityType =
  | "homepage"
  | "about"
  | "pricing"
  | "contact"
  | "solutions_hub"
  | "solution_detail"
  | "legal"
  | "panel_type"
  | "industry"
  | "integration"
  | "intent"
  | "other";

export interface LlmPage {
  path: string;
  title: string;
  description: string;
  type: LlmEntityType;
  section?: string;
  /**
   * SEO / LLM keywords – Panel / çözüm / sektör kelimeleri
   */
  keywords?: string[];
  /**
   * Ek açıklayıcı label / entity'ler
   */
  entities?: string[];
  datePublished?: string;
  dateModified?: string;
}

export interface GeoEntity {
  country?: string;
  state?: string;
  city?: string;
  region?: string;
  continent?: string;
}

export type SemanticEntityKind =
  | "location"
  | "panel_type"
  | "solution"
  | "industry"
  | "integration"
  | "intent"
  | "feature";

export interface SemanticEntity {
  type: SemanticEntityKind;
  value: string;
  confidence: number;
  context?: string;
}

// ============================================================================
// SITE MAP HELPERS (FULL MAP)
// ============================================================================

export function getStaticPages(): LlmPage[] {
  return [
    {
      path: "/",
      title: "Custom Management Systems Built for Real Operations",
      description:
        "Home page for PanelManage. Custom management systems and admin panels for appointments, clinics, employees, scholarships, and internal operations.",
      type: "homepage",
      section: "core",
      keywords: [
        "custom admin panel",
        "management system",
        "appointment system",
        "clinic management",
        "employee tracking",
        "scholarship management",
        "internal tools",
      ],
      entities: ["PanelManage", "custom panels", "admin dashboards"],
    },
    {
      path: "/about",
      title: "About PanelManage",
      description:
        "About PanelManage and how we design and build custom management systems and admin panels.",
      type: "about",
      section: "core",
      entities: ["company", "about", "PanelManage"],
    },
    {
      path: "/pricing",
      title: "Pricing – Custom Admin Panels",
      description:
        "Pricing for custom admin panels and dashboards: one-time build plus monthly maintenance, scoped per panel type.",
      type: "pricing",
      section: "core",
      entities: ["pricing", "plans", "one-time", "maintenance"],
    },
    {
      path: "/contact",
      title: "Contact Us – Get a Custom Panel Quote",
      description:
        "Contact PanelManage to discuss your custom panel, workflows, and management system requirements.",
      type: "contact",
      section: "core",
      entities: ["contact", "quote", "consultation"],
    },
    {
      path: "/solutions",
      title: "Management Systems We Build",
      description:
        "Solutions hub listing appointment, clinic, employee, scholarship and other management systems we build.",
      type: "solutions_hub",
      section: "solutions",
      entities: ["solutions", "management systems", "use cases"],
    },
    {
      path: "/privacy-policy",
      title: "Privacy Policy",
      description:
        "Privacy Policy for PanelManage and its custom management system services.",
      type: "legal",
      section: "legal",
      entities: ["privacy", "data protection", "policy"],
    },
    {
      path: "/terms-of-service",
      title: "Terms of Service",
      description:
        "Terms under which PanelManage provides custom management system and admin panel services.",
      type: "legal",
      section: "legal",
      entities: ["terms", "service agreement"],
    },
    {
      path: "/responsible-disclosure",
      title: "Responsible Disclosure",
      description:
        "How to report security vulnerabilities to PanelManage responsibly.",
      type: "legal",
      section: "legal",
      entities: ["security", "responsible disclosure"],
    },
    {
      path: "/security",
      title: "Security",
      description:
        "Security practices and measures at PanelManage for application and data security.",
      type: "legal",
      section: "legal",
      entities: ["security", "data security", "application security"],
    },
  ];
}

export function mapSolutionToLlmPage(sol: Solution): LlmPage {
  return {
    path: `/solutions/${sol.slug}`,
    title: sol.seoTitle,
    description: sol.metaDescription,
    type: "solution_detail",
    section: "solutions",
    keywords: [sol.keyword, ...(sol.tags || [])],
    entities: [
      "management system",
      "admin panel",
      "custom panel",
      ...(sol.tags || []),
    ],
    datePublished: sol.datePublished,
  };
}

export function getSolutionPages(): LlmPage[] {
  return SOLUTIONS_ALL.map(mapSolutionToLlmPage);
}

export function getAllPages(): LlmPage[] {
  return [...getStaticPages(), ...getSolutionPages()];
}

// ============================================================================
// ROBOTS & SITEMAP HELPERS
// ============================================================================

export interface RobotsConfig {
  host: string;
  sitemap: string[];
  allow: string[];
  disallow: string[];
}

export function buildRobotsConfig(): RobotsConfig {
  return {
    host: BRAND.url,
    sitemap: [`${BRAND.url}/sitemap.xml`],
    allow: ["/"],
    disallow: ["/api/"],
  };
}

export interface SitemapEntry {
  url: string;
  lastModified: Date | string;
}

export function buildSitemapEntries(): SitemapEntry[] {
  const pages = getAllPages();
  const now = new Date();

  return pages.map((page) => ({
    url: `${BRAND.url}${page.path}`,
    lastModified: page.dateModified
      ? new Date(page.dateModified)
      : page.datePublished
      ? new Date(page.datePublished)
      : now,
  }));
}

// ============================================================================
// GEO + SEMANTIC KEYWORDS (PANEL FOCUS)
// ============================================================================

/**
 * Çok agresif olmayan, basit geo extraction.
 * Örnek: "Istanbul, Turkey", "Berlin-based", "from London"
 */
export function extractGeoEntities(text: string): GeoEntity[] {
  const entities: GeoEntity[] = [];

  const locationPatterns = [
    /in ([A-Z][a-z]+(?:\s[A-Z][a-z]+)*),\s*([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)/gi, // "in Paris, France"
    /([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)-based/gi, // "Berlin-based"
    /from ([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)/gi, // "from Istanbul"
  ];

  locationPatterns.forEach((pattern) => {
    const matches = text.matchAll(pattern);
    for (const match of matches) {
      const city = match[1] as string | undefined;
      const country = (match[2] as string | undefined) ?? undefined;
      entities.push({
        city,
        country,
      });
    }
  });

  return entities;
}

/**
 * Panel kategorisi + geo + intent'ten semantic keyword üretimi.
 * Örnek: "appointment panel Istanbul", "clinic management system Turkey 2025"
 */
export function generateSemanticKeywords(params: {
  panelCategory: string; // appointment / clinic / employee / scholarship ...
  geo: GeoEntity;
  intent?: string; // build, migrate, optimize, replace excel...
  year?: number;
}): string[] {
  const {
    panelCategory,
    geo,
    intent,
    year = new Date().getFullYear(),
  } = params;

  const keywords: string[] = [];
  const geoLabel = [geo.city, geo.state, geo.country].filter(Boolean).join(" ");

  if (geoLabel) {
    keywords.push(
      `${panelCategory} panel ${geoLabel}`,
      `${panelCategory} management system ${geoLabel}`,
      `${panelCategory} admin panel ${geoLabel}`,
      `${panelCategory} software ${geoLabel}`,
      `local ${panelCategory} panel ${geoLabel}`
    );
  } else {
    keywords.push(
      `${panelCategory} panel`,
      `${panelCategory} management system`,
      `${panelCategory} admin panel software`
    );
  }

  if (intent) {
    keywords.push(
      `${intent} ${panelCategory} panel`,
      `${panelCategory} panel ${intent}`,
      `${intent} ${panelCategory} management system ${geoLabel}`.trim()
    );
  }

  keywords.push(
    `${panelCategory} panel ${year}`,
    `${panelCategory} management system ${year}`,
    `best ${panelCategory} panel ${year}`
  );

  return keywords.filter(Boolean);
}

// ============================================================================
// ENTITY CONFIDENCE SCORING
// ============================================================================

/**
 * Entity confidence skoru (0-100).
 * Yüksek skor = LLM için daha önemli.
 */
export function calculateEntityConfidence(params: {
  titleMatch: boolean;
  contentMentions: number;
  geoMatch: boolean;
  categoryMatch: boolean;
}): number {
  const { titleMatch, contentMentions, geoMatch, categoryMatch } = params;
  let score = 0;

  if (titleMatch) score += 40;
  if (geoMatch) score += 30;
  if (categoryMatch) score += 20;
  score += Math.min(contentMentions * 2, 10);

  return Math.min(score, 100);
}

// ============================================================================
// SEMANTIC CLUSTER GENERATION
// ============================================================================

export interface SemanticCluster {
  topic: string;
  entities: SemanticEntity[];
  relatedTopics: string[];
  geoContext: GeoEntity;
}

/**
 * Semantic cluster oluşturma (panel odaklı).
 * İlgili entity'leri gruplar.
 */
export function buildSemanticCluster(params: {
  mainTopic: string;
  relatedTopics: string[];
  geo: GeoEntity;
  keywords: string[];
}): SemanticCluster {
  const { mainTopic, relatedTopics, geo, keywords } = params;

  const entities: SemanticEntity[] = keywords.map((keyword) => ({
    type: inferEntityType(keyword),
    value: keyword,
    confidence: calculateKeywordConfidence(keyword, mainTopic),
  }));

  return {
    topic: mainTopic,
    entities,
    relatedTopics,
    geoContext: geo,
  };
}

function inferEntityType(keyword: string): SemanticEntityKind {
  const lower = keyword.toLowerCase();
  if (
    /\b(appointment|clinic|employee|scholarship|practice|case|workflow|admin panel)\b/.test(
      lower
    )
  )
    return "panel_type";
  if (/\b(panelmanage|panel manage|management system)\b/.test(lower))
    return "solution";
  if (
    /\b(clinic|school|hospital|hr|legal|restaurant|fleet|inventory)\b/.test(
      lower
    )
  )
    return "industry";
  if (/\b(calendar|crm|billing|telehealth|sso|oauth|webhook)\b/.test(lower))
    return "integration";
  if (/\b(build|migrate|optimize|replace|upgrade)\b/.test(lower))
    return "intent";
  return "feature";
}

function calculateKeywordConfidence(
  keyword: string,
  mainTopic: string
): number {
  const lowerKeyword = keyword.toLowerCase();
  const lowerTopic = mainTopic.toLowerCase();

  if (lowerKeyword.includes(lowerTopic)) return 90;

  const topicWords = lowerTopic.split(/\s+/);
  const matchingWords = topicWords.filter((word) =>
    lowerKeyword.includes(word)
  );

  if (matchingWords.length > 0) {
    return 60 + (matchingWords.length / topicWords.length) * 30;
  }

  return 40;
}

// ============================================================================
// AI-FRIENDLY CONTENT STRUCTURE
// ============================================================================

export interface AIContentStructure {
  headline: string;
  snippet: string;
  entities: SemanticEntity[];
  geoSignals: GeoEntity;
  intent: string;
  semanticKeywords: string[];
  internalLinks: Array<{ text: string; url: string; relevance: number }>;
}

/**
 * LLM için optimize edilmiş içerik yapısı.
 * RAG (Retrieval-Augmented Generation) için kullanılır.
 */
export function structureForAI(params: {
  title: string;
  content: string;
  geo: GeoEntity;
  panelCategory: string;
  intent?: string;
  keywords?: string[];
}): AIContentStructure {
  const {
    title,
    content,
    geo,
    panelCategory,
    intent = "informational",
    keywords = [],
  } = params;

  const snippet = content.substring(0, 160).trim() + "...";

  const geoEntities = extractGeoEntities(content);
  const primaryGeo = geoEntities[0] || geo;

  const semanticKeywords = generateSemanticKeywords({
    panelCategory,
    geo: primaryGeo,
    intent,
  });

  const entities: SemanticEntity[] = [
    {
      type: "location",
      value: [primaryGeo.city, primaryGeo.state, primaryGeo.country]
        .filter(Boolean)
        .join(", "),
      confidence: 95,
    },
    { type: "panel_type", value: panelCategory, confidence: 90 },
    { type: "intent", value: intent, confidence: 85 },
    ...keywords.map((k) => ({
      type: "feature" as const,
      value: k,
      confidence: 70,
    })),
  ];

  return {
    headline: title,
    snippet,
    entities,
    geoSignals: primaryGeo,
    intent,
    semanticKeywords: [...new Set([...semanticKeywords, ...keywords])],
    internalLinks: [],
  };
}

// ============================================================================
// EXPORT ALL HELPERS
// ============================================================================

export const LLMHelpers = {
  getStaticPages,
  getSolutionPages,
  getAllPages,
  extractGeoEntities,
  generateSemanticKeywords,
  calculateEntityConfidence,
  buildSemanticCluster,
  structureForAI,
  BRAND,
};

// Export BRAND directly for convenience
export { BRAND };

export default LLMHelpers;
