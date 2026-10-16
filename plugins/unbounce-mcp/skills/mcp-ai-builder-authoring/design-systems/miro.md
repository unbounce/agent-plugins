# Design System: Miro

## Overview

Miro positions itself as the AI-powered visual workspace through a confident, slightly playful brand voice. The homepage opens with a stark white canvas anchored by a small canary-yellow Miro wordmark in the top-left, a black-pill primary CTA "Get started free" and a secondary "Book a demo" outline pill — then dramatic real-Miro-board mockup imagery (sticky notes, kanban, mind maps) carries the visual weight. Across deeper surfaces, the system breaks open: pastel feature cards (rose, teal, coral, yellow) echo the actual sticky-note color palette of the live whiteboard product, and customer story cards reuse those tints to differentiate brand vignettes.

Roobert PRO — Miro's custom display face — anchors every typographic surface, from the 80px hero display down to 11px micro labels. The face's slightly rounded, geometric character pairs naturally with the playful product photography and the friendly product positioning. Black-pill primary buttons (`9999px`) dominate marketing CTAs; the brand color, signature canary yellow (#ffd02f), is reserved for the wordmark, top promo banners, and "yellow tag" feature pills — never as a primary CTA. The 4-tier pricing comparison (Free / Starter / Business / Enterprise) leads into the densest surface in the system: a feature comparison table that runs ~80 rows deep across multiple section dividers.

**Key Characteristics:**
- Stark white canvas + Miro wordmark in canary yellow (#ffd02f) as the recognizable opening signature
- Black-pill primary CTAs (#1c1c1e + `9999px`) as the dominant interactive element
- Pastel feature cards (yellow, rose, coral, teal, mint) that echo the actual sticky-note palette
- Roobert PRO across every UI surface; geometric, slightly rounded character
- Real Miro-board mockup imagery used as feature illustrations
- 4-tier pricing card grid + dense feature comparison table
- Massive dark footer (#1c1c1e) with multi-column links + app-store badges

## Colors

> Source pages: miro.com/ (homepage), /pricing/ (4-tier comparison), /products/ai-workflows/ (AI product), /agile/ (vertical landing), /customers/ (story directory). Token coverage was identical across all five pages.

### Brand & Accent
- **Miro Yellow** (#ffd02f): The brand's recognizable canary yellow — wordmark color, top promo banner, "yellow tag" pills
- **Yellow Deep** (#fcb900): Darker variant for hover states and emphasis
- **Yellow Light** (#fff4c4): Pale yellow background tint for tag chips
- **Yellow Dark** (#746019): Yellow-tag text color (dark olive) for chip foreground
- **Brand Blue** (#4262ff): Action blue for inline links and featured-pricing-tier border
- **Blue Pressed** (#2a41b6): Pressed-state blue
- **Brand Coral** (#ff9999): Coral accent for warm callouts
- **Coral Light** (#ffc6c6): Pale coral for feature card backgrounds
- **Coral Dark** (#600000): Coral-tag text color (deep wine)
- **Brand Rose** (#ffd8f4): Soft rose-pink for feature card variants
- **Brand Teal** (#0fbcb0): Brand teal
- **Teal Light** (#c3faf5): Pale teal for feature card backgrounds
- **Moss Dark** (#187574): Deep teal-green text color
- **Brand Pink** (#fde0f0): Pale pink for soft callouts
- **Brand Orange Light** (#ffe6cd): Soft orange for feature card backgrounds

### Surface
- **Canvas White** (#ffffff): Page background and primary card surface
- **Surface** (#f7f8fa): Subtle section backgrounds, search-pill rest
- **Surface Soft** (#fafbfc): Quieter section divisions
- **Surface Yellow** (#fff8e0): Pale yellow-tinted surface for tag chip
- **Surface Pricing Featured** (#f5f3ff): Pale lavender for featured pricing tier
- **Hairline** (#e0e2e8): 1px borders and primary dividers
- **Hairline Soft** (#eef0f3): Quieter table-row dividers
- **Hairline Strong** (#c7cad5): Stronger 1px border for inputs

### Text
- **Ink Deep** (#050038): Headlines on lighter feature cards
- **Ink** (#1c1c1e): Primary headlines and body text
- **Charcoal** (#2c2c34): Body emphasis text
- **Slate** (#555a6a): Secondary text, metadata
- **Steel** (#6b6f7e): Tertiary text, footer links
- **Stone** (#8e91a0): Captions, muted labels
- **Muted** (#a5a8b5): Disabled labels, input placeholders
- **On Dark** (#ffffff): White text on dark surfaces
- **On Dark Muted** (#a5a8b5): Reduced-opacity white on dark

### Semantic
- **Success Accent** (#00b473): Confirmation/success indicator green
- **Brand Red** (#fbd4d4): Soft red for error backgrounds
- **Brand Red Dark** (#e3c5c5): Stronger red for error borders

## Typography

### Font Family
**Roobert PRO** (primary): Miro's custom geometric sans-serif typeface. Used across every UI surface from oversized 80px hero displays to 11px micro labels. The face has a slightly rounded, friendly character that matches the brand's playful product positioning. Fallbacks: Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 80px | 500 | 1.05 | -2px | Marketing hero ("See how teams get great done with Miro") |
| `{typography.display-lg}` | 60px | 500 | 1.10 | -1.5px | Major section openers |
| `{typography.heading-1}` | 48px | 500 | 1.15 | -1px | Page-level headlines |
| `{typography.heading-2}` | 36px | 500 | 1.20 | -0.5px | Subsection headlines |
| `{typography.heading-3}` | 28px | 500 | 1.25 | 0 | Card titles |
| `{typography.heading-4}` | 22px | 500 | 1.30 | 0 | Feature tile titles |
| `{typography.heading-5}` | 18px | 500 | 1.40 | 0 | FAQ questions, smaller cards |
| `{typography.subtitle}` | 18px | 400 | 1.50 | 0 | Hero subtitle |
| `{typography.body-md}` | 16px | 400 | 1.50 | 0 | Primary body text |
| `{typography.body-md-medium}` | 16px | 500 | 1.50 | 0 | Logo wall labels |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Secondary body, table cells |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | Filter dropdowns, button labels |
| `{typography.caption}` | 13px | 400 | 1.40 | 0 | Helper text |
| `{typography.caption-bold}` | 13px | 600 | 1.40 | 0 | Badge labels, tag chips |
| `{typography.micro}` | 12px | 500 | 1.40 | 0 | Footer microcopy |
| `{typography.micro-uppercase}` | 11px | 600 | 1.40 | 0.5px | Section dividers in tables |
| `{typography.button-md}` | 14px | 500 | 1.30 | 0 | Pill button labels |
| `{typography.stat-display}` | 64px | 500 | 1.10 | -1.5px | "100M+ users" stat callouts |

### Principles
- **Tight hero leading** (1.05) creates magazine-grade display headlines on the 80px hero
- **Negative letter-spacing progression** — display sizes use -2px to -1.5px; smaller headings relax to 0
- **Stat-display token** (64px / 500) for marketing stat callouts
- **Single weight scale** — 400 (body), 500 (medium emphasis + headings), 600 (badges and uppercase). Roobert PRO does not use 700 in this system.

## Layout

### Spacing System
- **Base unit**: 4px (8px primary increment)
- **Tokens**: `4px` (4px) · `8px` (8px) · `12px` (12px) · `16px` (16px) · `20px` (20px) · `24px` (24px) · `32px` (32px) · `40px` (40px) · `48px` (48px) · `64px` (64px) · `96px` (96px) · `120px` (120px)
- **Section rhythm**: Marketing pages use `96px` (96px); pricing comparison tightens to `64px` (64px); customer story stack uses `32px` (32px)
- **Card internal padding**: `24px` (24px) for compact cards; `32px` (32px) for feature panels

### Grid & Container
- Marketing pages use 1280px max-width with 32px gutters
- Pricing page renders 4-tier card row at desktop (Free / Starter / Business / Enterprise)
- Customer stories page uses 2-column grid with filter dropdowns
- AI Workflows page uses 2-column hero, then 3-up feature grid

### Whitespace Philosophy
Marketing surfaces give content generous breathing room — `120px` (120px) hero padding gives the small wordmark room to breathe. Pricing surfaces tighten dramatically.

## Elevation & Depth

The system runs predominantly flat with strategic depth on hero mockups.

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow; `#eef0f3` border | Default cards, table rows, form inputs |
| 1 (subtle) | `rgba(5, 0, 56, 0.04) 0px 1px 2px 0px` | Subtle hover-elevated tiles |
| 2 (card) | `rgba(5, 0, 56, 0.06) 0px 4px 12px 0px` | Standard feature cards |
| 3 (mockup) | `rgba(5, 0, 56, 0.08) 0px 12px 32px -4px` | Hero whiteboard mockup framing |
| 4 (modal) | `rgba(5, 0, 56, 0.12) 0px 16px 48px -8px` | Modals, dropdowns |

### Decorative Depth
- The atmospheric depth on Miro's hero comes from the live-product-board mockup illustrations — sticky notes layered at z-offsets, color-block tints behind whiteboard frames
- Pastel feature cards carry their own visual weight via saturated background color
- Customer-story cards layer dark photographic content with overlay scrims

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `4px` | 4px | Small chips, micro-controls |
| `6px` | 6px | Discount badges |
| `8px` | 8px | Inputs, search-pill |
| `12px` | 12px | Standard cards, table containers |
| `16px` | 16px | Pricing cards, feature panels |
| `20px` | 20px | Larger feature cards |
| `28px` | 28px | Pastel feature cards (yellow, rose, coral, teal) |
| `32px` | 32px | Hero CTA banner cards |
| `9999px` | 9999px | All buttons, pill tabs, badges |

### Photography Geometry
- Real Miro board mockups render with `16px` (16px) corners and a subtle drop shadow
- Customer story cards use `28px` (28px) corners with full-bleed photography
- Template card thumbnails use `16px` (16px) with photographic content
- Customer logos wall presents wordmarks inline at consistent 100px height

## Components

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### Buttons

**`button-primary`** — Black pill primary CTA, the dominant action ("Get started free").
- Background `#1c1c1e`, text `#ffffff`, typography `{typography.button-md}`, padding `12px 24px`, rounded `9999px`.
- Pressed state `button-primary-pressed` lifts to `#2c2c34`.
- Disabled state `button-primary-disabled` uses `#e0e2e8` background and `#a5a8b5` text.

**`button-yellow`** — Brand-yellow pill for moments of brand emphasis.
- Background `#ffd02f`, text `#1c1c1e`, typography `{typography.button-md}`, padding `12px 24px`, rounded `9999px`.

**`button-blue`** — Brand-blue pill for inline action callouts.
- Background `#4262ff`, text `#ffffff`, typography `{typography.button-md}`, padding `12px 24px`, rounded `9999px`.

**`button-secondary`** — Outlined pill for secondary actions ("Book a demo").
- Background transparent, text `#1c1c1e`, border `1px solid #c7cad5`, typography `{typography.button-md}`, padding `12px 24px`, rounded `9999px`.

**`button-on-dark`** — White pill for dark CTA banners.
- Background `#ffffff`, text `#1c1c1e`, typography `{typography.button-md}`, padding `12px 24px`, rounded `9999px`.

**`button-ghost`** — Quieter rectangular ghost button.
- Background transparent, text `#1c1c1e`, typography `{typography.button-md}`, padding `8px 12px`, rounded `8px`.

**`button-link`** — Inline text link.
- Background transparent, text `#4262ff`, typography `{typography.body-sm-medium}`, padding `0`.

**`button-icon-circular`** — 36×36px circular utility button.
- Background `#ffffff`, text `#1c1c1e`, border `1px solid #e0e2e8`, rounded `9999px`.

### Cards & Containers

**`card-base`** — Standard content card.
- Background `#ffffff`, rounded `16px`, padding `24px`, border `1px solid #eef0f3`.

**`card-feature`** — White feature card with larger 28px corners.
- Background `#ffffff`, rounded `28px`, padding `32px`, border `1px solid #eef0f3`.

**`card-feature-yellow`** — Pastel-yellow feature card.
- Background `#ffd02f`, text `#1c1c1e`, rounded `28px`, padding `32px`.

**`card-feature-coral`** — Pastel-coral feature card variant.
- Background `#ffc6c6`, text `#1c1c1e`, rounded `28px`, padding `32px`.

**`card-feature-teal`** — Pastel-teal feature card variant.
- Background `#c3faf5`, text `#1c1c1e`, rounded `28px`, padding `32px`.

**`card-feature-rose`** — Pastel-rose feature card variant.
- Background `#fde0f0`, text `#1c1c1e`, rounded `28px`, padding `32px`.

**`card-customer-story`** — Customer story card.
- Background `#ffffff`, rounded `28px`, padding `0` (image fills the card), border `1px solid #eef0f3`.

**`card-stat`** — Stat-row cell for "100M+ users".
- Background transparent, text `#1c1c1e`, typography `{typography.stat-display}`, padding `20px`.

**`pricing-card`** — Standard pricing tier card.
- Background `#ffffff`, rounded `16px`, padding `32px`, border `1px solid #e0e2e8`.

**`pricing-card-featured`** — Featured pricing tier (Business — lavender background + blue border).
- Background `#f5f3ff`, rounded `16px`, padding `32px`, border `2px solid #4262ff`.

**`pricing-card-enterprise`** — Dark-canvas enterprise tier card.
- Background `#1c1c1e`, text `#ffffff`, rounded `16px`, padding `32px`.

### Inputs & Forms

**`text-input`** — Standard text field.
- Background `#ffffff`, text `#1c1c1e`, border `1px solid #c7cad5`, rounded `8px`, padding `12px 16px`, height 44px.

**`text-input-focused`** — Activated state.
- Border switches to `2px solid #4262ff`.

**`search-pill`** — Search bar.
- Background `#f7f8fa`, text `#6b6f7e`, typography `{typography.body-sm}`, rounded `8px`, height 40px, border `1px solid #e0e2e8`.

**`filter-dropdown`** — Pill-shaped filter dropdown ("Company use" / "Industry" / "Use case").
- Background `#ffffff`, text `#1c1c1e`, typography `{typography.body-sm-medium}`, rounded `9999px`, padding `8px 16px`, border `1px solid #c7cad5`.

### Tabs

**`pill-tab`** + **`pill-tab-active`** — Pill-style tab nav.
- Inactive: background `#ffffff`, text `#6b6f7e`, border `1px solid #e0e2e8`, padding `8px 16px`, rounded `9999px`.
- Active: background `#1c1c1e`, text `#ffffff`.

**`toggle-monthly-yearly`** — Two-state pill toggle (Monthly / Annual on pricing).
- Background `#f7f8fa`, rounded `9999px`, padding `4px`.

### Badges & Status

**`badge-promo`** — Yellow promo banner badge.
- Background `#ffd02f`, text `#1c1c1e`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`badge-tag-yellow`** — Soft-yellow feature tag chip ("Yellow" tag on AI Workflows page).
- Background `#fff8e0`, text `#746019`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`badge-tag-purple`** — Lavender feature tag chip ("AI agent" tag).
- Background `#f5f3ff`, text `#4262ff`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`badge-tag-coral`** — Coral feature tag chip variant.
- Background `#ffc6c6`, text `#600000`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`badge-success`** — Green success indicator.
- Background `#00b473`, text `#ffffff`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`badge-discount`** — Yellow rectangular discount pill ("Save 15%").
- Background `#ffd02f`, text `#1c1c1e`, typography `{typography.caption-bold}`, rounded `6px`, padding `2px 6px`.

**`promo-banner`** — Sticky black promo strip ABOVE the top nav.
- Background `#1c1c1e`, text `#ffffff`, typography `{typography.body-sm-medium}`, padding `12px 16px`. Carries inline yellow "GET YOUR SPOT" pill.

### Tables

**`comparison-table`** — Pricing feature comparison table.
- Background `#ffffff`, text `#1c1c1e`, typography `{typography.body-sm}`, rounded `8px`, border `1px solid #e0e2e8`.

**`comparison-row`** — Individual feature row.
- Background `#ffffff`, text `#1c1c1e`, padding `16px 20px`, bottom border `1px solid #eef0f3`.

### Documentation Components

**`whiteboard-mockup`** — Real Miro-board UI rendered as feature illustration.
- Background `#ffffff`, rounded `16px`, border `1px solid #eef0f3`, shadow `rgba(5, 0, 56, 0.08) 0px 12px 32px -4px`.

**`template-card`** — Template thumbnail card.
- Background `#ffffff`, rounded `16px`, padding `16px`, border `1px solid #e0e2e8`.

**`industry-tile`** — Industry-vertical tile.
- Background `#ffffff`, rounded `16px`, padding `24px`, border `1px solid #eef0f3`.

**`faq-accordion-item`** — FAQ panel item.
- Background `#ffffff`, rounded `8px`, padding `24px`, bottom border `1px solid #e0e2e8`.

**`logo-wall-item`** — Customer logo wordmark cell.
- Background transparent, text `#6b6f7e`, typography `{typography.body-md-medium}`, padding `20px`.

**`capterra-badge`** — Review/rating badge in the footer.
- Background `#ffffff`, text `#1c1c1e`, typography `{typography.caption}`, rounded `8px`, padding `12px 16px`, border `1px solid #e0e2e8`.

**`app-store-badge`** — App store / Google Play download pill.
- Background `#ffffff`, text `#1c1c1e`, typography `{typography.caption-bold}`, rounded `8px`, padding `12px 16px`.

### Navigation

**Top Navigation (Marketing)** — Sticky white bar with yellow Miro wordmark + horizontal links + right-side CTAs.
- Background `#ffffff`, height ~64px.
- Left: Yellow square Miro wordmark + horizontal link list (Product, Solutions, Resources).
- Right: "Login / Pricing / Contact sales" links + black-pill "Get started free".

### Signature Components

**`hero-band-marketing`** — Marketing hero band.
- Background `#ffffff`, padding `120px`.
- Layout: centered headline in `{typography.hero-display}`, centered subtitle, centered button row, then whiteboard mockup illustration below.

**`cta-banner-dark`** — Dark CTA banner at the bottom of feature pages.
- Background `#1c1c1e`, text `#ffffff`, rounded `32px`, padding `64px`. Centered headline + subtitle + `button-on-dark` "Get started free".

**`footer-region`** — Massive multi-column dark footer.
- Background `#1c1c1e`, padding `64px 32px`.
- 6-column link grid (Product / Solutions / Tools / Resources / Company / Plans & Pricing).
- Section headings in `{typography.body-md-medium}` `#ffffff`.

**`footer-link`** — Individual link in the footer.
- Background transparent, text `#a5a8b5`, typography `{typography.body-sm}`, padding `4px 0`.

## Do's and Don'ts

### Do
- Reserve `#ffd02f` for the wordmark, top promo banner, and "yellow tag" chips
- Use `#1c1c1e` (black) as the dominant CTA on all surfaces
- Pair pastel feature cards (yellow, rose, coral, teal) with white feature cards in the same viewport
- Apply `9999px` to every button, every pill tab, every status badge
- Apply `28px` (28px) to pastel feature cards
- Use real Miro-board mockups as feature illustrations
- Maintain Roobert PRO across every UI surface

### Don't
- Don't use `#ffd02f` on standard CTAs or large background surfaces
- Don't introduce additional accent colors beyond yellow + brand pastels
- Don't soften corners on buttons; the pill is a brand signature
- Don't reduce hero leading below 1.05
- Don't apply heavy shadows on flat documentation cards; reserve elevation for whiteboard mockups
- Don't use stock photography — show the live product board UI

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero scales to 36px. Pill nav collapses to hamburger. Pricing tiers stack 1-up. |
| Mobile (large) | 480 – 767px | Feature tiles 2-up. Hero scales to 48px. |
| Tablet | 768 – 1023px | 2-column feature grids. Pill-tab nav returns. |
| Desktop | 1024 – 1279px | 4-tier pricing card row. Customer story grid 2-up. Hero at 64px. |
| Wide Desktop | ≥ 1280px | Full hero presentation, 80px hero display. |

### Touch Targets
- Pill buttons render at 40–44px effective height — at WCAG AAA floor
- Circular icon buttons: 36×36px desktop → 44×44px mobile
- Form inputs render at 44px height
- Filter dropdowns render at ~36px tall — bumps to 44px on mobile

### Collapsing Strategy
- **Promo banner** stays full-width; truncates at < 480px
- **Top nav** below 1024px collapses to hamburger
- **Hero band**: 2-column hero collapses to stacked at < 1024px
- **Pricing comparison**: 4-column tiers → 2-column tablet → 1-column mobile; comparison table becomes horizontal-scroll
- **Customer story grid**: 2-up → 1-up at < 768px
- **Hero typography**: 80px → 60px tablet → 48px mobile-large → 36px mobile-small
- **Footer**: 6-column desktop → 3-column tablet → 2-column mobile → accordion at small mobile

### Image Behavior
- Whiteboard mockups maintain aspect ratio; lazy-loaded below the fold
- Customer story photography uses 16:9 ratio with full-bleed scaling
- Logo wall presents wordmarks at consistent 100px height

## Iteration Guide

1. Focus on ONE component at a time
2. Reference component names and tokens directly
3. Run `npx @google/design.md lint DESIGN.md` after edits
4. Add new variants as separate `components:` entries
5. Default to `{typography.body-md}` for body and `{typography.subtitle}` for emphasis
6. Keep `#ffd02f` confined to wordmark, promo banner, and yellow-tag chips
7. Pill-shaped buttons (`9999px`) always
8. When showing the product, use a real Miro-board mockup with sticky-note color tints

## Known Gaps

- Specific dark-mode token values not surfaced
- Animation/transition timings not extracted; recommend 150–200ms ease
- Form validation success state not explicitly captured beyond defaults
- Sticky note color tints inside the actual whiteboard product are richer than what marketing surfaces capture
