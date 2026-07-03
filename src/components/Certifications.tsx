"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section
      id="certifications"
      className="hairline scroll-mt-[60px] py-[130px]"
    >
      <div className="mx-auto max-w-[1040px] px-6">
        <SectionHeading
          label={t.certifications.label}
          title={t.certifications.title}
        />

        <Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-x-14">
            {t.certifications.certs.map((cert) => (
              <div
                key={cert.name}
                className="flex items-baseline justify-between gap-6 border-b border-line py-4"
              >
                <p className="text-[0.92rem] font-medium leading-relaxed text-ink">
                  {cert.name}
                </p>
                <p className="whitespace-nowrap text-[0.72rem] text-faint">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14">
            <p className="mb-3 text-[0.85rem] font-semibold text-muted">
              {t.certifications.trainingTitle}
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-x-14">
              {t.certifications.training.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
                >
                  <p className="text-[0.88rem] leading-relaxed text-body">
                    {cert.name}
                  </p>
                  <p className="whitespace-nowrap text-[0.72rem] text-faint">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
