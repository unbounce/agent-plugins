# Design System: MongoDB

## Overview

MongoDB carries a strong dual-mode visual identity — dark deep-teal hero bands with the unmistakable bright MongoDB green (#00ed64) CTA pill paired with stark white documentation and pricing surfaces. The homepage opens with "One data platform. Unlimited AI potential." headline over a deep navy hero, the green pill sitting at the visual center as the primary CTA. Lower on the page, embedded code mockup cards (terminal-aesthetic) sit on the dark hero band, breaking out into white feature cards below. The pricing page renders a 3-tier comparison (Free / Flex / Dedicated) with a featured tier highlighted in soft mint background and bright green border. The MongoDB University page presents a course catalog grid where each tile carries a colored category tag (orange, purple, green, teal) — these are MongoDB's category-encoding accent colors and are the only place outside the brand green where saturated color appears.

The system uses Euclid Circular A as its display face. The face is contemporary geometric — confident but not overly playful — and pairs naturally with both the developer-tool aesthetic of the database product and the educational positioning of the learning surfaces. Cards use `12px` (12px) corners; buttons use `9999px` pills universally. The brand-teal palette (#001e2b) anchors hero bands, footer, code mockups, and the dark CTA banners.

**Key Characteristics:**
- Deep navy/teal hero bands (#001e2b) with bright MongoDB green (#00ed64) CTA pills
- Stark white pricing/documentation surfaces with colored category tags for course tiles (purple, orange, green, teal)
- Euclid Circular A across every UI surface
- Pill-shaped buttons (9999px) and 12px-rounded cards
- 3-tier pricing comparison (Free / Flex / Dedicated) with featured-mint highlight tier
- Code mockup cards with terminal-aesthetic dark canvas

## Colors

> Source pages: mongodb.com/ (homepage), /products/platform/atlas-database (Atlas product), /products/self-managed/community-edition, learn.mongodb.com/ (MongoDB University), /solutions/use-cases/artificial-intelligence (AI), /pricing (3-tier comparison). Token coverage was identical across all six pages.

### Brand & Accent
- **MongoDB Green** (#00ed64): The brand's most recognizable signal — bright pill-CTA color
- **Green Dark** (#00684a): Inline link color, secondary green
- **Green Mid** (#00a35c): Mid-spectrum green for atmospheric tints
- **Green Soft** (#c3f0d2): Pale-mint background tint for success badges and featured pricing tier
- **Brand Teal Deep** (#001e2b): Deep navy-teal for hero bands, footer
- **Brand Teal** (#003d4f): Mid-spectrum teal
- **Brand Teal Mid** (#00684a): Lighter teal for hero platform cards

### Category Accent (Course Tags)
- **Accent Purple** (#7b3ff2): Course tag for "Database & Security"
- **Accent Orange** (#fa6e39): Course tag for "Search"
- **Accent Pink** (#f06bb8): Course tag variant
- **Accent Blue** (#3d4f9f): Course tag variant for atlas/cloud topics

### Surface
- **Canvas White** (#ffffff): Page background and primary card surface
- **Canvas Dark** (#001e2b): Code-block backgrounds, dark mockup canvas
- **Surface** (#f9fbfa): Subtle section backgrounds, search-pill rest
- **Surface Soft** (#f4f7f6): Quieter section divisions
- **Surface Feature** (#e3fcef): Pale mint background for featured pricing tier
- **Hairline** (#e1e5e8): 1px borders and primary dividers
- **Hairline Soft** (#eceff1): Quieter dividers
- **Hairline Strong** (#c1ccd6): Stronger 1px border for inputs
- **Hairline Dark** (#1c2d38): Border on dark surfaces

### Text
- **Ink** (#001e2b): Primary headlines and body text (deep navy-teal)
- **Charcoal** (#1c2d38): Body emphasis
- **Slate** (#3d4f5b): Secondary text
- **Steel** (#5c6c7a): Tertiary text, captions
- **Stone** (#7c8c9a): Muted labels
- **Muted** (#a8b3bc): Disabled, placeholders
- **On Dark** (#ffffff): White text on dark surfaces
- **On Dark Muted** (#a8b3bc): Reduced-opacity white

### Semantic
- **Warning Background** (#fff8e0): Pale yellow callout bg
- **Warning Text** (#946f3f): Warning state copy color

## Typography

### Font Family
**Euclid Circular A** (primary): MongoDB's geometric sans-serif. Fallbacks: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif.
**Source Code Pro** (code): Monospace for code mockups. Fallbacks: 'SF Mono', Menlo, Consolas, monospace.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 72px | 500 | 1.10 | -1.5px | Hero ("One data platform") |
| `{typography.display-lg}` | 56px | 500 | 1.15 | -1px | Major section openers |
| `{typography.heading-1}` | 48px | 500 | 1.20 | -0.5px | Page-level headlines |
| `{typography.heading-2}` | 36px | 500 | 1.25 | -0.5px | Subsection headlines |
| `{typography.heading-3}` | 28px | 500 | 1.30 | 0 | Card titles |
| `{typography.heading-4}` | 22px | 500 | 1.35 | 0 | Feature tile titles |
| `{typography.heading-5}` | 18px | 600 | 1.40 | 0 | Smaller card titles, FAQ questions |
| `{typography.subtitle}` | 18px | 400 | 1.50 | 0 | Hero subtitle, lead body |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Primary body text |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Secondary body, table cells |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | Active sidebar, button labels |
| `{typography.caption-bold}` | 13px | 600 | 1.40 | 0 | Badge labels |
| `{typography.micro-uppercase}` | 11px | 600 | 1.40 | 1px | Section eyebrows, course category tags |
| `{typography.button-md}` | 14px | 600 | 1.30 | 0 | Pill button labels |
| `{typography.code-md}` | 14px | 400 | 1.55 | 0 | Code mockups |

### Principles
- Tight hero leading (1.10) on 72px display
- Negative letter-spacing on display sizes (-1.5px to -0.5px)
- 600 weight reserved for buttons and small emphasis (FAQ headings, badges)
- Generous body leading (1.55) for technical documentation readability

## Layout

### Spacing System
- **Base unit**: 4px (8px primary increment)
- **Tokens**: `4px` (4px) through `120px` (120px)
- **Section rhythm**: Marketing pages use `96px` (96px); pricing tightens to `64px` (64px)

### Grid & Container
- 1280px max-width with 32px gutters
- Pricing: 3-tier card row, dense feature comparison table below
- Learn catalog: 3-up course tile grid, 4-up certification grid
- AI use cases: 2-column hero with atmospheric illustration

### Whitespace Philosophy
Marketing surfaces give content generous breathing room — `120px` (120px) hero padding for deep teal bands. Pricing/learn surfaces tighten dramatically.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow; `#e1e5e8` border | Default cards, table rows |
| 1 (subtle) | `rgba(0, 30, 43, 0.04) 0px 1px 2px 0px` | Hover-elevated tiles |
| 2 (card) | `rgba(0, 30, 43, 0.08) 0px 4px 12px 0px` | Feature cards |
| 3 (mockup) | `rgba(0, 30, 43, 0.12) 0px 12px 24px -4px` | Code mockup over hero |
| 4 (modal) | `rgba(0, 30, 43, 0.16) 0px 16px 48px -8px` | Modals, dropdowns |

### Decorative Depth
- Dark teal hero bands carry atmospheric gradient depth
- Code mockup cards on hero use canvas-dark surface with terminal aesthetic
- Pale-mint pricing-feature tier uses brand-tinted shadow

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `4px` | 4px | Course category tags |
| `6px` | 6px | Type badges, code chips |
| `8px` | 8px | Inputs, search-pill, code blocks |
| `12px` | 12px | Cards, pricing tiers, course tiles |
| `16px` | 16px | Larger feature panels |
| `24px` | 24px | Featured product showcases |
| `9999px` | 9999px | All buttons, status badges |

### Photography Geometry
- Hero illustrations sit on full-bleed dark backgrounds
- Course tile thumbnails use `12px` corners
- Customer logos wall: wordmarks at consistent 60–80px height

## Components

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### Buttons

**`button-primary`** — Bright MongoDB green pill primary CTA, the dominant action.
- Background `#00ed64`, text `#001e2b` (deep navy), typography `{typography.button-md}`, padding `10px 22px`, rounded `9999px`.
- Pressed state `button-primary-pressed` deepens to `#008c34`.
- Disabled state `button-primary-disabled` uses `#e1e5e8` background.

**`button-secondary`** — Outlined pill for secondary actions.
- Background transparent, text `#001e2b`, border `1px solid #c1ccd6`, typography `{typography.button-md}`, padding `10px 22px`, rounded `9999px`.

**`button-on-dark`** — Bright green pill on dark hero bands.
- Background `#00ed64`, text `#001e2b`, typography `{typography.button-md}`, padding `10px 22px`, rounded `9999px`.

**`button-secondary-on-dark`** — Outlined pill on dark backgrounds.
- Background transparent, text `#ffffff`, border `1px solid #1c2d38`, typography `{typography.button-md}`, padding `10px 22px`, rounded `9999px`.

**`button-ghost`** — Quieter rectangular ghost button.
- Background transparent, text `#001e2b`, typography `{typography.button-md}`, padding `8px 12px`, rounded `8px`.

**`button-link`** — Inline green text link.
- Background transparent, text `#00684a`, typography `{typography.body-sm-medium}`, padding `0`.

### Cards & Containers

**`card-base`** — Standard content card.
- Background `#ffffff`, rounded `12px`, padding `24px`, border `1px solid #e1e5e8`.

**`card-feature`** — Feature card with larger padding.
- Background `#ffffff`, rounded `12px`, padding `32px`, border `1px solid #e1e5e8`.

**`card-product-deploy`** — Product deployment card ("MongoDB Atlas / Community").
- Background `#ffffff`, rounded `12px`, padding `32px`, border `1px solid #e1e5e8`.

**`card-feature-dark`** — Dark teal feature card on hero band.
- Background `#001e2b`, text `#ffffff`, rounded `12px`, padding `32px`.

**`card-course`** — MongoDB University course tile.
- Background `#ffffff`, rounded `12px`, padding `24px`, border `1px solid #e1e5e8`.
- Top: colored category tag. Below: title `{typography.heading-5}`, description `{typography.body-sm}`, "Get Started →" link.

**`card-cert`** — Certification card.
- Background `#ffffff`, rounded `12px`, padding `24px`, border `1px solid #e1e5e8`.

**`pricing-card`** — Standard pricing tier card.
- Background `#ffffff`, rounded `12px`, padding `32px`, border `1px solid #e1e5e8`.

**`pricing-card-featured`** — Featured pricing tier (Flex tier, mint background + green border).
- Background `#e3fcef`, rounded `12px`, padding `32px`, border `2px solid #00ed64`.

### Inputs & Forms

**`text-input`** — Standard text field.
- Background `#ffffff`, text `#001e2b`, border `1px solid #c1ccd6`, rounded `8px`, padding `12px 16px`, height 44px.

**`text-input-focused`** — Activated state.
- Border switches to `2px solid #00684a`.

**`search-pill`** — Standard 44px search bar.
- Background `#f9fbfa`, text `#5c6c7a`, typography `{typography.body-md}`, rounded `8px`, height 44px, border `1px solid #c1ccd6`.

**`search-pill-large`** — Large 56px search bar (top of MongoDB University catalog).
- Background `#ffffff`, text `#5c6c7a`, typography `{typography.body-md}`, rounded `8px`, height 56px, border `1px solid #c1ccd6`.

### Tabs

**`pill-tab`** + **`pill-tab-active`** — Pill-style tab nav (top of pricing: "MongoDB Atlas / Enterprise Advanced").
- Inactive: text `#5c6c7a`, border `1px solid #e1e5e8`, padding `8px 16px`, rounded `9999px`.
- Active: background `#001e2b`, text `#ffffff`.

**`segmented-tab`** + **`segmented-tab-active`** — Underline-style tab navigation.
- Inactive: text `#5c6c7a`, no border. Active: text `#00684a`, 2px bottom border in `#00684a`.

### Badges & Status

**`badge-green`** — Bright green badge for new product highlights.
- Background `#00ed64`, text `#001e2b`, typography `{typography.caption-bold}`, rounded `6px`, padding `2px 8px`.

**`badge-green-soft`** — Pale-mint pill for success/free indicators.
- Background `#c3f0d2`, text `#00684a`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`badge-purple`** — Purple course category tag.
- Background `#7b3ff2`, text `#ffffff`, typography `{typography.caption-bold}`, rounded `6px`, padding `2px 8px`.

**`badge-orange`** — Orange course category tag.
- Background `#fa6e39`, text `#ffffff`, typography `{typography.caption-bold}`, rounded `6px`, padding `2px 8px`.

**`badge-popular`** — "Most Popular" tier indicator (dark teal pill with green text).
- Background `#001e2b`, text `#00ed64`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`promo-banner`** — Dark teal sticky promo strip ABOVE the top nav.
- Background `#001e2b`, text `#ffffff`, typography `{typography.body-sm-medium}`, padding `12px 16px`.

### Code

**`code-block`** — Code container.
- Background `#001e2b`, text `#ffffff`, typography `{typography.code-md}`, rounded `8px`, padding `16px`.

**`code-mockup-card`** — Embedded code mockup on hero band.
- Background `#001e2b`, text `#ffffff`, rounded `12px`, padding `20px`. Carries terminal-aesthetic code snippet.

### Tables

**`comparison-table`** — Pricing feature comparison table.
- Background `#ffffff`, text `#001e2b`, typography `{typography.body-sm}`, rounded `8px`, border `1px solid #e1e5e8`.

**`comparison-row`** — Individual feature row.
- Background `#ffffff`, text `#001e2b`, padding `16px 20px`, bottom border `1px solid #eceff1`.

### Documentation Components

**`service-tile`** — Tile in "Customize your deployment" 6-up grid.
- Background `#ffffff`, rounded `12px`, padding `24px`, border `1px solid #e1e5e8`.

**`why-card`** — "Loved by builders" feature card.
- Background `#f9fbfa`, rounded `12px`, padding `24px`.

**`customer-testimonial-card`** — Customer quote card.
- Background `#ffffff`, rounded `12px`, padding `32px`, border `1px solid #e1e5e8`.

**`logo-wall-item`** — Customer logo wordmark cell.
- Background transparent, text `#5c6c7a`, typography `{typography.body-md-medium}`, padding `20px`.

**`faq-accordion-item`** — FAQ panel.
- Background `#ffffff`, rounded `8px`, padding `24px`, bottom border `1px solid #e1e5e8`.

### Navigation

**Top Navigation (Marketing)** — Sticky white bar.
- Background `#ffffff`, height ~64px, bottom border `1px solid #e1e5e8`.
- Left: MongoDB leaf logo + "Solutions / Resources / Company / Pricing" links.
- Right: "Sign In" link + bright-green pill "Try Free" CTA.

### Signature Components

**`hero-band-dark`** — Deep teal hero band with embedded code mockup.
- Background `#001e2b`, text `#ffffff`, padding `120px`.
- Layout: centered headline `{typography.hero-display}`, subtitle, button row, `code-mockup-card` below.

**`hero-platform-card`** — Lighter-teal platform showcase card on dark hero.
- Background `#00684a`, text `#ffffff`, rounded `16px`, padding `32px`.

**`cta-banner-dark`** — Dark CTA banner at the bottom of feature pages.
- Background `#001e2b`, text `#ffffff`, rounded `12px`, padding `64px`.

**`footer-region`** — Dark teal multi-column footer.
- Background `#001e2b`, padding `64px 32px`.
- 6-column link grid.
- Section headings in `{typography.body-sm-medium}` `#ffffff`.

**`footer-link`** — Individual footer link.
- Background transparent, text `#a8b3bc`, typography `{typography.body-sm}`, padding `4px 0`.

## Do's and Don'ts

### Do
- Use `#00ed64` (bright MongoDB green) for primary CTAs everywhere
- Pair dark-teal hero bands with bright green CTA pills
- Apply `9999px` to every button, every status badge
- Apply `12px` (12px) to cards consistently
- Use category accent colors (purple, orange, green, teal) ONLY for course tags
- Maintain Euclid Circular A across every UI surface
- Use code mockup cards with terminal-aesthetic content for product showcases

### Don't
- Don't use the bright green for body text or large surfaces
- Don't introduce additional accent colors beyond the brand green and category-encoding palette
- Don't soften corners on buttons; the pill is a brand signature
- Don't replace deep teal hero bands with white hero bands
- Don't apply heavy shadows on flat documentation cards; reserve elevation for code mockups
- Don't use Source Code Pro for prose

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero 36px. Pricing 1-up. Course catalog 1-up. |
| Mobile (large) | 480 – 767px | Course tiles 2-up. Hero 48px. |
| Tablet | 768 – 1023px | 2-column feature grids. Hero 56px. |
| Desktop | 1024 – 1279px | 3-tier pricing card row. 3-up course catalog. Hero 64px. |
| Wide Desktop | ≥ 1280px | Full 72px hero presentation. |

### Touch Targets
- Pill buttons render at 40–44px effective height
- Form inputs render at 44px height
- Search pill (large) renders at 56px
- Pill tabs ~32px → 44px on mobile

### Collapsing Strategy
- **Promo banner** stays full-width; truncates at < 480px
- **Top nav** below 1024px collapses to hamburger
- **Hero band**: code mockup card moves below text on mobile
- **Pricing tiers**: 3-column → 2-column tablet → 1-column mobile
- **Course catalog**: 3-up → 2-up tablet → 1-up mobile
- **Hero typography**: 72px → 56px → 48px → 36px
- **Footer**: 6-column desktop → 3-column tablet → accordion mobile

### Image Behavior
- Atmospheric AI imagery uses 16:9 ratio with full-bleed scaling
- Code mockup card content remains readable across breakpoints
- Customer logo wall: wordmarks at consistent 60–80px height

## Iteration Guide

1. Focus on ONE component at a time
2. Reference component names and tokens directly
3. Run `npx @google/design.md lint DESIGN.md` after edits
4. Add new variants as separate `components:` entries
5. Default to `{typography.body-md}` for body
6. Keep `#00ed64` as the primary CTA across all surfaces
7. Pill-shaped buttons (`9999px`) always
8. Dark-teal hero bands frame primary CTAs

## Known Gaps

- Specific dark-mode token values for canvas/surface beyond hero bands not surfaced
- Animation/transition timings not extracted; recommend 150–200ms ease
- Form validation success state not explicitly captured
- Course-tile category color mappings are observation-based
