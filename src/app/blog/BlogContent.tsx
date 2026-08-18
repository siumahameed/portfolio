"use client";

import { useState } from "react";
import { BlogCard } from "./BlogCard";
import { CategoryFilter } from "./CategoryFilter";
import type { ArticleMeta } from "@/lib/articles";

export function BlogContent({ articles, categories }: { articles: ArticleMeta[]; categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <CategoryFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />

      {filtered.length === 0 ? (
        <div className="card flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-[var(--text-secondary)]">No articles in this category yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (
            <BlogCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      )}
    </>
  );
}
