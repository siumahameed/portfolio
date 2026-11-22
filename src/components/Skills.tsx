"use client";

import { Reveal } from "@/lib/Reveal";
import { Brain, LineChart, Cpu, Database, Server, BarChart3, CheckCircle2 } from "lucide-react";

interface SkillCluster {
  title: string;
  category: string;
  icon: typeof Brain;
  skills: { name: string; highlight?: boolean }[];
  context: string;
}

const skillClusters: SkillCluster[] = [
  {
    title: "Machine Learning & Modeling",
    category: "PREDICTIVE SYSTEMS",
    icon: Brain,
    context: "Building, evaluating, and fine-tuning predictive algorithms with cross-validation rigor.",
    skills: [
      { name: "Scikit-Learn", highlight: true },
      { name: "XGBoost", highlight: true },
      { name: "Random Forest" },
      { name: "Logistic Regression" },
      { name: "Feature Engineering", highlight: true },
      { name: "Cross-Validation (K-Fold)" },
      { name: "Hyperparameter Tuning" },
      { name: "ROC-AUC & F1 Evaluation" },
    ],
  },
  {
    title: "Statistical Science & Inference",
    category: "MATHEMATICAL FOUNDATION",
    icon: LineChart,
    context: "Mathematical analysis to determine true signals versus random noise in observational datasets.",
    skills: [
      { name: "Hypothesis Testing", highlight: true },
      { name: "p-value & Confidence Intervals", highlight: true },
      { name: "ANOVA & Chi-Square" },
      { name: "Probability Distributions" },
      { name: "Regression Diagnostics" },
      { name: "Time Series Analysis" },
      { name: "Multicollinearity (VIF)" },
      { name: "A/B Testing Methodologies" },
    ],
  },
  {
    title: "AI & LLM Engineering",
    category: "APPLIED AI",
    icon: Cpu,
    context: "Integrating modern LLMs with structured prompts and RAG systems for domain intelligence.",
    skills: [
      { name: "Groq LLM API", highlight: true },
      { name: "Llama 3 / Mistral" },
      { name: "RAG Pipelines", highlight: true },
      { name: "Prompt Architecture" },
      { name: "Embeddings & Vectorization" },
      { name: "AI Report Synthesis" },
      { name: "Persona-based Chatbots" },
    ],
  },
  {
    title: "Data Manipulation & Analysis",
    category: "DATA WRANGLING",
    icon: Database,
    context: "High-performance processing of high-dimensional tabular data and schema verification.",
    skills: [
      { name: "Python", highlight: true },
      { name: "Pandas", highlight: true },
      { name: "NumPy" },
      { name: "SciPy", highlight: true },
      { name: "SQL (PostgreSQL)", highlight: true },
      { name: "Data Cleaning & Imputation" },
      { name: "Outlier Detection" },
    ],
  },
  {
    title: "Backend & Systems Deployment",
    category: "ENGINEERING",
    icon: Server,
    context: "Writing low-latency APIs and deploying production web services for users.",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "RESTful Endpoints", highlight: true },
      { name: "PostgreSQL / Supabase" },
      { name: "Docker" },
      { name: "Git & GitHub CI" },
      { name: "Node.js" },
      { name: "Render & Cloud Serving" },
    ],
  },
  {
    title: "Data Visualization & Reporting",
    category: "COMMUNICATION",
    icon: BarChart3,
    context: "Translating statistical models into intuitive executive dashboards and downloadable PDFs.",
    skills: [
      { name: "Matplotlib" },
      { name: "Seaborn", highlight: true },
      { name: "Plotly (Interactive)" },
      { name: "WeasyPrint (PDF Gen)", highlight: true },
      { name: "Exploratory Data Analysis" },
      { name: "Executive Report Summaries" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-padding bg-[var(--bg-card-subtle)]/40 border-y border-[var(--border)]">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col">
            <span className="section-label mb-2">CAPABILITIES</span>
            <h2 id="skills-heading" className="section-title">Technical Stack &amp; Expertise</h2>
            <p className="section-subtitle">
              A comprehensive toolkit spanning mathematical statistics, machine learning engineering, and production software.
            </p>
          </div>
        </Reveal>

        {/* The Statistical Advantage Banner */}
        <Reveal delay={40} className="mt-8 mb-10">
          <div className="card p-6 border-l-4 border-l-[var(--accent)] bg-[var(--bg-card)]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] font-heading">
                  The Statistical Engineering Advantage
                </h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)] leading-relaxed">
                  I don&apos;t treat machine learning models as black boxes. By combining mathematical understanding of distributions, uncertainty, and hypothesis validation with modern software engineering (FastAPI, Scikit-learn, Groq), I build resilient systems that perform reliably in production.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Skill Clusters Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillClusters.map((cluster, i) => {
            const Icon = cluster.icon;
            return (
              <Reveal key={cluster.title} delay={i * 40}>
                <div className="card h-full p-6 flex flex-col justify-between transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--accent)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                        {cluster.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading">
                      {cluster.title}
                    </h3>

                    <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                      {cluster.context}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {cluster.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-mono transition-colors ${
                            skill.highlight
                              ? "bg-[var(--accent-subtle)] text-[var(--accent)] font-semibold border border-[var(--border-hover)]"
                              : "tag"
                          }`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
