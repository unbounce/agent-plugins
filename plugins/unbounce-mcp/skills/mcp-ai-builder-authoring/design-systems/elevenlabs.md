# Design System: ElevenLabs

## Overview

ElevenLabs reads like a quietly editorial print magazine that happens to be a voice-AI product. The base canvas is off-white `#f5f5f5` (#f5f5f5) holding warm near-black ink `#0c0a09` (#0c0a09). The brand voltage is **photographic, not chromatic**: soft pastel atmospheric gradient orbs (mint, peach, lavender, sky, rose) drift through the page as the only "color" moments. There is no neon accent, no saturated CTA color, no dark-canvas dev-tools atmosphere.

Type pairs **Waldenburg Light** (custom serif at weight 300) for display with **Inter** for body, navigation, captions. The display weight at 300 is the editorial signature — never bold, never heavy.

CTAs are subtle: a near-black ink pill (`{component.button-primary}`) is the primary, a transparent outline (`{component.button-outline}`) is the secondary. The brand trusts atmospheric photography and modest type weights to carry brand work.

**Key Characteristics:**
- Off-white canvas, warm near-black ink. No saturated CTA color.
- Single primary action: ink pill at `9999px`. Atmospheric gradients carry visual brand voltage.
- Display runs Waldenburg Light at weight 300 — editorial magazine voice.
- Body runs Inter at 400 with subtle letter-spacing (+0.15-0.18px).
- Pastel gradient orbs (5 tokens: mint, peach, lavender, sky, rose) used as atmospheric brand decoration only.
- Soft pill geometry (`9999px` for CTAs, `16px` for cards).
- 96px section rhythm.

## Colors

### Brand & Accent
- **Ink Primary** (`#292524` — #292524): The primary action color — warm near-black pill. Used scarcely.
- **Ink Primary Active** (`#0c0a09` — #0c0a09): Press state.

### Surface
- **Canvas** (`#f5f5f5` — #f5f5f5): Off-white page floor.
- **Canvas Soft** (`#fafafa` — #fafafa): Lighter band for subtle alternating sections.
- **Canvas Deep** (`#0c0a09` — #0c0a09): Same as ink — used for the rare dark-mode hero (Agents page).
- **Surface Card** (`#ffffff` — #ffffff): Pure white card.
- **Surface Strong** (`#f0efed` — #f0efed): Badges, voice-icon plates.
- **Surface Dark** (`#0c0a09` — #0c0a09): Dark hero/CTA band canvas.
- **Surface Dark Elevated** (`#1c1917` — #1c1917): Cards on dark canvas.

### Hairlines
- **Hairline** (`#e7e5e4` — #e7e5e4): Default 1px divider.
- **Hairline Soft** (`#f0efed` — #f0efed): Lighter divider.
- **Hairline Strong** (`#d6d3d1` — #d6d3d1): Stronger panel outline.

### Text
- **Ink** (`#0c0a09` — #0c0a09): Display, primary text.
- **Body** (`#4e4e4e` — #4e4e4e): Default running-text.
- **Body Strong** (`#292524` — #292524): Same as primary — emphasis.
- **Muted** (`#777169` — #777169): Sub-titles.
- **Muted Soft** (`#a8a29e` — #a8a29e): Disabled text.
- **On Primary** (`#ffffff` — #ffffff): White text on ink pill.
- **On Dark** (`#ffffff` — #ffffff): White text on dark hero.
- **On Dark Soft** (`#a8a29e` — #a8a29e): Muted off-white on dark.

### Atmospheric Gradient Stops (signature)
- **Gradient Mint** (`#a7e5d3` — #a7e5d3): Mint green orb.
- **Gradient Peach** (`#f4c5a8` — #f4c5a8): Peach orb.
- **Gradient Lavender** (`#c8b8e0` — #c8b8e0): Lavender orb.
- **Gradient Sky** (`#a8c8e8` — #a8c8e8): Sky-blue orb.
- **Gradient Rose** (`#e8b8c4` — #e8b8c4): Rose orb.

These appear ONLY as soft radial-gradient atmospheric orbs inside `{component.gradient-orb-card}` and as background atmospheric blooms behind hero copy. Never as button fills, never as text colors.

### Semantic
- **Success** (`#16a34a` — #16a34a): Confirmation.
- **Error** (`#dc2626` — #dc2626): Validation errors.

## Typography

### Font Family
**Waldenburg Light** is the licensed display serif at weight 300. **Inter** carries body, navigation, captions, and buttons. Fallback: `'Times New Roman', serif` for Waldenburg, `sans-serif` for Inter.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 64px | 300 | 1.05 | -1.92px | Homepage hero h1 |
| `{typography.display-xl}` | 48px | 300 | 1.08 | -0.96px | Subsidiary heroes |
| `{typography.display-lg}` | 36px | 300 | 1.17 | -0.36px | Section heads |
| `{typography.display-md}` | 32px | 300 | 1.13 | -0.32px | Sub-section heads |
| `{typography.display-sm}` | 24px | 300 | 1.2 | 0 | Card group titles |
| `{typography.title-md}` | 20px | 500 | 1.35 | 0 | Component titles — Inter |
| `{typography.title-sm}` | 18px | 500 | 1.44 | 0.18px | List labels |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0.16px | Default body — Inter |
| `{typography.body-strong}` | 16px | 500 | 1.5 | 0.16px | Emphasized body |
| `{typography.body-sm}` | 15px | 400 | 1.47 | 0.15px | Footer body |
| `{typography.caption}` | 14px | 400 | 1.5 | 0 | Photo captions |
| `{typography.caption-uppercase}` | 12px | 600 | 1.4 | 0.96px | Section labels, badges |
| `{typography.button}` | 15px | 500 | 1.0 | 0 | CTA pill |
| `{typography.nav-link}` | 15px | 500 | 1.4 | 0 | Top-nav menu |

### Principles
- **Display weight stays at 300.** Waldenburg Light is the editorial signature. Never bold display copy.
- **Subtle letter-spacing on body.** Inter at +0.15-0.18px tracking — slightly looser than default Inter for a more editorial feel.
- **Negative letter-spacing on display.** Waldenburg pulls -0.32px to -1.92px tighter on display sizes.

### Note on Font Substitutes
Waldenburg is licensed. Open-source substitute: **EB Garamond** at weight 300 (slightly more humanist) or **GT Sectra** (closer to Waldenburg's modernity). Use Inter directly for body — it's the same family ElevenLabs uses.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `20px` 20px · `24px` 24px · `32px` 32px · `48px` 48px · `96px` 96px.
- **Section padding:** 96px.

### Grid & Container
- Max content width: ~1200px.
- Editorial body: 12-column grid.
- Feature card grids: 2-up at desktop for hero splits, 3-up for benefit grids.
- Footer: 5-column at desktop.

### Whitespace Philosophy
Generous editorial pacing — print-magazine feel. 96px between bands; cards inside bands sit close (16-24px gap). The atmospheric gradient orbs occupy generous breathing space without competing with copy.

## Elevation & Depth

The system uses **hairline + soft drop**. Cards float above the off-white canvas via 1px hairlines and a single subtle shadow tier. Atmospheric depth comes from gradient orbs.

| Level | Treatment | Use |
|---|---|---|
| Flat (canvas) | `#f5f5f5` (#f5f5f5) | Body bands, footer |
| Card | `#ffffff` (#ffffff) | Content cards |
| Hairline border | 1px `#e7e5e4` | Card outlines |
| Soft drop | `0 4px 16px rgba(0, 0, 0, 0.04)` | Hovered cards (single shadow tier) |
| Gradient orb | Radial gradient with one of `{colors.gradient-*}` | Atmospheric depth — never a card surface |

### Decorative Depth
- **Pastel gradient orbs** are the brand's strongest atmospheric pattern. Soft radial blooms in mint, peach, lavender, sky, or rose drift through hero bands and feature sections without containing any content — they are pure atmosphere.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Reserved |
| `4px` | 4px | Inline tags |
| `6px` | 6px | Compact rows |
| `8px` | 8px | Form inputs |
| `12px` | 12px | Compact cards |
| `16px` | 16px | Feature cards, pricing tiers |
| `24px` | 24px | Gradient orb cards (extra-soft) |
| `9999px` | 9999px | All CTA buttons, badges |
| `9999px` | 9999px | Voice icon circles, avatars |

## Components

### Top Navigation

**`top-nav`** — Background `#f5f5f5`, text `#0c0a09`, height 64px. Layout: ElevenLabs wordmark left, primary horizontal menu (Creative / Agents / Video / Pricing / Enterprise / Docs), Sign In + "Try free" primary CTA right.

### Buttons

**`button-primary`** — Near-black ink pill. Background `#292524`, text `#ffffff`, type `{typography.button}` (15px / 500), padding 10px × 20px, height 40px, rounded `9999px`.

**`button-primary-active`** — Press state. Background `#0c0a09`.

**`button-outline`** — Transparent pill with 1px ink border. Background transparent, text `#0c0a09`, 1px `#d6d3d1` border.

**`button-tertiary-text`** — Inline ink text link.

### Hero & Atmospheric

**`hero-band`** — Background `#f5f5f5`, full-width display headline in `{typography.display-mega}` (64px / 300 / -1.92px), subhead in `{typography.body-md}`, two CTAs, and an atmospheric gradient orb behind the centered headline.

**`gradient-orb-card`** — A large card with a soft radial-gradient orb behind centered display copy. Background `#fafafa`, rounded `24px` (24px), padding 32px. Each variant uses one of the five gradient tokens (`gradient-mint`, `gradient-peach`, `gradient-lavender`, `gradient-sky`, `gradient-rose`).

**`audio-waveform-card`** — A waveform visualization card. Background `#ffffff`, rounded `16px`, padding 24px. Holds a play button + waveform glyph + voice metadata.

### Cards

**`feature-card`** — 2-up or 3-up grids. Background `#ffffff`, text `#0c0a09`, rounded `16px`, padding 24px, 1px hairline border.

**`product-card-stack`** — Stacked product preview cards. Background `#ffffff`, rounded `16px`, no padding (children fill the card edge-to-edge).

**`testimonial-card`** — Quote card. Background `#ffffff`, text `#4e4e4e`, rounded `16px`, padding 32px.

### Voice Library

**`voice-row`** — Horizontal row in voice list. Background transparent, 1px hairline divider. Layout: 32px circular voice icon (`{component.voice-icon-circular}`) left, voice name + accent stack, optional preview button right.

**`voice-icon-circular`** — Background `#f0efed`, rounded `9999px`, 32px diameter. Holds initials or voice glyph.

### Pricing

**`pricing-tier-card`** — Background `#ffffff`, rounded `16px`, padding 32px, 1px hairline border.

**`pricing-tier-featured`** — Featured tier inverts. Background `#0c0a09`, text `#ffffff`. Same shape, dark inversion.

### Forms & Tags

**`text-input`** — Background `#ffffff`, text `#0c0a09`, rounded `8px` (8px), padding 12px × 16px, height 44px, 1px `#d6d3d1` border. On focus, border thickens to 2px ink.

**`badge-pill`** — Background `#f0efed`, text `#0c0a09`, type `{typography.caption-uppercase}`, rounded `9999px`, padding 4px × 10px.

### CTA / Footer

**`cta-band`** — Pre-footer. Background `#f5f5f5`, centered display headline in `{typography.display-lg}`, single ink pill CTA. 96px padding.

**`footer`** — Closing footer. Background `#f5f5f5`, text `#4e4e4e`. 5-column link list. 64×48px padding.

**`footer-link`** — Background transparent, text `#4e4e4e`, type `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Reserve `#292524` (ink pill) for primary CTAs.
- Use Waldenburg Light at weight 300 for every display headline. Never bold.
- Use Inter at +0.15-0.18px tracking for body — the editorial dialect.
- Use atmospheric gradient orbs (mint/peach/lavender/sky/rose) as decoration only.
- Use the pill shape for every CTA and badge.

### Don't
- Don't introduce a saturated brand action color. Ink pill is the only CTA color.
- Don't bold display copy. Display sits at weight 300 — bolding shifts the brand voice from editorial to consumer-marketing.
- Don't use gradient orbs as button fills, text colors, or component backgrounds. They are pure atmosphere.
- Don't use sharp `0px` (0px) on CTAs. Pill geometry is the brand button.
- Don't drop body Inter to weight 300 to match Waldenburg — body stays at 400/500 for legibility.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA color is what appears on actual product CTAs.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero h1 64→32px; feature cards 1-up; nav hamburger; gradient orbs shrink. |
| Tablet | 640–1024px | Hero h1 48px; feature cards 2-up. |
| Desktop | 1024–1280px | Full hero h1 64px; feature cards 3-up. |
| Wide | > 1280px | Content caps at 1200px. |

### Touch Targets
- Primary pill at 40px height — at WCAG AA, padded for AAA.
- Voice icon circles 32px — padded row creates effective 48px tap zone.

### Collapsing Strategy
- Top nav switches to hamburger below 768px.
- Feature grid: 3-up → 2-up → 1-up.
- Gradient orbs reduce diameter at every breakpoint but never disappear.

## Iteration Guide

1. Focus on a single component at a time.
2. CTAs default to `9999px`. Cards use `16px` (16px).
3. Variants live as separate entries.
4. Use `{token.refs}` everywhere — never inline hex.
5. Hover state never documented.
6. Waldenburg 300 for display, Inter 400/500 for body.
7. Gradient orbs scoped to atmospheric decoration.

## Known Gaps

- Waldenburg is a licensed typeface; EB Garamond / GT Sectra are documented substitutes.
- Animation timings (orb drift, waveform pulse, hero entrance) out of scope.
- In-product surfaces (voice library editor, agent playground) only partially captured via marketing mockups.
- Form validation states beyond focus not visible on captured surfaces.
