"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28, 31, 43, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(28, 31, 43, 0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 40%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 40%, black 20%, transparent 70%)",
        }}
      />
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-100px] -translate-x-1/2"
        style={{
          width: "700px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(91, 95, 238, 0.06) 0%, transparent 70%)",
        }}
      />
      {/* Background Orb */}
      <div
        className="pointer-events-none absolute bottom-[-40px] right-[10%]"
        style={{
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(91, 95, 238, 0.03) 0%, transparent 70%)",
        }}
      />
      <div className="container-content w-full">
        <div
          className="grid gap-10 md:grid-cols-5 md:gap-16"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(8px)",
            transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="flex flex-col justify-center md:col-span-3">
            <div className="divider-accent mb-6" />
            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              Sium Ahameed
            </h1>
            <p className="mt-4 text-lg text-[var(--text-secondary)] sm:text-xl">
              Machine Learning Enthusiast
            </p>
            <p className="mt-6 max-w-lg text-[var(--text-secondary)] leading-relaxed">
              Statistics undergraduate with a strong foundation in statistical
              modeling and machine learning. Passionate about building
              intelligent systems that transform complex data into meaningful
              insights.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a
                href="/portfolio/files/CV.pdf"
                download="Sium_Ahameed_CV.pdf"
                className="btn-ghost gap-1.5"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Resume
              </a>
            </div>


          </div>

          <div className="relative flex items-center justify-center md:col-span-2 md:justify-end">
            {/* Decorative mockup card (background) */}
            <div
              className="absolute right-[5%] top-[-20px] hidden w-full max-w-[320px] overflow-hidden rounded-xl border border-[var(--border)] opacity-30 md:block"
              style={{
                background: "rgba(11, 13, 20, 0.85)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
                zIndex: 0,
              }}
            >
              <div className="flex items-center gap-2 border-b border-[var(--border)] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="ml-auto text-[9px] font-medium text-[var(--text-secondary)]">&#10003; Analyzed</span>
              </div>
              <div className="space-y-2 p-3">
                <div className="flex items-center justify-around rounded-lg border border-[var(--border)] bg-[var(--bg-primary)]/30 p-2">
                  {[
                    { val: "918", lbl: "Rows" },
                    { val: "12", lbl: "Columns" },
                    { val: "0.87", lbl: "Correlation" },
                    { val: "94%", lbl: "Accuracy" },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xs font-bold text-[var(--text-primary)]" style={{ fontFamily: "JetBrains Mono, monospace" }}>{s.val}</div>
                      <div className="text-[7px] uppercase tracking-wider text-[var(--text-secondary)]">{s.lbl}</div>
                    </div>
                  ))}
                </div>
                <svg viewBox="0 0 280 80" className="h-12 w-full" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="mockGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(91,95,238,0.2)" />
                      <stop offset="100%" stopColor="rgba(91,95,238,0)" />
                    </linearGradient>
                  </defs>
                  <polyline points="10,65 50,45 90,52 130,25 170,38 210,18 250,30 275,12" fill="none" stroke="rgba(91,95,238,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="10,65 50,45 90,52 130,25 170,38 210,18 250,30 275,12" fill="url(#mockGrad)" stroke="none" />
                </svg>
                <div className="flex gap-1">
                  {["Descriptive Stats", "Trend Analysis", "PDF Report"].map((t, i) => (
                    <span key={i} className="rounded-md border border-[var(--border)] bg-[var(--bg-primary)]/30 px-2 py-0.5 text-[8px] text-[var(--text-secondary)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-full card p-4 md:p-6" style={{ zIndex: 1 }}>
              <div className="flex items-start gap-4 md:gap-5">
                <div className="h-24 w-24 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-2xl border-[3px] border-[var(--accent)]/30 shadow-lg shadow-[var(--accent)]/5">
                  <img
                    src="/portfolio/images/profile.jpg.jpeg"
                    alt="Sium Ahameed"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
                    Sium Ahameed Bhuyan
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--text-secondary)]">
                    Machine Learning Enthusiast
                  </p>
                  <div className="mt-2 md:mt-3 space-y-1 md:space-y-1.5">
                    <DetailRow icon={
                      <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    } label="Location" value="Dhaka, Bangladesh" />
                    <DetailRow icon={
                      <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                      </svg>
                    } label="Education" value="BSc in Statistics" sub="Dhaka College" />
                  </div>
                </div>
              </div>

              <div className="mt-3 md:mt-4 grid grid-cols-2 gap-1.5 md:gap-2 border-t border-[var(--border)] pt-3 md:pt-4">
                <CompactRow icon={
                  <svg className="h-3.5 w-3.5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                  </svg>
                } label="Languages" value="English, Bengali" />
                <CompactRow icon={
                  <svg className="h-3.5 w-3.5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                } label="Availability" value="Open to Internships" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailRow({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub?: string }) {
  return (
    <div className="flex items-start gap-2">
      {icon}
      <div>
        <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-secondary)]">{label}</p>
        <p className="text-xs text-[var(--text-primary)]">{value}</p>
        {sub && <p className="text-[11px] text-[var(--text-secondary)]">{sub}</p>}
      </div>
    </div>
  );
}

function CompactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-0.5">{icon}</div>
      <div>
        <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-secondary)]">{label}</p>
        <p className="text-[11px] text-[var(--text-primary)]">{value}</p>
      </div>
    </div>
  );
}
