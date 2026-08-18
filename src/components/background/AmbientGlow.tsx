"use client";

export function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* Hero area - upper right, strongest */}
      <div
        className="absolute"
        style={{
          top: "-10%",
          right: "-5%",
          width: "60%",
          height: "60%",
          background:
            "radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Projects area - left side, medium */}
      <div
        className="absolute"
        style={{
          top: "30%",
          left: "-10%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(ellipse at center, var(--accent-subtle) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Workflow area - center, subtle */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "25%",
          width: "50%",
          height: "40%",
          background:
            "radial-gradient(ellipse at center, var(--accent-subtle) 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
      />

      {/* Contact area - bottom center, second strongest */}
      <div
        className="absolute"
        style={{
          bottom: "-5%",
          left: "20%",
          width: "60%",
          height: "60%",
          background:
            "radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(110px)",
        }}
      />
    </div>
  );
}
