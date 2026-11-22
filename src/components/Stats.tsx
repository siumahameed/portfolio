"use client";

import { Reveal } from "@/lib/Reveal";
import { Users, Activity, Binary, CheckCircle2 } from "lucide-react";

const stats = [
  {
    value: "5,000+",
    label: "Active SaaS Users",
    description: "Students, researchers & businesses on DataTistics",
    icon: Users,
  },
  {
    value: "65",
    label: "Computation Engines",
    description: "Automated statistical tests, APA 7th reporting & assumption checks",
    icon: Activity,
  },
  {
    value: "1,050+",
    label: "Automated Tests",
    description: "pytest test suite maintaining 99.8% production uptime",
    icon: CheckCircle2,
  },
  {
    value: "21+",
    label: "ML & Data Projects",
    description: "Shipped across healthcare ML, NLP, time series, and EDA",
    icon: Binary,
  },
];

export function Stats() {
  return (
    <section className="py-12 md:py-16 border-y border-[var(--border)] bg-[var(--bg-card-subtle)]/50">
      <div className="container-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 50}>
                <div className="card h-full p-6 transition-all duration-300 hover:border-[var(--border-hover)]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="stat-value">{stat.value}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">
                    {stat.label}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
