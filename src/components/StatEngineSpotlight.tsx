"use client";

import { useState } from "react";
import { Reveal } from "@/lib/Reveal";
import {
  Activity,
  Play,
  CheckCircle2,
  ExternalLink,
  Cpu,
  BarChart2,
} from "lucide-react";

interface StatTestDemo {
  id: string;
  name: string;
  category: "Parametric" | "Non-Parametric" | "Categorical" | "Correlation";
  nullHypothesis: string;
  formula: string;
  sampleInput: string;
  statisticName: string;
  statisticVal: string;
  pValue: string;
  isSignificant: boolean;
  aiExplanation: string;
}

const demos: StatTestDemo[] = [
  {
    id: "ttest",
    name: "Independent Two-Sample t-Test",
    category: "Parametric",
    nullHypothesis: "H₀: μ₁ = μ₂ (No significant difference in group means)",
    formula: "t = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂)",
    sampleInput: "Group A (Treatment, n=45) vs Group B (Control, n=48)",
    statisticName: "t-Statistic",
    statisticVal: "3.421",
    pValue: "p = 0.0009",
    isSignificant: true,
    aiExplanation:
      "Statistically significant difference detected (p < 0.001). The treatment group demonstrated an average 18.4% improvement with 95% confidence intervals excluding zero.",
  },
  {
    id: "chisq",
    name: "Chi-Square Test of Independence",
    category: "Categorical",
    nullHypothesis: "H₀: Variables X and Y are independent in the population",
    formula: "χ² = Σ (Oᵢ - Eᵢ)² / Eᵢ",
    sampleInput: "Customer Segment (3 levels) × Conversion Channel (4 levels)",
    statisticName: "Chi-Square (χ²)",
    statisticVal: "14.88",
    pValue: "p = 0.0108",
    isSignificant: true,
    aiExplanation:
      "Association confirmed (p = 0.01). Conversion behaviors diverge significantly across user segments, rejecting the assumption of uniform distribution.",
  },
  {
    id: "anova",
    name: "One-Way ANOVA (F-Test)",
    category: "Parametric",
    nullHypothesis: "H₀: μ₁ = μ₂ = μ₃ (All 3 population means are equal)",
    formula: "F = MS_between / MS_within",
    sampleInput: "Pricing Tier Performance (Basic vs Pro vs Enterprise, n=120)",
    statisticName: "F-Ratio",
    statisticVal: "6.874",
    pValue: "p = 0.0015",
    isSignificant: true,
    aiExplanation:
      "Variance ratio is statistically significant (F = 6.87, p < 0.01). Post-hoc Tukey HSD reveals the Enterprise tier significantly outperforms Basic tier.",
  },
  {
    id: "pearson",
    name: "Pearson Correlation Coefficient",
    category: "Correlation",
    nullHypothesis: "H₀: ρ = 0 (No linear correlation between variables)",
    formula: "r = Σ((x - x̄)(y - ȳ)) / (√(Σ(x - x̄)²) √(Σ(y - ȳ)²))",
    sampleInput: "Study Hours vs Final Exam Scores (n=80 students)",
    statisticName: "Pearson r",
    statisticVal: "+0.824",
    pValue: "p < 0.0001",
    isSignificant: true,
    aiExplanation:
      "Strong positive linear correlation (r = 0.824, R² = 0.679). Approximately 68% of score variation is linearly accounted for by study duration.",
  },
];

export function StatEngineSpotlight() {
  const [selectedTestId, setSelectedTestId] = useState<string>("ttest");
  const [isSimulating, setIsSimulating] = useState(false);

  const activeTest = demos.find((d) => d.id === selectedTestId) ?? demos[0];

  const handleRun = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 500);
  };

  return (
    <section className="section-padding bg-[var(--bg-card-subtle)]/40 border-y border-[var(--border)]">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="section-label mb-2">FLAGSHIP PRODUCT ARCHITECTURE</span>
              <h2 className="section-title">DataTistics Automated Engine</h2>
              <p className="section-subtitle">
                How DataTistics transforms raw tabular datasets into automated hypothesis tests, mathematical statistics, and natural-language executive summaries for 5,000+ users.
              </p>
            </div>
            <a
              href="https://datatistics.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs shrink-0 self-start sm:self-auto"
            >
              Open Live Platform
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        {/* Interactive Engine Sandbox */}
        <Reveal delay={50} className="mt-10">
          <div className="card p-6 sm:p-8 border-[var(--border)] shadow-md">
            {/* Top selector tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)]">
                  <Activity className="h-4 w-4" />
                </span>
                <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                  Interactive Test Simulator (47 Available in Core)
                </span>
              </div>

              {/* Test buttons */}
              <div className="flex flex-wrap gap-1.5" role="tablist">
                {demos.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedTestId(d.id)}
                    role="tab"
                    aria-selected={selectedTestId === d.id}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                      selectedTestId === d.id
                        ? "bg-[var(--accent)] text-white shadow-xs font-semibold"
                        : "border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {d.name.split(" ")[0]} {d.name.includes("ANOVA") ? "ANOVA" : d.name.includes("Chi") ? "Chi-Square" : "Test"}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated execution panel */}
            <div className="grid gap-6 lg:grid-cols-12 pt-6 items-center">
              {/* Left Column: Mathematical Spec & Formula (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="badge text-[10px] font-mono">{activeTest.category}</span>
                    <span className="text-xs font-mono text-[var(--text-tertiary)]">scipy.stats routine</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading mt-2">
                    {activeTest.name}
                  </h3>
                  <p className="text-xs font-mono text-[var(--text-secondary)] mt-1.5">
                    {activeTest.sampleInput}
                  </p>
                </div>

                <div className="rounded-lg bg-[var(--code-bg)] p-3 border border-[var(--border)]">
                  <div className="text-[10px] font-mono uppercase text-[var(--text-tertiary)] mb-1">
                    Null Hypothesis ($H_0$)
                  </div>
                  <div className="text-xs font-mono text-[var(--text-primary)]">
                    {activeTest.nullHypothesis}
                  </div>
                  <div className="text-[10px] font-mono uppercase text-[var(--text-tertiary)] mt-2.5 mb-1">
                    Mathematical Formulation
                  </div>
                  <div className="text-xs font-mono text-[var(--accent)]">
                    {activeTest.formula}
                  </div>
                </div>

                <button
                  onClick={handleRun}
                  disabled={isSimulating}
                  className="btn-primary text-xs w-full py-2.5"
                >
                  <Play className={`h-3.5 w-3.5 ${isSimulating ? "animate-spin" : ""}`} />
                  {isSimulating ? "Computing Statistical Test..." : "Re-Calculate Test Statistic"}
                </button>
              </div>

              {/* Right Column: Automated Result & AI Synthesis (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card-subtle)] p-5 space-y-4">
                  {/* Results Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                    <span className="text-xs font-mono font-bold uppercase text-[var(--text-primary)] flex items-center gap-1.5">
                      <BarChart2 className="h-4 w-4 text-[var(--accent)]" /> Automated Statistical Output
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="h-3 w-3" /> α = 0.05 Verified
                    </span>
                  </div>

                  {/* Quantitative Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-3">
                      <div className="text-[10px] font-mono uppercase text-[var(--text-tertiary)]">
                        {activeTest.statisticName}
                      </div>
                      <div className="text-lg font-bold font-mono text-[var(--text-primary)] mt-0.5">
                        {activeTest.statisticVal}
                      </div>
                    </div>

                    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-3">
                      <div className="text-[10px] font-mono uppercase text-[var(--text-tertiary)]">
                        Calculated p-Value
                      </div>
                      <div className="text-lg font-bold font-mono text-emerald-500 mt-0.5">
                        {activeTest.pValue}
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-3">
                      <div className="text-[10px] font-mono uppercase text-[var(--text-tertiary)]">
                        Decision
                      </div>
                      <div className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">
                        Reject H₀ (p &lt; 0.05)
                      </div>
                    </div>
                  </div>

                  {/* AI Generated Executive Takeaway */}
                  <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-4">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--accent)] mb-1.5">
                      <Cpu className="h-3.5 w-3.5" /> Groq AI Executive Takeaway (Generated in &lt; 80ms)
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {activeTest.aiExplanation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
