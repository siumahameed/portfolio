"use client";

import { Reveal } from "@/lib/Reveal";

const stats = [
  { value: "5+", label: "Featured Projects" },
  { value: "8+", label: "Technical Domains" },
  { value: "4+", label: "Deployed Applications" },
  { value: "4+", label: "Leadership Roles" },
];

export function Stats() {
  return (
    <section className="py-10 md:py-16 border-y border-[var(--border)]">
      <div className="container-content">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} className="text-center" delay={i * 50}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}