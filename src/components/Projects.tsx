"use client";

import { useState, useRef, useMemo } from "react";
import { useInView } from "@/lib/useInView";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/lib/projects";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/lib/icons";

const filters = [
  { key: "all", label: "All" },
  { key: "ml", label: "ML" },
  { key: "nlp", label: "NLP" },
  { key: "data", label: "Data Science" },
  { key: "app", label: "Applications" },
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

  const featured = useMemo(() => filtered.filter((p) => p.featured), [filtered]);
  const archive = useMemo(() => filtered.filter((p) => !p.featured), [filtered]);

  return (
    <section id="projects" className="section-padding">
      <div ref={ref} className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <p className="section-label mb-3">FEATURED WORK</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Selected projects across machine learning, data analysis, and applications.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mt-8 mb-10 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 8 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25, delay: 0.05 }}
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              aria-pressed={activeFilter === f.key}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeFilter === f.key
                  ? "bg-[var(--accent)] text-white"
                  : "border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects - Large cards */}
        {featured.length > 0 && (
          <div className="space-y-4 mb-12">
            {featured.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.05 + i * 0.04 }}
              >
                <FeaturedProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Archive Projects - Smaller grid */}
        {archive.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-[var(--border)]" />
              <p className="section-label">PROJECT ARCHIVE</p>
              <div className="h-px flex-1 bg-[var(--border)]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {archive.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.25, delay: 0.06 + i * 0.03 }}
                >
                  <ArchiveProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, index }: { project: (typeof projectsData)[0]; index: number }) {
  return (
    <div className="card group relative overflow-hidden hover:border-[var(--accent)]/40 transition-all duration-300">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl font-bold font-mono text-[var(--accent)] opacity-30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="tag text-[10px]">{tag}</span>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              {project.description}
            </p>
            {project.metrics && (
              <div className="mt-4 flex flex-wrap gap-4">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-xs text-[var(--text-tertiary)] font-mono">{m.label}</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{m.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 md:ml-6">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchiveProjectCard({ project }: { project: (typeof projectsData)[0] }) {
  return (
    <div className="card group relative overflow-hidden hover:-translate-y-1 hover:border-[var(--accent)]/40 transition-all duration-300">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="p-5">
        <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors font-heading">
          {project.title}
        </h3>
        <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] font-mono text-[var(--text-tertiary)]">{tag}</span>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md px-2 py-1.5 text-xs text-[var(--text-tertiary)] transition-colors hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)]">
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md px-2 py-1.5 text-xs text-[var(--text-tertiary)] transition-colors hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)]">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
