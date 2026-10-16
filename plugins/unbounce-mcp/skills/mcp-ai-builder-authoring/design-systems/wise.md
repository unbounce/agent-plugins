# Design System: Wise

## Overview

Wise — the global money-transfer brand — wears its identity in a single signature pairing: a vivid lime-green `#9fe870` (`#9fe870`) used as the CTA pill and brand accent, set against a pale sage-tinted canvas `#e8ebe6` (`#e8ebe6`) that runs across the hero band, and a near-black ink `#0e0f0c` (`#0e0f0c`) with a hint of warmth from the brand's underlying olive cast. The brand reads more like a calm Scandinavian magazine than a bank — generous whitespace, large rounded cards, and an unusually heavy display sans set at weight 900 carrying every hero headline.

Display typography is the second decisive voice. The proprietary `Wise Sans` family carries hero displays at weight 900 in scales from 64 px up to 126 px on the largest hero. The brand pairs Wise Sans 900 with Inter at weight 600 for sub-displays — the contrast between the chunky proprietary face and Inter's neutrality creates a particular hierarchy: Wise Sans for the brand moment, Inter for everything else.

Cards are universally pill-rounded — `24px` 24 px is the brand's signature card radius. Buttons take the same 24 px pill-rectangle shape. The brand never uses sharp corners on UI elements; the visual softness is part of the friendly fintech voice.

**Key Characteristics:**
- A single lime-green CTA accent `#9fe870` (`#9fe870`) — the brand's universal primary action color. No second accent.
- Two-face display typography — Wise Sans (proprietary, weight 900, hero scale) + Inter (weight 600, sub-display scale). The contrast is the brand's typographic story.
- `24px` 24 px is the canonical card and button radius. Generous, friendly.
- Sage-tinted canvas `#e8ebe6` (`#e8ebe6`) is the brand's hero surface; white `#ffffff` is reserved for cards within the sage band.
- A full semantic palette: positive green family, warning yellow family, negative red family — each documented with content / hover / active variants for in-product use.
- Currency-converter card on the hero — the brand's signature interactive component, hosting from/to amount inputs.

## Colors

### Brand & Accent
- **Wise Green** (`#9fe870` — `#9fe870`): The brand's universal CTA color. Every primary button, every "Send money" pill, the brand's logo accent.
- **Wise Green Hover** (`#cdffad` — `#cdffad`): The lighter green for active state.
- **Wise Green Neutral** (`#c5edab` — `#c5edab`): A mid-saturation green used as a neutral active fill.
- **Wise Green Pale** (`#e2f6d5` — `#e2f6d5`): The lightest green for soft surface tints / badge backgrounds.

### Surface
- **Canvas** (`#ffffff` — `#ffffff`): Pure white for card interiors.
- **Canvas Soft** (`#e8ebe6` — `#e8ebe6`): The sage-tinted page background. Defining mood of the brand.

### Text
- **Ink** (`#0e0f0c` — `#0e0f0c`): Near-black with a hint of olive warmth — the brand's default text and headings color.
- **Ink Deep** (`#163300` — `#163300`): A deep forest-green ink used on positive-state surfaces.
- **Body** (`#454745` — `#454745`): Secondary body text.
- **Mute** (`#868685` — `#868685`): Lowest-priority text — captions, placeholder, fine print.

### Semantic
- **Positive** (`#2ead4b` — `#2ead4b`): Success indicator.
- **Positive Deep** (`#054d28` — `#054d28`): Pressed positive state.
- **Warning** (`#ffd11a` — `#ffd11a`): Caution indicator.
- **Warning Deep** (`#b86700` — `#b86700`): Pressed warning.
- **Warning Content** (`#4a3b1c` — `#4a3b1c`): Text on warning surfaces.
- **Negative** (`#d03238` — `#d03238`): Destructive / error red.
- **Negative Deep** (`#a72027` — `#a72027`): Pressed destructive.
- **Negative Darkest** (`#a7000d` — `#a7000d`): Highest-emphasis destructive text.
- **Negative Bg** (`#320707` — `#320707`): Dark maroon for destructive callout backgrounds.

### Brand Accent — Tertiary
- **Accent Orange** (`#ffc091` — `#ffc091`): Bright peach used inside illustrative content / pricing cards.
- **Accent Cyan** (`#38c8ff` — `#38c8ff`): Bright sky-blue used as a tertiary illustration accent.

## Typography

### Font Family
Two faces ladder the system:
1. **Wise Sans** — proprietary geometric sans with an unusually heavy weight 900 used for all hero displays. The face is the brand's typographic signature. Always at weight 900, never lighter on the marketing surface.
2. **Inter** — used for sub-displays (weight 600), all body, and form labels. Loaded with `font-feature-settings: "calt"` for contextual alternates.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-mega}` | 126px | 900 | 107.1px | 0 | Hero stencil at maximum scale. |
| `{typography.display-xxl}` | 96px | 900 | 81.6px | 0 | Sub-hero scale. |
| `{typography.display-xl}` | 64px | 900 | 54.4px | 0 | Standard hero headline. |
| `{typography.display-lg}` | 47px | 400 | 70.5px | -0.108px | Lighter sub-display. |
| `{typography.display-md}` | 40px | 900 | 34px | 0 | Section / card headlines. |
| `{typography.display-sm}` | 32px | 600 | 38.4px | -0.96px | Inter-rendered section headings. |
| `{typography.display-xs}` | 24px | 600 | 31.2px | -0.48px | Sub-section displays. |
| `{typography.body-lg}` | 20px | 400 | 30px | 0 | Lead paragraphs. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body. |
| `{typography.body-md-strong}` | 16px | 600 | 24px | 0 | Bold inline body. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body. |
| `{typography.body-sm-strong}` | 14px | 600 | 20px | 0 | Bold caption / nav-link. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Fine print. |
| `{typography.button-md}` | 16px | 600 | 24px | 0 | Button label. |

### Principles
- **Weight 900 for hero, weight 600 for everything else.** The brand's display ceiling is full-black weight; everything below is semibold.
- **Wise Sans for the brand voice, Inter for utility.** Strict role separation.

### Note on Font Substitutes
Wise Sans is proprietary. Open-source substitutes:
- **Display** — *Inter* at weight 900 or *Manrope* at weight 800 / 900 captures the geometric heaviness. *Geist* weight 800 is a passable second choice.
- **Sub-display + body** — *Inter* is the brand's actual second face.

## Layout

### Spacing System
- **Base unit**: 4 px.
- **Tokens**: `2px` 2 px · `4px` 4 px · `8px` 8 px · `12px` 12 px · `16px` 16 px · `24px` 24 px · `32px` 32 px · `48px` 48 px.
- **Section padding**: bands use `48px` 48 px top/bottom on desktop.
- **Card interior**: cards at `24px` 24 px.

### Grid & Container
- Marketing container centres at ~1200 px.
- Hero: split layout (headline left, currency-converter card right) at desktop; stacked at mobile.
- Feature grids: 2-up / 3-up at desktop.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hero stacks; converter card full-width below headline; grids 1-up. |
| Tablet | 768–1023px | Grids 2-up. |
| Desktop | ≥ 1024px | Hero split; full grids. |

#### Touch Targets
Buttons render ~48 px tall (12 vertical padding + 24 line). WCAG AAA at all widths.

#### Image Behavior
Photography is sparse; the brand prefers illustrative SVGs and product mockups inside cards. Country flag thumbnails appear inside currency rows.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default. |
| Level 1 — Hairline on Dark | 1 px solid `#0e0f0c` border. | Tertiary outline buttons, form inputs. |
| Level 2 — Soft Card | Implicit Level 0 white card sitting on sage canvas — the surface contrast IS the elevation. | Cards on the sage hero band. |

The brand uses surface contrast (`#e8ebe6` background vs `#ffffff` cards) as the primary elevation cue.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Full-bleed bands. |
| `8px` | 8px | Inline pills, small badges. |
| `12px` | 12px | Form inputs, smaller chrome. |
| `16px` | 16px | Mid-size cards. |
| `24px` | 24px | The brand's canonical button + card radius. |
| `9999px` | 9999px | Status pills and full-radius accents. |
| `9999px` | 9999px | Circular icon containers. |

## Components

### Buttons

**`button-primary`** — the lime-green CTA pill.
- Background `#9fe870`, text `#0e0f0c`, label `{typography.button-md}`, padding `12px 24px`, shape `24px` 24 px.

**`button-secondary`** — the sage-tinted secondary.
- Background `#e8ebe6`, text `#0e0f0c`, same typography / padding / shape.

**`button-tertiary`** — the white outline tertiary.
- Background `#ffffff`, text `#0e0f0c`, 1 px solid `#0e0f0c` border, same typography / padding / shape.

**`button-icon-circular`** — the circular icon button.
- Background `#ffffff`, ink icon, shape `9999px`.

### Cards & Containers

**`card-content`** — the default white card.
- Background `#ffffff`, text `#0e0f0c`, padding `24px`, shape `24px`. No border, sits on sage canvas.

**`card-feature-sage`** — the sage-tinted feature card.
- Background `#e8ebe6`, text `#0e0f0c`, padding `24px`, shape `24px`.

**`card-feature-green`** — the soft-green feature card.
- Background `#e2f6d5`, text `#0e0f0c`, padding `24px`, shape `24px`.

**`card-feature-dark`** — the polarity-flipped dark card with green text.
- Background `#0e0f0c`, text `#9fe870` (Wise green!), padding `24px`, shape `24px`. Used for promotional moments.

**`currency-converter-card`** — the brand's signature interactive widget.
- Background `#ffffff`, text `#0e0f0c`, 1 px solid `#0e0f0c` border, padding `24px`, shape `24px`. Hosts from/to amount inputs + currency selectors.

### Inputs & Forms

**`text-input`** — the canonical text input.
- Background `#ffffff`, text `#0e0f0c`, 1 px solid `#0e0f0c` border, body in `{typography.body-md}`, padding `12px 16px`, shape `12px`.

### Navigation

**`nav-bar`** — the sticky top nav.
- Background `#ffffff`, text `#0e0f0c`, padding `12px 24px`.

**`nav-link`** — link items inside nav.
- Text `#0e0f0c`, set in `{typography.body-sm-strong}`.

**`footer`** — the dark footer band.
- Background `#0e0f0c`, text `#e8ebe6`, padding `48px 24px`. Body in `{typography.body-sm}`.

### Signature Components

**`hero-band`** — the sage-canvas hero band.
- Background `#e8ebe6`, text `#0e0f0c`, padding `48px 24px`. Headline in `{typography.display-mega}` (Wise Sans weight 900).

**`hero-band-dark`** — the polarity-flipped dark hero.
- Background `#0e0f0c`, text `#9fe870` (Wise green headline on near-black!), same padding / scale.

**`content-band`** — the white content band that follows hero.
- Background `#ffffff`, text `#0e0f0c`, padding `48px 24px`. Section headline in `{typography.display-md}`.

**`badge-positive`** — the positive status pill.
- Background `#e2f6d5`, text `#054d28`, body in `{typography.body-sm-strong}`, padding `4px 12px`, shape `9999px`.

**`badge-negative`** — the negative status pill.
- Background `#320707`, text white, body in `{typography.body-sm-strong}`, padding `4px 12px`, shape `9999px`.

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
- Reserve `#9fe870` Wise green for every primary CTA. The lime-green pill IS the brand's conversion signature.
- Set hero headlines in `{typography.display-mega}` / `{typography.display-xl}` Wise Sans weight 900. Never lighter.
- Use `24px` 24 px for buttons and cards. The generous radius is the brand's friendliness signature.
- Cycle page surfaces in `#e8ebe6` sage canvas → `#ffffff` white cards. Surface contrast carries elevation.
- Use the full semantic palette (positive / warning / negative) for in-product status — never repurpose Wise green as success indicator since it IS the brand CTA.

### Don't
- Don't introduce a second brand accent. Wise green is the sole identity colour.
- Don't render the hero in weight 700 or lighter. The brand's display weight is 900.
- Don't render CTAs as sharp rectangles. The 24 px pill geometry is non-negotiable.
- Don't pair the green CTA with a green background. The brand always sits Wise green on neutral surfaces (sage / white / ink).
- Don't replace Wise Sans with a generic geometric sans for hero typography — the proprietary face IS the brand's voice.
