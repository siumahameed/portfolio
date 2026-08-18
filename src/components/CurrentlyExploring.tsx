"use client";

import { useRef, useState } from "react";
import { useInView } from "@/lib/useInView";
import { motion, AnimatePresence } from "framer-motion";
import { currentlyExploring } from "@/lib/skills";
import { ChevronRight } from "lucide-react";

export function CurrentlyExploring() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div ref={ref} className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">LEARNING</p>
          <h2 className="section-title">Currently Exploring</h2>
          <p className="section-subtitle">
            Actively learning and experimenting with these areas.
          </p>
        </motion.div>

        <div className="mt-10 space-y-2">
          {currentlyExploring.map((item, i) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, y: 8 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                aria-expanded={expanded === i}
                className="w-full flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4 text-left transition-all duration-200 hover:border-[var(--accent)]/40"
              >
                <ChevronRight
                  className={`h-4 w-4 text-[var(--accent)] transition-transform duration-200 ${
                    expanded === i ? "rotate-90" : ""
                  }`}
                />
                <span className="text-sm font-medium text-[var(--text-primary)] font-heading">
                  {item.topic}
                </span>
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-9 mt-2 mb-1 flex flex-wrap gap-1.5">
                      {item.items.map((sub) => (
                        <span key={sub} className="tag text-xs">{sub}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
