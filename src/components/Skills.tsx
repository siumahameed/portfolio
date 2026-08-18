"use client";

import { Reveal } from "@/lib/Reveal";
import { skillGroups } from "@/lib/skills";

const groupColors: Record<string, string> = {
  "Languages": "#818CF8",
  "Data Science": "#34D399",
  "Machine Learning": "#F59E0B",
  "AI Engineering": "#EC4899",
  "Engineering": "#3B82F6",
};

export function Skills() {
  return (
    <section className="section-padding">
      <div className="container-content">
        <Reveal>
          <p className="section-label mb-3">TECHNICAL STACK</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with across the ML pipeline.
          </p>
        </Reveal>

        {/* Differentiator callout */}
        <Reveal delay={50} className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)]">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)] font-heading">Where statistics meets machine learning</p>
            <p className="text-sm text-[var(--text-secondary)] mt-0.5">My stats background means I don&apos;t treat models as black boxes. I care about assumptions, inference, and whether a model actually works.</p>
          </div>
        </Reveal>

        {/* Skill group cards */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const color = groupColors[group.name] || "var(--accent)";
            return (
              <Reveal key={group.name} delay={40 + i * 40}>
                <div
                  className="group relative rounded-xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30"
                  style={{ boxShadow: "0 0 0 1px var(--border)" }}
                >
                  {/* Color strip */}
                  <div className="h-1 w-full" style={{ background: color }} />

                  <div className="p-5">
                    {/* Group header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold font-mono text-white"
                        style={{ background: color }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm font-semibold text-[var(--text-primary)] font-heading">
                        {group.name}
                      </p>
                    </div>

                    {/* Categories */}
                    <div className="space-y-3">
                      {group.categories.map((cat) => (
                        <div key={cat.name}>
                          <p className="text-[10px] font-mono text-[var(--text-tertiary)] mb-1.5 uppercase tracking-wider">
                            {cat.name}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {cat.skills.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium transition-all duration-200 hover:scale-105"
                                style={{
                                  background: `${color}10`,
                                  color: color,
                                  border: `1px solid ${color}20`,
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}