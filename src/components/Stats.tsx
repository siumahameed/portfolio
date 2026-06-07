"use client";

import { Section } from "./Section";

const stats = [
  { value: "36+", label: "Projects Completed" },
  { value: "10+", label: "Technologies" },
  { value: "2+", label: "Years Learning" },
  { value: "1000+", label: "Hours of Practice" },
];

export function Stats() {
  return (
    <Section id="stats">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="card-solid p-6 text-center">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
