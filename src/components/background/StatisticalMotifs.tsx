"use client";

import React from "react";

export function StatisticalMotifs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">

      {/* ── Scatter plot with regression line (top-left) ── */}
      <svg
        className="absolute hidden sm:block"
        style={{ top: "8%", left: "5%", width: "280px", height: "200px", opacity: 0.15, color: "var(--accent)", "--axis-color": "var(--text-primary)" } as React.CSSProperties}
        viewBox="0 0 280 200"
      >
        <line x1="30" y1="170" x2="270" y2="170" stroke="var(--axis-color)" strokeWidth="0.8" />
        <line x1="30" y1="10" x2="30" y2="170" stroke="var(--axis-color)" strokeWidth="0.8" />
        {[80, 130, 180, 230].map((x) => (
          <line key={`xt${x}`} x1={x} y1="170" x2={x} y2="174" stroke="var(--axis-color)" strokeWidth="0.5" />
        ))}
        {[40, 70, 100, 130].map((y) => (
          <line key={`yt${y}`} x1="26" y1={y} x2="30" y2={y} stroke="var(--axis-color)" strokeWidth="0.5" />
        ))}
        {[
          [45, 155], [60, 140], [75, 148], [90, 120], [105, 112],
          [120, 95], [135, 88], [150, 72], [165, 65], [180, 50],
          [195, 42], [210, 35], [225, 28], [240, 22], [255, 18],
          [55, 160], [85, 130], [115, 100], [145, 78], [175, 55],
          [100, 125], [130, 92], [160, 68], [190, 48], [220, 32],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="currentColor" opacity={0.6 + (i % 3) * 0.1} />
        ))}
        <line x1="38" y1="162" x2="262" y2="12" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        <path d="M 38 155 Q 150 85 262 5 L 262 19 Q 150 95 38 168 Z" fill="currentColor" opacity="0.08" />
        <text x="150" y="195" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.6">
          y = β₀ + β₁x + ε
        </text>
      </svg>

      {/* ── Normal distribution (top-right) ── */}
      <svg
        className="absolute"
        style={{ top: "5%", right: "8%", width: "300px", height: "180px", opacity: 0.09, color: "var(--accent)", "--axis-color": "var(--text-primary)" } as React.CSSProperties}
        viewBox="0 0 300 180"
      >
        <line x1="20" y1="150" x2="280" y2="150" stroke="var(--axis-color)" strokeWidth="0.8" />
          <path
            d="M 20 150 Q 50 150 70 148 Q 100 140 120 115 Q 140 75 150 30 Q 160 75 180 115 Q 200 140 230 148 Q 250 150 280 150"
            fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.85"
          />
          <path
            d="M 20 150 Q 50 150 70 148 Q 100 140 120 115 Q 140 75 150 30 Q 160 75 180 115 Q 200 140 230 148 Q 250 150 280 150 Z"
            fill="currentColor" opacity="0.1"
          />
          {[110, 130, 150, 170, 190].map((x, i) => (
            <line key={i} x1={x} y1="150" x2={x} y2={150 - [20, 65, 120, 65, 20][i]} stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />
          ))}
          <line x1="150" y1="25" x2="150" y2="150" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <text x="150" y="20" textAnchor="middle" fill="currentColor" fontSize="9" fontFamily="monospace" opacity="0.6">μ</text>
        <text x="110" y="165" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" opacity="0.5">-2σ</text>
        <text x="130" y="165" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" opacity="0.5">-σ</text>
        <text x="170" y="165" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" opacity="0.5">+σ</text>
        <text x="190" y="165" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" opacity="0.5">+2σ</text>
        <text x="150" y="178" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.5">N(μ, σ²)</text>
      </svg>

      {/* ── Correlation heatmap (mid-left) ── */}
      <svg
        className="absolute hidden md:block"
        style={{ top: "38%", left: "3%", width: "180px", height: "180px", opacity: 0.06, color: "var(--accent)", "--axis-color": "var(--text-primary)" } as React.CSSProperties}
        viewBox="0 0 180 180"
      >
        {(() => {
          const matrix = [
            [1.0, 0.8, 0.3, 0.1],
            [0.8, 1.0, 0.5, 0.2],
            [0.3, 0.5, 1.0, 0.7],
            [0.1, 0.2, 0.7, 1.0],
          ];
          const labels = ["x₁", "x₂", "x₃", "x₄"];
          const cellSize = 35;
          const offset = 25;
          return (
            <>
              {matrix.map((row, i) =>
                row.map((val, j) => (
                  <rect
                    key={`${i}-${j}`}
                    x={offset + j * cellSize}
                    y={offset + i * cellSize}
                    width={cellSize - 2}
                    height={cellSize - 2}
                    rx="3"
                    fill="currentColor"
                    opacity={val * 0.6}
                  />
                ))
              )}
              {labels.map((label, i) => (
                <text key={`l${i}`} x={offset + i * cellSize + cellSize / 2 - 1} y={offset - 6} textAnchor="middle" fill="var(--axis-color)" fontSize="8" fontFamily="monospace" opacity="0.5">{label}</text>
              ))}
              {labels.map((label, i) => (
                <text key={`r${i}`} x={offset - 10} y={offset + i * cellSize + cellSize / 2 + 3} textAnchor="middle" fill="var(--axis-color)" fontSize="8" fontFamily="monospace" opacity="0.5">{label}</text>
              ))}
            </>
          );
        })()}
        <text x="90" y="175" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.5">correlation matrix</text>
      </svg>

      {/* ── Time series with forecast (mid-right) ── */}
      <svg
        className="absolute hidden sm:block"
        style={{ top: "42%", right: "4%", width: "300px", height: "140px", opacity: 0.06, color: "var(--accent)", "--axis-color": "var(--text-primary)" } as React.CSSProperties}
        viewBox="0 0 300 140"
      >
        <line x1="20" y1="120" x2="290" y2="120" stroke="var(--axis-color)" strokeWidth="0.8" />
        <line x1="20" y1="10" x2="20" y2="120" stroke="var(--axis-color)" strokeWidth="0.8" />
        <polyline points="30,100 50,95 70,85 90,90 110,70 130,75 150,55 170,60 190,45 210,50" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
        <polyline points="210,50 230,40 250,35 270,30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5" />
        <path d="M 210 50 Q 250 25 270 20 L 270 40 Q 250 45 210 50 Z" fill="currentColor" opacity="0.08" />
        {[[30, 100], [50, 95], [70, 85], [90, 90], [110, 70], [130, 75], [150, 55], [170, 60], [190, 45], [210, 50]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="currentColor" opacity="0.7" />
        ))}
        <line x1="210" y1="15" x2="210" y2="120" stroke="var(--axis-color)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
        <text x="215" y="18" fill="var(--axis-color)" fontSize="7" fontFamily="monospace" opacity="0.4">forecast →</text>
      </svg>

      {/* ── Histogram (bottom-left) ── */}
      <svg
        className="absolute hidden md:block"
        style={{ bottom: "15%", left: "8%", width: "220px", height: "140px", opacity: 0.06, color: "var(--accent)", "--axis-color": "var(--text-primary)" } as React.CSSProperties}
        viewBox="0 0 220 140"
      >
        <line x1="10" y1="120" x2="215" y2="120" stroke="var(--axis-color)" strokeWidth="0.8" />
        <line x1="10" y1="10" x2="10" y2="120" stroke="var(--axis-color)" strokeWidth="0.8" />
        {[[20, 40], [40, 65], [60, 90], [80, 110], [100, 100], [120, 75], [140, 55], [160, 35], [180, 20], [200, 12]].map(([x, h], i) => (
          <rect key={i} x={x} y={120 - h} width="16" height={h} fill="currentColor" opacity={0.3 + (i % 3) * 0.1} rx="1" />
        ))}
        <path d="M 20 120 Q 60 115 80 95 Q 100 50 110 25 Q 120 50 140 95 Q 160 115 200 120" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <text x="110" y="135" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.5">frequency distribution</text>
      </svg>

      {/* ── Neural network layer diagram (bottom-right) ── */}
      <svg
        className="absolute"
        style={{ bottom: "10%", right: "6%", width: "250px", height: "160px", opacity: 0.06, color: "var(--accent)", "--axis-color": "var(--text-primary)" } as React.CSSProperties}
        viewBox="0 0 250 160"
      >
        <text x="30" y="15" textAnchor="middle" fill="var(--axis-color)" fontSize="7" fontFamily="monospace" opacity="0.5">INPUT</text>
        <text x="95" y="15" textAnchor="middle" fill="var(--axis-color)" fontSize="7" fontFamily="monospace" opacity="0.5">HIDDEN 1</text>
        <text x="160" y="15" textAnchor="middle" fill="var(--axis-color)" fontSize="7" fontFamily="monospace" opacity="0.5">HIDDEN 2</text>
        <text x="225" y="15" textAnchor="middle" fill="var(--axis-color)" fontSize="7" fontFamily="monospace" opacity="0.5">OUTPUT</text>
        {[
          { x: 30, ys: [35, 55, 75, 95, 115] },
          { x: 95, ys: [35, 55, 75, 95, 115] },
          { x: 160, ys: [45, 65, 85, 105] },
          { x: 225, ys: [65, 85] },
        ].map((layer, li) =>
          layer.ys.map((y, ni) => (
            <circle key={`n${li}-${ni}`} cx={layer.x} cy={y} r="4" fill="currentColor" opacity="0.5" />
          ))
        )}
        {(() => {
          const layers = [
            { x: 30, ys: [35, 55, 75, 95, 115] },
            { x: 95, ys: [35, 55, 75, 95, 115] },
            { x: 160, ys: [45, 65, 85, 105] },
            { x: 225, ys: [65, 85] },
          ];
          const lines: React.JSX.Element[] = [];
          for (let l = 0; l < layers.length - 1; l++) {
            const from = layers[l];
            const to = layers[l + 1];
            from.ys.forEach((fy, fi) => {
              to.ys.forEach((ty, ti) => {
                lines.push(
                  <line key={`c${l}-${fi}-${ti}`} x1={from.x} y1={fy} x2={to.x} y2={ty} stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
                );
              });
            });
          }
          return lines;
        })()}
        <text x="125" y="150" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.5">deep neural network</text>
      </svg>

      {/* ── Box plot (center-left) ── */}
      <svg
        className="absolute hidden lg:block"
        style={{ top: "65%", left: "15%", width: "200px", height: "100px", opacity: 0.05, color: "var(--accent)", "--axis-color": "var(--text-primary)" } as React.CSSProperties}
        viewBox="0 0 200 100"
      >
        <line x1="10" y1="80" x2="195" y2="80" stroke="var(--axis-color)" strokeWidth="0.5" />
        {[
          { x: 40, q1: 45, median: 55, q3: 65, min: 30, max: 78 },
          { x: 100, q1: 35, median: 50, q3: 60, min: 20, max: 75 },
          { x: 160, q1: 40, median: 58, q3: 70, min: 25, max: 80 },
        ].map((bp, i) => (
          <g key={i}>
            <line x1={bp.x} y1={bp.min} x2={bp.x} y2={bp.q1} stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <line x1={bp.x} y1={bp.q3} x2={bp.x} y2={bp.max} stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <line x1={bp.x - 6} y1={bp.min} x2={bp.x + 6} y2={bp.min} stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <line x1={bp.x - 6} y1={bp.max} x2={bp.x + 6} y2={bp.max} stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <rect x={bp.x - 12} y={bp.q3} width="24" height={bp.q1 - bp.q3} fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="0.8" />
            <line x1={bp.x - 12} y1={bp.median} x2={bp.x + 12} y2={bp.median} stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
          </g>
        ))}
        <text x="100" y="95" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" opacity="0.5">quartile comparison</text>
      </svg>
    </div>
  );
}
