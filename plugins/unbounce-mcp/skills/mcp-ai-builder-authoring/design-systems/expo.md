# Design System: Expo

## Overview

Expo's marketing site reads like a quietly-confident React-Native developer platform. The base canvas is **pure white** (`#ffffff` — #ffffff) with a soft **sky-blue gradient atmospheric wash** behind the hero band. Near-black ink `#171717` (#171717) carries body and display alike. The single brand voltage is **pure black** (`#000000` — #000000) for primary CTAs — minimal and editorial-feeling. A small blue text-link accent (`#0d74ce` — #0d74ce) is reserved for inline body links, never as a CTA.

Type runs **Inter** as the single sans family at modest weights (display 600, body 400). JetBrains Mono carries every code surface. No custom typeface — the brand trusts Inter's editorial neutrality.

The brand's strongest visual signature is the **device-mockup hero** — a centered MacBook + iPhone composite showing real Expo dev surfaces (Expo Studio, EAS Build dashboard, the Expo Go simulator) — over a sky-blue gradient atmospheric wash. The composite is the page's chrome instead of an illustration.

**Key Characteristics:**
- Pure white canvas with sky-blue gradient atmospheric backdrop in hero only.
- Single primary CTA: pure black pill at `8px` (8px) — compact developer-tool dialect.
- Text-link blue (`#0d74ce`) for inline links only — never on a CTA.
- Inter as the single sans family — no custom display typeface.
- JetBrains Mono on every code surface.
- Device-mockup hero with real Expo product surfaces is the brand chrome.
- Hairline + soft drop depth; no atmospheric brand decoration outside the hero.
- 96px section rhythm.

## Colors

### Brand & Accent
- **Black** (`#000000` — #000000): Primary CTA fill. Used scarcely.
- **Black Active** (`#1a1a1a` — #1a1a1a): Press state.
- **Text Link Blue** (`#0d74ce` — #0d74ce): Inline body links inside long-form copy. Scoped narrowly — never on CTAs.
- **Legal Link Blue** (`#476cff` — #476cff): Inline links inside legal copy footer.
- **Bright Cyan** (`#47c2ff` — #47c2ff): Used very sparingly inside docs widget links.

### Surface
- **Canvas** (`#ffffff` — #ffffff): Pure white page floor.
- **Canvas Soft** (`#fafafa` — #fafafa): Subtle alternating band.
- **Surface Card** (`#ffffff` — #ffffff): Pure white card.
- **Surface Strong** (`#f0f0f3` — #f0f0f3): Badges, ecosystem tiles, secondary buttons.
- **Surface Dark** (`#171717` — #171717): Dark feature cards, code blocks, IDE mockups, featured pricing.
- **Surface Dark Elevated** (`#1a1a1a` — #1a1a1a): One step lighter inside dark cards.

### Atmospheric Backdrop
- **Sky Light** (`#cfe7ff` — #cfe7ff) + **Sky Mid** (`#a8c8e8` — #a8c8e8): The soft sky-blue gradient wash behind the homepage hero only. Not a brand action color.

### Hairlines
- **Hairline** (`#f0f0f3` — #f0f0f3): Default 1px divider.
- **Hairline Soft** (`#f5f5f7` — #f5f5f7): Lighter divider.
- **Hairline Strong** (`#dcdee0` — #dcdee0): Stronger panel outline.

### Text
- **Ink** (`#171717` — #171717): Display, body emphasis.
- **Body** (`#60646c` — #60646c): Default running-text — slightly cool gray.
- **Body Strong** (`#171717` — #171717): Same as ink.
- **Muted** (`#999999` — #999999): Sub-titles.
- **Muted Soft** (`#cccccc` — #cccccc): Disabled text.
- **On Primary** (`#ffffff` — #ffffff): White text on black CTA.
- **On Dark** (`#ffffff` — #ffffff): White text on dark cards.
- **On Dark Soft** (`#b0b4ba` — #b0b4ba): Muted off-white on dark.

### Semantic
- **Warning** (`#ab6400` — #ab6400): Warning text inside docs callouts.
- **Preview** (`#8145b5` — #8145b5): "Preview" tag color.
- **Success** (`#16a34a` — #16a34a): Confirmation.
- **Error** (`#eb8e90` — #eb8e90): Validation errors.

## Typography

### Font Family
**Inter** is the single sans family across every text role. **JetBrains Mono** carries every code surface. Fallback: `-apple-system, system-ui, sans-serif`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 64px | 600 | 1.05 | -1.92px | Homepage hero h1 |
| `{typography.display-xl}` | 48px | 600 | 1.1 | -1.44px | Subsidiary heroes |
| `{typography.display-lg}` | 36px | 600 | 1.15 | -1.08px | Section heads |
| `{typography.display-md}` | 28px | 600 | 1.2 | -0.84px | Sub-section heads |
| `{typography.display-sm}` | 22px | 600 | 1.25 | -0.5px | Card group titles |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Component titles |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | List labels |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body |
| `{typography.caption}` | 13px | 400 | 1.4 | 0 | Photo captions |
| `{typography.caption-uppercase}` | 11px | 600 | 1.4 | 0.88px | Section labels, badges |
| `{typography.code}` | 13px | 400 | 1.5 | 0 | Code blocks — JetBrains Mono |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | CTA labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu |

### Principles
- **Display weight stays at 600** — confident but not bombastic. Inter at 600 reads cleaner than 700.
- **Negative letter-spacing on display** — -0.5px to -1.92px tracking.
- **JetBrains Mono on every code surface.**

### Note on Font Substitutes
Inter and JetBrains Mono are both freely available — the system uses them directly.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `20px` 20px · `24px` 24px · `32px` 32px · `48px` 48px · `96px` 96px.
- **Section padding:** 96px.

### Grid & Container
- Max content width: ~1200px.
- Editorial body: 12-column grid.
- Feature card grids: 2-up at desktop for hero splits, 3-up for benefit grids.
- Ecosystem tile grid: 8-up at desktop.
- Footer: 5-column at desktop.

### Whitespace Philosophy
Generous editorial pacing. The white canvas does not compete with the hero's gradient sky wash; cards inside dense workflow sections sit close (16-24px gap).

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat (canvas) | `#ffffff` (#ffffff) | Body bands, footer |
| Card | `#ffffff` (#ffffff) | Content cards |
| Hairline border | 1px `#f0f0f3` | Card outlines |
| Soft drop | `0 4px 12px rgba(0, 0, 0, 0.04)` | Hovered cards (single shadow tier) |
| Atmospheric gradient | Sky-blue radial wash | Hero backdrop only |
| Dark inversion | `#171717` (#171717) | Dark feature cards, code blocks, featured pricing |

### Decorative Depth
- **Sky-blue gradient backdrop** in the hero only — atmospheric depth without claiming to be a brand color.
- **Device mockup composite** as page chrome — MacBook + iPhone showing real Expo dev surfaces.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Reserved |
| `4px` | 4px | Inline tags |
| `6px` | 6px | Compact rows |
| `8px` | 8px | CTA buttons, form inputs, ecosystem tiles |
| `12px` | 12px | Feature cards, code blocks, pricing tiers |
| `16px` | 16px | Device mockup cards |
| `24px` | 24px | Larger atmospheric cards (rare) |
| `9999px` | 9999px | Badges only |
| `9999px` | 9999px | Avatar plates (rare) |

Compact developer-ergonomic radii — 8px CTAs, 12px cards. Pill geometry is reserved for badges, never CTAs.

## Components

### Top Navigation

**`top-nav`** — Background `#ffffff`, text `#171717`, height 64px. Layout: Expo wordmark left, primary horizontal menu (Tools / Workflows / EAS / Pricing / Docs / Showcase), Sign In + Get started CTA right.

### Buttons

**`button-primary`** — Pure black pill. Background `#000000`, text `#ffffff`, type `{typography.button}` (14px / 500), padding 10px × 18px, height 40px, rounded `8px` (8px).

**`button-primary-active`** — Press state. Background `#1a1a1a`.

**`button-secondary`** — White card with 1px hairline-strong border. Background `#ffffff`, text `#171717`, 1px `#dcdee0` border.

**`button-tertiary-text`** — Inline blue text link. Background transparent, text `#0d74ce`.

### Hero & Device Mockup

**`hero-band`** — Background `#ffffff` with a soft sky-blue gradient wash behind the centered headline. Display headline in `{typography.display-mega}` (64px / 600 / -1.92px), subhead in `{typography.body-md}`, single primary CTA, then below — the device mockup composite.

**`device-mockup-card`** — A layered MacBook + iPhone composite showing real Expo dev surfaces. Background `#ffffff`, rounded `16px`. The MacBook holds the EAS dashboard or Expo Studio screenshot; the iPhone overlay shows the running app in Expo Go. This is the page chrome.

### Cards

**`feature-card`** — Background `#ffffff`, text `#171717`, type `{typography.title-md}`, rounded `12px`, padding 24px, 1px `#dcdee0` border.

**`feature-card-dark`** — Dark variant. Background `#171717`, text `#ffffff`. Same shape, dark inversion.

**`workflow-step-card`** — Step in the "Get your app on every device" workflow row. Background `#ffffff`, text `#60646c`, rounded `12px`, padding 20px. Layout: 32px square `{component.workflow-step-icon}` + step number + label + body.

**`workflow-step-icon`** — Square plate. Background `#f0f0f3`, rounded `8px`, 32px size.

**`testimonial-card`** — Quote card. Background `#ffffff`, text `#60646c`, rounded `12px`, padding 24px.

### Code & IDE

**`code-block`** — Inline code block. Background `#171717`, text `#ffffff` in `{typography.code}` (JetBrains Mono 13px), rounded `12px`, padding 20px. White text on dark.

**`ide-mockup-card`** — Stylized IDE mockup. Background `#171717`, rounded `12px`. Multi-pane editor + terminal preview.

### Pricing

**`pricing-tier-card`** — Standard pricing tier. Background `#ffffff`, rounded `12px`, padding 32px, 1px `#dcdee0` border.

**`pricing-tier-featured`** — Featured tier. Background `#171717`, text `#ffffff`. Same shape, dark inversion.

### Ecosystem

**`ecosystem-tile`** — Square logo plate for ecosystem partner logos (TypeScript, React, Sentry, etc.). Background `#ffffff`, rounded `8px`, 64px size, 1px `#f0f0f3` border.

### Forms & Tags

**`text-input`** — Background `#ffffff`, text `#171717`, rounded `8px` (8px), padding 12px × 16px, height 44px, 1px `#dcdee0` border. Focus thickens border to 2px ink.

**`badge-pill`** — Small uppercase pill. Background `#f0f0f3`, text `#171717`, type `{typography.caption-uppercase}`, rounded `9999px`, padding 4px × 10px.

### CTA / Footer

**`cta-band`** — Pre-footer band. Background `#ffffff`, centered display headline in `{typography.display-lg}`, single black pill CTA. 96px padding.

**`footer-light`** — Closing white footer. Background `#ffffff`, text `#60646c`. 5-column link list. 64×48px padding.

**`footer-link`** — Background transparent, text `#60646c`, type `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Reserve `#000000` (black) for primary CTAs.
- Use `#0d74ce` (blue) for inline body links only — never on CTAs or buttons.
- Set every CTA at `8px` (8px) — developer dialect.
- Use Inter at weight 600 for display, 400 for body.
- Render every code surface in JetBrains Mono.
- Pair the hero with the device-mockup composite — it's the page chrome.

### Don't
- Don't introduce a saturated brand action color. Black is the only CTA fill.
- Don't use blue (`#0d74ce`) on a CTA. Inline links only.
- Don't drop display below weight 600 or above 700.
- Don't use full pills on CTAs — pills are for badges only.
- Don't replicate the sky-blue gradient backdrop outside the hero.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA is what appears on actual page CTAs.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero h1 64→32px; device mockup → single iPhone screen; feature grid 1-up; nav hamburger. |
| Tablet | 640–1024px | Hero h1 48px; device mockup compresses; feature grid 2-up. |
| Desktop | 1024–1280px | Full hero h1 64px; full MacBook + iPhone composite; feature grid 3-up. |
| Wide | > 1280px | Content caps at 1200px. |

### Touch Targets
- Primary CTA at 40px height — at WCAG AA, padded for AAA.
- Search input 44px — at AAA.

### Collapsing Strategy
- Top nav switches to hamburger below 768px.
- Device mockup MacBook + iPhone collapses to a single iPhone preview on mobile.
- Feature grid: 3-up → 2-up → 1-up.
- Ecosystem tile grid: 8-up → 4-up → 3-up → 2-up.

## Iteration Guide

1. Focus on a single component at a time.
2. CTAs default to `8px` (8px). Cards use `12px` (12px).
3. Variants live as separate entries.
4. Use `{token.refs}` everywhere — never inline hex.
5. Hover state never documented.
6. Inter 600 for display, Inter 400 for body. JetBrains Mono on code.
7. Black stays the only CTA color; text-link blue stays inline-only.

## Known Gaps

- Inter and JetBrains Mono are freely available — no licensing concerns.
- Animation timings (device mockup parallax, hero entrance) out of scope.
- In-app surfaces (EAS dashboard interactive, Expo Go simulator) only partially captured via marketing mockups.
- Form validation states beyond focus not visible on captured surfaces.
