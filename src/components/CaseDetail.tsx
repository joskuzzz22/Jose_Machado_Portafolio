"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language";
import { CaseFigure } from "./CaseVisuals";
import RevealOnScroll from "./RevealOnScroll";
import { Container, Wordmark } from "./ui";

const BACK_HREF = "/#productos";

export default function CaseDetail({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const index = t.cases.findIndex((c) => c.slug === slug);
  const c = t.cases[index];
  const next = t.cases[(index + 1) % t.cases.length];
  const { detail } = c;

  return (
    <>
      <header className="border-b border-line">
        <Container className="flex h-14 items-center justify-between md:h-16">
          <Link
            href="/"
            aria-label={t.ui.homeAria}
            className="flex min-h-11 items-center text-[18px] md:text-[19px]"
          >
            <Wordmark />
          </Link>
          <Link
            href={BACK_HREF}
            className="flex min-h-11 items-center text-[14px] font-semibold hover:underline"
          >
            <span aria-hidden="true">←&nbsp;</span>
            {t.detail.back}
          </Link>
        </Container>
      </header>

      <main>
        <Container className="pt-10 md:pt-16 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <p className="text-[14px] font-semibold lg:col-span-12">
            {c.n} <span className="font-medium text-muted">· {detail.kicker}</span>
          </p>
          <h1 className="mt-3.5 text-[36px] leading-[1.06] font-bold tracking-[-0.03em] text-balance md:text-[48px] lg:col-span-9 lg:text-[60px] lg:leading-[1.04] lg:tracking-[-0.035em]">
            {c.title}
          </h1>
          <p className="mt-5 text-[17px] leading-[1.6] text-body md:text-[18px] lg:col-span-7">
            {detail.lede}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t-2 border-ink pt-4 md:grid-cols-4 lg:col-span-12">
            {detail.meta.map((m) => (
              <div key={m.label}>
                <dt className="text-[13px] text-muted">{m.label}</dt>
                <dd className="mt-1 text-[15px] leading-[1.4] font-semibold">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Container>

        <Container className="pt-8 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <CaseFigure visual={c.visual} className="lg:col-span-8" />
        </Container>

        <Container className="pt-14 pb-16 md:pb-24">
          {detail.sections.map((s, i) => (
            <section
              key={s.title}
              data-reveal
              className="grid gap-2 border-t border-linestrong py-7 lg:grid-cols-12 lg:gap-x-6"
            >
              <p className="text-[13px] font-semibold text-muted tabular-nums lg:col-span-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="lg:col-span-6">
                <h2 className="text-[22px] font-[650] tracking-[-0.02em] md:text-[24px]">{s.title}</h2>
                <p className="mt-2.5 text-[16px] leading-[1.65] text-body md:text-[17px]">{s.text}</p>
              </div>
            </section>
          ))}

          {detail.metrics.length > 0 && (
            <div
              data-reveal
              className="mt-2 grid grid-cols-2 gap-6 border-t-2 border-ink pt-5 md:grid-cols-3"
            >
              {detail.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-[36px] font-[650] tracking-[-0.03em] tabular-nums md:text-[44px]">
                    {m.value}
                  </p>
                  <p className="mt-1.5 text-[15px]">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          <nav className="mt-12 flex flex-col gap-1 border-t border-line pt-5 text-[15px] font-semibold md:flex-row md:justify-between">
            <Link href={BACK_HREF} className="flex min-h-11 items-center hover:underline">
              <span aria-hidden="true">←&nbsp;</span>
              {t.detail.back}
            </Link>
            <Link href={`/casos/${next.slug}`} className="flex min-h-11 items-center hover:underline">
              {next.n} · {next.title}
              <span aria-hidden="true">&nbsp;→</span>
            </Link>
          </nav>
        </Container>
      </main>

      <RevealOnScroll />
    </>
  );
}
