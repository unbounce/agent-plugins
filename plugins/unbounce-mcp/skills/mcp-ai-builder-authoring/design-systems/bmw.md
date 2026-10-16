# Design System: BMW

## Overview

BMW's corporate site carries a far more **measured, corporate-automotive** interface than its motorsport-bombastic cousin BMW M. The atmosphere is light: `#ffffff` (#ffffff) is the base surface, `#fafafa` (#fafafa) carries the soft-grey card plates, and dark navy `#1a2129` (#1a2129) appears only inside hero bands — one per page, framing the lead model render.

Type runs BMW's licensed **BMW Type Next Latin** at two weights: heavy 700 (display + button + nav) and Light 300 (body + secondary copy). That contrast — heavy display next to thin paragraph — is the editorial signature, channeling the brand's "European-engineered" voice. Weight 500 is deliberately absent; weight 400 only appears on caption and nav-link in neutral utility contexts.

The brand action color, **BMW corporate blue** (`#1c69d4` — #1c69d4), works alone across every primary CTA — buttons are **rectangular, 0px corner**, with white type. The site rotates a blue-button + dark-navy-hero combination across page rhythm. The M tricolor stripe (`#0066b1` → `#1c69d4` → `#e22718`) only appears in motorsport contexts and as M-model badges/dividers — never in the corporate site's main language.

The configuration and reservation flows add a dealer-side inventory UI on top of the same system — filter chips, model cards, price tables — but typography and color stay identical; only density goes up.

**Key Characteristics:**
- Light `#ffffff` is the base surface; dark navy `#1a2129` appears only inside hero bands — page rhythm relies on contrast.
- BMW corporate blue (`#1c69d4` — #1c69d4) acts as the single primary action color.
- BMW Type Next Latin: weight 700 display against weight 300 body is the signature.
- Buttons are **rectangular, 0px radius** — corporate dialect, distinct from M's sportier radii.
- Model cards run as 4-up or 5-up grids with no hairline border or only minimal border — just white plate + photo + title.
- Photography (model renders) sits in environment, no shadow — depth comes entirely from color-block contrast.
- M tricolor stripe appears only in M-model contexts — not part of the corporate language.
- Section rhythm holds at `80px` (80px) for every major band.

## Colors

### Brand & Accent
- **BMW Blue (Primary)** (`#1c69d4` — #1c69d4): The single brand action color. All primary CTAs, "Learn More" link prefixes (blue text), nav-link active state. Press shifts to `#0653b6` (#0653b6).
- **M Blue Light** (`#0066b1` — #0066b1) + **M Blue Dark** (`#1c69d4` — #1c69d4) + **M Red** (`#e22718` — #e22718): The M tricolor stripe — appears on the corporate site only on M-model pages and the "M" badge. Never as CTA colors.

### Surface
- **Canvas** (`#ffffff` — #ffffff): The default page surface.
- **Surface Soft** (`#f7f7f7` — #f7f7f7): Soft grey for the footer and sub-navigation bands.
- **Surface Card** (`#fafafa` — #fafafa): The light plate behind a model card's photo block.
- **Surface Strong** (`#ebebeb` — #ebebeb): A slightly heavier grey used as a section divider.
- **Surface Dark** (`#1a2129` — #1a2129): Dark navy for hero bands and large dark CTAs. Not pure black — carries a warm undertone.
- **Surface Dark Elevated** (`#262e38` — #262e38): One step lighter, used for nested cards on top of the dark hero.

### Hairlines
- **Hairline** (`#e6e6e6` — #e6e6e6): The 1px divider — input outline, configurator card outline, table separator.
- **Hairline Strong** (`#cccccc` — #cccccc): A more visible 1px outline — disabled secondary buttons, emphasized table border.

### Text
- **Ink** (`#262626` — #262626): All display and primary text. Not pure black — soft against photography.
- **Body** (`#3c3c3c` — #3c3c3c): Default running text.
- **Body Strong** (`#1a1a1a` — #1a1a1a): Emphasized paragraphs and lead text.
- **Muted** (`#6b6b6b` — #6b6b6b): Footer links, breadcrumbs, captions.
- **Muted Soft** (`#9a9a9a` — #9a9a9a): Disabled text, fine-print legal.
- **On Primary** (`#ffffff` — #ffffff): White text on a blue button.
- **On Dark** (`#ffffff` — #ffffff): White text on a dark hero band.
- **On Dark Soft** (`#bbbbbb` — #bbbbbb): A slightly muted white for secondary text on dark bands.

### Semantic
- **Success** (`#22c55e` — #22c55e): Confirmation messages and "available" indicators.
- **Warning** (`#f59e0b` — #f59e0b): Warning callouts.
- **Error** (`#dc2626` — #dc2626): Validation errors.

## Typography

### Font Family
The system runs **BMW Type Next Latin** in two cuts: regular (display + UI labels) and **BMW Type Next Latin Light** (body + secondary copy). Fallback stack: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

The display/body split is functional:
- BMW Type Next Latin (700) → display headlines, button labels, nav links
- BMW Type Next Latin Light (300) → paragraphs, descriptive copy
- BMW Type Next Latin (400) → caption, neutral nav-link contexts

This three-way split mirrors BMW M's — corporate and the M sub-brand share the same typographic DNA; only the weight/size ratios differ.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 700 | 1.05 | 0 | Hero h1 ("iX3", model name) |
| `{typography.display-lg}` | 48px | 700 | 1.1 | 0 | Section heads |
| `{typography.display-md}` | 32px | 700 | 1.15 | 0 | Sub-section heads |
| `{typography.display-sm}` | 24px | 700 | 1.25 | 0 | CTA-band headlines |
| `{typography.title-lg}` | 20px | 700 | 1.3 | 0 | Card group titles |
| `{typography.title-md}` | 18px | 700 | 1.4 | 0 | Model card title, intro paragraphs |
| `{typography.title-sm}` | 16px | 700 | 1.4 | 0 | Inventory card title, list label |
| `{typography.body-md}` | 16px | 300 (Light) | 1.55 | 0 | Default body — BMW Type Next Latin Light |
| `{typography.body-sm}` | 14px | 300 (Light) | 1.55 | 0 | Footer body, fine-print |
| `{typography.caption}` | 12px | 400 | 1.4 | 0.5px | Photo captions, meta |
| `{typography.label-uppercase}` | 13px | 700 | 1.3 | 1.5px | "LEARN MORE" inline links, category tabs |
| `{typography.button}` | 14px | 700 | 1.0 | 0.5px | Standard CTA button label |
| `{typography.nav-link}` | 14px | 400 | 1.4 | 0.3px | Top-nav menu items |

### Principles
- The **700/300 contrast** is the editorial signature. Weight 500 is absent from the system.
- **No negative letter-spacing** — BMW Type Next Latin works on a wide body, so tracking stays at default. Apple/Cal.com-style tightening reads off-brand here.
- **UPPERCASE inline links** — "LEARN MORE"-style CTAs run uppercase with 1.5px tracking. The "machined precision" voice.
- **Weight 400 lives in a narrow lane** — only caption and nav-link, both neutral utility roles.

### Note on Font Substitutes
BMW Type Next Latin is a licensed BMW typeface. Open-source alternatives:
- **Inter** (variable) — close match at weight 700/300. Leave letter-spacing at 0.0em.
- **Saira Condensed** — for a slightly more compressed BMW Type feel.

## Layout

### Spacing System
- **Base unit:** 8px.
- **Tokens:** `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `24px` 24px · `32px` 32px · `48px` 48px · `80px` 80px.
- **Section padding:** `80px` (80px) for every major editorial band.
- **Card internal padding:** `24px` (24px) for model and feature cards.

### Grid & Container
- **Max content width:** ~1440px center-aligned.
- **Editorial body:** A single 12-column grid.
- **Model card grids:** 4-up or 5-up at desktop, 2-up at tablet, 1-up on mobile.
- **Configurator inventory grids:** 3-up filter row + 4-up vehicle cards, dense layout.

### Whitespace Philosophy
BMW's whitespace strategy is tighter than BMW M's motorsport-aerated grenadier — the corporate side is more utility-driven. Section rhythm is 80px (not M's 96px). Card padding is 24px (not M's 32px). The page is denser, more dealership-functional.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body, top nav, footer, hero bands |
| Soft hairline | 1px `#e6e6e6` border | Configurator option tile, table divider |
| Card surface | `#fafafa` background — no shadow | Model card photo plate |
| Photographic | Edge-to-edge photography | Hero band, model renders |

The system never uses a drop shadow. Depth comes entirely from (a) color-block contrast (light canvas vs dark hero) and (b) photographic subject + lighting.

### Decorative Depth
- **`m-stripe-divider`** — a 4px-tall horizontal tricolor stripe (`#0066b1` → `#1c69d4` → `#e22718`). Only in M-model contexts, motorsport badges, or as an M-related section divider. Not part of the main corporate flow.
- **Photographic depth** — full-bleed vehicle photography (lighting + subject) does the work chrome would otherwise do.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Every button, card, input, configurator chip — the dominant radius |
| `2px` | 2px | Very small badges, very rare |
| `4px` | 4px | Small inline button (rare) |
| `8px` | 8px | Mobile-only collapse cards (rare) |
| `12px` | 12px | Very rare — modal/dialog corners |
| `9999px` | 9999px | Filter chips in some contexts (rare) |
| `9999px` | 9999px / 50% | Avatar, circular icon button |

The radius hierarchy is binary: **rectangular for everything, circular only for icon buttons.** A clear departure from the soft-cornered SaaS dialect of Apple or Cal.com — closer to BMW corporate-automotive's "engineered precision" voice.

### Photography Geometry
- Hero photography is full-bleed at 16:9 or 21:9 cinematic ratio.
- Model card photos sit at 16:10, edge-to-edge with `0px` corners.
- Configurator vehicle renders sit on a white studio background, full silhouette visible.

## Components

### Top Navigation

**`top-nav`** — A white sticky nav bar pinned to the top of the page. 64px tall, `#ffffff` background. Left: BMW circular badge logo; center: primary horizontal menu (Models, Next Generation, Pre-Owned, Dealers, Test Drive); right: cart icon, language picker, profile. Menu items render in `{typography.nav-link}` (14px / 400 / 0.3px tracking).

### Buttons

**`button-primary`** — The signature primary CTA. Background `#1c69d4` (BMW Blue #1c69d4), text `#ffffff`, type `{typography.button}` (BMW Type Next Latin 14px / 700 / 0.5px tracking), padding 14px × 32px, height 48px, rounded `0px` (0px — rectangular). Press state: `button-primary-active` shifts to `#0653b6`.

**`button-secondary`** — A white button with a hairline outline. Background `#ffffff`, text `#262626`, 1px `#cccccc` border, same padding + height + radius.

**`button-secondary-on-dark`** — Used over a dark hero band. Background transparent, text `#ffffff`, 1px `#ffffff` border, same rectangular shape.

**`button-text-link`** — An inline UPPERCASE letter-spaced link. No background, text `#262626`, type `{typography.label-uppercase}` (13px / 700 / 1.5px tracking). Reads as "LEARN MORE", terminated by a `›` chevron.

**`text-link`** — An inline link inside body copy. `#262626` text, no underline by default; underlines per context.

### Cards & Containers

**`hero-band-dark`** — Full-width dark navy hero. Background `#1a2129`, text `#ffffff`, vertical padding `80px` (80px). Centered: model name in `{typography.display-xl}` (64px / 700) + sub-headline + vehicle render (right-aligned or below). A single `{component.button-primary}` (blue) or `{component.button-secondary-on-dark}`.

**`hero-photo-band`** — A light-canvas model showcase band. Background `#ffffff`, text `#262626`. The vehicle render takes the wide area; right or below, a headline + two link CTAs + sub-tagline.

**`model-card`** — Used in 4-up or 5-up model card grids on the homepage ("BMW iX3", "BMW iX", "BMW 5 Series"). Background `#ffffff`, rounded `0px`, padding `24px` (24px). Contents: model render at the top (`{component.model-card-photo}` on `#fafafa`), model name in `{typography.title-md}` (18px / 700) below, a one-line tagline in `{typography.body-sm}` (14px / 300), and a `{component.button-text-link}` ("LEARN MORE ›").

**`model-card-photo`** — The card's photo plate. Background `#fafafa` (#fafafa — soft grey), rounded `0px`, vehicle render in full silhouette. Zero padding — the photo runs edge-to-edge.

**`feature-photo-card`** — A feature/lifestyle card. Background `#ffffff`, padding `24px`. 16:9 photo at the top, `{typography.title-md}` headline + body excerpt below.

**`spec-cell`** — A technical spec cell (model detail page). Transparent background, separated by hairline dividers. Value on top (`{typography.display-sm}` 24px / 700), label below (`{typography.label-uppercase}`).

### Inventory & Configurator

**`inventory-card`** — One card per vehicle on the dealer inventory page. Background `#ffffff`, padding `16px` (16px), rounded `0px`. Vehicle photo on top, model + variant name + price + "View" link below.

**`filter-chip`** + **`filter-chip-active`** — Inventory filter chips (model, year, price range). Inactive: background `#ffffff`, 1px `#cccccc` border, text `#262626`, type `{typography.caption}`. Active: background `#262626`, text `#ffffff`. Padding 8px × 14px, radius `0px`.

**`configurator-option-tile`** + **`configurator-option-tile-selected`** — Configurator selection cell (color, wheels, upholstery). Inactive: background `#ffffff`, 1px hairline. Selected: 2px `#1c69d4` border. Padding 16px × 24px, radius `0px`.

### Inputs & Forms

**`text-input`** — Standard text input. Background `#ffffff`, text `#262626`, type `{typography.body-md}`, rounded `0px` (0px), padding 14px × 16px, height 48px, 1px hairline border. On focus, the border thickens to ink.

**`cookie-consent-card`** — Cookie banner. Background `#ffffff`, 1px hairline, padding `24px` (24px), `{typography.body-sm}` (14px / 300 — Light even in legal copy).

### Tabs / Tags

**`category-tab`** + **`category-tab-active`** — Category sub-nav. Inactive: transparent + `#6b6b6b` UPPERCASE label. Active: transparent + `#262626` UPPERCASE label + 2px ink underline. 12px vertical padding, no horizontal radius.

### Brand Signature

**`m-stripe-divider`** — A 4px-tall horizontal tricolor stripe (`#0066b1` → `#1c69d4` → `#e22718`). Only in M-model contexts, motorsport badges, or as an M-related section divider. Absent from the corporate main flow; on M-model detail pages and the M Performance badge it plays an inline divider role.

### CTA / Footer

**`cta-band-photo`** — A pre-footer "Discover the New iX3"-style band. Background `#1a2129` with a full-bleed vehicle photo. Centered headline in `{typography.display-md}` (32px / 700) + a single `{component.button-secondary-on-dark}`. 80px padding.

**`footer`** — The closing soft-grey footer. Background `#f7f7f7` (#f7f7f7 — not pure white — soft grey), text `#3c3c3c`. A 4-column link list: Models / Services / Dealers / About. Vertical padding 64px. Below, a copyright line in `{typography.body-sm}` with `#6b6b6b`.

## Do's and Don'ts

### Do
- Sit every page on `#ffffff` (pure white); reserve `#1a2129` for hero bands only.
- Pair primary CTAs with `#1c69d4` (BMW Blue) + `#ffffff` white text + `0px` 0px corners — the corporate signature.
- Set display headlines in BMW Type Next Latin 700 and body in Light 300. The contrast is non-negotiable.
- Use UPPERCASE letter-spaced links like "LEARN MORE" as inline CTAs.
- Place the model card photo on `#fafafa` with the title beneath — the standard BMW corporate pattern.
- Hold section rhythm at `80px` (80px) — tighter than BMW M's 96px.
- Reserve the M tricolor stripe for M-model contexts and motorsport dividers.

### Don't
- Don't add a brand color other than blue — BMW Blue is the only primary action color.
- Don't use pill or rounded buttons — `0px` (0px) rectangular IS the brand button.
- Don't drop display weight to 500 — the system uses 700 / 400 / 300; 500 is absent.
- Don't bold body type — Light 300 is the BMW corporate editorial voice.
- Don't add drop shadows to cards — depth comes from photo + color-block contrast.
- Don't repeat the same surface mode across two consecutive bands — light → dark hero → light → light feature → dark CTA → light footer rotation is required.
- Don't use the M tricolor stripe as a CTA fill — divider/accent role only.
- Don't mix languages in a single page — UI language must stay consistent.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→40px; model card grid 1-up; configurator filter chips 2-up; footer 4 col → 1 col |
| Tablet | 768–1024px | Top nav narrows, secondary menu hides under "More"; model card 2-up; inventory 2-up |
| Desktop | 1024–1440px | Full top-nav; 4-up or 5-up model card grid; inventory 3-up; full configurator UI |
| Wide | > 1440px | Same as desktop, content fixed at 1440px; gutters absorb the rest |

### Touch Targets
- `{component.button-primary}` minimum 48 × 48px — above WCAG AAA (44 × 44).
- `{component.text-input}` height 48px.
- Category tabs run with 12px vertical padding, giving an effective tap area > 44px.

### Collapsing Strategy
- The top nav collapses to a hamburger below 768px; the menu opens as a full-screen sheet.
- The hero band's internal layout drops to a single column.
- Model card grid 4-up/5-up → 2-up → 1-up.
- The configurator filter chip row scrolls horizontally on mobile.
- The M tricolor stripe stays at 4px height across every breakpoint.

### Image Behavior
- Model renders scale at every breakpoint while preserving native aspect ratios.
- Hero photography may shift to a more vertical crop on mobile (art direction).
- Inventory vehicle photos may move from 16:9 to 4:3 on mobile.

## Iteration Guide

1. Focus on a single component. Reference its YAML key directly (`{component.model-card}`, `{component.button-primary}`).
2. New components default to `0px` (0px). Use `9999px` only for circular icon buttons.
3. Variants (`-active`, `-disabled`, `-selected`) live as separate entries inside the `components:` block.
4. `{token.refs}` everywhere — never inline hex.
5. Hover state is never documented. Only Default and Active/Pressed states.
6. Display headlines stay BMW Type Next Latin 700; body stays Light 300; the trio is fixed.
7. Keep UI strings in a single language — match the locale of the page.

## Known Gaps

- BMW Type Next Latin is licensed to BMW and not published as a public web font; Inter at weights 700/300 is documented as the substitute.
- Animation and transition timings (configurator color swap, model card hover-reveal) are out of scope here.
- Form validation states beyond `{component.text-input}` focus were not extracted — error/success states would need a dedicated form page.
- The dealer inventory sub-domain shares typography and color with the main corporate site; only UI density rises (filters, tables, prices).
- A cookie consent overlay can occlude part of the hero — the lead hero band content may not be fully captured.
- The M tricolor stripe appears infrequently on this corporate site; full motorsport context lives on the BMW M site.
