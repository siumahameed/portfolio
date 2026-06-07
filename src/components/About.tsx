"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { Section } from "./Section";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <Section id="about">
      <div className="mb-12">
        <div className="divider-accent mb-4" />
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Background, motivation, and quick facts.</p>
      </div>

      <div
        ref={ref}
        className="grid gap-10 lg:grid-cols-5"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(8px)",
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="lg:col-span-3">
          <p className="text-[var(--text-secondary)] leading-relaxed text-base">
            I&apos;m a Statistics undergraduate at Dhaka College, but the
            classroom only explains so much. What really drives me is
            building things with data. Machine learning, deep learning, data
            science — these aren&apos;t just subjects I study; they&apos;re how
            I solve real problems.
          </p>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-base">
            My stats background means I don&apos;t treat models as black boxes.
            Probability theory, inference, experimental design — these shape
            how I approach every project. I care about whether a model actually
            works in the real world, not just whether it scores well on a test
            set.
          </p>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-base">
            I got into AI because I wanted to find patterns that matter. Over
            36 projects later, I&apos;ve built everything from text classifiers
            to data analysis pipelines to full stack AI apps. Each one taught
            me something new about turning messy data into something useful.
          </p>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-base">
            Right now I&apos;m looking for an internship or research
            collaboration where I can work on real ML systems alongside people
            who know more than me. I learn fastest when I&apos;m building
            something that matters.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              Quick Facts
            </h3>
            <div className="space-y-4">
              <FactRow label="Name" value="Sium Ahameed Bhuyan" />
              <FactRow label="Education" value="BSc in Statistics" />
              <FactRow label="Field" value="Machine Learning / Deep Learning / Data Science" />
              <FactRow label="Location" value="Dhaka, Bangladesh" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">
        {label}
      </p>
      <p className="mt-0.5 text-sm text-[var(--text-primary)]">{value}</p>
    </div>
  );
}
