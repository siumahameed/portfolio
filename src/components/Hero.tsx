"use client";

import { useState } from "react";
import { Reveal } from "@/lib/Reveal";
import { ArrowRight, Download, Mail, Play, CheckCircle2, Cpu, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon, KaggleIcon } from "@/lib/icons";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] flex items-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container-content w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left: Text & Positioning (7 cols) */}
          <div className="flex flex-col lg:col-span-7">
            <Reveal instant>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3.5 py-1.5 text-xs font-mono text-[var(--text-secondary)] shadow-xs mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for ML Internships &amp; Research &middot; Summer 2027</span>
              </div>
            </Reveal>

            <Reveal instant>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] font-heading leading-[1.08]">
                Sium Ahameed{" "}
                <span className="text-[var(--text-secondary)] font-medium">Bhuyan</span>
              </h1>
            </Reveal>

            <Reveal instant>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-[var(--accent)] font-heading">
                Statistics &times; Machine Learning &times; AI Systems
              </p>
            </Reveal>

            <Reveal instant>
              <p className="mt-4 max-w-xl text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                Bridging mathematical statistics with production AI systems. Creator of{" "}
                <a
                  href="https://datatistics.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--text-primary)] underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)]"
                >
                  DataTistics
                </a>
                , a browser-first platform serving <span className="font-semibold text-[var(--text-primary)]">5,000+ active users</span> across 65 statistical engines with 1,050+ automated tests and 99.8% uptime.
              </p>
            </Reveal>

            <Reveal instant>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn-primary px-6 py-3 text-sm">
                  Explore Work
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="/files/CV.pdf"
                  download="Sium_Ahameed_CV.pdf"
                  className="btn-secondary px-6 py-3 text-sm"
                >
                  <Download className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  Download CV
                </a>
                <a
                  href="https://wa.me/8801571076708?text=Hi%20Sium!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-4 py-3 text-sm"
                  aria-label="WhatsApp"
                >
                  Quick Chat
                </a>
              </div>
            </Reveal>

            <Reveal instant>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                  Connect &middot;
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/siumahameed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sium11/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.kaggle.com/siumahameedbhuiyain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                    aria-label="Kaggle Profile"
                  >
                    <KaggleIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:siumahameed2003@gmail.com"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                    aria-label="Email Sium"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Quick Metrics Bar */}
            <Reveal instant>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[var(--border)]">
                <div>
                  <div className="text-2xl font-bold font-mono text-[var(--text-primary)]">5,000+</div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-0.5">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[var(--accent)]">65</div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-0.5">Stat Engines</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[var(--text-primary)]">1,050+</div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-0.5">Automated Tests</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[var(--text-primary)]">21+</div>
                  <div className="text-xs text-[var(--text-tertiary)] mt-0.5">ML Projects</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: High-Impact Interactive ML Console (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal direction="x" instant className="w-full max-w-md">
              <InteractiveConsole />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveConsole() {
  const [tab, setTab] = useState<"inference" | "datatistics" | "specs">("inference");
  const [patientSample, setPatientSample] = useState<"A" | "B" | "C">("A");
  const [isRunning, setIsRunning] = useState(false);
  const [runStep, setRunStep] = useState(4);
  const [copied, setCopied] = useState(false);

  const samples = {
    A: {
      desc: "Patient A [Age: 58, BP: 142, Chol: 260, HR: 168]",
      label: "Elevated Risk",
      conf: "94.6%",
      latency: "12ms",
      color: "text-red-600 dark:text-red-400 border-red-500/30 bg-red-500/10",
    },
    B: {
      desc: "Patient B [Age: 32, BP: 114, Chol: 180, HR: 72]",
      label: "Low Risk (Healthy)",
      conf: "98.2%",
      latency: "10ms",
      color: "text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    C: {
      desc: "Patient C [Age: 47, BP: 130, Chol: 220, HR: 135]",
      label: "Borderline / Moderate",
      conf: "68.4%",
      latency: "14ms",
      color: "text-amber-600 dark:text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
  };

  const handleRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setRunStep(1);

    setTimeout(() => setRunStep(2), 500);
    setTimeout(() => setRunStep(3), 1000);
    setTimeout(() => {
      setRunStep(4);
      setIsRunning(false);
    }, 1500);
  };

  const copyCode = () => {
    const code = `import xgboost as xgb
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.transform([input_features])
prediction = model.predict_proba(X_scaled)`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeSample = samples[patientSample];

  return (
    <div className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] shadow-xl overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]">
      {/* Console titlebar */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg-card-subtle)] px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-[var(--text-tertiary)]">ml_runtime_v2.5</span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setTab("inference")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
              tab === "inference"
                ? "bg-[var(--accent)] text-white font-semibold"
                : "text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
            }`}
          >
            model.py
          </button>
          <button
            onClick={() => setTab("datatistics")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
              tab === "datatistics"
                ? "bg-[var(--accent)] text-white font-semibold"
                : "text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
            }`}
          >
            engine.py
          </button>
          <button
            onClick={() => setTab("specs")}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
              tab === "specs"
                ? "bg-[var(--accent)] text-white font-semibold"
                : "text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
            }`}
          >
            metrics.json
          </button>
        </div>
      </div>

      {/* Console Body */}
      <div className="p-4 sm:p-5 font-mono text-xs text-[var(--text-secondary)] min-h-[310px] flex flex-col justify-between">
        {tab === "inference" && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[var(--text-tertiary)]"># Clinical XGBoost Risk Classifier</span>
              <button
                onClick={copyCode}
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
                aria-label="Copy snippet"
              >
                {copied ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="text-[var(--text-primary)] text-[11px]">
              <span className="text-[var(--accent)]">import</span> xgboost <span className="text-[var(--accent)]">as</span> xgb
              <br />
              <span className="text-[var(--accent)]">from</span> sklearn.preprocessing <span className="text-[var(--accent)]">import</span> StandardScaler
            </div>

            {/* Sample Selector Pills */}
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-[10px] uppercase text-[var(--text-tertiary)]">Test Profile:</span>
              {(["A", "B", "C"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setPatientSample(s);
                    setRunStep(4);
                  }}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                    patientSample === s
                      ? "bg-[var(--accent)] text-white font-bold"
                      : "border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Profile {s}
                </button>
              ))}
            </div>

            <div className="rounded-lg bg-[var(--code-bg)] p-2.5 border border-[var(--border)] text-[11px] space-y-1">
              <div className="text-[var(--text-tertiary)]">{activeSample.desc}</div>
              <div className="text-emerald-500 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3" /> 5-Fold Stratified CV F1: 0.912
              </div>
            </div>

            {/* Run output progress */}
            <div className="space-y-1 text-[11px]">
              {runStep >= 1 && (
                <div className="text-[var(--text-tertiary)] flex items-center gap-1.5">
                  <span className="text-emerald-500">&gt;</span> Standardizing 13 clinical biomarkers...
                </div>
              )}
              {runStep >= 2 && (
                <div className="text-[var(--text-tertiary)] flex items-center gap-1.5">
                  <span className="text-emerald-500">&gt;</span> Computing XGBoost tree ensemble...
                </div>
              )}
              {runStep >= 3 && (
                <div className="text-[var(--text-tertiary)] flex items-center gap-1.5">
                  <span className="text-emerald-500">&gt;</span> Verifying hypothesis confidence (p &lt; 0.001)...
                </div>
              )}
              {runStep >= 4 && (
                <div className={`rounded-md border p-2 text-xs font-semibold ${activeSample.color}`}>
                  Result: <span className="underline">{activeSample.label}</span> &middot; Conf: {activeSample.conf} &middot; Latency: {activeSample.latency}
                </div>
              )}
            </div>
          </div>
        )}

        {tab === "datatistics" && (
          <div className="space-y-2 text-[11px]">
            <div className="text-[var(--text-tertiary)]"># DataTistics Core Engine Architecture</div>
            <div className="text-[var(--text-primary)]">
              <span className="text-[var(--accent)]">class</span> <span className="text-amber-500 font-bold">DataTisticsEngine</span>:
            </div>
            <div className="pl-3 space-y-1 text-[var(--text-secondary)]">
              <div>engines_available = 65</div>
              <div>test_suite = <span className="text-emerald-500">&quot;1,050+ automated tests (pytest)&quot;</span></div>
              <div>uptime = <span className="text-emerald-500">&quot;99.8% on cloud architecture&quot;</span></div>
              <div>llm_engine = <span className="text-emerald-500">&quot;Groq-Llama-3-70B&quot;</span></div>
              <div className="text-[var(--accent)]">def run_auto_hypothesis(self, dataset):</div>
              <div className="pl-3 text-[var(--text-tertiary)]">
                normality = scipy.stats.shapiro(data)<br />
                test = choose_parametric_or_non(normality.p)<br />
                return generate_apa7_and_ai_pdf(test)
              </div>
            </div>
          </div>
        )}

        {tab === "specs" && (
          <div className="space-y-2 text-[11px]">
            <div className="text-[var(--text-tertiary)]">&#123;/* Production Benchmarks */&#125;</div>
            <pre className="text-[var(--text-primary)] leading-relaxed font-mono">
{`{
  "system": "DataTistics SaaS",
  "active_users": "5,000+",
  "computational_engines": 65,
  "automated_tests": "1,050+ (pytest)",
  "production_uptime": "99.8%",
  "inference_latency": "< 85ms",
  "export_formats": ["APA 7th Word (.docx)", "PDF", "Excel"],
  "stack": ["Python", "FastAPI", "PostgreSQL", "Supabase", "Groq"]
}`}
            </pre>
          </div>
        )}

        {/* Action footer */}
        <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between">
          <span className="text-[11px] font-mono text-[var(--text-tertiary)] flex items-center gap-1.5">
            <Cpu className="h-3.5 w-3.5 text-[var(--accent)]" /> Python 3.11 &middot; Scikit-learn
          </span>
          {tab === "inference" && (
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="inline-flex items-center gap-1.5 rounded-md bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-[var(--accent-hover)] disabled:opacity-50"
            >
              <Play className={`h-3 w-3 ${isRunning ? "animate-spin" : ""}`} />
              {isRunning ? "Computing..." : "Run Inference"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
