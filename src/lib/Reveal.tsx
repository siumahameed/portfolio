"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { useInView } from "./useInView";

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
  const visible = useInView(ref);

  const translate = visible
    ? "translate(0, 0)"
    : direction === "x"
      ? "translate(16px, 0)"
      : "translate(0, 16px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: translate,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
