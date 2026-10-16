# Design System: MiniMax

## Overview

MiniMax stages itself as a Chinese AI infrastructure brand with a sophisticated dual identity. Marketing surfaces and platform pages anchor in stark white canvas with deep-black typographic emphasis — the brand voice is confident, technical, almost editorial. But each model release gets its own vibrant gradient identity card: M2.7 in volcanic coral-red, Music 2.6 in magenta-pink, Hailuo in deep blue, Speech 2.8 in saturated orange-purple. Together these vibrant tiles read like album covers laid out on the homepage — each one declaring its own product personality.

DM Sans anchors every surface from oversized 80px hero displays down to 12px micro labels. The geometric, slightly humanist character of the face suits both the dense documentation surfaces (where 14px body type carries 1.5 line-height for long-form prose) and the high-impact marketing displays (where -2px letter-spacing tightens 80px headlines). Buttons are universally pill-shaped (`rounded-full`) with a sharp two-tier system: black-pill primary (the dominant CTA) and outline-pill secondary. Cards split into two distinct families: vibrant gradient product showcases (32px corner softening) and quiet white documentation cards (16px corner softening).

**Key Characteristics:**
- Stark monochrome palette — black (#0a0a0a) and white (#ffffff) — broken open by saturated brand-color gradient cards
- Distinct product-color encoding: each model line has its own vibrant brand color (coral M2.7, magenta Music 2.6, blue Hailuo, orange Speech 2.8)
- DM Sans across the entire system; Inter as fallback
- Pill-shaped buttons (9999px) and pill-shaped tabs everywhere; rectangular forms only inside data tables and dense docs
- Hero typography uses tight 1.10 line-height with -2px letter-spacing for impact
- Documentation surfaces use a 3-column layout: left sidebar nav, center prose body, right table-of-contents
- Black promo banners (#0a0a0a) above the nav for time-bound brand moments

## Colors

> Source pages: minimax.io/ (homepage), /models/text/m27 (product showcase), platform.minimax.io/docs/guides/models-intro (documentation), /subscribe/token-plan (pricing). Token coverage was identical across all four pages.

### Brand & Accent
- **Brand Coral** (#ff5530): Signature high-impact accent. Used on M2.7 product card, "Token Plan" hero band, promo CTA strips, and "NEW" badges. Carries the brand's most attention-grabbing energy.
- **Brand Magenta** (#ea5ec1): Secondary product-card identity (Music 2.6); used for music/audio product encoding.
- **Brand Blue** (#1456f0): Hailuo video product identity; primary blue accent across the system.
- **Brand Blue Deep** (#1d4ed8): Form-control activation, link emphasis.
- **Brand Blue 700** (#17437d): Documentation tag and reference text color.
- **Brand Cyan** (#3daeff): Atmospheric blue for product gradients and decorative wash.
- **Brand Blue 200** (#bfdbfe): Code badges, info-tag backgrounds.
- **Brand Purple** (#a855f7): Speech 2.8 and minor purple-product identity; gradient mate for magenta cards.

### Surface
- **Canvas White** (#ffffff): Primary page background and card surface.
- **Surface** (#f7f8fa): Subtle section backgrounds, search-pill rest, sidebar-nav active state.
- **Surface Soft** (#f2f3f5): Quieter section divisions.
- **Hairline** (#e5e7eb): 1px input border and primary divider.
- **Hairline Soft** (#eaecf0): Quieter table-row divider and secondary section break.

### Text
- **Ink** (#0a0a0a): Primary headline and CTA text — the brand's near-black anchor.
- **Ink Strong** (#000000): Pure black used in promo banners and hero displays for maximum contrast.
- **Charcoal** (#222222): Body text on light surfaces.
- **Slate** (#45515e): Secondary text, metadata.
- **Steel** (#5f5f5f): Tertiary text, table headers, sidebar inactive items.
- **Stone** (#8e8e93): Muted captions and tab inactive labels.
- **Muted** (#a8aab2): Footer link text and de-emphasized labels.

### Semantic
- **Success Background** (#e8ffea): Pale-green wash for success badges and confirmations.
- **Success Text** (#1ba673): Deep-green ink for success badge labels.
- Error tones derive from a `#d45656` red used in input border error states (not extracted as a top-level system token).

## Typography

### Font Family
**DM Sans** (primary): Geometric variable sans-serif. Used across every surface, every role. Fallbacks: Inter, Helvetica Neue, Helvetica, Arial.

DM Sans was chosen for its dual fluency: it scales cleanly from 80px hero displays (where -2px letter-spacing creates magazine-grade tightness) down to 12px micro labels (where the slightly humanist counters maintain legibility). The face has no italic variant in the brand's deployment — emphasis comes from weight (500/600/700) instead.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 80px | 600 | 1.10 | -2px | Homepage hero ("MiniMax Music 2.6") |
| `{typography.display-lg}` | 56px | 600 | 1.10 | -1.5px | Section openers, major page heroes |
| `{typography.heading-lg}` | 40px | 600 | 1.20 | -1px | Sub-page headlines ("Token Plan", "Models Overview") |
| `{typography.heading-md}` | 32px | 600 | 1.25 | -0.5px | Subsection headers ("Full-Stack Model Matrix") |
| `{typography.heading-sm}` | 24px | 600 | 1.30 | 0 | Card titles, feature headers |
| `{typography.card-title}` | 20px | 600 | 1.40 | 0 | Product-card titles, feature-tile headers |
| `{typography.subtitle}` | 18px | 500 | 1.50 | 0 | Section subtitles, lead body |
| `{typography.body-md}` | 16px | 400 | 1.50 | 0 | Primary body text |
| `{typography.body-md-bold}` | 16px | 700 | 1.50 | 0 | Body emphasis |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Secondary body, table cells, navigation |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | Active sidebar nav, button labels |
| `{typography.caption}` | 13px | 400 | 1.70 | 0 | Documentation captions, fine print |
| `{typography.caption-bold}` | 13px | 600 | 1.50 | 0 | Badge labels, table-header text |
| `{typography.micro}` | 12px | 400 | 1.50 | 0 | Footer microcopy, chip labels |
| `{typography.button-md}` | 14px | 600 | 1.40 | 0 | Pill button labels |

### Principles
- **Tight hero leading** (1.10) and aggressive negative letter-spacing on display sizes create a magazine-quality typographic display unique to MiniMax.
- **Generous body leading** (1.50) keeps long-form documentation comfortable; captions push to 1.70 for scientific-paper-grade clarity.
- **Weight discipline:** 400 (body), 500 (medium emphasis), 600 (headings/buttons), 700 (strong inline emphasis). Heavier weights are not used.
- **Single typeface** strategy — never mix DM Sans with another sans-serif. Code samples (when shown) use a system monospace fallback, but no second typeface enters the brand canvas.

## Layout

### Spacing System
- **Base unit**: 4px (8px primary increment).
- **Tokens**: `4px` (4px) · `8px` (8px) · `12px` (12px) · `16px` (16px) · `20px` (20px) · `24px` (24px) · `32px` (32px) · `40px` (40px) · `48px` (48px) · `64px` (64px) · `80px` (80px) · `96px` (96px).
- **Section rhythm**: Marketing pages separate at `96px` (96px) above-fold, then `80px` (80px) below; documentation tightens to `64px` (64px); table rows compress to `16px` (16px).
- **Card internal padding**: Vibrant product cards use `32px` (32px); documentation cards use `20px–24px` (20–24px); promo strips expand to `64px` (64px).

### Grid & Container
- Marketing pages use a 1280px max-width with 32px gutters.
- Homepage product matrix renders as a 4-column row of 32px-rounded gradient cards, each ~280–320px wide.
- AI Product Matrix below uses a 4-column grid with 16px-rounded white cards.
- Documentation surfaces use a 3-column layout: left sidebar nav (~220px), center prose body (~720px max-width), right TOC (~180px). Sidebar persists on desktop; collapses to drawer below 1024px.
- Token Plan / pricing pages use 2-column tabs above a 3-column tier card grid.

### Whitespace Philosophy
Marketing pages give product photography and color cards generous breathing room — `96px` (96px) above-the-fold creates visual oxygen for the 80px hero display. Inside documentation, whitespace tightens dramatically: section gaps drop to `32px` (32px), table rows pack down to `16px` (16px), and the sidebar nav uses `8px` (8px) vertical rhythm.

## Elevation & Depth

The system runs predominantly flat. Elevation is reserved for sticky panels, dropdowns, and the rare floating CTA.

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow; `#e5e7eb` border | Default cards, table rows, form inputs |
| 1 (subtle) | `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` | Card-recommendation, hover-elevated tiles |
| 2 (card) | `rgba(0, 0, 0, 0.08) 0px 4px 6px 0px` | Standard feature cards, dropdowns |
| 3 (atmospheric) | `rgba(0, 0, 0, 0.08) 0px 0px 22px 0px` | Diffuse glow on featured product cards |
| 4 (modal) | `rgba(36, 36, 36, 0.08) 0px 12px 16px -4px` | Modals, confirmation dialogs, sticky panels |

### Decorative Depth
- The vibrant gradient product cards carry their own atmospheric depth via internal radial gradients and silhouette imagery — no shadow needed; the color does the work.
- Brand-tinted shadows (`rgba(44, 30, 116, 0.16) 0px 0px 15px`) appear under purple-themed cards for subtle ambient lift.
- Dotted/grain textures occasionally appear inside product cards as photographic-content decoration; these are not formalized as system tokens.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `4px` | 4px | Code chips, micro-controls |
| `6px` | 6px | Compact controls, table cells |
| `8px` | 8px | Inputs, secondary buttons, search pill |
| `12px` | 12px | Documentation cards, recommendation tiles |
| `16px` | 16px | Standard feature cards, AI product tiles |
| `20px` | 20px | Larger feature panels |
| `24px` | 24px | AI product tile feature variants |
| `32px` | 32px | Vibrant gradient product cards, promo CTA strip |
| `9999px` | 9999px | All buttons, all pill tabs, badges |

### Photography Geometry
- Vibrant product cards use 32px corner softening — distinct from the 16px used on quiet white cards. The doubled radius is the visual signature of "this is a featured product moment."
- Product imagery inside cards is treated as photographic content (silhouettes, dark portrait studio lighting) without rounded internal frames.
- Avatar circles (rare, in testimonials) are `9999px` — perfect circles.

## Components

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### Buttons

**`button-primary`** — Black pill primary CTA, the dominant action across all surfaces.
- Background `#0a0a0a`, text `#ffffff`, typography `{typography.button-md}`, padding `11px 24px`, rounded `9999px`.
- Pressed state `button-primary-pressed` lifts to `#222222`.
- Disabled state `button-primary-disabled` uses `#e5e7eb` background and `#a8aab2` text.

**`button-secondary`** — Outlined pill secondary action, paired with primary in dual-CTA hero patterns.
- Background transparent, text `#0a0a0a`, border `1px solid #0a0a0a`, typography `{typography.button-md}`, padding `11px 24px`, rounded `9999px`.

**`button-tertiary`** — White-fill quieter pill, used for tertiary nav and informational CTAs.
- Background `#ffffff`, text `#0a0a0a`, border `1px solid #e5e7eb`, typography `{typography.button-md}`, padding `11px 24px`, rounded `9999px`.

**`button-link`** — Inline text link styled as a subtle button.
- Background transparent, text `#0a0a0a`, typography `{typography.body-sm-medium}`, padding `8px 0`. Underline appears on activation.

**`button-icon-circular`** — 36×36px circular utility button (carousel arrows, share, copy).
- Background `#ffffff`, text `#0a0a0a`, border `1px solid #e5e7eb`, rounded `9999px`.

### Vibrant Product Cards

**`product-card-coral`** — M2.7 / Token Plan signature card.
- Background `#ff5530`, text `#ffffff`, rounded `32px` (32px), padding `32px`.
- Hosts the M2.7 wordmark in massive `{typography.display-lg}` with white tagline.

**`product-card-magenta`** — Music 2.6 product showcase.
- Background `#ea5ec1`, text `#ffffff`, rounded `32px`, padding `32px`.

**`product-card-blue`** — Hailuo Video product showcase.
- Background `#1456f0`, text `#ffffff`, rounded `32px`, padding `32px`.

**`product-card-purple`** — Speech 2.8 / variant product showcase.
- Background `#a855f7`, text `#ffffff`, rounded `32px`, padding `32px`.

**`product-card-photo`** — Dark portrait product card (homepage S2 placement, video-emotion product).
- Background `#0a0a0a` (black with overlaid product photo), text `#ffffff`, rounded `32px`, padding `32px`.

### Cards & Containers

**`card-base`** — Standard documentation/feature card.
- Background `#ffffff`, rounded `16px`, padding `24px`, border `1px solid #e5e7eb`.

**`card-feature`** — Quieter feature panel on light gray.
- Background `#f7f8fa`, rounded `16px`, padding `32px`.

**`card-recommendation`** — "Recommended Reading" tile in documentation footer.
- Background `#ffffff`, rounded `12px`, padding `20px`, border `1px solid #e5e7eb`.

**`promo-cta-card`** — Bright orange "Refunds of 10%..." promo strip with embedded CTA pill.
- Background `#ff5530`, text `#ffffff`, rounded `32px`, padding `64px`. Embedded button uses `button-tertiary` (white pill on coral) for the "Join Now" action.

**`ai-product-tile`** — White card in the AI Product Matrix grid (Agent, Hailuo Video, MiniMax Audio).
- Background `#ffffff`, rounded `24px`, padding `24px`, border `1px solid #e5e7eb`. Carries an icon/illustration top, title `{typography.card-title}`, description `{typography.body-sm}`.

### Inputs & Forms

**`text-input`** — Standard text field.
- Background `#ffffff`, text `#0a0a0a`, border `1px solid #e5e7eb`, rounded `8px`, padding `12px 16px`, height 40px.

**`text-input-focused`** — Activated state.
- Border switches to `2px solid #1d4ed8`.

**`text-input-error`** — Validation error state.
- Border switches to `1px solid #d45656`; error label below in matching red `{typography.body-sm}`.

**`search-pill`** — Documentation top-bar search field.
- Background `#f7f8fa`, text `#5f5f5f`, typography `{typography.body-sm}`, rounded `8px`, height 36px, border `1px solid #e5e7eb`.

### Tabs

**`segmented-tab`** + **`segmented-tab-active`** — Underline-style tab navigation (Benchmark / Self-Evaluation / Multi-Agent Collaboration on the M2.7 page).
- Inactive: text `#5f5f5f`, transparent background, padding `16px 20px`. Active: text shifts to `#0a0a0a`, 2px bottom border in `#0a0a0a`.

**`pill-tab`** + **`pill-tab-active`** — Pricing-page tab nav (Token Plan / Audio Subscription / Video Package).
- Inactive: background `#ffffff`, text `#5f5f5f`, border `1px solid #e5e7eb`, padding `8px 16px`, rounded `9999px`.
- Active: background `#0a0a0a`, text `#ffffff`, no border (or matching black border).

### Badges & Status

**`badge-success`** — Pale-green confirmation badge ("Available", "Active").
- Background `#e8ffea`, text `#1ba673`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`badge-new`** — Coral "NEW" / "Live" pill for fresh releases.
- Background `#ff5530`, text `#ffffff`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`badge-beta`** — Pale-blue "BETA" / informational pill.
- Background `#bfdbfe`, text `#1d4ed8`, typography `{typography.caption-bold}`, rounded `9999px`, padding `4px 10px`.

**`badge-code`** — Inline code-style chip ("Code", "API").
- Background `#bfdbfe`, text `#1d4ed8`, typography `{typography.caption-bold}`, rounded `6px`, padding `2px 6px`.

**`promo-banner`** — Sticky black promotional strip ABOVE the top nav ("Invite & Earn — Rewards for Both!").
- Background `#0a0a0a`, text `#ffffff`, typography `{typography.body-sm-medium}`, padding `12px 20px`. Carries one-line copy with optional inline link.

### Data Tables

**`data-table`** — Documentation models comparison table.
- Background `#ffffff`, text `#0a0a0a`, typography `{typography.body-sm}`, rounded `8px`, border `1px solid #e5e7eb`.

**`data-table-header`** — Top header row of the data table.
- Background `#f7f8fa`, text `#5f5f5f`, typography `{typography.caption-bold}`, padding `12px 16px`.

**`data-table-row`** — Body rows.
- Background `#ffffff`, text `#0a0a0a`, typography `{typography.body-sm}`, padding `16px`, bottom border `1px solid #eaecf0`.

### Navigation

**Top Navigation (Marketing)** — Sticky white bar with logo, link list, and right-side CTAs.
- Background `#ffffff`, height ~64px, bottom border `1px solid #eaecf0`.
- Left: MiniMax wordmark + horizontal link list (Models, Product, API, Company).
- Right: black-pill "Contact Us" + outlined-pill "Login".

**Top Navigation (Documentation/Platform)** — Compressed nav with center search-pill and right-side account/upgrade CTAs.
- Background `#ffffff`, height ~56px, with search-pill at center and "Documentation / Account / Subscribe" links + black-pill "Sign Up" right.

**`sidebar-nav-item`** + **`sidebar-nav-item-active`** — Documentation left rail link entries.
- Inactive: background transparent, text `#222222`, typography `{typography.body-sm}`, rounded `6px`, padding `8px 16px`.
- Active: background `#f7f8fa`, text `#0a0a0a`, typography `{typography.body-sm-medium}`.

**`doc-toc-item`** — Right-rail table-of-contents links.
- Background transparent, text `#5f5f5f`, typography `{typography.body-sm}`, padding `8px 0`. Active item color shifts to `#0a0a0a`.

### Signature Components

**`hero-band-marketing`** — Centered hero with massive 80px display + dual-CTA pair.
- Layout: centered headline in `{typography.hero-display}` (#0a0a0a), centered subtitle in `{typography.subtitle}` (#5f5f5f), centered button row (`button-primary` + `button-secondary`).

**`product-matrix-grid`** — 4-column horizontal scroll of vibrant gradient product cards (homepage "Full-Stack Model Matrix").
- Each tile uses one of the `product-card-*` variants (coral, magenta, blue, purple, photo).
- Card title in `{typography.display-lg}` (M2.7 wordmark) or `{typography.heading-lg}` (Music 2.6).
- Below the wordmark: thin tagline in `{typography.body-sm}` 80% white opacity.
- Optional badge top-right: `badge-new`.
- Card heights are uniform (~360–400px); the row scrolls horizontally on mobile.

**`ai-product-matrix`** — 4-column grid of white product tiles below the vibrant matrix (Agent / Hailuo Video / Audio / Video).
- Each tile is `ai-product-tile` chrome.
- Top: 100px-tall illustration zone (often line-art icon or 3D mark).
- Below: title in `{typography.card-title}`, description in `{typography.body-sm}` `#5f5f5f`.

**`docs-prose-block`** — Documentation main content area.
- Max-width ~720px, centered. Body in `{typography.body-md}` `#222222` line-height 1.6.
- Inline code in `{typography.body-md}` monospace fallback with `#f7f8fa` background and `4px` corners.

**`models-comparison-table`** — Documentation table comparing model sizes and features.
- Uses `data-table` chrome. Each row carries a model name (linkified, in `#0a0a0a` body-sm-medium), a description column (`#222222`), and a features bullet list column.

**`testimonial-stat-row`** — Stats strip ("214,000+ Enterprise Clients & Developers", "0+ Countries Served").
- Horizontal row of 4 stat cells, each cell with a large number in `{typography.heading-lg}` `#0a0a0a` and a label below in `{typography.body-sm}` `#5f5f5f`.

**`footer-region`** — Dense black-canvas multi-column footer.
- Background `#0a0a0a`, padding `64px 32px`.
- Top row: MiniMax wordmark ("intelligence with everyone" tagline) and social icons (X, Twitter, GitHub, etc.).
- Body: 4-column link grid (Research / Product / API / Company / News).
- Section headers in `{typography.body-sm-medium}` `#ffffff`.

**`footer-link`** — Individual link entry inside the footer column.
- Background transparent, text `#a8aab2`, typography `{typography.body-sm}`, padding `4px 0`. Active/visited states do not change color — only opacity shifts on activation.

## Do's and Don'ts

### Do
- Use `#0a0a0a` (black) as the dominant CTA — it's the brand's most recognizable interactive element.
- Reserve product brand colors (`#ff5530`, `#ea5ec1`, `#1456f0`, `#a855f7`) ONLY for product-identity moments — never for general buttons or text.
- Pair `32px` (32px) gradient cards with `16px` (16px) white cards in the same viewport — the radius contrast is the visual signature.
- Apply `9999px` to every button, every pill tab, every badge.
- Use `{typography.hero-display}` (80px) with -2px letter-spacing for hero displays — never compromise the leading or letter-spacing.
- Treat each model/product line as a distinct color identity. M2.7 is coral, Music is magenta, Hailuo is blue. These are brand assignments, not free choices.

### Don't
- Don't use brand-coral or brand-magenta on body text or large surfaces — they lose meaning when overused.
- Don't soften corners on buttons (anything less than `9999px`); the pill is a brand signature.
- Don't introduce a second display typeface; DM Sans handles every role.
- Don't reduce hero leading below 1.10 — the brand needs that breathing room on the 80px display.
- Don't apply heavy shadows on white cards; flat-with-borders is the documentation default.
- Don't put gradient backgrounds on standard buttons; gradients are reserved for product-card identity moments.

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero drops to 40px. Pill nav collapses to hamburger. Product matrix horizontal-scroll. Footer 1-column accordion. |
| Mobile (large) | 480 – 767px | Same as small but AI product matrix renders 2-up. |
| Tablet | 768 – 1023px | 2-column AI product matrix. Pill-tab nav returns. Documentation sidebar collapses to drawer. |
| Desktop | 1024 – 1279px | Full 4-column product matrix; 3-column docs grid (sidebar / body / TOC). |
| Wide Desktop | ≥ 1280px | Wider hero gutters, larger product photography, fixed 220px sidebar. |

### Touch Targets
- Pill buttons render at 38–40px effective height — bumps to 44px on mobile via padding override.
- Circular icon buttons: 36×36px desktop → 44×44px on mobile.
- Form inputs render at 40px height; bumps to 44px on mobile.
- Sidebar nav items render at ~32px tall — bumps to 44px on mobile drawers.

### Collapsing Strategy
- **Promo banner** stays full-width; collapses to single line at < 480px with truncation.
- **Top nav** below 1024px collapses to hamburger; horizontal links move into drawer.
- **Documentation grid**: 3-column desktop → sidebar-drawer at < 1024px → single-column with collapsible sidebar at < 768px.
- **Product matrix**: 4-column desktop → horizontal-scroll at < 1024px (carousel-style with snap points).
- **AI Product Matrix**: 4-column → 2-column at tablet → 1-column at mobile.
- **Hero typography**: `{typography.hero-display}` (80px) → 56px at < 1024px → 40px at < 768px → 32px at < 480px.
- **Stats strip**: 4-column → 2×2 at < 768px → 1-column at < 480px.

### Image Behavior
- Product card imagery uses photographic content with internal gradient overlays; lazy-loaded below the fold.
- AI product tile illustrations are SVG-based; remain crisp at all breakpoints.
- Avatar imagery in testimonials uses 1:1 aspect ratio with `9999px` masking.

## Iteration Guide

1. Focus on ONE component at a time. The system has high internal consistency.
2. Reference component names and tokens directly (`#0a0a0a`, `{component-name}-pressed`, `9999px`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits to catch broken refs and contrast issues.
4. Add new variants as separate `components:` entries (`-pressed`, `-disabled`, `-active`).
5. Default to `{typography.body-md}` for body and `{typography.subtitle}` for emphasis. Headlines step down `hero-display → display-lg → heading-lg → heading-md → heading-sm`.
6. Keep brand colors (coral, magenta, blue, purple) confined to product-card identity. If a brand color appears on a standard button or generic surface, ask whether it earned that surface.
7. Pill-shaped buttons (`9999px`) always; squared buttons signal "third-party widget" in this language.

## Known Gaps

- Specific dark-mode token values (canvas, surface, ink, hairline) are not surfaced on these pages; the brand has not yet shipped a published dark-mode palette.
- Animation/transition timings are not extracted; recommend 150–200ms ease for hover/focus state transitions.
- Form validation success state is not explicitly captured beyond defaults — implement following standard green-border + success badge patterns.
- Code syntax highlighting palette inside docs is not formalized; documentation samples appear with system-default monospace and minimal coloring.
