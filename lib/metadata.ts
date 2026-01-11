import type { Metadata } from "next";
import { BRAND } from "@/data/solutions";

export interface MetadataOptions {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  noindex?: boolean;
  robots?: string;
  datePublished?: string;
  dateModified?: string;
  inLanguage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  twitterSite?: string;
}

// Default OG image should use the opengraph-image.tsx route
// Next.js will automatically serve /opengraph-image for each page
const defaultImage = `${BRAND.url}/opengraph-image`;
const defaultImageWidth = 1200;
const defaultImageHeight = 630;

export function createMetadata({
  title,
  description,
  keywords,
  url,
  image = defaultImage,
  imageWidth = defaultImageWidth,
  imageHeight = defaultImageHeight,
  noindex = false,
  robots,
  datePublished,
  dateModified,
  inLanguage = "en",
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterSite,
}: MetadataOptions): Metadata {
  const fullTitle = `${title} - ${BRAND.name}`;
  const canonicalUrl = url || BRAND.url;
  const ogImage = image.startsWith("http") ? image : `${BRAND.url}${image}`;

  // Generate robots meta
  let robotsValue = robots;
  if (!robotsValue) {
    if (noindex) {
      robotsValue = "noindex, nofollow";
    } else {
      robotsValue = "index, follow";
    }
  }

  const openGraphConfig: NonNullable<Metadata["openGraph"]> & {
    publishedTime?: string;
    modifiedTime?: string;
  } = {
    type: ogType,
    siteName: BRAND.name,
    title: fullTitle,
    description,
    url: canonicalUrl,
    images: [
      {
        url: ogImage,
        width: imageWidth,
        height: imageHeight,
        alt: title,
      },
    ],
    locale: inLanguage,
    ...(datePublished && { publishedTime: datePublished }),
    ...(dateModified && { modifiedTime: dateModified }),
  };

  const metadata: Metadata = {
    metadataBase: new URL(BRAND.url),
    title: fullTitle,
    description,
    keywords: keywords ? keywords.split(",").map((k) => k.trim()) : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
      },
    },
    openGraph: openGraphConfig,
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: imageWidth,
          height: imageHeight,
          alt: title,
        },
      ],
      site: twitterSite,
    },
    publisher: BRAND.name,
  };

  return metadata;
}
