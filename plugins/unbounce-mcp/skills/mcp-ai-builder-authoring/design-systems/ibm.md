# Design System: IBM

## Overview

IBM's marketing system is a faithful application of **Carbon Design System** — IBM's open-source enterprise design system. The dominant surface is `#ffffff` pure white with `#f4f4f4` light gray for elevation, charcoal `#161616` (#161616) for text, and IBM Blue `#0f62fe` (#0f62fe) as the single brand accent.

The defining choice is **flat geometry**: every CTA, every card, every input, every container uses square corners (`0px` 0px) with thin 1px borders. There are no rounded pills, no soft shadows, no atmospheric gradients. The system is engineered, not stylized.

**IBM Plex Sans** carries the entire type hierarchy. Display sizes (76 / 60 / 42px) run at weight **300** — IBM's signature light display treatment that makes 76px feel calmer than competing brands' 700-weight display. Body type sits at weight 400 with `letter-spacing: 0.16px` (a Carbon precision detail) and line-height 1.50. The voice reads as careful, technical, and trustworthy.

The system reaches for color rarely — IBM Blue marks links, primary CTAs, and the rare full-bleed CTA banner. Charcoal carries every other surface that isn't white. The result is enterprise gravitas without the enterprise stiffness: rigorous, light-weighted, and intentionally restrained.

**Key Characteristics:**
- **Carbon Design System** — IBM's marketing chrome IS Carbon. Buttons are square, inputs are square-with-bottom-rule, corners stay at 0px.
- **Light-weight display type**: Plex Sans at weight 300 for 42–76px headlines is the brand's typographic signature.
- **One accent color**: `#0f62fe` IBM Blue carries every link, primary CTA, and CTA banner. There is no second brand color.
- White canvas + light gray (`#f4f4f4`) + charcoal (`#161616`) cover 95% of surfaces.
- Footer inverts to charcoal (`#161616` #161616) — the only dark surface above the page break.
- Card hierarchy is carried by 1px hairlines and surface change, never by drop shadow.
- `letter-spacing: 0.16px` on body is a Carbon precision detail — the small positive tracking is part of the brand voice.
- Page rhythm: utility bar → top nav → hero with light-weight headline → feature card grid → customer logo marquee → enterprise feature row → training section → newsletter / sign-in CTA → dark footer.

## Colors

> Source pages: ibm.com (home), /software/ai-productivity, /consulting, /products/cloud-pak-for-aiops, /products/bare-metal-servers, community.ibm.com.

### Brand & Accent
- **IBM Blue** (#0f62fe): The single brand accent. Links, primary CTAs, CTA banner backgrounds, focus rings.
- **Blue 60** (#0043ce): Hovered link state.
- **Blue 80** (#002d9c): Pressed primary button.
- **Blue Hover** (#0050e6): Hover state for primary buttons.

### Surface
- **Canvas** (#ffffff): Default page background.
- **Surface 1** (#f4f4f4): Light gray (#f4f4f4) — input fields, alternate-row stripes, subtle section bands.
- **Surface 2** (#e0e0e0): Slightly darker gray (#e0e0e0) — disabled fields, hairline-as-fill for separators.
- **Hairline** (#e0e0e0): 1px borders on cards, inputs, dividers.
- **Hairline Strong** (#161616): 1px charcoal underline on focused inputs (Carbon's signature focus treatment).
- **Inverse Canvas** (#161616): Charcoal #161616 — footer surface.
- **Inverse Surface 1** (#262626): One step lighter than inverse canvas — footer column dividers, hovered footer items.

### Text
- **Ink** (#161616): All headlines and emphasized body type — charcoal #161616.
- **Ink Muted** (#525252): Secondary type at #525252 — meta, sub-headlines, footer body.
- **Ink Subtle** (#8c8c8c): Tertiary type at #8c8c8c — disabled, helper text, captions.
- **Inverse Ink** (#ffffff): White on charcoal — footer headings.
- **Inverse Ink Muted** (#c6c6c6): Light gray on charcoal — footer body.

### Semantic
- **Success Green** (#24a148): Carbon green-50 — success states.
- **Warning Yellow** (#f1c21b): Carbon yellow-30 — warning states.
- **Error Red** (#da1e28): Carbon red-60 — error states; danger button background.
- **Info Blue** (#0f62fe): Identical to primary — informational badges.

## Typography

### Font Family

- **IBM Plex Sans** — IBM's open-source proprietary typeface (free for any use). Geometric, slightly humanist, designed specifically for enterprise UI. Fallback: `Helvetica Neue, Arial, sans-serif`.

The same family carries display, body, and caption — there is no display + body pairing. Hierarchy is carried by **size + weight** rather than by family change. Plex Sans is also free / open-source under the SIL Open Font License — making it the easiest custom face on this list to substitute for in implementation.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 76px | 300 | 1.17 | -0.5px | Largest hero headline |
| `{typography.display-lg}` | 60px | 300 | 1.17 | -0.4px | Section opener headlines |
| `{typography.display-md}` | 42px | 300 | 1.20 | 0 | Sub-section headlines, hero card title |
| `{typography.headline}` | 32px | 400 | 1.25 | 0 | Card collection heading, FAQ category |
| `{typography.card-title}` | 24px | 400 | 1.33 | 0 | Feature card title |
| `{typography.subhead}` | 20px | 400 | 1.40 | 0 | Lead body next to display headlines |
| `{typography.body-lg}` | 18px | 400 | 1.50 | 0 | Hero subhead, lead paragraphs |
| `{typography.body}` | 16px | 400 | 1.50 | 0.16px | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.29 | 0.16px | Card body, footer columns |
| `{typography.body-emphasis}` | 14px | 600 | 1.29 | 0.16px | Selected tab label, emphasized body line |
| `{typography.caption}` | 12px | 400 | 1.33 | 0.32px | Captions, meta, utility bar |
| `{typography.button}` | 14px | 400 | 1.29 | 0.16px | All button labels |
| `{typography.eyebrow}` | 14px | 400 | 1.29 | 0.16px | Section eyebrows (Carbon avoids strong eyebrows; uses sentence case 14px) |

### Principles

- **Light-weight display is the brand voice.** Plex Sans at weight 300 for 76px headlines reads as quietly authoritative — switching to 700 would make it look like every other enterprise site.
- **Carbon's `letter-spacing: 0.16px`** on body sizes is a precision detail. Don't remove it.
- **No mono** on marketing surfaces (Plex Mono exists but lives in product surfaces only).
- **Eyebrow typography uses sentence case 14px** — Carbon resists the all-caps tracked eyebrow common to other enterprise brands.
- **Line-heights tighten on display, relax on body**: 1.17 at display-xl, 1.50 at body — proportional to size.

### Note on Font Substitutes

IBM Plex Sans is **free and open-source** (SIL OFL license) and available on Google Fonts. It is the recommended implementation. The Plex family also includes Plex Mono and Plex Serif if expanded typographic needs arise.

## Layout

### Spacing System

- **Base unit**: 4px (Carbon's signature 4-pixel grid).
- **Tokens (front matter)**: `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `24px` 24px · `32px` 32px · `48px` 48px · `96px` 96px.
- Card interior padding: `24px` 24px on feature cards; `32px` 32px on product cards; `48px` 48px on hero cards and CTA banners.
- Button padding: 12px vertical · 16px horizontal — Carbon spec.
- Form input padding: 11px vertical · 16px horizontal.

### Grid & Container

- Carbon's 16-column grid at desktop, scaling to 8 / 4 columns at tablet / mobile.
- Max content width sits around 1584px (Carbon's max-grid breakpoint).
- Card grids are 4-up at desktop, 2-up at tablet, 1-up at mobile.
- The customer logo marquee uses fixed-width tiles in a flex row, scrolling horizontally on smaller viewports.

### Whitespace Philosophy

Carbon uses precise alignment to a 4-pixel grid as its whitespace system. Sections separate via thin gray rows (`#f4f4f4`) rather than via large vertical gaps. Content is dense by design — IBM's customers expect to see a lot on a page, not a lot of air.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for body type, hero text, footer body |
| 1 (hairline) | 1px `#e0e0e0` border on canvas | Feature cards, inputs, list items |
| 2 (surface lift) | `#f4f4f4` background on canvas | Alternate-row banners, hovered cards |
| 3 (focus ring) | 2px `#0f62fe` outline + 1px `#161616` underline | Focused input, focused button |

Carbon resists drop shadows on marketing — depth is carried by surface change and 1px hairlines. The exception is product / app surfaces (Carbon documents shadow tokens for elevated panels), but the marketing site barely uses them.

### Decorative Depth

- **Soft blue gradient backdrops** appear behind some hero illustrations — a faint blue-to-white wash that warms the canvas without competing with the headline.
- **No atmospheric depth.** No spotlight cards, no pastel section blocks, no gradient panels.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Default — every button, card, input, container |
| `2px` | 2px | Small badges (rare exception) |
| `4px` | 4px | Avatar circles squared, dropdown menus |
| `6px` | 6px | (Used rarely; documented for completeness) |
| `8px` | 8px | (Used rarely; documented for completeness) |
| `9999px` | 9999px | Status pills, badges in product UI (rare on marketing) |

The brand commits to flat 0px corners. The other tokens exist for product / mobile surfaces but rarely surface on marketing.

### Photography & Illustration Geometry

- IBM uses photography (people, hardware, sports cars) and abstract illustration (geometric mesh, dotted patterns) interchangeably.
- Image frames are flat — no rounded corners.
- Customer logo tiles sit on `0px` 0px tiles with thin 1px borders.

## Components

### Buttons

**`button-primary`** — Blue solid CTA. The default primary across all pages.
- Background `#0f62fe`, text `#ffffff`, type `{typography.button}`, padding 12px 16px, rounded `0px`.
- Pressed state lives in `button-primary-pressed` (background shifts to `#002d9c`).

**`button-secondary`** — Charcoal solid button — Carbon's "secondary" treatment.
- Background `#161616`, text `#ffffff`, type `{typography.button}`, padding 12px 16px, rounded `0px`.

**`button-tertiary`** — White button with blue 1px border + blue text. Used for tertiary CTAs.
- Background `#ffffff`, text `#0f62fe`, type `{typography.button}`, rounded `0px`, padding 12px 16px. (Border in implementation: 1px `#0f62fe`.)

**`button-ghost`** — Plain text + chevron, no background until hover.
- Background `#ffffff`, text `#0f62fe`, type `{typography.button}`, rounded `0px`, padding 12px 16px.

**`button-danger`** — Carbon's destructive variant.
- Background `#da1e28`, text `#ffffff`, type `{typography.button}`, rounded `0px`, padding 12px 16px.

### Cards & Containers

**`feature-card`** — Default feature highlight tile on the home and product pages.
- Background `#ffffff`, text `#161616`, type `{typography.body}`, rounded `0px`, padding 24px. Stroked with 1px `#e0e0e0`.

**`feature-card-elevated`** — Same shape on `#f4f4f4` ground — used for "Recommended" cards in the latest-content carousel.
- Background `#f4f4f4`, otherwise identical structure.

**`product-card`** — Larger product showcase tile.
- Background `#ffffff`, text `#161616`, type `{typography.body}`, rounded `0px`, padding 32px.

**`hero-card`** — Hero composition card with light-weight title, body, and CTA.
- Background `#ffffff`, text `#161616`, type `{typography.display-md}`, rounded `0px`, padding 48px.

**`cta-banner`** — Full-width blue CTA panel near the bottom of the page.
- Background `#0f62fe`, text `#ffffff`, type `{typography.headline}`, rounded `0px`, padding 48px.

**`resource-tile`** — Smaller article / case-study tile.
- Background `#ffffff`, text `#161616`, type `{typography.body-sm}`, rounded `0px`, padding 16px.

**`customer-logo-tile`** — Single tile in the customer marquee on the home page (Ferrari, Pfizer, etc.).
- Background `#ffffff`, text `#525252`, type `{typography.caption}`, rounded `0px`, padding 24px. 1px hairline border.

### Inputs & Forms

**`text-input`** + **`text-input-focused`** + **`text-input-error`** — Carbon's input chrome.
- Background `#f4f4f4`, text `#161616`, type `{typography.body}`, rounded `0px`, padding 11px 16px.
- Focus state replaces the bottom 1px hairline with a 2px `#0f62fe` underline (Carbon's signature focus treatment).
- Error state adds 2px `#da1e28` bottom underline.

**`newsletter-input`** — The "Stay connected" newsletter capture on the home page.
- Background `#f4f4f4`, text `#161616`, type `{typography.body}`, rounded `0px`, padding 11px 16px. Adjacent submit is `button-primary`.

### Tabs

**`product-tab`** + **`product-tab-selected`** — The horizontal tab strip on product pages and the home "Recommended" carousel.
- Default: `#ffffff` background, `#525252` text, rounded `0px`, padding 16px 20px. Bottom 1px hairline.
- Selected: `#ffffff` background, `#161616` text, `{typography.body-emphasis}` weight, bottom 2px `#0f62fe` underline. Same padding / rounding.

### Navigation

**`top-nav`** — Sticky white bar with the IBM logomark left, nav categories center, and search / sign-in icons right.
- Background `#ffffff`, text `#161616`, type `{typography.body-sm}`, height 48px. 1px bottom hairline.

**`utility-bar`** — Slim gray ribbon above the top nav with location switch, contact, search shortcuts.
- Background `#f4f4f4`, text `#525252`, type `{typography.caption}`, height 32px.

### Footer

**`footer`** — Charcoal footer (`#161616`) with the IBM wordmark left and 5–6 columns of caption-sized links. The only inverted surface above the page break.
- Background `#161616`, text `#c6c6c6`, type `{typography.body-sm}`, padding 64px 32px.

## Do's and Don'ts

### Do

- Use `0px` 0px on every CTA, card, input, and container. The flat-square aesthetic is the brand.
- Pair Plex Sans weight 300 for display sizes (42px+) with weight 400 for body. Resist the urge to bold the headline.
- Reserve `#0f62fe` IBM Blue for primary CTAs, links, focused-input underlines, and CTA banner. Do not use it as a card background or eyebrow color.
- Apply `letter-spacing: 0.16px` to body sizes. It's a Carbon precision detail and part of the typographic voice.
- Use surface change (`canvas` → `surface-1`) and 1px hairlines for card hierarchy. Skip drop shadows.
- Stick to sentence case for eyebrows and section labels — Carbon resists all-caps tracking.
- Invert to `#161616` only at the footer; the rest of the page stays light.

### Don't

- Don't round corners on buttons, cards, or inputs. Even 4px rounded corners break the Carbon look.
- Don't bold display headlines. Plex Sans at weight 300 is the brand voice; weight 700 makes it look generic.
- Don't add atmospheric depth (gradient backdrops, drop shadows, atmospheric overlays) outside the documented soft-blue hero gradient.
- Don't introduce a second brand color. IBM Blue is the only chromatic accent; status semantics use the documented green / yellow / red.
- Don't replace IBM Plex Sans with Inter or Helvetica without preserving the `letter-spacing: 0.16px` and weight-300 display treatment.
- Don't use pill-shaped buttons. Carbon uses square corners; pills read as a different brand.
- Don't write all-caps tracked eyebrows. Carbon's eyebrows are sentence case at 14px.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Max | 1584px | Carbon max grid; gutters expand |
| Desktop-XL | 1312px | Default desktop layout |
| Desktop | 1056px | Card grid 4-up maintained |
| Tablet | 672px | Card grid 4-up → 2-up; nav becomes hamburger |
| Mobile | 320px | Single-column; display-xl scales 76px → ~32px |

### Touch Targets

- Carbon spec: 48px minimum tap target. Buttons and inputs hold 48px on touch viewports.
- Top-nav links grow from 36px to 48px tap height on touch.
- Tab strip rows hold 48px tap height.

### Collapsing Strategy

- **Top nav**: links collapse to a hamburger overlay below 672px. Logomark and search icon stay on the bar.
- **Utility bar**: hides below 672px to reclaim vertical space.
- **Card grid**: 4-up → 2-up at 1056px → 1-up below 672px.
- **Display type**: `{typography.display-xl}` 76px scales toward 42px on mobile while preserving the weight-300 treatment.
- **Footer**: 6-column link grid → 3-column at tablet → 1-column at mobile.

### Image Behavior

- Customer logos in the marquee maintain aspect ratio and may collapse to 2-row scroll below 672px.
- Hero illustrations scale proportionally; below 672px they may stack above the headline rather than sit beside it.

## Iteration Guide

1. Focus on ONE component at a time and reference it by its `components:` token name.
2. Default body to `{typography.body}` at weight 400 with `letter-spacing: 0.16px`. Don't remove the tracking.
3. When introducing a new section, decide whether it sits on `#ffffff` (default) or on `#f4f4f4` (alternate band). The two-surface rhythm is the rhythm.
4. Run `npx @google/design.md lint DESIGN.md` after edits.
5. Add new variants as separate component entries (`button-primary-pressed`, `text-input-error`, `text-input-focused`).
6. Treat IBM Blue as scarce: links, primary CTA, CTA banner, focus underline. Anything beyond that is drift.
7. Resist rounded corners. If a designer pushes for 4px rounding, the brand is shifting away from Carbon.

## Known Gaps

- IBM's product surfaces (cloud-pak, watson, datacap) have richer Carbon component usage (data tables, graph cells, breadcrumbs, contextual menus) that aren't present on the marketing pages inspected — those components live in Carbon's documentation rather than in the marketing extraction.
- Form-field error and validation styling is documented in Carbon docs; the inspected pages didn't render error states.
- Dark mode is documented in Carbon as Gray-100 theme but isn't exposed on these marketing pages — only the footer inverts. The full dark theme is a separate Carbon palette not extracted here.
- The community.ibm.com sub-domain uses a different chrome (community-platform white-label) that approximates Carbon but isn't strict — the documented system applies to ibm.com proper.
