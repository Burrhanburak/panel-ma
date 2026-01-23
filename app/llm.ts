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
  /**
   * Internal links for RAG/GEO optimization
   */
  internalLinks?: Array<{ text: string; url: string; relevance: number }>;
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

// Helper to create absolute URLs (safe fallback)
const baseUrl = BRAND?.url || "https://panelmanage.com";
const abs = (p: string) => (p.startsWith("http") ? p : `${baseUrl}${p}`);

export function getStaticPages(): LlmPage[] {
  return [
    {
      path: "/",
      title: "Custom Panel Management Systems Built Around Your Workflow",
      description:
        "PanelManage builds custom panel management systems for clinics, HR teams, schools, and internal operations — scheduling, approvals, uploads, exports, roles, and reporting.",
      type: "homepage",
      section: "core",
      keywords: [
        "custom panel management system",
        "panel management system",
        "panel management software",
        "custom management system",
        "appointment management system",
        "clinic management system",
        "hr management system",
        "school management system",
        "workflow approvals",
        "role-based access (RBAC)",
        "approvals",
        "uploads & exports",
        "reporting dashboards",
      ],
      entities: ["PanelManage", "panel management systems", "custom workflows"],
      internalLinks: [
        { text: "Solutions", url: abs("/solutions"), relevance: 95 },
        { text: "Pricing", url: abs("/pricing"), relevance: 90 },
        { text: "Contact", url: abs("/contact"), relevance: 85 },
      ],
    },
    {
      path: "/about",
      title: "About PanelManage",
      description:
        "About PanelManage and how we design and build custom panel management systems.",
      type: "about",
      section: "core",
      entities: ["company", "about", "PanelManage"],
      internalLinks: [
        { text: "Solutions", url: abs("/solutions"), relevance: 80 },
        { text: "Pricing", url: abs("/pricing"), relevance: 75 },
        { text: "Contact", url: abs("/contact"), relevance: 70 },
      ],
    },
    {
      path: "/pricing",
      title: "Pricing – Custom Panel Management Systems",
      description:
        "Pricing for custom panel management systems: one-time build plus optional monthly maintenance, scoped by workflow complexity and modules.",
      type: "pricing",
      section: "core",
      entities: ["pricing", "plans", "one-time", "maintenance"],
      internalLinks: [
        { text: "Solutions", url: abs("/solutions"), relevance: 90 },
        { text: "Contact", url: abs("/contact"), relevance: 95 },
        { text: "Home", url: abs("/"), relevance: 70 },
      ],
    },
    {
      path: "/contact",
      title: "Contact Us – Get a Custom Panel Quote",
      description:
        "Contact PanelManage to discuss your custom panel, workflows, and management system requirements.",
      type: "contact",
      section: "core",
      entities: ["contact", "quote", "consultation"],
      internalLinks: [
        { text: "Solutions", url: abs("/solutions"), relevance: 85 },
        { text: "Pricing", url: abs("/pricing"), relevance: 90 },
        { text: "Home", url: abs("/"), relevance: 75 },
      ],
    },
    {
      path: "/solutions",
      title: "Custom Panel Management Systems We Build",
      description:
        "Explore custom panel management systems: appointment, clinic, employee, scholarship, HR, school, case, workflow, inventory and more.",
      type: "solutions_hub",
      section: "solutions",
      entities: ["solutions", "panel management systems", "use cases"],
      internalLinks: [
        { text: "Pricing", url: abs("/pricing"), relevance: 90 },
        { text: "Contact", url: abs("/contact"), relevance: 85 },
        { text: "Home", url: abs("/"), relevance: 80 },
      ],
    },
    {
      path: "/privacy-policy",
      title: "Privacy Policy",
      description:
        "Privacy Policy for PanelManage and its custom panel management system services.",
      type: "legal",
      section: "legal",
      entities: ["privacy", "data protection", "policy"],
      internalLinks: [
        { text: "Home", url: abs("/"), relevance: 70 },
        { text: "Terms of Service", url: abs("/terms-of-service"), relevance: 80 },
        { text: "Security", url: abs("/security"), relevance: 75 },
      ],
    },
    {
      path: "/terms-of-service",
      title: "Terms of Service",
      description:
        "Terms under which PanelManage provides custom panel management system services.",
      type: "legal",
      section: "legal",
      entities: ["terms", "service agreement"],
      internalLinks: [
        { text: "Home", url: abs("/"), relevance: 70 },
        { text: "Privacy Policy", url: abs("/privacy-policy"), relevance: 80 },
        { text: "Security", url: abs("/security"), relevance: 75 },
      ],
    },
    {
      path: "/responsible-disclosure",
      title: "Responsible Disclosure",
      description:
        "How to report security vulnerabilities to PanelManage responsibly.",
      type: "legal",
      section: "legal",
      entities: ["security", "responsible disclosure"],
      internalLinks: [
        { text: "Home", url: abs("/"), relevance: 70 },
        { text: "Security", url: abs("/security"), relevance: 90 },
        { text: "Contact", url: abs("/contact"), relevance: 75 },
      ],
    },
    {
      path: "/security",
      title: "Security",
      description:
        "Security practices and measures at PanelManage for application and data security.",
      type: "legal",
      section: "legal",
      entities: ["security", "data security", "application security"],
      internalLinks: [
        { text: "Home", url: abs("/"), relevance: 70 },
        { text: "Privacy Policy", url: abs("/privacy-policy"), relevance: 80 },
        { text: "Responsible Disclosure", url: abs("/responsible-disclosure"), relevance: 85 },
      ],
    },
  ];
}

export function mapSolutionToLlmPage(sol: Solution): LlmPage {
  // Find related solutions based on panel type (slug suffix pattern) or tag overlap
  // Extract core panel type from slug (e.g., "mental-health-practice-management-system" -> "practice")
  const slug = sol.slug;
  const core =
    slug.includes("-management-system")
      ? slug.split("-management-system")[0].split("-").pop() || slug.split("-")[0]
      : slug.includes("-software")
      ? slug.split("-software")[0].split("-").pop() || slug.split("-")[0]
      : slug.split("-")[0];
  
  const relatedSolutions = SOLUTIONS_ALL.filter((s) => {
    if (s.slug === sol.slug) return false;
    
    // Match by core panel type in slug
    if (s.slug.includes(core)) return true;
    
    // Match by tag overlap
    if (sol.tags && s.tags) {
      const solTags = new Set(sol.tags.map((t) => t.toLowerCase()));
      const sTags = new Set(s.tags.map((t) => t.toLowerCase()));
      const overlap = [...solTags].filter((t) => sTags.has(t));
      if (overlap.length > 0) return true;
    }
    
    return false;
  })
    .slice(0, 3)
    .map((s) => ({
      text: s.pageName,
      url: abs(`/solutions/${s.slug}`),
      relevance: 75,
    }));

  return {
    path: `/solutions/${sol.slug}`,
    title: sol.seoTitle,
    description: sol.metaDescription,
    type: "solution_detail",
    section: "solutions",
    keywords: [sol.keyword, ...(sol.tags || [])],
    entities: [
      "panel management system",
      "custom panel",
      ...(sol.tags || []),
    ],
    datePublished: sol.datePublished,
      internalLinks: [
        { text: "All Solutions", url: abs(`/solutions`), relevance: 90 },
        { text: "Pricing", url: abs(`/pricing`), relevance: 85 },
        { text: "Contact", url: abs(`/contact`), relevance: 80 },
        { text: "Home", url: abs(`/`), relevance: 70 },
        ...relatedSolutions,
      ],
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
  // Use BRAND.buildTime from env (CI/CD) or fallback to fixed date
  // Type-safe access for optional buildTime
  const buildTimeStr = ("buildTime" in BRAND ? BRAND.buildTime : undefined) as
    | string
    | undefined;
  const buildTime = buildTimeStr
    ? new Date(buildTimeStr)
    : new Date("2025-01-20T00:00:00Z");

  return pages.map((page) => ({
    url: `${BRAND.url}${page.path}`,
    lastModified: page.dateModified
      ? new Date(page.dateModified)
      : page.datePublished
      ? new Date(page.datePublished)
      : buildTime,
  }));
}

// ============================================================================
// GEO + SEMANTIC KEYWORDS (PANEL FOCUS)
// ============================================================================

/**
 * Improved geo extraction with broader patterns and stricter validation.
 * Handles: "New York", "Los Angeles", "United Kingdom", "Istanbul, Turkey", "Berlin-based", etc.
 * Prevents false positives from long sentences.
 */
export function extractGeoEntities(text: string): GeoEntity[] {
  const entities: GeoEntity[] = [];
  const seen = new Set<string>();

  const safe = (s?: string) => (s ? s.trim().replace(/\s+/g, " ") : undefined);

  const knownCountries = new Set([
    "USA",
    "United States",
    "United States of America",
    "United Kingdom",
    "UK",
    "Turkey",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Netherlands",
    "Canada",
    "Australia",
    "New Zealand",
    "Japan",
    "South Korea",
    "China",
    "India",
    "Brazil",
    "Mexico",
    "Argentina",
  ]);

  const locationPatterns = [
    // "in Paris, France" or "in New York, USA" - strict length limits
    /in\s+([A-Z][a-zA-Z\s]{1,30}),\s*([A-Z][a-zA-Z\s]{1,40})/gi,
    // "Berlin-based" or "New York-based"
    /([A-Z][a-zA-Z\s]{1,30})-based/gi,
    // "from Istanbul" or "from Los Angeles"
    /from\s+([A-Z][a-zA-Z\s]{1,30})/gi,
    // Standalone major cities/countries (including short codes)
    /\b(New York|Los Angeles|San Francisco|United Kingdom|United States|United States of America|Istanbul|Ankara|London|Berlin|Paris|Tokyo|Sydney|Toronto|Vancouver|Melbourne|Brisbane|Perth|Adelaide|Auckland|Wellington|Dublin|Amsterdam|Barcelona|Madrid|Rome|Milan|Vienna|Zurich|Stockholm|Copenhagen|Oslo|Helsinki|Warsaw|Prague|Budapest|Bucharest|Sofia|Athens|Lisbon|Brussels|Luxembourg|Reykjavik|Riga|Tallinn|Vilnius|USA|UK|UAE)\b/gi,
  ];

  locationPatterns.forEach((pattern, idx) => {
    const matches = text.matchAll(pattern);
    for (const match of matches) {
      const city = safe(match[1]);
      const country = safe(match[2]);
      
      // Validate city length (prevent false positives like "Custom Panel Management Systems")
      if (city && city.length > 0 && city.length <= 40) {
        const key = city.toLowerCase();
        
        // For standalone patterns (idx 3), check if it's a known country or city
        if (idx === 3 && knownCountries.has(city)) {
          if (!seen.has(key)) {
            seen.add(key);
            entities.push({ country: city });
          }
        } else if (!seen.has(key)) {
          seen.add(key);
          // Validate country if present
          const validCountry =
            country &&
            country.length <= 50 &&
            (country.split(" ").length <= 3 || knownCountries.has(country));
          
          entities.push({
            city,
            country: validCountry ? country : undefined,
          });
        }
      }
    }
  });

  return entities;
}

/**
 * Panel kategorisi + geo + intent'ten semantic keyword üretimi.
 * More natural, less spammy keywords.
 * Örnek: "appointment panel management system Istanbul", "clinic management system Turkey"
 */
export function generateSemanticKeywords(params: {
  panelCategory: string; // appointment / clinic / employee / scholarship ...
  geo: GeoEntity;
  intent?: string; // build, migrate, optimize, replace excel...
  year?: number;
  includeYear?: boolean; // Optional year inclusion (default: false)
}): string[] {
  const {
    panelCategory,
    geo,
    intent,
    year = new Date().getFullYear(),
    includeYear = false,
  } = params;

  // Sanitize panelCategory: trim and normalize whitespace
  const cat = panelCategory.trim().replace(/\s+/g, " ");

  const keywords: string[] = [];
  const geoLabel = [geo.city, geo.state, geo.country].filter(Boolean).join(" ");

  const base = [
    `${cat} panel management system`,
    `${cat} management system`,
    `${cat} panel software`,
  ];

  if (geoLabel) {
    base.forEach((k) => keywords.push(`${k} ${geoLabel}`));
  } else {
    keywords.push(...base);
  }

  if (intent) {
    keywords.push(`${intent} ${cat} management system`);
    if (geoLabel) {
      keywords.push(`${intent} ${cat} management system ${geoLabel}`);
    }
  }

  if (includeYear) {
    keywords.push(
      `${cat} management system ${year}`,
      `${cat} panel ${year}`
    );
  }

  return [...new Set(keywords.map((k) => k.trim()).filter(Boolean))];
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
  
  // Solution: Only brand/product name
  if (/\b(panelmanage|panel manage)\b/.test(lower)) return "solution";
  
  // Panel types: "X management system / panel" categories
  if (
    /\b(appointment|clinic|employee|scholarship|practice|case|workflow|inventory|hr|school|property|fleet|maintenance|vendor|claims)\b/.test(
      lower
    )
  )
    return "panel_type";
  
  // Industry: business sectors only (exclude management system terms)
  if (
    /\b(clinic|school|hospital|law firm|restaurant|salon|gym)\b/.test(lower)
  )
    return "industry";
  
  // Integration: third-party tools/services
  if (/\b(calendar|crm|billing|telehealth|sso|oauth|webhook|zapier|slack|stripe)\b/.test(lower))
    return "integration";
  
  // Intent: action verbs
  if (/\b(build|migrate|optimize|replace|upgrade|automate)\b/.test(lower))
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
    includeYear: false, // Year keywords optional, default false
  });

  // Build entities - only add location if it exists
  const locValue = [primaryGeo.city, primaryGeo.state, primaryGeo.country]
    .filter(Boolean)
    .join(", ");

  const entities: SemanticEntity[] = [];
  
  // Only add location entity if value exists
  if (locValue) {
    entities.push({
      type: "location",
      value: locValue,
      confidence: 80, // Lower confidence since geo extraction may have false positives
    });
  }
  
  // Add other entities
  if (panelCategory) {
    entities.push({ type: "panel_type", value: panelCategory, confidence: 90 });
  }
  if (intent) {
    entities.push({ type: "intent", value: intent, confidence: 85 });
  }
  entities.push(
    ...keywords.map((k) => ({
      type: "feature" as const,
      value: k,
      confidence: 70,
    }))
  );

  // Generate internal links based on page type and content
  const internalLinks: Array<{ text: string; url: string; relevance: number }> = [];
  
  // Always include core pages with absolute URLs
  internalLinks.push(
    { text: "Solutions", url: abs("/solutions"), relevance: 85 },
    { text: "Pricing", url: abs("/pricing"), relevance: 80 },
    { text: "Contact", url: abs("/contact"), relevance: 75 }
  );

  // Add related solution pages if panelCategory matches
  if (panelCategory) {
    // Normalize panelCategory to tokens (first 2 words)
    const coreTokens = panelCategory
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .slice(0, 2);
    
    const relatedSolutions = SOLUTIONS_ALL.filter((s) =>
      coreTokens.some((token) => s.slug.includes(token))
    )
      .slice(0, 2)
      .map((s) => ({
        text: s.pageName,
        url: abs(`/solutions/${s.slug}`),
        relevance: 70,
      }));
    internalLinks.push(...relatedSolutions);
  }

  return {
    headline: title,
    snippet,
    entities,
    geoSignals: primaryGeo,
    intent,
    semanticKeywords: [...new Set([...semanticKeywords, ...keywords])],
    internalLinks,
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

/**
 * Get complete LLM map - single source of truth for AI/LLM consumption
 * Used by: robots/sitemap, LLM endpoints (e.g., /llm.json), RAG pipelines
 */
export function getLlmMap() {
  return {
    brand: BRAND,
    pages: getAllPages(),
    sitemap: buildSitemapEntries(),
    robots: buildRobotsConfig(),
  };
}

export default LLMHelpers;
