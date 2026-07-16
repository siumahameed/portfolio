"use client";

import { useState } from "react";

export function CategoryFilter({ categories }: { categories: string[] }) {
  const [active, setActive] = useState("All");
  const basePath = "/portfolio";

  const handleClick = (cat: string) => {
    setActive(cat);
    const cards = document.querySelectorAll("#blog-grid > div");
    cards.forEach((card) => {
      const badge = card.querySelector(".badge");
      if (!badge) return;
      if (cat === "All" || badge.textContent === cat) {
        (card as HTMLElement).style.display = "flex";
      } else {
        (card as HTMLElement).style.display = "none";
      }
    });
  };

  const allFilters = ["All", ...categories];

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {allFilters.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
            active === cat
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
