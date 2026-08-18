import { notFound } from "next/navigation";
import { getAllSlugs, getArticleBySlug } from "@/lib/articles";
import { ArticleContent } from "./ArticleContent";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Sium Ahameed`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container-content max-w-[720px]">
        <ArticleContent article={article} />

        <div className="mt-12 border-t border-[var(--border)] pt-8 text-center">
          <a
            href="/portfolio/blog"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </a>
        </div>
      </div>
    </div>
  );
}
