"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import { Container, SectionHead } from "./ui";

export default function Education() {
  const { t } = useLanguage();
  const { education } = t;

  return (
    <section id="formacion">
      <Container className="pt-14 md:pt-20 lg:pt-28">
        <SectionHead num="06" label={education.label} title={education.title} />

        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-12 lg:gap-x-6">
          <div data-reveal className="lg:col-span-6">
            <h3 className="mb-3 text-[14px] font-semibold">{education.eduTitle}</h3>
            {education.schools.map((s) => (
              <div
                key={s.school}
                className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 border-t border-linestrong py-[18px]"
              >
                <Image
                  src={s.logo}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 border border-line bg-white object-contain"
                />
                <div>
                  <p className="flex justify-between gap-3 text-[17px] font-semibold">
                    {s.school}
                    <span className="text-[13px] font-medium whitespace-nowrap text-muted tabular-nums">
                      {s.period}
                    </span>
                  </p>
                  <p className="mt-1 text-[15px]">{s.program}</p>
                  <p className="mt-1 text-[14px] leading-[1.5] text-muted">
                    {s.detail} · {s.location}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.5] font-semibold">{s.honors}</p>
                </div>
              </div>
            ))}
          </div>

          <div id="certificaciones" data-reveal className="lg:col-span-5 lg:col-start-8">
            <h3 className="mb-3 text-[14px] font-semibold">{education.certTitle}</h3>
            {education.certs.map((c) => (
              <div
                key={c.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-t border-linestrong py-3"
              >
                <div>
                  <p className="text-[15px] leading-[1.4] font-medium">{c.name}</p>
                  <p className="mt-0.5 text-[13px] text-muted">{c.issuer}</p>
                </div>
                <span className="text-[13px] whitespace-nowrap text-muted tabular-nums">{c.year}</span>
              </div>
            ))}

            <h3 className="mt-8 mb-3 text-[14px] font-semibold">{education.trainTitle}</h3>
            {education.training.map((c) => (
              <div
                key={c.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-t border-line py-[9px] text-[14px]"
              >
                <span>
                  {c.name} <span className="text-muted">· {c.issuer}</span>
                </span>
                <span className="text-muted tabular-nums">{c.year}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
