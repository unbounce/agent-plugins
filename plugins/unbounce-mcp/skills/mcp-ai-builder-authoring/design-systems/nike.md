# Design System: Nike

## Overview

Nike's commerce system is built on a single, almost violently simple idea: photography speaks, the chrome doesn't. Every page reads as an athletic editorial — towering uppercase Futura display lockups (`{typography.display-campaign}`) burned into full-bleed campaign imagery, with everything else (nav, filters, buttons, cards, footer) reduced to neutral typography and pill geometry on `#ffffff` and `#f5f5f5`. There is no decorative gradient, no soft shadow nostalgia, no accent color used for "tone" — the system saves all chromatic energy for product photography and the small handful of moments that actually need to signal (sale price `#d30005`, success `#007d48`, swatch dots).

The result is a layout that feels physical — campaign hero, product grid, sport tile, footer — stacked like a printed catalog rather than animated like a typical SaaS landing page. Density is high but never crowded, because the system relies on three relentless devices: square or near-square 1:1 product imagery on `#f5f5f5`, pill-shaped black CTAs (`9999px`) anchoring every actionable surface, and a tight 8px-base spacing scale that keeps cards and filters mathematically aligned across PLP, PDP, and editorial pages.

Across `/men`, the trail-running listing, the Zegama PDP, `/membership`, and Jordan Golf, the same chrome appears in identical proportions — only the photography and copy change. That is the system's signature: maximum editorial expression in the imagery, maximum mechanical restraint everywhere else.

**Key Characteristics:**
- Editorial campaign hero with `{typography.display-campaign}` (Nike Futura ND, 96px, line-height 0.9, uppercase) burned directly into full-bleed photography
- Pure black/white/single-gray UI palette: `#111111`, `#ffffff`, and `#f5f5f5` carry ~95% of the chrome surface area
- Pill geometry everywhere: every CTA, search field, filter chip, and badge uses `9999px` (30px) or `24px` (24px) — there are no sharp-cornered buttons in the system
- Product cards have zero radius, zero shadow, sit directly on `#f5f5f5` swatch backgrounds — the photograph is the card
- Two-tone CTA hierarchy: `{component.button-primary}` (black on anything light) versus `{component.button-secondary}` (`#f5f5f5` on anything bright) — never both at once on the same surface
- 8px spacing system with section rhythm at `48px` (48px) creating consistent vertical breathing across PLP, PDP, and editorial pages
- Sale signaling is the only place a non-neutral color appears in retail chrome: `#d30005` price + strike-through original price, no badge background

## Colors

> **Source pages:** `/men` (primary), `/w/mens-acg-trail-running-shoes-…`, `/t/acg-zegama-…`, `/membership`, `/w/jordan-golf-…`. The chrome palette is identical across all five — only photography varies.

### Brand & Accent
- **Nike Black** (`#111111` — `#111111`): The brand's only "color." It is the primary CTA, the swatch dot, the active filter chip, the campaign overlay, the headline color, and the body text. When Nike wants to assert anything, it goes black.
- **Pure White** (`#ffffff`, `#ffffff` — `#ffffff`): Equal partner to black. Carries every page background, the on-image CTA, and the inverse text on `#111111` surfaces.

### Surface
- **Soft Cloud** (`#f5f5f5` — `#f5f5f5`): The most-used non-white surface in the entire system. Product card image backgrounds, search pill, secondary CTA, utility bar, sport-category swatch tiles. It is the "color" of every product photograph's stage.
- **Hairline** (`#cacacb` — `#cacacb`): 1px dividers between filter rows, footer columns, and PDP disclosure rows.
- **Hairline Soft** (`#e5e5e5` — `#e5e5e5`): Inset 1px shadow under sticky bars and tab strips, the only "shadow" the system uses.

### Text
- **Ink** (`#111111` — `#111111`): Primary text on light surfaces — headlines, product names, prices, nav.
- **Charcoal** (`#39393b` — `#39393b`): Slightly softer body where ink is too heavy.
- **Ash** (`#4b4b4d` — `#4b4b4d`): Disabled secondary border on dark surfaces and very low-emphasis utility text.
- **Mute** (`#707072` — `#707072`): Product category subtitles ("Men's Trail Running Shoes"), footer link text, secondary metadata.
- **Stone** (`#9e9ea0` — `#9e9ea0`): Inverse secondary text on dark surfaces and lowest-emphasis utility text.

### Semantic
- **Sale** (`#d30005` — `#d30005`): Discounted price color and "% off" copy — the only red in the entire retail chrome.
- **Sale Deep** (`#780700` — `#780700`): Sale price hover/pressed and dark-mode sale anchor.
- **Success** (`#007d48` — `#007d48`): Confirmation messages, in-stock indicators, eligibility ticks.
- **Success Bright** (`#1eaa52` — `#1eaa52`): Inverse success on dark surfaces.
- **Info** (`#1151ff` — `#1151ff`): Informational link/badge accent in member-experience callouts.
- **Info Deep** (`#0034e3` — `#0034e3`): Pressed state for info accent.

### Category Accents (sport / collection chips)
These appear sparingly — almost exclusively as small chip backgrounds, swatch dots, or category illustrations in editorial tiles. They are never used as text or primary CTA color.
- **Accent Pink** (`#ed1aa0` — `#ed1aa0`): SKIMS / women's collection moments.
- **Accent Pink Soft** (`#ffb0dd` — `#ffb0dd`): Soft tinting on member-experience tiles.
- **Accent Purple Soft** (`#beaffd` — `#beaffd`): Editorial swatch dot, soft category chip.
- **Accent Purple Pale** (`#d6d1ff` — `#d6d1ff`): Lightest soft-tile fill.
- **Accent Teal** (`#0a7281` — `#0a7281`): Trail / outdoor / ACG editorial accent in lockups.
- **Accent Pink Deep** (`#4c012d` — `#4c012d`): Deepest editorial overlay tint, used as wash on heritage / Jordan tiles.

## Typography

### Font Family
- **Nike Futura ND** (display campaign only) — proprietary geometric sans for the towering uppercase headlines burned into campaign hero photography. Falls back to Helvetica Now Text Medium → Helvetica → Arial.
- **Helvetica Now Display Medium** (headings 16–32px) — modern Helvetica cut tuned for display sizes; carries every section title, PDP product name, and dialog headline.
- **Helvetica Now Text Medium** (UI 12–16px) — buttons, captions, swatch labels, badge text. The system's UI workhorse.
- **Helvetica Now Text** (body and links) — long-form body and underlined inline links.
- **Neue Frutiger Arabic** — RTL pairing for Arabic locales at `{typography.heading-lg}` and caption sizes.
- **Helvetica Neue 9px** — legal-fine-print utility row only (`{typography.utility-xs}`).

When substituting on systems without proprietary Nike fonts: pair **Inter** (Display 700 for body chrome, Display 500 for buttons) with **Bebas Neue** or **Anton** at 96px/0.9 line-height for the campaign headline tier. Tighten letter-spacing slightly (-0.5%) on the substitute to approximate Futura ND's optical weight.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-campaign}` | 96px | 500 | 0.9 | 0 | Editorial campaign headline burned into hero photography (uppercase) |
| `{typography.heading-xl}` | 32px | 500 | 1.2 | 0 | Section headers — "FEATURED FOOTWEAR", "LATEST IN CLOTHING", PDP product title block |
| `{typography.heading-lg}` | 24px | 500 | 1.2 | 0 | Subsection / member-benefit card title, large CTA label, PDP price |
| `{typography.heading-md}` | 16px | 500 | 1.75 | 0 | Card title, FAQ row label, filter group header |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Body copy, search-pill placeholder, product description |
| `{typography.body-strong}` | 16px | 500 | 1.5 | 0 | Product card name, filter row label, primary nav link |
| `{typography.button-lg}` | 24px | 500 | 1.2 | 0 | Pressed-letter campaign CTA inside hero blocks |
| `{typography.button-md}` | 16px | 500 | 1.5 | 0 | Standard pill CTAs across the system |
| `{typography.button-sm}` | 14px | 500 | 1.5 | 0 | Compact pill CTA, badge label, geo-selector button |
| `{typography.link-md}` | 16px | 500 | 1.75 | 0 | Underlined inline link, "View Product Details" |
| `{typography.caption-md}` | 14px | 500 | 1.5 | 0 | Product subtitle ("Men's Trail Running Shoes"), filter count, footer link |
| `{typography.caption-sm}` | 12px | 500 | 1.5 | 0 | Filter chip label, badge text, color count |
| `{typography.utility-xs}` | 9px | 500 | 1.75 | 0 | Legal copyright / fine-print row at the very bottom |

### Principles
The system runs on extreme typographic contrast: a single 96px uppercase display tier reserved for editorial campaign moments, and a quiet 12–16px Helvetica Now Text/Medium tier carrying everything else. There is almost no middle ground — the jump from `{typography.heading-xl}` (32px) directly to `{typography.body-strong}` (16px) is intentional and creates the "billboard above, catalog below" effect across every page. Letter-spacing is left at 0 (Futura ND and Helvetica Now are both cut for tight optical fit at scale).

### Note on Font Substitutes
The closest open-source path to Nike's display tier is **Bebas Neue** (free, geometric condensed) at 96px / 0.9 / uppercase / 500. For UI text, **Inter** is the safest substitute — match weights 400/500 and the system reads almost identically at button and caption sizes.

## Layout

### Spacing System
- **Base unit:** 8px
- **Tokens (front matter):** `2px` (2px) · `4px` (4px) · `8px` (8px) · `12px` (12px) · `18px` (18px) · `24px` (24px) · `30px` (30px) · `48px` (48px+)
- **Universal rhythm:** every page in the set uses `48px` (48px) as the vertical gap between major content blocks (campaign hero → trending row → featured row → shop-by-sport → latest-in-clothing → footer). PLP card grids use `8px` (8px) gutters. PDP disclosure rows are stacked at `24px` (24px) vertical padding.
- **Card internal padding:** product cards use 0px internal padding — image is full-bleed; metadata rows sit directly below with `8px` (8px) gap between name, subtitle, and price.

### Grid & Container
- **Max width:** ~1440px content area with edge gutters that grow to ~80px at 1920px (the system lets very wide viewports breathe rather than stretch).
- **Column patterns:** PLP listing uses 3-up at desktop, collapsing to 2-up at 1023px and 1-up at 599px. The men's home `/men` mixes a 2-up campaign hero row, a 3- or 4-up "Trending Now" row, a horizontal-scroll "Shop by Sport" rail, and a 4-up "Latest in Clothing" thumbnail grid.
- **Filter sidebar:** ~220px fixed-width left rail on PLP at desktop, collapsing into a `Hide Filters` toggle button at narrow widths.

### Whitespace Philosophy
Whitespace is a tool for separation, not for breath. Sections butt directly against each other vertically with `48px` rhythm, and product photos tile edge-to-edge inside their grid — there is no padding wrapped around the product image itself. The "air" comes from the `#f5f5f5` background of the photograph, not from layout margin. Headlines do not have decorative whitespace above them; they sit immediately under the section divider line.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Default for cards, buttons, sections — the dominant treatment |
| 1 — Hairline divider | 1px solid `#cacacb` | Filter row separators, footer column borders, PDP disclosure-row separators |
| 2 — Inset bottom-line | `box-shadow: inset 0 -1px 0 #e5e5e5` | Sticky utility/sub-nav bar bottom edge, tab strip underline |

The system has no drop-shadow elevation in its retail chrome at all. Cards do not lift on the page. The only depth cue is the 1px inset hairline on sticky strips and the contrast between full-bleed photography and `#f5f5f5` product backdrops.

### Decorative Depth
Depth in Nike's system comes entirely from photography, not from CSS effects:
- **Editorial campaign tiles** create depth via cinematic perspective — a runner on a trail, a model in a courtyard — with the Futura display headline overlaid in white or `#111111` directly on the image.
- **Product card photography** is shot on flat `#f5f5f5` to remove any background depth, so the product itself is the only thing with form on the page.
- **Sport-category tiles** on the home page are full-bleed cinematic photography with a small `{component.button-outline-on-image}` pill anchored at the bottom-left, giving a moment of crisp white pill against atmospheric image.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Cards, campaign tiles, product imagery, navigation, footer — every container in the system |
| `18px` | 18px | Avatar / icon container in member-benefit lockups |
| `24px` | 24px | Search pill, search submit, filter input |
| `30px` | 30px | Every CTA pill — primary, secondary, on-image, filter chip, geo-selector, "Notify Me" |
| `9999px` | 9999px | Color swatch dots and circular icon buttons (back, share, favorite, carousel paddle) |

### Photography Geometry
- **Product cards:** consistent 1:1 square or near-square (~4:5 portrait on tall product crops), full-bleed within the card with no padding, sitting on `#f5f5f5` backdrop.
- **Editorial campaign hero:** ~16:9 or wider cinematic crop, full-bleed across the content max-width, with the Futura display headline burned into the lower-left or upper-left third.
- **Sport-category rail:** 4:5 portrait full-bleed thumbnails with a small CTA pill anchored bottom-left.
- **PDP main image:** square primary image with vertical thumbnail rail to its left (~5–7 thumbnails stacked at small size), enabling rapid color/angle browsing without leaving the page.
- **Avatar / category icon cards:** centered illustrated icon at ~80–96px on `#ffffff` with `{typography.caption-md}` label below.

## Components

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only; variants live as separate `components:` entries in the front matter.

### Buttons

**`button-primary`** — the universal Nike CTA
- Background `#111111`, text `#ffffff`, type `{typography.button-md}`, padding `16px 32px`, height `48px` (48px), rounded `30px` (30px pill).
- Used on every primary action in the system: "Sign Up", "Notify Me", "Buy", "Türkiye" geo-confirm, "Shop" overlay on sport tiles, "Continue".
- Pressed state lives in `button-primary-active` — the bg stays `#111111` while the surface shrinks to `scale(0.5)` with `opacity: 0.5` (Nike's signature "tap collapse" feedback that's extracted across all five pages).

**`button-secondary`** — soft alternative on light surfaces
- Background `#f5f5f5`, text `#111111`, type `{typography.button-md}`, padding `16px 32px`, rounded `30px`.
- Used as the lower-emphasis alternate when a primary CTA already exists, e.g., "United States" geo-decline next to the black "Türkiye" confirm; "Cancel" or "Discover More" on light cards.

**`button-outline-on-image`** — overlay CTA on photography
- Background `#ffffff`, text `#111111`, type `{typography.button-md}`, padding `12px 24px`, rounded `30px`.
- The crisp white pill that anchors the bottom-left of every full-bleed sport-category and editorial campaign tile.

**`button-icon-circular`** — chrome icon controls
- Background `#f5f5f5` or transparent, icon `#111111`, rounded `9999px`, size 40px.
- Used for back-arrow, carousel paddle (left/right), wishlist heart, share, and "Hide Filters" toggle.

**`filter-chip`** + **`filter-chip-active`**
- Default: background `#ffffff`, text `#111111`, 1px hairline `#cacacb`, type `{typography.button-md}`, rounded `30px`, padding `8px 16px`.
- Active: background `#111111`, text `#ffffff` — the chip flips fully inverted when selected. No middle state.

### Inputs & Forms

**`search-pill`** + **`search-pill-focused`**
- Default: background `#f5f5f5`, text `#111111`, type `{typography.body-md}`, rounded `24px` (24px), padding `8px 16px`, height `40px`. Anchored to the right of the primary nav with a small magnifier icon.
- Focused: background `#ffffff`, 2px solid border `#111111`, with a 12px outer halo of `#f5f5f5` (the system's only "focus ring" effect). The pill shape stays `24px` so the halo reads as a soft glove, not a hard outline.

### Cards & Containers

**`product-card`**
- Container: background `#ffffff`, rounded `0px`, padding 0, no shadow.
- Image area: `{component.product-card-image}` — full-bleed product photo on `#f5f5f5` square.
- Below image (in this order with `8px` between): swatch dot row (3–6 dots at 12px circular), promo badge if applicable (`{component.badge-promo}` "Just In", "Coming Soon", "Recycled Materials"), product name `{typography.body-strong}` `#111111`, category subtitle `{typography.caption-md}` `#707072`, price row.
- Price row: regular price `{typography.body-strong}` `#111111`. If on sale: discounted price `#d30005` followed by strike-through original `#707072` followed by "% off" in `#d30005`.

**`campaign-tile`** — the brand's signature editorial unit
- Full-bleed photography with `{typography.display-campaign}` headline burned in (uppercase, 96px, line-height 0.9).
- Headline color is whichever of `#ffffff` or `#111111` reads against the underlying image — not parameterized; chosen per-asset.
- A single `{component.button-outline-on-image}` pill anchored bottom-left of the tile carries the call-to-action.

**`category-icon-card`**
- Container: background `#ffffff`, rounded `0px`.
- Centered category illustration (~80px) + label `{typography.caption-md}` `#111111` directly below. Used in the "Latest in Clothing" 4–8-up icon strip on `/men`.

**`member-benefit-card`**
- Full-bleed photographic card on a dark image background; copy slot at the bottom-left with `{typography.heading-lg}` headline `#ffffff` and a `{component.button-outline-on-image}` "Explore" pill below.
- Used in the `/membership` "Member Benefits" 3-up grid.

**`swatch-dot`** + **`swatch-dot-active`**
- 12px circle, rounded `9999px`, no border in default state. Renders the colorway options on every product card and PDP color picker.
- Default: filled with the colorway's actual product color (extracted at runtime from the product image), 1px subtle outer ring in `#cacacb` for white/light colorways so they remain visible on `#ffffff`.
- Active: identical fill with a 2px `#111111` outer ring and 2px white interior gap, creating Nike's signature concentric-ring "selected" state. No size change between default and active.

**`badge-promo`**
- Background `#ffffff` with 1px hairline `#cacacb`, text `#111111`, type `{typography.caption-sm}`, rounded `30px`, padding `4px 12px`.
- Sits on top of product imagery (top-left of card) with copy like "Just In", "Coming Soon", "Recycled Materials", "Member Exclusive".

**`badge-sale-text`**
- Inline price-row text in `#d30005` with no background — the only "badge" in the system that has no container.

### Navigation

**`utility-bar`** — top utility strip
- Background `#f5f5f5`, text `#111111`, type `{typography.caption-sm}`, height ~36px, rounded `0px`.
- Right-aligned cluster: "Find a Store · Help · Join Us · Sign In". Always present; never collapses.

**`primary-nav`** — main navigation
- Background `#ffffff`, text `#111111`, type `{typography.body-strong}` for nav links, height 56–64px, rounded `0px`.
- Layout: Nike swoosh logo at left (32×32), centered nav row ("New & Featured · Men · Women · Kids · Jordan · Nike SKIMS · Sport"), right cluster (search pill, wishlist heart icon, bag icon).
- The active section gets a 2px-bottom underline in `#111111` — no background fill.

**Sub-nav strip** (PLP) — appears under primary nav with breadcrumb + sort + hide-filters controls.
- Same `#ffffff` background with a 1px inset hairline-soft bottom edge.
- Left: breadcrumb in `{typography.caption-md}` `#707072` separated by " / ".
- Right: "Hide Filters" toggle + "Sort By: …" dropdown — both in `{typography.button-md}` with chevron icons.

**Top Nav (Mobile)**
- Hamburger menu icon (left), Nike swoosh (center), search + bag icons (right).
- Search pill collapses into an icon-only button at narrow widths; tapping expands a full-width overlay search pill with `24px`.
- Primary nav collapses into a full-height drawer that slides in from the left, listing nav rows top-down with `24px` vertical padding.

### Signature Components

**`pdp-disclosure-row`** — PDP information accordion rows
- Stacked rows for "View Product Details", "Shipping & Returns", "Reviews (n)" with `24px` vertical padding and a 1px `#cacacb` divider below each.
- Label `{typography.body-strong}` `#111111` left-aligned; chevron `#111111` right-aligned.

**`faq-row`** — `/membership` FAQ accordion
- Identical pattern to `pdp-disclosure-row` but with `{typography.heading-md}` label weight; 1px `#cacacb` divider below each.

**`filter-sidebar`** — PLP left rail
- Container `#ffffff`, rounded `0px`.
- Section headers `{typography.body-strong}` `#111111` with `18px` (18px) vertical gap between groups.
- Active filters get a 1px ink underline; counts in parentheses use `#707072`.

**`footer`**
- Background `#ffffff` with a single 1px `#cacacb` top divider.
- Four columns: Resources / Help / Company / Promotions & Discounts, each with column header `{typography.body-strong}` `#111111` and link list `{typography.caption-md}` `#707072`.
- Below the columns: a horizontal rule, then a fine-print row with `{typography.utility-xs}` `#707072` (copyright, locale switcher, terms, privacy, supply-chain act).

## Do's and Don'ts

### Do
- Reserve `{typography.display-campaign}` exclusively for editorial campaign hero lockups — never use 96px Futura for section headers or product titles.
- Use `{component.button-primary}` (`#111111` pill) as the single primary action per viewport. Pair it at most with `{component.button-secondary}` (`#f5f5f5` pill) for a soft alternative.
- Stage every product photograph on `#f5f5f5` — the gray is the system's "studio."
- Keep all CTAs pill-shaped at `30px` (30px). Never introduce a square or `18px` button.
- Use `#d30005` only on price rows — never on backgrounds, badges, or chrome.
- Stack content sections at `48px` (48px) rhythm with no decorative dividers between them; the photography's bleed-edge is the divider.
- Anchor on-image CTAs with `{component.button-outline-on-image}` (white pill) at bottom-left — the system's universal "shop this image" position.

### Don't
- Don't introduce drop shadows or card elevation. Cards sit flat on the page; the only depth cue is the 1px inset hairline on sticky bars.
- Don't use any of the category accent colors (`#ed1aa0`, `#beaffd`, `#0a7281`) for primary chrome — they belong to swatch dots, soft tile fills, and editorial moments only.
- Don't replace `#111111` with a near-black gray like `#39393b` for a CTA — Nike's primary pill is true `#111111`.
- Don't pad inside product cards. The image is full-bleed; metadata sits directly below with `8px` (8px) between rows.
- Don't put two campaign-tile lockups in the same row at the same scale — Nike alternates a single full-bleed editorial tile with a 2-up or 4-up product/category grid.
- Don't underline anything other than `{typography.link-md}` inline links and the active primary-nav indicator. Buttons, headings, and prices stay un-underlined.
- Don't introduce a third button shape. Pill or icon-circular — that's the entire button shape vocabulary.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| ultrawide | 1920px+ | Content max-width holds at ~1440px; outer gutters grow to ~80px on each side |
| desktop-large | 1440px | Default desktop layout — 3-up product grid, 4-up clothing strip, full primary nav |
| desktop | 1200px | Same as large with slightly narrower outer gutters |
| desktop-small | 1024px | Filter sidebar starts compressing; sport rail shows ~3 visible tiles |
| tablet | 1023–961px | 3-up PLP collapses to 2-up; "Hide Filters" becomes a default toggle |
| tablet-narrow | 960–640px | Primary nav center cluster collapses to a hamburger drawer; search pill becomes icon-only |
| mobile-landscape | 639–600px | 2-up PLP collapses to 1-up; product cards become full-width with image and metadata stacking |
| mobile | 599–320px | Single-column everything; campaign tiles render at full screen width with shorter Futura sizes (~64px) |

### Touch Targets
All interactive elements meet WCAG AAA (44×44px minimum). Pills (`{component.button-primary}`, `{component.button-secondary}`) sit at 48px height with 32px horizontal padding. Icon-circular buttons (`{component.button-icon-circular}`) sit at 40px — Nike's PDP carousel paddle and wishlist heart sit just under AAA but above AA at 40×40, with hit-target padding extending the tappable area to 48px+. Filter-chip pills are 40px height with 16px padding.

### Collapsing Strategy
- **Primary nav:** desktop center cluster → mobile drawer triggered by hamburger at left of the swoosh.
- **PLP grid:** 3-up → 2-up → 1-up at 1023, 599, and below; gutters drop from `8px` to `4px` on mobile.
- **Filter sidebar:** 220px fixed → "Hide Filters" toggle → off-canvas full-screen filter drawer at mobile.
- **Sport rail:** desktop horizontal scroll with ~5 visible → mobile horizontal scroll with ~1.5 visible (peek-next-card pattern).
- **Section spacing:** `48px` 48px desktop → 32px tablet → 24px mobile to keep editorial rhythm tight on small screens.
- **Editorial campaign headline:** desktop 96px → tablet 64px → mobile 48px, line-height stays at 0.9 across all sizes.

### Image Behavior
- Product imagery is responsive at the same 1:1 ratio across all breakpoints — the image scales, the ratio doesn't.
- Editorial campaign tiles use art-direction crops: a 16:9 wide hero on desktop swaps to a 4:5 portrait on mobile so the figure stays centered and the headline still has burn-in space.
- All non-critical product imagery is lazy-loaded as the user scrolls into the next grid row.

## Iteration Guide

1. Focus on ONE component at a time. Pull its YAML entry from the front matter and verify every property resolves.
2. Reference component names and tokens directly (`#111111`, `{component.button-primary-active}`, `30px`) — do not paraphrase color names or radii in prose.
3. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
4. Add new variants as separate component entries (`-active`, `-disabled`, `-focused`) — do not bury them inside prose. Nike's pressed state (`scale(0.5) opacity 0.5`) is intentional and must be its own entry, not a hover stand-in.
5. Default body to `{typography.body-md}`; reach for `{typography.body-strong}` for product names and primary nav links; reserve `{typography.display-campaign}` strictly for hero campaign lockups.
6. Keep `#111111` scarce per viewport — if more than one solid-black pill or block appears in the same fold, neutralize one to `{component.button-secondary}` or `{component.button-outline-on-image}`.
7. When introducing a new component, ask whether it can be expressed with the existing pill + flat-card + photography-on-`#f5f5f5` vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.

## Known Gaps

- **Mobile screenshots not captured** — responsive behavior described above synthesizes Nike's known mobile pattern (hamburger drawer, 1-up grid, headline downscale) from desktop evidence and the breakpoint list extracted from tokens.
- **Hover states not documented** by system policy — Nike's CSS uses `--pds-color-element-hover` and `--pds-color-text-hover` tokens but these are not included here.
- **Dialog / modal styling** beyond the geo-selector and the country-confirmation pill pair could not be confirmed from the captured surfaces; bag, wishlist, and login overlays are not documented.
- **Form field styling** for checkout, sign-up, and address forms is not present in the captured surfaces — only the search pill is documented.
- **Bag and wishlist** icon-state variants (filled count badges) not visible in the captured pages.
