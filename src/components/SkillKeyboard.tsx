"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import {
  siClaudecode,
  siModelcontextprotocol,
  siSap,
  siPython,
  siReact,
  siGooglecloud,
  siGoogleappsscript,
  siTricentis,
  siNotebooklm,
  siOpenid,
  siUbuntu,
} from "simple-icons";
import { useLanguage } from "@/lib/language";
import type { SkillKey } from "@/lib/content";

const COLS = 5;

/* Custom glyphs (24×24, fill paths) for skills without a brand icon */
const GLYPHS = {
  flow: "M5 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm14-7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 14a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM6.9 10.6l9.9-4.9.9 1.8-9.9 4.9-.9-1.8Zm.9 3l9.9 4.9-.9 1.8-9.9-4.9.9-1.8Z",
  sheet:
    "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 2v4h6V5H5Zm8 0v4h6V5h-6Zm-8 6v4h6v-4H5Zm8 0v4h6v-4h-6ZM5 17v2h6v-2H5Zm8 0v2h6v-2h-6Z",
  chart: "M4 13h3.5v7H4v-7Zm6.25-6h3.5v13h-3.5V7ZM16.5 3H20v17h-3.5V3Z",
  db: "M12 2C7.6 2 4 3.3 4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5c0-1.7-3.6-3-8-3Zm6 17c0 .6-2.4 1.5-6 1.5S6 19.6 6 19v-3.2c1.5.8 3.7 1.2 6 1.2s4.5-.4 6-1.2V19Zm0-5.5c0 .6-2.4 1.5-6 1.5s-6-.9-6-1.5V9.8c1.5.8 3.7 1.2 6 1.2s4.5-.4 6-1.2v3.7ZM12 9C8.4 9 6 8.1 6 7.5V5c0-.6 2.4-1.5 6-1.5s6 .9 6 1.5v2.5c0 .6-2.4 1.5-6 1.5Z",
  magnifier:
    "M10 2a8 8 0 1 0 4.9 14.3l5.4 5.4 1.4-1.4-5.4-5.4A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z",
  check:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm4.2 4.6 1.4 1.4-7.1 7.1-4.1-4.1 1.4-1.4 2.7 2.7 5.7-5.7Z",
  sparkle:
    "M12 2l2.2 5.9L20 10l-5.8 2.1L12 18l-2.2-5.9L4 10l5.8-2.1L12 2Zm7 11 1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3Z",
} as const;

const NEUTRAL = "6e6e73";

/* Logo per key letter: brand icons where they exist, custom glyphs elsewhere */
const ICONS: Record<string, { path: string; hex: string }> = {
  C: { path: siClaudecode.path, hex: siClaudecode.hex },
  M: { path: siModelcontextprotocol.path, hex: siModelcontextprotocol.hex },
  S: { path: siSap.path, hex: siSap.hex },
  P: { path: siPython.path, hex: siPython.hex },
  R: { path: siReact.path, hex: siReact.hex },
  G: { path: siGooglecloud.path, hex: siGooglecloud.hex },
  W: { path: siGoogleappsscript.path, hex: siGoogleappsscript.hex },
  A: { path: siSap.path, hex: siSap.hex },
  L: { path: GLYPHS.flow, hex: NEUTRAL },
  I: { path: siSap.path, hex: siSap.hex },
  T: { path: GLYPHS.sheet, hex: "0073EC" },
  B: { path: GLYPHS.chart, hex: "E8A33D" },
  Q: { path: GLYPHS.db, hex: "A91D22" },
  K: { path: siTricentis.path, hex: siTricentis.hex },
  N: { path: siNotebooklm.path, hex: siNotebooklm.hex },
  O: { path: siOpenid.path, hex: siOpenid.hex },
  H: { path: siUbuntu.path, hex: siUbuntu.hex },
  D: { path: GLYPHS.magnifier, hex: NEUTRAL },
  U: { path: GLYPHS.check, hex: NEUTRAL },
  E: { path: GLYPHS.sparkle, hex: NEUTRAL },
};

export default function SkillKeyboard() {
  const { t } = useLanguage();
  const keys = t.skills.keyboard.keys;

  const [pressed, setPressed] = useState<Set<string>>(new Set());
  const [active, setActive] = useState<SkillKey | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(boardRef, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const wavePlayed = useRef(false);

  const press = useCallback((k: string) => {
    setPressed((prev) => {
      if (prev.has(k)) return prev;
      const next = new Set(prev);
      next.add(k);
      return next;
    });
  }, []);

  const release = useCallback((k: string) => {
    setPressed((prev) => {
      if (!prev.has(k)) return prev;
      const next = new Set(prev);
      next.delete(k);
      return next;
    });
  }, []);

  // Physical keyboard binding
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      const k = e.key.toUpperCase();
      const match = keys.find((key) => key.k === k);
      if (match) {
        press(k);
        setActive(match);
      }
    };
    const up = (e: KeyboardEvent) => {
      release(e.key.toUpperCase());
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [keys, press, release]);

  // One-time diagonal wave when the board scrolls into view
  useEffect(() => {
    if (!inView || wavePlayed.current || reduce) return;
    wavePlayed.current = true;
    const timers: ReturnType<typeof setTimeout>[] = [];
    keys.forEach((key, i) => {
      const row = Math.floor(i / COLS);
      const col = i % COLS;
      const delay = 350 + (row + col) * 70;
      timers.push(setTimeout(() => press(key.k), delay));
      timers.push(setTimeout(() => release(key.k), delay + 220));
    });
    return () => timers.forEach(clearTimeout);
  }, [inView, keys, press, release, reduce]);

  const toneClass = (tone?: string) =>
    tone === "accent"
      ? "keycap--accent"
      : tone === "mid"
        ? "keycap--mid"
        : "keycap--base";

  return (
    <div>
      <p className="mb-8 text-center text-[0.78rem] font-medium text-faint">
        {t.skills.keyboard.hint}
      </p>

      <div ref={boardRef} className="mx-auto max-w-[760px]">
        <div className="grid grid-cols-4 gap-3 min-[560px]:grid-cols-5 md:gap-4">
          {keys.map((key) => {
            const icon = ICONS[key.k];
            const isAccent = key.tone === "accent";
            return (
              <button
                key={key.k}
                type="button"
                className={`keycap ${toneClass(key.tone)} ${
                  pressed.has(key.k) ? "is-pressed" : ""
                }`}
                aria-label={`${key.label} — ${key.blurb}`}
                onPointerDown={() => {
                  press(key.k);
                  setActive(key);
                }}
                onPointerUp={() => release(key.k)}
                onPointerLeave={() => release(key.k)}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    press(key.k);
                    setActive(key);
                  }
                }}
                onKeyUp={(e) => {
                  if (e.key === " " || e.key === "Enter") release(key.k);
                }}
              >
                <span className="absolute top-2 left-2.5 font-mono text-[10px] opacity-40">
                  {key.k}
                </span>
                {icon && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 md:h-7 md:w-7"
                    fill={isAccent ? "#f5f5f7" : `#${icon.hex}`}
                    aria-hidden
                  >
                    <path d={icon.path} />
                  </svg>
                )}
                <span className="px-1 text-center text-[8.5px] font-semibold uppercase leading-tight tracking-[0.04em] md:text-[9.5px]">
                  {key.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Readout */}
      <div
        aria-live="polite"
        className="mx-auto mt-8 flex min-h-[56px] max-w-xl items-center justify-center rounded-xl border border-line bg-surface px-6 py-3 text-center"
      >
        {active ? (
          <p className="text-sm leading-relaxed text-muted">
            <span className="mr-2 font-mono text-[11px] text-faint">
              [{active.k}]
            </span>
            <span className="font-semibold text-ink">{active.label}</span>
            <span className="mx-2 text-faint">—</span>
            {active.blurb}
          </p>
        ) : (
          <p className="text-[0.78rem] font-medium text-faint">
            <span className="mr-2 inline-block h-3 w-1.5 animate-pulse bg-ink align-middle" />
            {t.skills.keyboard.idle}
          </p>
        )}
      </div>
    </div>
  );
}
