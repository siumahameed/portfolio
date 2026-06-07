"use client";

import { useState, useRef, useMemo } from "react";
import { useInView } from "@/lib/useInView";
import { projectsData } from "@/lib/projects";
import { Section } from "./Section";

const filters = [
  { key: "all", label: "All" },
  { key: "ml", label: "ML" },
  { key: "eda", label: "EDA" },
  { key: "app", label: "Apps" },
] as const;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? projectsData
        : projectsData.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <Section id="projects">
      <div className="mb-12">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Selected projects across machine learning, data analysis, and
          applications.
        </p>
      </div>

      {/* Filters */}
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            role="tab"
            aria-selected={activeFilter === f.key}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              activeFilter === f.key
                ? "bg-[var(--accent)] text-white"
                : "border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/30"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        ref={ref}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(8px)",
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}

const categoryMeta: Record<string, { icon: string; label: string }> = {
  ml: { icon: "⟁", label: "Machine Learning" },
  eda: { icon: "⬡", label: "EDA" },
  app: { icon: "⎔", label: "Application" },
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);
  const meta = categoryMeta[project.category] ?? { icon: "◆", label: project.category };

  return (
    <div
      ref={ref}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent)]/5 hover:border-[var(--accent)]/30"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(8px)",
        transition: `transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 40}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--accent)] opacity-60" />

      {/* Subtle corner glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[var(--accent)]/5 blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--accent-subtle)] text-xs text-[var(--accent)]">
          {meta.icon}
        </span>
        <span className="badge">{meta.label}</span>
      </div>

      <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
        {project.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
        {project.desc}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between pt-3 border-t border-[var(--border)]">
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
              className="group/link flex items-center gap-1 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener"
              className="group/link flex items-center gap-1 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Demo
            </a>
          )}
        </div>
        <span className="text-[10px] font-mono text-[var(--text-secondary)]/40">{String(index + 1).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

function badgeLabel(category: string) {
  switch (category) {
    case "ml":
      return "Machine Learning";
    case "eda":
      return "EDA";
    case "app":
      return "Application";
    default:
      return category;
  }
}
