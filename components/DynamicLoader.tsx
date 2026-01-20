"use client";

import dynamic from "next/dynamic";

/**
 * Client component wrapper for dynamic imports with ssr: false
 * Used for below-the-fold components that don't need SSR
 */
export function createDynamicLoader<T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) {
  return dynamic(importFn, {
    ssr: false,
  });
}

