"use client";

import { useState, useMemo } from "react";
import { Reveal } from "@/lib/Reveal";
import { projectsData, type Project } from "@/lib/projects";
import { ExternalLink, Search, ArrowUpRight, ChevronDown, Cpu } from "lucide-react";
import { GithubIcon } from "@/lib/icons";

const filters = [
  { key: "all", label: "All Projects" },
  { key: "app", label: "Full-Stack SaaS" },
  { key: "ml", label: "Machine Learning" },
  { key: "data", label: "Data Science & EDA" },
  { key: "nlp", label: "NLP & Language" },
] as const;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesFilter =
        activeFilter === "all"
          ? true
          : activeFilter === "app"
          ? p.category === "app" || p.category === "ai"
          : p.category === activeFilter;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesFilter;

      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        (p.solution && p.solution.toLowerCase().includes(q));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const featured = useMemo(() => filtered.filter((p) => p.featured), [filtered]);
  const archive = useMemo(() => filtered.filter((p) => !p.featured), [filtered]);

  return (
    <section id="projects" className="section-padding">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col">
            <span className="section-label mb-2">PORTFOLIO</span>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">
              Production SaaS systems, machine learning classifiers, statistical exploratory platforms, and AI applications.
            </p>
          </div>
        </Reveal>

        {/* Filter Bar & Search */}
        <Reveal delay={40} className="mt-8 mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects">
              {filters.map((f) => {
                const count =
                  f.key === "all"
                    ? projectsData.length
                    : f.key === "app"
                    ? projectsData.filter((p) => p.category === "app" || p.category === "ai").length
                    : projectsData.filter((p) => p.category === f.key).length;

                return (
                  <button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key)}
                    aria-pressed={activeFilter === f.key}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      activeFilter === f.key
                        ? "bg-[var(--accent)] text-white shadow-xs"
                        : "border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                    }`}
                  >
                    <span>{f.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                        activeFilter === f.key ? "bg-white/20 text-white" : "bg-[var(--bg-secondary)] text-[var(--text-tertiary)]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Keyword Search */}
            <div className="relative min-w-[240px] md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[var(--text-tertiary)]" />
              <input
                type="text"
                placeholder="Filter by tech (e.g. XGBoost, Groq)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-card)] pl-9 pr-3 py-1.5 text-xs text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:outline-none"
              />
            </div>
          </div>
        </Reveal>

        {/* Featured Projects: Large Architectural Cards */}
        {featured.length > 0 && (
          <div className="space-y-6 mb-16">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 50}>
                <FeaturedProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        )}

        {/* Archive Projects */}
        {archive.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-[var(--border)]" />
              <h3 className="section-label">ADDITIONAL WORK &amp; EXPERIMENTS</h3>
              <div className="h-px flex-1 bg-[var(--border)]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {archive.map((project, i) => (
                <Reveal key={project.slug} delay={i * 30}>
                  <ArchiveProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="card py-16 text-center">
            <p className="text-sm text-[var(--text-secondary)]">No projects match your search or filter.</p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-semibold text-[var(--accent)] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const [showDeepDive, setShowDeepDive] = useState(false);

  return (
    <div className="card group relative overflow-hidden p-6 sm:p-8 transition-all duration-300 hover:border-[var(--border-hover)]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header Row */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-sm font-bold text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="badge text-[11px] font-mono">
              {project.category === "app"
                ? "Full-Stack SaaS"
                : project.category === "ml"
                ? "Machine Learning"
                : project.category === "data"
                ? "Data Analytics"
                : "NLP & AI"}
            </span>
            {project.slug === "datatistics" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Flagship Platform
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-[var(--text-primary)] font-heading transition-colors group-hover:text-[var(--accent)]">
            {project.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Solution & Architecture context */}
          {project.solution && (
            <div className="mt-4 rounded-lg bg-[var(--bg-card-subtle)] p-4 border border-[var(--border)] text-xs text-[var(--text-secondary)] leading-relaxed">
              <span className="font-semibold text-[var(--text-primary)]">Architecture &amp; Impact: </span>
              {project.solution}
            </div>
          )}

          {/* Key Metrics KPI bar */}
          {project.metrics && (
            <div className="mt-5 grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 pt-4 border-t border-[var(--border)]">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                    {m.label}
                  </span>
                  <span className="text-base font-bold font-mono text-[var(--text-primary)]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech stack pills */}
          <div className="mt-5 flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag text-[10px]">
                {tag}
              </span>
            ))}
            <button
              onClick={() => setShowDeepDive(!showDeepDive)}
              className="ml-auto inline-flex items-center gap-1 text-[11px] font-mono text-[var(--accent)] hover:underline pt-1"
            >
              <span>{showDeepDive ? "Hide System Specs" : "Inspect System Specs"}</span>
              <ChevronDown className={`h-3 w-3 transition-transform ${showDeepDive ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Expandable Architecture Drawer */}
          {showDeepDive && (
            <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] p-4 text-xs space-y-2 animate-in fade-in duration-200">
              <div className="font-mono text-[var(--text-primary)] font-bold flex items-center gap-2">
                <Cpu className="h-4 w-4 text-[var(--accent)]" /> Technical Specification &amp; Pipeline Flow
              </div>
              <div className="grid gap-2 sm:grid-cols-2 text-[var(--text-secondary)] pt-1">
                <div>
                  <span className="font-semibold text-[var(--text-primary)]">Backend Framework:</span>{" "}
                  {project.tags.includes("FastAPI") ? "Async FastAPI (Python 3.11)" : "Python & Scikit-learn Pipeline"}
                </div>
                <div>
                  <span className="font-semibold text-[var(--text-primary)]">Validation Strategy:</span>{" "}
                  Stratified 5-Fold Cross-Validation, p-value verification
                </div>
                <div>
                  <span className="font-semibold text-[var(--text-primary)]">Inference Latency:</span>{" "}
                  Optimized for sub-100ms response time
                </div>
                <div>
                  <span className="font-semibold text-[var(--text-primary)]">Deployment:</span>{" "}
                  Containerized on Cloud Infrastructure / SSL Monitored
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-2.5 shrink-0 pt-2 lg:pt-0 w-full sm:w-auto lg:w-36">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs w-full justify-center px-4 py-2"
            >
              Live Demo
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs w-full justify-center px-4 py-2"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ArchiveProjectCard({ project }: { project: Project }) {
  return (
    <div className="card h-full p-5 flex flex-col justify-between transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono uppercase text-[var(--text-tertiary)]">
            {project.category.toUpperCase()}
          </span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <h4 className="text-base font-bold text-[var(--text-primary)] font-heading transition-colors hover:text-[var(--accent)]">
          {project.title}
        </h4>

        <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--border)]">
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag text-[9px]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-[11px] font-medium text-[var(--accent)]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              Inspect Code
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline ml-auto"
            >
              Live Demo
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
