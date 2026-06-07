"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[calc(100vh-4rem)] items-center pt-20 pb-24 md:pt-24 md:pb-32"
    >
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
              Jr. Machine Learning Engineer
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

          <div className="flex items-center justify-center md:col-span-2 md:justify-end">
            <div className="w-full max-w-sm card p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-28 w-28 overflow-hidden rounded-2xl border-[3px] border-[var(--accent)]/30 shadow-lg shadow-[var(--accent)]/5">
                  <img
                    src="/portfolio/images/profile.jpg.jpeg"
                    alt="Sium Ahameed"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Sium Ahameed Bhuyan
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Jr. Machine Learning Engineer
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-[var(--border)] pt-6">
                <DetailRow icon={
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                } label="Location" value="Dhaka, Bangladesh" />
                <DetailRow icon={
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                } label="Education" value="BSc in Statistics" sub="Dhaka College" />
                <DetailRow icon={
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                  </svg>
                } label="Languages" value="English, Bengali" />
                <DetailRow icon={
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                } label="Availability" value="Open to Internships & Collaborations" />
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
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">{label}</p>
        <p className="text-sm text-[var(--text-primary)]">{value}</p>
        {sub && <p className="text-xs text-[var(--text-secondary)]">{sub}</p>}
      </div>
    </div>
  );
}
