"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/language";

export default function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center pt-[130px] pb-[90px]"
    >
      <div className="mx-auto flex w-full max-w-[1040px] flex-wrap items-center gap-14 px-6">
        <div className="min-w-0 flex-[1_1_520px]">
          <motion.p
            {...fade(0.05)}
            className="text-[0.85rem] font-semibold text-ink"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fade(0.16)}
            className="type-display mt-7 text-[clamp(2.5rem,5.2vw,4.4rem)] leading-[1.06]"
          >
            {t.hero.headline1}{" "}
            <em className="not-italic text-muted">{t.hero.headlineAccent}</em>{" "}
            {t.hero.headline2}
          </motion.h1>

          <motion.p
            {...fade(0.28)}
            className="mt-7 max-w-[600px] text-[1.05rem] leading-[1.7] text-muted"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-10 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-medium text-white transition-all hover:opacity-85 active:scale-[0.98]"
            >
              {t.hero.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-faint px-[26px] py-[13px] text-[0.95rem] font-medium text-ink transition-all hover:border-ink hover:bg-black/[0.03] active:scale-[0.98]"
            >
              {t.hero.ctaSecondary}
            </a>
            <a
              href="/Jose-Machado-CV.pdf"
              download="Jose-Machado-CV.pdf"
              className="inline-flex items-center gap-2 px-2 py-[13px] text-[0.95rem] font-medium text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {t.hero.cvCta} ↓
            </a>
          </motion.div>
        </div>

        <motion.div {...fade(0.24)} className="mx-auto flex-[0_1_380px]">
          <Image
            src="/jose-machado.png"
            alt="José Leonardo Machado Tabraj"
            width={800}
            height={1000}
            priority
            className="block aspect-[4/5] w-full max-w-[400px] rounded-[18px] border border-black/5 object-cover object-[50%_15%]"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <p className="animate-pulse text-[0.7rem] tracking-[0.08em] text-faint">
          {t.hero.scroll} ↓
        </p>
      </motion.div>
    </section>
  );
}
