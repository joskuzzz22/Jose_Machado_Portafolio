"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import { links } from "@/lib/content";
import { Container } from "./ui";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio">
      <Container className="pt-8 md:grid md:grid-cols-12 md:items-end md:gap-x-6 md:pt-16 md:pb-14 lg:pt-20 lg:pb-[72px]">
        <div className="md:col-span-8 lg:col-span-7">
          <p className="text-[15px] font-semibold tracking-[-0.01em] lg:text-[17px]">
            {t.hero.name}
          </p>
          <p className="mt-0.5 text-[13px] leading-[1.4] text-muted lg:mt-1 lg:text-[15px]">
            {t.hero.role}
          </p>
          <h1 className="mt-5 text-[38px] leading-[1.07] font-bold tracking-[-0.03em] text-balance md:text-[48px] md:leading-[1.05] lg:mt-8 lg:text-[56px] lg:leading-[1.04] lg:tracking-[-0.035em] xl:text-[64px]">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-[16px] leading-[1.55] text-pretty text-body md:max-w-[600px] lg:mt-7 lg:text-[18px] lg:leading-[1.6]">
            {t.hero.sub}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2 md:flex md:flex-wrap md:items-center md:gap-3 lg:mt-9">
            <a
              href="#productos"
              className="col-span-2 flex h-12 items-center justify-between gap-6 bg-ink px-[18px] text-[15px] font-semibold text-white transition-colors duration-[180ms] hover:bg-body active:translate-y-px active:bg-black md:min-w-[180px] md:px-[22px]"
            >
              {t.hero.cta1}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contacto"
              className="flex h-12 items-center border border-ink px-4 text-[15px] font-semibold transition-colors duration-[180ms] hover:bg-surface active:bg-line md:px-[22px]"
            >
              {t.hero.cta2}
            </a>
            <a
              href={links.cv}
              download={links.cvFile}
              className="flex h-12 items-center gap-1.5 px-1 text-[15px] font-medium text-body underline decoration-linestrong underline-offset-[5px] transition-colors duration-[180ms] hover:text-ink hover:decoration-ink active:text-black md:px-2.5"
            >
              {t.hero.cv}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="mt-10 hidden gap-8 border-t border-line pt-4 text-[14px] text-muted md:flex">
            <span>{t.hero.loc}</span>
            <span>{t.hero.avail}</span>
          </div>
        </div>

        <figure className="mt-6 grid grid-cols-[88px_minmax(0,1fr)] items-center gap-3.5 border-t border-line pt-4 md:col-span-4 md:col-start-9 md:mt-0 md:block md:border-t-0 md:pt-0">
          <Image
            src="/jose-machado.png"
            alt={t.hero.alt}
            width={1254}
            height={1254}
            priority
            sizes="(min-width: 1024px) 384px, (min-width: 768px) 30vw, 88px"
            className="h-[110px] w-[88px] bg-surface object-cover object-[50%_15%] md:aspect-[4/5] md:h-auto md:w-full"
          />
          <figcaption className="text-[13px] leading-[1.5] text-muted md:mt-3 md:grid md:gap-0.5 md:leading-[1.45]">
            <span className="block font-semibold text-ink">{t.hero.fullName}</span>
            <span className="mt-0.5 block md:mt-0">{t.hero.official}</span>
            <span className="mt-1.5 block md:hidden">
              {t.hero.loc}
              <br />
              {t.hero.avail}
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
