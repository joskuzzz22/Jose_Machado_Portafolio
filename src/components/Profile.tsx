"use client";

import { useLanguage } from "@/lib/language";
import { Container, SectionLabel, cn } from "./ui";

export default function Profile() {
  const { t } = useLanguage();
  const { profile } = t;

  return (
    <section id="perfil">
      <Container className="pt-14 md:pt-20 lg:pt-28">
        <div className="border-t-2 border-ink pt-3 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:gap-y-10 lg:pt-5">
          <SectionLabel num="02" label={profile.label} className="lg:col-span-3" />

          <div data-reveal className="lg:col-span-6">
            <h2 className="mt-2.5 text-[30px] leading-[1.1] font-bold tracking-[-0.025em] text-balance md:text-[38px] lg:mt-0 lg:text-[44px] lg:leading-[1.08] lg:tracking-[-0.03em]">
              {profile.title}
            </h2>
            {profile.paragraphs.map((p, i) => (
              <p
                key={i}
                className={cn(
                  i === 0 ? "mt-6" : "mt-4",
                  "text-[16px] leading-[1.65] text-pretty text-body md:text-[17px]",
                )}
              >
                {p}
              </p>
            ))}
          </div>

          <dl data-reveal className="mt-8 lg:col-span-3 lg:mt-0 lg:self-end">
            {profile.facts.map((f) => (
              <div key={f.label} className="border-t border-line py-3">
                <dt className="text-[13px] text-muted">{f.label}</dt>
                <dd className="mt-1 text-[14px] leading-[1.45] font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div data-reveal className="mt-10 lg:col-span-9 lg:col-start-4 lg:mt-0">
            <p className="mb-3.5 text-[14px] font-semibold">{profile.workTitle}</p>
            <ol className="grid border-t border-ink md:grid-cols-5">
              {profile.steps.map((s) => (
                <li
                  key={s.n}
                  className="border-b border-line py-3.5 pr-4 md:border-b-0 md:pb-0"
                >
                  <span className="text-[12px] font-semibold text-muted tabular-nums">
                    {s.n} <span aria-hidden="true">→</span>
                  </span>
                  <p className="mt-1.5 text-[15px] leading-[1.3] font-semibold">{s.title}</p>
                  <p className="mt-1 text-[13px] leading-[1.45] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
