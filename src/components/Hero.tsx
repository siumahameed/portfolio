"use client";

import { Reveal } from "@/lib/Reveal";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, KaggleIcon } from "@/lib/icons";

export function Hero() {
  return (
    <section className="relative flex min-h-[95svh] items-center overflow-hidden pt-20 pb-12 md:min-h-[calc(100svh-4rem)] md:pt-28 md:pb-16">
      <div className="container-content w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text & CTAs */}
          <div className="flex flex-col">
            <Reveal instant>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3.5 py-1.5 text-xs font-mono text-[var(--accent)] mb-4 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Working on DataTistics &middot; Open to research &amp; internships</span>
              </div>
            </Reveal>

            <Reveal instant>
              <h1 className="text-[clamp(2.5rem,7vw,3.5rem)] font-extrabold tracking-tight text-[var(--text-primary)] font-heading leading-[1.05] text-balance">
                <span className="text-[var(--text-tertiary)] text-[1.75rem] sm:text-3xl lg:text-4xl font-normal block mb-2">
                  Hi, I&apos;m
                </span>
                <span>Sium Ahameed</span>
                <br />
                <span className="text-[var(--text-secondary)] font-medium">Bhuyan</span>
              </h1>
            </Reveal>

            <Reveal instant>
              <p className="mt-5 max-w-lg text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
                Building intelligent systems
                <br />
                from data to deployment.
              </p>
            </Reveal>

            <Reveal instant>
              <p className="mt-3 text-[14px] sm:text-[15px] text-[var(--text-tertiary)] font-mono">
                Statistics &times; Machine Learning &times; AI Engineering
              </p>
            </Reveal>

            <Reveal instant>
              <div className="mt-7 flex min-w-0 flex-wrap items-center gap-3">
                <a href="#projects" className="btn-primary px-6 py-3 text-[15px]">
                  View Work
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="/files/CV.pdf"
                  download="Sium_Ahameed_CV.pdf"
                  className="btn-secondary px-6 py-3 text-[15px]"
                >
                  <Download className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  Resume
                </a>
              </div>
            </Reveal>

            <Reveal instant>
              <div className="mt-6 flex items-center gap-2">
                <a
                  href="https://github.com/siumahameed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] shadow-xs"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sium11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] shadow-xs"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.kaggle.com/siumahameedbhuiyain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] shadow-xs"
                  aria-label="Kaggle Profile"
                >
                  <KaggleIcon className="h-4 w-4" />
                </a>
                <a
                  href="mailto:siumahameed2003@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] shadow-xs"
                  aria-label="Email Sium"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Iconic Clean Terminal Card */}
          <Reveal direction="x" instant className="flex justify-center mt-6 lg:mt-0">
            <TerminalCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="w-full max-w-md rounded-xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-2xl transition-all duration-300 hover:border-[var(--border-hover)]">
      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg-card-subtle)] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-[var(--text-tertiary)]">pipeline.py</span>
        </div>
        <span className="text-[10px] font-mono text-[var(--text-tertiary)] flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> bash
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-6 font-mono text-xs space-y-2.5">
        <div>
          <span className="text-[var(--text-tertiary)]">$ </span>
          <span className="text-[var(--text-primary)]">whoami</span>
          <p className="text-[var(--accent)] font-semibold mt-0.5">sium-ahameed</p>
        </div>

        <div className="pt-1">
          <span className="text-[var(--text-tertiary)]">$ </span>
          <span className="text-[var(--text-primary)]">focus</span>
          <p className="text-[var(--text-secondary)] mt-0.5">Machine Learning &amp; AI Systems</p>
          <p className="text-[var(--text-secondary)]">Statistical Modeling &amp; Inference</p>
        </div>

        <div className="pt-1">
          <span className="text-[var(--text-tertiary)]">$ </span>
          <span className="text-[var(--text-primary)]">status</span>
          <p className="text-[var(--accent)] font-semibold mt-0.5">building @ DataTistics</p>
          <p className="text-[var(--text-tertiary)] text-[11px]">5,000+ active users &middot; 65 engines &middot; 99.8% uptime</p>
        </div>

        <div className="pt-1">
          <span className="text-[var(--text-tertiary)]">$ </span>
          <span className="text-[var(--text-primary)]">echo $AVAILABILITY</span>
          <p className="text-emerald-500 font-semibold mt-0.5 flex items-center gap-1.5">
            <span>&gt;</span> open to ML internships &amp; research
          </p>
        </div>
      </div>

      {/* Pipeline bar at bottom */}
      <div className="border-t border-[var(--border)] bg-[var(--bg-card-subtle)] px-6 py-3.5">
        <div className="flex items-center justify-between">
          {[
            { label: "DATA", active: true },
            { label: "CLEAN", active: true },
            { label: "EDA", active: true },
            { label: "MODEL", active: true },
            { label: "DEPLOY", active: true },
          ].map((step, i) => (
            <div key={step.label} className="flex flex-col items-center gap-1.5">
              <div
                className="h-2 w-2 rounded-full transition-all"
                style={{
                  background: "var(--accent)",
                  opacity: 0.35 + (i / 4) * 0.65,
                  boxShadow: i === 4 ? "0 0 8px var(--accent)" : undefined,
                }}
              />
              <span className="text-[9px] font-mono font-semibold text-[var(--text-tertiary)]">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
