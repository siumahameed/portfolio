"use client";

export function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Top subtle ambient illumination */}
      <div
        className="absolute left-1/2 -top-[240px] -translate-x-1/2 rounded-full opacity-60 dark:opacity-40"
        style={{
          width: "900px",
          height: "450px",
          background: "radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
    </div>
  );
}
