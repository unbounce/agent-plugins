# Design System: Superhuman

## Overview

Superhumon's marketing pages open in an editorial dark register: a deep indigo navy `#1b1938` (`#1b1938`) canvas overlaid with a soft violet-and-sky atmospheric backdrop and a half-bleed portrait subject (often a person looking off-frame, photographed at twilight). Headlines render in `{typography.display-xxl}` (Super Sans VF at 64px / weight 540) with negative tracking, set in white over the indigo. A single rounded-rectangle CTA button anchors each band — never two, never three.

The body of every page flips to white. `#ffffff` (`#ffffff`) takes over below the hero, with body type in `#292827` (`#292827` — a slightly warm dark grey, never pure black) and feature rows alternating between white and `#fafaf8` (a barely-tinted off-white). Pricing tiers sit on this white surface; the featured tier inverts to the indigo navy, completing the brand's binary polarity.

Every page closes with a **deep-teal CTA band** (`#0e3030` — `#0e3030`). The teal is a single chromatic interlude: rich, almost-black green-blue, that breaks up what would otherwise be an indigo/white-only page. The teal band always contains the closing CTA in `{typography.display-lg}` paired with a single white-pill button.

Typography runs **Super Sans VF** — a proprietary variable display sans — at unusual mid-weights (460, 540, 600). The variable axes let the brand pick precise sub-default weights that read as warmer and more human than typical 400/500/700 SaaS scales. Display sizes use negative letter-spacing of -1.32px to -0.315px depending on size; line-heights are unusually tight (0.96 on 48px display).

**Key Characteristics:**
- Three-canvas system: indigo navy (`#1b1938`) for hero, white (`#ffffff`) for body, deep teal (`#0e3030`) for closing CTA.
- Half-bleed portrait subject in the hero with violet-sky atmospheric backdrop — the brand uses a person looking off-frame as a recurring visual.
- Single CTA per band; the marketing pages never crowd actions.
- Super Sans VF at sub-default weights (460, 540, 600) — the brand's typographic warmth signature.
- Tight line-heights (0.96) on display sizes — vertical compression as editorial density.
- Off-warm-grey body ink (`#292827`) — never pure black; the brand's quiet warmth.
- Pill-shaped on-hero CTA in pale violet (`#c9b4fa`); rounded-rectangle CTAs everywhere else.

## Colors

> **Source pages:** home (`/`), `/products/go-ai-assistant`, `/contact-sales`, `/plans`.

### Brand & Accent
- **Primary Indigo Navy** (`#1b1938` — `#1b1938`): The brand's primary surface and CTA color. Hero canvas, filled rounded-rectangle button, featured pricing tier.
- **Indigo Deep** (`#0e0c1f` — `#0e0c1f`): Pressed-state lift / deeper navy used in hero gradient stops.
- **Surface Violet Soft** (`#c9b4fa` — `#c9b4fa`): The hero pill-button fill — pale violet over the indigo canvas. Also appears in atmospheric backdrops.
- **Surface Teal Deep** (`#0e3030` — `#0e3030`): The signature closing-CTA band color. Rich green-blue, almost black.
- **Surface Teal Mid** (`#155555` — `#155555`): Slightly lifted teal for nested chrome inside the band.

### Surface
- **Canvas** (`#ffffff` — `#ffffff`): Default body background.
- **Canvas Soft** (`#fafaf8` — `#fafaf8`): Barely-warm off-white for alternating feature-row bands.
- **Hairline** (`#e8e4dd` — `#e8e4dd`): 1px borders, slightly warm grey.
- **Hairline Dark** (`#3f3a52` — `#3f3a52`): 1px borders on dark surfaces.

### Text
- **Ink** (`#292827` — `#292827`): Default body text. Warm dark grey, never pure black.
- **Ink Mute** (`#73706d` — `#73706d`): Secondary text, captions.
- **Ink Faint** (`#9a9794` — `#9a9794`): Tertiary / disabled text.
- **On Primary** (`#ffffff` — `#ffffff`): Text on dark navy / teal surfaces.
- **On Dark Mute** (`#bcbac9` — translucent white): Secondary text on dark.
- **On Dark Faint** (`#5a5772` — translucent white): Tertiary text on dark.

## Typography

### Font Family

The display and UI tier is **Super Sans VF** — a proprietary variable sans (variable axes for weight, with the brand using sub-default 460 / 540 / 600 weights). Fallback chain is the system font stack.

For substitution use **Inter Variable** (open-source) at weight 460 / 540 / 600 — Inter's variable axes match Super Sans VF's behavior closely. Avoid fixed-weight Inter at 400 / 500 / 600 — the brand specifically picks the in-between weights.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 64px | 540 | 0.96 | 0 | Hero headline |
| `{typography.display-xl}` | 48px | 460 | 0.96 | -1.32px | Section opener on light surfaces |
| `{typography.display-lg}` | 28px | 540 | 1.14 | -0.63px | Sub-section / feature title |
| `{typography.display-md}` | 22px | 460 | 1.1 | -0.315px | Card title |
| `{typography.heading-lg}` | 20px | 460 | 1.2 | -0.4px | Compact card title |
| `{typography.body-lg}` | 18px | 540 | 1.5 | -0.135px | Marketing body lead |
| `{typography.body-md}` | 16px | 460 | 1.5 | 0 | Default UI body |
| `{typography.body-strong}` | 18.72px | 700 | 1.5 | 0 | Emphasized body |
| `{typography.button-md}` | 16px | 700 | 1.0 | 0 | Rounded-rectangle button label |
| `{typography.button-cap}` | 14px | 600 | 1.0 | 0 | Compact button label |
| `{typography.caption}` | 14px | 460 | 1.4 | 0 | Helper, footnote |
| `{typography.micro}` | 12px | 540 | 1.4 | 0 | Pill label, fine print |

### Principles
- **Sub-default weights.** The brand picks 460 / 540 / 600 instead of 400 / 500 / 700 — a quiet warmth in the typography that distinguishes it from default SaaS systems.
- **Tight display leading.** 0.96 on 48–64px display — the type stacks unusually compact.
- **Negative tracking on display sizes.** -1.32px at 48px scaling proportionally — tightens the variable letterforms into editorial density.

### Note on Font Substitutes
**Inter Variable** (open-source via Google Fonts) is the recommended substitute. Set `font-variation-settings: "wght" 540` for display, 460 for body — Inter's variable axes match. Avoid fixed-weight Inter; the in-between weights are the brand's signature.

## Layout

### Spacing System
- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens for fine work).
- **Tokens**: `2px` 2px · `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `24px` 24px · `32px` 32px · `64px` 64px.
- **Section padding**: 64–96px on most sections; closing teal band uses 96–128px for editorial weight.
- **Card internal padding**: 32px on pricing cards; 24px on alternating feature rows.

### Grid & Container
- Hero spans full viewport width with the violet-sky backdrop edge-to-edge; content centers in a ~960px column.
- Body content centers in ~960–1100px.
- Pricing collapses 3-up → 2-up → 1-up at 1024 / 768 breakpoints.

### Whitespace Philosophy
The brand uses generous editorial whitespace on both polarities — dark hero and white body. Section gaps tend toward 96px; the teal closing band gets up to 128px of vertical air. The whitespace itself is part of the brand's "considered, slow-tempo" feel.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat | Default surface |
| 1 | `box-shadow: 0 1px 3px rgba(0,0,0,0.08)` | Subtle card lift |
| 2 | `box-shadow: 0 8px 24px rgba(0,0,0,0.12)` | Floating panels, modals |
| 3 | Atmospheric backdrop (violet-sky over indigo) | The hero's depth medium |

### Decorative Depth
The hero's depth is the **violet-sky atmospheric backdrop** — a soft indigo-to-violet-to-sky-blue radial wash that sits behind the portrait subject. Implemented as a CSS radial gradient or large background image. Below the hero, depth is minimal — the white canvas is flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `4px` | 4px | Hairline tags |
| `6px` | 6px | Form inputs |
| `8px` | 8px | Buttons (the brand's signature button shape — rounded rectangle, never pill) |
| `12px` | 12px | Pricing cards, feature cards |
| `16px` | 16px | Modal dialogs, large feature cards |
| `9999px` | 9999px | Pill tabs in feature row, hero CTA |

### Photography Geometry
The hero uses **half-bleed portrait subjects** — a person photographed at twilight, looking off-frame, occupying the right half of the hero. The portrait extends edge-to-edge vertically and stops mid-canvas horizontally; type sits on the left side. Other photography is rare; product UI mockups handle most other illustrative needs.

## Components

### Buttons

**`button-primary-dark`** — the dominant rounded-rectangle CTA on white surfaces.
- Background `#1b1938`, text `#ffffff`, type `{typography.button-md}`, padding `12px 24px` (12px 20px), rounded `8px` 8px.
- Pressed state `button-primary-dark-pressed` shifts to `#0e0c1f`.

**`button-on-dark-pill`** — the hero CTA in pale violet pill shape.
- Background `#c9b4fa`, text `#1b1938`, same typography, padding 12px 20px, rounded `9999px`. The pill shape only appears on the hero — body CTAs use the rounded rectangle.

**`button-secondary-outline`** — outline alternative on white.
- Background `#ffffff`, text `#292827`, 1px solid `#3f3a52` border, same shape as `button-primary-dark`.

**`button-on-teal`** — CTA inside the closing teal band.
- Background `#ffffff`, text `#0e3030`, rounded-rectangle, same typography.

### Cards & Containers

**`card-feature-light`** — feature card on white.
- Background `#ffffff`, padding `32px`, rounded `12px`, 1px `#e8e4dd` border.

**`card-pricing`** — standard pricing tier card.
- Background `#ffffff`, padding `32px`, rounded `12px`, 1px `#e8e4dd` border.

**`card-pricing-featured`** — inverted indigo featured tier.
- Background `#1b1938`, text `#ffffff`, otherwise identical to `card-pricing`.

**`card-teal-band`** — the closing CTA band on every page.
- Background `#0e3030`, text `#ffffff`, padding `64px` 64px, rounded `12px` 12px (often radius-less in practice when full-bleed). Holds a single closing headline in `{typography.display-lg}` and a `button-on-teal`.

**`card-feature-row`** — alternating feature-row card on the body.
- Background `#fafaf8`, text `#292827`, padding `24px` 24px, rounded `8px` 8px. Used in pairs/triplets to explain features below the hero.

### Inputs & Forms

**`text-input`** — standard form input.
- Background `#ffffff`, text `#292827`, type `{typography.body-md}`, padding `8px+ 12px` (10px 12px), rounded `6px` 6px, 1px `#e8e4dd` border.

### Navigation

**`nav-bar-dark`** — top nav over the indigo hero.
- Background `#1b1938`, text `#ffffff`, padding `16px 24px`. Logo on the left, nav center, "Get Started" `button-on-dark-pill` on the right.

**`nav-bar-light`** — top nav on body / pricing pages.
- Background `#ffffff`, text `#292827`, otherwise same structure with `button-primary-dark` on the right.

### Pills, Tags, and Chips

**`pill-tab-light`** — feature-row tab selector.
- Background `#ffffff`, text `#292827`, type `{typography.button-cap}`, padding `8px 16px`, rounded `9999px`. Used in the feature category picker (Mail / Channels / Code / AI / Calendar etc.) below the hero.

### Signature Components

**Half-Bleed Portrait Hero** — a person photographed at twilight, occupying the right half of the indigo hero with violet-sky atmospheric backdrop behind. Type and CTA sit on the left side. The portrait is the brand's recurring visual signature.

**Closing Teal Band** — every page closes with a `card-teal-band` containing a `{typography.display-lg}` closing headline and a single `button-on-teal`. The teal is the page's resolving chord.

**`link-on-light`** — inline links on body.
- Text `#292827` rendered in `{typography.body-md}` with persistent underline.

**`footer-light`** — site-wide footer.
- Background `#ffffff`, text `#73706d`, type `{typography.caption}`, padding `64px 24px` (64px 24px). Holds 4 columns of link groups, social icons, and a small legal/copyright row.

## Do's and Don'ts

### Do
- Pair every hero with the violet-sky atmospheric backdrop and a half-bleed portrait subject when possible.
- Render display tiers at sub-default weights (460 / 540) — the warmth is the typographic signature.
- Use rounded-rectangle CTAs at 8px radius everywhere except the hero (where pill-shaped is the rule).
- Close every marketing page with a deep-teal CTA band.
- Use warm dark grey `#292827` for body text — never pure black.
- Apply tight 0.96 line-height on display sizes; the editorial compression is the brand.

### Don't
- Don't use pill-shaped buttons in the body of the page; the pill is hero-only.
- Don't bump display weight above 540 unless using `body-strong` (700) for emphasized inline body.
- Don't render body text in pure black — the warm grey `#292827` is part of the brand.
- Don't omit the closing teal band — every marketing page closes with it.
- Don't introduce additional accent colors beyond indigo, violet-soft, teal, and the off-warm-greys.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | Half-bleed portrait at full scale; teal band 128px tall |
| Desktop | 1024–1440px | Default content max-width; pricing 3-up |
| Tablet | 768–1023px | Pricing 2-up; portrait crops tighter |
| Mobile | < 768px | Pricing 1-up; hamburger nav; display drops 64 → 36px |

### Touch Targets
- Buttons hit ≥ 44×44px on mobile via 12px vertical padding × 16px line-height. WCAG AAA.
- Form fields stay at the 44px minimum height.

### Collapsing Strategy
- Display tiers stair-step 64 → 48 → 36 → 28 → 22px.
- Half-bleed portrait crops to head-and-shoulders on mobile; atmospheric backdrop simplifies.
- Pricing tiers stair-step 3-up → 2-up → 1-up.
- Top nav collapses to hamburger below 768px.
- Closing teal band reduces vertical padding from 128 → 64px on mobile.

### Image Behavior
Hero portrait uses `srcset` with desktop / mobile crops — desktop favors the full half-bleed composition; mobile crops to head-and-shoulders.

## Iteration Guide

1. Focus on ONE component at a time.
2. Reference component names and tokens directly.
3. Run `npx @google/design.md lint DESIGN.md` after edits.
4. Default body to `{typography.body-md}`; reserve `{typography.body-lg}` for marketing leads.
5. Keep the three-canvas rhythm (indigo / white / teal) — adding a fourth canvas color breaks the system.
6. The closing teal band is non-negotiable — every marketing page resolves there.
