"use client";

import { useLanguage } from "@/lib/language";
import { Container } from "./ui";

export default function Impact() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="impacto-titulo">
      <Container className="pt-10 md:pt-0">
        <div
          data-reveal
          className="border-t-2 border-ink pt-3 md:flex md:items-baseline md:justify-between md:gap-6 md:pt-4"
        >
          <h2 id="impacto-titulo" className="text-[13px] font-semibold md:text-[14px]">
            {t.impact.label}
          </h2>
          <p className="hidden text-[13px] text-muted md:block">{t.impact.note}</p>
        </div>

        <div data-reveal className="md:mt-6 md:grid md:grid-cols-3 md:gap-6">
          {t.impact.items.map((m) => (
            <a
              key={m.href}
              href={m.href}
              className="grid grid-cols-[88px_minmax(0,1fr)] items-baseline gap-3 border-b border-line py-3.5 md:block md:border-t md:border-b-0 md:border-linestrong md:pt-5 md:pb-6 md:transition-colors md:duration-[180ms] md:hover:border-t-ink"
            >
              <p className="text-[30px] font-[650] tracking-[-0.03em] tabular-nums md:text-[44px] md:leading-none md:tracking-[-0.035em] lg:text-[52px]">
                {m.value}
              </p>
              <div>
                <p className="text-[15px] font-medium md:mt-3 md:text-[16px]">{m.label}</p>
                <p className="mt-0.5 text-[13px] leading-[1.45] text-muted md:mt-1.5 md:text-[14px] md:leading-[1.5]">
                  {m.caption}
                  <span aria-hidden="true" className="hidden md:inline">
                    {" "}
                    →
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-2.5 text-[12px] leading-[1.5] text-muted md:hidden">{t.impact.note}</p>
      </Container>
    </section>
  );
}
