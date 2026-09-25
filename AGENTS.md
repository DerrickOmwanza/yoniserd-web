# AGENTS.md - Development Guidelines for YoNISeRD Website

## Commands

- **Dev server**: `npm run dev` (http://localhost:3000)
- **Production build**: `npm run build`, then `npm start`
- **Lint**: `npm run lint`
- **Type check**: `npm run typecheck`

## Architecture

**Stack**: Next.js 16 (App Router, statically pre-rendered), React 19, TypeScript, Tailwind CSS v4, lucide-react icons.
**Hosting**: Vercel. Pushes to `main` deploy to production (https://yoniserd.co.ke); every other branch/PR gets a preview URL.
**No database / CMS** - content lives in typed files under `src/content/`.

- `src/app/` - routes (`page.tsx` per route), root `layout.tsx`, `globals.css` (design tokens), `sitemap.ts`, `robots.ts`, icons and OG image
- `src/components/layout/` - `SiteHeader` (client component: sticky nav + mobile menu), `SiteFooter`
- `src/components/ui/` - design-system primitives: `ButtonLink`, `Container`, `Section`, `Eyebrow`, `SectionHeading`
- `src/components/` - shared blocks (`PageHeader`, `CtaBand`, `StatGrid`, `StoryCard`/`StoryTile`, `ProgramIcon`, `PhotoGallery` lightbox)
- `src/content/` - single source of truth: `site.ts` (org, contact, nav, socials), `programs.ts`, `stories.ts`, `team.ts`, `impact.ts`, `gallery.ts`
- `src/assets/` - images imported via `next/image` (automatic resizing, AVIF/WebP, blur placeholders)
- `public/media/` - videos (served as-is, never imported)
- `archive/` - old notes, screenshots and scripts. Not part of the site.

## Conventions

- Server Components by default; add `"use client"` only for interactivity.
- Never hard-code organisation details (email, phone, domain, registration no.) in pages - import from `src/content/site.ts`.
- Page metadata via `export const metadata` with a `canonical`.
- Imports: framework → internal (`@/components`, `@/content`) → assets.
- Styling: Tailwind utilities using the design tokens in `globals.css`. No inline `style={{}}` colours, no per-component CSS files.

## Design System - "Trust Navy & Gold"

| Token | Hex | Use |
|---|---|---|
| `navy-900` | #14284B | Primary brand, headings, primary buttons |
| `navy-950` | #0B1830 | Hero / dark sections, footer |
| `gold-500` | #C9A227 | Accents, rules, buttons **on navy only** (2.4:1 on white - never text on light) |
| `gold-700` | #8A6A0C | Gold text on light backgrounds (5.1:1) |
| `sky-500` | #5B8DB8 | Decorative, focus ring; use `sky-300` for text on navy, `sky-700` for links on light |
| `surface` | #F7F8FA | Alternate light section background |
| `ink` / `muted` | #111827 / #4B5563 | Body text / secondary text |

**Type**: Newsreader (serif, `font-serif`) for headings and display; Public Sans (`font-sans`) for body/UI.
**Signature details**: gold hairline + uppercase eyebrow before section titles; italic gold word in hero headlines; hairline dividers instead of heavy cards.

## Accessibility (WCAG 2.1 AA)

- Skip link in root layout; one `h1` per page, `h2` per section, `h3` inside - no skipped levels
- `:focus-visible` ring (sky-500) on all interactive elements
- Respect `prefers-reduced-motion` (handled globally in `globals.css`)
- All images need meaningful `alt` or `alt=""` if decorative
- Contrast: follow the token rules above
