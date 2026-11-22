"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import {
  Search,
  FileText,
  Briefcase,
  Layers,
  GraduationCap,
  Code2,
  Mail,
  Sun,
  Moon,
  Compass,
  X,
  Sparkles,
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Actions" | "Preferences";
  icon: typeof Search;
  action: () => void;
  shortcut?: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { theme, toggle } = useTheme();

  const togglePalette = useCallback(() => {
    setOpen((prev) => !prev);
    setQuery("");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        togglePalette();
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, togglePalette]);

  const scrollTo = (id: string) => {
    setOpen(false);
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const commands: CommandItem[] = [
    {
      id: "projects",
      title: "View Featured Projects",
      category: "Navigation",
      icon: Layers,
      action: () => scrollTo("projects"),
    },
    {
      id: "datatistics-live",
      title: "Launch DataTistics (5,000+ Users SaaS)",
      category: "Projects",
      icon: Sparkles,
      action: () => {
        window.open("https://datatistics.app", "_blank");
        setOpen(false);
      },
    },
    {
      id: "skills",
      title: "Explore Technical Stack & Skills",
      category: "Navigation",
      icon: Code2,
      action: () => scrollTo("skills"),
    },
    {
      id: "about",
      title: "About Sium & Statistical Philosophy",
      category: "Navigation",
      icon: Compass,
      action: () => scrollTo("about"),
    },
    {
      id: "experience",
      title: "Experience & Leadership Timeline",
      category: "Navigation",
      icon: Briefcase,
      action: () => scrollTo("experience"),
    },
    {
      id: "education",
      title: "Academic Background (BSc Statistics)",
      category: "Navigation",
      icon: GraduationCap,
      action: () => scrollTo("education"),
    },
    {
      id: "resume",
      title: "Download Resume / CV (PDF)",
      category: "Actions",
      icon: FileText,
      action: () => {
        const link = document.createElement("a");
        link.href = "/files/CV.pdf";
        link.download = "Sium_Ahameed_CV.pdf";
        link.click();
        setOpen(false);
      },
      shortcut: "PDF",
    },
    {
      id: "contact",
      title: "Connect / WhatsApp / Email",
      category: "Actions",
      icon: Mail,
      action: () => scrollTo("contact"),
    },
    {
      id: "theme",
      title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      category: "Preferences",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        toggle();
        setOpen(false);
      },
    },
  ];

  const filtered = query.trim()
    ? commands.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  return (
    <>
      {/* Floating Shortcut Trigger Button (Desktop Only, Bottom Right) */}
      <button
        onClick={togglePalette}
        className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/90 px-3.5 py-2 text-xs font-mono font-medium text-[var(--text-secondary)] shadow-lg backdrop-blur-md transition-all duration-200 hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] hover:scale-105"
        aria-label="Open Command Menu"
      >
        <Search className="h-3.5 w-3.5 text-[var(--accent)]" />
        <span>Quick Menu</span>
        <kbd className="rounded border border-[var(--border)] bg-[var(--bg-secondary)] px-1.5 py-0.5 text-[10px] text-[var(--text-tertiary)]">
          ⌘K
        </kbd>
      </button>

      {/* Modal Backdrop */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:pt-28">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setOpen(false)}
          />

          {/* Dialog Card */}
          <div className="relative w-full max-w-lg rounded-xl border border-[var(--border)] bg-[var(--bg-card)] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3 bg-[var(--bg-card-subtle)]">
              <Search className="h-4 w-4 text-[var(--text-tertiary)] shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none"
              />
              <button
                onClick={() => setOpen(false)}
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] p-1 rounded"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Commands List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-xs text-[var(--text-tertiary)]">
                  No matching commands found.
                </div>
              ) : (
                filtered.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs transition-colors hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)] group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-[var(--text-tertiary)] group-hover:text-[var(--accent)]" />
                        <span className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase text-[var(--text-tertiary)]">
                        {item.shortcut ?? item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--border)] bg-[var(--bg-card-subtle)] px-4 py-2 flex items-center justify-between text-[11px] font-mono text-[var(--text-tertiary)]">
              <span>Use arrows or mouse to navigate</span>
              <span>ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
