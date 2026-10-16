# Design System: Supabase

## Overview

Supabase's design language is engineered for clarity above all else. The marketing surfaces sit on `#ffffff` (pure white), with text rendered in `#171717` (`#171717` — near-black, never pure black). Across the entire system the only consistent chromatic event is the **emerald green primary** (`#3ecf8e` — `#3ecf8e`) — used as the filled CTA, occasional accent dot, and the signature highlight color in the wordmark. Everything else is a calibrated grey ladder from `#ededed` hairline-cool to `#171717` ink, with thin black-on-white typography doing most of the visual work.

Typography runs **Circular** at weight 500 for display and 400 for body. The display tier uses tight negative letter-spacing (-1.92px at 64px) to pull the rounded humanist letterforms into editorial density. There's no atmospheric gradient, no full-bleed photography, no dark-canvas marketing track — the brand commits to white.

The product itself appears as composited UI screenshots on every page: dashboard tables, SQL editors, query builders, log streams. These screenshots are the brand's argument. They sit inside `12px` 12px containers with subtle 1px hairlines, often arranged 2-up or in a floating "stacked panes" composition above the hero band.

**Key Characteristics:**
- Single emerald primary (`#3ecf8e` `#3ecf8e`) as the only chromatic event; everything else is monochrome.
- White canvas marketing track with greyscale hierarchy from `#ededed` to `#171717`.
- Custom humanist sans display tier at weight 500 with negative letter-spacing of -1.92px to -0.42px.
- Composited product UI screenshots (dashboard, SQL editor, log stream) are the dominant decorative element — never photography, never illustrations.
- Tight 6px / 8px button radii — square-ish, technical, never pill-shaped.
- Code blocks rendered in deep `#1c1c1c` (`#1c1c1c`) with monospace inline code; the brand's developer DNA is visible in every snippet.
- Pricing tiers use a dark inverted `#1c1c1c` featured tier, not a green one — the green is reserved for buttons and dot accents.

## Colors

> **Source pages:** home (`/`), `/database`, `/partners/integrations`, `/partners/integrations/powersync`, `/solutions/ai-builders`, `/pricing`.

### Brand & Accent
- **Emerald** (`#3ecf8e` — `#3ecf8e`): The signature CTA color. Filled-button background, brand wordmark accent, dot indicator.
- **Emerald Deep** (`#24b47e` — `#24b47e`): Pressed-state lift of the primary.
- **Emerald Soft** (`#4ade80` — `#4ade80`): Lighter emerald used in chart accents and product UI.
- **Accent Purple** (`#6b01c2` — `#6b01c2`): Rare accent used in integration logos and chart points; never a button.
- **Accent Violet** (`#644fc1` — `#644fc1`): Secondary accent in the same role as accent purple.
- **Accent Yellow** (`#ffdb13` — `#ffdb13`): Chart accent / status indicator only.
- **Accent Pink / Crimson / Indigo / Tomato**: Reserved for integration logos and rare chart highlights, never as system colors.

### Surface
- **Canvas** (`#ffffff` — `#ffffff`): Default page background.
- **Canvas Soft** (`#fafafa` — `#fafafa`): Barely-tinted off-white for alternating section bands.
- **Canvas Night** (`#1c1c1c` — `#1c1c1c`): Deep near-black used in code blocks, dashboard mockups, featured pricing tier.
- **Canvas Night Soft** (`#202020` — `#202020`): Slightly lifted dark for nested chrome.
- **Hairline** (`#dfdfdf` — `#dfdfdf`): 1px borders on cards and tables.
- **Hairline Strong** (`#c7c7c7` — `#c7c7c7`): Slightly darker border for emphasis.
- **Hairline Cool** (`#ededed` — `#ededed`) / **Hairline Cool 2** (`#efefef`) / **Hairline Cool 3** (`#d4d4d4`): The brand's grey ladder for fine chrome work.

### Text
- **Ink** (`#171717` — `#171717`): Default body text. Near-black, never pure.
- **Ink Secondary** (`#212121` — `#212121`): Slightly cooler near-black for body emphasis.
- **Ink Mute** (`#707070` — `#707070`): Secondary text and helper copy.
- **Ink Mute 2** (`#9a9a9a` — `#9a9a9a`): Tertiary text.
- **Ink Faint** (`#b2b2b2` — `#b2b2b2`): Disabled / placeholder text.
- **On Primary** (`#171717` — `#171717`): Text on the emerald primary fill — near-black, not white. The button reads as a "lit" surface with dark type, not a colored chip.
- **On Dark** (`#ffffff` — `#ffffff`): Text on canvas-night surfaces.

## Typography

### Font Family

The display and UI tier is **Circular** — a proprietary geometric humanist sans by Lineto. Fallback chain: `'Helvetica Neue', Helvetica, Arial`.

For maximum brand fidelity when Circular isn't licensed, use **Inter** (open-source via Google Fonts) at weight 500 for display with `letter-spacing: -1.92px` at 64px. Inter is the closest open-source analogue to Circular's geometric humanist character.

Code blocks use **system mono** (`ui-monospace`, with Menlo / Monaco / Consolas fallbacks).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 64px | 500 | 1.1 | -1.92px | Hero headline |
| `{typography.display-xl}` | 48px | 500 | 1.1 | -1.44px | Section opener |
| `{typography.display-lg}` | 36px | 500 | 1.15 | -0.72px | Sub-section / pricing tier |
| `{typography.display-md}` | 28px | 500 | 1.2 | -0.42px | Card title |
| `{typography.heading-lg}` | 22px | 500 | 1.2 | 0 | Compact heading |
| `{typography.heading-md}` | 18px | 500 | 1.4 | 0 | Section sub-heading |
| `{typography.body-lg}` | 18px | 400 | 1.55 | 0 | Marketing body lead |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default UI body |
| `{typography.button-md}` | 14px | 500 | 1.0 | 0 | Button label |
| `{typography.caption}` | 13px | 400 | 1.45 | 0 | Helper, footnote |
| `{typography.micro}` | 12px | 400 | 1.45 | 0 | Pill label, fine print |
| `{typography.code}` | 14px | 400 | 1.5 | 0 | Code block content |

### Principles
- **Weight 500 across display.** Mid-weight reads as engineered, not decorative.
- **Negative tracking on display.** -1.92px at 64px scaling proportionally down — tightens the rounded humanist letterforms into editorial density.
- **Mono for code.** System mono families (Menlo / Monaco) — no proprietary mono webfont.

### Note on Font Substitutes
Circular is proprietary. Use **Inter** at weight 500 with `letter-spacing: -1.92px` for display tiers. **Geist Sans** (open-source from Vercel) is another close alternative for both display and body. Avoid Helvetica defaults — they're heavier and lack the geometric warmth.

## Layout

### Spacing System
- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens for fine work).
- **Tokens**: `2px` 2px · `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `24px` 24px · `32px` 32px · `64px` 64px.
- **Section padding**: 64–96px on marketing surfaces.
- **Card internal padding**: 32px on feature/pricing cards.

### Grid & Container
- Marketing pages center in a ~1280px container with no edge-bleed; the brand keeps content inside the box.
- Pricing collapses 4-up → 2-up → 1-up at 1024 / 768 breakpoints.
- Product UI mockups stack 2-up or render as overlapping panes inside the same container.

### Whitespace Philosophy
The brand uses generous 64–96px section padding without atmospheric gradients filling the space — the white canvas is the design. The composited product UI mockups break up sections without requiring decoration.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat, 1px hairline | Default cards |
| 1 | `box-shadow: 0 1px 3px rgba(0,0,0,0.06)` | Subtle card lift |
| 2 | `box-shadow: 0 8px 24px rgba(0,0,0,0.08)` | Floating composited UI mockups |
| 3 | `box-shadow: 0 16px 48px rgba(0,0,0,0.12)` | Modal overlays, deep elevation |

### Decorative Depth
The brand's depth is **product UI mockups** rather than gradients. Stacked dashboard / SQL editor / log panes composite together with subtle Level 2 shadows to suggest spatial hierarchy.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `4px` | 4px | Form inputs, hairline tags |
| `6px` | 6px | Buttons (the brand's signature button radius), code blocks |
| `8px` | 8px | Compact cards, alerts |
| `12px` | 12px | Pricing cards, feature cards, product mockups |
| `16px` | 16px | Modal dialogs, large container chrome |
| `9999px` | 9999px | Pill tags, avatars |

### Photography Geometry
The brand uses minimal photography. Customer logo strips display wordmarks at uniform height (~24–32px) in greyscale; case-study cards (rare) use 4:3 photos inset in `12px` containers.

## Components

### Buttons

**`button-primary-green`** — the signature CTA.
- Background `#3ecf8e`, text `#171717` (near-black, NOT white), type `{typography.button-md}`, padding `8px 16px` (8px 16px), rounded `6px` 6px.
- Pressed state `button-primary-green-pressed` shifts to `#24b47e`.

**`button-secondary-outline`** — outline alternative on white.
- Background `#ffffff`, text `#171717`, 1px solid `#c7c7c7` border, same shape.

**`button-on-dark`** — used on dark surfaces / code-block CTAs.
- Background `#1c1c1c`, text `#ffffff`, same shape.

**`button-link`** — text-only inline button.
- Transparent background, text `#171717` rendered in `{typography.button-md}`, no padding, with a subtle underline on hover.

### Cards & Containers

**`card-feature-light`** — feature card on white.
- Background `#ffffff`, padding `32px`, rounded `12px` 12px, 1px `#dfdfdf` border.

**`card-pricing`** — standard pricing tier.
- Background `#ffffff`, padding `32px`, rounded `12px`, 1px `#dfdfdf` border. Title in `{typography.heading-lg}`, price in `{typography.display-md}`, body in `{typography.body-md}`, CTA `button-primary-green` pinned bottom.

**`card-pricing-featured`** — inverted dark featured tier.
- Background `#1c1c1c`, text `#ffffff`, otherwise identical structure.

**`card-feature-dark`** — feature card with deep dark fill.
- Background `#1c1c1c`, text `#ffffff`, padding `32px`, rounded `12px`. Used for code-heavy feature explanations.

**`code-block`** — code snippet container.
- Background `#1c1c1c`, text `#ffffff` rendered in `{typography.code}`. Padding `16px` 16px, rounded `6px` 6px.

### Inputs & Forms

**`text-input`** — standard form input.
- Background `#ffffff`, text `#171717`, type `{typography.body-md}`, padding `8px 12px` (8px 12px), rounded `6px` 6px, 1px `#dfdfdf` border.

### Navigation

**`nav-bar-light`** — top nav across the site.
- Background `#ffffff`, text `#171717`, padding `16px 24px`. Logo on the left, primary nav center, "Sign In" link + filled `button-primary-green` on the right.

### Pills, Tags, and Chips

**`pill-tag-green`** — small green pill used for "new" or featured indicators.
- Background `#3ecf8e`, text `#171717`, type `{typography.micro}`, padding `2px 8px`, rounded `9999px`.

**`pill-tag-soft`** — neutral pill on light surfaces.
- Background `#fafafa`, text `#171717`, otherwise same shape.

### Signature Components

**Composited Product UI Mockups** — multi-layer dashboard / SQL editor / log pane composites with subtle Level 2 shadows. The product is the brand's argument; mockups always sit on white canvas with no surrounding decoration.

**`link-on-light`** — inline links in body copy.
- Text `#171717` rendered in `{typography.body-md}` with a persistent underline.

**`footer-light`** — site-wide footer.
- Background `#ffffff`, text `#707070`, type `{typography.caption}`, padding `64px 24px` (64px 24px). Holds 4–5 columns of link groups, social icons, and a small legal row.

## Do's and Don'ts

### Do
- Reserve `#3ecf8e` emerald for filled CTAs and the wordmark accent — it should appear sparingly.
- Render display tiers at weight 500 with negative letter-spacing — the engineered tightness is part of the brand.
- Use `6px` 6px for buttons — square-ish radii, never pill-shaped.
- Composite product UI mockups inside `12px` containers with subtle Level 2 shadows.
- Use near-black `#171717` on the emerald button (not white) — the green reads as "lit" with dark type, which is the brand's idiosyncratic choice.
- Apply system mono for every code block.

### Don't
- Don't introduce additional accent colors as system colors — purples, yellows, and pinks belong inside chart points and integration logos only.
- Don't bump display weight above 500 — the brand's calibrated mid-weight breaks at 600+.
- Don't use pill-shaped buttons; the brand's button radius is square-ish 6px.
- Don't use white text on the emerald button — the brand specifically uses near-black on green.
- Don't add atmospheric gradients to hero bands — the white canvas is the design.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | Full container width; product mockups at full scale |
| Desktop | 1024–1440px | Default content max-width; pricing 4-up |
| Tablet | 768–1023px | Pricing 2-up; mockups simplify to single panel |
| Mobile | < 768px | Pricing 1-up; hamburger nav; display drops 64 → 36px |

### Touch Targets
- Buttons hit ≥ 36×36px on mobile; vertical padding scales up to maintain WCAG AA minimum.
- Form fields stay at 36px minimum height.

### Collapsing Strategy
- Display tiers stair-step 64 → 48 → 36 → 28 → 22px.
- Product UI mockups simplify to a single primary panel on mobile.
- Pricing tiers stair-step 4-up → 2-up → 1-up; dark featured tier always distinguished.

### Image Behavior
Product UI mockups use `srcset` with desktop / mobile crops; mobile crops focus on the most actionable inner panel.

## Iteration Guide

1. Focus on ONE component at a time.
2. Reference component names and tokens directly.
3. Run `npx @google/design.md lint DESIGN.md` after edits.
4. Default body to `{typography.body-md}`; use `{typography.code}` for any developer-facing snippet.
5. Keep emerald scarce; one filled green button per viewport.
6. The white-canvas commitment is non-negotiable — adding atmospheric backdrops breaks the brand.
