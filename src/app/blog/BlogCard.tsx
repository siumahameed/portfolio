"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import type { ArticleMeta } from "@/lib/articles";

export function BlogCard({ article, index }: { article: ArticleMeta; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);
  const basePath = "/portfolio";

  return (
    <div
      ref={ref}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--accent)]/30"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)] opacity-60" />

      <div className="flex flex-1 flex-col p-6">
        {/* Category */}
        <div className="mb-3">
          <span className="badge text-[10px]">{article.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 flex-1 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
          <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
            <span>{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--text-secondary)]" />
            <span>{article.readingTime}</span>
          </div>
          <a
            href={`${basePath}/blog/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
          >
            Read More
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
