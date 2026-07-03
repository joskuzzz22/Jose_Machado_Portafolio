"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content, type Content, type Lang } from "./content";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("jm-lang");
    if (stored === "en" || stored === "es") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("jm-lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
