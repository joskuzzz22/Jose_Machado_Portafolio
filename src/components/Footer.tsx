"use client";

import { useLanguage } from "@/lib/language";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="hairline">
      <div className="mx-auto flex max-w-[1040px] flex-col items-center justify-between gap-3 px-6 py-9 text-center md:flex-row md:text-left">
        <p className="text-[0.72rem] text-faint">{t.footer.rights}</p>
        <p className="text-[0.72rem] text-faint">{t.footer.built}</p>
      </div>
    </footer>
  );
}
