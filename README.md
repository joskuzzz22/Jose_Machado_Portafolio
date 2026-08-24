# José Machado — Portfolio

Source of the personal portfolio of **José Leonardo Machado Tabraj** — AI Solutions Engineer & Digital Transformation Product Owner, Lima, Perú.

Single-page, bilingual (EN/ES), statically rendered.

## Stack

- **[Next.js 15](https://nextjs.org)** (App Router) + TypeScript — fully static output
- **[Tailwind CSS v4](https://tailwindcss.com)** — CSS-first config via `@theme`, no `tailwind.config` file
- **[Framer Motion](https://www.framer.com/motion/)** — scroll reveals and micro-interactions
- **[simple-icons](https://simpleicons.org)** — brand logos inlined as SVG (no external requests)
- Typography: Inter via `next/font`

## Notable details

- **Bilingual with full parity** — every string lives in `src/lib/content.ts`; a React context swaps
  language client-side and persists the choice. No duplicated components.
- **Interactive skill keyboard** — `src/components/SkillKeyboard.tsx`. Twenty keycaps bound to real
  keyboard keys: press `C`, `M`, `G`… and the cap depresses while a readout explains the skill.
  Pointer and keyboard (Space/Enter) input supported, plus an entry animation that respects
  `prefers-reduced-motion`.
- **Accessibility** — visible focus rings (WCAG 2.4.7), `aria-live` readout, localized `aria-label`s,
  semantic landmarks.
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
  app/          layout, page, globals.css, icon + OG image
  components/   one component per section (Hero, Experience, Projects, …)
  lib/
    content.ts  ← all copy, both languages, single source of truth
    language.tsx  language context + persistence
public/         portrait, institution logos, CV
```

## Editing content

Everything a reader sees — projects, experience, research, certifications, contact — lives in
[`src/lib/content.ts`](src/lib/content.ts), typed and mirrored in `en` and `es`. Components never
hold copy, so adding a project is a data edit, not a UI change.

## Deploy

Hosted on Vercel: pushes to `main` deploy automatically. Zero config — Vercel detects Next.js.
