"use client";

import { useLanguage } from "@/lib/language";
import type { Project } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectCard({
  project,
  delay,
  codeCta,
}: {
  project: Project;
  delay: number;
  codeCta: string;
}) {
  return (
    <Reveal
      delay={delay}
      className={project.featured ? "md:col-span-2" : undefined}
    >
      <article
        className={`group flex h-full flex-col rounded-[18px] bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pillbg/70 md:p-9 ${
          project.featured ? "md:flex-row md:items-end md:gap-12" : ""
        }`}
      >
        <div className="flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-[0.75rem] text-faint">{project.index}</p>
            <p className="text-[0.75rem] font-medium text-muted">
              {project.role}
            </p>
          </div>

          <h3
            className={`mt-4 font-semibold tracking-[-0.01em] text-ink ${
              project.featured
                ? "text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.15]"
                : "text-[1.25rem] leading-[1.25]"
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-4 max-w-[760px] text-[0.95rem] leading-[1.7] text-muted">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-pillbg px-3 py-[5px] text-[0.75rem] text-muted"
              >
                {tag}
              </span>
            ))}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-linestrong px-3 py-[5px] text-[0.75rem] font-medium text-ink transition-colors hover:border-ink"
              >
                {codeCta} ↗
              </a>
            )}
          </div>
        </div>

        <div
          className={`mt-7 border-t border-linestrong pt-5 ${
            project.featured
              ? "md:mt-0 md:min-w-[190px] md:border-t-0 md:border-l md:pt-0 md:pl-12"
              : ""
          }`}
        >
          <p className="text-[2.1rem] font-semibold leading-none tracking-[-0.01em] text-ink tabular-nums md:text-[2.4rem]">
            {project.metric}
          </p>
          <p className="mt-2.5 text-[0.72rem] leading-relaxed text-muted">
            {project.metricLabel}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="hairline scroll-mt-[60px] py-[130px]">
      <div className="mx-auto max-w-[1040px] px-6">
        <SectionHeading label={t.projects.label} title={t.projects.title} />

        <Reveal>
          <p className="-mt-6 mb-12 max-w-[660px] text-[1.02rem] leading-[1.7] text-muted">
            {t.projects.intro}
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {t.projects.items.map((p, i) => (
            <ProjectCard
              key={p.index}
              project={p}
              delay={(i % 2) * 0.07}
              codeCta={t.projects.codeCta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
