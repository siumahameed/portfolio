"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/lib/icons";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <section id="contact" className="section-padding relative">
      {/* Gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, var(--accent-subtle) 100%)",
        }}
      />

      <div ref={ref} className="container-content relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider mb-3">
            Let&apos;s connect
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Got a project in mind?
            <br />
            <span className="text-[var(--accent)]">Let&apos;s talk.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)]">
            I&apos;m open to AI/ML internships, research collaborations,
            freelance projects, and opportunities to build data-driven
            products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/8801571076708?text=Hi%20Sium!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:translate-y-[-1px]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:siumahameed2003@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 hover:text-[var(--text-primary)] hover:border-[var(--accent)]/30"
            >
              <Mail className="h-4 w-4" />
              Send an Email
            </a>
          </div>

          {/* status */}
          <div className="mt-10 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
              Open to opportunities
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-[var(--text-tertiary)]">
            <span>AI/ML Internships</span>
            <span className="text-[var(--border)]">·</span>
            <span>Research Collaborations</span>
            <span className="text-[var(--border)]">·</span>
            <span>Data Science Projects</span>
          </div>

          <div className="mt-8 flex items-center gap-1">
            <a
              href="https://github.com/siumahameed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sium11/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:siumahameed2003@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
