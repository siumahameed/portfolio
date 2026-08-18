"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/lib/icons";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden pt-14 pb-10 md:pt-24 md:pb-16">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-200px] -translate-x-1/2"
        style={{
          width: "900px",
          height: "700px",
          background: "radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)",
        }}
      />

      <div className="container-content w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-subtle)] px-3 py-1 text-xs font-medium text-[var(--accent)] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                Open to internships & research
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl font-heading leading-[1.1]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span className="text-[var(--text-tertiary)] text-2xl sm:text-3xl lg:text-4xl font-normal block mb-2">Hi, I&apos;m</span>
              <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--text-primary)] to-[var(--accent)] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                Sium Ahameed
              </span>
              <br />
              <span className="text-[var(--text-secondary)]">Bhuyan</span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-lg text-lg text-[var(--text-secondary)] leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              Building intelligent systems
              <br />
              from data to deployment.
            </motion.p>

            <motion.p
              className="mt-3 text-sm text-[var(--text-tertiary)] font-mono"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.18 }}
            >
              Statistics &times; Machine Learning &times; AI Engineering
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <a href="/portfolio/#projects" className="btn-primary">
                View Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/portfolio/files/CV.pdf"
                download="Sium_Ahameed_CV.pdf"
                className="btn-secondary"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <a href="https://github.com/siumahameed" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/sium11/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="mailto:siumahameed2003@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal card */}
          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
