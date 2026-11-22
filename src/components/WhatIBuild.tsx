"use client";

import { Reveal } from "@/lib/Reveal";
import { Brain, LineChart, Cpu, Layers } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Predictive Machine Learning",
    description:
      "Developing supervised & unsupervised models with feature selection, hyperparameter tuning, and robust cross-validation.",
    skills: ["Scikit-learn", "XGBoost", "Feature Engineering", "ROC-AUC / F1"],
    icon: Brain,
  },
  {
    number: "02",
    title: "Statistical Data Science",
    description:
      "Extracting dependable signals from noisy observational data via hypothesis testing, regression diagnostics, and EDA.",
    skills: ["Pandas", "SciPy", "Hypothesis Testing", "Time Series Analysis"],
    icon: LineChart,
  },
  {
    number: "03",
    title: "AI & LLM Workflows",
    description:
      "Integrating state-of-the-art LLMs (Groq, Llama 3) for automated report generation, conversational agents, and domain reasoning.",
    skills: ["Groq API", "RAG Systems", "Prompt Pipelines", "Structured Output"],
    icon: Cpu,
  },
  {
    number: "04",
    title: "Full-Stack ML Systems",
    description:
      "Shipping complete, maintainable applications from Python backends to interactive dashboards, databases, and automated reporting.",
    skills: ["FastAPI", "PostgreSQL", "Supabase", "Docker / Cloud"],
    icon: Layers,
  },
];

export function WhatIBuild() {
  return (
    <section id="what-i-build" className="section-padding">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col">
            <span className="section-label mb-2">CORE COMPETENCIES</span>
            <h2 className="section-title">Engineering Intelligence</h2>
            <p className="section-subtitle">
              From mathematical statistics and exploratory data science to deployed machine learning systems and AI-powered products.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.number} delay={i * 60}>
                <div className="card group relative flex flex-col justify-between h-full p-6 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--accent)] transition-colors group-hover:border-[var(--border-hover)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[var(--text-tertiary)]">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading group-hover:text-[var(--accent)] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border)]">
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span key={skill} className="tag text-[10px]">
                          {skill}
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
