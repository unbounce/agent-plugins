# Design System: Warp

## Overview

Warp is an "agentic development environment" — a terminal application that wraps an AI agent — and its marketing site mirrors the product's posture: a single dark band running the entire page, warmer than pure black (`#2b2622` `#2b2622` carries a hint of brown-beige from the brand's oklch-defined warmth value), with copy set almost entirely in Inter. The page reads more like a developer's reading-mode editor than a marketing surface.

The decoration is restrained. Two terminal screenshots open the hero (split between the two main product modes — agent + terminal). A partner-logo strip (Anthropic / OpenAI / Google / Stanford) sits below the hero on a slightly warmer tile surface. A single testimonial card with a portrait photograph. A press-coverage list. Then the page closes with download tiles for Mac / Linux / Windows. There is no gradient, no atmospheric backdrop, no illustration system.

Type is the second decisive voice. Hero display sits at 64 px Inter weight 400 with `-1.6px` tracking — restrained for a hero, deliberately quiet. The brand carries DM Mono as its monospace face for code blocks, and Instrument Serif italics occasionally appear for editorial moments. Body text is 16 px Inter at line-height 1.5, very readable.

**Key Characteristics:**
- A single primary "color" — really an off-white `#f7f5f0` (`#f7f5f0`) — that doubles as text on canvas and as the button-primary fill. There is no chromatic brand accent.
- Warm dark canvas (`#2b2622` `#2b2622`) is the only page surface. The brand's defining tone is the brown-warmth, not pure black.
- Extremely tight button radii — 3 / 4 px (1 / 2× the brand's `4px` 4 px base) — the brand never uses generous pill shapes for CTAs. Only icon containers use `9999px`.
- Inter sans + DM Mono mono is the canonical pairing. Instrument Serif appears as a third editorial face for occasional italics.
- Terminal-mockup imagery is the brand's only consistent decorative system — no gradients, no atmospheric overlays.
- A subtle warm tint runs through every neutral; even body text and dividers carry a hint of warmth rather than neutral gray.

## Colors

### Brand & Accent
- **Off White Primary** (`#f7f5f0` — `#f7f5f0`): The brand's "primary" is a warm off-white. Used as button-primary fill, as default text on canvas, as the wordmark color. There is no chromatic brand accent — the off-white IS the brand's distinguishing tone.

### Surface
- **Canvas** (`#2b2622` — `#2b2622`): The warm dark page background. Resolved from `oklch(22.0% 0.004 84.6)`. Slightly browner than pure black, slightly warmer than a neutral gray — the warmth IS the brand's identity.
- **Canvas Soft** (`#383330` — `#383330`): A lighter warm-dark fill used for cards, mockup chrome, and partner-logo tiles.
- **Hairline** (`#3f3a36` — `#3f3a36`): 1 px solid divider on dark surfaces.

### Text
- **Ink** (`#f7f5f0` — `#f7f5f0`): Default text on canvas — same off-white as the primary, intentionally unified.
- **Body Strong** (`#dad2c1` — `#dad2c1`): Mid-emphasis body text.
- **Body** (`#c9c0ad` — `#c9c0ad`): Secondary body text — captions, supporting copy, press-coverage rows.
- **Mute** (`#aea69c` — `#aea69c`): Lowest-priority text — timestamps, fine print, footer secondary lines. Resolved from `oklch(71.5% 0.008 84.6)`.

### Semantic
The brand doesn't surface a separate error / warning / success palette in its marketing pages. Validation cues come from the unified off-white system; in-product semantic colors live in the terminal application proper.

## Typography

### Font Family
Three faces ladder the system:
1. **Inter** for every display, body, button, link, and label role. Weights 400 / 500 are the working pair. Used with the brand's "Inter Fallback" custom face as the metric-compatible system fallback.
2. **DM Mono** for terminal mockups, command snippets, and code blocks. Weight 400 only. Loaded as `--font-dm-mono`.
3. **Instrument Serif** for occasional editorial italic moments — rare on the marketing surface, but documented as a third face for emphasised tagline-style phrases. **Abel** is also loaded as a fourth fallback for headline emphasis.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 70.4px | -1.6px | Hero headline ("Warp is the agentic development environment"). |
| `{typography.display-lg}` | 48px | 400 | 52.8px | -1.2px | Section headlines. |
| `{typography.display-md}` | 32px | 500 | 40px | -0.8px | Sub-section displays. |
| `{typography.display-sm}` | 24px | 500 | 32px | -0.4px | Card titles and lead emphasis. |
| `{typography.display-serif}` | 48px | 400 | 52px | -0.5px | Instrument Serif italic editorial moments. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraphs. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | 0 | Bold inline body. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | 0 | Nav link / button labels. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Captions, fine print. |
| `{typography.code}` | 13px | 400 | 18px | 0 | Terminal mockup body. |
| `{typography.code-md}` | 14px | 400 | 20px | 0 | Inline command snippets. |
| `{typography.button-md}` | 14px | 500 | 20px | 0 | Button labels. |

### Principles
- **Hero display at weight 400** — the brand reads as quietly confident, not as a billboard.
- **Negative tracking is part of the voice.** `-1.6 px` at 64 px hero, scaling down through display levels.
- **Inter for narrative, DM Mono for technical.** Strict role separation.

### Note on Font Substitutes
All three faces are open or freely-loadable:
- **Inter** — load directly from Google Fonts or Vercel-hosted CDN.
- **DM Mono** — open-source on Google Fonts.
- **Instrument Serif** — open-source on Google Fonts.

## Layout

### Spacing System
- **Base unit**: 4 px (with occasional 10 px and 6 px values for button padding).
- **Tokens**: `2px` 2 px · `4px` 4 px · `8px` 8 px · `10px` 10 px · `16px` 16 px · `24px` 24 px · `32px` 32 px · `48px` 48 px · `64px` 64 px · `96px` 96 px.
- **Section padding**: hero / content bands use `96px` 96 px on desktop.
- **Card interior**: cards sit at `24px` 24 px.

### Grid & Container
- Marketing content centres at roughly 1200 px width.
- Hero: 2-column at desktop (split between two terminal screenshots), stacks at mobile.
- Partner logos: 5-up wrapping flex row.
- Download tiles: 3-up at desktop (Mac / Linux / Windows), 1-up at mobile.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hero stacks; 1-up grids; nav hamburger. |
| Tablet | 768–1023px | 2-up grids. |
| Desktop | ≥ 1024px | Full hero split; 3-up download tiles. |

#### Touch Targets
Buttons render at ~36 px tall (8 px vertical padding + 20 px line-height). Mobile inflates touch area through additional padding to meet WCAG 44 × 44 px floor.

#### Collapsing Strategy
- Nav: full link row + Sign in / Download right cluster at desktop. Hamburger at mobile.
- Hero terminal-mockup split: stacks vertically at mobile.
- Press / job rows: full-width single column; stay legible at all widths.

#### Image Behavior
- **Terminal mockups**: rendered as dark cards with the actual terminal UI inside (warm canvas + colored syntax). Aspect ratio ~3:2.
- **Partner logos**: monochrome SVGs on dark tile cards.
- **Testimonial portraits**: 1:1 square crop inside `4px` card chrome.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default for hero band. |
| Level 1 — Hairline | 1 px solid `#3f3a36` border on `#383330`. | Default card chrome. |
| Level 2 — Inset Card | Canvas-soft fill against canvas background with 1 px hairline. | Mockup cards, download tiles, testimonial cards. |

The brand uses surface-contrast and hairline borders for elevation; soft drop-shadows do not appear in the marketing surface.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Full-bleed bands. |
| `1px` | 1px | Tightest in-text indicator. |
| `2px` | 2px | Inline very-small chips. |
| `3px` | 3px | Default button radius — extremely tight. |
| `4px` | 4px | Card chrome (the brand's `--radius` base). |
| `6px` | 6px | Slightly larger cards. |
| `9999px` | 9999px | Icon containers, status pills. |

### Photography Geometry
- Terminal mockups: ~3:2 inside `4px` card chrome.
- Partner logos: monochrome SVGs at consistent 24 px height inside tile cards.
- Testimonial portraits: 1:1 square inside `4px`.

## Components

### Buttons

**`button-primary`** — the off-white CTA on dark canvas.
- Background `#f7f5f0` (off-white), text `#2b2622` (warm dark), label `{typography.button-md}`, padding `8px 16px`, shape `3px` 3 px. Tight.

**`button-secondary-ghost`** — the ghost-style secondary used for nav and tertiary actions.
- Background `#2b2622`, text `#f7f5f0`, no border, same typography / shape.

**`button-icon-circular`** — the circular icon container.
- Background `#2b2622`, ink icon, shape `9999px`. Used for nav controls (search, theme).

### Cards & Containers

**`card-content`** — the default content card on canvas-soft.
- Background `#383330`, text `#f7f5f0`, 1 px solid `#3f3a36`, padding `24px`, shape `4px`.

**`card-mockup`** — the terminal-screenshot mockup card.
- Same chrome as `card-content` but body in `{typography.code}` (DM Mono) when text appears inside.

**`download-tile`** — the Mac / Linux / Windows download tile.
- Background `#383330`, text `#f7f5f0`, hairline border, padding `24px`, shape `4px`. Hosts a platform icon + label + download CTA.

**`partner-logo-tile`** — the canvas-soft tile hosting a partner logo.
- Background `#383330`, monochrome logo SVG inside, padding `16px`, shape `4px`.

**`testimonial-card`** — the single quote-style card with a portrait.
- Background `#383330`, text `#f7f5f0`, padding `24px`, shape `4px`. Portrait 1:1 + body in `{typography.body-md}`.

**`press-row`** — the press-coverage list item.
- Background `#2b2622` (no fill — sits on the canvas band), 1 px solid bottom border `#3f3a36`, body in `{typography.body-md}`, padding `16px` 0.

**`job-row`** — the "Join our team" list item (single row per open role).
- Background `#2b2622`, 1 px solid bottom border, body in `{typography.body-md-strong}`, padding `16px` 0.

### Inputs & Forms

**`text-input`** — the dark-canvas text input.
- Background `#383330`, text `#f7f5f0`, 1 px solid `#3f3a36`, body in `{typography.body-sm}`, padding `8px 10px`, shape `3px`.

### Navigation

**`nav-bar`** — the sticky top nav.
- Background `#2b2622`, text `#f7f5f0`, padding `10px 24px`.

**`nav-link`** — link items in nav.
- Background `#2b2622`, text `#f7f5f0`, body in `{typography.body-sm-strong}`, padding `4px 10px`, shape `3px`.

**`footer`** — the footer band.
- Background `#2b2622`, text `#c9c0ad`, padding `48px 24px`. Body in `{typography.body-sm}`.

### Signature Components

**`hero-band`** — the dark hero band hosting the 64-px Inter headline.
- Background `#2b2622`, text `#f7f5f0`, padding `96px 24px`. Headline `{typography.display-xl}` (64 px / 400 / `-1.6 px`). Below: a 2-column terminal-mockup split.

**`content-band`** — the standard content band.
- Background `#2b2622`, text `#f7f5f0`, padding `96px 24px`. Section headline `{typography.display-md}`.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces (`scripts/derive-examples-block.mjs`). Each `ex-*` entry references brand-native primitives so downstream consumers (`/preview-design`, `/generate-kit`) re-skin the same 10 surfaces consistently. `TO_FILL` markers indicate missing primitives — resolve in the LLM judgment pass.

**`ex-pricing-tier`** — Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** — What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** — Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** — Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — same chrome as feature-card with elevated shadow.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — Empty-state illustration frame.
- Properties: `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast notification surface — feature-card shape + medium shadow.
- Properties: `backgroundColor`, `rounded`, `padding`, `typography`


## Do's and Don'ts

### Do
- Reserve `#f7f5f0` off-white for primary CTA pills and default text. There is no chromatic accent.
- Use tight `3px` 3 px or `4px` 4 px button radii. The brand never uses generous pills for CTAs.
- Set hero headlines in Inter weight 400 with `-1.6 px` tracking. The brand reads as quietly confident.
- Pair Inter (sentence-case) with DM Mono (code blocks, terminal mockups).
- Keep the warm-dark canvas tone — pure black breaks the brand's identity.

### Don't
- Don't introduce a chromatic brand accent. The off-white-on-warm-dark IS the brand's voice.
- Don't render the hero headline in heavy weight (700+). The brand's display is intentionally light.
- Don't use generous pill CTAs. The brand's button radius is 3-4 px, almost rectangular.
- Don't replace the warm dark canvas with neutral gray or pure black. The warmth IS the brand.
- Don't drop a soft drop-shadow on cards. Hairlines + surface contrast carry elevation.
