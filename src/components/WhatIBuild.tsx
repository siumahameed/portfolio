"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { whatIBuild } from "@/lib/skills";

export function WhatIBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <section id="what-i-build" className="section-padding">
      <div ref={ref} className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">WHAT I BUILD</p>
          <h2 className="section-title">Engineering Intelligence</h2>
          <p className="section-subtitle">
            Where statistical reasoning meets intelligent systems. I care about uncertainty,
            assumptions, inference, and whether a model actually provides reliable evidence.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whatIBuild.map((item, i) => (
            <motion.div
              key={item.number}
              className="card group relative overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-3xl font-bold font-mono text-[var(--accent)] opacity-20 group-hover:opacity-40 transition-opacity">
                {item.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)] font-heading">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
