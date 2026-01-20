"use client";

import dynamic from "next/dynamic";

const GetStartedSection = dynamic(
  () =>
    import("@/components/GetStartedSection").then((mod) => ({
      default: mod.GetStartedSection,
    })),
  {
    ssr: false,
  }
);

export default function GetStartedSectionLoader() {
  return <GetStartedSection />;
}

