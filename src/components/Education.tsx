"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="hairline scroll-mt-[60px] py-[130px]">
      <div className="mx-auto max-w-[1040px] px-6">
        <SectionHeading label={t.education.label} title={t.education.title} />

        <div className="grid gap-4 md:grid-cols-2">
          {t.education.schools.map((school, i) => (
            <Reveal key={school.school} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-[18px] bg-surface p-8 transition-colors hover:bg-pillbg/70 md:p-9">
                <div className="flex items-center justify-between gap-4">
                  {school.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={school.logo}
                      alt=""
                      className="h-8 w-8 rounded-[8px] object-contain"
                    />
                  ) : (
                    <span />
                  )}
                  <div className="flex items-baseline gap-4">
                    <p className="text-[0.75rem] font-medium text-muted">
                      {school.period}
                    </p>
                    <p className="text-[0.75rem] text-faint">
                      {school.location}
                    </p>
                  </div>
                </div>
                <h3 className="mt-5 text-[1.4rem] font-semibold tracking-[-0.01em] text-ink">
                  {school.school}
                </h3>
                <p className="mt-1.5 text-[0.95rem] font-medium text-body">
                  {school.program}
                </p>
                <p className="mt-4 text-[0.95rem] leading-[1.7] text-muted">
                  {school.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
