"use client";

import { useLanguage } from "@/lib/language";
import { Container, Wordmark } from "./ui";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-3 py-7 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Wordmark className="text-[16px]" />
          <span>{t.footer.rights}</span>
        </div>
        <nav aria-label={t.ui.footAria} className="-mx-2.5 flex flex-wrap gap-1">
          {t.footer.links.map((f) => (
            <a
              key={f.href}
              href={f.href}
              className="flex min-h-11 items-center px-2.5 text-body transition-colors duration-[180ms] hover:text-ink hover:underline"
            >
              {f.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
