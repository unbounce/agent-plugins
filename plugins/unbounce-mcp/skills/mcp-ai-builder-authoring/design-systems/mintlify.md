# Design System: Mintlify

## Overview

Mintlify positions itself at the intersection of polished marketing presentation and developer-grade documentation density. The home and startups pages open with cinematic atmospheric heroes — soft sky-gradient backdrops with cloud illustrations on the homepage, dark teal-to-mint gradients with a rocket launch on the startups page — that feel more like a SaaS landing aesthetic than a developer tool. Then the deeper surfaces (pricing comparison, live documentation pages) collapse into dense, high-information layouts where Inter body type carries 14–16px copy across long-form prose, syntax-highlighted code blocks, and 3-column documentation grids.

The brand's signature mint green (#00d4a4) appears sparingly but decisively — on the hero "Get started" pill button, the green checkmark icons inside feature lists, the "Featured" pricing tier border, and active state indicators inside docs UI. Black-pill primary buttons dominate the marketing flow; white-on-dark inversions appear on dark hero bands. The signature pairing of Inter (body, headings) with Geist Mono (code blocks, inline references, type signatures) reinforces the developer-tool DNA without requiring a third typeface.

**Key Characteristics:**
- Atmospheric gradient hero bands (sky-blue to cream on homepage; teal-to-mint on startups) provide cinematic marketing presentation
- Signature Mintlify mint green (#00d4a4) reserved for accent CTAs, active states, and feature confirmations
- Black-pill primary buttons (#0a0a0a + `9999px`) for marketing CTAs
- Inter for all UI prose; Geist Mono for code blocks, inline code, and type/property signatures
- 3-column documentation layout (sidebar / prose / TOC) with dense 14px body type for long-form developer reading
- Tightly-controlled radius scale: marketing uses `12px` (12px), pill buttons use `9999px` — no in-between corner softening
- Vibrant testimonial card (`#f55a3c`) breaks color rhythm intentionally for emotional impact

## Colors

> Source pages: mintlify.com/ (homepage), /startups (program page), /pricing (comparison), /docs/components/tabs (live documentation). Token coverage was identical across all four pages.

### Brand & Accent
- **Mintlify Mint** (#00d4a4): Signature accent — used on hero "Get started" pill button, green checkmarks in feature lists, featured pricing tier border accent, sidebar active indicator dots.
- **Deep Mint** (#00b48a): Pressed/active variant of the mint accent.
- **Soft Mint** (#7cebcb): Subtle background tint for success states and confirmation surfaces.
- **Brand Tag** (#3772cf): Documentation tag and reference color (used in `<Tabs>` JSX-style annotations and code-tag chips).
- **Brand Annotate** (#1ba673): Inline code annotation green (used in twoslash code annotation system).
- **Brand Warn** (#c37d0d): Code warning highlight (deprecated, caution).
- **Brand Error** (#d45656): Red used for required-field labels and error highlight.
- **Testimonial Orange** (#f55a3c): Warm coral-orange used on the "Cursor" testimonial card and warm callout surfaces.

### Surface
- **Canvas White** (#ffffff): Primary page and card background.
- **Canvas Dark** (#0a0a0a): Promo banner, dark inversion surfaces, code editor wrapper.
- **Surface** (#f7f7f7): Subtle section backgrounds, search-pill rest, code-inline background, sidebar active state.
- **Surface Soft** (#fafafa): Quieter section backgrounds and FAQ accordion.
- **Surface Code** (#1c1c1e): Dark code-block wrapper background.
- **Hairline** (#e5e5e5): 1px borders and primary dividers.
- **Hairline Soft** (#ededed): Quieter table-row dividers and secondary section breaks.

### Hero Atmospheric
- **Hero Sky From / To** (#87a8c8, #f5e9d8): Atmospheric sky-blue to soft cream gradient on the homepage hero.
- **Hero Dark From / To** (#1a3d4a, #2d5a4f): Dark teal to mint gradient on the startups hero.

### Text
- **Ink** (#0a0a0a): Primary headlines and CTA text.
- **Charcoal** (#1c1c1e): Body text, code-inline foreground.
- **Slate** (#3a3a3c): Secondary text and metadata.
- **Steel** (#5a5a5c): Tertiary text, table headers, sidebar inactive items, footer links.
- **Stone** (#888888): Captions, twoslash cursor color, muted labels.
- **Muted** (#a8a8aa): De-emphasized labels and disabled text.
- **On Dark** (#ffffff): White text on dark surfaces (hero bands, code blocks, promo banner).
- **On Dark Muted** (#b3b3b3): Reduced-opacity white for code-block headers and metadata on dark.

### Semantic
- Error tones derive from `#d45656` for input borders, required-field labels, and validation messaging.

## Typography

### Font Family
**Inter** (primary): Variable typeface optimized for UI legibility. Used across every UI surface — body, headings, navigation, button labels, captions. Fallbacks: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif.

**Geist Mono** (code): Monospace typeface used inside code blocks, inline code references, type signatures (e.g. `string`, `number`, `boolean`), and property names in API documentation. Fallbacks: 'SF Mono', Menlo, Consolas, 'Geist Mono Fallback', monospace.

The brand uses no italic variants of either face — emphasis comes from weight (500/600), color shift, or background highlighting (in code references).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 72px | 600 | 1.05 | -2px | Marketing hero display ("The intelligent Knowledge Platform") |
| `{typography.display-lg}` | 56px | 600 | 1.10 | -1.5px | Major section opener ("Built for the intelligence age") |
| `{typography.heading-1}` | 48px | 600 | 1.10 | -1px | Page-level headlines ("Pricing on your terms") |
| `{typography.heading-2}` | 36px | 600 | 1.20 | -0.5px | Section headlines ("Apply to the Mintlify startup program") |
| `{typography.heading-3}` | 28px | 600 | 1.25 | 0 | Subsection headers, "Tabs" docs page title |
| `{typography.heading-4}` | 22px | 600 | 1.30 | 0 | Card titles, larger feature headers |
| `{typography.heading-5}` | 18px | 600 | 1.40 | 0 | Smaller feature headers, FAQ question titles |
| `{typography.subtitle}` | 18px | 400 | 1.50 | 0 | Hero subtitle, lead body |
| `{typography.body-md}` | 16px | 400 | 1.50 | 0 | Primary body text |
| `{typography.body-md-medium}` | 16px | 500 | 1.50 | 0 | Body emphasis |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Secondary body, table cells, navigation |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | Active sidebar nav, button labels, tab labels |
| `{typography.caption}` | 13px | 400 | 1.40 | 0 | Helper text, fine print, code-block headers |
| `{typography.caption-bold}` | 13px | 600 | 1.40 | 0 | Badge labels |
| `{typography.micro}` | 12px | 500 | 1.40 | 0 | Footer microcopy, label chips |
| `{typography.micro-uppercase}` | 11px | 600 | 1.40 | 0.5px | Sidebar section headers, "REQUIRED" labels |
| `{typography.button-md}` | 14px | 500 | 1.30 | 0 | Pill button labels |
| `{typography.code-md}` | 14px | 400 | 1.50 | 0 | Code block content |
| `{typography.code-sm}` | 13px | 400 | 1.40 | 0 | Smaller code, type signatures |
| `{typography.code-inline}` | 13px | 500 | 1.30 | 0 | Inline `<Tabs>` references in body |

### Principles
- **Tight hero leading** (1.05) creates magazine-grade display headlines on the 72px hero
- **Negative letter-spacing** progresses inversely with size — display sizes use -2px to -1.5px; smaller headings relax to 0
- **Documentation-grade body** (1.50 line-height on 14–16px) ensures comfortable long-form reading in dense docs surfaces
- **Inter / Geist Mono pairing** — Inter for everything else, Geist Mono surgically for code references; the contrast between the two is the brand's developer-respect signal
- **Uppercase micro labels** with +0.5px letter-spacing carry sidebar section headers and "REQUIRED" annotation tags

## Layout

### Spacing System
- **Base unit**: 4px (8px primary increment)
- **Tokens**: `4px` (4px) · `8px` (8px) · `12px` (12px) · `16px` (16px) · `20px` (20px) · `24px` (24px) · `32px` (32px) · `40px` (40px) · `48px` (48px) · `64px` (64px) · `96px` (96px) · `120px` (120px)
- **Section rhythm**: Marketing pages use `96px` (96px) between major bands; pricing comparison tightens to `64px` (64px); documentation surfaces use `32px` (32px) between subsections
- **Card internal padding**: Standard `24px` (24px) for compact cards; `32px` (32px) for pricing cards and feature panels; testimonial card pushes to `64px` (64px) for hero-card presence

### Grid & Container
- Marketing pages use a 1280px max-width with 32px gutters
- Hero and feature bands often use 2-column splits (text left, illustration/mockup right)
- Pricing page renders 3 tier cards in a row at desktop (FREE / Lift Off / Custom), then a comprehensive feature comparison table below
- Documentation pages use a strict 3-column grid: left sidebar nav (~240px), center prose (~720px max-width), right TOC (~200px)
- Logo walls use 6-up rows of customer logos at 80–100px height each

### Whitespace Philosophy
Marketing surfaces give content generous breathing room — `120px` (120px) above-the-fold creates space for atmospheric gradient backdrops to read clearly. Documentation tightens dramatically: section gaps drop to `32px` (32px), table rows pack to `16px` (16px), sidebar nav compresses to `8px` (8px) vertical rhythm.

## Elevation & Depth

The system runs predominantly flat with strategic atmospheric depth.

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow; `#e5e5e5` border | Default cards, table rows, form inputs |
| 1 (subtle) | `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` | Hover-elevated tiles, subtle highlights |
| 2 (card) | `rgba(0, 0, 0, 0.08) 0px 4px 12px 0px` | Standard feature cards |
| 3 (mockup) | `rgba(0, 0, 0, 0.12) 0px 24px 48px -8px` | Hero product mockup framing — the deep diffuse drop on the homepage hero docs preview |
| 4 (brand-tinted) | `rgba(0, 212, 164, 0.08) 0px 8px 24px` | Featured pricing tier glow |

### Decorative Depth
- The homepage hero uses an atmospheric photographic backdrop (cloud illustration on sky-gradient) for depth — no shadow needed; the imagery does the work
- The startups hero uses a similar treatment with a rocket-launch illustration cutting across the dark teal gradient
- Code blocks carry their own internal depth via syntax-highlighting color hierarchy on the dark surface; no shadow used

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `4px` | 4px | Inline code chips, micro tags |
| `6px` | 6px | Sidebar nav items, type badges |
| `8px` | 8px | Inputs, search pill, code blocks, secondary cards |
| `12px` | 12px | Standard cards, pricing tiers, hero mockup, FAQ items |
| `16px` | 16px | Larger feature panels |
| `24px` | 24px | Featured product showcase tiles |
| `9999px` | 9999px | All buttons, pill tabs, badges |

The radius scale is tightly disciplined — the brand never uses a corner softening between `8px` (8px) and `12px` (12px) for the same component family. Pill buttons (`9999px`) are used universally; rectangular cards use `12px` (12px) consistently.

### Photography Geometry
- Hero illustrations (cloud, rocket) sit on full-bleed gradient backdrops with no internal framing
- Customer logo walls use 1:1 ratio cells without rounding (logos are presented inline as wordmarks)
- Testimonial photos use 1:1 aspect with `8px` (8px) softening
- Code editor mockup hero image uses `12px` (12px) corners on a hairline-bordered card with a deep diffuse drop shadow

## Components

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### Buttons

**`button-primary`** — Black pill primary CTA, the dominant action across all surfaces.
- Background `#0a0a0a`, text `#ffffff`, typography `{typography.button-md}`, padding `10px 20px`, rounded `9999px`.
- Pressed state `button-primary-pressed` lifts to `#1c1c1e`.
- Disabled state `button-primary-disabled` uses `#e5e5e5` background and `#a8a8aa` text.

**`button-accent-green`** — Mint green pill for brand-emphasis CTAs (hero "Get started", featured pricing CTA).
- Background `#00d4a4`, text `#0a0a0a`, typography `{typography.button-md}`, padding `10px 20px`, rounded `9999px`.

**`button-on-dark`** — White pill for use on dark hero bands (startups page "Get started").
- Background `#ffffff`, text `#0a0a0a`, typography `{typography.button-md}`, padding `10px 20px`, rounded `9999px`.

**`button-secondary`** — Outlined pill for secondary actions.
- Background transparent, text `#0a0a0a`, border `1px solid #e5e5e5`, typography `{typography.button-md}`, padding `10px 20px`, rounded `9999px`.

**`button-ghost`** — Quieter rectangular ghost button (sidebar action, tertiary nav).
- Background transparent, text `#0a0a0a`, typography `{typography.button-md}`, padding `8px 12px`, rounded `8px`.

**`button-link`** — Inline text link styled as a subtle button.
- Background transparent, text `#0a0a0a`, typography `{typography.body-sm-medium}`, padding `0`. Underline appears on activation.

**`button-icon-circular`** — 32×32px circular utility button (close, copy, arrow).
- Background `#ffffff`, text `#0a0a0a`, border `1px solid #e5e5e5`, rounded `9999px`.

### Cards & Containers

**`card-base`** — Standard documentation/feature card.
- Background `#ffffff`, rounded `12px`, padding `24px`, border `1px solid #e5e5e5`.

**`card-feature`** — Feature panel on light gray surface.
- Background `#f7f7f7`, rounded `12px`, padding `32px`.

**`card-help`** — "Need help?" CTA cards below the pricing comparison ("Quickstart guide", "Guide to technical writing", "Founder", "Sales").
- Background `#ffffff`, rounded `12px`, padding `24px`, border `1px solid #e5e5e5`.

**`card-startup-perk`** — Startup-program perk grid item ("Discounts and credits", "Priority support", "Startup pack", "Founder community").
- Background `#ffffff`, rounded `12px`, padding `24px`, border `1px solid #e5e5e5`. Carries an icon at top, heading `{typography.heading-5}`, description `{typography.body-sm}` `#5a5a5c`.

**`pricing-card`** — Standard pricing tier card.
- Background `#ffffff`, rounded `12px`, padding `32px`, border `1px solid #e5e5e5`.
- Title `{typography.heading-3}`, price `{typography.display-lg}`, feature list `{typography.body-sm}` with green checkmark icons.

**`pricing-card-featured`** — Highlighted pricing tier (Lift Off / featured plan).
- Background `#ffffff`, rounded `12px`, padding `32px`, border `2px solid #00d4a4`, soft brand-tinted shadow `rgba(0, 212, 164, 0.08) 0px 8px 24px`.

**`testimonial-card-feature`** — Bright orange large testimonial card with photo + quote ("Cursor — Every YC batch we consistently see the top performing startups use Mintlify to build their docs.").
- Background `#f55a3c`, text `#ffffff`, rounded `12px`, padding `64px`. Photo on right, large quote in `{typography.heading-3}` left, attribution below in `{typography.body-sm-medium}`.

**`testimonial-card-quote`** — Smaller white testimonial card on the startups page.
- Background `#ffffff`, rounded `12px`, padding `32px`, border `1px solid #e5e5e5`.

**`founder-quote-card`** — Cursor founder testimonial card variant on the orange surface.
- Background `#f55a3c`, text `#ffffff`, rounded `12px`, padding `32px`. Carries the specific founder portrait + quote treatment.

**`startup-program-card`** — Larger application/program card containing perks grid + apply CTA.
- Background `#ffffff`, rounded `12px`, padding `32px`, border `1px solid #e5e5e5`.

### Inputs & Forms

**`text-input`** — Standard text field.
- Background `#ffffff`, text `#0a0a0a`, border `1px solid #e5e5e5`, rounded `8px`, padding `12px 16px`, height 40px.

**`text-input-focused`** — Activated state.
- Border switches to `2px solid #00d4a4` — focus uses the brand mint as the activation signal.

**`search-pill`** — Documentation top-bar search.
- Background `#f7f7f7`, text `#5a5a5c`, typography `{typography.body-sm}`, rounded `8px`, height 36px, border `1px solid #e5e5e5`.

### Tabs

**`segmented-tab`** + **`segmented-tab-active`** — Underline-style tab navigation (used inside docs Tabs component for "First tab / Second tab / Third tab").
- Inactive: text `#5a5a5c`, transparent background, padding `12px 16px`. Active: text `#0a0a0a`, 2px bottom border in `#0a0a0a`.

**`pill-tab`** + **`pill-tab-active`** — Pill-style tab nav (top of pricing page: "Pricing / Roadmap").
- Inactive: background `#ffffff`, text `#5a5a5c`, border `1px solid #e5e5e5`, padding `8px 16px`, rounded `9999px`.
- Active: background `#0a0a0a`, text `#ffffff`, no border.

**`toggle-monthly-yearly`** — Two-state pill toggle (Monthly / Annual on pricing page).
- Background `#f7f7f7`, rounded `9999px`, padding `4px`. Active state moves a white pill thumb to the selected position.

### Badges & Status

**`badge-discount`** — Small green "Save 20%" badge attached to annual toggle.
- Background `#00d4a4`, text `#0a0a0a`, typography `{typography.caption-bold}`, rounded `9999px`, padding `2px 8px`.

**`badge-required`** — Red "REQUIRED" label on documentation property rows.
- Background `#d45656`, text `#ffffff`, typography `{typography.micro-uppercase}`, rounded `6px`, padding `2px 6px`.

**`badge-type`** — Type signature chip in documentation (e.g. `string`, `number`, `boolean`).
- Background `#f7f7f7`, text `#5a5a5c`, typography `{typography.code-sm}`, rounded `6px`, padding `2px 6px`.

**`badge-tag`** — Documentation tag chip (e.g. `<Tabs>` reference highlighted in body text).
- Background `rgba(55, 114, 207, 0.15)`, text `#3772cf`, typography `{typography.caption-bold}`, rounded `6px`, padding `2px 8px`.

**`promo-banner`** — Sticky black promo strip ABOVE the top nav (when present).
- Background `#0a0a0a`, text `#ffffff`, typography `{typography.body-sm-medium}`, padding `12px 16px`.

### Code

**`code-block`** — Syntax-highlighted code container.
- Background `#1c1c1e`, text `#ffffff`, typography `{typography.code-md}`, rounded `8px`, padding `16px`.

**`code-block-header`** — Header bar above the code with language label + copy button.
- Background `#1c1c1e`, text `#b3b3b3`, typography `{typography.caption}`, padding `8px 16px`, bottom border `1px solid #1f1f1f`.

**`code-inline`** — Inline `<Tabs>` reference in body prose.
- Background `#f7f7f7`, text `#1c1c1e`, typography `{typography.code-inline}`, rounded `4px`, padding `2px 6px`, border `1px solid #e5e5e5`.

**`copy-code-button`** — "Copy code" button in code-block header.
- Background transparent, text `#b3b3b3`, typography `{typography.caption}`, rounded `6px`, padding `4px 8px`, border `1px solid #1f1f1f`.

### Documentation Components

**`property-row`** — API property documentation row (e.g. `defaultIndex` on the Tabs page).
- Background transparent, text `#0a0a0a`, typography `{typography.body-sm}`, padding `16px 0`, bottom border `1px solid #ededed`.
- Layout: property name in `{typography.code-inline}` + type badge + optional REQUIRED badge + description below in `{typography.body-sm}` `#5a5a5c`.

**`feature-comparison-table`** — Detailed pricing-page feature comparison table.
- Background `#ffffff`, text `#0a0a0a`, typography `{typography.body-sm}`, rounded `8px`, border `1px solid #e5e5e5`.

**`feature-comparison-row`** — Individual row inside the comparison table.
- Background `#ffffff`, text `#0a0a0a`, padding `16px 20px`, bottom border `1px solid #ededed`. Section dividers in `{typography.micro-uppercase}` `#5a5a5c`.

**`sidebar-nav-item`** + **`sidebar-nav-item-active`** — Documentation left rail link entries.
- Inactive: background transparent, text `#5a5a5c`, typography `{typography.body-sm}`, rounded `6px`, padding `8px 16px`.
- Active: background `#f7f7f7`, text `#0a0a0a`, typography `{typography.body-sm-medium}`.

**`sidebar-section-header`** — Uppercase section header inside sidebar (e.g. "COMPONENTS", "PRIMITIVES").
- Background transparent, text `#5a5a5c`, typography `{typography.micro-uppercase}`, padding `16px 16px 8px`.

**`doc-toc-item`** + **`doc-toc-item-active`** — Right-rail table-of-contents links.
- Inactive: background transparent, text `#5a5a5c`, typography `{typography.body-sm}`, padding `4px 0`.
- Active: text `#0a0a0a`, typography `{typography.body-sm-medium}`, optional left-border accent in `#00d4a4`.

### Navigation

**Top Navigation (Marketing)** — Sticky white bar with logo, link list, and right-side CTAs.
- Background `#ffffff`, height ~64px, bottom border `1px solid #ededed`.
- Left: Mintlify wordmark + horizontal link list (Solutions, Pricing, Customers, Documentation, Changelog).
- Right: secondary "Talk to sales" + black-pill "Get Started".

**Top Navigation (Documentation)** — Compressed nav with center search-pill and right-side account/upgrade CTAs.
- Background `#ffffff`, height ~56px. Search-pill at center, "Documentation / Guides / API Reference / Changelog" links + "Talk to us" + green "Get started" right.

### Signature Components

**`hero-band-sky`** — Homepage hero with atmospheric sky-blue to cream gradient and cloud illustrations.
- Background gradient `linear-gradient(180deg, #87a8c8 0%, #f5e9d8 100%)`, text `#ffffff` (early portion of gradient) shifting to `#0a0a0a` further down, padding `120px`.
- Layout: centered hero headline in `{typography.hero-display}`, centered subtitle in `{typography.subtitle}`, centered button row (`button-accent-green` "Get started" + `button-secondary` "Talk to us"), product mockup below the buttons.

**`hero-band-dark`** — Startups hero with dark teal-to-mint gradient and rocket launch illustration.
- Background gradient `linear-gradient(135deg, #1a3d4a 0%, #2d5a4f 100%)`, text `#ffffff`, padding `120px`.
- Layout: hero headline left in `{typography.hero-display}` `#ffffff`, illustration right (rocket cutting across the gradient), button row uses `button-on-dark` (white pill) + ghost link.

**`hero-product-mockup`** — Code-editor mockup framed inside the homepage hero.
- Background `#ffffff`, rounded `12px`, border `1px solid #ededed`, deep shadow `rgba(0, 0, 0, 0.12) 0px 24px 48px -8px`.
- Carries a documentation page preview inside (sidebar on left, prose body, mock UI controls).

**`logo-wall-item`** — Customer logo cell in 6-up trust-row grids ("Anthropic / Cognition / Mintlify / Vercel / react / Lovable", "Stripe / Block / PayPal / Compound / Auth").
- Background transparent, text `#5a5a5c`, typography `{typography.body-md-medium}`, padding `20px`.
- Logos rendered as wordmarks with consistent vertical centering.

**`faq-accordion-item`** — Frequently-asked-questions panel item (visible on pricing page).
- Background `#ffffff`, rounded `8px`, padding `24px`, border `1px solid #ededed`.
- Question in `{typography.heading-5}`, expanded answer in `{typography.body-md}` `#5a5a5c`, chevron icon in `#5a5a5c` 16px.

**`footer-region`** — Multi-column site footer.
- Background `#ffffff`, top border `1px solid #e5e5e5`, padding `64px 32px`.
- 5 column groups (Explore / Resources / Company / Legal + brand mark column).
- Section headers in `{typography.body-sm-medium}` `#0a0a0a`, link items in `{typography.body-sm}` `#5a5a5c`.

**`footer-link`** — Individual link entry in the footer.
- Background transparent, text `#5a5a5c`, typography `{typography.body-sm}`, padding `4px 0`.

## Do's and Don'ts

### Do
- Reserve `#00d4a4` (Mintlify mint) for accent CTAs and active state indicators only — even one accent button per viewport carries weight
- Use `#0a0a0a` (black) as the dominant CTA on light backgrounds; switch to `button-on-dark` (white pill) on dark hero bands
- Apply `9999px` to every button and pill; never soften pill corners
- Pair Inter (UI prose) with Geist Mono (code) — never introduce a third typeface
- Use atmospheric gradient hero bands sparingly (only the homepage and startups page); keep deeper surfaces flat and dense
- Apply `12px` (12px) consistently on cards; use `8px` (8px) only on compact UI like search pills and code blocks
- Keep documentation prose at `{typography.body-md}` (16px) with 1.50 line-height — never compress

### Don't
- Don't use `#00d4a4` on body text or large surfaces — it loses signal
- Don't introduce additional accent colors beyond mint, tag-blue, error-red, and the testimonial orange
- Don't apply heavy shadows on flat documentation cards; reserve elevation for the hero product mockup
- Don't reduce documentation line-height below 1.50 — long-form readability suffers
- Don't combine atmospheric gradients with multiple competing color accents in the same hero — the sky/dark gradient is the brand mood; let it breathe
- Don't use Inter for code or Geist Mono for prose — the typeface assignment IS the brand voice

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero scales to 36px. Pill nav collapses to hamburger. Pricing tiers stack 1-up. Footer 1-column accordion. |
| Mobile (large) | 480 – 767px | Same as small but feature tiles render 2-up. Hero scales to 44px. |
| Tablet | 768 – 1023px | 2-column feature grids. Pill-tab nav returns. Documentation sidebar collapses to drawer. Hero scales to 56px. |
| Desktop | 1024 – 1279px | Full 3-column docs grid (sidebar / body / TOC). 3-tier pricing card row. Hero at 72px. |
| Wide Desktop | ≥ 1280px | Wider hero gutters, larger product mockup, fixed 240px sidebar. |

### Touch Targets
- Pill buttons render at 36–40px effective height — bumps to 44px on mobile via padding override
- Circular icon buttons: 32×32px desktop → 44×44px mobile
- Form inputs render at 40px height; bumps to 44px mobile
- Sidebar nav items render at ~32px tall — bump to 44px mobile drawers

### Collapsing Strategy
- **Promo banner** stays full-width; truncates at < 480px
- **Top nav** below 1024px collapses to hamburger; horizontal links move into drawer
- **Hero band**: 2-column hero (text + mockup) collapses to stacked at < 1024px; mockup rendered below text on mobile
- **Documentation grid**: 3-column desktop → sidebar-drawer at < 1024px → single-column at < 768px
- **Pricing comparison**: 3-column tiers → 1-column stacked at < 768px; comparison table becomes horizontal-scroll
- **Hero typography**: `{typography.hero-display}` (72px) → 56px tablet → 44px mobile-large → 36px mobile-small
- **Customer logo wall**: 6-up → 3-up at tablet → 2-up at mobile
- **Footer**: 5-column desktop → 2-column tablet → accordion at mobile

### Image Behavior
- Hero illustrations (cloud, rocket) lazy-load with the hero band; remain crisp at all breakpoints (SVG-based)
- Product mockup retains its aspect ratio across breakpoints; scales proportionally
- Customer logos use SVG wordmarks; remain crisp on retina displays

## Iteration Guide

1. Focus on ONE component at a time. The system has high internal consistency.
2. Reference component names and tokens directly (`#0a0a0a`, `{component-name}-pressed`, `9999px`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits to catch broken refs and contrast issues.
4. Add new variants as separate `components:` entries (`-pressed`, `-disabled`, `-focused`, `-active`).
5. Default to `{typography.body-md}` for body and `{typography.subtitle}` for emphasis. Headlines step down `hero-display → display-lg → heading-1 → heading-2 → heading-3 → heading-4 → heading-5`.
6. Keep `#00d4a4` confined to accent moments. If it appears on a generic surface, ask whether it earned that role.
7. Pill-shaped buttons (`9999px`) always; squared buttons signal "third-party widget" in this language.
8. Documentation prose belongs in `{typography.body-md}` 16px with 1.50 line-height — anything denser breaks the reading experience.

## Known Gaps

- Specific dark-mode token values for canvas, surface, ink, and hairline are not surfaced on these pages; the brand has not yet shipped a published dark-mode palette
- Animation/transition timings are not extracted; recommend 150–200ms ease for hover/focus state transitions
- Form validation success state is not explicitly captured beyond defaults — implement following standard green-border + success badge patterns
- Code syntax highlighting palette inside docs is not formalized; documentation samples carry their own twoslash-style annotation system tokens (e.g. `#3772cf`, `#1ba673`, `#c37d0d`) but the full highlight scheme is not enumerated
