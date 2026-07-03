"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="pb-[110px]">
      <div className="mx-auto max-w-[1040px] px-6">
        <Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-3">
            {t.hero.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[18px] bg-surface px-7 py-[34px] transition-colors duration-300 hover:bg-pillbg"
              >
                <p className="text-[clamp(2.4rem,4.5vw,3.6rem)] font-semibold leading-none tracking-[-0.01em] text-ink tabular-nums">
                  {s.value}
                </p>
                <p className="mt-3.5 text-[0.78rem] leading-relaxed text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
