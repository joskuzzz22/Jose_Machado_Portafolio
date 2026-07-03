"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLanguage();
  const [num, ...rest] = t.contact.label.split(" — ");

  return (
    <section
      id="contact"
      className="hairline flex min-h-[90svh] scroll-mt-[60px] items-center py-[130px]"
    >
      <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center px-6 text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-[0.85rem] font-semibold">
            <span className="text-faint">{num}</span>
            <span className="text-muted">{rest.join(" — ")}</span>
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="type-display mx-auto mt-7 max-w-[820px] text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.06]">
            {t.contact.title1}{" "}
            <em className="not-italic text-muted">{t.contact.titleAccent}</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-[620px] text-[1.02rem] leading-[1.7] text-muted">
            {t.contact.sub}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="mailto:joskuzzz22@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-medium text-white transition-all hover:opacity-85 active:scale-[0.98]"
            >
              {t.contact.emailCta}
            </a>
            <a
              href="https://www.linkedin.com/in/jose--machado/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-faint px-[26px] py-[13px] text-[0.95rem] font-medium text-ink transition-all hover:border-ink hover:bg-black/[0.03] active:scale-[0.98]"
            >
              {t.contact.linkedinCta}
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="https://github.com/joskuzzz22"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-faint px-[26px] py-[13px] text-[0.95rem] font-medium text-ink transition-all hover:border-ink hover:bg-black/[0.03] active:scale-[0.98]"
            >
              {t.contact.githubCta}
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="/Jose-Machado-CV.pdf"
              download="Jose-Machado-CV.pdf"
              className="inline-flex items-center gap-2.5 rounded-full border border-faint px-[26px] py-[13px] text-[0.95rem] font-medium text-ink transition-all hover:border-ink hover:bg-black/[0.03] active:scale-[0.98]"
            >
              {t.hero.cvCta} ↓
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="mt-11 inline-flex items-center gap-2.5 rounded-full border border-line px-5 py-2.5 text-[0.75rem] font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34c759] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34c759]" />
            </span>
            {t.contact.availability}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
