# Design System: Composio

## Overview

Composio's marketing site reads like a serious developer-infrastructure brand — closer to Vercel or Stripe Docs in atmosphere than to a typical AI-tools startup. The base canvas is a near-black `#0f0f0f` (#0f0f0f) holding white type and a single voltage of **deep electric blue** (`#0007cd` — #0007cd) carrying every primary CTA, brand wordmark, and atmospheric spotlight glow that backs the homepage hero.

Type runs **abcDiatype** as the single sans family across display, body, navigation, and captions. Display sits at weight 500 — confident but not bombastic. Code blocks and terminal mockups switch to JetBrains Mono.

The page rhythm is monolithic: dark canvas top to bottom with subtle elevation steps via card surfaces. The brand's strongest visual signature is a **four-pane terminal-style mockup** — a 2×2 grid of dark code/output panels with a central blue spotlight glow behind them.

**Key Characteristics:**
- Single accent: `#0007cd` (#0007cd) for primary CTAs, wordmark, spotlight glows.
- Single sans family: abcDiatype carries everything except code (JetBrains Mono).
- Dark monolithic canvas: `#0f0f0f` runs top to bottom; depth from `#181818` and `#222222` brightness steps.
- Terminal-mockup hero: 2×2 grid of code/output panes is the brand signature.
- Compact pill geometry: CTAs sit at `8px` (8px), not full pills — developer-tool dialect.
- Spotlight-glow atmospheric backdrop: a radial blue glow centered behind hero content.
- 96px section rhythm.

## Colors

### Brand & Accent
- **Composio Blue** (`#0007cd` — #0007cd): Primary CTAs, wordmark, spotlight glow center.
- **Composio Blue Active** (`#0005a3` — #0005a3): Press state.
- **Spotlight Glow Tone** (`#1a26ff` — #1a26ff): Brighter blue used inside radial atmospheric glows.
- **Accent Cyan** (`#00d4ff` — #00d4ff): Sparingly on data-flow visualizations.
- **Accent Violet** (`#7b3aed` — #7b3aed): Inside specific product illustrations only.

### Surface
- **Canvas** (`#0f0f0f` — #0f0f0f): Page floor — near-black.
- **Canvas Deep** (`#000000` — #000000): Pure black for terminal mockup grids and code blocks.
- **Surface Card** (`#181818` — #181818): Default content card.
- **Surface Card Elevated** (`#222222` — #222222): Terminal panes, secondary buttons.
- **Surface Strong** (`#2a2a2a` — #2a2a2a): Dropdown menus.

### Hairlines
- **Hairline** (`#222222` — #222222): Default 1px divider.
- **Hairline Soft** (`#1a1a1a` — #1a1a1a): Lighter divider.
- **Hairline Strong** (`#333333` — #333333): Stronger panel outline.

### Text
- **Ink** (`#ffffff` — #ffffff): Display headlines.
- **Body** (`#a8a8a8` — #a8a8a8): Default running-text — soft gray.
- **Body Strong** (`#ffffff` — #ffffff): Same as ink.
- **Muted** (`#888888` — #888888): Sub-titles, breadcrumbs.
- **Muted Soft** (`#666666` — #666666): Disabled text.
- **On Primary** (`#ffffff` — #ffffff): White text on blue CTAs.

### Semantic
- **Success** (`#33d17a` — #33d17a): "Online", "active" indicators.
- **Error** (`#ff4d4d` — #ff4d4d): Validation errors.

## Typography

### Font Family
The system runs **abcDiatype** (Lineto) across every text role. Code blocks switch to **JetBrains Mono**. Fallback: `ui-sans-serif, system-ui, sans-serif`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 72px | 500 | 1.05 | -2.16px | Homepage hero h1 |
| `{typography.display-xl}` | 56px | 500 | 1.05 | -1.68px | Subsidiary heroes |
| `{typography.display-lg}` | 44px | 500 | 1.1 | -1.32px | Section heads |
| `{typography.display-md}` | 32px | 500 | 1.15 | -0.96px | Sub-section heads |
| `{typography.display-sm}` | 24px | 500 | 1.25 | -0.5px | Card group titles |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Component titles |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Toolkit card titles |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body |
| `{typography.caption}` | 13px | 400 | 1.4 | 0 | Photo captions |
| `{typography.caption-uppercase}` | 11px | 600 | 1.4 | 0.88px | Section labels, badge pills |
| `{typography.code}` | 13px | 400 | 1.5 | 0 | Code blocks — JetBrains Mono |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | CTA pill labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu |

### Principles
- **Display weight stays at 500.** Confident but not display-bold.
- **abcDiatype across every role.** No display/body family split.
- **JetBrains Mono on every code surface.**

### Note on Font Substitutes
abcDiatype is a Lineto licensed typeface. Open-source substitute: **Inter** at weight 500 with letter-spacing -1.5%.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `20px` 20px · `24px` 24px · `32px` 32px · `48px` 48px · `96px` 96px.
- **Section padding:** `96px` (96px) for major bands.

### Grid & Container
- Max content width: ~1200px.
- Editorial body: 12-column grid.
- Terminal mockup grid: 2×2 equal-size panes.
- Toolkit grid: 4-up at desktop, 2-up tablet, 1-up mobile.
- Footer: 5-column at desktop.

### Whitespace Philosophy
The dark canvas creates its own depth — whitespace can stay tight without feeling crowded. 96px between bands; 24px between cards inside a band.

## Elevation & Depth

The system uses **brightness-step elevation**: surfaces step up in brightness instead of casting drop shadows. Combined with subtle radial blue glows, this creates a focused dark-mode atmosphere.

| Level | Treatment | Use |
|---|---|---|
| Flat (canvas) | `#0f0f0f` (#0f0f0f) | Body bands, footer |
| Recessed | `#000000` (#000000) | Terminal mockup grid background, code blocks |
| Card | `#181818` (#181818) | Default content cards |
| Card elevated | `#222222` (#222222) | Terminal panes, secondary buttons |
| Atmospheric glow | Radial gradient using `#1a26ff` | Hero spotlight backdrop |

### Decorative Depth
- **Spotlight glow backdrops** — radial blue gradient centered behind hero content.
- **Terminal-pane brightness ladder** — 2×2 mockup uses canvas-deep outer + surface-card-elevated panes.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Reserved |
| `4px` | 4px | Inline tags |
| `6px` | 6px | Compact rows |
| `8px` | 8px | CTA buttons, form inputs |
| `12px` | 12px | Toolkit cards, code blocks, terminal panes |
| `16px` | 16px | Feature cards, terminal mockup grids |
| `9999px` | 9999px | Section-label badges |
| `9999px` | 9999px | Avatar plates (rare) |

Compact developer-ergonomic radii — 8px CTAs, 12-16px cards. Signals "developer tool" rather than "consumer brand."

## Components

### Top Navigation

**`top-nav-dark`** — Default top nav. Background `#0f0f0f`, text `#ffffff`, height 64px. Layout: Composio wordmark left, primary horizontal menu (Product / Toolkits / Docs / Pricing / Customers / Blog), GitHub stars + Sign In + "Get started" right.

### Buttons

**`button-primary`** — The signature Composio Blue CTA. Background `#0007cd`, text `#ffffff`, type `{typography.button}` (14px / 500), padding 10px × 18px, height 40px, rounded `8px` (8px).

**`button-primary-active`** — Press state. Background `#0005a3`.

**`button-secondary-dark`** — Surface-elevated secondary. Background `#222222`, text `#ffffff`.

**`button-outline`** — Transparent with 1px hairline-strong border.

**`button-tertiary-text`** — Inline text link.

### Hero & Atmospheric

**`hero-band`** — Homepage hero. Background `#0f0f0f`, full-width display headline in `{typography.display-mega}` (72px / 500), subhead, two CTAs, and a spotlight-glow backdrop emanating from behind the centered terminal-mockup grid.

**`terminal-mockup-grid`** — The brand's strongest visual signature. 2×2 grid of dark code/output panels inside a `16px` (16px) container. Background `#000000`, padding 32px, gap 16px.

**`terminal-pane`** — Individual code/output panel inside the mockup grid. Background `#181818`, text `#a8a8a8` in `{typography.code}`, rounded `12px` (12px), padding 20px.

**`spotlight-glow-card`** — Large feature card with centered display headline and a radial blue glow behind it. Background `#181818`, text `#ffffff` in `{typography.display-md}`, rounded `16px`, padding 48px.

### Cards

**`feature-card`** — 3-up benefit grid. Background `#181818`, text `#a8a8a8`, type `{typography.title-md}`, rounded `16px`, padding 28px.

**`toolkit-card`** — 4-up toolkit grid (Slack, GitHub, Stripe, Notion, Linear, etc.). Background `#181818`, text `#ffffff`, type `{typography.title-sm}`, rounded `12px`, padding 20px. 40px square `{component.toolkit-icon}` top, toolkit name, one-line description.

**`toolkit-icon`** — Square icon plate. Background `#222222`, rounded `8px`, 40px size.

**`testimonial-card`** — Quote card. Background `#181818`, text `#a8a8a8`, rounded `12px`, padding 24px.

### Code

**`code-block`** — Inline code/terminal block. Background `#000000`, text `#a8a8a8` in `{typography.code}`, rounded `12px`, padding 20px.

### Forms

**`text-input`** — Background `#181818`, text `#ffffff`, rounded `8px` (8px), padding 12px × 16px, height 44px.

**`search-input`** — Compact search field. Same surface and radius, smaller padding, 40px height.

### Tags & Badges

**`badge-pill`** — Small uppercase pill. Background `#222222`, text `#ffffff`, type `{typography.caption-uppercase}`, rounded `9999px`, padding 4px × 10px.

### CTA / Footer

**`cta-band-spotlight`** — Pre-footer band. Background `#0f0f0f` with centered radial spotlight glow. Display headline + single primary CTA pill. 96px padding.

**`footer-dark`** — Closing footer. Background `#0f0f0f`, text `#a8a8a8`. 5-column link list. 64×48px padding.

**`footer-link`** — Background transparent, text `#a8a8a8`, type `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Reserve `#0007cd` for primary CTAs, wordmark, and spotlight glows.
- Use `8px` (8px) for every CTA — not full pills.
- Use brightness-step ladder for elevation; avoid drop shadows.
- Pair every hero with a centered radial blue spotlight glow.
- Render code, CLI commands in JetBrains Mono via `{typography.code}`.
- Use the 2×2 terminal-mockup grid as the homepage hero anchor.

### Don't
- Don't introduce a secondary brand color. Cyan and violet are illustrative-only.
- Don't use full pills on CTAs.
- Don't drop display weight to 400.
- Don't add drop shadow tiers.
- Don't use canvas-deep (#000000) outside terminal/code surfaces.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA color is what appears on actual page CTAs.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero h1 72→36px; terminal mockup grid collapses to single pane; toolkit grid 1-up; nav hamburger. |
| Tablet | 640–1024px | Hero h1 56px; terminal mockup grid stays 2×2; toolkit grid 2-up. |
| Desktop | 1024–1280px | Full hero h1 72px; full 2×2 terminal mockup; toolkit grid 4-up. |
| Wide | > 1280px | Content caps at 1200px. |

### Touch Targets
- Primary CTA at 40px height — at WCAG AA, padded for AAA.
- Search input at 40px.

### Collapsing Strategy
- Top nav switches to hamburger below 768px.
- Terminal mockup 2×2 grid collapses to a single pane on mobile.
- Toolkit grid: 4-up → 2-up → 1-up.
- Hero spotlight glow stays at every breakpoint.

## Iteration Guide

1. Focus on a single component at a time.
2. CTAs default to `8px` (8px). Cards use `12px` or `16px`.
3. Variants live as separate entries inside `components:`.
4. Use `{token.refs}` everywhere — never inline hex.
5. Hover state never documented.
6. abcDiatype 500 for display, 400/600 for body. JetBrains Mono on every code surface.
7. Composio Blue stays scarce.

## Known Gaps

- abcDiatype is licensed; Inter is the substitute.
- Animation timings out of scope.
- In-product surfaces (toolkit dashboards, agent playground) are behind login walls.
- Form validation states beyond focus not visible on captured surfaces.
