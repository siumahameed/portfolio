"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      id={id}
      ref={ref}
      className={`${className}`}
    >
      <div
        className="section-padding container-content"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(8px)",
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {children}
      </div>
    </section>
  );
}
