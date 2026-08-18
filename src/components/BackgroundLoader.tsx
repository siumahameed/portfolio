"use client";

import dynamic from "next/dynamic";

const BackgroundSystem = dynamic(
  () => import("@/components/background/BackgroundSystem").then((mod) => mod.BackgroundSystem),
  { ssr: false }
);

export function BackgroundLoader() {
  return <BackgroundSystem />;
}
