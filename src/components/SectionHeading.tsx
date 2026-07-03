"use client";

import Reveal from "./Reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  const [num, ...rest] = label.split(" — ");
  const text = rest.join(" — ");

  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <p className="flex items-center gap-3 text-[0.85rem] font-semibold">
          <span className="text-faint">{num}</span>
          <span className="text-muted">{text}</span>
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="type-display mt-6 max-w-[860px] text-[clamp(2rem,4.2vw,3.3rem)]">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
