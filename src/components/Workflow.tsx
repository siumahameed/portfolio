"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { workflowSteps } from "@/lib/skills";

const stepDetails: Record<string, string[]> = {
  DATA: ["Data collection", "Source identification", "Format understanding"],
  CLEAN: ["Missing values", "Outlier detection", "Type correction"],
  EXPLORE: ["Distributions", "Correlations", "Visual patterns"],
  ENGINEER: ["Feature creation", "Selection", "Scaling & encoding"],
  TRAIN: ["Baseline models", "Cross-validation", "Hyperparameter tuning"],
  EVALUATE: ["Honest metrics", "Model comparison", "Error analysis"],
  DEPLOY: ["API building", "Application", "Monitoring"],
};

export function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <section id="how-i-build" className="section-padding">
      <div ref={ref} className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <p className="section-label mb-3">HOW I BUILD</p>
          <h2 className="section-title">Engineering Approach</h2>
          <p className="section-subtitle">
            I don&apos;t start with the most complicated model. I start by understanding
            the problem, the data, and the baseline.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step, i) => (
            <motion.div
              key={step.title}
              className="card group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40"
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.04 + i * 0.04 }}
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between">
                <span className="text-3xl font-bold font-mono text-[var(--accent)] opacity-20 group-hover:opacity-40 transition-opacity">
                  {step.number}
                </span>
                <span className="text-[10px] font-mono text-[var(--text-tertiary)]">
                  {i + 1} / {workflowSteps.length}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)] font-heading">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-3">
                {(stepDetails[step.title.toUpperCase()] ?? []).map((detail) => (
                  <span key={detail} className="tag text-[10px]">{detail}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}