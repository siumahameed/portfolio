"use client";

import Link from "next/link";
import { Reveal } from "@/lib/Reveal";
import type { ArticleMeta } from "@/lib/articles";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export function BlogCard({ article, index }: { article: ArticleMeta; index: number }) {
  return (
    <Reveal delay={index * 40} className="h-full">
      <article className="card group relative overflow-hidden flex flex-col justify-between h-full p-6 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1">
        <div className="flex flex-1 flex-col">
          <div className="mb-3">
            <span className="badge text-[10px] font-mono">{article.category}</span>
          </div>

          <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors font-heading">
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="mt-2.5 flex-1 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
          <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)] font-mono">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {article.date}
            </span>
            <span>&middot;</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readingTime}
            </span>
          </div>
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
          >
            Read
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
