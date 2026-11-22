"use client";

import Image from "next/image";
import { Reveal } from "@/lib/Reveal";
import { Check, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding bg-[var(--bg-card-subtle)]/40 border-y border-[var(--border)]">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Profile Card & Quick Bio (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <Reveal>
              <div className="card w-full max-w-md p-6 text-left border-[var(--border)] shadow-md">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 border-[var(--border)] shadow-sm">
                    <Image
                      src="/images/profile.jpg"
                      alt="Sium Ahameed Bhuyan"
                      fill
                      className="object-cover"
                      sizes="80px"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading">
                      Sium Ahameed Bhuyan
                    </h3>
                    <p className="text-xs font-mono text-[var(--accent)] font-medium">
                      ML Developer &middot; Statistics Major
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mt-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[var(--text-secondary)]" />
                      Dhaka, Bangladesh
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-2.5 pt-4 border-t border-[var(--border)] text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[var(--text-tertiary)] font-mono shrink-0">Current Focus:</span>
                    <span className="font-semibold text-[var(--text-primary)] text-right">DataTistics SaaS &amp; ML</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[var(--text-tertiary)] font-mono shrink-0">Degree:</span>
                    <span className="font-semibold text-[var(--text-primary)] text-right">BSc Statistics (CGPA: 3.36)</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[var(--text-tertiary)] font-mono shrink-0">Certifications:</span>
                    <span className="font-semibold text-[var(--text-primary)] text-right">DeepLearning.AI &middot; Coursera</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[var(--text-tertiary)] font-mono shrink-0">Expected Grad:</span>
                    <span className="font-semibold text-[var(--text-primary)] text-right">June 2027</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[var(--text-tertiary)] font-mono shrink-0">Status:</span>
                    <span className="font-semibold text-emerald-500 flex items-center gap-1 shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Open to Opportunities
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[var(--border)]">
                  <div className="text-[11px] font-mono uppercase text-[var(--text-tertiary)] mb-2">
                    Core Technical Strengths
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Statistical Modeling", "FastAPI", "XGBoost", "Groq AI", "Pandas", "PostgreSQL"].map((tag) => (
                      <span key={tag} className="tag text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: In-depth Story & Values (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="section-label mb-2">ABOUT ME</span>
              <h2 className="section-title">Where Statistics Meets Machine Learning</h2>
            </Reveal>

            <Reveal delay={60}>
              <div className="mt-6 space-y-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I am a Statistics undergraduate at Dhaka College with a deep passion for building practical, reproducible machine learning systems.
                </p>
                <p>
                  Many developers treat machine learning as a black box—importing models without questioning underlying distributions or assumptions. My training in statistics shapes every step of my engineering process: I prioritize hypothesis testing, error analysis, cross-validation integrity, and understanding confidence intervals over naive benchmark chasing.
                </p>
                <p>
                  To solve the barrier of complex data analysis for non-programmers, I created{" "}
                  <a
                    href="https://datatistics.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--accent)] underline underline-offset-4"
                  >
                    DataTistics
                  </a>
                  . It has grown to support over 5,000 students, researchers, and small businesses with 65 computational engines and instant AI-synthesized PDF reports.
                </p>
              </div>
            </Reveal>

            {/* Value checklist */}
            <Reveal delay={120}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Rigorous hypothesis testing and p-value validation",
                  "Fast, low-latency APIs powered by FastAPI & Python",
                  "AI report synthesis with Groq LLM integration",
                  "Pragmatic approach: baseline first, complexity when justified",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--accent-subtle)] text-[var(--accent)]">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-medium text-[var(--text-primary)]">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
