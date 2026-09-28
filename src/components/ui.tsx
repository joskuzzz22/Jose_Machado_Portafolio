import type { LabeledValue } from "@/lib/content";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** 1200px content on a 12-column grid; margins 20 / 32 / 40px. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}

/** "01  Products" — section number with its label. */
export function SectionLabel({
  num,
  label,
  className,
}: {
  num: string;
  label: string;
  className?: string;
}) {
  return (
    <p className={cn("text-[13px] font-semibold tabular-nums lg:mt-1.5 lg:text-[14px]", className)}>
      {num}{" "}
      <span className="ml-1.5 font-medium text-muted lg:ml-2">{label}</span>
    </p>
  );
}

const TITLE_SIZES = {
  md: "text-[30px] leading-[1.1] tracking-[-0.025em] md:text-[38px] lg:text-[44px] lg:leading-[1.08] lg:tracking-[-0.03em]",
  lg: "text-[30px] leading-[1.1] tracking-[-0.025em] md:text-[38px] lg:max-w-[800px] lg:text-[46px] lg:leading-[1.08] lg:tracking-[-0.03em]",
} as const;

/** Section opener: 2px rule, number + label in columns 1–3, title from column 4. */
export function SectionHead({
  num,
  label,
  title,
  intro,
  size = "md",
  introOnMobile = true,
}: {
  num: string;
  label: string;
  title: string;
  intro?: string;
  size?: keyof typeof TITLE_SIZES;
  introOnMobile?: boolean;
}) {
  return (
    <div
      data-reveal
      className="border-t-2 border-ink pt-3 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:pt-5"
    >
      <SectionLabel num={num} label={label} className="lg:col-span-3" />
      <div className="lg:col-span-9">
        <h2 className={cn("mt-2.5 font-bold text-balance lg:mt-0", TITLE_SIZES[size])}>
          {title}
        </h2>
        {intro && (
          <p
            className={cn(
              "mt-4 max-w-[640px] text-[16px] leading-[1.6] text-body md:mt-5 md:text-[17px]",
              !introOnMobile && "hidden md:block",
            )}
          >
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}

/** Outlined tag for the owner's role on a case. */
export function RoleTag({ children }: { children: React.ReactNode }) {
  return <span className="border border-ink px-2 py-[3px] font-semibold">{children}</span>;
}

/** Label/value rows used by the case summaries. */
export function DataRows({ rows }: { rows: LabeledValue[] }) {
  return (
    <>
      {rows.map((r) => (
        <div
          key={r.label}
          className="grid gap-1 border-t border-line py-3.5 md:grid-cols-[150px_minmax(0,1fr)] md:gap-4"
        >
          <dt className="text-[13px] font-semibold text-muted md:pt-0.5">{r.label}</dt>
          <dd className="text-[16px] leading-[1.55] text-pretty">{r.value}</dd>
        </div>
      ))}
    </>
  );
}

/** Wordmark: "JM." */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-bold tracking-[-0.03em] text-ink", className)}>
      JM<span className="text-faint">.</span>
    </span>
  );
}
