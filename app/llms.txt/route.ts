import { NextResponse } from "next/server";
import { getAllPages, BRAND } from "../llm";

/**
 * LLMS.TXT - AI/LLM Site Map (Vercel-style)
 *
 * This endpoint provides a machine-readable site map for LLMs
 * (ChatGPT, Perplexity, Google AI, etc.) to understand the PanelManage site structure.
 *
 * Format: Plain text with structured sections
 * Access: GET /llms.txt
 */
export async function GET() {
  const pages = getAllPages();

  // Build text output similar to Vercel's llms.txt format
  const lines: string[] = [];

  // Header
  lines.push("# PanelManage - LLM Site Map");
  lines.push("");
  lines.push(`Brand: ${BRAND.name}`);
  lines.push(`URL: ${BRAND.url}`);
  lines.push(`Total Pages: ${pages.length}`);
  lines.push("");
  lines.push("---");
  lines.push("");

  // Core Pages
  lines.push("## Core Pages");
  lines.push("");
  const corePages = pages.filter((p) => p.section === "core");
  corePages.forEach((page) => {
    lines.push(`### ${page.path}`);
    lines.push(`Title: ${page.title}`);
    lines.push(`Description: ${page.description}`);
    lines.push(`Type: ${page.type}`);
    if (page.keywords && page.keywords.length > 0) {
      lines.push(`Keywords: ${page.keywords.join(", ")}`);
    }
    if (page.entities && page.entities.length > 0) {
      lines.push(`Entities: ${page.entities.join(", ")}`);
    }
    lines.push("");
  });

  // Solutions Hub
  lines.push("---");
  lines.push("");
  lines.push("## Solutions Hub");
  lines.push("");
  const solutionsHub = pages.find((p) => p.type === "solutions_hub");
  if (solutionsHub) {
    lines.push(`### ${solutionsHub.path}`);
    lines.push(`Title: ${solutionsHub.title}`);
    lines.push(`Description: ${solutionsHub.description}`);
    lines.push("");
  }

  // Solution Detail Pages
  lines.push("---");
  lines.push("");
  lines.push("## Solution Detail Pages");
  lines.push("");
  const solutionPages = pages.filter((p) => p.type === "solution_detail");
  solutionPages.forEach((page) => {
    lines.push(`### ${page.path}`);
    lines.push(`Title: ${page.title}`);
    lines.push(`Description: ${page.description}`);
    if (page.keywords && page.keywords.length > 0) {
      lines.push(`Keywords: ${page.keywords.join(", ")}`);
    }
    if (page.datePublished) {
      lines.push(`Published: ${page.datePublished}`);
    }
    lines.push("");
  });

  // Legal Pages
  lines.push("---");
  lines.push("");
  lines.push("## Legal Pages");
  lines.push("");
  const legalPages = pages.filter((p) => p.type === "legal");
  legalPages.forEach((page) => {
    lines.push(`### ${page.path}`);
    lines.push(`Title: ${page.title}`);
    lines.push(`Description: ${page.description}`);
    lines.push("");
  });

  // Footer
  lines.push("---");
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`For LLM consumption: Use this map to understand PanelManage site structure.`);

  const text = lines.join("\n");

  return new NextResponse(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
