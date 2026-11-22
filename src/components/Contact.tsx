"use client";

import { useState, useEffect } from "react";
import { Reveal } from "@/lib/Reveal";
import { ArrowUpRight, Mail, Copy, Check, MessageSquare, MapPin, Clock, FileText, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, KaggleIcon } from "@/lib/icons";

const contactTopics = [
  {
    label: "ML Internship (Summer 2027)",
    waMsg: "Hi Sium! I saw your portfolio and would like to discuss a Machine Learning Internship opportunity.",
    emailSubj: "Machine Learning Internship Opportunity",
  },
  {
    label: "Statistical / AI Research",
    waMsg: "Hi Sium! I am interested in collaborating on statistical modeling or ML research with you.",
    emailSubj: "Research Collaboration Inquiry",
  },
  {
    label: "DataTistics / AI Platforms",
    waMsg: "Hi Sium! I tried DataTistics and would love to talk about building intelligent data tools.",
    emailSubj: "DataTistics & AI Platform Discussion",
  },
  {
    label: "General Discussion",
    waMsg: "Hi Sium! I came across your work in ML and statistics and wanted to connect.",
    emailSubj: "Portfolio Connection & Introduction",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedTopicIdx, setSelectedTopicIdx] = useState(0);
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

  const activeTopic = contactTopics[selectedTopicIdx];
  const waUrl = `https://wa.me/8801571076708?text=${encodeURIComponent(activeTopic.waMsg)}`;
  const emailUrl = `mailto:siumahameed2003@gmail.com?subject=${encodeURIComponent(activeTopic.emailSubj)}&body=${encodeURIComponent(activeTopic.waMsg)}`;

  return (
    <section id="contact" className="section-padding">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Heading & Topic Selector (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="section-label mb-2">GET IN TOUCH</span>
              <h2 className="section-title">
                Let&apos;s Build Something Intelligent Together
              </h2>
              <p className="section-subtitle mt-4">
                Whether you&apos;re looking for an ML engineering intern, exploring a research collaboration in statistical modeling, or seeking advice on full-stack AI data platforms—my inbox is open.
              </p>
            </Reveal>

            {/* Quick Topic Selector */}
            <Reveal delay={40} className="mt-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] block mb-2.5">
                Select inquiry topic to tailor your message:
              </span>
              <div className="flex flex-wrap gap-2">
                {contactTopics.map((topic, i) => (
                  <button
                    key={topic.label}
                    onClick={() => setSelectedTopicIdx(i)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                      selectedTopicIdx === i
                        ? "bg-[var(--accent)] text-white font-semibold shadow-xs"
                        : "border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={70}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-5 py-3 text-sm inline-flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={emailUrl}
                  className="btn-secondary px-5 py-3 text-sm inline-flex items-center gap-2"
                >
                  <Send className="h-4 w-4 text-[var(--accent)]" />
                  Compose Email
                </a>

                <button
                  onClick={copyEmail}
                  className="btn-secondary px-4 py-3 text-sm inline-flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-[var(--text-tertiary)]" />
                      Copy Address
                    </>
                  )}
                </button>
              </div>
            </Reveal>

            {/* Availability status beacon */}
            <Reveal delay={100}>
              <div className="mt-8 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] max-w-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                      Current Availability
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                    Open for Summer 2027
                  </span>
                </div>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Open for Machine Learning internships (Summer 2027 / Immediate remote roles), collaborative research in statistical inference, and full-stack AI engineering.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Direct details & Live Clock (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={60}>
              <div className="card p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[var(--text-tertiary)]">
                    Direct Email
                  </span>
                  <p className="mt-1 text-base font-bold font-mono text-[var(--text-primary)]">
                    siumahameed2003@gmail.com
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <span className="text-[11px] font-mono uppercase text-[var(--text-tertiary)]">
                    Location &amp; Local Time
                  </span>
                  <div className="mt-2 flex items-center justify-between text-sm text-[var(--text-secondary)]">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[var(--accent)]" />
                      Dhaka, Bangladesh
                    </span>
                    {dhakaTime && (
                      <span className="font-mono text-xs text-[var(--text-primary)] font-semibold flex items-center gap-1.5 bg-[var(--bg-secondary)] px-2 py-0.5 rounded">
                        <Clock className="h-3 w-3 text-[var(--accent)]" />
                        {dhakaTime}
                      </span>
                    )}
                  </div>
                  <div className="mt-1.5 text-xs text-[var(--text-tertiary)] font-mono">
                    Timezone: UTC+6 (BST) &middot; Typically responds within 24h
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <span className="text-[11px] font-mono uppercase text-[var(--text-tertiary)]">
                    Professional Profiles &amp; Resume
                  </span>
                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href="https://github.com/siumahameed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sium11/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.kaggle.com/siumahameedbhuiyain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                      aria-label="Kaggle Profile"
                    >
                      <KaggleIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="mailto:siumahameed2003@gmail.com"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
                      aria-label="Direct Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href="/files/CV.pdf"
                      download="Sium_Ahameed_CV.pdf"
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card-subtle)] text-xs font-semibold text-[var(--text-primary)] py-2.5 transition-all hover:border-[var(--border-hover)]"
                    >
                      <FileText className="h-3.5 w-3.5 text-[var(--accent)]" />
                      Download Resume
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
