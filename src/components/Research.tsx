"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Research() {
  const { t } = useLanguage();

  return (
    <section id="research" className="hairline scroll-mt-[60px] py-[130px]">
      <div className="mx-auto max-w-[1040px] px-6">
        <SectionHeading label={t.research.label} title={t.research.title} />

        <Reveal>
          <p className="-mt-6 max-w-[660px] text-[1.02rem] leading-[1.7] text-muted">
            {t.research.intro}
          </p>
        </Reveal>

        <div className="mt-14 space-y-4">
          {t.research.cards.map((card, i) => (
            <Reveal key={card.code} delay={i * 0.07}>
              <article className="rounded-[18px] bg-surface p-[clamp(28px,5vw,48px)] transition-colors hover:bg-pillbg/70">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[0.75rem] text-ink">{card.code}</p>
                  <span className="rounded-full bg-pillbg px-3 py-[5px] text-[0.75rem] font-medium text-muted">
                    {card.status}
                  </span>
                </div>

                <h3 className="mt-4 text-[clamp(1.4rem,2.6vw,1.9rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-ink">
                  {card.title}
                </h3>

                <p className="mt-[18px] max-w-[760px] text-[0.98rem] leading-[1.7] text-muted">
                  {card.description}
                </p>

                <div className="mt-[22px] flex flex-wrap items-center gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-pillbg px-3 py-[5px] text-[0.75rem] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  {card.link && (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-linestrong px-3 py-[5px] text-[0.75rem] font-medium text-ink transition-colors hover:border-ink"
                    >
                      {t.projects.codeCta} ↗
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
