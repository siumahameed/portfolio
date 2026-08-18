"use client";

export function MathFormulas() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">

      {/* ── Linear Regression ── */}
      <div
        className="absolute font-mono text-[var(--accent)] hidden sm:block"
        style={{
          top: "15%",
          right: "3%",
          fontSize: "11px",
          opacity: 0.05,
          transform: "rotate(-3deg)",
          lineHeight: "2",
        }}
      >
        <div>ŷ = Xβ + ε</div>
        <div>β̂ = (XᵀX)⁻¹Xᵀy</div>
        <div>R² = 1 - SS_res/SS_tot</div>
      </div>

      {/* ── Gradient Descent ── */}
      <div
        className="absolute font-mono text-[var(--accent)]"
        style={{
          top: "55%",
          left: "2%",
          fontSize: "10px",
          opacity: 0.045,
          transform: "rotate(2deg)",
          lineHeight: "2.2",
        }}
      >
        <div>θ := θ - α∇J(θ)</div>
        <div>∂L/∂w = ∂L/∂ŷ · ∂ŷ/∂w</div>
      </div>

      {/* ── Probability / Bayes ── */}
      <div
        className="absolute font-mono text-[var(--accent)]"
        style={{
          top: "78%",
          right: "5%",
          fontSize: "10px",
          opacity: 0.045,
          transform: "rotate(-1deg)",
          lineHeight: "2.2",
        }}
      >
        <div>P(A|B) = P(B|A)·P(A) / P(B)</div>
        <div>E[X] = Σ xᵢP(xᵢ)</div>
        <div>Var(X) = E[X²] - (E[X])²</div>
      </div>

      {/* ── Loss Functions ── */}
      <div
        className="absolute font-mono text-[var(--accent)] hidden md:block"
        style={{
          top: "32%",
          left: "4%",
          fontSize: "10px",
          opacity: 0.04,
          transform: "rotate(1deg)",
          lineHeight: "2.2",
        }}
      >
        <div>L_mse = (1/n)Σ(yᵢ - ŷᵢ)²</div>
        <div>L_cross = -Σ yᵢlog(ŷᵢ)</div>
      </div>

      {/* ── Matrix Operations ── */}
      <div
        className="absolute font-mono text-[var(--accent)] hidden lg:block"
        style={{
          top: "88%",
          left: "10%",
          fontSize: "10px",
          opacity: 0.04,
          transform: "rotate(-2deg)",
          lineHeight: "2.2",
        }}
      >
        <div>W ∈ ℝ^(n×m)</div>
        <div>f(x) = σ(Wx + b)</div>
      </div>

      {/* ── Statistics ── */}
      <div
        className="absolute font-mono text-[var(--accent)]"
        style={{
          top: "48%",
          right: "2%",
          fontSize: "10px",
          opacity: 0.04,
          transform: "rotate(1.5deg)",
          lineHeight: "2.2",
        }}
      >
        <div>t = (x̄ - μ) / (s/√n)</div>
        <div>CI = x̄ ± z·(σ/√n)</div>
      </div>

      {/* ── Information Theory ── */}
      <div
        className="absolute font-mono text-[var(--accent)] hidden md:block"
        style={{
          top: "70%",
          left: "3%",
          fontSize: "10px",
          opacity: 0.04,
          transform: "rotate(-0.5deg)",
          lineHeight: "2.2",
        }}
      >
        <div>H(X) = -Σ p(x)log p(x)</div>
        <div>KL(P||Q) = Σ p(x)log(p(x)/q(x))</div>
      </div>
    </div>
  );
}
