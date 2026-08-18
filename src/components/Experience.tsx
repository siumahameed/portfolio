"use client";

import { Reveal } from "@/lib/Reveal";
import { experienceData } from "@/lib/experience";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-content">
        <Reveal>
          <p className="section-label mb-3">EXPERIENCE</p>
          <h2 className="section-title">Where I&apos;ve Contributed</h2>
          <p className="section-subtitle">
            Leadership and collaborative roles that shaped how I approach problems.
          </p>
        </Reveal>

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="space-y-6 md:space-y-8">
            {experienceData.map((exp, i) => (
              <Reveal key={exp.id} direction="x" delay={50 + i * 50} className="relative flex gap-4 md:gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)]">
                  <Briefcase className="h-3.5 w-3.5 md:h-4 md:w-4 text-[var(--accent)]" />
                </div>

                {/* Content */}
                <div className="flex-1 card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--text-primary)] font-heading">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-[var(--accent)]">{exp.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-tertiary)]">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag text-[10px]">{tag}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}