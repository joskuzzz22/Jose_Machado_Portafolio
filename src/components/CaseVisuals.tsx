import {
  heatmap,
  type CaseVisual,
  type HeatmapVisual,
  type McpVisual,
  type WorkspaceVisual,
} from "@/lib/content";
import { cn } from "./ui";

const STEPS = Array.from({ length: 17 }, (_, i) => i + 1);

/** Heatmap levels 0–3, light to dark. */
const SHADES = ["bg-white", "bg-line", "bg-faint", "bg-ink"] as const;

const FIGURE = "flex flex-col bg-surface p-5 md:p-8";

function WorkspaceFigure({ v, className }: { v: WorkspaceVisual; className?: string }) {
  return (
    <figure className={cn(FIGURE, "gap-6", className)}>
      <div>
        <p className="flex justify-between gap-4 text-[13px]">
          <span className="font-semibold">{v.manual}</span>
          <span className="text-right text-muted">{v.manualDesc}</span>
        </p>
        <div
          aria-hidden="true"
          className="mt-3 grid grid-cols-[repeat(17,minmax(0,1fr))] gap-[2px] md:gap-1"
        >
          {STEPS.map((n) => (
            <span
              key={n}
              className="flex h-[18px] items-center justify-center border border-linestrong bg-white text-[10px] font-medium text-muted tabular-nums md:aspect-[1/1.3] md:h-auto"
            >
              <span className="hidden md:inline">{n}</span>
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="flex justify-between gap-4 text-[13px]">
          <span className="font-semibold">{v.auto}</span>
          <span className="text-right text-muted">{v.autoDesc}</span>
        </p>
        <div className="mt-3 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
          <span className="flex h-9 items-center bg-ink px-3.5 text-[12px] font-semibold text-white">
            {v.run}
          </span>
          <div className="flex h-9 items-center bg-ink px-3 text-[12px] font-medium text-white">
            {v.bar}
            <span aria-hidden="true" className="ml-auto">
              ✓
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-baseline gap-3.5 border-t border-linestrong pt-4">
        <span className="text-[40px] font-[650] tracking-[-0.03em] tabular-nums">
          {v.saved.value}
        </span>
        <span className="text-[15px]">{v.saved.label}</span>
      </div>

      <figcaption className="text-[13px] leading-[1.45] text-muted">{v.note}</figcaption>
    </figure>
  );
}

function McpFigure({ v, className }: { v: McpVisual; className?: string }) {
  return (
    <figure className={cn(FIGURE, "gap-6", className)}>
      <div className="grid md:grid-cols-[minmax(0,1fr)_24px_minmax(0,1.15fr)_24px_minmax(0,1fr)] md:items-stretch">
        {v.nodes.map((node, i) => {
          const product = i === 1;
          return (
            <div key={node.title} className="contents">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="flex h-7 items-center justify-center text-[16px] md:h-auto"
                >
                  <span className="rotate-90 md:rotate-0">→</span>
                </span>
              )}
              <div
                className={cn(
                  "px-3.5 py-4",
                  product ? "bg-ink text-white" : "border border-linestrong bg-white",
                )}
              >
                <p className="text-[15px] font-semibold">{node.title}</p>
                <p className={cn("mt-1.5 text-[13px]", product ? "text-linestrong" : "text-muted")}>
                  {node.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-6 border-t border-linestrong pt-4">
        {v.stats.map((s) => (
          <div key={s.label}>
            <p className="text-[40px] font-[650] tracking-[-0.03em] tabular-nums">{s.value}</p>
            <p className="mt-1 text-[15px]">{s.label}</p>
          </div>
        ))}
      </div>

      <figcaption className="text-[13px] leading-[1.45] text-muted">{v.note}</figcaption>
    </figure>
  );
}

const HEAT_COLUMNS =
  "grid grid-cols-[104px_repeat(6,minmax(0,1fr))_36px] gap-1 md:grid-cols-[140px_repeat(6,minmax(0,1fr))_56px]";

function HeatmapFigure({ v, className }: { v: HeatmapVisual; className?: string }) {
  return (
    <figure className={cn(FIGURE, "gap-[18px]", className)}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-[13px] font-semibold">{v.title}</span>
        <span className="border border-dashed border-muted px-2 py-[3px] text-[12px] font-semibold text-body">
          {v.tag}
        </span>
      </div>

      <div role="img" aria-label={v.aria} className="grid gap-1">
        <div className={cn(HEAT_COLUMNS, "text-[11px] text-muted tabular-nums")}>
          <span />
          {heatmap.people.map((p) => (
            <span key={p}>{p}</span>
          ))}
          <span />
        </div>
        {heatmap.rows.map((row) => {
          const spof = row.levels.filter((l) => l > 0).length === 1;
          return (
            <div key={row.skill} className={cn(HEAT_COLUMNS, "items-center")}>
              <span className="truncate text-[12px] font-medium">{row.skill}</span>
              {row.levels.map((level, i) => (
                <span key={i} className={cn("h-7 border border-linestrong", SHADES[level])} />
              ))}
              <span className="text-[11px] font-bold tracking-[0.02em]">{spof ? "SPOF" : ""}</span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-muted">
        <span aria-hidden="true" className="flex gap-[3px]">
          {SHADES.map((shade) => (
            <span key={shade} className={cn("size-3 border border-linestrong", shade)} />
          ))}
        </span>
        <span>{v.legend}</span>
        <span className="font-bold text-ink">SPOF</span>
        <span>{v.spof}</span>
      </div>

      <figcaption className="border-t border-linestrong pt-3.5 text-[13px] leading-[1.45] text-muted">
        {v.note}
      </figcaption>
    </figure>
  );
}

export function CaseFigure({ visual, className }: { visual: CaseVisual; className?: string }) {
  switch (visual.kind) {
    case "workspace":
      return <WorkspaceFigure v={visual} className={className} />;
    case "mcp":
      return <McpFigure v={visual} className={className} />;
    case "heatmap":
      return <HeatmapFigure v={visual} className={className} />;
  }
}

/** Condensed manual → automated strip for the mobile home page. */
export function WorkspaceStrip({ v }: { v: WorkspaceVisual }) {
  return (
    <div className="mt-3.5 bg-surface p-4">
      <div aria-hidden="true" className="grid grid-cols-[repeat(17,minmax(0,1fr))] gap-[2px]">
        {STEPS.map((n) => (
          <span key={n} className="h-[18px] border border-linestrong bg-white" />
        ))}
      </div>
      <p className="mt-1.5 mb-2.5 text-[12px] text-muted">{v.manualDesc}</p>
      <div aria-hidden="true" className="h-[18px] bg-ink" />
      <p className="mt-1.5 text-[12px] text-muted">{v.autoDesc}</p>
      <p className="mt-3 border-t border-linestrong pt-2.5 text-[15px] font-semibold">
        {v.saved.value} · {v.saved.label}
      </p>
    </div>
  );
}
