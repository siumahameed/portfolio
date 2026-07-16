"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { Article } from "@/lib/articles";
import type { Components } from "react-markdown";

const components: Components = {
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    const codeStr = String(children).replace(/\n$/, "");
    if (match) {
      return (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          customStyle={{ margin: 0, borderRadius: "0.5rem", fontSize: "0.875rem" }}
        >
          {codeStr}
        </SyntaxHighlighter>
      );
    }
    return (
      <code
        className="rounded bg-[var(--bg-secondary)] px-1.5 py-0.5 text-sm text-[var(--accent)]"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre({ children }) {
    return <div className="my-6 overflow-hidden rounded-lg border border-[var(--border)]">{children}</div>;
  },
  h2({ children }) {
    return <h2 className="mt-10 mb-4 text-xl font-bold text-[var(--text-primary)]">{children}</h2>;
  },
  h3({ children }) {
    return <h3 className="mt-8 mb-3 text-lg font-semibold text-[var(--text-primary)]">{children}</h3>;
  },
  p({ children }) {
    return <p className="mb-4 text-base leading-relaxed text-[var(--text-secondary)]">{children}</p>;
  },
  ul({ children }) {
    return <ul className="mb-4 list-disc space-y-1.5 pl-5 text-base text-[var(--text-secondary)]">{children}</ul>;
  },
  ol({ children }) {
    return <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-base text-[var(--text-secondary)]">{children}</ol>;
  },
  li({ children }) {
    return <li className="text-base leading-relaxed text-[var(--text-secondary)]">{children}</li>;
  },
  blockquote({ children }) {
    return (
      <blockquote className="my-6 border-l-[3px] border-[var(--accent)] bg-[var(--accent-subtle)] py-3 pl-5 pr-4 italic text-[var(--text-secondary)] rounded-r-lg">
        {children}
      </blockquote>
    );
  },
  hr() {
    return <hr className="my-10 border-[var(--border)]" />;
  },
  a({ href, children }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-hover)]"
      >
        {children}
      </a>
    );
  },
  strong({ children }) {
    return <strong className="font-semibold text-[var(--text-primary)]">{children}</strong>;
  },
};

export function ArticleContent({ article }: { article: Article }) {
  return (
    <article>
      {/* Header */}
      <div className="mb-10">
        <span className="badge mb-4 inline-block">{article.category}</span>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          {article.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-[var(--text-secondary)]">
          <span>{article.date}</span>
          <span className="h-1 w-1 rounded-full bg-[var(--text-secondary)]" />
          <span>{article.readingTime}</span>
          <span className="h-1 w-1 rounded-full bg-[var(--text-secondary)]" />
          <span>Sium Ahameed</span>
        </div>
      </div>

      {/* Content */}
      <div className="prose-custom">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
