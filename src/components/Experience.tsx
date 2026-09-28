"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import { Container, SectionLabel } from "./ui";

export default function Experience() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section id="experiencia">
      <Container className="pt-14 md:pt-20 lg:pt-28">
        <div className="border-t-2 border-ink pt-3 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:pt-5">
          <SectionLabel num="03" label={experience.label} className="lg:col-span-3" />

          <div className="lg:col-span-9">
            <h2
              data-reveal
              className="mt-2.5 text-[30px] leading-[1.1] font-bold tracking-[-0.025em] md:text-[38px] lg:mt-0 lg:text-[44px] lg:leading-[1.08] lg:tracking-[-0.03em]"
            >
              {experience.title}
            </h2>

            <div className="mt-8 flex items-center gap-4 lg:mt-9">
              <Image
                src={experience.logo}
                alt=""
                width={48}
                height={48}
                className="size-12 shrink-0 border border-line bg-white object-contain"
              />
              <div>
                <p className="text-[18px] font-semibold">{experience.company}</p>
                <p className="mt-0.5 text-[14px] text-muted">{experience.kind}</p>
              </div>
            </div>

            <ol className="mt-6">
              {experience.roles.map((r) => (
                <li
                  key={r.title}
                  data-reveal
                  className="grid gap-3 border-t border-line py-6 md:grid-cols-[200px_minmax(0,1fr)] md:gap-6"
                >
                  <div>
                    <p className="text-[14px] font-medium tabular-nums">{r.period}</p>
                    <p className="mt-1 text-[13px] text-muted">{r.tag}</p>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold tracking-[-0.01em]">{r.title}</h3>
                    <p className="mt-1.5 text-[16px] leading-[1.55] text-body">{r.summary}</p>
                    <ul className="mt-3 grid list-disc gap-1.5 pl-[18px] text-[15px] leading-[1.55]">
                      {r.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <div className="mt-2.5 flex flex-wrap gap-x-4 text-[14px]">
                      {r.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          className="flex min-h-8 items-center font-semibold underline decoration-linestrong underline-offset-4 transition-colors duration-[180ms] hover:decoration-ink"
                        >
                          <span aria-hidden="true">→&nbsp;</span>
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-10 text-[14px] font-semibold">{experience.venturesTitle}</p>
            <div className="mt-3 grid gap-6 md:grid-cols-2">
              {experience.ventures.map((v) => (
                <div key={v.company} data-reveal className="border-t border-linestrong pt-4">
                  <p className="flex justify-between gap-3 text-[16px] font-semibold">
                    {v.company}
                    <span className="text-[13px] font-medium whitespace-nowrap text-muted tabular-nums">
                      {v.period}
                    </span>
                  </p>
                  <p className="mt-1 text-[14px] text-muted">{v.role}</p>
                  <p className="mt-2.5 text-[15px] leading-[1.55] text-body">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
