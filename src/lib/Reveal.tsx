"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { useInView } from "@/lib/useInView";

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "y",
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "y" | "x";
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`${direction === "y" ? "reveal" : "reveal-x"} ${className}`}
      data-visible={isVisible || undefined}
      style={{ ...style, transitionDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}