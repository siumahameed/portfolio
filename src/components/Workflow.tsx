"use client";

import { Reveal } from "@/lib/Reveal";
import { Database, Filter, Search, Wrench, Brain, BarChart2, Rocket } from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    name: "Data Ingestion",
    description: "Audit raw data, handle schemas, identify sampling bias, and verify format integrity.",
    tools: ["Pandas", "SQL", "CSV/Parquet"],
    icon: Database,
  },
  {
    step: "02",
    name: "Cleaning & Imputation",
    description: "Detect outliers, resolve missing values intelligently, and perform data type corrections.",
    tools: ["SciPy", "Missingno", "NumPy"],
    icon: Filter,
  },
  {
    step: "03",
    name: "Exploratory Inference",
    description: "Analyze probability distributions, correlations, skewness, and multi-collinearity.",
    tools: ["Seaborn", "Statsmodels", "Plotly"],
    icon: Search,
  },
  {
    step: "04",
    name: "Feature Engineering",
    description: "Construct meaningful domain features, scale numerical tensors, and encode categoricals.",
    tools: ["Scikit-learn", "PCA", "Feature Selection"],
    icon: Wrench,
  },
  {
    step: "05",
    name: "Model Training",
    description: "Establish simple baselines first; train tree ensembles & models with stratified K-fold CV.",
    tools: ["XGBoost", "Random Forest", "GridSearchCV"],
    icon: Brain,
  },
  {
    step: "06",
    name: "Validation & Error Analysis",
    description: "Evaluate beyond simple accuracy: F1, precision-recall curves, confusion matrices, and calibration.",
    tools: ["ROC-AUC", "SHAP", "Error Slicing"],
    icon: BarChart2,
  },
  {
    step: "07",
    name: "Deployment & Serving",
    description: "Package model inference into async FastAPI endpoints, containerize, and monitor performance.",
    tools: ["FastAPI", "Docker", "Groq AI", "Render"],
    icon: Rocket,
  },
];

export function Workflow() {
  return (
    <section id="how-i-build" className="section-padding">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col">
            <span className="section-label mb-2">METHODOLOGY</span>
            <h2 className="section-title">The Engineering Approach</h2>
            <p className="section-subtitle">
              I don&apos;t jump directly to complex models. I believe in establishing strong statistical baselines, verifying data sanity, and measuring performance rigorously.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((s, i) => {
            const Icon = s.icon;
            const isLast = i === workflowSteps.length - 1;
            return (
              <Reveal key={s.step} delay={i * 40} className={isLast ? "sm:col-span-2 lg:col-span-2" : ""}>
                <div className="card h-full p-5 flex flex-col justify-between transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[var(--accent)] bg-[var(--accent-subtle)] px-2 py-0.5 rounded">
                        STEP {s.step}
                      </span>
                      <Icon className="h-4 w-4 text-[var(--text-tertiary)]" />
                    </div>

                    <h3 className="text-base font-bold text-[var(--text-primary)] font-heading">
                      {s.name}
                    </h3>

                    <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--border)] flex flex-wrap gap-1">
                    {s.tools.map((tool) => (
                      <span key={tool} className="tag text-[9px] font-mono">
                        {tool}
                      </span>
                    ))}
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
