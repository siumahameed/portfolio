"use client";

import { useRef, useState } from "react";
import { useInView } from "@/lib/useInView";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const getDetails = (title: string) => stepDetails[title.toUpperCase()] ?? [];

  return (
    <section className="section-padding">
      <div ref={ref} className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">HOW I BUILD</p>
          <h2 className="section-title">Engineering Approach</h2>
          <p className="section-subtitle">
            I don&apos;t start with the most complicated model. I start by understanding
            the problem, the data, and the baseline.
          </p>
        </motion.div>

        <div className="mt-12">
          {/* Pipeline visualization */}
          <div className="relative overflow-x-auto scrollbar-hide pb-2">
            <div className="flex items-center gap-2 md:gap-0 min-w-max">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 8 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                >
                  <button
                    className={`group relative flex flex-col items-center gap-2 rounded-xl border px-4 py-3 transition-all duration-300 ${
                      activeStep === step.title
                        ? "border-[var(--accent)] bg-[var(--accent-subtle)]"
                        : "border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent-subtle)]"
                    }`}
                    onMouseEnter={() => setActiveStep(step.title)}
                    onMouseLeave={() => setActiveStep(null)}
                    onClick={() => setActiveStep(activeStep === step.title ? null : step.title)}
                    aria-expanded={activeStep === step.title}
                  >
                    <span className="text-[10px] font-mono text-[var(--text-tertiary)]">{step.number}</span>
                    <span className={`text-sm font-medium font-heading ${activeStep === step.title ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}>
                      {step.title}
                    </span>
                  </button>
                  {i < workflowSteps.length - 1 && (
                    <div className="mx-1">
                      <svg className="h-4 w-4 text-[var(--border)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            {activeStep && getDetails(activeStep).length > 0 && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5">
                  <p className="text-xs font-mono text-[var(--accent)] mb-2">{activeStep}</p>
                  <ul className="space-y-1">
                    {getDetails(activeStep).map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
