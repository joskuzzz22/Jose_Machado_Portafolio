"use client";

import { useLanguage } from "@/lib/language";
import type { ResearchStatus } from "@/lib/content";
import { Container, SectionHead, cn } from "./ui";

/** Filled = completed, grey = in development, empty = in progress. */
const STATUS_DOT: Record<ResearchStatus, string> = {
  done: "bg-ink",
  dev: "bg-faint",
  prog: "bg-white",
};

export default function Research() {
  const { t } = useLanguage();
  const { research } = t;

  return (
    <section id="investigacion">
      <Container className="pt-14 md:pt-20 lg:pt-28">
        <SectionHead
          num="05"
          label={research.label}
          title={research.title}
          intro={research.intro}
        />

        <div className="mt-8 lg:mt-10">
          {research.items.map((r) => (
            <article
              key={r.code}
              data-reveal
              className="grid gap-4 border-t border-linestrong py-7 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0"
            >
              <div className="flex items-center justify-between gap-4 lg:col-span-3 lg:block">
                <p className="text-[13px] font-semibold text-muted tabular-nums">{r.code}</p>
                <p className="flex items-center gap-2 text-[14px] font-semibold lg:mt-2.5">
                  <span
                    aria-hidden="true"
                    className={cn("size-2.5 border-[1.5px] border-ink", STATUS_DOT[r.status])}
                  />
                  {research.status[r.status]}
                </p>
              </div>

              <div className="lg:col-span-5">
                <p className="text-[13px] text-muted">{r.type}</p>
                <h3 className="mt-1.5 text-[22px] leading-[1.25] font-semibold tracking-[-0.015em]">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.6] text-pretty text-body">
                  {r.description}
                </p>
              </div>

              {(r.projection || r.related) && (
                <div className="lg:col-span-4">
                  {r.projection && (
                    <div className="bg-surface px-5 py-[18px]">
                      <p className="text-[12px] font-semibold">{r.projection.label}</p>
                      <dl>
                        {r.projection.rows.map((row) => (
                          <div
                            key={row.label}
                            className="flex justify-between gap-4 border-b border-line py-2 text-[14px]"
                          >
                            <dt className="text-muted">{row.label}</dt>
                            <dd className="font-semibold tabular-nums">{row.value}</dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-2.5 text-[12px] leading-[1.5] text-muted">
                        {r.projection.note}
                      </p>
                    </div>
                  )}
                  {r.related && (
                    <div className="border-l-2 border-ink pl-4">
                      <p className="text-[14px] leading-[1.55] text-body">{r.related.text}</p>
                      <a
                        href={r.related.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex min-h-11 items-center text-[14px] font-semibold underline underline-offset-4 transition-colors duration-[180ms] hover:text-body"
                      >
                        {r.related.linkLabel}&nbsp;↗
                      </a>
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
