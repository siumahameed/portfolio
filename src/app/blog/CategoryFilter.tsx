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
          className={`inline-flex items-center rounded-lg px-4 py-2 text-xs font-medium transition-all duration-200 ${
            active === cat
              ? "bg-[var(--accent)] text-white"
              : "border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/30"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
