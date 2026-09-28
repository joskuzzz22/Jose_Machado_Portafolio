"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { cn } from "./ui";

/**
 * Optional detail under Capabilities. A toolbar of keys with a roving tab stop:
 * it only reacts while focused (arrows, Home/End, Enter/Space, or a key's letter)
 * and never listens to global keystrokes.
 */
export default function TechKeyboard() {
  const { t } = useLanguage();
  const kb = t.capabilities.keyboard;
  const [active, setActive] = useState<string | null>(null);
  const [focusIndex, setFocusIndex] = useState(0);
  const keyRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = kb.keys.find((key) => key.k === active);

  const focusKey = (i: number) => {
    const next = (i + kb.keys.length) % kb.keys.length;
    setFocusIndex(next);
    keyRefs.current[next]?.focus();
    return next;
  };

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        focusKey(i + 1);
        return;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        focusKey(i - 1);
        return;
      case "Home":
        e.preventDefault();
        focusKey(0);
        return;
      case "End":
        e.preventDefault();
        focusKey(kb.keys.length - 1);
        return;
    }
    const match = kb.keys.findIndex((key) => key.k === e.key.toUpperCase());
    if (match >= 0) {
      e.preventDefault();
      setActive(kb.keys[focusKey(match)].k);
    }
  };

  return (
    <div
      data-reveal
      className="mt-12 bg-surface px-5 py-6 md:px-8 md:py-7 lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] lg:items-start lg:gap-6"
    >
      <div>
        <p id="teclado-titulo" className="text-[15px] font-semibold">
          {kb.title}
        </p>
        <p className="mt-1.5 text-[13px] leading-[1.5] text-muted">{kb.hint}</p>
      </div>

      <div className="mt-5 lg:mt-0">
        <div
          role="toolbar"
          aria-labelledby="teclado-titulo"
          className="grid grid-cols-2 gap-2 md:grid-cols-5 xl:grid-cols-10"
        >
          {kb.keys.map((key, i) => {
            const on = key.k === active;
            return (
              <button
                key={key.k}
                ref={(el) => {
                  keyRefs.current[i] = el;
                }}
                type="button"
                tabIndex={i === focusIndex ? 0 : -1}
                aria-pressed={on}
                aria-label={key.label}
                onClick={() => {
                  setFocusIndex(i);
                  setActive(on ? null : key.k);
                }}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  "flex h-14 items-center gap-2.5 border border-b-[3px] px-3 text-left transition-[background-color,border-color,transform] duration-150 hover:border-ink md:h-16 md:flex-col md:items-start md:justify-between md:gap-0 md:p-2",
                  on
                    ? "translate-y-0.5 border-ink bg-ink text-white"
                    : "border-linestrong bg-white text-ink",
                )}
              >
                <span className="text-[15px] font-bold">{key.k}</span>
                <span className="text-[12px] leading-[1.1] font-semibold hyphens-manual md:text-[10px]">
                  {key.label}
                </span>
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="mt-3.5 min-h-[22px] text-[14px] leading-[1.5]">
          {current ? (
            <>
              <span className="font-semibold">{current.label} —</span>{" "}
              <span className="text-body">{current.blurb}</span>
            </>
          ) : (
            <span className="text-body">{kb.idle}</span>
          )}
        </p>
      </div>
    </div>
  );
}
