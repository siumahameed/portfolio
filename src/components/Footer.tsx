import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container-content py-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold text-[var(--text-primary)] font-heading tracking-tight">
            Sium Ahameed Bhuyan
          </p>
          <p className="text-xs text-[var(--text-tertiary)]">
            Dhaka, Bangladesh
          </p>
          <div className="flex items-center gap-1">
            <a
              href="https://github.com/siumahameed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sium11/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:siumahameed2003@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <p className="text-[11px] text-[var(--text-tertiary)]">
            &copy; {new Date().getFullYear()} Sium Ahameed Bhuyan
          </p>
        </div>
      </div>
    </footer>
  );
}
