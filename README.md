# José Machado — Portfolio

Executive portfolio for **José Leonardo Machado Tabraj** — AI Solutions Engineer & Digital Transformation Product Owner.

Bilingual (EN/ES), dark editorial design, built for the US remote market.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config, no `tailwind.config`)
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals and micro-interactions
- Fonts: Instrument Serif (display) · Inter (body) · JetBrains Mono (labels)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — zero config needed, Vercel detects Next.js automatically.
3. Every push to `main` redeploys.

Or with the CLI:

```bash
npm i -g vercel
vercel
```

## Editing content

All copy (both languages) lives in a single file: [`src/lib/content.ts`](src/lib/content.ts).
Update projects, experience, certifications and contact info there — no component changes needed.
