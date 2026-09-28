# José Machado — Portfolio

Source of the personal portfolio of **José Leonardo Machado Tabraj** — AI Solutions Engineer & Digital Transformation Product Owner, Lima, Perú.

Bilingual (EN/ES), statically rendered: a single-page home plus one page per case study.

## Stack

- **[Next.js 15](https://nextjs.org)** (App Router) + TypeScript — fully static output
- **[Tailwind CSS v4](https://tailwindcss.com)** — CSS-first config via `@theme`, no `tailwind.config` file
- Typography: Inter via `next/font`
- No animation or icon libraries — the one motion effect is a small `IntersectionObserver`

## Design

Monochrome editorial system: Inter throughout, ink on white, square corners, 2px rules between
sections and a visible 12-column grid (1200px container, 24px gutter, 40/32/20px margins). The
color and type tokens live at the top of `src/app/globals.css`.

## Notable details

- **Bilingual with full parity** — every string lives in `src/lib/content.ts`; a React context swaps
  language client-side and persists the choice. No duplicated components.
- **Case studies** — `/casos/[slug]` pages are generated from the same case data the home page
  summarizes; each carries its own diagram (`src/components/CaseVisuals.tsx`).
- **Technology keyboard** — `src/components/TechKeyboard.tsx`. A toolbar with a roving tab stop that
  reacts only while focused (arrows, Home/End, Enter/Space or a key's letter) and never listens to
  global keystrokes. Two columns on phones.
- **Accessibility** — visible focus rings (WCAG 2.4.7), 44px touch targets, `aria-live` readouts,
  a modal `<dialog>` for the mobile menu, localized `aria-label`s and semantic landmarks.
- **Motion as enhancement** — server HTML is fully visible; blocks below the fold fade in once
  (200ms), and `prefers-reduced-motion` turns every transition off.
- **Generated OG image** — `src/app/opengraph-image.tsx` renders the social card at build time.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

## Project structure

```
src/
  app/            layout, home page, globals.css (tokens), icon + OG image
    casos/[slug]  case-study pages
  components/     one component per section (Hero, Products, Experience, …)
  lib/
    content.ts    ← all copy, both languages, single source of truth
    language.tsx  language context + persistence
public/           portrait, institution logos, CV
```

## Editing content

Everything a reader sees — products, cases, experience, research, education, contact — lives in
[`src/lib/content.ts`](src/lib/content.ts), typed and mirrored in `en` and `es`. Components never
hold copy, so adding a project is a data edit, not a UI change.

## Deploy

Hosted on Vercel: pushes to `main` deploy automatically. Zero config — Vercel detects Next.js.
