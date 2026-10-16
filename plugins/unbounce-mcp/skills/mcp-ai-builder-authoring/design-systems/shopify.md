# Design System: Shopify

## Overview

Shopify runs two parallel design tracks that share typographic DNA and a single button vocabulary, but diverge in canvas polarity. The marketing track lives on `#000000` (`#000000`) — full-bleed cinematic photography of merchants, giant `{typography.display-xxl}` headlines in Neue Haas Grotesk Display set at weight 330 (a thin, almost editorial cut), and a single CTA: a white-stroked black pill with the form `button-outline-on-dark`. The pages read like the spread of a high-end print magazine: lots of black, lots of negative space, photography that doesn't compete with text, and one and only one action per band.

The transactional track flips to `#ffffff` and `#fbfbf5` (an off-white that's barely warmer than pure white). Pricing tiers, comparison tables, and signup flows sit on this lighter canvas, with the same pill button system but in inverse polarity (a solid black pill with white text, or a `#c1fbd4` mint pill for the featured / "Start free trial" tier). The accents — `#c1fbd4` mint and `#d4f9e0` pistachio — show up only on the light track, never on the cinematic dark hero pages.

Typography is split across three families. **Neue Haas Grotesk Display** at thin weights (330–500) handles every display, headline, and editorial moment — the brand's identity is that thin display cut. **Inter Variable** at 420–550 weights handles every UI body, button label, caption, and form field — utility text that doesn't fight the display. **ui-monospace** appears only in code blocks and rare technical eyebrows. Across all three families, the OpenType `ss03` stylistic set is enabled — it's the brand's character-level signature, applied universally.

**Key Characteristics:**
- Two-canvas system: `#000000` for cinematic marketing, `#ffffff` / `#fbfbf5` for transactional surfaces — never blended.
- Pill-shape (`9999px`) is the only button shape across both tracks; rounded rectangles do not exist for buttons.
- Thin-weight (330) display typography is the signature; `{typography.display-xxl}` at 96px / weight 330 is the brand's loudest visual.
- Aloe and pistachio greens (`#c1fbd4`, `#d4f9e0`) are reserved for the light track — they signal commerce, growth, transactional success.
- Photography is full-bleed, edge-to-edge, never inset in cards on the cinematic track; merchants and storefront imagery do the heavy visual lifting that gradients and illustrations would do elsewhere.
- The OpenType `ss03` stylistic set is enabled across every text role — a character-level unifier that tracks across both tracks.
- Tight letter-spacing on display sizes (2.4px positive tracking on 96px display) gives the thin weight extra optical air.

## Colors

> **Source pages:** home (`/`), `/start`, `/website/builder`, `/pricing`.

### Brand & Accent
- **Aloe** (`#c1fbd4` — `#c1fbd4`): The featured-tier and "growth" accent. Used as a pill button background on light surfaces and as a feature-card fill in the pricing comparison band.
- **Pistachio** (`#d4f9e0` — `#d4f9e0`): Softer than aloe; used as a wide section band fill on the light track to signal a different category of feature without leaving the green family.
- **Cool Link Tones** (`#9dabad` `#9dabad`, `#9797a2` `#9797a2`, `#bdbdca` `#bdbdca`, `#99b3ad` `#99b3ad`): Muted footer / tertiary link colors used on dark surfaces to create a quiet hierarchy below the primary white type.

### Surface
- **Canvas Night** (`#000000` — `#000000`): Pure black hero, cinematic feature pages, footer.
- **Canvas Night Elevated** (`#0a0a0a` — `#0a0a0a`): Cards on cinematic surfaces, video frames.
- **Surface Elevated Dark** (`#1e2c31` — `#1e2c31`): Dark teal-shifted surface used on a small subset of dark cards to introduce subtle depth without breaking the black.
- **Canvas Light** (`#ffffff` — `#ffffff`): Pricing, signup, comparison tables.
- **Canvas Cream** (`#fbfbf5` — `#fbfbf5`): Slightly warm off-white used on the pricing-page background canvas — invisibly different from `#ffffff` but adds editorial warmth.
- **Hairline Light** (`#e4e4e7` — `#e4e4e7`): 1px borders on light cards, table dividers.
- **Hairline Dark** (`#1e2c31` — `#1e2c31`): 1px borders on the rare dark cards that have visible chrome.

### Shade Ladder
- **Shade-30** (`#d4d4d8` — `#d4d4d8`): Tag / chip background on light, footer hairline on dark.
- **Shade-40** (`#a1a1aa` — `#a1a1aa`): Tertiary text on light, secondary text on dark.
- **Shade-50** (`#71717a` — `#71717a`): Secondary text on light.
- **Shade-60** (`#52525b` — `#52525b`): Tertiary text on light, deep on dark.
- **Shade-70** (`#3f3f46` — `#3f3f46`): Pressed-state of the primary pill button; deep dark surface accent.

### Text
- **Ink** (`#000000` — `#000000`): All text on light canvas.
- **On Primary** (`#ffffff` — `#ffffff`): All text on dark canvas + filled-pill labels.

## Typography

### Font Family

The display tier is **Neue Haas Grotesk Display** at thin weights (330–500). When unavailable, fall back to **Helvetica** at light weight, then Arial. The thin-weight cut is the brand — no substitution should default to weight 400+.

The UI tier is **Inter Variable** at 420–550 — a variable font with sub-weight precision that lets the system span body (420), strong (550), and caption (500) without jumping to heavier tiers. Inter is open-source via Google Fonts.

The code tier is **ui-monospace**, the system mono — preferred over a webfont mono to avoid unnecessary downloads.

The OpenType `ss03` stylistic set is enabled across every role. It alters specific glyph forms (lowercase `a`, `g`, single-story numerals) for a slightly more geometric character. Apply via `font-feature-settings: "ss03"` on the body element or root.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 96px | 330 | 1.0 | 2.4px | Cinematic hero headline |
| `{typography.display-xl}` | 70px | 330 | 1.0 | 0 | Section opener on cinematic pages |
| `{typography.display-lg}` | 55px | 330 | 1.16 | 0 | Pricing-page page title |
| `{typography.display-md}` | 48px | 330 | 1.14 | 0 | Sub-section headline on light track |
| `{typography.heading-xl}` | 28px | 500 | 1.28 | 0.42px | Card title / pricing tier name |
| `{typography.heading-lg}` | 24px | 400 | 1.14 | 0.36px | Compact card title |
| `{typography.heading-md}` | 20px | 500 | 1.4 | 0.3px | Section sub-heading |
| `{typography.heading-sm}` | 18px | 500 | 1.25 | 0.72px | Eyebrow / mini-section label |
| `{typography.body-lg}` | 18px | 550 | 1.56 | 0 | Marketing body lead, large body |
| `{typography.body-md}` | 16px | 420 | 1.5 | 0 | Default UI body, pill-button labels |
| `{typography.body-strong}` | 16px | 550 | 1.5 | 0 | Emphasized body run |
| `{typography.caption}` | 14px | 500 | 1.49 | 0.28px | Helper copy, footnotes |
| `{typography.micro}` | 13px | 500 | 1.5 | -0.13px | Pricing fine print |
| `{typography.eyebrow-cap}` | 12px | 400 | 1.2 | 0.72px | All-caps eyebrow above large headlines |
| `{typography.code}` | 16px | 400 | 1.5 | 0 | Code blocks |

### Principles
- **Display thinness is the brand.** Always render display sizes at weight 330 — never 400+. The thinness is a deliberate editorial choice that makes the giant size feel quiet.
- **Display in NHGD, body in Inter.** Don't push body roles up to NHGD; don't push display roles down to Inter.
- **Tracking lifts on display.** The 96px hero gets +2.4px positive tracking — the thin glyphs need air. At 70px and below, tracking returns to 0.

### Note on Font Substitutes
Open substitutes for Neue Haas Grotesk Display: **Helvetica Now Display** (proprietary) or **Inter Display** at light weights (open-source) are the closest matches. Avoid Helvetica Neue at default weight — it's too heavy for the brand's thin tier. **Inter Variable** is open-source via Google Fonts and is the canonical body face — no substitute needed.

## Layout

### Spacing System
- **Base unit**: 8px (with denser sub-units 1, 2, 3, 4 for fine work).
- **Tokens**: `2px` 2px · `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `24px` 24px · `32px` 32px · `64px` 64px.
- **Section padding**: `64px` 64–128px on cinematic marketing pages (extreme negative space is the point); collapses to ~48px on transactional pages where density takes priority.
- **Card internal padding**: `32px` 32px on pricing cards; `24px` 24px on compact tag rows.

### Grid & Container
- Cinematic hero pages use a wide max-width container (~1440–1600px) with edge-bleeding photography that escapes the container.
- Pricing collapses through 4-up → 2-up → 1-up tiers based on viewport.
- Body content centers in a ~720–840px reading column on long-form pages.

### Whitespace Philosophy
The cinematic track treats whitespace as the brand's most valuable asset — sections often have 128–192px of vertical air between content blocks, with photography filling the rest. The transactional track tightens to ~48–64px between bands because users are scanning, comparing, and acting. The contrast between the two whitespace philosophies is part of the brand voice.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat, no shadow | Default surface |
| 1 | `0 1px 2px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.04)` | Subtle inset highlight on dark cards (a top-edge sheen) |
| 2 | `0 0 0 1px rgba(255,255,255,0.08), 0 1px 3px rgba(0,0,0,0.3), 0 5px 10px rgba(0,0,0,0.2)` | Dark elevated cards with hairline + drop shadow stack |
| 3 | `0 8px 8px rgba(0,0,0,0.1), 0 4px 4px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.1)` | Stacked-shadow card on light surfaces; layered tiny shadows produce a soft halo |
| 4 | `0 25px 50px -12px rgba(0,0,0,0.25)` | Modal / floating panel on light |

### Decorative Depth
On the cinematic track, depth comes from photography — full-bleed merchant imagery layered behind cards, with subtle inset top-edge highlights creating the illusion of light hitting a glass surface. On the light track, the layered tiny-shadow stack (Level 3) produces a soft, paper-like halo around pricing cards — depth without harshness.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `4px` | 4px | Inputs, hairline tags |
| `5px` | 5px | Image containers (small) |
| `8px` | 8px | Form inputs, video frames, smaller cards |
| `12px` | 12px | Pricing cards, feature cards |
| `20px` | 20px (top-only on some asymmetric cards) | Hero photo frames, cinematic card chrome |
| `9999px` | 9999px | All buttons, pill tags, mint chips |

### Photography Geometry
Photography is full-bleed with no border. On cinematic pages it escapes the container entirely; on transactional pages it sits inside `12px` containers with no shadow. Avatar treatments in customer-logo strips are simple greyscale wordmarks at uniform height (~24–32px), aligned in a single horizontal strip.

## Components

### Buttons

**`button-primary-pill`** — the dominant CTA across the system.
- Background `#000000` (black), text `#ffffff`, type `{typography.body-md}`, padding `12px 24px` (12px 24px), rounded `9999px` 9999px.
- Pressed state `button-primary-pill-pressed`: background lifts to `#3f3f46`.

**`button-outline-on-dark`** — the cinematic hero CTA.
- Background `#000000` (transparent on the canvas), 2px solid `#ffffff` border, text `#ffffff`, same pill geometry.

**`button-outline-on-light`** — the light-track equivalent.
- Background `#ffffff`, 1px solid `#000000` border, text `#000000`, same pill geometry.

**`button-aloe-pill`** — the featured CTA on pricing pages.
- Background `#c1fbd4`, text `#000000`, same pill geometry. Used for the "Start free trial" tier.

### Cards & Containers

**`card-pricing`** — the standard tier card on the pricing page.
- Background `#ffffff`, padding `32px`, rounded `12px` 12px, 1px `#e4e4e7` border. Title in `{typography.heading-xl}`, price in `{typography.display-md}`, body in `{typography.body-md}`, CTA pinned to the bottom as `button-primary-pill`.

**`card-pricing-featured`** — the highlighted pricing tier.
- Background `#c1fbd4`, otherwise identical to `card-pricing`. The mint fill (rather than a brand-color border) is the brand's distinctive featured-tier choice.

**`card-feature-cinematic`** — feature card on the cinematic track.
- Background `#0a0a0a`, text `#ffffff`, rounded `12px`, often with a top-edge inset highlight (Level 1 elevation). Holds full-bleed photography or a single large statement.

**`card-pistachio-band`** — wide horizontal band card used to highlight a category of features on the light track.
- Background `#d4f9e0`, text `#000000`, rounded `12px` 12px, padding `32px`.

**`card-photo-frame`** — full-bleed photography container on cinematic pages.
- Background `#000000`, padding 0, rounded `20px` 20px (often top-only). The photo IS the content; no inner padding, no overlay text inside the card.

### Inputs & Forms

**`text-input`** — standard text input on light surfaces.
- Background `#ffffff`, text `#000000`, type `{typography.body-md}`, padding `8px+ 12px` (10px 12px), rounded `8px` 8px, 1px `#e4e4e7` border.

### Navigation

**`nav-bar-light`** — top nav on light pages.
- Background `#ffffff`, text `#000000`, padding `16px 24px`. Logo wordmark on the left, nav items center, two pill buttons on the right (`button-outline-on-light` for "Log in", `button-primary-pill` for "Start free trial").

**`nav-bar-dark`** — top nav on cinematic pages.
- Background `#000000`, text `#ffffff`, otherwise identical structure. Two pill buttons on the right (`button-outline-on-dark` for both, with the rightmost subtly more prominent via type weight).

### Pills, Tags, and Chips

**`pill-tag-mint`** — small tag on light surfaces, signaling a feature category.
- Background `#c1fbd4`, text `#000000`, type `{typography.eyebrow-cap}`, padding `4px 12px`, rounded `9999px`.

**`pill-tag-shade`** — neutral tag on light surfaces.
- Background `#d4d4d8`, text `#000000`, otherwise same shape as `pill-tag-mint`.

### Signature Components

**Cinematic Photography Layer** — full-bleed merchant photos on the hero. No overlay scrim, no text-on-image; instead, the type sits in clean negative space above or below the photo. The brand treats photography as an editorial spread, not as decoration.

**Stacked Tiny Shadows (Level 3 Elevation)** — pricing cards on the light track use 4 stacked tiny drop shadows (each 1–8px Y offset, 10% black) to produce a soft, layered paper halo. This is the brand's distinctive depth on light.

**`link-on-dark`** — inline link on cinematic pages.
- Color `#ffffff`, no underline by default (links rely on context); for tertiary footer links, color shifts to one of the cool muted tones (`#9dabad` etc.) with a persistent underline.

**`footer-dark`** — full-page-width footer on the cinematic track.
- Background `#000000`, text `#ffffff`, type `{typography.caption}`, padding `64px 24px`. Contains 4–5 columns of muted-tone link groups, social icons, and a small legal row.

**`footer-light`** — equivalent on the transactional track.
- Background `#ffffff`, text `#000000`, otherwise same structure.

## Do's and Don'ts

### Do
- Reserve `#c1fbd4` and `#d4f9e0` for the light track only — they don't appear on cinematic black pages.
- Always use `9999px` for buttons; never `8px` or `12px`.
- Render display tiers at weight 330; bumping to 400 or 500 breaks the brand's thin-display signature.
- Use full-bleed photography on cinematic pages — let it escape the container.
- Apply `font-feature-settings: "ss03"` globally; the stylistic set is the brand's typographic signature.
- Pair black canvas with white type and white-stroked outline pills; pair light canvas with black type and filled-black pills.

### Don't
- Don't introduce a third canvas color — stick to black or light/cream. Greys, beiges, and blues are not in the system.
- Don't add drop shadows on cinematic dark cards beyond the subtle inset top-highlight; the cinematic track wants flat blackness.
- Don't shrink display tiers below `{typography.display-md}` (48px) on hero surfaces; below that they read as section heads, not display.
- Don't put aloe / pistachio greens behind type — they're surface fills, not text colors.
- Don't replace the pill shape with a rounded-rectangle button anywhere.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | Full cinematic hero with edge-bleeding photography; pricing 4-up |
| Desktop | 1024–1440px | Default content max-width; pricing 4-up tightens |
| Tablet | 768–1023px | Pricing 2-up; cinematic hero photography crops |
| Mobile | < 768px | Pricing 1-up; hamburger nav; display-xxl drops to ~56–64px |

### Touch Targets
- Pill buttons hit ≥ 44×44px on mobile via 12px vertical padding × 16px line-height. WCAG AAA compliant.
- Form fields stay at the 44px minimum height across all breakpoints.

### Collapsing Strategy
- Display sizes scale down through the breakpoint stair: 96 → 70 → 55 → 48 → 36px on mobile.
- Cinematic photography crops aggressively at smaller widths, prioritizing focal subject over edge-bleed.
- Pricing tiers stair-step 4-up → 2-up → 1-up; the featured aloe tier stays visually distinguished at every step.
- Top nav collapses to hamburger below 768px; menu inherits canvas polarity.

### Image Behavior
Photography uses responsive `srcset` with art-direction crops at major breakpoints. Mobile crops favor close subjects; wide crops favor environmental / storefront context.

## Iteration Guide

1. Focus on ONE component at a time.
2. Reference component names and tokens directly (`#c1fbd4`, `{button-primary-pill}-pressed`, `9999px`).
3. Run `npx @google/design.md lint DESIGN.md` after edits.
4. Add new variants as separate entries.
5. Default body to `{typography.body-md}`; reserve `{typography.body-lg}` for marketing leads.
6. Keep the two canvas tracks separated — when designing a new page, choose cinematic OR transactional, not both.
7. The pill shape is non-negotiable; new button variants vary in fill / border / canvas, never in shape.
