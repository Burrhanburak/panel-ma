"use client";

import dynamic from "next/dynamic";

const BentoGrid = dynamic(() => import("@/components/BentoGrid"), {
  ssr: false,
});

export default function BentoGridLoader() {
  return <BentoGrid />;
}

