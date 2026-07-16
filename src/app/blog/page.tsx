import { getAllArticles, getAllCategories, ArticleMeta } from "@/lib/articles";
import { BlogCard } from "./BlogCard";
import { CategoryFilter } from "./CategoryFilter";

export default function BlogPage() {
  const articles = getAllArticles();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-content">
        {/* Header */}
        <div className="mb-12">
          <div className="divider-accent mb-4" />
          <h1 className="section-title">Blog</h1>
          <p className="section-subtitle mt-3 max-w-xl">
            Articles about AI, machine learning, data science, and everything
            I&apos;m learning while building real-world projects.
          </p>
        </div>

        {/* Categories */}
        <CategoryFilter categories={categories} />

        {/* Article Grid */}
        {articles.length === 0 ? (
          <div className="card-solid flex flex-col items-center gap-4 py-20 text-center">
            <svg className="h-12 w-12 text-[var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <p className="text-[var(--text-secondary)]">No articles yet. Coming soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" id="blog-grid">
            {articles.map((article, i) => (
              <BlogCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
