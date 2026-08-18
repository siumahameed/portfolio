"use client";

import { useState } from "react";
import { Reveal } from "@/lib/Reveal";
import { currentlyExploring } from "@/lib/skills";
import { ChevronRight } from "lucide-react";

export function CurrentlyExploring() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container-content">
        <Reveal>
          <p className="section-label mb-3">LEARNING</p>
          <h2 className="section-title">Currently Exploring</h2>
          <p className="section-subtitle">
            Actively learning and experimenting with these areas.
          </p>
        </Reveal>

        <div className="mt-6 space-y-2 md:mt-10">
          {currentlyExploring.map((item, i) => (
            <Reveal key={item.topic} delay={40 + i * 30}>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                aria-expanded={expanded === i}
                className="w-full flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4 text-left transition-all duration-200 hover:border-[var(--accent)]/40"
              >
                <ChevronRight
                  className={`h-4 w-4 text-[var(--accent)] transition-transform duration-200 ${
                    expanded === i ? "rotate-90" : ""
                  }`}
                />
                <span className="text-sm font-medium text-[var(--text-primary)] font-heading">
                  {item.topic}
                </span>
              </button>
              <div
                className={`ml-9 overflow-hidden transition-all duration-200 ease-in-out ${
                  expanded === i ? "mt-2 mb-1 max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-wrap gap-1.5 pb-1">
                  {item.items.map((sub) => (
                    <span key={sub} className="tag text-xs">{sub}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}