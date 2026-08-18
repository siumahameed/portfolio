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
      <DataNetwork />
      <StatisticalMotifs />
      <MathFormulas />
      <CursorSpotlight />
    </>
  );
}
