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
        <div className="lg:col-span-3 max-w-prose">
          <p className="text-[var(--text-secondary)] leading-relaxed text-base text-justify">
            I&apos;m a Statistics student at Dhaka College. The classroom gives
            you the basics, but I&apos;ve learned more by building things
            myself.             ML, deep learning and data science are not
            coursework to me. They&apos;re tools I use to solve actual
            problems.
          </p>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-base text-justify">
            My stats background means I don&apos;t treat models as black boxes.
            Probability theory, inference and experimental design. All of that
            shapes how I build. I&apos;ve seen plenty of models that ace a test
            set and fall apart in production. I care more about whether
            something actually works when it matters.
          </p>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-base text-justify">
            I got into AI because I wanted to find patterns that matter. 36
            projects later, I&apos;ve built text classifiers, data pipelines,
            full-stack AI apps. Some shipped, some flopped. Each one taught me
            something I could not get from a textbook.
          </p>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-base text-justify">
            Right now I&apos;m looking for an internship or research
            collaboration where I can work on real ML systems with people who
            know more than me. I learn fastest when there is something real at
            stake.
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
