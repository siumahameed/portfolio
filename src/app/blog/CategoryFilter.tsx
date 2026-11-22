"use client";

export function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}) {
  const allFilters = ["All", ...categories];

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {allFilters.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          aria-pressed={active === cat}
          className={`inline-flex items-center rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
            active === cat
              ? "bg-[var(--accent)] text-white shadow-xs"
              : "border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
