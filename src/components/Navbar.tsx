"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.includes("#")) {
      setMobileOpen(false);
      return;
    }
    const sectionId = href.split("#")[1];
    const isHome = window.location.pathname === "/" || window.location.pathname === "";
    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) {
        e.preventDefault();
        setMobileOpen(false);
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
        window.history.replaceState(null, "", `#${sectionId}`);
      }
    } else {
      setMobileOpen(false);
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < 220) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg-primary)]/85 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between">
        {/* Brand identity */}
        <Link
          href="/"
          aria-label="Sium Ahameed - Home"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-xs font-mono font-bold text-[var(--accent)] shadow-sm transition-transform group-hover:scale-105">
            SA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-[var(--text-primary)] font-heading leading-none">
              Sium Ahameed
            </span>
            <span className="text-[11px] font-mono text-[var(--text-tertiary)] leading-tight mt-0.5">
              ML &times; Statistics
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/80 px-3 py-1 backdrop-blur-md shadow-sm" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = mounted && link.href.includes("#") && activeSection === link.href.split("#")[1];
            const isBlogLink = link.href === "/blog";

            if (isBlogLink) {
              return (
                <Link
                  key={link.href}
                  href="/blog"
                  className="px-3 py-1.5 text-xs font-medium rounded-full transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--accent)] text-white shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right side CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/files/CV.pdf"
            download="Sium_Ahameed_CV.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-subtle)] shadow-xs"
          >
            <FileText className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
            Resume
          </a>

          <button
            onClick={toggle}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {mounted && theme === "dark" ? <Sun className="h-3.5 w-3.5" aria-hidden="true" /> : <Moon className="h-3.5 w-3.5" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggle}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {mounted && theme === "dark" ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        inert={!mobileOpen}
        className={`md:hidden overflow-hidden border-t transition-all duration-200 ease-in-out ${
          mobileOpen
            ? "max-h-[80svh] overflow-y-auto opacity-100 border-[var(--border)] bg-[var(--bg-primary)]/95 backdrop-blur-md shadow-lg"
            : "max-h-0 opacity-0 border-transparent invisible"
        }`}
      >
        <div className="container-content flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const isActive = mounted && link.href.includes("#") && activeSection === link.href.split("#")[1];
            const isBlogLink = link.href === "/blog";

            if (isBlogLink) {
              return (
                <Link
                  key={link.href}
                  href="/blog"
                  onClick={() => setMobileOpen(false)}
                  tabIndex={mobileOpen ? 0 : -1}
                  className="text-left text-sm font-medium py-2.5 px-3 rounded-lg transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                aria-current={isActive ? "true" : undefined}
                tabIndex={mobileOpen ? 0 : -1}
                className={`text-left text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[var(--accent)] text-white font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="h-px bg-[var(--border)] my-2" aria-hidden="true" />
          <div className="pt-1">
            <a
              href="/files/CV.pdf"
              download="Sium_Ahameed_CV.pdf"
              tabIndex={mobileOpen ? 0 : -1}
              className="w-full flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-sm font-medium text-[var(--text-primary)] py-2.5 px-3"
            >
              <FileText className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
