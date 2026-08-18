"use client";

import { useEffect, useRef } from "react";

export function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const lerp = 0.12;
      posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp;

      spotlight.style.setProperty("--sx", `${posRef.current.x}px`);
      spotlight.style.setProperty("--sy", `${posRef.current.y}px`);

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 300px 300px at var(--sx, -200px) var(--sy, -200px), color-mix(in srgb, var(--accent) 6%, transparent) 0%, transparent 70%)",
      }}
    />
  );
}
