"use client";

import { useMemo } from "react";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

export function DataNetwork() {
  const { layers, connections, floatingNodes } = useMemo(() => {
    const rand = seededRandom(777);

    const l = [
      { x: 12, nodes: [18, 28, 38, 48, 58, 68, 78] },
      { x: 28, nodes: [22, 34, 46, 58, 70] },
      { x: 44, nodes: [26, 40, 54, 68] },
      { x: 60, nodes: [30, 46, 62] },
      { x: 76, nodes: [38, 54] },
      { x: 90, nodes: [46] },
    ];

    const c: { x1: number; y1: number; x2: number; y2: number; pulse: boolean; delay: number }[] = [];
    for (let i = 0; i < l.length - 1; i++) {
      const from = l[i];
      const to = l[i + 1];
      from.nodes.forEach((fy) => {
        to.nodes.forEach((ty) => {
          c.push({
            x1: from.x,
            y1: fy,
            x2: to.x,
            y2: ty,
            pulse: rand() < 0.08,
            delay: rand() * 8,
          });
        });
      });
    }

    const fn = Array.from({ length: 20 }, () => ({
      x: rand() * 96 + 2,
      y: rand() * 96 + 2,
      size: rand() * 1.5 + 0.8,
      pulse: rand() < 0.2,
      delay: rand() * 6,
    }));

    return { layers: l, connections: c, floatingNodes: fn };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <svg
        className="h-full w-full"
        style={{ opacity: 0.07, color: "var(--accent)" }}
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {connections.map((conn, i) => (
          <g key={`c-${i}`}>
            <line
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke="currentColor"
              strokeWidth="0.08"
              opacity="0.3"
            />
            {conn.pulse && (
              <circle r="0.25" fill="currentColor" opacity="0.7">
                <animateMotion
                  dur="5s"
                  begin={`${conn.delay}s`}
                  repeatCount="indefinite"
                  path={`M${conn.x1},${conn.y1} L${conn.x2},${conn.y2}`}
                />
              </circle>
            )}
          </g>
        ))}

        {layers.map((layer, li) =>
          layer.nodes.map((y, ni) => (
            <g key={`n-${li}-${ni}`}>
              <circle cx={layer.x} cy={y} r="0.5" fill="currentColor" opacity="0.6" />
              <circle cx={layer.x} cy={y} r="0.5" fill="none" stroke="currentColor" strokeWidth="0.05">
                <animate
                  attributeName="r"
                  values="0.5;1.2;0.5"
                  dur="4s"
                  begin={`${li * 0.5 + ni * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.4;0;0.4"
                  dur="4s"
                  begin={`${li * 0.5 + ni * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))
        )}

        {floatingNodes.map((node, i) => (
          <g key={`f-${i}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * 0.15}
              fill="currentColor"
              opacity="0.3"
            />
            {node.pulse && (
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size * 0.15}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.04"
              >
                <animate
                  attributeName="r"
                  values={`${node.size * 0.15};${node.size * 0.4};${node.size * 0.15}`}
                  dur="6s"
                  begin={`${node.delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0;0.3"
                  dur="6s"
                  begin={`${node.delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
