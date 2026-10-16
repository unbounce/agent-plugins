# Design System: Mistral AI

## Overview

Mistral AI carries itself with a singular, almost cinematographic visual signature — the homepage opens with "Frontier AI. In your hands." rendered in elegant near-serif display type over a photographic mountain landscape bathed in mustard-orange sunset light. Below the hero, every page closes with the same recognizable element: a horizontal "sunset stripe" gradient band running red→orange→yellow→cream that wraps the foot of the page just above the footer. This stripe is THE brand recognizer — it appears on the homepage, products/studio, solutions/coding, news articles, contact form, and services tier page without exception.

The system pairs PP Editorial Old (a near-serif elegant display face) for hero displays with Inter for everything else (body, headings, UI). Cream-yellow surfaces (#fff8e0, #fffaeb) anchor form panels and feature cards; saturated orange (#fa520f) carries primary CTAs; the deep mountain photography on the homepage and the dark code mockups inside Le Studio create photographic depth. Cards are rectangular with `12px` (12px) corners — distinctly less playful than Miro's or Mintlify's pill-buttons-everywhere approach. Buttons are also `8px` (8px), not pills — Mistral's geometry is more sober and editorial than its peers.

**Key Characteristics:**
- Atmospheric mountain-sunset hero photography (orange-red-yellow gradient sky)
- Horizontal "sunset stripe" band (#fa520f → #ffa110 → #ffd900 → #fff8e0) at every page bottom
- Cream-yellow surfaces (#fff8e0, {colors.cream-soft}) for form panels and feature cards
- PP Editorial Old (or similar near-serif) for hero displays; Inter for everything else
- `8px` (8px) buttons and `12px` (12px) cards — less playful, more editorial geometry
- Saturated orange primary CTA (#fa520f) carries every action call

## Colors

> Source pages: mistral.ai/ (homepage), /products/studio (Le Studio product), /solutions/coding (coding solution), /news/vibe-remote-agents-mistral-medium-3-5 (news), /contact (contact form), /services (services tiers). Token coverage was identical across all six pages.

### Brand & Accent
- **Mistral Orange** (#fa520f): Primary CTA color, brand orange
- **Orange Deep** (#cc3a05): Pressed-state and emphasis variant
- **Sunshine 300** (#ffd06a): Atmospheric light orange-yellow
- **Sunshine 500** (#ffb83e): Mid-spectrum sunset orange
- **Sunshine 700** (#ffa110): Saturated mid sunset gradient stop
- **Sunshine 800** (#ff8105): Deep sunset gradient stop
- **Sunshine 900** (#ff8a00): Deepest sunset orange
- **Yellow Saturated** (#ffd900): Pure brand yellow used in the sunset stripe gradient
- **Block 5/6/7** (#ffe295, #ffd900, #ff8105): Spectrum stops along the sunset gradient (light-yellow → mid-yellow → deep-orange)

### Cream / Neutral Warm
- **Cream** (#fff8e0): Warm yellow-cream surface for form panels, feature cards, footer
- **Cream Soft** ({colors.cream-soft}): Lighter cream variant
- **Cream Deeper** (#fff0c2): More-saturated cream for badge/tag chips
- **Beige Deep** (#e6d5a8): Cream surface 1px border color

### Surface
- **Canvas White** (#ffffff): Page background and card surface
- **Surface** (#fafafa): Subtle quieter background
- **Surface Cream** (#fff8e0): Cream-yellow tinted surface
- **Surface Code** (#1c1c1e): Dark code-block / IDE mockup surface
- **Hairline** (#e5e5e5): 1px borders
- **Hairline Soft** (#ededed): Quieter dividers
- **Hairline Strong** (#c7c7c7): Stronger 1px border for inputs

### Text
- **Ink** (#1f1f1f): Primary headlines and body text
- **Ink Tint** (#3d3d3d): Slightly softer black for hero overlay text
- **Charcoal** (#2c2c2c): Body emphasis
- **Slate** (#4a4a4a): Secondary text
- **Steel** (#6a6a6a): Tertiary text, captions
- **Stone** (#8a8a8a): Muted labels
- **Muted** (#a8a8a8): Disabled, placeholders
- **On Dark** (#ffffff): White text on dark surfaces
- **On Dark Muted** (#a8a8a8): Reduced-opacity white
- **On Cream** (#1f1f1f): Ink text on cream surfaces

### Semantic
- **Link** (#fa520f): Inline link color (matches primary orange)

## Typography

### Font Family
**PP Editorial Old** (display): Mistral's signature near-serif elegant display typeface used for hero displays, large numbers, and editorial section openers. Carries a slightly classical, intelligent character that contrasts the contemporary product positioning. Fallbacks: 'Times New Roman', Georgia, serif.

**Inter** (UI prose): Variable typeface for body, navigation, buttons, labels, captions. Fallbacks: ui-sans-serif, system-ui, -apple-system, sans-serif.

**JetBrains Mono** (code): Monospace for code blocks and IDE mockups. Fallbacks: 'SF Mono', Menlo, Consolas, monospace.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Family | Use |
|---|---|---|---|---|---|---|
| `{typography.hero-display}` | 84px | 400 | 1.05 | -1.5px | PP Editorial Old | Hero ("Frontier AI. In your hands.") |
| `{typography.display-lg}` | 64px | 400 | 1.10 | -1px | PP Editorial Old | Section openers |
| `{typography.heading-1}` | 52px | 400 | 1.15 | -0.5px | PP Editorial Old | Page headlines ("Get in touch with the team.") |
| `{typography.stat-display}` | 56px | 400 | 1.10 | -1px | PP Editorial Old | Stat callouts ("75%") |
| `{typography.heading-2}` | 36px | 500 | 1.20 | -0.5px | Inter | Subsection headlines |
| `{typography.heading-3}` | 28px | 500 | 1.25 | 0 | Inter | Card titles |
| `{typography.heading-4}` | 22px | 500 | 1.30 | 0 | Inter | Feature tile titles |
| `{typography.heading-5}` | 18px | 500 | 1.40 | 0 | Inter | Smaller card titles |
| `{typography.subtitle}` | 18px | 400 | 1.50 | 0 | Inter | Hero subtitle, lead body |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Inter | Primary body text |
| `{typography.body-md-medium}` | 16px | 500 | 1.55 | 0 | Inter | Body emphasis |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Inter | Secondary body |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | Inter | Active sidebar, button labels |
| `{typography.caption}` | 13px | 400 | 1.40 | 0 | Inter | Helper text |
| `{typography.caption-bold}` | 13px | 600 | 1.40 | 0 | Inter | Badge labels |
| `{typography.micro}` | 12px | 500 | 1.40 | 0 | Inter | Footer microcopy |
| `{typography.micro-uppercase}` | 11px | 600 | 1.40 | 1px | Inter | Section eyebrows |
| `{typography.button-md}` | 14px | 500 | 1.30 | 0 | Inter | Button labels |
| `{typography.code-md}` | 14px | 400 | 1.50 | 0 | JetBrains Mono | Code blocks |

### Principles
- **Editorial / sans pairing** — PP Editorial Old (near-serif, classical) anchors hero displays; Inter (geometric sans) carries everything else. The contrast IS the brand voice.
- **Generous body leading** (1.55 on body-md) for editorial readability across long-form pages
- **Tight hero leading** (1.05 on 84px display) creates magazine-grade typographic display
- **Negative letter-spacing** progresses with size — display sizes use -1.5px to -0.5px; smaller heads relax to 0
- **Stat-display token** (56px Editorial) for marketing stat callouts ("75% / 80% / 100%")

## Layout

### Spacing System
- **Base unit**: 4px (8px primary increment)
- **Tokens**: `4px` (4px) · `8px` (8px) · `12px` (12px) · `16px` (16px) · `20px` (20px) · `24px` (24px) · `32px` (32px) · `40px` (40px) · `48px` (48px) · `64px` (64px) · `96px` (96px) · `120px` (120px)
- **Section rhythm**: Marketing pages use `96px` (96px); content pages tighten to `64px` (64px)
- **Card internal padding**: `24px` (24px) for compact cards; `32px` (32px) for feature panels and form panels

### Grid & Container
- Marketing pages use 1280px max-width with 32px gutters
- Hero band uses 2-column split (text left, sunset photography right) on desktop
- Le Studio product page uses 3-up feature grid below the hero
- Contact page uses 1-column layout with cream form panel centered (~520px max-width)
- Services page uses 4-tier card layout with cream feature panel separator strip

### Whitespace Philosophy
Marketing surfaces give content generous breathing room — `120px` (120px) hero padding lets the mountain-sunset photography fill the frame. Form pages tighten dramatically: contact form panel uses `32px` (32px) internal padding, fields stack on `16px` (16px) gap.

## Elevation & Depth

The system runs predominantly flat with strategic atmospheric depth from photography.

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow; `#ededed` border | Default cards, table rows, form inputs |
| 1 (subtle) | `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` | Hover-elevated tiles |
| 2 (card) | `rgba(0, 0, 0, 0.04) 0px 4px 12px 0px` | Standard feature cards |
| 3 (mockup) | `rgba(0, 0, 0, 0.08) 0px 12px 24px -4px` | IDE mockup, code editor frames |
| 4 (modal) | `rgba(0, 0, 0, 0.12) 0px 16px 48px -8px` | Modals, dropdowns |

### Decorative Depth
- The atmospheric depth on Mistral's hero comes from the photographic mountain-sunset imagery — natural light gradient does the work
- The "sunset stripe" closing band carries depth via its multi-stop gradient (red → orange → yellow → cream)
- IDE / code mockups use dark-canvas backgrounds with subtle drop shadow

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `4px` | 4px | Small chips, micro-controls |
| `6px` | 6px | Discount badges, compact UI |
| `8px` | 8px | Buttons, inputs, search-pill, code blocks |
| `12px` | 12px | Cards, modals, panels (the dominant card radius) |
| `16px` | 16px | Larger feature panels |
| `20px` | 20px | Featured emphasis cards |
| `9999px` | 9999px | Status badges, pill tabs (used sparingly — most buttons are NOT pills) |

The radius scale is sober and editorial — Mistral does NOT use pill buttons. `8px` (8px) for buttons, `12px` (12px) for cards, `9999px` reserved for badges and the rare pill tab.

### Photography Geometry
- Hero photography is full-bleed atmospheric mountain-sunset imagery with no internal framing
- IDE/code mockups render with `12px` (12px) corners on dark canvas
- Customer logos wall presents wordmarks inline at consistent 60–80px height
- Product imagery (Le Studio mockup, agent UI mockups) sits in `12px` panels with subtle border

## Components

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### Buttons

**`button-primary`** — Saturated-orange primary CTA, the dominant action.
- Background `#fa520f`, text `#ffffff`, typography `{typography.button-md}`, padding `10px 20px`, rounded `8px`.
- Pressed state `button-primary-pressed` deepens to `#cc3a05`.
- Disabled state `button-primary-disabled` uses `#e5e5e5` background and `#a8a8a8` text.

**`button-cream`** — Warm cream-yellow secondary action, common on cream-surface sections.
- Background `#fff8e0`, text `#1f1f1f`, border `1px solid #e6d5a8`, typography `{typography.button-md}`, padding `10px 20px`, rounded `8px`.

**`button-dark`** — Dark/black primary CTA on cream surfaces.
- Background `#1f1f1f`, text `#ffffff`, typography `{typography.button-md}`, padding `10px 20px`, rounded `8px`.

**`button-secondary`** — Outlined secondary action.
- Background transparent, text `#1f1f1f`, border `1px solid #c7c7c7`, typography `{typography.button-md}`, padding `10px 20px`, rounded `8px`.

**`button-on-cream`** — White button on cream-tinted backgrounds.
- Background `#ffffff`, text `#1f1f1f`, border `1px solid #e6d5a8`, typography `{typography.button-md}`, padding `10px 20px`, rounded `8px`.

**`button-link`** — Inline orange text link.
- Background transparent, text `#fa520f`, typography `{typography.body-sm-medium}`, padding `0`. Underline on activation.

### Cards & Containers

**`card-base`** — Standard content card.
- Background `#ffffff`, rounded `12px`, padding `24px`, border `1px solid #ededed`.

**`card-feature`** — White feature card with larger padding.
- Background `#ffffff`, rounded `12px`, padding `32px`, border `1px solid `#ededed`.

**`card-cream`** — Warm cream-yellow feature card (services tiers, perk callouts).
- Background `#fff8e0`, text `#1f1f1f`, rounded `12px`, padding `32px`, border `1px solid #e6d5a8`.

**`card-cream-soft`** — Lighter cream variant.
- Background `#fffaeb`, text `#1f1f1f`, rounded `12px`, padding `32px`.

**`card-feature-product`** — Product showcase card with subtle elevation.
- Background `#ffffff`, rounded `12px`, padding `32px`, border `1px solid #ededed`, shadow `rgba(0, 0, 0, 0.04) 0px 4px 12px`.

**`card-photographic`** — Photographic product card with dark background.
- Background `#1c1c1e`, text `#ffffff`, rounded `12px`, padding `0` (image fills the card).

**`pricing-card`** — Standard pricing tier card.
- Background `#ffffff`, rounded `12px`, padding `32px`, border `1px solid #ededed`.

**`pricing-card-featured`** — Featured pricing tier (cream background + orange border).
- Background `#fff8e0`, rounded `12px`, padding `32px`, border `2px solid #fa520f`.

### Inputs & Forms

**`text-input`** — Standard text field.
- Background `#ffffff`, text `#1f1f1f`, border `1px solid #c7c7c7`, rounded `8px`, padding `12px 16px`, height 44px.

**`text-input-focused`** — Activated state.
- Border switches to `2px solid #fa520f`.

**`text-area`** — Multi-line text area for contact form.
- Background `#ffffff`, text `#1f1f1f`, border `1px solid #c7c7c7`, rounded `8px`, padding `16px`.

**`contact-form-panel`** — Cream-tinted form container on the contact page.
- Background `#fff8e0`, rounded `12px`, padding `32px`, border `1px solid #e6d5a8`. Hosts text-inputs, text-area, submit `button-dark`.

### Tabs

**`pill-tab`** + **`pill-tab-active`** — Pill-style tab nav (used sparingly on product pages).
- Inactive: background `#ffffff`, text `#6a6a6a`, border `1px solid #e5e5e5`, padding `8px 16px`, rounded `9999px`.
- Active: background `#1f1f1f`, text `#ffffff`.

**`segmented-tab`** + **`segmented-tab-active`** — Underline-style tab navigation.
- Inactive: text `#6a6a6a`, transparent background, padding `12px 16px`, no bottom border.
- Active: text `#fa520f`, 2px bottom border in `#fa520f`.

### Badges & Status

**`badge-orange`** — Saturated orange badge.
- Background `#fa520f`, text `#ffffff`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`badge-cream`** — Cream-tinted tag chip.
- Background `#fff0c2`, text `#1f1f1f`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`badge-dark`** — Dark/black status badge.
- Background `#1f1f1f`, text `#ffffff`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`promo-banner`** — Sticky black promo strip ABOVE the top nav.
- Background `#1f1f1f`, text `#ffffff`, typography `{typography.body-sm-medium}`, padding `12px 16px`. Carries one-line copy + inline CTA.

### Code

**`code-block`** — Syntax-highlighted IDE-style code block (Le Studio page mockup, agent demos).
- Background `#1c1c1e`, text `#ffffff`, typography `{typography.code-md}`, rounded `8px`, padding `16px`.

**`code-block-header`** — Header bar above the code block.
- Background `#1c1c1e`, text `#a8a8a8`, typography `{typography.caption}`, padding `8px 16px`, bottom border `1px solid rgba(255,255,255,0.08)`.

### Documentation Components

**`feature-icon-tile`** — Cream-yellow feature icon callout.
- Background `#fff8e0`, rounded `8px`, padding `16px`, border `1px solid #e6d5a8`.

**`industry-tile`** — Industry-vertical tile in solutions page grid.
- Background `#ffffff`, rounded `12px`, padding `24px`, border `1px solid #ededed`.

**`stat-cell`** — Stat-row cell ("75% more / 80% better").
- Background transparent, text `#1f1f1f`, typography `{typography.stat-display}`, padding `20px`.

**`customer-testimonial-card`** — Customer quote card (used inside Le Studio and Solutions pages).
- Background `#ffffff`, rounded `12px`, padding `32px`, border `1px solid #ededed`. Quote in `{typography.body-md}`, attribution in `{typography.body-sm}` `#6a6a6a`.

**`logo-wall-item`** — Customer logo wordmark cell.
- Background transparent, text `#6a6a6a`, typography `{typography.body-md-medium}`, padding `20px`.

**`faq-accordion-item`** — FAQ panel.
- Background `#ffffff`, rounded `8px`, padding `24px`, bottom border `1px solid #e5e5e5`.

**`app-store-badge`** — App Store / Google Play download badge.
- Background `#1f1f1f`, text `#ffffff`, typography `{typography.caption-bold}`, rounded `8px`, padding `12px 16px`.

### Navigation

**Top Navigation (Marketing)** — Sticky white bar.
- Background `#ffffff`, height ~64px, bottom border `1px solid #ededed`.
- Left: Mistral M-mark logo + "MISTRAL AI_" wordmark + horizontal link list (Products, Solutions, Research, Blog, Customers, Company).
- Right: "Contact Sales" link + black-pill "Try Studio" CTA.

### Signature Components

**`hero-band-sunset`** — Atmospheric sunset hero band.
- Background gradient `linear-gradient(135deg, #ffa110 0%, #ff8a00 60%, #fa520f 100%)` overlaid on photographic mountain landscape.
- Layout: hero headline left in `{typography.hero-display}` (#1f1f1f), subtitle in `{typography.subtitle}` (#3d3d3d), button row (`button-dark` + `button-secondary`), atmospheric mountain photography right.

**`sunset-stripe-band`** — Horizontal closing band at the foot of every page.
- Multi-stop gradient: `#fa520f` → `#ffa110` → `#ffb83e` → `#ffd900` → `#fff8e0`.
- Padding `20px 0`. Spans full width, sits above the footer. THIS IS THE BRAND'S MOST RECOGNIZABLE SIGNATURE ELEMENT.

**`cta-banner-cream`** — Page-bottom CTA band on cream surface.
- Background `#fff8e0`, text `#1f1f1f`, rounded `12px`, padding `64px`. "The next chapter of AI is yours." headline in `{typography.heading-1}` (PP Editorial Old), button row below.

**`footer-region`** — Cream-tinted multi-column footer.
- Background `#fff8e0`, padding `64px 32px`.
- 5-column link grid (Why Mistral / Explore / Build / Legal + brand mark column).
- Bottom: language picker + social icons.

**`footer-link`** — Individual footer link.
- Background transparent, text `#fa520f`, typography `{typography.body-sm}`, padding `4px 0`.

## Do's and Don'ts

### Do
- Reserve `#fa520f` (saturated orange) for primary CTAs and active states only
- Use the **sunset stripe band** at the foot of every page — it's the brand's most recognizable signature
- Pair PP Editorial Old (display) with Inter (UI) — never substitute either with a generic alternative
- Apply `8px` (8px) to buttons and `12px` (12px) to cards consistently
- Use cream-yellow surfaces (#fff8e0) for form panels, feature cards, and footer
- Anchor heroes with photographic mountain-sunset imagery (or its visual equivalent — atmospheric gradient sky)
- Use stat-display token (PP Editorial 56px) for stat callouts to maintain editorial character

### Don't
- Don't use pill-shaped buttons (`9999px`) — Mistral's geometry is sober and editorial, not playful
- Don't introduce additional accent colors beyond the orange/yellow/cream sunset palette
- Don't reduce hero leading below 1.05 — the editorial display needs that magazine-grade tightness
- Don't replace PP Editorial Old hero displays with Inter — the editorial / sans contrast IS the brand
- Don't apply heavy shadows on flat documentation cards; reserve elevation for IDE mockups
- Don't drop the sunset stripe band from any page bottom — it's the brand's continuity element

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero scales to 40px (PP Editorial). Pill nav collapses to hamburger. Pricing tiers stack 1-up. |
| Mobile (large) | 480 – 767px | Feature tiles 2-up. Hero scales to 52px. |
| Tablet | 768 – 1023px | 2-column feature grids. Pill-tab nav returns. Hero 64px. |
| Desktop | 1024 – 1279px | Multi-column layouts. Hero 76px. Stat row at full width. |
| Wide Desktop | ≥ 1280px | Full 84px hero presentation. |

### Touch Targets
- Buttons render at 40–44px effective height — at WCAG AAA floor with `10px 20px` padding
- Form inputs render at 44px height
- Pill tabs render at ~32px tall — bumps to 44px on mobile

### Collapsing Strategy
- **Promo banner** stays full-width; truncates at < 480px
- **Top nav** below 1024px collapses to hamburger
- **Hero band**: 2-column hero (text + photography) collapses to stacked at < 1024px
- **Pricing tiers**: 4-column desktop → 2-column tablet → 1-column mobile
- **Stat row**: 3-column → stacked at < 768px
- **Hero typography**: 84px → 64px → 52px → 40px
- **Footer**: 5-column desktop → 3-column tablet → 1-column accordion mobile
- **Sunset stripe band** stays full-width on all breakpoints

### Image Behavior
- Mountain-sunset photography uses 16:9 ratio with full-bleed scaling
- IDE mockup images maintain aspect ratio across breakpoints
- Customer logo wall presents wordmarks at consistent 60–80px height

## Iteration Guide

1. Focus on ONE component at a time
2. Reference component names and tokens directly (`#fa520f`, `{component-name}-pressed`)
3. Run `npx @google/design.md lint DESIGN.md` after edits
4. Add new variants as separate `components:` entries
5. Default to `{typography.body-md}` for body and `{typography.subtitle}` for emphasis. Hero displays use `{typography.hero-display}` (PP Editorial Old).
6. Keep `#fa520f` confined to primary CTAs, active states, and the sunset stripe band
7. Cards use `12px` (12px), buttons use `8px` (8px). Pills (`9999px`) reserved for badges only.
8. Always include the sunset-stripe-band component at the foot of every page mockup.

## Known Gaps

- Specific dark-mode token values not surfaced; the brand has not shipped a published dark-mode palette
- Animation/transition timings not extracted; recommend 150–200ms ease for hover/focus state transitions
- Form validation success state not explicitly captured beyond defaults
- Sunset stripe band gradient stops are approximations — the actual values may vary slightly across pages but the visual rhythm is consistent
