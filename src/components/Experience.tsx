"use client";

import { Reveal } from "@/lib/Reveal";
import { experienceData } from "@/lib/experience";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col">
            <span className="section-label mb-2">EXPERIENCE &amp; LEADERSHIP</span>
            <h2 className="section-title">Where I&apos;ve Contributed</h2>
            <p className="section-subtitle">
              Engineering roles, research initiatives, and team leadership that shaped how I approach complex problem solving.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-px bg-[var(--border)]" />

          <div className="space-y-8">
            {experienceData.map((exp, i) => (
              <Reveal key={exp.id} direction="x" delay={i * 50} className="relative flex gap-6 sm:gap-8">
                {/* Timeline node */}
                <div className="relative z-10 flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] shadow-xs">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--accent)]" />
                </div>

                {/* Content Card */}
                <div className="flex-1 card p-6 transition-all duration-300 hover:border-[var(--border-hover)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-semibold text-[var(--accent)]">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 text-xs font-mono text-[var(--text-tertiary)] self-start sm:self-center">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-[var(--border)] flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag text-[10px]">
                        {tag}
                      </span>
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
