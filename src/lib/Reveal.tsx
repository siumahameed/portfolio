"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
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
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const effectiveDelay = mobile ? Math.round(delay * 0.4) : delay;

  return (
    <div
      ref={ref}
      className={`${direction === "y" ? "reveal" : "reveal-x"} ${className}`}
      data-visible={isVisible || undefined}
      style={{ ...style, transitionDelay: isVisible ? `${effectiveDelay}ms` : undefined }}
    >
      {children}
    </div>
  );
}