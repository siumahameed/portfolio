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

    const startAnimation = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      startAnimation();
    };

    const onVisibility = () => {
      if (document.hidden) {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = 0;
        }
      } else {
        const dx = targetRef.current.x - posRef.current.x;
        const dy = targetRef.current.y - posRef.current.y;
        if (Math.hypot(dx, dy) > 0.5) {
          startAnimation();
        }
      }
    };

    const animate = () => {
      const dx = targetRef.current.x - posRef.current.x;
      const dy = targetRef.current.y - posRef.current.y;

      if (Math.hypot(dx, dy) < 0.2) {
        posRef.current.x = targetRef.current.x;
        posRef.current.y = targetRef.current.y;
        spotlight.style.setProperty("--sx", `${posRef.current.x}px`);
        spotlight.style.setProperty("--sy", `${posRef.current.y}px`);
        rafRef.current = 0;
        return;
      }

      const lerp = 0.12;
      posRef.current.x += dx * lerp;
      posRef.current.y += dy * lerp;

      spotlight.style.setProperty("--sx", `${posRef.current.x}px`);
      spotlight.style.setProperty("--sy", `${posRef.current.y}px`);

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
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
