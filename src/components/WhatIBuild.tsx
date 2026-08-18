"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { BrainCircuit, ChartColumn, Bot, ServerCog, ArrowUpRight } from "lucide-react";
import { whatIBuild } from "@/lib/skills";

const icons = [BrainCircuit, ChartColumn, Bot, ServerCog];

export function WhatIBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <section id="what-i-build" className="section-padding">
      <div ref={ref} className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <p className="section-label mb-3">WHAT I BUILD</p>
          <h2 className="section-title">Engineering Intelligence</h2>
          <p className="section-subtitle">
            Where statistical reasoning meets intelligent systems. I care about uncertainty,
            assumptions, inference, and whether a model actually provides reliable evidence.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whatIBuild.map((item, i) => {
            const Icon = icons[i] ?? BrainCircuit;
            return (
              <motion.div
                key={item.number}
                className="card group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40"
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Corner watermark */}
                <span className="pointer-events-none absolute -right-1 -top-3 text-5xl font-bold font-mono text-[var(--accent)] opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.15]">
                  {item.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)] font-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-3">
                  <span className="text-[10px] font-mono text-[var(--text-tertiary)]">
                    {item.number} / 04
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}