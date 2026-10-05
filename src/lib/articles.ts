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

let cachedArticles: Article[] | null = null;

function isValidMeta(data: Record<string, unknown>, file: string): data is Record<string, string> {
  const required = ["slug", "title", "excerpt", "category", "date", "readingTime"];
  for (const key of required) {
    if (typeof data[key] !== "string" || !(data[key] as string).trim()) {
      console.warn(`[articles] Skipping ${file}: missing/invalid frontmatter "${key}"`);
      return false;
    }
  }
  return true;
}

function loadArticles(): Article[] {
  if (cachedArticles) return cachedArticles;
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

  const articles: Article[] = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8");
    const { data, content } = matter(raw);
    if (!isValidMeta(data as Record<string, unknown>, file)) continue;
    articles.push({
      slug: data.slug as string,
      title: data.title as string,
      excerpt: data.excerpt as string,
      category: data.category as string,
      date: data.date as string,
      readingTime: data.readingTime as string,
      cover: (data.cover as string) || "",
      content,
    });
  }

  cachedArticles = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return cachedArticles;
}

function toMeta(a: Article): ArticleMeta {
  const { content: _content, ...meta } = a;
  void _content;
  return meta;
}

export function getAllArticles(): ArticleMeta[] {
  return loadArticles().map(toMeta);
}

export function getArticleBySlug(slug: string): Article | null {
  return loadArticles().find((a) => a.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return loadArticles().map((a) => a.slug);
}

export function getAllCategories(): string[] {
  return [...new Set(loadArticles().map((a) => a.category))].sort();
}
