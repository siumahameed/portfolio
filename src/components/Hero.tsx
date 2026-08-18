"use client";

import { Reveal } from "@/lib/Reveal";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/lib/icons";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-start overflow-hidden pt-[4.5rem] pb-10 md:min-h-[calc(100svh-4rem)] md:items-center md:pt-24 md:pb-16">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-200px] -translate-x-1/2"
        style={{
          width: "900px",
          height: "700px",
          background: "radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)",
        }}
      />

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-5 left-0 right-0 flex justify-center">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-tertiary)] opacity-60">
          <span>Scroll</span>
          <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
        </div>
      </div>

      <div className="container-content w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col">
            <Reveal delay={50}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-subtle)] px-3.5 py-1.5 text-xs font-medium text-[var(--accent)] mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                Open to internships & research
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-2 text-[2.75rem] font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl font-heading leading-[1.05]">
                <span className="text-[var(--text-tertiary)] text-[1.75rem] sm:text-3xl lg:text-4xl font-normal block mb-2.5">Hi, I&apos;m</span>
                <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--text-primary)] to-[var(--accent)] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                  Sium Ahameed
                </span>
                <br />
                <span className="text-[var(--text-secondary)]">Bhuyan</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 max-w-lg text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
                Building intelligent systems
                <br />
                from data to deployment.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-3 text-[15px] text-[var(--text-tertiary)] font-mono">
                Statistics &times; Machine Learning &times; AI Engineering
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/portfolio/#projects" className="btn-primary px-6 py-3 text-[15px]">
                  View Work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/portfolio/files/CV.pdf"
                  download="Sium_Ahameed_CV.pdf"
                  className="btn-secondary px-6 py-3 text-[15px]"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-6 flex items-center gap-1">
                <a href="https://github.com/siumahameed" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]" aria-label="GitHub">
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/sium11/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]" aria-label="LinkedIn">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a href="mailto:siumahameed2003@gmail.com" className="flex h-11 w-11 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Terminal card */}
          <Reveal direction="x" delay={150} className="hidden lg:flex justify-center">
            <div className="w-full max-w-sm rounded-xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-2xl shadow-black/10">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs text-[var(--text-tertiary)] font-mono">pipeline.py</span>
              </div>
              {/* Terminal content */}
              <div className="p-5 font-mono text-xs space-y-1">
                <p className="text-[var(--text-tertiary)]">$ whoami</p>
                <p className="text-[var(--accent)]">sium-ahameed</p>
                <p className="text-[var(--text-tertiary)] mt-3">$ focus</p>
                <p className="text-[var(--text-secondary)]">Data Science</p>
                <p className="text-[var(--text-secondary)]">Statistical Modeling</p>
                <p className="text-[var(--text-tertiary)] mt-3">$ status</p>
                <p className="text-[var(--accent)]">building<span className="animate-pulse">...</span></p>
              </div>
              {/* Pipeline bar at bottom */}
              <div className="border-t border-[var(--border)] px-5 py-3">
                <div className="flex items-center justify-between">
                  {["DATA", "CLEAN", "EDA", "MODEL", "DEPLOY"].map((step, i) => (
                    <div key={step} className="flex flex-col items-center gap-1.5">
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{
                          background: "var(--accent)",
                          opacity: 0.25 + (i / 5) * 0.75,
                        }}
                      />
                      <span className="text-[9px] font-mono text-[var(--text-tertiary)]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}