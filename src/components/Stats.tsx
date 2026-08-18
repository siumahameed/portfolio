"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Featured Projects" },
  { value: "8+", label: "Technical Domains" },
  { value: "4+", label: "Deployed Applications" },
  { value: "4+", label: "Leadership Roles" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <section className="py-12 md:py-16 border-y border-[var(--border)]">
      <div ref={ref} className="container-content">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.25, delay: i * 0.05 }}
            >
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
