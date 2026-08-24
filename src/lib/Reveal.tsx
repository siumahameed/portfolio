"use client";

import { type ReactNode, type CSSProperties } from "react";

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
  return (
    <div
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}
