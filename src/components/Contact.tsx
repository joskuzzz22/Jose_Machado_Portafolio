"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { links } from "@/lib/content";
import { Container, SectionLabel, cn } from "./ui";

/** Clipboard API first; a hidden textarea covers insecure or older contexts. */
async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}

const OUTLINE_LINK =
  "flex h-12 items-center border border-linestrong px-3.5 text-[14px] font-semibold transition-colors duration-[180ms] hover:border-ink active:bg-line md:h-11 md:px-4";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    if (!(await copyText(links.email))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2400);
  };

  const copyButton = cn(
    "border border-ink font-semibold transition-colors duration-[180ms]",
    copied ? "bg-ink text-white" : "bg-white text-ink hover:bg-surface active:bg-line",
  );

  return (
    <section id="contacto">
      <Container className="pt-14 pb-10 md:pt-20 md:pb-20 lg:pt-28 lg:pb-24">
        <div className="border-t-2 border-ink pt-3 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:pt-5">
          <SectionLabel num="07" label={t.contact.label} className="lg:col-span-3" />

          <div data-reveal className="lg:col-span-9">
            <h2 className="mt-3 text-[32px] leading-[1.08] font-bold tracking-[-0.03em] text-balance md:text-[44px] lg:mt-0 lg:text-[60px] lg:leading-[1.04] lg:tracking-[-0.035em]">
              {t.contact.title}
            </h2>
            <p className="mt-5 hidden max-w-[600px] text-[17px] leading-[1.6] text-body md:block">
              {t.contact.sub}
            </p>

            <div className="mt-5 md:mt-9 md:flex md:items-center md:justify-between md:gap-6 md:border-y md:border-linestrong md:py-5">
              <a
                href={`mailto:${links.email}`}
                className="block text-[20px] font-semibold hover:underline md:text-[28px] md:tracking-[-0.02em] lg:text-[32px]"
              >
                {links.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className={cn(copyButton, "hidden h-11 shrink-0 items-center gap-2 px-[18px] text-[14px] md:flex")}
              >
                {copied ? t.ui.copied : t.ui.copy}
              </button>
            </div>
            <p
              role="status"
              aria-live="polite"
              className="sr-only md:not-sr-only md:mt-2 md:min-h-5 md:text-[13px] md:text-body"
            >
              {copied ? t.ui.copiedStatus : ""}
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2 md:mt-4 md:flex md:flex-wrap">
              <button
                type="button"
                onClick={copyEmail}
                className={cn(copyButton, "col-span-2 h-12 px-4 text-left text-[15px] md:hidden")}
              >
                {copied ? t.ui.copied : t.ui.copy}
              </button>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={OUTLINE_LINK}>
                LinkedIn ↗
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className={OUTLINE_LINK}>
                GitHub ↗
              </a>
              <a href={links.cv} download={links.cvFile} className={cn(OUTLINE_LINK, "hidden md:flex")}>
                {t.hero.cv} ↓
              </a>
            </div>

            <p className="mt-6 hidden text-[14px] text-muted md:block">{t.contact.avail}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
