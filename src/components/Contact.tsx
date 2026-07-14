"use client";

import { Section } from "./Section";
import { useRef, useState, FormEvent } from "react";
import { useInView } from "@/lib/useInView";

const links = [
  {
    label: "Email",
    value: "siumahameed2003@gmail.com",
    href: "mailto:siumahameed2003@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/siumahameed",
    href: "https://github.com/siumahameed",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sium11",
    href: "https://www.linkedin.com/in/sium11/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Kaggle",
    value: "kaggle.com/siumahameedbhuiyain",
    href: "https://www.kaggle.com/siumahameedbhuiyain",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.34-.082-.469-.248l-4.815-6.046-1.822 1.708v4.153c0 .234-.128.352-.387.352H5.07c-.256 0-.384-.117-.384-.352V.353c0-.233.128-.353.384-.353h2.862c.259 0 .387.12.387.353v12.835l5.197-5.472c.149-.165.318-.246.505-.246.146 0 .281.043.398.129l2.897 2.184c.214.16.214.35 0 .571l-4.585 4.19 5.061 6.718c.128.17.128.335 0 .504z" />
      </svg>
    ),
  },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;
    const body = `From: ${name} (${email})\n\n${message}`;
    const mailto = `mailto:siumahameed2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <Section id="contact">
      <div className="mb-12">
        <h2 className="section-title">Let&apos;s Collaborate</h2>
        <p className="section-subtitle mt-3 max-w-lg">
          Have a project idea, research collaboration, or just want to talk AI?
          I&apos;d love to hear from you.
        </p>
      </div>

      <div
        ref={ref}
        className="grid gap-8 md:grid-cols-5 md:gap-12"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(8px)",
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Form */}
        <div className="md:col-span-3">
          {sent ? (
            <div className="card flex flex-col items-center gap-4 p-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-subtle)] text-[var(--accent)]">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">Message Sent!</h3>
              <p className="text-sm text-[var(--text-secondary)]">Thanks for reaching out. I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-4 p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-3">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 md:col-span-2 md:justify-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener"}
              className="card-hover group flex items-center gap-4 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--accent)]/20 bg-[var(--accent-subtle)] text-[var(--accent)]">
                {link.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-[var(--text-primary)]">{link.label}</p>
                <p className="truncate text-xs text-[var(--text-secondary)]">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
