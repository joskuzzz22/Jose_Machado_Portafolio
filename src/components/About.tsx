"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="hairline scroll-mt-[60px] py-[130px]">
      <div className="mx-auto max-w-[1040px] px-6">
        <SectionHeading label={t.about.label} title={t.about.title} />

        <div className="max-w-[780px]">
          {t.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p
                className={
                  i === 0
                    ? "text-[1.28rem] leading-[1.65] text-body [text-wrap:pretty]"
                    : "mt-7 text-[1.02rem] leading-[1.75] text-muted"
                }
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <dl className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {t.about.facts.map((f) => (
              <div
                key={f.label}
                className="rounded-[18px] bg-surface p-[22px] transition-colors hover:bg-pillbg"
              >
                <dt className="text-[0.7rem] font-semibold text-faint">
                  {f.label}
                </dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
