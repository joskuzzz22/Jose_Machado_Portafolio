"use client";

import { useLanguage } from "@/lib/language";
import TechKeyboard from "./TechKeyboard";
import { Container, SectionHead } from "./ui";

export default function Capabilities() {
  const { t } = useLanguage();
  const { capabilities } = t;

  return (
    <section id="capacidades">
      <Container className="pt-14 md:pt-20 lg:pt-28">
        <SectionHead num="04" label={capabilities.label} title={capabilities.title} />

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-6 lg:mt-10 lg:grid-cols-4">
          {capabilities.groups.map((g) => (
            <div
              key={g.title}
              data-reveal
              className="flex flex-col gap-2.5 border-t border-linestrong pt-[18px]"
            >
              <h3 className="text-[18px] font-semibold">{g.title}</h3>
              <p className="text-[15px] leading-[1.55] text-body">{g.description}</p>
              <p className="mt-1 text-[14px] leading-[1.6]">{g.tools}</p>
              <p className="mt-1 text-[13px] text-muted">
                {capabilities.usedLabel}{" "}
                <a
                  href={g.href}
                  className="font-semibold text-ink underline underline-offset-[3px] transition-colors duration-[180ms] hover:text-body"
                >
                  {g.used}
                </a>
              </p>
            </div>
          ))}
        </div>

        <TechKeyboard />
      </Container>
    </section>
  );
}
