import { getAllArticles, getAllCategories } from "@/lib/articles";
import { BlogContent } from "./BlogContent";

export default function BlogPage() {
  const articles = getAllArticles();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-content">
        <div className="mb-12">
          <p className="section-label mb-3">BLOG</p>
          <h1 className="section-title">Notes from the Lab</h1>
          <p className="section-subtitle mt-3 max-w-xl">
            Articles about AI, machine learning, data science, and everything
            I&apos;m learning while building real-world projects.
          </p>
        </div>

        <BlogContent articles={articles} categories={categories} />
      </div>
    </div>
  );
}
