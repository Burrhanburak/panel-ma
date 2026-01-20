"use client";

import dynamic from "next/dynamic";

const Features = dynamic(
  () => import("@/components/FramerFeatures").then((mod) => ({ default: mod.Features })),
  {
    ssr: false,
  }
);

export default function FeaturesLoader() {
  return <Features />;
}

