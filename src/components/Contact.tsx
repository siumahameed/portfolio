"use client";

import { useState, useEffect } from "react";
import { Reveal } from "@/lib/Reveal";
import { ArrowUpRight, Mail, Copy, Check, MessageSquare, MapPin, Clock, FileText, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, KaggleIcon } from "@/lib/icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [dhakaTime, setDhakaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }).format(now);
        setDhakaTime(formatted);
      } catch {
        setDhakaTime("UTC+6");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("siumahameed2003@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const waUrl = `https://wa.me/8801571076708?text=${encodeURIComponent("Hi Sium! I came across your portfolio and would like to connect.")}`;
  const emailUrl = `mailto:siumahameed2003@gmail.com?subject=${encodeURIComponent("Portfolio Inquiry / Discussion")}&body=${encodeURIComponent("Hi Sium,\n\nI came across your portfolio and would love to connect.")}`;

  return (
    <section id="contact" className="section-padding">
      <div className="container-content">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Heading, Availability & Inquiry Controls (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                  <span className="section-label">GET IN TOUCH</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Summer 2027
                  </span>
                </div>
                <h2 className="section-title">
                  Let&apos;s Build Something Intelligent Together
                </h2>
                <p className="section-subtitle mt-2.5 text-sm sm:text-base">
                  Looking for an ML engineering intern, exploring statistical research, or seeking insights into full-stack AI data platforms? My inbox is always open.
                </p>
              </div>
            </Reveal>

            {/* Quick Actions */}
            <Reveal delay={40}>
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto px-4 py-2.5 text-xs inline-flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  Chat on WhatsApp
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href={emailUrl}
                  className="btn-secondary w-full sm:w-auto px-4 py-2.5 text-xs inline-flex items-center justify-center gap-1.5"
                >
                  <Send className="h-3.5 w-3.5 text-[var(--accent)]" />
                  Compose Email
                </a>

                <button
                  onClick={copyEmail}
                  className="btn-secondary w-full sm:w-auto px-3.5 py-2.5 text-xs inline-flex items-center justify-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[var(--text-tertiary)]" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Direct Info Card (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={50}>
              <div className="card p-5 sm:p-6 space-y-4">
                {/* Email line */}
                <div>
                  <span className="text-[10px] font-mono uppercase text-[var(--text-tertiary)]">
                    Direct Email
                  </span>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-sm font-bold font-mono text-[var(--text-primary)]">
                      siumahameed2003@gmail.com
                    </p>
                    <button
                      onClick={copyEmail}
                      className="text-xs text-[var(--accent)] hover:underline font-mono flex items-center gap-1"
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Location & Time */}
                <div className="pt-3 border-t border-[var(--border)]">
                  <span className="text-[10px] font-mono uppercase text-[var(--text-tertiary)]">
                    Location &amp; Local Time
                  </span>
                  <div className="mt-1.5 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
                      Dhaka, Bangladesh
                    </span>
                    {dhakaTime && (
                      <span className="font-mono text-[11px] text-[var(--text-primary)] font-semibold flex items-center gap-1 bg-[var(--bg-secondary)] px-2 py-0.5 rounded">
                        <Clock className="h-3 w-3 text-[var(--accent)]" />
                        {dhakaTime}
                      </span>
                    )}
                  </div>
                </div>

                {/* Profiles & Resume */}
                <div className="pt-3 border-t border-[var(--border)]">
                  <span className="text-[10px] font-mono uppercase text-[var(--text-tertiary)]">
                    Profiles &amp; Resume
                  </span>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <a
                      href="https://github.com/siumahameed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sium11/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.kaggle.com/siumahameedbhuiyain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                      aria-label="Kaggle Profile"
                    >
                      <KaggleIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="mailto:siumahameed2003@gmail.com"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                      aria-label="Direct Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href="/files/CV.pdf"
                      download="Sium_Ahameed_CV.pdf"
                      className="w-full sm:w-auto sm:flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-xs font-semibold text-[var(--text-primary)] py-2 px-3 transition-all hover:border-[var(--border-hover)]"
                    >
                      <FileText className="h-3.5 w-3.5 text-[var(--accent)]" />
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
