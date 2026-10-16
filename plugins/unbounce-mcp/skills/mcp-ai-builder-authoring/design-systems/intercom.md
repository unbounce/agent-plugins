# Design System: Intercom

## Overview

Intercom's marketing canvas is a soft cream-white ground (`#f5f1ec` ≈ #f5f1ec) — not pure white. The warmth is the brand's signal: this is editorial, calm, and product-focused, not bright SaaS. On top of the cream canvas sit white floating cards (`#ffffff`), thin hairline dividers (`#d3cec6`), and charcoal type (`#111111` #111111).

Display type is **Saans** — Intercom's proprietary geometric sans — set at weight 500 with measured negative letter-spacing (-2.0px on 72px display). Body type is the same family at weight 400. The single proprietary mono is **SaansMono**, used sparingly for code snippets and product UI screenshots embedded in the marketing surface.

The single chromatic accent is **Fin Orange** (`#ff5600` #ff5600) — Intercom's AI-product brand color. It surfaces on the Fin product CTA, the Fin badge in pricing, and a few inline emphasis moments. It is NOT a system primary; the system primary is charcoal `#111111`. Intercom also maintains a small **report palette** (`#65b5ff`, `#0bdf50`, `#ff2067`, `#b3e01c`) used inside in-product analytics surfaces shown in mockups.

The page rhythm is heavy on **product mockups**: every section's payload is a high-fidelity screenshot of Intercom's product UI, framed in white cards with `16px` 16px corners. The marketing chrome is intentionally quiet so the product can be the protagonist.

**Key Characteristics:**
- **Cream canvas** (`#f5f1ec` #f5f1ec) is the brand's defining surface — neither white nor gray, deliberately warm.
- Product-screenshot-led page rhythm: every section centers a product mockup card, marketing chrome stays minimal.
- **Saans** proprietary sans-serif carries the entire hierarchy; SaansMono for code-only contexts.
- **Charcoal** `#111111` (#111111) is the system primary — buttons, headlines, body type all sit on charcoal.
- **Fin Orange** (`#ff5600` #ff5600) is the AI product color — used on the Fin CTA and Fin badge, never decoratively.
- Display tracking pulls aggressively negative (-2.0px on 72px); body stays at 0.
- Card corners stay modest at `12px` 12px and `16px` 16px — never pill-rounded; never square.

## Colors

> Source pages: intercom.com (home), /pricing, /helpdesk, /customers, /helpdesk/inbox.

### Brand & Accent
- **Charcoal** (#111111): The system primary surface. Headlines, body type, primary CTA pill background — all charcoal.
- **White** (#ffffff): Text on charcoal CTAs; canvas of floating cards.
- **Fin Orange** (#ff5600): The AI-product accent. Used on the Fin CTA, Fin badge, and a small set of inline emphasis moments.
- **Report Orange** (#fe4c02): A slightly different orange used inside the report / analytics palette for in-product mockups.
- **Brand Blue** (#0007cb): Saturated brand blue (#0007cb) — used on a small set of marketing illustrations.

### Surface
- **Canvas** (#f5f1ec): Default page background — soft cream-white #f5f1ec.
- **Surface 1** (#ffffff): Pure white — used for floating cards (pricing, feature, product-mockup).
- **Surface 2** (#ebe7e1): Slightly darker cream — startup-discount banner, alt-row stripes.
- **Hairline** (#d3cec6): 1px borders on cards — soft warm gray (#d3cec6).
- **Hairline Soft** (#ebe7e1): Even softer dividers between FAQ rows and footer columns.
- **Inverse Canvas** (#000000): Pure black — only on the testimonial / quote callout strip.
- **Inverse Surface 1** (#313130): One step lighter — hovered footer items in dark contexts.

### Text
- **Ink** (#111111): All headlines, body type, button labels — charcoal #111111.
- **Ink Muted** (#626260): Secondary type at #626260 — meta info, deselected pricing tabs.
- **Ink Subtle** (#7b7b78): Tertiary type at #7b7b78 — footer columns, helper text.
- **Ink Tertiary** (#9c9fa5): Quaternary type at #9c9fa5 — disabled, footnotes.
- **Inverse Ink** (#ffffff): White on black — quote-strip type.
- **Inverse Ink Muted** (#9c9fa5): Light gray on black — quote-strip meta.

### Semantic & Report Palette (in-product mockups)
- **Error Red** (#c41c1c): Form validation, destructive states.
- **Success Green** (#0bdf50): Positive states (also `#0bdf50`).
- **Report Blue** (#65b5ff): Analytics chart blue.
- **Report Pink** (#ff2067): Analytics chart pink.
- **Report Lime** (#b3e01c): Analytics chart lime.
- **Report Cyan** (#03b2cb): Phone country selector accent.

The report palette appears INSIDE product UI mockups — these are Intercom's in-product chart colors, not marketing surface colors.

## Typography

### Font Family

- **Saans** — Intercom's proprietary geometric sans, fallback `Saans Fallback, ui-sans-serif, system-ui`. Carries display, body, eyebrow, and button.
- **SaansMono** — Proprietary mono, fallback `SaansMono Fallback, ui-monospace`. Used inside code snippets shown in product mockups.

The same family carries the entire hierarchy. Hierarchy is carried by size + weight + tracking, not by family change.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 500 | 1.05 | -2.0px | Largest hero headline |
| `{typography.display-lg}` | 56px | 500 | 1.10 | -1.4px | Section opener headlines |
| `{typography.display-md}` | 40px | 500 | 1.15 | -0.8px | Sub-section headlines |
| `{typography.headline}` | 28px | 500 | 1.20 | -0.5px | Pricing tier titles, CTA banner |
| `{typography.card-title}` | 22px | 500 | 1.25 | -0.3px | Card title, feature card |
| `{typography.subhead}` | 20px | 400 | 1.40 | -0.2px | Lead body, intro paragraphs |
| `{typography.body-lg}` | 18px | 400 | 1.50 | -0.1px | Hero subhead, lead paragraphs |
| `{typography.body}` | 16px | 400 | 1.50 | 0 | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Card body, footer |
| `{typography.caption}` | 12px | 400 | 1.40 | 0 | Captions, meta |
| `{typography.button}` | 15px | 500 | 1.20 | 0 | Pill / square button labels |
| `{typography.eyebrow}` | 14px | 500 | 1.30 | 0 | Section eyebrow (sentence case) |
| `{typography.mono}` | 13px | 400 | 1.50 | 0 | SaansMono for code in mockups |

### Principles

- **Weight 500 carries display.** Saans at 500 reads as confident without bold.
- **Negative letter-spacing scales with size.** -2.0px at 72px (≈3% of size), down to 0 on body.
- **Line-heights tighten on display, relax on body.** 1.05 at display-xl, 1.50 at body.
- **No mono on chrome.** SaansMono lives in product UI; marketing chrome stays in Saans.
- **Eyebrow uses sentence case** at 14px / 500 weight — no all-caps tracking.

### Note on Font Substitutes

If implementing without Saans, suitable substitutes include **Söhne** (paid), **Inter** (free, weight 500), or **Geist Sans** (free). Inter at weight 500 is the closest free substitute; SaansMono can be approximated with **JetBrains Mono** at weight 400.

## Layout

### Spacing System

- **Base unit**: 8px.
- **Tokens (front matter)**: `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `24px` 24px · `32px` 32px · `48px` 48px · `96px` 96px.
- Card interior padding: `24px` 24px on pricing/feature cards; `32px` 32px on testimonial/discount cards; `48px` 48px on CTA banners.
- Pill button padding: 10px vertical · 18px horizontal.

### Grid & Container

- Max content width sits around 1280px.
- Card grids are 3-up at desktop, 2-up at tablet, 1-up at mobile.
- Pricing tier grid is 3-up; comparison strip below shows checkmarks per tier.
- Product mockup cards span full content width — they're the protagonist of every section.

### Whitespace Philosophy

The cream canvas does the work white space would in another brand. Sections separate by ample vertical breathing room (`96px` 96px) plus the lift-onto-white cards.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for body type, hero text, footer |
| 1 (lift on cream) | `#ffffff` white background on `#f5f1ec` cream | Pricing cards, feature cards, product mockups |
| 2 (hairline lift) | `#ffffff` + 1px `#d3cec6` border | Floating tiles with extra definition |
| 3 (deep accent) | `#000000` true black | Quote / testimonial callout strip |

Intercom resists drop shadows. Depth is communicated by the white-on-cream surface change.

### Decorative Depth

- **Product UI mockups** dominate every section's right column or center band — these are screenshots, not illustrations.
- **No atmospheric gradients, no spotlight cards, no pastel section blocks.** The cream + white system is deliberately restrained.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `4px` | 4px | Small chips, badges |
| `6px` | 6px | Inline tags |
| `8px` | 8px | All buttons, form inputs |
| `12px` | 12px | Pricing cards, feature cards, FAQ rows |
| `16px` | 16px | Product mockup cards |
| `24px` | 24px | Oversized CTA banners |
| `9999px` | 9999px | Tab toggles |
| `9999px` | 9999px | Avatar circles |

### Photography & Illustration Geometry

- Product UI screenshots dominate the marketing surface; they sit in `16px` 16px tiles.
- Customer logo tiles render at small sizes (~24–32px logo height) on `#f5f1ec` cream with no border.
- Avatar circles in testimonial cards use `9999px` at 40–48px sizes.

## Components

### Buttons

**`button-primary`** — Charcoal CTA. The default primary CTA across all pages.
- Background `#111111`, text `#ffffff`, type `{typography.button}`, padding 10px 18px, rounded `8px`.
- Pressed state lives in `button-primary-pressed`.

**`button-secondary`** — White button on cream. Used for secondary CTAs.
- Background `#ffffff`, text `#111111`, type `{typography.button}`, padding 10px 18px, rounded `8px`. 1px `#d3cec6` border.

**`button-tertiary`** — Plain text button.
- Background `#f5f1ec`, text `#111111`, type `{typography.button}`, rounded `8px`, padding 10px 18px.

**`button-fin`** — Fin Orange CTA — reserved for Fin AI product CTAs.
- Background `#ff5600`, text `#ffffff`, type `{typography.button}`, rounded `8px`, padding 10px 18px.

### Pricing Tabs

**`pricing-tab-default`** + **`pricing-tab-selected`** — Pill-toggle on `/pricing`.
- Default: `#f5f1ec` background, `#626260` text, rounded `9999px`.
- Selected: `#ffffff` white background, `#111111` text — selected = lift onto white.

### Cards & Containers

**`pricing-card`** — Each tier on `/pricing`.
- Background `#ffffff`, text `#111111`, type `{typography.body}`, rounded `12px`, padding 24px.

**`pricing-card-featured`** — Featured / recommended tier — inverts to charcoal.
- Background `#111111`, text `#ffffff`, otherwise identical structure.

**`feature-card`** — Generic feature highlight.
- Background `#ffffff`, text `#111111`, type `{typography.body}`, rounded `12px`, padding 24px.

**`product-mockup-card`** — The dominant card type — frames a high-fidelity product UI screenshot.
- Background `#ffffff`, text `#111111`, type `{typography.body}`, rounded `16px`, padding 24px.

**`testimonial-card`** — Customer quote with avatar + name + company.
- Background `#ffffff`, text `#111111`, type `{typography.body-lg}`, rounded `12px`, padding 32px.

**`startup-discount-card`** — The "Startups get 90% off" tinted card.
- Background `#ebe7e1`, text `#111111`, type `{typography.body}`, rounded `12px`, padding 32px.

**`customer-logo-tile`** — Small tile in the customer marquee.
- Background `#f5f1ec`, text `#626260`, type `{typography.caption}`, rounded `4px`, padding 16px.

**`cta-banner`** — Closing CTA panel near page bottom.
- Background `#ffffff`, text `#111111`, type `{typography.headline}`, rounded `12px`, padding 48px.

### Inputs & Forms

**`text-input`** + **`text-input-focused`** — Form fields on contact and search overlays.
- Background `#ffffff`, text `#111111`, type `{typography.body}`, rounded `8px`, padding 10px 14px.

### FAQ

**`faq-row`** — Expandable accordion row in the pricing FAQ.
- Background `#f5f1ec`, text `#111111`, type `{typography.body}`, rounded `8px`, padding 24px. 1px `#ebe7e1` bottom rule.

### Navigation

**`top-nav`** — Sticky cream bar with the Intercom wordmark left, nav links centered, log-in + sign-up pair right.
- Background `#f5f1ec`, text `#111111`, type `{typography.body-sm}`, height 56px.

### Footer

**`footer`** — Dense link grid on `#f5f1ec` cream with the Intercom wordmark left.
- Background `#f5f1ec`, text `#626260`, type `{typography.caption}`, padding 64px 32px.

## Do's and Don'ts

### Do

- Reserve `#f5f1ec` cream as the system's anchor surface — never replace with pure white.
- Lift cards from cream onto white (`#ffffff`) for hierarchy.
- Use **`button-fin`** Fin Orange ONLY on Fin AI product CTAs and Fin badges.
- Pair Saans display at weight 500 with body at 400.
- Use product UI screenshots as the protagonist of every section.
- Use `12px` 12px for cards and `16px` 16px for product mockup tiles.
- Apply negative tracking proportionally to display sizes.

### Don't

- Don't use pure white as the canvas.
- Don't use Fin Orange as a section background or as a generic primary CTA.
- Don't add drop shadows to floating cards.
- Don't introduce a second display family.
- Don't pill-round CTAs.
- Don't write all-caps tracked eyebrows.
- Don't promote the report palette colors to brand-level surfaces.
- Don't combine charcoal CTAs and Fin Orange CTAs in the same viewport.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop-XL | 1440px | Default desktop layout |
| Desktop | 1280px | Card grid 3-up maintained |
| Tablet | 1024px | Card grid 3-up → 2-up |
| Mobile-Lg | 768px | Pricing comparison becomes accordion; nav hamburger |
| Mobile | 480px | Single-column; display-xl scales 72px → ~32px |

### Touch Targets

- CTAs hold ≥40px tap height across viewports.
- Pricing tab pills hold ≥40px tap height.
- Form inputs hold ≥44px tap target on touch.

### Collapsing Strategy

- **Top nav**: links collapse to hamburger below 768px; primary CTA stays visible.
- **Card grids**: 3-up → 2-up at 1024px → 1-up below 768px.
- **Pricing comparison**: collapses into per-tier accordion below 768px.
- **Display type**: `{typography.display-xl}` 72px scales toward `{typography.display-md}` 40px on mobile.

### Image Behavior

- Product UI screenshots maintain aspect ratio and never crop.
- Customer logos in the marquee may collapse from 6-up to 3-up below 768px.

## Iteration Guide

1. Focus on ONE component at a time and reference it by its `components:` token name.
2. When introducing a section, decide first whether it sits on `#f5f1ec` cream (default) or whether it lifts onto a `#ffffff` white card.
3. Default body to `{typography.body}` at weight 400.
4. Run `npx @google/design.md lint DESIGN.md` after edits.
5. Add new variants as separate component entries.
6. Treat Fin Orange as a product accent: Fin CTA and Fin badge only.
7. Lead every section with a product screenshot.

## Known Gaps

- The **report palette** lives in product analytics dashboards rendered inside marketing mockups; they are documented for completeness but are not brand surface colors.
- Form-field error and validation styling is not visible on the inspected pages.
- Dark mode is not documented because the marketing site does not ship a dark theme.
- The helpdesk / inbox product surfaces show in-product UI states that aren't formal marketing chrome.
- Saans and SaansMono are proprietary; an open-source substitute (Inter, Söhne, Geist) is acceptable.
