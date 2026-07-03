"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="hairline scroll-mt-[60px] py-[130px]">
      <div className="mx-auto max-w-[1040px] px-6">
        <SectionHeading label={t.experience.label} title={t.experience.title} />

        <div className="space-y-16 md:space-y-20">
          {t.experience.entries.map((entry, ei) => (
            <Reveal key={entry.company} delay={ei * 0.05}>
              <div className="grid gap-6 md:grid-cols-[280px_1fr] md:gap-12">
                {/* Company column */}
                <div className="md:sticky md:top-24 md:self-start">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center overflow-hidden rounded-[10px] border border-line bg-surface">
                    {entry.logo ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={entry.logo}
                        alt=""
                        className="h-6 w-6 object-contain"
                      />
                    ) : (
                      <span className="text-[11px] font-bold tracking-tight text-muted">
                        {entry.monogram}
                      </span>
                    )}
                  </div>
                  <h3 className="text-[1.4rem] font-semibold tracking-[-0.01em] text-ink">
                    {entry.company}
                  </h3>
                  <p className="mt-2 text-[0.78rem] font-medium text-muted">
                    {entry.kind}
                  </p>
                  <p className="mt-0.5 text-[0.78rem] text-faint">
                    {entry.location}
                  </p>
                </div>

                {/* Roles column */}
                <div className="relative space-y-10 border-l border-line pl-8 md:space-y-12">
                  {entry.roles.map((role) => (
                    <div key={role.title} className="relative">
                      <span
                        aria-hidden
                        className="absolute -left-[37px] top-2 h-2 w-2 rounded-full border border-faint bg-page"
                      />
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-[1.05rem] font-semibold text-ink">
                          {role.title}
                        </h4>
                        <p className="text-[0.75rem] font-medium text-faint">
                          {role.period}
                        </p>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {role.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="flex gap-3 text-[0.95rem] leading-[1.75] text-muted"
                          >
                            <span
                              aria-hidden
                              className="mt-[11px] h-px w-4 shrink-0 bg-linestrong"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
