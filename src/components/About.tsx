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
            I&apos;m a Statistics undergraduate at Dhaka College with a deep
            interest in machine learning, deep learning, and data science. My
            academic background in statistics gives me a rigorous foundation in
            probability theory, statistical inference, and experimental design —
            skills I apply directly to every ML project I build.
          </p>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-base">
            I started my journey into AI by exploring how data could be used to
            make predictions and uncover hidden patterns. What began as curiosity
            quickly turned into a commitment: I&apos;ve since completed over 36
            projects spanning classification, regression, natural language
            processing, exploratory data analysis, and full-stack AI
            applications.
          </p>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-base">
            I&apos;m currently seeking internship and research collaboration
            opportunities where I can contribute to impactful ML systems and
            continue growing as an engineer.
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
