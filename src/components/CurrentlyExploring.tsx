"use client";

import { Reveal } from "@/lib/Reveal";
import { BrainCircuit, GitFork, Zap, Database } from "lucide-react";

interface Track {
  domain: string;
  status: string;
  dotColor: string;
  description: string;
  topics: string[];
  icon: typeof BrainCircuit;
}

const tracks: Track[] = [
  {
    domain: "Deep Learning & Transformer Architectures",
    status: "Active Study & Experiments",
    dotColor: "bg-emerald-500 animate-pulse",
    description: "Diving into PyTorch fundamentals, self-attention mechanisms, and fine-tuning open-weights models.",
    topics: ["PyTorch", "Hugging Face Transformers", "Attention Mechanisms", "LoRA / QLoRA Fine-tuning"],
    icon: BrainCircuit,
  },
  {
    domain: "Statistical Causal Inference",
    status: "Researching",
    dotColor: "bg-sky-500",
    description: "Bridging correlation to causation: understanding counterfactuals, DAGs, and treatment effect estimation.",
    topics: ["Causal Graphical Models", "Do-Calculus", "Propensity Score Matching", "Instrumental Variables"],
    icon: GitFork,
  },
  {
    domain: "Production ML Systems & LLMOps",
    status: "Prototyping",
    dotColor: "bg-amber-500",
    description: "Techniques for low-latency model inference, caching, and evaluation harnesses for production agents.",
    topics: ["vLLM Serving", "FastAPI Async Workers", "Evaluation Benchmarks", "Structured Output Validation"],
    icon: Zap,
  },
  {
    domain: "Vector Databases & Advanced RAG",
    status: "Implementation",
    dotColor: "bg-violet-500",
    description: "Benchmarking hybrid lexical and dense vector search, reranking, and semantic chunking strategies.",
    topics: ["Qdrant", "ChromaDB", "ColBERT Reranking", "Context-Aware Chunking"],
    icon: Database,
  },
];

export function CurrentlyExploring() {
  return (
    <section className="section-padding">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col">
            <span className="section-label mb-2">RESEARCH &amp; GROWTH</span>
            <h2 className="section-title">Currently Exploring</h2>
            <p className="section-subtitle">
              Active learning tracks, prototypes, and domains I&apos;m investigating to push my capabilities further.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <Reveal key={track.domain} delay={i * 50}>
                <div className="card group relative flex flex-col justify-between h-full p-5 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-0.5">
                  <div>
                    {/* Header: Specialized Icon + Status Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--accent)] transition-colors group-hover:border-[var(--border-hover)] group-hover:bg-[var(--accent-subtle)]">
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card-subtle)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--text-secondary)]">
                        <span className={`h-1.5 w-1.5 rounded-full ${track.dotColor}`} />
                        {track.status}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-3.5 text-base font-bold text-[var(--text-primary)] font-heading transition-colors group-hover:text-[var(--accent)]">
                      {track.domain}
                    </h3>
                    <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                      {track.description}
                    </p>
                  </div>

                  {/* Tech stack topics */}
                  <div className="mt-4 pt-3 border-t border-[var(--border)] flex flex-wrap gap-1.5">
                    {track.topics.map((topic) => (
                      <span key={topic} className="tag text-[10px] font-mono py-0.5 px-2">
                        {topic}
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
