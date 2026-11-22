"use client";

import { Reveal } from "@/lib/Reveal";
import { GraduationCap, BookOpen, Calendar, Award, CheckCircle2 } from "lucide-react";

const relevantCoursework = [
  "Mathematical Statistics & Probability Theory",
  "Statistical Inference & Hypothesis Testing",
  "Linear Regression & Diagnostic Modeling",
  "Multivariate Analysis & Dimensionality Reduction",
  "Time Series Analysis & Forecasting",
  "Experimental Design & ANOVA",
  "Sampling Techniques & Survey Analysis",
  "Machine Learning & Statistical Computing with Python / R",
];

const certifications = [
  {
    title: "Specialization in Machine Learning",
    issuer: "DeepLearning.AI (Coursera)",
    detail: "Supervised ML, Advanced Learning Algorithms, Unsupervised Learning & Recommenders",
  },
  {
    title: "Python for Data Science",
    issuer: "Kaggle",
    detail: "Data manipulation, Pandas, visualization, and algorithmic problem-solving",
  },
  {
    title: "21+ Shipped ML & Data Projects",
    issuer: "Open Source & Industry",
    detail: "End-to-end models across healthcare risk classification, NLP spam detection, and geospatial analysis",
  },
];

export function Education() {
  return (
    <section className="section-padding bg-[var(--bg-card-subtle)]/40 border-y border-[var(--border)]">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col">
            <span className="section-label mb-2">ACADEMIC FOUNDATION &amp; CREDENTIALS</span>
            <h2 className="section-title">Education &amp; Certifications</h2>
            <p className="section-subtitle">
              Formal training in probability, mathematical statistics, and industry certifications providing the foundation for reliable AI.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Main Degree Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={40}>
              <div className="card p-6 sm:p-8 border-[var(--border)] shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--accent)]">
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading">
                          Bachelor of Science in Statistics
                        </h3>
                        <p className="text-sm font-semibold text-[var(--accent)] mt-0.5">
                          Dhaka College &middot; Affiliated with National University
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 text-xs font-mono text-[var(--text-tertiary)] self-start sm:self-center mt-2 sm:mt-0">
                        <Calendar className="h-3 w-3" />
                        2022 &ndash; Ongoing
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-3 text-xs font-mono">
                      <span className="rounded bg-[var(--accent-subtle)] px-2 py-0.5 font-bold text-[var(--accent)]">
                        CGPA: 3.36 / 4.00
                      </span>
                      <span className="text-[var(--text-tertiary)]">
                        Specializing in ML, Deep Learning &amp; EDA
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                      Bridging theoretical statistics with practical, high-impact machine learning systems. Studying mathematical distributions, inference, and experimental design to build trustworthy software.
                    </p>

                    <div className="mt-6 pt-5 border-t border-[var(--border)]">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="h-4 w-4 text-[var(--accent)]" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                          Core Academic Coursework
                        </span>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {relevantCoursework.map((course) => (
                          <div key={course} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Higher Secondary Certificate */}
            <Reveal delay={60}>
              <div className="card p-5 border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] font-heading">
                    Higher Secondary Certificate (Science)
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    National College of Education &middot; 2019 &ndash; 2021
                  </p>
                </div>
                <span className="font-mono text-xs font-bold text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1 rounded self-start sm:self-auto">
                  GPA: 4.92 / 5.00
                </span>
              </div>
            </Reveal>
          </div>

          {/* Certifications & Achievements (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={70}>
              <div className="card p-6 sm:p-8 h-full space-y-5">
                <div className="flex items-center gap-2 pb-3 border-b border-[var(--border)]">
                  <Award className="h-5 w-5 text-[var(--accent)]" />
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-heading">
                    Certifications &amp; Achievements
                  </h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.title} className="rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] p-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs font-bold text-[var(--text-primary)] font-heading">
                          {cert.title}
                        </h4>
                        <span className="text-[10px] font-mono text-[var(--accent)] font-semibold">
                          Verified
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-[var(--text-tertiary)]">
                        {cert.issuer}
                      </p>
                      <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                        {cert.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[var(--border)] text-xs text-[var(--text-tertiary)] flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Kaggle contributor with published exploratory notebooks</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
