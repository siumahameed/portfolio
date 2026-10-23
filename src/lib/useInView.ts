import { useState, useEffect, useRef, type RefObject } from "react";

export function useInView(
  ref: RefObject<HTMLElement | null>,
  options?: { rootMargin?: string; initial?: boolean }
): boolean {
  const [isVisible, setIsVisible] = useState(options?.initial ?? false);
  const hasBeenVisible = useRef(options?.initial ?? false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasBeenVisible.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      hasBeenVisible.current = true;
      return;
    }

    // Immediately reveal elements already inside or near viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      setIsVisible(true);
      hasBeenVisible.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible.current) {
          setIsVisible(true);
          hasBeenVisible.current = true;
          observer.unobserve(el);
        }
      },
      { threshold: 0.01, rootMargin: options?.rootMargin ?? "200px 0px 100px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options?.rootMargin]);

  return isVisible;
}
