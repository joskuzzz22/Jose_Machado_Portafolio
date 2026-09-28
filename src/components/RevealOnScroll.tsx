"use client";

import { useEffect } from "react";

/**
 * One-time appearance (opacity + 8px, 200ms) for [data-reveal] blocks.
 * Server HTML is fully visible; only blocks that start below the fold are
 * hidden, right before they are observed. Skipped under reduced motion.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.rv = "in";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    const armed: HTMLElement[] = [];
    for (const el of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
      if (el.dataset.rv || el.getBoundingClientRect().top <= window.innerHeight) continue;
      el.dataset.rv = "armed";
      armed.push(el);
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      // Never leave a block hidden without an observer to reveal it.
      for (const el of armed) {
        if (el.dataset.rv === "armed") delete el.dataset.rv;
      }
    };
  }, []);

  return null;
}
