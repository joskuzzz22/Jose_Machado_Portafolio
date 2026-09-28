"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language";
import { links, type CaseStudy, type WorkspaceVisual } from "@/lib/content";
import { CaseFigure, WorkspaceStrip } from "./CaseVisuals";
import { Container, DataRows, RoleTag, SectionHead, cn } from "./ui";

const caseHref = (c: CaseStudy) => `/casos/${c.slug}`;

function Pao() {
  const { t } = useLanguage();
  const { pao } = t;

  return (
    <article
      id="pao"
      data-reveal
      className="mt-6 bg-surface p-5 md:mt-10 md:p-8 lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:gap-y-8 lg:p-10"
    >
      <div className="lg:col-span-5">
        <p className="text-[12px] font-semibold text-muted lg:text-[13px]">{pao.kicker}</p>
        <h3 className="mt-1.5 text-[20px] font-bold tracking-[-0.02em] md:text-[28px] md:leading-[1.12] lg:mt-2.5 lg:text-[32px] lg:tracking-[-0.025em]">
          {pao.title}
          <span className="hidden md:inline"> ({pao.abbr})</span>
        </h3>
        <p className="mt-3.5 hidden items-baseline gap-2 text-[14px] md:flex">
          <span className="text-muted">{t.ui.myRole}</span>
          <span className="font-semibold">{pao.role}</span>
        </p>
        <p className="mt-2.5 text-[15px] leading-[1.55] text-pretty text-body md:mt-5 md:text-[16px] md:leading-[1.6]">
          {pao.body}
        </p>
      </div>

      <div className="hidden md:mt-8 md:grid md:grid-cols-2 md:gap-x-6 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:content-start">
        {pao.steps.map((s) => (
          <div key={s.n} className="border-t border-linestrong pt-4 pb-5">
            <p className="text-[13px] font-semibold text-muted tabular-nums">{s.n}</p>
            <p className="mt-1.5 text-[17px] font-semibold">{s.title}</p>
            <p className="mt-1.5 text-[14px] leading-[1.5] text-body">{s.text}</p>
          </div>
        ))}
      </div>

      {/* Tablet/desktop: figures beside their explanations */}
      <div className="hidden border-t-2 border-ink pt-5 md:mt-4 md:grid md:grid-cols-[auto_minmax(0,1fr)] md:items-baseline md:gap-x-6 md:gap-y-4 lg:col-span-12 lg:mt-0 lg:grid-cols-12 lg:gap-y-0">
        {pao.stats.map((s, i) => (
          <div key={s.value} className="contents">
            <p
              className={cn(
                "text-[36px] font-[650] tracking-[-0.03em] whitespace-nowrap tabular-nums",
                i === 0 ? "lg:col-span-3" : "lg:col-span-2",
              )}
            >
              {s.value}
            </p>
            <p className={cn("text-[15px] leading-[1.5]", i === 0 ? "lg:col-span-3" : "lg:col-span-4")}>
              {s.text}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: two compact figures */}
      <div className="mt-3.5 grid grid-cols-2 gap-3 border-t border-linestrong pt-3 md:hidden">
        {pao.stats.map((s) => (
          <div key={s.value}>
            <p className="text-[24px] font-[650] tabular-nums">{s.value}</p>
            <p className="mt-0.5 text-[12px] leading-[1.4]">{s.short}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function CaseHeader({ c }: { c: CaseStudy }) {
  const { t } = useLanguage();

  return (
    <>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px]">
        <span className="font-semibold tabular-nums">{c.n}</span>
        <span aria-hidden="true" className="h-px w-6 bg-linestrong" />
        <span className="text-muted">{t.ui.myRole}</span>
        <RoleTag>{c.roleTag}</RoleTag>
      </div>
      <h3 className="mt-3.5 text-[32px] leading-[1.1] font-bold tracking-[-0.03em] lg:text-[38px]">
        {c.title}
      </h3>
    </>
  );
}

function MoreLink({ c, className }: { c: CaseStudy; className?: string }) {
  const { t } = useLanguage();

  return (
    <Link
      href={caseHref(c)}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold underline decoration-linestrong underline-offset-[5px] transition-colors duration-[180ms] hover:decoration-ink",
        className,
      )}
    >
      {t.ui.more}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

/** Rows (and the link to the full case) as a definition list. */
function CaseRows({ c, className }: { c: CaseStudy; className?: string }) {
  return (
    <dl className={className}>
      <DataRows rows={c.rows} />
      <div className="border-t border-line pt-4">
        <MoreLink c={c} />
      </div>
    </dl>
  );
}

/** Full case: rows beside the visual. `visualFirst` puts the visual on the left. */
function CaseArticle({ c, visualFirst = false }: { c: CaseStudy; visualFirst?: boolean }) {
  const rows = <CaseRows c={c} className="lg:col-span-6" />;
  const figure = <CaseFigure visual={c.visual} className="lg:col-span-6" />;

  return (
    <article data-reveal className="hidden md:block">
      <CaseHeader c={c} />
      {c.explainer && (
        <p className="mt-3.5 max-w-[680px] border-l-2 border-ink pl-4 text-[16px] leading-[1.55] text-body">
          {c.explainer}
        </p>
      )}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
        {visualFirst ? (
          <>
            {figure}
            {rows}
          </>
        ) : (
          <>
            {rows}
            {figure}
          </>
        )}
      </div>
    </article>
  );
}

/** Mobile: Case 01 condensed, per the 390px layout. */
function CaseCompact({ c }: { c: CaseStudy }) {
  return (
    <article className="md:hidden">
      <p className="text-[13px] font-semibold">
        {c.n} <span className="font-medium text-muted">· {c.roleTag}</span>
      </p>
      <h3 className="mt-1.5 text-[24px] leading-[1.15] font-bold tracking-[-0.02em]">{c.title}</h3>
      {c.visual.kind === "workspace" && <WorkspaceStrip v={c.visual as WorkspaceVisual} />}
      <dl className="mt-3">
        {(c.rowsShort ?? c.rows).map((r) => (
          <div key={r.label} className="border-t border-line py-2.5">
            <dt className="text-[12px] font-semibold text-muted">{r.label}</dt>
            <dd className="mt-0.5 text-[15px] leading-[1.5]">{r.value}</dd>
          </div>
        ))}
      </dl>
      <MoreLink c={c} className="mt-1 decoration-current" />
    </article>
  );
}

/** Mobile: Cases 02 and 03 collapse into links to their case pages. */
function CaseLinkRow({ c, first }: { c: CaseStudy; first?: boolean }) {
  return (
    <Link
      href={caseHref(c)}
      className={cn(
        "flex min-h-14 items-center justify-between gap-3 border-b border-line py-2 md:hidden",
        first && "border-t border-t-linestrong",
      )}
    >
      <span>
        <span className="text-[12px] font-semibold text-muted">{c.n}</span>
        <br />
        <span className="text-[16px] font-semibold">{c.title}</span>
      </span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function OtherProducts() {
  const { t } = useLanguage();
  const { others } = t;

  return (
    <div data-reveal className="mt-12 border-t-2 border-ink pt-5 md:mt-20">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
        <h3 className="shrink-0 text-[22px] font-[650] tracking-[-0.015em]">{others.title}</h3>
        <p className="text-[14px] text-muted">
          {others.ownership}{" "}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold whitespace-nowrap text-ink underline underline-offset-4 transition-colors duration-[180ms] hover:text-body"
          >
            GitHub ↗
          </a>
        </p>
      </div>

      <div className="mt-5">
        {others.items.map((o) => (
          <div
            key={o.n}
            className="grid grid-cols-[32px_minmax(0,1fr)] gap-x-3 gap-y-1 border-t border-line py-[18px] lg:grid-cols-[48px_minmax(0,3fr)_minmax(0,2fr)_minmax(0,5fr)_minmax(0,2fr)] lg:items-baseline lg:gap-6"
          >
            <span className="text-[13px] font-semibold text-muted tabular-nums">{o.n}</span>
            <span className="text-[16px] font-semibold">{o.title}</span>
            <span className="col-start-2 text-[14px] lg:col-start-auto">{o.role}</span>
            <span className="col-start-2 text-[15px] leading-[1.55] text-body lg:col-start-auto">
              {o.description}
            </span>
            <span className="col-start-2 text-[13px] leading-[1.5] text-muted lg:col-start-auto">
              {o.tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  const { t } = useLanguage();
  const [c1, c2, c3] = t.cases;

  return (
    <section id="productos">
      <Container className="pt-12 md:pt-20 lg:pt-24">
        <SectionHead
          num="01"
          label={t.products.label}
          title={t.products.title}
          intro={t.products.intro}
          size="lg"
          introOnMobile={false}
        />

        <Pao />

        {/* Anchor targets wrap both layouts so #caso-0X resolves at every width. */}
        <div id="caso-01" className="mt-7 md:mt-[72px]">
          <CaseCompact c={c1} />
          <CaseArticle c={c1} />
        </div>
        <div id="caso-02" className="mt-5 md:mt-[72px] md:border-t md:border-linestrong md:pt-14">
          <CaseLinkRow c={c2} first />
          <CaseArticle c={c2} visualFirst />
        </div>
        <div id="caso-03" className="md:mt-[72px] md:border-t md:border-linestrong md:pt-14">
          <CaseLinkRow c={c3} />
          <CaseArticle c={c3} />
        </div>

        <OtherProducts />
      </Container>
    </section>
  );
}
