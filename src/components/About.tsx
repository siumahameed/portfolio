"use client";

import { Reveal } from "@/lib/Reveal";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-content">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 max-w-prose">
            <Reveal>
              <p className="section-label mb-3">ABOUT</p>
              <h2 className="section-title">Where Statistics Meets ML</h2>
            </Reveal>

            <Reveal delay={50}>
              <div className="mt-6 space-y-4">
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
                  Right now, I&apos;m actively working on <a href="https://datatistics.app" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-hover)] font-medium">DataTistics</a>—an automated statistical analysis and AI reporting platform serving 5,000+ users. In parallel, I&apos;m seeking ML internships and research collaborations where I can contribute to production-grade systems alongside experienced teams.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-2">
            {/* Journey */}
            <div className="card mb-4">
              <h3 className="text-[10px] font-mono text-[var(--accent)] mb-3 uppercase tracking-wider">
                My Journey
              </h3>
              <div className="space-y-2">
                {["Statistics", "Data Analysis", "Machine Learning", "AI Engineering", "Building Intelligent Systems"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[10px] font-mono text-[var(--accent)]">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">{step}</span>
                    {i < 4 && <span className="ml-auto text-[var(--text-tertiary)]" aria-hidden="true">→</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="card">
              <h3 className="text-[10px] font-mono text-[var(--accent)] mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-3">
                <FactRow label="Name" value="Sium Ahameed Bhuyan" />
                <FactRow label="Current Project" value="DataTistics (Building & Scaling)" />
                <FactRow label="Education" value="BSc in Statistics" />
                <FactRow label="Location" value="Dhaka, Bangladesh" />
                <FactRow label="Focus" value="ML / AI Engineering / Data Science" />
              </div>
            </div>
          </Reveal>
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