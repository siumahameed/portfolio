"use client";

import { useState } from "react";
import { Reveal } from "@/lib/Reveal";
import { ChevronRight, Compass } from "lucide-react";

interface Track {
  domain: string;
  status: string;
  description: string;
  topics: string[];
}

const tracks: Track[] = [
  {
    domain: "Deep Learning & Transformer Architectures",
    status: "Active Study & Experiments",
    description: "Diving into PyTorch fundamentals, self-attention mechanisms, and fine-tuning open-weights models.",
    topics: ["PyTorch", "Hugging Face Transformers", "Attention Mechanisms", "LoRA / QLoRA Fine-tuning"],
  },
  {
    domain: "Statistical Causal Inference",
    status: "Researching",
    description: "Bridging correlation to causation: understanding counterfactuals, DAGs, and treatment effect estimation.",
    topics: ["Causal Graphical Models", "Do-Calculus", "Propensity Score Matching", "Instrumental Variables"],
  },
  {
    domain: "Production ML Systems & LLMOps",
    status: "Prototyping",
    description: "Techniques for low-latency model inference, caching, and evaluation harnesses for production agents.",
    topics: ["vLLM Serving", "FastAPI Async Workers", "Evaluation Benchmarks", "Structured Output Validation"],
  },
  {
    domain: "Vector Databases & Advanced RAG",
    status: "Implementation",
    description: "Benchmarking hybrid lexical and dense vector search, reranking, and semantic chunking strategies.",
    topics: ["Qdrant", "ChromaDB", "ColBERT Reranking", "Context-Aware Chunking"],
  },
];

export function CurrentlyExploring() {
  const [expanded, setExpanded] = useState<number | null>(0);

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

        <div className="mt-10 space-y-3">
          {tracks.map((track, i) => {
            const isExpanded = expanded === i;
            return (
              <Reveal key={track.domain} delay={i * 40}>
                <div className="card overflow-hidden transition-all duration-200 hover:border-[var(--border-hover)]">
                  <button
                    onClick={() => setExpanded(isExpanded ? null : i)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--accent)]">
                        <Compass className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[var(--text-primary)] font-heading">
                          {track.domain}
                        </h3>
                        <span className="text-[11px] font-mono text-[var(--accent)]">
                          {track.status}
                        </span>
                      </div>
                    </div>

                    <ChevronRight
                      className={`h-4 w-4 text-[var(--text-tertiary)] transition-transform duration-200 ${
                        isExpanded ? "rotate-90 text-[var(--accent)]" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-[var(--border)] mt-1">
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                        {track.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {track.topics.map((t) => (
                          <span key={t} className="tag text-xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
