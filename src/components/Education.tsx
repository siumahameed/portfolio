"use client";

import { Reveal } from "@/lib/Reveal";
import { GraduationCap } from "lucide-react";

const relevantAreas = [
  "Statistics", "Probability", "Statistical Inference",
  "Regression", "Time Series", "Machine Learning", "Data Analysis",
];

export function Education() {
  return (
    <section className="section-padding">
      <div className="container-content">
        <Reveal>
          <p className="section-label mb-3">EDUCATION</p>
          <h2 className="section-title">Academic Foundation</h2>
        </Reveal>

        <Reveal delay={50} className="mt-8 max-w-2xl md:mt-10">
          <div className="card">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)]">
                <GraduationCap className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] font-heading">
                  BSc (Honours) in Statistics
                </h3>
                <p className="text-sm text-[var(--accent)]">Dhaka College</p>

                <p className="text-xs text-[var(--text-tertiary)] mt-1">Expected Graduation: June 2027</p>
              </div>
            </div>
            <div className="mt-5 border-t border-[var(--border)] pt-4">
              <p className="text-xs font-mono text-[var(--accent)] mb-2 uppercase tracking-wider">Relevant Areas</p>
              <div className="flex flex-wrap gap-1.5">
                {relevantAreas.map((area) => (
                  <span key={area} className="tag text-xs">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}