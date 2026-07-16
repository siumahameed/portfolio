import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  cover?: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

const articlesDir = path.join(process.cwd(), "src", "content", "articles");

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

  const articles = files.map((file) => {
    const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug: data.slug,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      date: data.date,
      readingTime: data.readingTime,
      cover: data.cover || "",
    };
  });

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
  if (!fs.existsSync(articlesDir)) return null;

  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8");
    const { data, content } = matter(raw);
    if (data.slug === slug) {
      return {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        category: data.category,
        date: data.date,
        readingTime: data.readingTime,
        cover: data.cover || "",
        content,
      };
    }
  }

  return null;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8");
    const { data } = matter(raw);
    return data.slug;
  });
}

export function getAllCategories(): string[] {
  const articles = getAllArticles();
  return [...new Set(articles.map((a) => a.category))].sort();
}
