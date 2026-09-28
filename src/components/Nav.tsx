"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { links, type Lang, type SectionId } from "@/lib/content";
import { Container, Wordmark, cn } from "./ui";

/** Every top-level section, in page order, for the scroll spy. */
const SECTIONS: SectionId[] = [
  "inicio",
  "productos",
  "perfil",
  "experiencia",
  "capacidades",
  "investigacion",
  "formacion",
  "contacto",
];

/** Header height plus a little air: a section counts as current once its top passes this line. */
const SPY_LINE = 120;

function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current: SectionId | null = null;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= SPY_LINE) current = id;
      }
      // The last section may never reach the line; the bottom of the page selects it.
      const root = document.documentElement;
      if (window.innerHeight + window.scrollY >= root.scrollHeight - 2) {
        current = SECTIONS[SECTIONS.length - 1];
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}

function LangToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div role="group" aria-label={t.ui.langAria} className="flex border border-linestrong">
      {(["en", "es"] as Lang[]).map((code) => {
        const on = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={on}
            className={cn(
              "h-9 w-11 text-[12px] font-semibold tracking-[0.02em] transition-colors duration-[180ms]",
              on ? "bg-ink text-white" : "bg-white text-muted hover:text-ink",
            )}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default function Nav() {
  const { t } = useLanguage();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const openMenu = () => {
    dialogRef.current?.showModal();
    closeRef.current?.focus();
    setOpen(true);
  };

  const closeMenu = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // The menu only exists below 768px; never leave a hidden modal open.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (desktop.matches) closeMenu();
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, [closeMenu]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/[0.97]">
      <Container className="flex h-14 items-center justify-between pr-3 md:h-16 md:pr-8 lg:pr-10">
        <a
          href="#inicio"
          aria-label={t.ui.homeAria}
          className="flex min-h-11 items-center text-[18px] md:text-[19px]"
        >
          <Wordmark />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label={t.ui.navAria} className="flex items-center gap-1">
            {t.nav.map((n) => {
              const on = active === n.id;
              return (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  aria-current={on ? "true" : undefined}
                  className={cn(
                    "flex h-16 items-center px-3.5 text-[14px] transition-colors duration-[180ms] hover:text-ink",
                    on
                      ? "font-semibold text-ink shadow-[inset_0_-2px_0_var(--color-ink)]"
                      : "font-medium text-muted",
                  )}
                >
                  {n.label}
                </a>
              );
            })}
          </nav>
          <LangToggle />
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <LangToggle />
          <button
            type="button"
            onClick={openMenu}
            aria-label={t.ui.menu}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
          >
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
          </button>
        </div>
      </Container>

      <dialog
        ref={dialogRef}
        id="menu-movil"
        aria-label={t.ui.menuLabel}
        onClose={() => setOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-white p-0 text-ink backdrop:bg-transparent open:flex open:flex-col md:hidden"
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-line pr-3 pl-5">
          <Wordmark className="text-[18px]" />
          <div className="flex items-center gap-1.5">
            <LangToggle />
            <button
              ref={closeRef}
              type="button"
              onClick={closeMenu}
              aria-label={t.ui.close}
              className="flex h-11 w-11 items-center justify-center text-[22px]"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>
        </div>

        <nav aria-label={t.ui.navAria} className="px-5 pt-2">
          {t.nav.map((n) => {
            const on = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={closeMenu}
                aria-current={on ? "true" : undefined}
                className={cn(
                  "flex min-h-[60px] items-center justify-between border-b border-line text-[24px] tracking-[-0.02em]",
                  on ? "font-bold text-ink" : "font-medium text-body",
                )}
              >
                {n.label}
                <span aria-hidden="true" className="text-[13px] font-semibold text-ink">
                  {on ? "●" : ""}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="grid gap-1 px-5 py-6 text-[15px]">
          {t.footer.links.map((f) => (
            <a
              key={f.href}
              href={f.href}
              onClick={closeMenu}
              className="flex min-h-11 items-center text-body hover:text-ink"
            >
              {f.label}
            </a>
          ))}
        </div>

        <div className="mt-auto border-t border-line p-5">
          <a
            href={`mailto:${links.email}`}
            className="flex h-12 items-center justify-between bg-ink px-[18px] text-[15px] font-semibold text-white transition-colors duration-[180ms] hover:bg-body active:bg-black"
          >
            {links.email}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </dialog>
    </header>
  );
}
