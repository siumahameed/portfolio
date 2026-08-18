"use client";

import { Reveal } from "@/lib/Reveal";
import { BrainCircuit, ChartColumn, Bot, ServerCog, ArrowUpRight } from "lucide-react";
import { whatIBuild } from "@/lib/skills";

const icons = [BrainCircuit, ChartColumn, Bot, ServerCog];

export function WhatIBuild() {
  return (
    <section id="what-i-build" className="section-padding">
      <div className="container-content">
        <Reveal>
          <p className="section-label mb-3">WHAT I BUILD</p>
          <h2 className="section-title">Engineering Intelligence</h2>
          <p className="section-subtitle">
            Where statistical reasoning meets intelligent systems. I care about uncertainty,
            assumptions, inference, and whether a model actually provides reliable evidence.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {whatIBuild.map((item, i) => {
            const Icon = icons[i] ?? BrainCircuit;
            return (
              <Reveal key={item.number} delay={50 + i * 50}>
                <div className="card group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40">
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
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}