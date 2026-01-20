"use client";

import dynamic from "next/dynamic";

const RevealOnScroll = dynamic(() => import("@/components/RevealOnScroll"), {
  ssr: false,
});

export default function RevealOnScrollLoader() {
  return <RevealOnScroll />;
}

