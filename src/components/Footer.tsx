import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, KaggleIcon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-card-subtle)]/60">
      <div className="container-content py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start">
            <Link
              href="/"
              className="text-base font-bold tracking-tight text-[var(--text-primary)] font-heading"
            >
              Sium Ahameed Bhuyan
            </Link>
            <p className="text-xs text-[var(--text-tertiary)] mt-1">
              Statistics &times; Machine Learning &times; AI Systems &middot; Dhaka, Bangladesh
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/siumahameed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sium11/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.kaggle.com/siumahameedbhuiyain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
              aria-label="Kaggle"
            >
              <KaggleIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:siumahameed2003@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="#main-content"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] text-center text-xs text-[var(--text-tertiary)]">
          <p>&copy; {new Date().getFullYear()} Sium Ahameed Bhuyan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
