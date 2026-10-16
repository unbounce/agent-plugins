# Design System: Clay

## Overview

Clay.com is the most playful B2B SaaS interface in the GTM-data category. The base atmosphere is **cream-tinted white canvas** (`#fffaf0` — #fffaf0) holding dark-navy ink type and **3D-rendered claymation illustrations** (mountains, mascot characters, peach/ochre/lavender landscapes) as the dominant brand voltage. Where most data-platform brands play it cool with grids and gradients, Clay leans hard into hand-crafted-looking 3D illustrations and saturated single-color feature cards.

Type voice runs **Plain Black** (or substituted with Inter weight 500-600) — a custom rounded display face used at very large sizes (72px hero) with negative letter-spacing. Body type uses Inter at standard weights. The display weight stays at 500, never bolder — the rounded character of the typeface gives it warmth without needing weight.

Component voltage comes from **saturated single-color feature cards** in a 6-color palette: hot pink, deep teal, lavender, peach, ochre, and cream-card. Each card shows product UI fragments at small scale — Claygent agent runs, sequencer flows, CRM enrichment outputs. The colored card IS the primary visual element on every long-scroll page.

**Key Characteristics:**
- Cream-tinted white canvas (`#fffaf0` — #fffaf0). The warmth differentiates Clay from cool-gray competitor sites.
- Dark navy/black primary CTAs (`#0a0a0a` — #0a0a0a). Buttons rounded `12px` (12px) — friendly modern but not pill.
- 6-color saturated feature card palette: `#ff4d8b`, `#1a3a3a`, `#b8a4ed`, `#ffb084`, `#e8b94a`, `#f5f0e0` (cream).
- 3D claymation illustrations (mountains, characters, abstract shapes) as full-bleed hero artifacts — the brand's most-recognized visual element.
- Custom rounded Plain Black display typeface at 500 weight with -1 to -2.5px letter-spacing on display sizes.
- Border radius is generous: `12px` (12px) for buttons + inputs, `16px` (16px) for content cards, `24px` (24px) for feature cards. The bigger radius matches the rounded display type's character.
- Product UI fragments embedded inside colored cards at small scale — agent run logs, sequencer flows, enrichment results.
- Section rhythm `96px` (96px) between major bands.
- Footer is cream-tinted (`#faf5e8`) — Clay does NOT use a dark footer. Even the closing band stays warm-light.

## Colors

### Brand & Accent
- **Primary** (`#0a0a0a` — #0a0a0a): All primary CTAs, h1/h2 ink type. Near-black with slight warmth.
- **Brand Pink** (`#ff4d8b` — #ff4d8b): Hot-pink feature card surface. Sequencer / outbound feature pages.
- **Brand Teal** (`#1a3a3a` — #1a3a3a): Deep teal-green feature card. Often the featured pricing tier.
- **Brand Lavender** (`#b8a4ed` — #b8a4ed): Soft lavender feature card.
- **Brand Peach** (`#ffb084` — #ffb084): Warm peach feature card.
- **Brand Ochre** (`#e8b94a` — #e8b94a): Mustard / ochre feature card and illustration accents.
- **Brand Mint** (`#a4d4c5` — #a4d4c5): Mint accent on illustrations and small badges.
- **Brand Coral** (`#ff6b5a` — #ff6b5a): Coral accent for highlights.

### Surface
- **Canvas** (`#fffaf0` — #fffaf0): The default page floor. Cream-tinted white.
- **Surface Soft** (`#faf5e8` — #faf5e8): Footer and CTA-band background.
- **Surface Card** (`#f5f0e0` — #f5f0e0): Cream feature cards, testimonial cards.
- **Surface Strong** (`#ebe6d6` — #ebe6d6): Stronger cream for emphasized bands.
- **Surface Dark** (`#0a1a1a` — #0a1a1a): Dark teal-tinted near-black for occasional dark cards (rare).
- **Surface Dark Elevated** (`#1a2a2a` — #1a2a2a): Elevated dark cards.
- **Hairline** (`#e5e5e5` — #e5e5e5): 1px borders on cards and inputs.

### Text
- **Ink** (`#0a0a0a` — #0a0a0a): Headlines and primary text.
- **Body Strong** (`#1a1a1a` — #1a1a1a): Emphasized body, lead paragraphs.
- **Body** (`#3a3a3a` — #3a3a3a): Default running-text.
- **Muted** (`#6a6a6a` — #6a6a6a): Sub-headings, breadcrumbs, footer body.
- **Muted Soft** (`#9a9a9a` — #9a9a9a): Captions, fine-print.
- **On Primary / On Dark** (`#ffffff` — #ffffff): Text on primary buttons + dark feature cards (teal).

### Semantic
- **Success** (`#22c55e` — #22c55e): Success states.
- **Warning** (`#f59e0b` — #f59e0b): Warning callouts.
- **Error** (`#ef4444` — #ef4444): Validation errors.

## Typography

### Font Family
The system runs **Plain Black** (a custom rounded display face) for headlines and **Inter** for body, navigation, and UI. Plain Black at weight 500 with negative letter-spacing handles every display headline; Inter handles the rest. The fallback stack walks `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for both.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 500 | 1.0 | -2.5px | Homepage h1 ("Go to market with unique data") — Plain Black |
| `{typography.display-lg}` | 56px | 500 | 1.05 | -2px | Section heads — Plain Black |
| `{typography.display-md}` | 40px | 500 | 1.1 | -1px | Sub-section heads, product names |
| `{typography.display-sm}` | 32px | 500 | 1.15 | -0.5px | CTA-band heads, feature card titles |
| `{typography.title-lg}` | 24px | 600 | 1.3 | -0.3px | Pricing plan names, larger feature titles |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Card titles, intro paragraphs |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Small card titles, list labels |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Default running-text |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Footer body, fine-print |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions |
| `{typography.caption-uppercase}` | 12px | 600 | 1.4 | 1.5px | Section labels, "FEATURED" badges |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Standard button labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles
Plain Black at weight 500 + negative letter-spacing IS the brand voice. Going to weight 700 reads as bombastic; the rounded character of the typeface adds warmth that bolder weight would flatten.

The body-vs-display split is functional: Plain Black for Plain Black moments (headlines), Inter for everything else (running text, UI, buttons). Mixing them is a system violation.

### Note on Font Substitutes
If Plain Black is unavailable, **Inter** at weight 500 with -0.05em letter-spacing is a usable approximation. **Söhne Breit** at weight Buch is an alternative if licensed. **Recoleta** at weight 500 carries similar rounded-display warmth.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `24px` 24px · `32px` 32px · `48px` 48px · `96px` 96px.
- **Section padding:** `96px` (96px) between major editorial bands.
- **Card internal padding:** `32px` (32px) for feature cards and pricing tiers; `24px` (24px) for testimonial and product mockup cards.

### Grid & Container
- **Max content width:** ~1280px centered.
- **Editorial body:** Single 12-column grid; hero often uses 7/5 split (h1 left, illustration right).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Pricing grid:** 3-4 up at desktop, 1-up at mobile.

### Whitespace Philosophy
Clay uses generous whitespace around big rounded display headlines and saturated feature cards. The cream canvas + colored cards + 3D illustrations create a playful warmth that competing data-platform sites lack.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero |
| Soft hairline | 1px `#e5e5e5` border | Inputs, small content cards |
| Saturated card | Brand pink/teal/lavender/peach/ochre fill — no shadow | Feature cards |
| Cream card | `#f5f0e0` background — no shadow | Testimonial, secondary cards |
| Subtle drop shadow | Faint shadow at low alpha | Hover-elevated states (rare) |

The system uses no heavy shadows. Depth comes from the saturated color contrast between cream canvas and bright feature cards.

### Decorative Depth
- **3D claymation illustrations** — mountains, characters, mascots rendered in a hand-crafted 3D style. The brand's most-recognized depth element. Not a token — these are illustrated assets.
- **Mascot characters** appear as inline figures in feature cards and CTAs.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `6px` | 6px | Small badges, dropdown items |
| `8px` | 8px | Small buttons, hairline-border accent |
| `12px` | 12px | Standard CTA buttons, text inputs |
| `16px` | 16px | Content cards, testimonial cards, pricing tiers |
| `24px` | 24px | Feature cards (the saturated brand-color cards) |
| `9999px` | 9999px | Category tabs, badge pills |
| `9999px` | 9999px / 50% | Avatars, icon buttons |

## Components

### Top Navigation

**`top-nav`** — Cream nav bar pinned to top. 64px tall, `#fffaf0` background. Carries the Clay logo + wordmark at left, primary horizontal menu (Product, Solutions, Resources, Pricing, Customers) center, right-side cluster with "Sign in" + "Try free" `{component.button-primary}`. Menu items in `{typography.nav-link}` (Inter 14px / 500).

### Buttons

**`button-primary`** — Background `#0a0a0a` (near-black), text `#ffffff` (white), type `{typography.button}` (Inter 14px / 600), padding 12px × 20px, height 44px, rounded `12px` (12px).

**`button-secondary`** — Cream button with hairline outline. Background `#fffaf0`, text `#0a0a0a`, 1px hairline border.

**`button-on-color`** — White button used over saturated brand-color feature cards. Same shape as primary but inverted (white background, ink text).

**`button-text-link`** — Inline text button, no background. Used for "Sign in" and inline link CTAs.

**`text-link`** — Inline body links in `#0a0a0a` with underline.

### Cards & Containers

**`hero-band`** — Cream-canvas hero with 7-5 grid: h1 + sub-headline + button row on the left, 3D claymation illustration on the right. Vertical padding `96px` (96px).

**`hero-illustration-card`** — Right-side artifact holding 3D claymation illustration (mountains, mascot character, abstract shapes). Background `#faf5e8`, rounded `24px` (24px). The illustration IS the artifact.

**`feature-card-pink`** / **`feature-card-teal`** / **`feature-card-lavender`** / **`feature-card-peach`** / **`feature-card-ochre`** — Saturated single-color feature cards. Background varies per variant; rounded `24px` (24px); padding `32px` (32px). Each card carries an h3 in `{typography.title-md}`, a body description, and a product UI fragment or mascot illustration. Text color flips to `#ffffff` (white) on pink and teal cards, `#0a0a0a` (dark) on lavender/peach/ochre cards (the lighter saturations have enough contrast for dark text).

**`feature-card-cream`** — Lower-key feature card variant on `#f5f0e0`. Used for less-emphasized features that don't warrant a saturated color.

**`product-mockup-card`** — Card showing actual Clay product UI (Claygent agent runs, sequencer flows, CRM enrichment tables). Background `#fffaf0` with hairline border, rounded `16px`, padding `24px` (24px).

**`testimonial-card`** — Customer quote cards. Background `#f5f0e0` (cream), rounded `16px`, padding `24px` (24px). Top row has avatar + name + role; below sits the testimonial in `{typography.body-md}`.

**`pricing-tier-card`** — Standard tier card. Background `#fffaf0` with hairline, rounded `16px`, padding `32px` (32px).

**`pricing-tier-card-featured`** — The featured tier flips to `#1a3a3a` (deep teal-green). The teal surface IS the featured signal.

**`expert-card`** — Used on /experts page. Background `#fffaf0` with hairline, rounded `16px`, padding `24px`. Carries an avatar at top, expert name, specialization, and a "Book session" link.

### Inputs & Forms

**`text-input`** — Background `#fffaf0`, text `#0a0a0a`, type `{typography.body-md}`, rounded `12px` (12px), padding 12px × 16px, height 44px. 1px hairline border.

**`text-input-focused`** — Border thickens to ink for emphasis.

### Tabs / Badges

**`category-tab`** + **`category-tab-active`** — Pill-shaped tabs in sub-nav. Inactive: transparent + muted text. Active: cream-card background + ink text. Padding 8px × 16px.

**`badge-pill`** — Small cream-fill pill labels in `{typography.caption}` (13px / 500), rounded `9999px`.

### CTA / Footer

**`cta-band-illustrated`** — Pre-footer "Turn your growth ideas into reality today" band. Background `#faf5e8`, rounded `24px`, padding 80px. Carries an h2 in `{typography.display-md}`, a sub-line, and a `{component.button-primary}` — usually paired with a 3D illustration of a mascot or scene.

**`footer`** — Cream-tinted footer (NOT dark navy unlike most SaaS sites). Background `#faf5e8`, text `#3a3a3a`. 4-column link list. Vertical padding 80px. Often features a horizon-style 3D mountain illustration at the very bottom — Clay's signature footer mountain.

## Do's and Don'ts

### Do
- Anchor every page on the cream canvas (`#fffaf0` — #fffaf0). The warm tint differentiates Clay from cool-gray data sites.
- Use 3D claymation illustrations as hero artifacts. Hand-crafted 3D characters and mountains ARE the brand.
- Cycle saturated feature cards across the page — pink → teal → lavender → peach → ochre → cream. Repeating the same color twice in a row reads as off-rhythm.
- Use Plain Black at weight 500 with negative letter-spacing on every display headline.
- Show product UI fragments inside saturated feature cards. The brand voltage is product-driven, not abstract.
- Use cream footer (NOT dark). Clay deliberately closes pages with warm cream rather than the standard dark-footer SaaS template.
- Anchor every band with `96px` (96px) vertical rhythm.

### Don't
- Don't use cool grays for canvas. The cream tint is non-negotiable.
- Don't use a 7th brand-color card. The 6-color palette is saturated enough.
- Don't bold display weight beyond 500. Plain Black at 700 reads as bombastic.
- Don't repeat the same brand-color card twice in a row.
- Don't replace claymation illustrations with flat vector art. The hand-crafted 3D character IS the brand voice.
- Don't use a dark footer. The cream footer is part of the system's warm-throughout pacing.
- Don't add hover state styling beyond what the system already encodes.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 72→36px; hero-illustration-card stacks below; feature grids 1-up; pricing 1-up |
| Tablet | 768–1024px | Top nav tightens; feature cards 2-up; pricing 2-up |
| Desktop | 1024–1440px | Full top-nav; 3-up feature cards; 3-up pricing tiers |
| Wide | > 1440px | Same as desktop with more breathing room; max content 1280px |

### Touch Targets
- `{component.button-primary}` at minimum 44 × 44px (matches WCAG AAA).
- `{component.text-input}` height is 44px.

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px.
- Hero 7-5 grid → single-column on mobile.
- Feature card grids reduce columns rather than scaling.
- Saturated feature cards retain their colored fill at every breakpoint.
- Pricing tier cards collapse 4 → 2 → 1.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key (`{component.feature-card-pink}`, `{component.pricing-tier-card-featured}`).
2. Pick the right brand-color card for the feature: pink for outbound/sequencer, teal for enterprise/featured, lavender for AI-agent products, peach for general SaaS warmth, ochre for community / experts.
3. Variants of an existing component (`-active`, `-disabled`) live as separate entries.
4. Use `{token.refs}` everywhere — never inline hex.
5. Never document hover.
6. Display headlines stay Plain Black 500 with negative letter-spacing. Body stays Inter 400.
7. The cream-throughout palette is a system contract — don't add a dark footer.

## Known Gaps

- Plain Black is licensed to Clay and not available as a public web font; Inter weight 500 with negative letter-spacing is the closest substitute.
- 3D claymation illustrations are commissioned assets, not system tokens — they're rendered per-page.
- The mascot characters (named characters that recur across the site) are illustrated assets; their exact lineage and naming are not formalized in tokens.
- Animation and transition timings (3D illustration parallax on scroll, feature card entrance animations) are not in scope.
- Form validation states beyond `{component.text-input-focused}` are not extracted.
- The actual Clay product surface (in-app data tables, formula editor, agent builder) shares some tokens with the marketing site but adds many product-specific components that are out of scope.
