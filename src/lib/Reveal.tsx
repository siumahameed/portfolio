"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { useInView } from "./useInView";

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "y",
  style,
  instant = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "y" | "x";
  style?: CSSProperties;
  instant?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { initial: instant });

  const isShown = instant || visible;

  const translate = isShown
    ? "translate(0, 0)"
    : direction === "x"
      ? "translate(14px, 0)"
      : "translate(0, 14px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isShown ? 1 : 0,
        transform: translate,
        transition: instant
          ? undefined
          : `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isShown ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
