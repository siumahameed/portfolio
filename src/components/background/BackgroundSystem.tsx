"use client";

import { AmbientGlow } from "./AmbientGlow";
import { TechnicalGrid } from "./TechnicalGrid";
import { DataNetwork } from "./DataNetwork";
import { StatisticalMotifs } from "./StatisticalMotifs";
import { MathFormulas } from "./MathFormulas";
import { CursorSpotlight } from "./CursorSpotlight";

export function BackgroundSystem() {
  return (
    <>
      <AmbientGlow />
      <TechnicalGrid />
      {/* Animated SVG layers are skipped on small screens for mobile performance */}
      <div className="hidden md:block">
        <DataNetwork />
        <StatisticalMotifs />
        <MathFormulas />
      </div>
      <CursorSpotlight />
    </>
  );
}