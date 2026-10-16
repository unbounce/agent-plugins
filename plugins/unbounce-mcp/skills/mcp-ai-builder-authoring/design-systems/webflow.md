# Design System: Webflow

## Overview

Webflow positions itself as the visual web development platform — the marketing surface reads as a confident professional product, not a tech startup. The default page is a generous white canvas (`#ffffff`) with a deep near-black `#080808` (`#080808`) for the brand's primary CTA, typography, and ink. Around this restrained primary, the brand layers a five-stop chromatic accent system — `#7a3dff` `#7a3dff`, `#ed52cb` `#ed52cb`, `#3b89ff` `#3b89ff`, `#ff6b00` `#ff6b00`, `#00d722` `#00d722` — each mapped to one of the platform's product categories (design, CMS, hosting, ecommerce, etc.). These accents appear as full-card fills inside the product-category grid, not as button colours; the brand's primary CTA stays near-black.

Type carries the second decisive voice. The proprietary `WF Visual Sans Variable` family carries every display, body, and label role at weight 500 / 600 — the brand never goes heavier than semibold, never lighter than regular. Hero display sits at 80 px / weight 600 / `-0.8 px` tracking — confident but not shouting. Uppercase eyebrows in 15 px weight 500 with `1.5 px` positive tracking mark every section header.

The shape system is restrained. Buttons take a tight `4px` 4 px radius — neither pill nor square; the brand reads as engineered. Cards step up to `8px` 8 px. Pill (`9999px` 9999 px) is reserved for circular icon containers. Layered drop-shadows on featured cards add modest elevation but never feel material-heavy.

**Key Characteristics:**
- A two-colour conversion hierarchy — `#080808` near-black for every primary CTA, white-on-hairline for every secondary. Chromatic accents are used as full surface fills on category cards, never as button backgrounds.
- The brand's signature is its **five-stop chromatic category palette**: purple / pink / blue / orange / green, each tied to a product surface. Used at full saturation as card fills.
- Hero typography at 80 px weight 600 with `-0.8 px` tracking — restrained, confident, never billboard-loud.
- WF Visual Sans Variable is the single family; the brand uses no separate sans for body / display. WFVisualSans-Mono / Inconsolata appears only for technical captions.
- Tight `4px` 4 px button geometry; cards at `8px` 8 px. The brand never uses pill CTAs.
- Layered multi-offset drop-shadows on featured cards — the brand's only elevation cue.

## Colors

### Brand & Accent
- **Ink Black** (`#080808` — `#080808`): The brand's primary conversion colour. Every primary CTA, every heading, every wordmark. Deeper than pure black to read as branded.
- **Accent Purple** (`#7a3dff` — `#7a3dff`): One of the five chromatic category accents — used for design / build product surfaces.
- **Accent Pink** (`#ed52cb` — `#ed52cb`): Magenta accent — used for animation / interaction product surfaces.
- **Accent Blue** (`#3b89ff` — `#3b89ff`): Bright cyan-blue — used for SEO / analytics product surfaces.
- **Accent Blue Deep** (`#006acc` — `#006acc`): The deeper blue used for emphasis links.
- **Accent Blue Info** (`#146ef5` — `#146ef5`): The badge-info blue.
- **Accent Orange** (`#ff6b00` — `#ff6b00`): Used for hosting / infrastructure product surfaces.
- **Accent Green** (`#00d722` — `#00d722`): Used for ecommerce / status-success surfaces.
- **Accent Yellow** (`#ffae13` — `#ffae13`): Used for warning / collaboration product surfaces.
- **Accent Red** (`#ee1d36` — `#ee1d36`): Used for error / destructive states.

### Surface
- **Canvas** (`#ffffff` — `#ffffff`): The default page background.
- **Hairline** (`#d8d8d8` — `#d8d8d8`): 1 px solid borders — input borders, card chrome, divider lines.

### Text
- **Ink** (`#080808` — `#080808`): Default text and headings.
- **Ink Strong** (`#222222` — `#222222`): Near-black emphasis.
- **Body** (`#363636` — `#363636`): Default body paragraph color.
- **Body Mid** (`#5a5a5a` — `#5a5a5a`): Mid-emphasis secondary text — footer lines, captions.
- **Mute** (`#898989` — `#898989`): Lower-priority text.
- **Mute Soft** (`#ababab` — `#ababab`): The lightest text role — placeholder text, fine print.

### Semantic
- **Info Blue** (`#146ef5` — `#146ef5`): Info badge / notification.
- **Success Green** (`#00d722` — `#00d722`): Success indicators.
- **Warning Yellow** (`#ffae13` — `#ffae13`): Warning states.
- **Error Red** (`#ee1d36` — `#ee1d36`): Validation / destructive.

## Typography

### Font Family
A single proprietary family carries every typographic role: **WF Visual Sans Variable** (with `Arial` system fallback). Weights 400 / 500 / 550 / 600 are present; the brand never uses 700 / 800 / 900. A monospace variant — **WFVisualSans-Mono** with `Inconsolata` fallback — handles rare technical caption moments and code-style labels. OpenType features `"ss02"`, `"ss10"`, `"zero"` are enabled in the mono variant for the styled zero glyph.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 80px | 600 | 83.2px | -0.8px | Hero headline. |
| `{typography.display-xl}` | 56px | 600 | 58.24px | 0 | Sub-hero displays. |
| `{typography.display-lg}` | 44.8px | 600 | 46.6px | 0 | Section headlines. |
| `{typography.display-md}` | 32px | 500 | 41.6px | 0 | Card-cluster headlines. |
| `{typography.display-sm}` | 24px | 500 | 31.2px | 0 | Sub-section displays. |
| `{typography.display-xs}` | 20px | 500 | 28px | 0 | Inline display micro-headings. |
| `{typography.eyebrow-uppercase}` | 15px | 500 | 19.5px | 1.5px | UPPERCASE eyebrow tags above sections. |
| `{typography.eyebrow-uppercase-sm}` | 12px | 500 | 12px | 0.6px | Small uppercase metadata. |
| `{typography.body-lg}` | 28.8px | 400 | 46.08px | -0.288px | Lead paragraphs. |
| `{typography.body-md}` | 16px | 400 | 25.6px | -0.16px | Default body. |
| `{typography.body-md-strong}` | 16px | 500 | 25.6px | -0.16px | Bolded inline body. |
| `{typography.body-sm}` | 14px | 400 | 22.4px | 0 | Secondary body. |
| `{typography.body-sm-strong}` | 14px | 500 | 22.4px | 0 | Bold caption / nav-link. |
| `{typography.caption}` | 12.8px | 550 | 15.36px | 0 | Badge labels (the brand's signature 550 weight). |
| `{typography.caption-mono}` | 12px | 400 | 18px | 0 | Mono code captions. |
| `{typography.button-md}` | 16px | 500 | 25.6px | -0.16px | Button labels. |

### Principles
- **Weight ceiling at 600.** The brand never uses 700+. Confident, not loud.
- **Negative tracking at display sizes.** `-0.8 px` at 80 px, scaling through. Tight kerning is part of the voice.
- **Uppercase eyebrows mark every section.** 15 px / weight 500 / `1.5 px` positive tracking is the brand's signature label style.
- **Single family across the system.** No separate display vs body face. The variable axes do the work.

### Note on Font Substitutes
WF Visual Sans Variable is proprietary. Open-source substitutes:
- **Display + body** — *Inter* weights 400 / 500 / 600 with `font-feature-settings: "ss01"` enabled is the closest stylistic match.
- **Mono** — *Inconsolata* (the documented fallback) or *DM Mono*.

## Layout

### Spacing System
- **Base unit**: 4 px (with frequent 0.4 / 0.8 sub-multiples for fine padding).
- **Tokens**: `2px` 2 px · `4px` 4 px · `8px` 8 px · `12px` 12 px · `16px` 16 px · `20px` 20 px · `24px` 24 px · `32px` 32 px.
- **Section padding**: hero / content bands use `32px` 32 px gutters with generous vertical spacing.
- **Card interior padding**: feature and pricing cards sit at `32px` 32 px.

### Grid & Container
- Marketing container is wide (effectively edge-to-edge with `32px` gutters).
- Category card grid: 2 / 3-up at desktop with mixed sizing (some larger feature cards span 2 columns).
- Pricing tier grid: 3-up at desktop, 1-up at mobile.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 479px | Hero stacks; all grids 1-up. |
| Mobile-Large | 479–767px | Same as Mobile. |
| Tablet | 768–991px | 2-up grids. |
| Desktop | ≥ 992px | Full multi-up grids. |

#### Touch Targets
Buttons render at ~44 px (12 px vertical padding + 25.6 px line-height). WCAG AAA met.

#### Collapsing Strategy
- Nav: full link row at desktop. Hamburger at mobile.
- Category card grid: 2 / 3 / 4-up at desktop, drops to 1-up at mobile.
- Pricing tier: 3 / 4-up at desktop, 1-up at mobile.

#### Image Behavior
- Category cards: full-bleed solid colour fills (no photography).
- Product screenshots: 16:9 inside `8px` card chrome.
- No portrait imagery in the marketing surface.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default bands. |
| Level 1 — Hairline | 1 px solid `#d8d8d8` border on `#ffffff`. | Default card chrome and input borders. |
| Level 2 — Layered Drop | Multi-stop layered shadow with subtle warm offsets — `0 84px 24px rgba(0,0,0,0), 0 54px 22px rgba(0,0,0,0.01), 0 30px 18px rgba(0,0,0,0.04), 0 13px 13px rgba(0,0,0,0.08), 0 3px 7px rgba(0,0,0,0.09)`. | Featured cards needing visible lift. |
| Level 3 — Layered Drop Strong | Deeper version of Level 2 with `0.12` final offset opacity. | Pricing / modal-level emphasis. |
| Level 4 — Heavy Modal | Extremely heavy multi-stop — `0 24px 24px rgba(0,0,0,0.26), 0 6px 13px rgba(0,0,0,0.29)` final stops. | Modal / dialog surfaces. |

### Decorative Depth
- The chromatic category cards (full-saturation purple / pink / blue / orange / green fills) provide visual depth through pure colour contrast against the white canvas.
- Layered shadow recipes are the brand's only true atmospheric effect — they're 5-stop drop-shadow stacks with very low individual opacities.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Full-bleed bands. |
| `2px` | 2px | Tight inline pills. |
| `4px` | 4px | The brand's canonical button + badge + small-element radius. |
| `8px` | 8px | Card chrome and feature / category cards. |
| `9999px` | 9999px | Circular icon containers only. |

## Components

### Buttons

**`button-primary`** — the canonical near-black CTA.
- Background `#080808` (`#080808`), text `#ffffff` white, label `{typography.button-md}` (16 px weight 500), padding `12px 20px`, shape `4px` 4 px.

**`button-secondary`** — the white outline CTA.
- Background `#ffffff`, text `#080808`, 1 px solid `#d8d8d8` border, same typography + padding + shape.

**`button-text-arrow`** — the underlined text-link CTA with arrow used in long-form sections.
- Background `#ffffff`, text `#080808`, no border, body in `{typography.button-md}`, padding `20px` 0.

**`button-icon-circular`** — the circular icon button for carousel controls.
- Background `#ffffff`, ink icon, shape `9999px`.

### Cards & Containers

**`card-feature`** — the canonical feature card on canvas.
- Background `#ffffff`, text `#080808`, 1 px solid `#d8d8d8`, padding `32px`, shape `8px`. Often elevated to Level 2 shadow when featured.

**`card-feature-dark`** — the polarity-flipped feature card on near-black.
- Background `#080808`, text `#ffffff`, padding `32px`, shape `8px`.

**`card-pricing`** — the pricing-tier card.
- Background `#ffffff`, text `#080808`, hairline border, padding `32px`, shape `8px`. Layered shadow on the featured tier.

### Inputs & Forms

**`text-input`** — the canonical text input.
- Background `#ffffff`, text `#080808`, 1 px solid `#d8d8d8`, body in `{typography.body-md}`, padding `12px 16px`, shape `4px`.

### Navigation

**`nav-bar`** — the sticky top nav.
- Background `#ffffff`, text `#080808`, padding `16px 32px`.

**`nav-link`** — link items inside `nav-bar`.
- Text `#080808`, set in `{typography.body-sm-strong}`.

**`footer`** — the footer band.
- Background `#ffffff`, text `#5a5a5a`, padding `32px 32px`. Body in `{typography.body-sm}`.

### Signature Components

**`hero-band`** — the white hero band.
- Background `#ffffff`, text `#080808`, padding `32px 32px`. Headline in `{typography.display-xxl}` (80 px weight 600).

**`hero-band-dark`** — the polarity-flipped near-black hero band (used on some campaign pages).
- Background `#080808`, text `#ffffff`, same padding / headline scale.

**`content-band`** — the standard content band on canvas.
- Background `#ffffff`, text `#080808`, padding `32px 32px`. Section headline in `{typography.display-lg}`.

**`category-card-purple`** — full-fill purple category card.
- Background `#7a3dff`, text white, padding `32px`, shape `8px`.

**`category-card-pink`** — full-fill pink category card.
- Background `#ed52cb`, text white, padding `32px`, shape `8px`.

**`category-card-blue`** — full-fill blue category card.
- Background `#3b89ff`, text white, padding `32px`, shape `8px`.

**`category-card-orange`** — full-fill orange category card.
- Background `#ff6b00`, text white, padding `32px`, shape `8px`.

**`category-card-green`** — full-fill green category card (uses ink text for legibility against the lighter green).
- Background `#00d722`, text `#080808` (ink), padding `32px`, shape `8px`.

**`badge-info`** + **`badge-info-soft`** — info badges in solid blue or soft outline.
- Filled: bg `#146ef5` text white. Soft: bg canvas, text `#146ef5`. Both at `{typography.caption}` (12.8 px weight 550) — the brand's signature 550-weight caption.

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
- Reserve `#080808` (`#080808`) for every primary CTA, every heading, and every wordmark. Near-black is the conversion colour.
- Use the five chromatic accents (purple / pink / blue / orange / green) as full-fill category cards, NOT as button backgrounds.
- Set hero headlines in `{typography.display-xxl}` weight 600 with `-0.8 px` tracking.
- Pair the proprietary WF Visual Sans family across every typographic role.
- Use `4px` 4 px for buttons, `8px` 8 px for cards. The brand never uses pill CTAs.
- Use layered multi-stop drop-shadows on featured cards — the brand's distinctive elevation recipe.

### Don't
- Don't promote button-medium weight to 700+. The brand's weight ceiling is 600.
- Don't use chromatic accents as button backgrounds. They're surface fills, not actions.
- Don't render CTAs as pills. The brand's button geometry is tight 4 px rectangle.
- Don't introduce a sixth accent colour. The 5-stop palette is the system.
