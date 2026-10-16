# Design System: Cursor

## Overview

Cursor's marketing site reads as a quietly-confident developer brand that believes in editorial calm over IDE-darkness. The base canvas is **warm cream** (`#f7f7f4` — #f7f7f4) holding warm near-black ink (`#26251e` — #26251e) for body and display alike. The single brand voltage is **Cursor Orange** (`#f54e00` — #f54e00) reserved for primary CTAs and the wordmark — used scarcely.

Type runs **CursorGothic** as the single sans family. Display sits at weight 400 with negative letter-spacing — a magazine-editorial voice rather than tech-bombastic. JetBrains Mono carries every code surface (and code surfaces are roughly half the page).

The brand's strongest visual signature is the **AI-timeline pill palette**: five pastel pills (peach `#dfa88f`, mint `#9fc9a2`, blue `#9fbbe0`, lavender `#c0a8dd`, gold `#c08532`) marking AI-action stages inside in-product timeline visualizations. Used only in product UI — never as system action colors.

**Key Characteristics:**
- Warm cream canvas, not white. Ink is warm (#26251e), not pure black.
- Single CTA color: `#f54e00` (Cursor Orange #f54e00). Used scarcely.
- Display weight stays at 400 — never bold. Magazine voice.
- AI timeline pastels: 5 dedicated tokens for in-product agent action stages.
- Compact 8px CTA radius — developer dialect.
- Hairline-only depth; no drop shadows.
- 80px section rhythm.

## Colors

### Brand & Accent
- **Cursor Orange** (`#f54e00` — #f54e00): Primary CTA pills, wordmark, hero accent. Used scarcely.
- **Cursor Orange Active** (`#d04200` — #d04200): Press state.

### Surface
- **Canvas** (`#f7f7f4` — #f7f7f4): Warm cream page floor.
- **Canvas Soft** (`#fafaf7` — #fafaf7): IDE-pane background inside mockups.
- **Surface Card** (`#ffffff` — #ffffff): Pure white card surface — slight contrast against the cream canvas.
- **Surface Strong** (`#e6e5e0` — #e6e5e0): Badges, tag pills.

### Hairlines
- **Hairline** (`#e6e5e0` — #e6e5e0): 1px divider.
- **Hairline Soft** (`#efeee8` — #efeee8): Lighter divider.
- **Hairline Strong** (`#cfcdc4` — #cfcdc4): Stronger panel outline.

### Text
- **Ink** (`#26251e` — #26251e): Display, body emphasis. Warm near-black.
- **Body** (`#5a5852` — #5a5852): Default running-text.
- **Body Strong** (`#26251e` — #26251e): Same as ink.
- **Muted** (`#807d72` — #807d72): Sub-titles.
- **Muted Soft** (`#a09c92` — #a09c92): Disabled text.
- **On Primary** (`#ffffff` — #ffffff): White text on Cursor Orange.

### Timeline (AI-action signature)
- **Thinking** (`#dfa88f` — #dfa88f): Peach. Used inside in-product agent timeline only.
- **Grep** (`#9fc9a2` — #9fc9a2): Mint.
- **Read** (`#9fbbe0` — #9fbbe0): Pastel blue.
- **Edit** (`#c0a8dd` — #c0a8dd): Lavender.
- **Done** (`#c08532` — #c08532): Warm gold.

### Semantic
- **Success** (`#1f8a65` — #1f8a65): Confirmation indicators.
- **Error** (`#cf2d56` — #cf2d56): Validation errors.

## Typography

### Font Family
**CursorGothic** is the licensed display + body family. Fallback: `system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`. Code surfaces switch to **JetBrains Mono**.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 72px | 400 | 1.1 | -2.16px | Homepage hero h1 |
| `{typography.display-lg}` | 36px | 400 | 1.2 | -0.72px | Section heads |
| `{typography.display-md}` | 26px | 400 | 1.25 | -0.325px | Sub-section heads |
| `{typography.display-sm}` | 22px | 400 | 1.3 | -0.11px | Card group titles |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Component titles |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | List labels |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body |
| `{typography.body-tracked}` | 16px | 400 | 1.5 | 0.08px | Tracked editorial body |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body |
| `{typography.caption}` | 13px | 400 | 1.4 | 0 | Photo captions |
| `{typography.caption-uppercase}` | 11px | 600 | 1.4 | 0.88px | Section labels, timeline pill labels |
| `{typography.code}` | 13px | 400 | 1.5 | 0 | Code blocks — JetBrains Mono |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | CTA pill labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu |

### Principles
- **Display weight stays at 400.** Magazine voice, never bold.
- **Negative letter-spacing on display only.** -0.11px to -2.16px tracking.
- **JetBrains Mono on every code surface.**

### Note on Font Substitutes
CursorGothic is licensed. Open-source substitute: **Inter** at weight 400 with letter-spacing -1.5%. Or **GT Sectra** for a more editorial feel.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `20px` 20px · `24px` 24px · `32px` 32px · `48px` 48px · `80px` 80px.
- **Section padding:** 80px.

### Grid & Container
- Max content width: ~1200px.
- Editorial body: 12-column grid.
- Feature card grids: 2-up at desktop for splits, 3-up for benefits.
- Footer: 5-column at desktop.

### Whitespace Philosophy
Generous editorial pacing — closer to a print magazine than a tech site. The cream canvas has plenty of breathing room; cards within bands sit close (16-24px gap).

## Elevation & Depth

The system uses **hairline-only depth**. No drop shadows, no elevation tiers. Cards float above the canvas via 1px hairlines and the slight white-on-cream contrast.

| Level | Treatment | Use |
|---|---|---|
| Flat (canvas) | `#f7f7f4` (#f7f7f4) | Body bands, footer |
| Card | `#ffffff` (#ffffff) | Content cards |
| Hairline border | 1px `#e6e5e0` | Card outlines, dividers |
| IDE pane | `#fafaf7` (#fafaf7) | Inside IDE mockup cards |

### Decorative Depth
- **IDE-mockup cards** are the only "elevated" element. White card on cream canvas with internal pane structure mimicking the actual Cursor editor.
- **Timeline pastel pills** add chromatic depth without surface elevation.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Reserved |
| `4px` | 4px | Inline tags |
| `6px` | 6px | Compact rows |
| `8px` | 8px | CTA buttons, form inputs |
| `12px` | 12px | Cards, IDE panes |
| `16px` | 16px | Larger feature cards (rare) |
| `9999px` | 9999px | Timeline pills, badges |
| `9999px` | 9999px | Avatars (rare) |

## Components

### Top Navigation

**`top-nav`** — Background `#f7f7f4`, text `#26251e`, height 64px. Layout: Cursor wordmark left, primary horizontal menu (Pricing / Features / Enterprise / Blog / Forum / Careers), Sign In + Download primary CTA right.

### Buttons

**`button-primary`** — The signature Cursor Orange CTA. Background `#f54e00`, text `#ffffff`, type `{typography.button}` (14px / 500), padding 10px × 18px, height 40px, rounded `8px` (8px).

**`button-primary-active`** — Press state. Background `#d04200`.

**`button-secondary`** — White card pill on cream canvas. Background `#ffffff`, text `#26251e`, 1px `#cfcdc4` border.

**`button-tertiary-text`** — Inline ink text link.

**`button-download`** — Larger ink-canvas CTA. Background `#26251e`, text `#f7f7f4`, padding 12px × 20px, height 44px. Used for "Download for macOS" type CTAs.

### Hero & IDE Mockups

**`hero-band`** — Background `#f7f7f4`, full-width display headline in `{typography.display-mega}` (72px / 400 / -2.16px), subhead in `{typography.body-md}`, two CTAs (`button-download` + `button-tertiary-text`), and a centered IDE-mockup card below the hero copy.

**`ide-mockup-card`** — A white card containing a multi-pane IDE mockup (sidebar + main editor + chat panel + terminal). Background `#ffffff`, rounded `12px` (12px), 1px `#e6e5e0` border, no padding (panes fill the card edge-to-edge).

**`ide-pane`** — Individual IDE pane inside the mockup. Background `#fafaf7`, text `#5a5852` in `{typography.code}` (JetBrains Mono 13px), rounded `8px` (8px), padding 16px.

### Cards

**`feature-card`** — Background `#ffffff`, text `#26251e`, type `{typography.title-md}`, rounded `12px`, padding 24px. 1px `#e6e5e0` border.

**`comparison-card`** — Side-by-side "Cursor vs other tools" card. Same surface and rounding; internally split into 2 columns.

**`testimonial-card`** — Quote card. Background `#ffffff`, text `#5a5852`, rounded `12px`, padding 24px.

### AI Timeline (signature)

**`timeline-pill-thinking`** — Peach pill. Background `#dfa88f`, text `#26251e`, type `{typography.caption-uppercase}` (11px / 600 / 0.88px tracking, uppercase), rounded `9999px`, padding 4px × 10px. Marks "Thinking" stage in product timeline.

**`timeline-pill-grep`** — Mint pill. Same shape, background `#9fc9a2`. Marks "Grepping" stage.

**`timeline-pill-read`** — Pastel-blue pill. Background `#9fbbe0`. Marks "Reading" stage.

**`timeline-pill-edit`** — Lavender pill. Background `#c0a8dd`. Marks "Editing" stage.

**`timeline-pill-done`** — Gold pill. Background `#c08532`, text `#ffffff` white. Marks "Done" stage.

### Code

**`code-block`** — Inline code block. Background `#ffffff`, text `#26251e` in `{typography.code}`, rounded `12px`, padding 20px, 1px `#e6e5e0` border.

### Pricing

**`pricing-tier-card`** — Background `#ffffff`, rounded `12px`, padding 32px, 1px `#e6e5e0` border.

**`pricing-tier-featured`** — Featured tier inverts to ink. Background `#26251e`, text `#f7f7f4`. Same shape, dark inversion signals "highlighted" without colored ribbon.

### Forms & Tags

**`text-input`** — Background `#ffffff`, text `#26251e`, rounded `8px` (8px), padding 12px × 16px, height 44px.

**`badge-pill`** — Small uppercase pill. Background `#e6e5e0`, text `#26251e`, type `{typography.caption-uppercase}`, rounded `9999px`, padding 4px × 10px.

### CTA / Footer

**`cta-band`** — Pre-footer "Try Cursor now" band. Background `#f7f7f4`, centered display headline in `{typography.display-lg}`, single Cursor Orange CTA. 96px vertical padding.

**`footer`** — Closing footer. Background `#f7f7f4`, text `#5a5852`. 5-column link list. 64×48px padding.

**`footer-link`** — Background transparent, text `#5a5852`, type `{typography.body-sm}`.

## Do's and Don'ts

### Do
- Reserve `#f54e00` (Cursor Orange) for primary CTAs and brand wordmark.
- Keep display weight at 400. The editorial voice depends on this.
- Use the cream `#f7f7f4` page floor — never pure white.
- Render every code surface (inline, blocks, IDE panes) in JetBrains Mono.
- Use timeline pastels only inside in-product agent visualizations — never as system action colors.

### Don't
- Don't introduce a secondary brand action color. Cursor Orange is the only one.
- Don't drop display to bold weights (700+). Magazine voice depends on 400.
- Don't add drop shadows. Hairlines + ink-on-cream contrast carry the depth.
- Don't use timeline pastels on non-timeline UI. They're scoped to the agent timeline only.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA is what appears on actual product CTAs.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero h1 72→32px; IDE mockup collapses to single pane preview; feature grid 1-up; nav hamburger. |
| Tablet | 640–1024px | Hero h1 56px; IDE mockup compresses; feature grid 2-up. |
| Desktop | 1024–1280px | Full hero h1 72px; full multi-pane IDE mockup; feature grid 3-up. |
| Wide | > 1280px | Content caps at 1200px. |

### Touch Targets
- Primary CTA at 40px height — at WCAG AA, padded for AAA.
- Download CTA at 44px — at AAA.

### Collapsing Strategy
- Top nav switches to hamburger below 768px.
- IDE mockup multi-pane collapses to a single primary pane preview on mobile.
- Feature grid: 3-up → 2-up → 1-up.

## Iteration Guide

1. Focus on a single component at a time.
2. CTAs default to `8px` (8px). Cards use `12px` (12px).
3. Variants live as separate entries inside `components:`.
4. Use `{token.refs}` everywhere — never inline hex.
5. Hover state never documented.
6. CursorGothic 400 for display, 400/500/600 for body. JetBrains Mono on every code surface.
7. Cursor Orange stays scarce.
8. Timeline pastels stay scoped to in-product agent visualizations.

## Known Gaps

- CursorGothic is a licensed typeface; Inter is the substitute.
- Animation timings (timeline pill entrance, IDE pane reveal) out of scope.
- In-app surfaces (code editor, chat panel, agent timeline) only partially captured via marketing IDE mockups.
- Form validation states beyond focus not visible on captured surfaces.
