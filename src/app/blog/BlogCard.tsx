"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import type { ArticleMeta } from "@/lib/articles";
import { ArrowRight } from "lucide-react";

export function BlogCard({ article, index }: { article: ArticleMeta; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);
  const basePath = "/portfolio";

  return (
    <motion.div
      ref={ref}
      className="card group relative overflow-hidden hover:-translate-y-1 hover:border-[var(--accent)]/40 transition-all duration-300"
      initial={{ opacity: 0, y: 12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.04 }}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3">
          <span className="badge text-[10px]">{article.category}</span>
        </div>

        <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors font-heading">
          {article.title}
        </h3>

        <p className="mt-2 flex-1 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
          <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)]">
            <span>{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--text-tertiary)]" />
            <span>{article.readingTime}</span>
          </div>
          <a
            href={`${basePath}/blog/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
          >
            Read
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
