# Design System: Replicate

## Overview

Replicate is a developer-tools platform with the soul of an art zine. The
public marketing surfaces sit on a warm cream canvas (`#f9f7f3` —
`#f9f7f3`) rather than the white-or-near-black default of typical AI
infrastructure sites, and that single decision colours everything else:
photography reads as editorial, code wells read as printed pull-quotes, and
the brand orange (`#ea2804` — `#ea2804`) feels like a stamp rather
than a notification.

The typography is the load-bearing decoration. **rb-freigeist-neue** — a
heavy, slightly condensed grotesque — appears at sizes up to 128px in hero
bands, with a tight `lineHeight: 1.0` and negative letter-spacing that lets
multi-line headlines pack into geometric blocks. The companion family,
**basier-square**, takes care of body, button labels, and metadata in the
14–18px range. **JetBrains Mono** carries every code well, command, and
example. Three families, three jobs, no overlap.

Page rhythm cycles between a default cream canvas, a bold full-bleed orange
hero band, and a `#202020` (`#202020`) section that hosts the
code stories — the "how it works" walkthrough. Curves are intentional and
soft: every interactive surface (buttons, inputs, tags, avatars) uses
`9999px`, while content cards and code wells step up to `10px`
or `16px`. There are no sharp corners on Replicate; the system reads
as friendly precision.

**Key Characteristics:**
- A warm cream canvas (`#f9f7f3` — `#f9f7f3`) replaces the typical white background, paired with `#f3f0e8` for inset cards.
- Hot orange (`#ea2804` — `#ea2804`) is reserved for the primary CTA, the hero band, and inline link colour. Never decorative.
- Display headlines run massive — `{typography.display-xxl}` at 128px in hero bands and `{typography.display-xl}` at 72px on section openers — with tight `lineHeight: 1.0` and negative letter-spacing.
- Three-family typography stack: `rb-freigeist-neue` for display, `basier-square` for UI/body, `jetbrains-mono` for code.
- Every interactive element is fully rounded (`9999px` 9999px) — buttons, inputs, badges, avatars — while content cards step to `10px` 10px.
- Dark code wells (`#202020` background) sit inside the cream canvas as full-bleed reading surfaces, mimicking print pull-quotes.
- Section rhythm: cream → orange hero → cream → dark code-story band → cream → black footer.

## Colors

### Brand & Accent
- **Replicate Orange** (`#ea2804` — `#ea2804`): the brand accent. Reserved for the primary CTA, hero band background, and inline link colour. Treat as a stamp — one orange element per viewport at most.
- **Orange Pressed** (`#c01f00` — `#c01f00`): the active/pressed state of `#ea2804` — used on `{component.button-primary-pressed}`.
- **Hero Glow** (`#ff6a3d` — `#ff6a3d`): the lighter orange that appears in the radial atmospheric mesh behind the hero copy.
- **Hero Pink** (`#f4a8a0` — `#f4a8a0`): a warm pink wash that softens the bottom edge of the hero band before it transitions to cream.
- **On-Primary** (`#ffffff` — `#ffffff`): label colour on top of `#ea2804` surfaces.

### Surface
- **Canvas** (`#f9f7f3` — `#f9f7f3`): the default page background. Warm cream, never pure white.
- **Surface Bone** (`#f3f0e8` — `#f3f0e8`): a half-step deeper cream used for inset card groups and feature bands.
- **Surface Card** (`#ffffff` — `#ffffff`): pure white for individual model cards, search inputs, and pricing tiers — the only place white appears.
- **Surface Dark** (`#202020` — `#202020`): code wells, featured pricing tier, and the "how it works" walkthrough band.
- **Surface Deep** (`#000000` — `#000000`): footer canvas and the inset code-tab strip inside `{component.code-block}`.
- **Hairline** (`rgba(32,32,32,0.12)` — `rgba(32,32,32,0.12)`): low-contrast 1px dividers on cream surfaces.
- **Hairline Strong** (`#202020` — `#202020`): button outlines, focused inputs, and structural separators.

### Text
- **Ink** (`#202020` — `#202020`): primary text colour. Notably warmer than `#000000`, matching the cream canvas.
- **Body** (`#3a3a3a` — `#3a3a3a`): long-form body copy where ink would feel too heavy at 18px+ line lengths.
- **Charcoal** (`#575757` — `#575757`): captions, metadata, secondary nav.
- **Mute** (`#646464` — `#646464`): supporting text and inactive labels.
- **Ash** (`#8d8d8d` — `#8d8d8d`): tertiary text, placeholder copy.
- **Stone** (`#bbbbbb` — `#bbbbbb`): disabled foreground, neutral icon outlines.
- **On-Dark** (`#fcfcfc` — `#fcfcfc`): primary text on `#202020` and `#000000`.
- **On-Dark Mute** (`rgba(252,252,252,0.72)` — `rgba(252,252,252,0.72)`): secondary text in dark regions; preserves the off-white feel without pure white pop.

### Semantic
- **Success** (`#2b9a66` — `#2b9a66`): inline success badges and "running" status pills on model cards.
- **Link** (`#ea2804` — `#ea2804`): inline link colour — same as primary orange, intentionally pulling links into the brand accent.
- **Focus Ring** (`rgba(59,130,246,0.5)` — `rgba(59,130,246,0.5)`): the default focus ring on interactive elements.
- **GitHub Dark** (`#24292e` — `#24292e`): the GitHub-branded button surface (kept off-brand-on-purpose to match GitHub's own tokens).

## Typography

### Font Family

Replicate ships a deliberate three-family stack:

- **rb-freigeist-neue** — proprietary heavy grotesque used for all display sizes (30px+). Carries the editorial-magazine personality through tight `lineHeight: 1.0` and negative letter-spacing.
- **basier-square** — proprietary humanist sans-serif used for body, button labels, captions, and metadata.
- **jetbrains-mono** — open-source monospace used in every code well and inline command.

When proprietary families cannot be licensed, **Bricolage Grotesque** or **Migra** are credible substitutes for rb-freigeist-neue, and **Geist** or **Inter** can stand in for basier-square. JetBrains Mono is open-source and should always be used directly.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 128px | 700 | 1.0 | -3px | The single hero "Run AI" / "Imagine what you can build" headline. One per page. |
| `{typography.display-xl}` | 72px | 700 | 1.0 | -1.8px | Section openers ("How it works", "Scale on Replicate"). |
| `{typography.display-lg}` | 48px | 700 | 1.0 | -1px | Sub-section titles, pricing tier names. |
| `{typography.display-md}` | 30px | 600 | 1.2 | -0.5px | Feature card titles. |
| `{typography.heading-lg}` | 38.4px | 600 | 0.83 | -0.5px | Tightly-stacked basier-square headlines, used in pricing and enterprise hero. |
| `{typography.heading-md}` | 24px | 600 | 1.33 | -0.35px | Card titles, model detail headers. |
| `{typography.heading-sm}` | 20px | 600 | 1.4 | -0.3px | List section headers. |
| `{typography.subtitle}` | 18px | 600 | 1.56 | 0 | Lead paragraphs in display sections. |
| `{typography.body-lg}` | 18px | 400 | 1.56 | 0 | Marketing prose. |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default body. |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | Captions, metadata. |
| `{typography.button-md}` | 16px | 600 | 1.0 | 0 | Default button label. |
| `{typography.button-sm}` | 14px | 600 | 1.0 | 0 | Compact button label, sub-nav pills. |
| `{typography.caption}` | 12px | 400 | 1.33 | 0 | Footer disclosure, copyright. |
| `{typography.caption-tight}` | 14px | 600 | 1.43 | -0.35px | Emphatic small caption used in pricing tier rows. |
| `{typography.code-md}` | 14px | 400 | 1.43 | 0 | Code blocks and inline code. |
| `{typography.code-sm}` | 11px | 400 | 1.5 | 0 | Code-tab labels and small inline tokens. |

### Principles
- Display sizes hold `lineHeight: 1.0` (or 0.83 on `{typography.heading-lg}`) so multi-line stacks read as single typographic blocks.
- Negative letter-spacing scales with size — bigger types tighten more (-3px at 128px down to -0.3px at 20px). Body type stays at 0.
- Body weight sits at 400 across `{typography.body-lg}` and `{typography.body-md}` — never bumped to 500 for emphasis. Emphasis comes from family change (basier-square → rb-freigeist-neue) rather than weight.
- Code is never set in basier-square, even at small sizes — JetBrains Mono carries every literal command, every model slug, every API call.

### Note on Font Substitutes

When the proprietary families are unavailable, clamp display `lineHeight` to 1.0 explicitly and apply a -3% letter-spacing on display-xxl / display-xl to match the original tightness. Substitutes typically render with looser tracking by default.

## Layout

### Spacing System
- **Base unit**: 4px, with the working scale on multiples of 4 / 8 / 16.
- **Tokens**: `2px` 2px · `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `24px` 24px · `32px` 32px · `48px` 48px · `96px` 96px · `160px` 160px.
- Section padding: `96px` (96px) vertical between full-width bands; `160px` (160px) when a band needs extra editorial breathing room (the hero, the closing "Imagine what you can build" stripe).
- Card internal padding: `16px` (16px) on `{component.model-card}`, `32px` (32px) on `{component.pricing-tier}`.

### Grid & Container
- **Max content width** ≈ 1280px on body sections, 1440px on hero bands which run full-bleed.
- **Model grid** on collections: 4 columns at desktop, 3 at tablet large, 2 at tablet, 1 at mobile.
- **Pricing**: 3-tier grid centred at desktop, stacking vertically below 1024px; the centre tier flips to `{component.pricing-tier-featured}` (dark inversion) as the recommended option.
- **Code-story sections**: a 2-up split — narrative copy left, code well right — collapsing to stacked at < 1024px.

### Whitespace Philosophy
- Whitespace on cream is generous and editorial — sections breathe at 96px and key bands open at 160px so the typography can scale up without feeling cramped.
- Inside cards, the system tightens to 16–32px so model thumbnails, statuses, and metadata sit in a compact list-of-cards rhythm.
- Hairline `rgba(32,32,32,0.12)` dividers replace shadow on cream surfaces; on dark surfaces, `rgba(255,255,255,0.2)` carries the equivalent role.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — flat | No shadow, no border | Default cream canvas, full-bleed bands. |
| 1 — outline | 1px solid `rgba(32,32,32,0.12)` or `#202020` | Model cards, pricing tiers, collection tiles. |
| 2 — bone inset | Surface colour shift to `#f3f0e8` inside a `#f9f7f3` band | Feature group containers, "How it works" walkthrough. |
| 3 — dark inversion | Card swaps to `#202020` against cream | Code wells, featured pricing tier, "Scale on Replicate" hero card. |
| 4 — soft drop | `0 8px 24px rgba(32,32,32,0.08)` | Hover-anchored model thumbnails (visual only — not interaction-state-documented). |

Drop shadows exist in the extracted tokens but are restrained — used sparingly to lift photography thumbnails one step off the cream canvas. The dominant elevation language is colour-blocking.

### Decorative Depth
- **Hero atmospheric mesh** — the orange-to-pink gradient backing the home hero is a layered radial mesh: `#ea2804` core → `#ff6a3d` mid-stop → `#f4a8a0` outer wash. Reserved for the home hero band only.
- **Code-story dark band** — the "How it works" section uses `#202020` full-bleed with a single hairline `rgba(255,255,255,0.2)` separating narrative copy and code well.
- **Contributor mosaic** — the home page features a horizontally-scrolling band of circular avatars (`{component.contributor-avatar}`) over a textured cream canvas; this is the only place avatars appear at the brand level.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Hero bands, full-bleed sections, footer. |
| `4px` | 4px | Code tabs, inline tags inside code wells. |
| `6px` | 6px | Mid-radius callouts, small inset chips. |
| `10px` | 10px | Model cards, collection tiles, code wells. |
| `16px` | 16px | Pricing tiers, larger feature cards. |
| `9999px` | 9999px | Buttons, inputs, badges, avatars, pills. |

### Photography Geometry
- Model thumbnails: square (1:1) with `10px` corners, full-bleed image to the card edge.
- Hero example outputs: 4:3 or 16:9 with `10px` corners.
- Contributor avatars: circular (`9999px`), 40px on home, 32px in card metadata.
- The hero band uses a stylised black-ink illustration (the "tinkerer at the workbench") as its photography stand-in — kept inside the orange band rather than overlaid on cream.

## Components

### Buttons

**`button-primary`** — orange CTA
- Background `#ea2804`, label `#ffffff`, type `{typography.button-md}`, padding `12px 24px`, `rounded: 9999px`, height 44px.
- The single most important action on a page (e.g. "Sign in with GitHub", "Try a model").
- Pressed state lives in `button-primary-pressed` (background `#c01f00`).

**`button-dark`** — dark CTA
- Background `#202020`, label `#fcfcfc`, type `{typography.button-md}`, `rounded: 9999px`.
- Equal-weight secondary action paired with `{component.button-primary}`, or the primary action on cream when orange would be too loud.

**`button-outline`** — outlined CTA
- Background `#ffffff`, label `#202020`, 1px solid `#202020`, type `{typography.button-md}`, `rounded: 9999px`.
- Tertiary action; appears alongside primary/dark for "View docs", "Read more".

**`button-ghost`** — inline button
- Background `#f9f7f3`, label `#202020`, no border, type `{typography.button-md}`, `rounded: 9999px`, padding `8px 16px`.
- Sub-actions inside cards and inline with body copy.

**`button-icon`** — icon button
- Background `#ffffff`, label `#202020`, 1px solid `rgba(32,32,32,0.12)`, `rounded: 9999px`, 36×36px circular.
- Carousel arrows, copy-to-clipboard, GitHub link icon.

### Cards & Containers

**`model-card`** — model listing card
- Background `#ffffff`, text `#202020`, type `{typography.body-md}`, `rounded: 10px`, padding `16px` (16px).
- Square thumbnail on top, model owner + name beneath in `{typography.body-sm}`, single-line description in `#575757`, status pill `{component.badge-status}` bottom-left.

**`collection-tile`** — collection-of-models tile
- Background `#f9f7f3`, text `#202020`, type `{typography.heading-md}`, `rounded: 10px`, padding `24px` (24px).
- Cream-on-cream tile inside a `#f3f0e8` band, used for browsing model categories.

**`pricing-tier`** — pricing tier card
- Background `#ffffff`, text `#202020`, type `{typography.body-md}`, `rounded: 16px`, padding `32px` (32px).
- 3-up grid; tier name in `{typography.display-lg}` ("Free", "Pro", "Enterprise"), price in `{typography.display-md}`.

**`pricing-tier-featured`** — featured pricing tier
- Background `#202020`, text `#fcfcfc`, type `{typography.body-md}`, `rounded: 16px`, padding `32px`.
- Centre tier flipped to dark inversion to mark "recommended".

**`code-block`** — code well
- Background `#202020`, text `#fcfcfc`, type `{typography.code-md}`, `rounded: 10px`, padding `24px` (24px).
- Tab strip on top using `{component.code-tab}` for switching between languages (Python, Node.js, cURL, HTTP).

**`code-tab`** — code tab chip
- Background `#000000`, text `rgba(252,252,252,0.72)`, type `{typography.code-sm}`, `rounded: 4px`, padding `6px 12px`.
- Active tab swaps text colour to `#fcfcfc` and adds a 2px bottom underline in `#ea2804`.

**`hero-band`** — full-bleed hero
- Background `#ea2804` with the atmospheric mesh detailed in Elevation, text `#fcfcfc`, type `{typography.display-xxl}` for the title.
- Used only on the home page; secondary pages open with cream + `{typography.display-xl}`.

### Inputs & Forms

**`text-input`** — default input
- Background `#ffffff`, text `#202020`, type `{typography.body-md}`, 1px solid `rgba(32,32,32,0.12)`, `rounded: 9999px`, padding `12px 20px`, height 44px.
- Pill-shaped search and email fields. Focus state adds a `rgba(59,130,246,0.5)` 3px ring.

### Navigation

**`nav-bar`** — top nav (desktop)
- Background `#f9f7f3`, type `{typography.button-sm}`, height 60px, single hairline `rgba(32,32,32,0.12)` bottom border.
- Left: wordmark logo. Centre: top-level nav ("Explore", "Pricing", "Docs", "Blog"). Right: GitHub icon + "Sign in" link + `{component.button-primary}`.

**`nav-bar`** (mobile)
- Same height 60px, collapses centre nav into a hamburger icon. Logo stays left, sign-in CTA stays right.

**`sub-nav-pill`** — sub-nav chip
- Pill chips set in a horizontal row above content (e.g. "All", "Featured", "Image generation", "Audio"), `{component.sub-nav-pill}` styling.

### Signature Components

**`badge-status`** — model status badge
- Background `#2b9a66`, label `#fcfcfc`, type `{typography.caption}`, `rounded: 9999px`, padding `4px 10px`.
- Anchored on the bottom-left of model cards to indicate "running" or "deployed".

**`badge-tag`** — neutral tag
- Background `#f9f7f3`, label `#202020`, 1px solid `rgba(32,32,32,0.12)`, type `{typography.caption}`, `rounded: 9999px`, padding `4px 10px`.
- Capability tags ("text-to-image", "video", "audio") on model cards.

**`contributor-avatar`** — community contributor
- Background `#ffffff` placeholder behind 1:1 photography, `rounded: 9999px`, 40×40px (32px in metadata contexts).
- Used in the home-page contributor mosaic.

**`footer`** — global footer
- Background `#000000`, text `#fcfcfc`, type `{typography.body-sm}`, `rounded: 0px`, padding `64px 32px`.
- Multi-column quick-links grid above a copyright row separated by `rgba(255,255,255,0.2)`.

## Do's and Don'ts

### Do
- Use `#f9f7f3` (cream) as the default page background. White (`#ffffff`) appears only on individual cards, inputs, and the hero illustration backdrop.
- Reserve `#ea2804` for the primary CTA, the home hero band, and inline links — three roles, nothing else.
- Set every interactive element to `9999px` — buttons, inputs, badges, avatars, pills.
- Step content cards up to `10px` (10px) or `16px` (16px) — never sharp corners.
- Open hero bands with `{typography.display-xxl}` (128px) and `{typography.display-xl}` (72px) at `lineHeight: 1.0` with negative letter-spacing.
- Use `rb-freigeist-neue` for all display, `basier-square` for UI/body, `jetbrains-mono` for code. Keep the lanes strict.
- Render code in `{component.code-block}` with a `#202020` background — code is print, not an inline grey box.
- Pair photography with `10px` corners and full-bleed crop inside cards.

### Don't
- Don't replace cream with pure white at the page level. The brand temperature comes from `#f9f7f3`.
- Don't introduce a secondary brand colour. Orange is the only accent; semantic green and focus blue are functional, not decorative.
- Don't loosen display `lineHeight` past 1.0. Tight stacking is structural.
- Don't bump body weight to 500 for emphasis — change family (`basier-square` → `rb-freigeist-neue`) instead.
- Don't apply `9999px` to content cards. Pill-shaped cards break the rhythm.
- Don't put code in a light grey box. Code wells are always `#202020` or `#000000`.
- Don't use orange on body text or large surfaces — it loses its stamp quality immediately.
- Don't add drop shadows on cream surfaces. Elevation is colour-blocking; shadows are reserved for floating thumbnails.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop XL | ≥ 1440px | Full max-width 1280 body, hero band runs full-bleed, 4-up model grid. |
| Desktop | 1280–1439px | Container shrinks; padding `24px` (24px) sides. |
| Tablet Large | 1024–1279px | Model grid 3-up, code-story splits remain 2-up. |
| Tablet | 768–1023px | Model grid 2-up, code-story stacks (narrative on top, code below), pricing stacks vertically. |
| Mobile Large | 426–767px | Model grid 1-up at 480px+, nav collapses to hamburger, hero `{typography.display-xxl}` clamps to 64px. |
| Mobile | ≤ 425px | All grids 1-up, hero clamps to 48px, section padding `96px` collapses to 64px. |

### Touch Targets
- All buttons ship at minimum 44px tall on mobile; default `{component.button-primary}` is 44px tall — comfortably clearing WCAG AAA.
- `{component.button-icon}` (36px) is bumped to 44px on mobile via increased padding.
- `{component.sub-nav-pill}` stays at 36px on desktop and grows to 40px on mobile via vertical padding adjustment.

### Collapsing Strategy
- Top-level nav collapses to hamburger at < 1024px; the wordmark and `{component.button-primary}` stay anchored.
- Hero `{typography.display-xxl}` clamps: 128px → 96px → 64px → 48px across the breakpoint ladder.
- Pricing 3-up grid stacks vertically at < 1024px with the featured tier remaining centre-stacked.
- Code-story splits switch from side-by-side to stacked at < 1024px, code well always second.
- Sub-nav pills convert from a wrap row to a horizontal scroll-rail at < 768px.

### Image Behavior
- Model thumbnails serve at 1.5× and 2× DPR; below 768px the system swaps to a 600×600 export instead of 1200×1200.
- Hero atmospheric mesh is rendered as a CSS gradient — no asset cost, no breakpoint variation.
- Code-block contents wrap softly at < 1024px (no horizontal scroll); long lines break with a continuation marker.

## Iteration Guide

1. Focus on ONE component at a time. Most interactive elements share `9999px` and the `#f9f7f3` / `#ffffff` pair — only the role-specific tokens (`#ea2804`, `{component.code-block}`) shift between variants.
2. Reference component names and tokens directly (`#ea2804`, `{component.button-primary-pressed}`, `16px`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits; orphaned-tokens warnings will catch unused entries.
4. Add new variants as separate entries (`-pressed`, `-disabled`, `-featured`) — do not bury them in prose.
5. Default body type to `{typography.body-md}`; reach for `{typography.subtitle}` only on hero subtitles.
6. Keep `#ea2804` scarce — if more than one orange element appears per viewport, ask whether one should drop to `#202020` instead.

## Known Gaps

- Active/pressed visual states are documented for `button-primary-pressed` only; other components rely on the focus-ring (`rgba(59,130,246,0.5)`) for interactive feedback, which is not extracted as a per-component variant.
- The model playground / try-this-model interactive surfaces (logged-in feature) are out of scope; only the public marketing canvas is documented.
- Dashboard / billing / API key management surfaces are not extracted — those live behind authentication.
- The home hero illustration ("the tinkerer at the workbench") is treated as decorative artwork, not a system component; replicating it requires bespoke illustration rather than tokens.
