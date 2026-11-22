"use client";

import { AmbientGlow } from "./AmbientGlow";
import { TechnicalGrid } from "./TechnicalGrid";
import { CursorSpotlight } from "./CursorSpotlight";

export function BackgroundSystem() {
  return (
    <>
      <AmbientGlow />
      <TechnicalGrid />
      <CursorSpotlight />
    </>
  );
}
