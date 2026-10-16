# Design System: Cal.com

## Overview

Cal.com's marketing surface is a clean, friendly modern-SaaS interface — white canvas (`#ffffff` — #ffffff) with black primary CTAs (`#111111` — #111111), custom **Cal Sans** display typography, and `#f5f5f5` (#f5f5f5) light-gray cards holding product UI fragments. The system reads as confidently engineered without trying to impress — every band has clear hierarchy, generous whitespace, and a single primary action.

Type voice splits cleanly into two roles: **Cal Sans** (the brand's custom geometric display face — used for h1, h2, h3, and hero headlines) and **Inter** (used for everything else — body, buttons, nav, captions). Cal Sans uses weight 600 with negative letter-spacing (-0.5px to -2px depending on size) — it feels modern, slightly condensed, distinctly Cal.com.

Component voltage comes from **product UI fragments shown directly inside cards** — calendar widgets, scheduling forms, automation diagrams, integration tiles. Cal.com doesn't paint marketing illustrations of the product; it shows the actual product chrome at small scale embedded in the marketing flow.

The footer flips to `#101010` (#101010) — a deep near-black that visually closes every long-scroll page. The footer is the only dark surface in the system; everything above stays white-with-light-gray-cards.

**Key Characteristics:**
- White canvas with black primary CTA (`#111111` — #111111). Buttons are `8px` (8px) with confident weight-600 labels. Standard friendly-SaaS button.
- Custom `Cal Sans` display typeface for headlines (substituted with Inter weight 600 here). Negative letter-spacing on display sizes — geometric, precise, slightly condensed.
- Light-gray card surfaces (`#f5f5f5` — #f5f5f5) for feature cards, testimonials, and pricing tiers (non-featured). The featured pricing tier flips to `#101010` (the only dark card on light pages).
- Product UI fragments embedded directly in cards — Cal.com shows real schedule pickers, calendar widgets, integration grids inside its marketing cards. Brand voltage from real product chrome at small scale.
- Nav-pill-group (`{component.nav-pill-group}`) — a small pill-radius wrapper around grouped nav segments (e.g., the sub-nav switcher between product views). The pill wrapper is one of the system's signature interactive components.
- Avatars are circular (`9999px`), 36px diameter, used in testimonial rows and team-listing surfaces.
- Footer is dark navy (`#101010` — #101010) with light text (`#a1a1aa` — #a1a1aa). The dark footer closes every page even though the body above is white.
- Spacing rhythm is `96px` (96px) between major bands — tight enough to feel modern-SaaS but generous enough to breathe.
- Border radius is hierarchical: `8px` (8px) for buttons + inputs, `12px` (12px) for content cards, `16px` (16px) for the hero app-mockup container, `9999px` for nav-pill-group + badges, `9999px` for avatars + icon buttons.

## Colors

### Brand & Accent
- **Primary** (`#111111` — #111111): The dominant action color. All primary CTAs, h1/h2 display type. Press state shifts to `#242424` (#242424).
- **Brand Accent** (`#3b82f6` — #3b82f6): Used sparely on inline links and on a small badge / "Customer story" highlight. Cal.com is a near-monochrome brand — the blue appears rarely.
- **Badge Pastels** — A small pastel set for category badges and avatar fills: `#fb923c` (#fb923c), `#ec4899` (#ec4899), `#8b5cf6` (#8b5cf6), `#34d399` (#34d399). These appear on tag pills and small accent moments inside product UI fragments — never on hero CTAs.

### Surface
- **Canvas** (`#ffffff` — #ffffff): The default page floor.
- **Surface Soft** (`#f8f9fa` — #f8f9fa): Nav-pill-group background, very-soft section dividers.
- **Surface Card** (`#f5f5f5` — #f5f5f5): Feature cards, testimonial cards, badge pills, default avatar fills.
- **Surface Strong** (`#e5e7eb` — #e5e7eb): Hairline border alternative; disabled button background.
- **Surface Dark** (`#101010` — #101010): The footer background — the only dark surface on every page. Also used for the featured pricing tier card.
- **Surface Dark Elevated** (`#1a1a1a` — #1a1a1a): Used for nested cards inside the dark footer or featured pricing card.
- **Hairline** (`#e5e7eb` — #e5e7eb): The 1px border tone on light surfaces. Used on input borders, table dividers, content card outlines (sometimes).
- **Hairline Soft** (`#f3f4f6` — #f3f4f6): A barely-visible divider used between sections that share the white canvas.

### Text
- **Ink** (`#111111` — #111111): All headlines and primary text.
- **Body** (`#374151` — #374151): Default running-text color.
- **Muted** (`#6b7280` — #6b7280): Secondary text — sub-headings, breadcrumbs, footer body.
- **Muted Soft** (`#898989` — #898989): Tertiary text — captions, fine-print, copyright lines.
- **On Primary / On Dark** (`#ffffff` / `#ffffff` — #ffffff): Text on primary buttons and dark footer.
- **On Dark Soft** (`#a1a1aa` — #a1a1aa): Footer body text — slightly muted white for the link rows.

### Semantic
- **Success** (`#10b981` — #10b981): Confirmation states, success badges in product UI.
- **Warning** (`#f59e0b` — #f59e0b): Warning callouts.
- **Error** (`#ef4444` — #ef4444): Validation errors.

## Typography

### Font Family
The system runs **Cal Sans** for display + brand wordmark and **Inter** for everything else. Cal Sans is Cal.com's custom geometric display typeface — slightly condensed, weight 600, negative letter-spacing. Inter handles body, buttons, navigation, captions, and tabular code blocks. The fallback stack walks `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for both families.

The split is functional:
- Cal Sans (display, 600 weight, -0.5 to -2px tracking) — h1, h2, h3
- Inter (body + UI, 400-600 weight, 0 letter-spacing) — paragraphs, labels, buttons, nav

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 1.05 | -2px | Homepage h1 ("The better way to schedule your meetings") — Cal Sans |
| `{typography.display-lg}` | 48px | 600 | 1.1 | -1.5px | Section heads ("Your all-purpose scheduling app") — Cal Sans |
| `{typography.display-md}` | 36px | 600 | 1.15 | -1px | Sub-section heads, card titles — Cal Sans |
| `{typography.display-sm}` | 28px | 600 | 1.2 | -0.5px | CTA-band heads, pricing tier prices — Cal Sans |
| `{typography.title-lg}` | 22px | 600 | 1.3 | -0.3px | Pricing plan names — Inter |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles, intro paragraphs |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Small card titles, list labels |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions |
| `{typography.code}` | 14px | 400 | 1.5 | 0 | Code snippets, API examples — JetBrains Mono |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Standard button labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles
Cal Sans is the brand voice — every display headline uses it. Inter handles the supporting type. The boundary is strict: never put body copy in Cal Sans, never put a display headline in Inter. Cal Sans without negative letter-spacing reads as off-brand — the -0.5 to -2px tracking is part of the voice.

Display weight stays at 600 across all sizes — never 700, never 500. The middle weight is what makes Cal Sans feel modern and confident without becoming bombastic.

### Note on Font Substitutes
If Cal Sans is unavailable, **Inter** at weight 600 with -0.04em letter-spacing is a usable approximation. The geometric character of Cal Sans differs from Inter's humanist forms, but the substitution preserves the weight + tracking signature. **Manrope** at weight 700 is another close alternative.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `4px` 4px · `8px` 8px · `12px` 12px · `16px` 16px · `24px` 24px · `32px` 32px · `48px` 48px · `96px` 96px.
- **Section padding:** `96px` (96px) — the universal vertical rhythm between editorial bands.
- **Card internal padding:** `32px` (32px) for feature cards and pricing tier cards; `24px` (24px) for testimonial and product-mockup cards.
- **Gutters:** `24px` (24px) between cards in 3-up grids; `16px` (16px) inside footer columns.

### Grid & Container
- **Max content width:** ~1200px centered on marketing pages.
- **Editorial body:** Single 12-column grid; hero band often uses 7/5 split (h1 left, app mockup card right).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Pricing grid:** 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Footer:** 4-column link list at desktop, wrapping to 2-up at tablet, 1-up at mobile.

### Whitespace Philosophy
Cal.com uses generous but not excessive whitespace — section padding sits at 96px (modern-SaaS standard), and card internal padding stays at 32px. The rhythm is calibrated for fast scanning: every band has a single h1 + h2 + supporting cards, never densely packed lists. The result reads as confident-not-shouting.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Soft hairline | 1px `#e5e7eb` border | Inputs, table dividers, occasionally on cards |
| Card surface | `#f5f5f5` background — no shadow | Feature cards, testimonials |
| Subtle drop shadow | Faint shadow at low alpha | Pricing tier cards, hover-elevated states (the system uses `0 1px 2px rgba(0,0,0,0.05)` and `0 4px 12px rgba(0,0,0,0.08)`) |
| Featured tier | `#101010` background, no shadow needed | The featured pricing tier inverts to dark surface — color contrast does the elevation work |

The elevation philosophy is **soft and modern** — small drop shadows on elevated cards, color-block contrast for emphasis. No heavy shadows, no neumorphism, no glassmorphism.

### Decorative Depth
- Calendar widgets and product UI fragments embedded inside marketing cards carry their own internal shadows from the product UI itself — these are not system tokens, they're product chrome shown as content.
- Avatar circles in testimonial sections sometimes carry pastel fill colors (`#fb923c`, `#ec4899`, etc.) — adds a small chromatic flourish without breaking the monochrome brand voice.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `4px` | 4px | Almost no use — reserved for badge accents |
| `6px` | 6px | Small inline buttons, dropdown items |
| `8px` | 8px | Standard CTA buttons, text inputs, category tabs |
| `12px` | 12px | Content cards (feature cards, testimonial cards, pricing tier cards) |
| `16px` | 16px | Hero app-mockup card (a slightly larger radius for the marquee component) |
| `9999px` | 9999px | Nav-pill-group, badge pills |
| `9999px` | 9999px / 50% | Avatars, icon buttons |

### Photography Geometry
Avatar photos use `9999px` (perfect circles) at 36px or 40px. Product UI fragments inside marketing cards retain their native chrome (which often has its own internal radii — e.g., calendar grid cells, button rows). Hero illustration zones use 16:9 or 4:3 ratios with `16px` corners.

## Components

### Top Navigation

**`top-nav`** — White nav bar pinned to the top of every page. 64px tall, `#ffffff` background. Carries the Cal.com wordmark + logo at left (the lowercase "Cal.com" with the brand circle), primary horizontal menu (Product, Solutions, Resources, Pricing, Enterprise) center, right-side cluster with "Sign in" text-link, "Sign up free" `{component.button-primary}`, and a sometimes-visible language selector. Menu items in `{typography.nav-link}` (Inter 14px / 500).

**`nav-pill-group`** — A small pill-radius wrapper around 2-3 sub-nav segments (e.g., the product-mode switcher between "Personal" / "Teams" / "Enterprise"). Background `#f8f9fa` with internal padding 6px, rounded `9999px`. Active segment renders as a white-canvas pill with a subtle drop shadow inside the wrapper. The pill-in-pill treatment is one of Cal.com's signature interactive components.

### Buttons

**`button-primary`** — The signature primary CTA. Background `#111111` (#111111), text `#ffffff`, type `{typography.button}` (Inter 14px / 600), padding 12px × 20px, height 40px, rounded `8px` (8px). Active state `button-primary-active` shifts to `#242424` (#242424).

**`button-secondary`** — White button with hairline outline. Background `#ffffff`, text `#111111`, 1px hairline border, same padding + height + radius as primary.

**`button-icon-circular`** — 36 × 36px circular icon button. Background `#ffffff`, hairline border, ink-color icon. Used for share, "view more", carousel arrows.

**`button-text-link`** — Inline text button, no background. Used for "Sign in" in the top nav and inline CTA links inside cards.

**`text-link`** — Inline body links in `#111111` (the brand keeps inline links monochrome). Underlined on hover (not documented per the no-hover policy, but mentioned for context).

### Cards & Containers

**`hero-band`** — White-canvas hero with a 7-5 grid: h1 + sub-headline + button row on the left, `{component.hero-app-mockup-card}` on the right. Vertical padding `96px` (96px).

**`hero-app-mockup-card`** — A larger product-UI mockup card showing the actual Cal.com booking widget with calendar grid, time slots, and a primary "Confirm" button inside. Background `#ffffff`, 1px hairline border, rounded `16px` (16px), subtle drop shadow. Used as the hero's right-side artifact.

**`feature-card`** — Used in 3-up feature grids ("With us, appointment scheduling is easy"). Background `#f5f5f5` (#f5f5f5), rounded `12px` (12px), internal padding `32px` (32px). Carries a small icon at top, an `{typography.title-md}` headline, and a body description in `{typography.body-md}`.

**`feature-icon-card`** — A simpler card variant used in 4-up feature grids on lower-density bands. Background `#ffffff` with hairline border, rounded `12px`, padding `24px` (24px). Carries a small icon, `{typography.title-sm}` title, short description.

**`product-mockup-card`** — A card showing actual Cal.com product UI fragments (workflow editor, calendar grid, integration grid, automation flow). Background `#ffffff`, rounded `12px`, padding `24px` (24px). The product UI inside has its own internal chrome — these cards display the product, they don't decorate around it.

**`testimonial-card`** — Used in customer-quote grids. Background `#f5f5f5`, rounded `12px`, padding `24px` (24px). Top row carries a `{component.avatar-circle}` + name + role; below sits the testimonial quote in `{typography.body-md}`.

**`pricing-tier-card`** — Standard tier card. Background `#ffffff`, rounded `12px`, padding `32px` (32px). Carries the plan name in `{typography.title-lg}`, price in `{typography.display-sm}`, feature checklist in `{typography.body-md}`, and a `{component.button-primary}` at the bottom.

**`pricing-tier-card-featured`** — The featured tier (typically "Teams"). Background flips to `#101010` (#101010), text inverts to `#ffffff`. The dark surface IS the featured-tier signal — no accent border, no badge, no scale shift.

### Inputs & Forms

**`text-input`** — Standard text input. Background `#ffffff`, text `#111111`, type `{typography.body-md}`, rounded `8px` (8px), padding 10px × 14px, height 40px. 1px hairline border in `#e5e7eb`.

**`text-input-focused`** — Focus state. Border thickens or shifts to `#111111` for emphasis.

### Tags / Badges

**`badge-pill`** — Small pill label used for category tags ("Product", "Article", "New") and pastel-fill avatar substitutes. Background `#f5f5f5` or one of the badge pastels (`#fb923c`, `#ec4899`, etc.), text `#111111`, type `{typography.caption}` (13px / 500), rounded `9999px`, padding 4px × 12px.

**`avatar-circle`** — 36px diameter, rounded `9999px`. Either holds a photo or a pastel fill with initials in `{typography.caption}`.

**`rating-stars`** — Inline star rating in `#fb923c` (#fb923c). Used near testimonial avatars to display a 5-star satisfaction score.

### Tab / Filter

**`category-tab`** + **`category-tab-active`** — Used inside the nav-pill-group. Inactive: transparent background, `#6b7280` text. Active: `#ffffff` background, `#111111` text, subtle drop shadow inside the pill-group wrapper. Padding 8px × 14px, rounded `8px`.

### CTA / Footer

**`cta-band-light`** — A pre-footer "Smarter, simpler scheduling" CTA card. Background `#f5f5f5`, rounded `12px`, padding `48px` (48px). Carries an h2 in `{typography.display-sm}`, a sub-line, and a `{component.button-primary}` centered.

**`footer`** — Dark navy footer that closes every page. Background `#101010` (#101010), text `#a1a1aa`. 4-column link list at desktop covering Product / Solutions / Company / Resources. Vertical padding 64px. The Cal.com wordmark sits at the top-left in `#ffffff`. The footer is the only dark surface on every page — the deliberate inversion visually closes the page.

## Do's and Don'ts

### Do
- Reserve `#111111` (#111111) for primary CTAs and h1/h2 type. Cal.com's button is near-black, not blue.
- Use Cal Sans for every display headline. Pair with Inter body. Never blur the boundary.
- Apply negative letter-spacing on display sizes (-0.5 to -2px). Cal Sans without it reads as off-brand.
- Use `{component.feature-card}` (light gray) and `{component.product-mockup-card}` (white with chrome) deliberately — the gray cards signal "abstract feature claim", white cards signal "look at the actual product".
- Embed real product UI fragments inside marketing cards. Don't paint marketing illustrations of the product when you can show the product itself.
- Keep avatar circles at 36px, perfect circles, sometimes with pastel fills. Avatars are the only place where badge pastels appear.
- Use `{component.nav-pill-group}` for grouped sub-nav segments. The pill-in-pill treatment is signature.
- End every page with the dark footer. The light-to-dark transition is part of the editorial rhythm.

### Don't
- Don't use accent colors (`#3b82f6`, badge pastels) on primary CTAs. The system is monochrome at the action layer.
- Don't bold display weight beyond 600. Cal Sans at 700 reads as bombastic.
- Don't use rounded radius beyond `16px` (16px) on cards. Larger radii read as consumer-app, not professional booking software.
- Don't put dark surface cards anywhere except the footer and the featured pricing tier. The dark surface is a deliberate, scarce signal.
- Don't repeat the same surface mode in two consecutive bands. Cal.com's pacing alternates white → light-gray → white → product-mockup-card → white → dark-footer.
- Don't add hover state styling beyond what the system already encodes — primary darkens on press; nothing else changes.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→32px; hero-app-mockup-card stacks below content; feature grids 1-up; pricing 1-up; footer 4 cols → 1 |
| Tablet | 768–1024px | Top nav stays horizontal but tightens; nav-pill-group wraps; feature cards 2-up; pricing 2-up |
| Desktop | 1024–1440px | Full top-nav with all menu items; 3-up feature cards; 4-up pricing tiers |
| Wide | > 1440px | Same as desktop with more outer breathing room; max content width caps at 1200px |

### Touch Targets
- `{component.button-primary}` at minimum 40 × 40px.
- `{component.button-icon-circular}` at exactly 36 × 36 — slightly under WCAG's 44 × 44 but the centered icon and full-circle silhouette compensate.
- `{component.text-input}` height is 40px.
- `{component.category-tab}` rendered inside nav-pill-group has 8 × 14 padding; effective tap area meets 44px+ with the surrounding pill.

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px; menu opens as a full-screen sheet.
- Hero band's 7-5 grid collapses to single-column on mobile — h1 + sub-head + buttons first, then the app-mockup card below.
- Feature grids reduce columns rather than scaling cards down.
- Pricing tier cards collapse 4 → 2 → 1; featured-tier dark surface stays visually distinct at every breakpoint.
- Nav-pill-group wraps to multi-row on tablet if the segments don't fit horizontally.
- Avatar + testimonial card layouts stay grid-aligned at every breakpoint.

### Image Behavior
- Product UI fragments inside cards retain native aspect ratios; the cards themselves resize.
- Avatar photos crop to circles at every breakpoint.
- Hero app-mockup card scales proportionally on mobile — the calendar grid stays legible.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.pricing-tier-card-featured}`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Cal Sans 600 with negative letter-spacing. Body stays Inter 400. The trinity does not blur.
6. The dark footer is the only dark surface on most pages. Don't add other dark cards casually.
7. When in doubt about emphasis: bigger Cal Sans before bolder Cal Sans.

## Known Gaps

- The dembrandt frequency analyzer captured `Buttons: 0 variants` — Cal.com renders most CTAs as styled `<a>` link elements rather than `<button>` tags, which dembrandt's button selector doesn't capture. Button styles are documented from screenshot ground-truth + standard Cal Sans / Inter baselines.
- Cal Sans is licensed to Cal.com and not available as a public web font; substitutes are documented in the typography section.
- The badge pastel set (orange / pink / violet / emerald) is documented from observed avatar fill colors; exact hex values may shift seasonally.
- Animation and transition timings (calendar slot picker, schedule confirmation, integration grid hover-reveal) are not in scope.
- Form validation states beyond `{component.text-input-focused}` are not extracted — error / success states would need a sign-up or booking flow to confirm.
- The actual booking widget surface (cal.com/{username}) is the product, not a marketing surface; its spec is out of scope.
- Avatar photos in testimonial sections sometimes carry pastel circular fills with initials instead of photographs; both treatments coexist on the same page.
