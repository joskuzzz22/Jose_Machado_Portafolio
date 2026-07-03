"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language";
import type { Lang } from "@/lib/content";

const sections = [
  { id: "about", key: "about" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "research", key: "research" },
  { id: "skills", key: "skills" },
  { id: "education", key: "education" },
  { id: "certifications", key: "certifications" },
  { id: "contact", key: "contact" },
] as const;

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/[0.08] bg-white/85 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-[60px] max-w-[1040px] items-center justify-between px-6">
        <a
          href="#top"
          className="text-[1.05rem] font-semibold tracking-tight text-ink transition-opacity hover:opacity-70"
          aria-label={t.nav.homeAria}
        >
          JM<span className="text-faint">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-[0.8rem] font-medium text-muted transition-colors hover:text-ink"
            >
              {t.nav[s.key]}
            </a>
          ))}

          <div className="ml-1 flex items-center gap-1 rounded-full border border-line p-1">
            {(["en", "es"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase transition-all ${
                  lang === l ? "bg-ink text-white" : "text-muted hover:text-ink"
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center gap-1 rounded-full border border-line p-1">
            {(["en", "es"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2 py-0.5 text-[0.7rem] font-semibold uppercase transition-all ${
                  lang === l ? "bg-ink text-white" : "text-muted hover:text-ink"
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-line"
            aria-label={t.nav.menuAria}
            aria-expanded={open}
          >
            <span
              className={`block h-px w-4 bg-ink transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-ink transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-line bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-[0.9rem] font-medium text-muted transition-colors hover:text-ink"
                >
                  {t.nav[s.key]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
