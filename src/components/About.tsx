"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { motion } from "framer-motion";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <section id="about" className="section-padding">
      <div ref={ref} className="container-content">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 max-w-prose">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label mb-3">ABOUT</p>
              <h2 className="section-title">Where Statistics Meets ML</h2>
            </motion.div>

            <motion.div
              className="mt-6 space-y-4"
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                I&apos;m a Statistics student at Dhaka College. My background in statistics
                influences how I approach machine learning. I care about uncertainty,
                assumptions, inference, evaluation, and whether a model actually provides
                reliable evidence rather than simply producing a high score.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                I got into AI because I wanted to find patterns that matter. Projects
                later, I&apos;ve built text classifiers, data pipelines, full-stack AI apps.
                Some shipped, some flopped. Each one taught me something I could not get
                from a textbook.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                Right now I&apos;m looking for an internship or research collaboration where
                I can work on real ML systems with people who know more than me. I learn
                fastest when there is something real at stake.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Journey */}
            <div className="card mb-4">
              <p className="text-[10px] font-mono text-[var(--accent)] mb-3 uppercase tracking-wider">
                My Journey
              </p>
              <div className="space-y-2">
                {["Statistics", "Data Analysis", "Machine Learning", "AI Engineering", "Building Intelligent Systems"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[10px] font-mono text-[var(--accent)]">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">{step}</span>
                    {i < 4 && <span className="ml-auto text-[var(--text-tertiary)]">→</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="card">
              <p className="text-[10px] font-mono text-[var(--accent)] mb-3 uppercase tracking-wider">
                Quick Facts
              </p>
              <div className="space-y-3">
                <FactRow label="Name" value="Sium Ahameed Bhuyan" />
                <FactRow label="Education" value="BSc in Statistics" />
                <FactRow label="Location" value="Dhaka, Bangladesh" />
                <FactRow label="Focus" value="ML / AI Engineering / Data Science" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
        {label}
      </p>
      <p className="text-sm text-[var(--text-primary)]">{value}</p>
    </div>
  );
}
