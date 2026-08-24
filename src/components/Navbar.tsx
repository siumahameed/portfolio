"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "./ThemeProvider";
import { Menu, X, Sun, Moon, FileText, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleNav = useCallback((href: string) => {
    setMobileOpen(false);
    if (href.includes("#")) {
      const sectionId = href.split("#")[1];
      const isHome = window.location.pathname === "/" || window.location.pathname === "";
      if (isHome) {
        const el = document.getElementById(sectionId);
        if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
      }
    }
    window.location.href = href;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < 200) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] backdrop-blur-xl bg-[var(--bg-primary)]/80"
          : "bg-transparent"
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <a
          href="/"
          aria-label="sium - home"
          className="group flex items-baseline text-left text-xl font-bold tracking-tight text-[var(--text-primary)] font-logo"
        >
          <span>s</span>
          <span className="relative inline-block" aria-hidden="true">
            <span className="block h-[0.55em] w-[0.18em] rounded-[0.04em] bg-current" />
            <span className="absolute -top-[0.45em] left-1/2 -translate-x-1/2 h-[0.34em] w-[0.34em] rounded-full bg-[var(--accent)] transition-transform duration-300 group-hover:scale-125" />
          </span>
          <span>um</span>
          <span className="ml-1.5 self-center text-[var(--accent)]" aria-hidden="true">
            <Sparkles className="h-[0.85em] w-[0.85em] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = mounted && link.href.includes("#") && activeSection === link.href.split("#")[1];
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full bg-[var(--accent)]" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-1">
          <a
            href="/files/CV.pdf"
            download="Sium_Ahameed_CV.pdf"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
          <div className="w-px h-4 bg-[var(--border)] mx-1" />
          <button
            onClick={toggle}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggle}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-[var(--text-secondary)]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-[var(--text-secondary)]"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden border-t transition-all duration-200 ease-in-out ${
          mobileOpen
            ? "max-h-[480px] opacity-100 border-[var(--border)] bg-[var(--bg-primary)]/95 backdrop-blur-xl"
            : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="container-content flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const isActive = mounted && link.href.includes("#") && activeSection === link.href.split("#")[1];
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-left text-sm font-medium py-3 px-3 transition-colors ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="h-px bg-[var(--border)] my-2" />
          <a
            href="/files/CV.pdf"
            download="Sium_Ahameed_CV.pdf"
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] py-2 px-3"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}