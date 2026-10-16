# Design System: PostHog

## Overview

PostHog's marketing system is built on the visual contradiction at the heart of the brand: a serious open-source product analytics platform rendered as if it were a friendly engineering sketchbook. The chrome runs on a warm cream canvas (`#eeefe9` — `#eeefe9`) — not white — and every page is dotted with hand-drawn hedgehog mascots in lab coats, lounge chairs, terminals, and reading glasses, scattered across the layout like marginalia in a textbook. Type sits in IBM Plex Sans Variable at olive-gray (`#4d4f46` — `#4d4f46`) for body and deep olive-charcoal (`#23251d` — `#23251d`) for headlines, with weights stepped tightly between 400, 600, 700, and 800 to create hierarchy without color. The single saturated yellow-orange pill (`#f7a501` — `#f7a501`) is the brand's only loud chromatic moment; everything else is cream, olive, white card, and the occasional pastel callout band.

The system has a distinctive **two-mode body layout**: marketing pages (home, workflows, pricing) lean on alternating-pastel callout bands and feature tiles in white cards on cream, while documentation pages add a sticky 240px left sidebar with a rounded outline-icon section list. Code samples are full-width dark blocks on `#23251d` (the same olive-charcoal that carries body ink, used inverted) inside white doc cards, creating the system's most distinctive visual moment: a dark-on-dark code island floating inside a white card on a cream canvas, with a hedgehog mascot doodled in the margin.

Sections stack at `80px` (80px) rhythm with cream canvas continuing edge-to-edge between them. The only color bands that interrupt the cream are pastel `{component.banner-tip-blue}` / `-green` / `-red` / `-purple` callout panels inside doc articles — soft tinted boxes that carry "💡 Tip", "✅ Success", "⚠️ Warning", "📘 Info" inline annotations. There are no decorative gradients, no atmospheric mesh backgrounds, and no full-bleed dark hero chapters; the cream canvas runs uninterrupted top to bottom and the hedgehogs are the entire visual identity.

**Key Characteristics:**
- Warm cream canvas (`#eeefe9` — #eeefe9) end-to-end with no surface alternation between sections — the page is one continuous sheet
- Single yellow-orange CTA pill (`#f7a501` — #f7a501) with deep olive text (`#23251d`) — the brand's only saturated color
- IBM Plex Sans Variable across every text role with weights 400/500/600/700/800 — no other typeface in the system
- Hand-drawn hedgehog mascots scattered across the layout as the entire decorative system — no gradients, no mesh, no atmospheric backgrounds
- 4–8px radius card vocabulary: `6px` (6px) for most components, `8px` (8px) for select containers, fully rounded for pill chips
- Pastel callout banners (`#dceaf6`, `#d9eddf`, `#f7d6d3`, `#e7d8ee`) break up doc article body with soft tinted side rails for tips/warnings/info
- Documentation pages add a sticky 240px `{component.doc-sidebar}` with rounded outline-icon section nav and an "Ask PostHog AI" CTA at the top

## Colors

> **Source pages:** `/` (home), `/pricing` (pricing detail), `/docs/product-analytics` (docs article), `/workflows` (product feature page). The chrome palette is identical across all four pages — only doc-specific accents (callout-banner pastels, code-block dark surface) appear exclusively inside the docs experience.

### Brand & Accent
- **PostHog Yellow** (`#f7a501` — `#f7a501`): the universal primary CTA. Sticky "Get started — free" pill in the top-right of every nav, hero CTAs, pricing-tier subscribe buttons, footer signup pill. The system's only saturated chromatic moment.
- **Yellow Pressed** (`#dd9001` — `#dd9001`): pressed state for the primary pill.
- **Yellow Active** (`#b17816` — `#b17816`): deeply-pressed yellow + the system's gold-toned border accent (rare 1px gold rule on inline form elements).

### Surface
- **Canvas** (`#eeefe9` — `#eeefe9`): the warm cream page background. End-to-end on every page; the brand's most distinctive surface choice.
- **Soft Surface** (`#e5e7e0` — `#e5e7e0`): button-secondary fill, sub-nav strip background, inline-code chip background.
- **Surface Card** (`#ffffff` — `#ffffff`): true white card and tile background sitting on top of the cream canvas. The dominant card surface.
- **Surface Doc** (`#fcfcfa` — `#fcfcfa`): a faintly cream-warm white used inside doc article body cards — slightly softer than pure white to keep the page tonally unified.
- **Surface Dark** (`#23251d` — `#23251d`): the deep olive-charcoal used inverted as code-block background. The same hex as `#23251d` — the brand uses one olive-near-black for both text and dark code surfaces.
- **Hairline** (`#bfc1b7` — `#bfc1b7`): 1px card border, table rule, footer column dividers.
- **Hairline Soft** (`#dcdfd2` — `#dcdfd2`): in-card row divider, soft inset rule.
- **On Dark** (`#ffffff` — `#ffffff`): primary text on `#23251d` code blocks.

### Text
- **Ink** (`#23251d` — `#23251d`): headlines, button text on light, primary nav links — deep olive-charcoal that reads near-black against cream.
- **Body** (`#4d4f46` — `#4d4f46`): default paragraph text, doc article body, inline link color before hover. The brand's most-used text color.
- **Charcoal** (`#33342d` — `#33342d`): emphasized body text where body is too soft.
- **Mute** (`#6c6e63` — `#6c6e63`): metadata, footer link text, in-list secondary annotations.
- **Ash** (`#9b9c92` — `#9b9c92`): disabled-state text and lowest-emphasis utility.
- **Stone** (`#b6b7af` — `#b6b7af`): least-emphasis caption text and disabled icon color.

### Semantic
- **Link Blue** (`#1d4ed8` — `#1d4ed8`): inline anchor link inside body prose. The system's primary informational link color.
- **Link Teal** (`#1078a3` — `#1078a3`): doc-article inline link variant, paired with body text.
- **Accent Blue** (`#2c84e0` — `#2c84e0`) + **Accent Blue Soft** (`#dceaf6` — `#dceaf6`): "💡 Tip / Info" callout banner inside docs.
- **Accent Red** (`#cd4239` — `#cd4239`) + **Accent Red Soft** (`#f7d6d3` — `#f7d6d3`): "⚠️ Warning / Caution" callout banner.
- **Accent Green** (`#2c8c66` — `#2c8c66`) + **Accent Green Soft** (`#d9eddf` — `#d9eddf`): "✅ Success / Positive" callout banner.
- **Accent Purple** (`#7c44a6` — `#7c44a6`) + **Accent Purple Soft** (`#e7d8ee` — `#e7d8ee`): "📘 Note / Reference" callout banner.
- **Focus Ring** (`rgba(59,130,246,0.5)` — `rgba(59,130,246,0.5)`): translucent blue browser-default focus ring around interactive elements.

## Typography

### Font Family
**IBM Plex Sans Variable** is the system's primary face — used across every text role on every page at weights 400 (regular), 500 (medium), 600 (semibold), 700 (bold), and 800 (extra-bold). Falls back through `IBM Plex Sans` → `-apple-system` → `system-ui` → broad cross-platform sans stack.

**ui-monospace** + **Source Code Pro** carry code samples and inline-code chips at 14px / 1.43 line-height. Source Code Pro is the explicit display monospace; ui-monospace handles inline `<code>` chips.

The brand-distinctive choice is the **mixed weight ladder** (400 / 500 / 600 / 700 / 800) — most chrome lives in the 400–700 band, with weight 800 reserved exclusively for the larger display headlines on home and pricing. This gives the system its "engineering blog" feel: hierarchy is built from weight contrast much more than from size.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | 1.5 | 0 | Hero headline ("The new way to build products") |
| `{typography.display-lg}` | 24px | 800 | 1.33 | -0.6px | Section headline, pricing tier name |
| `{typography.heading-lg}` | 21px | 700 | 1.4 | -0.5px | Sub-section heading, doc-article H2 |
| `{typography.heading-md}` | 20px | 700 | 1.4 | 0 | Card group title, in-grid heading |
| `{typography.heading-sm}` | 18px | 700 | 1.5 | 0 (uppercase) | Section eyebrow ("UNDERSTAND PRODUCT USAGE") |
| `{typography.heading-sm-mixed}` | 18px | 600 | 1.56 | 0 | Card title in mixed-case (no uppercase transform) |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Body copy, default paragraph |
| `{typography.body-strong}` | 16px | 600 | 1.5 | 0 | Inline emphasis, primary nav link, in-card label |
| `{typography.body-sm}` | 15px | 400 | 1.71 | 0 | Doc article body, marketing card description |
| `{typography.body-sm-strong}` | 15px | 600 | 1.71 | 0 | Sub-section emphasis inside doc article |
| `{typography.body-xs}` | 14px | 500 | 1.43 | 0 | Doc sidebar item, metadata, in-list caption |
| `{typography.caption-md}` | 14px | 700 | 1.71 | 0 | Card eyebrow, link cluster header |
| `{typography.caption-sm}` | 13px | 500 | 1.5 | 0 | Compact metadata caption |
| `{typography.caption-xs}` | 12px | 600 | 1.33 | 0 (uppercase) | Inline badge label |
| `{typography.utility-xs}` | 12px | 700 | 1.33 | 0 (uppercase) | Section-eyebrow utility text, footer category header |
| `{typography.link-md}` | 16px | 400 | 1.5 | 0 | Inline body anchor link |
| `{typography.button-md}` | 14px | 700 | 1.5 | 0 | Standard primary/secondary button label |
| `{typography.button-sm}` | 13px | 500 | 1 | 0 | Pill chip / compact CTA |
| `{typography.code-sm}` | 14px | 400 | 1.43 | 0 | Code block content |
| `{typography.code-xs}` | 14px | 500 | 1.43 | 0 | Inline code chip |

### Principles
The hierarchy is explicitly built from weight + size + occasional uppercase transform — there is no italic style, no decorative display variant, no proprietary face. The biggest display moments use weight 800 with -0.6px tracking, and the body settles at 400 with 1.5 line-height; everything else fills the band between. Section eyebrows (`{typography.heading-sm}` and `{typography.utility-xs}`) consistently render uppercase, which gives the doc layout its textbook-chapter feel.

### Note on Font Substitutes
IBM Plex Sans Variable is open-source and Google-Fonts-hosted. There is no need for a substitute — load it directly. If a substitute is genuinely needed, **Inter** is the closest geometric match at all five weights; pair with Inter's letter-spacing -0.5 to -0.6px on display sizes to approximate Plex's display tracking. For monospace, **JetBrains Mono** is a near-perfect substitute for Source Code Pro at body sizes.

## Layout

### Spacing System
- **Base unit:** 8px (with finer 2/4/6px steps for tight inline gaps in callout banners and pill buttons).
- **Tokens (front matter):** `2px` (2px) · `4px` (4px) · `8px` (8px) · `12px` (12px) · `16px` (16px) · `24px` (24px) · `32px` (32px) · `80px` (80px).
- **Universal section rhythm:** every page in the set uses `80px` (80px) as the vertical gap between major content blocks. Card grids use `16px` (16px) gutters; card internal padding sits at `24px` (24px) for product cards and `32px` (32px) for pricing tier cards.

### Grid & Container
- **Max width:** ~1280px content area at desktop with 24px gutters (~48px at ultrawide). Doc article body sits at ~720px max width with the 240px sidebar pushing the article column right of center.
- **Marketing card grid:** 4-up at desktop, 3-up at 1024px, 2-up at 768px, 1-up at 480px. Cards preserve a fixed 1:1 or 4:3 ratio.
- **Pricing tier grid:** 3-up at desktop with a left rail of plan info, collapsing to 2-up + 1 at tablet and 1-up at mobile.
- **Doc layout:** desktop 240px sticky left sidebar + ~720px article body + (optional) 200px right TOC rail = ~1160px content width.
- **Footer:** 6-column horizontal link grid at desktop, 3-up at tablet, 2-up at mobile.

### Whitespace Philosophy
Whitespace is generous on marketing pages and tight on doc pages. The home and workflows pages stack feature tiles with `16px` (16px) gutters and 24px internal padding, while doc articles tighten internal spacing to `12px` (12px) between paragraphs to maximize information density. The cream canvas runs continuously through every section — there are no decorative dividers, no shaded section bands; only the 1px hairline beneath section eyebrows and footer column rules separate content blocks.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No border, no shadow | Default for canvas-on-canvas blocks, hero text, body sections |
| 1 — Hairline border | 1px solid `#bfc1b7` | Marketing cards, pricing tier cards, doc sidebar items, footer column rules |
| 2 — Hairline soft | 1px solid `#dcdfd2` | In-card row divider between adjacent rows |
| 3 — Inverted dark code block | `#23251d` fill | Code samples inside doc cards — the system's only "elevated" surface uses color, not shadow |

The system has no drop-shadow elevation in marketing or product chrome. Cards sit flat on cream with thin olive borders. The single inverted moment is the dark code-block surface used inside doc article body cards.

### Decorative Depth
Depth comes entirely from illustration and the pastel callout band system, not from CSS effects:
- **Hand-drawn hedgehog mascots** — characters in various costumes (lab coat, terminal, lounge chair, magnifying glass, hammock, hat) scattered across pages as marginalia. Always rendered as flat color illustrations, never photographs.
- **Pastel callout banners** — `{component.banner-tip-blue}` / `-green` / `-red` / `-purple` soft tinted side-rail panels inside doc articles, each prefixed with an emoji icon (💡 ✅ ⚠️ 📘) and carrying tip/warning/note copy.
- **Code blocks** — full-width dark olive-charcoal panels on `#23251d` with white code text. The system's most cinematic surface, used inside white doc cards.
- **Outline product icons** in the doc sidebar — small rounded-square mini-illustrations (chart icon, funnel, session-replay icon) mark each major product section.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Sub-nav strip, footer, doc sidebar, primary nav — flat structural surfaces |
| `2px` | 2px | Inline `<code>` chips, micro-rule highlights |
| `4px` | 4px | Inline buttons, form inputs, micro chips |
| `6px` | 6px | Marketing cards, pricing cards, doc cards, code blocks, every standard CTA |
| `8px` | 8px | Tab top corners (`6px 6px 0 0` on active tab) and rare large containers |
| `9999px` | 9999px | Pill chips and pill-style CTAs ("Get started — free" sticky CTA in nav) |

The radius vocabulary clusters around 4–6px for nearly everything; the only fully-rounded element is the pill-style sticky nav CTA and inline pill chips.

### Photography Geometry
There is no photography. Visual elements are limited to:
- **Hedgehog character illustrations** — flat-color cartoon hedgehogs ranging from ~80px (in-card mascot) to ~240px (hero illustration). Always at native aspect, never cropped to a frame.
- **Outline product icons** in the doc sidebar — 20–24px rounded-square illustrations.
- **Inline emoji** at 14–16px inside callout banners (💡 ✅ ⚠️ 📘) — used as functional iconography rather than decoration.
- **Section illustrations** on the home page — small hedgehog vignettes paired with each "Understand product usage" / "Build sticky habits" / "Test before launch" feature row.

## Components

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only.

### Buttons

**`button-primary`** — the universal PostHog CTA
- Background `#f7a501` (yellow-orange), text `#23251d` (deep olive), type `{typography.button-md}`, padding `8px 16px`, height `40px`, rounded `6px`.
- Used for "Get started — free" (sticky top-nav CTA), "Sign up", "Try it free", "Subscribe" — every primary action.
- Pressed state lives in `button-primary-pressed` — background drops to `#dd9001`.

**`button-secondary`** — soft alternative on cream canvas
- Background `#e5e7e0` (`#e5e7e0`), text `#23251d`, type `{typography.button-md}`, padding `8px 16px`, height `40px`, rounded `6px`.
- "Talk to sales", "Read docs", "Watch demo" — second-tier actions paired with the yellow primary.

**`button-tertiary`** — ghost text button
- Background transparent, text `#23251d`, type `{typography.button-md}`, padding `8px 12px`, rounded `6px`.
- Lowest-emphasis action: "See all docs →", "Browse all features".

**`button-disabled`**
- Background `#e5e7e0`, text `#9b9c92` — flat soft cream-gray.

### Tabs & Chips

**`product-tab`** + **`product-tab-active`** — major product section tabs
- Default: transparent background, text `#4d4f46`, type `{typography.body-strong}`, padding `8px 12px`, rounded `6px`.
- Active: background flips to `#ffffff` (white), text `#23251d` — the tab card lifts off the cream canvas as the visual signal of selection.

**`pill-tab`** + **`pill-tab-active`** — compact filter pill
- Default: transparent background, text `#4d4f46`, type `{typography.button-sm}`, padding `6px 14px`, rounded `9999px`.
- Active: background flips to `#23251d`, text `#ffffff` — the chip flips fully inverted on selection.

**`badge-uppercase`** — text-only utility label
- Background transparent, text `#4d4f46` in `{typography.utility-xs}` (uppercase) — used as in-list category prefix ("FEATURE FLAG", "EXPERIMENT", "HEATMAP").

**`badge-promo`** — small inline pill chip
- Background `#dceaf6`, text `#1d4ed8`, type `{typography.caption-xs}`, padding `2px 8px`, rounded `9999px`.
- "New", "Beta", "Coming soon" pill labels overlaid on cards.

### Inputs & Forms

**`text-input`** + **`text-input-focused`**
- Default: background `#ffffff`, text `#23251d`, 1px solid `#bfc1b7`, type `{typography.body-md}`, padding `8px 12px`, height `36px`, rounded `6px`.
- Focused: same surface; 2px solid `#2c84e0` border replaces the 1px hairline + a translucent `rgba(59,130,246,0.5)` outline.

**`search-input`** — utility search field (doc sidebar, "Ask PostHog AI")
- Same dimensions as `text-input` with a magnifier glyph at the left edge in `#6c6e63`.

### Cards & Containers

**`product-card`** — marketing tile / feature card
- Container: background `#ffffff` (white), 1px solid `#bfc1b7`, padding `24px` (24px), rounded `6px`.
- Layout: small hedgehog illustration at top-left, `{typography.heading-sm-mixed}` title, `{typography.body-sm}` description, optional `{component.button-tertiary}` "Learn more →" link.

**`doc-card`** — doc article body card
- Container: background `#fcfcfa` (`#fcfcfa` warm-white), 1px solid `#bfc1b7`, padding `24px` (24px), rounded `6px`.
- Carries article body sections, code blocks, callout banners, and tables inside doc pages.

**`feature-tile`** — small marketing feature tile
- Container: background `#ffffff`, 1px solid `#bfc1b7`, padding `16px` (20px), rounded `6px`.
- Used in 3-up or 4-up grids on home and workflows pages — paired with a small icon and a 1-line description.

**`pricing-tier-card`** — pricing plan card
- Container: background `#ffffff`, 1px solid `#bfc1b7`, padding `32px` (32px), rounded `6px`.
- Layout: tier name in `{typography.display-lg}` (24px / 800 / -0.6px), large price + period, feature checklist with check-icon bullets, primary or secondary CTA at bottom.

**`hedgehog-mascot-card`** — feature card with margin-anchored hedgehog
- Same chrome as `{component.product-card}` but with a hand-drawn hedgehog illustration anchored in the right margin or top-right corner — the brand's signature card variant.

### Callout Banners

**`banner-tip-blue`** + **`banner-tip-green`** + **`banner-tip-red`** + **`banner-tip-purple`**
- Background `#dceaf6` / `#d9eddf` / `#f7d6d3` / `#e7d8ee`, text `#23251d`, type `{typography.body-md}`, padding `16px 20px`, rounded `6px`.
- Each prefixed with an inline emoji icon (💡 / ✅ / ⚠️ / 📘) followed by an inline label and body copy.
- Only appear inside doc article body. The four-color callout family is the brand's information-architecture vocabulary for inline tips/warnings/info inside long-form documentation.

### Code

**`code-block`** — dark code sample inside doc card
- Container: background `#23251d` (deep olive-charcoal), text `#ffffff` in `{typography.code-sm}`, padding `16px 20px`, rounded `6px`.
- Syntax highlighting uses muted accent colors (blue for keywords, green for strings, purple for numbers) — never the bright accent colors used in callout banners.

**`inline-code`** — small inline `<code>` chip
- Background `#e5e7e0`, text `#23251d` in `{typography.code-xs}`, padding `2px 6px`, rounded `2px` (2px).
- Used inside body prose to mark code snippets and identifiers.

### Navigation

**`primary-nav`**
- Background `#eeefe9` (cream — same as the page), text `#23251d`, height `56px`, type `{typography.body-strong}`, rounded `0px`.
- Layout (desktop): PostHog wordmark + hedgehog logo at left, nav menu cluster ("Pricing · Docs · Community · Company"), right cluster with a search-glyph, "Login" link, and the always-yellow `{component.button-primary}` "Get started — free" pill anchored to the far right.

**`sub-nav-strip`** — secondary nav bar (under primary)
- Background `#e5e7e0`, text `#4d4f46` in `{typography.body-xs}`, height `40px`, rounded `0px`.
- Sits directly below the primary nav on workflows / product pages with section anchor links and a contextual "Get started →" link at the right.

**`doc-sidebar`** — sticky doc-page left sidebar
- Background `#eeefe9`, text `#4d4f46` in `{typography.body-xs}`, width `240px`, rounded `0px`.
- Layout: search-input "Ask PostHog AI" at top, then a vertical list of section headers each with a small rounded outline-icon mini-illustration, then nested item links indented under the active header.

**Top Nav (Mobile)**
- Hamburger menu icon at left, PostHog wordmark + hedgehog at center, search + sticky yellow "Get started — free" CTA at right. Primary nav collapses into a full-height drawer that slides from the left.

### Footer

**`footer-section`**
- Background `#eeefe9`, text `#4d4f46` in `{typography.body-xs}`, padding `32px 24px`, rounded `0px`, with a 1px `#bfc1b7` top rule.
- Layout: 6-column horizontal link grid (Product · Resources · Company · Community · Pricing · Legal), each column with a `{typography.utility-xs}` (uppercase) header and a vertical list of links in `{typography.body-xs}` `#4d4f46`.
- Bottom row: PostHog wordmark + small hedgehog illustration, copyright in `{typography.caption-xs}` `#6c6e63`, social-icon row at far-right.

### Inline

**`link-inline`** — body-prose anchor link
- `#1078a3` (`#1078a3`) in body prose with no underline by default; underline appears on focus. The brand's primary inline link color.

## Do's and Don'ts

### Do
- Use `#eeefe9` (cream — `#eeefe9`) as the page body. Never substitute pure white as the canvas.
- Reserve `#f7a501` (yellow-orange) for the primary CTA pill only. The "Get started — free" treatment is the brand's anchor.
- Render the brand wordmark with the hedgehog illustration alongside it, not as a stand-alone wordmark. The hedgehog IS the brand identity.
- Use IBM Plex Sans Variable across every text role — body 400, emphasis 600/700, display 800.
- Stack content sections at `80px` (80px) rhythm with no decorative dividers between them; let the cream canvas continue uninterrupted.
- Use `{component.banner-tip-blue}` / `-green` / `-red` / `-purple` only inside doc article body for tip/warning/note panels — keep marketing chrome out of the four-color callout family.
- Pair every code sample with the dark `{component.code-block}` surface; inline `<code>` chips use `{component.inline-code}` (cream surface-soft chip).
- Anchor a hedgehog mascot illustration in feature tile margins on home and workflows pages — the system's signature decoration.

### Don't
- Don't introduce drop shadows on cards. Cards sit flat on cream with thin olive borders only.
- Don't add a second saturated chromatic CTA. Yellow-orange is the only loud color in the system.
- Don't replace the cream canvas with pure white or full-bleed dark hero bands. The cream is the brand.
- Don't use the four-color callout banner pastels (`#dceaf6`, `-green`, `-red`, `-purple`) as marketing-card backgrounds. They belong to inline doc content only.
- Don't substitute the hedgehog illustration with a generic icon set. The character system is the brand.
- Don't use uppercase transform outside of `{typography.heading-sm}`, `{typography.utility-xs}`, and `{typography.caption-xs}`. Uppercase is reserved for eyebrows and footer category headers.
- Don't pad cards with 32px+ on all sides except for `{component.pricing-tier-card}`. Standard cards sit at 24px internal padding.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| ultrawide | 1920px+ | Content max-width holds at 1280px; outer gutters grow to ~80px |
| desktop-large | 1440px | Default — 4-up feature tile grid, 240px sticky doc sidebar visible |
| desktop | 1280px | Same layout with narrower outer gutters |
| desktop-small | 1024px | 4-up tiles collapse to 3-up; doc sidebar remains visible |
| tablet | 768px | 3-up tiles collapse to 2-up; doc sidebar collapses into a top accordion; primary nav becomes hamburger |
| mobile | 480px | Single-column everything; hero `{typography.display-xl}` scales 36px → ~28px |
| mobile-narrow | 320px | Section padding tightens to 32px |

### Touch Targets
All interactive elements meet WCAG AA (≥ 40×40px). `{component.button-primary}` and `{component.button-secondary}` sit at 40px height with 16px padding. `{component.text-input}` sits at 36px (just under AAA but above AA at this size). `{component.pill-tab}` is ~32–36px height with 14px padding extending to ~44px tappable via inline padding. Doc-sidebar items use 14px text with ~32px line-height + 6px vertical padding for ~44px tap rows.

### Collapsing Strategy
- **Primary nav:** desktop horizontal cluster → tablet hamburger drawer at 768px. The yellow "Get started — free" CTA stays visible at every breakpoint.
- **Sub-nav strip:** desktop horizontal anchor row → tablet horizontal scroll → mobile select dropdown.
- **Marketing card grid:** 4-up → 3-up → 2-up → 1-up at 1024, 768, and 480px; gutters drop from 16px to 12px on mobile.
- **Pricing grid:** 3-up → 2+1 → 1-up stacked at tablet and below.
- **Doc layout:** desktop 240px sidebar + 720px article → tablet sidebar collapses to a top accordion → mobile fully collapsed accordion.
- **Footer:** 6-up link columns → 3-up at tablet → 2-up at mobile.
- **Section padding:** `80px` (80px) desktop → 64px tablet → 48px mobile.
- **Hero headline:** `{typography.display-xl}` (36px) at desktop, scaling to ~28px at mobile, line-height holding at 1.5.

### Image Behavior
The only "imagery" in the system is hand-drawn hedgehog illustrations rendered as inline SVG. They preserve their natural aspect at every breakpoint and scale via CSS `width: auto; max-width: 100%`. There is no responsive art-direction needed because there is no photography.

## Iteration Guide

1. Focus on ONE component at a time. Pull its YAML entry and verify every property resolves.
2. Reference component names and tokens directly (`#f7a501`, `{component.button-primary-pressed}`, `6px`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
4. Add new variants as separate component entries (`-pressed`, `-disabled`, `-focused`) — do not bury them inside prose.
5. Default body to `{typography.body-md}` (16px / 400 / 1.5); reach for `{typography.body-strong}` for emphasis; reserve `{typography.display-lg}` (24px / 800) strictly for marketing display moments.
6. Keep `#f7a501` scarce per viewport — at most one yellow-orange pill per fold.
7. When introducing a new component, ask whether it can be expressed with the existing card + 6px-radius + cream-canvas vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.

## Known Gaps

- **Mobile screenshots not captured** — responsive behavior synthesizes PostHog's mobile pattern (hamburger drawer, single-column grid, doc sidebar accordion) from desktop evidence and the breakpoint stack.
- **Hover states not documented** by system policy.
- **In-product app chrome** (PostHog dashboard, charts, session replay player) not in the captured set — the marketing site is documented here, not the in-product analytics interface.
- **Authenticated chrome** (login modal, account dashboard, billing settings) not in the captured pages.
- **Form validation states** beyond the focused-state input not present in the captured surfaces.
- **Marketing illustration set** — the full library of hedgehog character poses is not enumerated here; specific poses (lab coat hedgehog, terminal hedgehog, hammock hedgehog) are noted as visible in screenshots but the full asset library is page-specific.
