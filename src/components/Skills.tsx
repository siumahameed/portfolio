"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { Section } from "./Section";

const categories = [
  {
    name: "Machine Learning",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    skills: ["Scikit-learn", "NLTK"],
  },
  {
    name: "Data Analysis",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    skills: ["Pandas", "NumPy", "SciPy", "SQL"],
  },
  {
    name: "Visualization",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    skills: ["Matplotlib", "Seaborn", "Plotly"],
  },
  {
    name: "Development",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    skills: ["Python", "FastAPI", "Git", "Jupyter", "VS Code", "Cursor", "MS Office"],
  },
];

const proficiencies = [
  { label: "Python", value: 78 },
  { label: "Machine Learning", value: 85 },
  { label: "Deep Learning", value: 60 },
  { label: "Data Analysis", value: 88 },
  { label: "Statistics", value: 95 },
  { label: "SQL", value: 90 },
];

function RadarChart({ visible }: { visible: boolean }) {
  const cx = 200, cy = 200, r = 130;
  const n = proficiencies.length;
  const slice = (2 * Math.PI) / n;
  const ringValues = [20, 40, 60, 80, 100];

  const segmentColors = [
    "#3B82F6",
    "#8B5CF6",
    "#14B8A6",
    "#F59E0B",
    "#EF4444",
    "#EC4899",
  ];

  const segmentLabels = ["Python", "ML", "DL", "Data Analysis", "Statistics", "SQL"];

  const angle = (i: number) => -Math.PI / 2 + i * slice;

  const gridRing = (radius: number) =>
    Array.from({ length: n + 1 }, (_, i) => {
      const a = angle(i);
      return `${cx + radius * Math.cos(a)},${cy + radius * Math.sin(a)}`;
    }).join(" ");

  const axisEnd = (i: number) => {
    const a = angle(i);
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  };

  const labelPos = (i: number) => {
    const a = angle(i);
    const lr = r + 28;
    return {
      x: cx + lr * Math.cos(a),
      y: cy + lr * Math.sin(a),
    };
  };

  const dp = proficiencies.map((p, i) => {
    const a = angle(i);
    const d = ((visible ? p.value : 0) / 100) * r;
    return { x: cx + d * Math.cos(a), y: cy + d * Math.sin(a) };
  });

  const dpString = dp.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[260px] mx-auto">
      <defs>
        {segmentColors.map((color, i) => (
          <filter key={i} id={`glow-${i}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor={color} floodOpacity="0.6" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
        <radialGradient id="data-fill-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.02" />
        </radialGradient>
      </defs>

      <polygon points={gridRing(r)} fill="url(#data-fill-grad)" />

      <g>
        {ringValues.map((v) => (
          <polygon
            key={v}
            points={gridRing((v / 100) * r)}
            fill="none"
            stroke="var(--border)"
            strokeWidth="0.8"
            opacity="0.5"
          />
        ))}
      </g>

      <g>
        {Array.from({ length: n }, (_, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={axisEnd(i).split(",")[0]}
            y2={axisEnd(i).split(",")[1]}
            stroke="var(--border)"
            strokeWidth="0.8"
            opacity="0.4"
          />
        ))}
      </g>

      <g>
        {dp.map((p, i) => {
          const next = dp[(i + 1) % n];
          return (
            <line
              key={i}
              x1={p.x}
              y1={p.y}
              x2={next.x}
              y2={next.y}
              stroke={segmentColors[i]}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter={`url(#glow-${i})`}
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity ${0.6 + i * 0.08}s ease-out`,
              }}
            />
          );
        })}
      </g>

      <polygon
        points={dpString}
        fill="var(--accent)"
        style={{
          opacity: visible ? 0.12 : 0,
          transition: "opacity 0.8s ease-out",
        }}
      />

      {dp.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy={p.y}
            r="6"
            fill={segmentColors[i]}
            stroke="var(--bg-primary)"
            strokeWidth="2.5"
            filter={`url(#glow-${i})`}
            className={visible ? "radar-node-pulse" : ""}
            style={{
              animationDelay: `${0.6 + i * 0.08}s`,
              opacity: visible ? 1 : 0,
              transition: `opacity ${0.6 + i * 0.08}s ease-out`,
            }}
          />
          <circle
            cx={p.x}
            cy={p.y}
            r="14"
            fill="transparent"
            className="cursor-pointer"
          >
            <title>{`${segmentLabels[i]}: ${proficiencies[i].value}%`}</title>
          </circle>
        </g>
      ))}

      {proficiencies.map((p, i) => {
        const pos = labelPos(i);
        return (
          <text
            key={p.label}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--text-primary)"
            fontSize="11"
            fontWeight="500"
            fontFamily="inherit"
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity ${0.8 + i * 0.1}s ease-out`,
            }}
          >
            {p.label}
          </text>
        );
      })}
    </svg>
  );
}

export function Skills() {
  const gridRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const gridVisible = useInView(gridRef);
  const barsVisible = useInView(barsRef);

  return (
    <Section id="skills">
      <div className="mb-12">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with.
        </p>
      </div>

      {/* Category Grid */}
      <div
        ref={gridRef}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        style={{
          transform: gridVisible ? "translateY(0)" : "translateY(8px)",
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={cat.name}
            className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[var(--accent)]/5 hover:border-[var(--accent)]/30"
            style={{
              transition: `all 0.3s ease ${i * 60}ms`,
            }}
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)] opacity-60" />

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] transition-colors duration-200 group-hover:bg-[var(--accent)] group-hover:text-white">
                {cat.icon}
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                {cat.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)] transition-colors duration-200 group-hover:border-[var(--accent)]/20 group-hover:text-[var(--text-primary)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency Radar */}
      <div ref={barsRef} className="mt-8">
        <div className="mb-3 flex items-center gap-3">
          <div className="divider-accent" />
          <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
            Proficiency
          </h3>
        </div>
        <div
          className="card p-4 sm:p-6 flex justify-center"
          style={{
            transform: barsVisible ? "translateY(0)" : "translateY(8px)",
            transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <RadarChart visible={barsVisible} />
        </div>
      </div>
    </Section>
  );
}
