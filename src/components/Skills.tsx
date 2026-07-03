"use client";

import { useLanguage } from "@/lib/language";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SkillKeyboard from "./SkillKeyboard";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="hairline scroll-mt-[60px] py-[130px]">
      <div className="mx-auto max-w-[1040px] px-6">
        <SectionHeading label={t.skills.label} title={t.skills.title} />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-x-8 gap-y-10">
          {t.skills.groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <div>
                <p className="border-b border-linestrong pb-3.5 text-[1rem] font-semibold tracking-[-0.01em] text-ink">
                  {group.title}
                </p>
                <div className="flex flex-col">
                  {group.items.map((item, ii) => (
                    <p
                      key={item}
                      className={`py-[11px] text-[0.92rem] text-body ${
                        ii < group.items.length - 1
                          ? "border-b border-line"
                          : ""
                      }`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interactive keyboard */}
        <Reveal delay={0.1}>
          <div className="mt-20">
            <SkillKeyboard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
