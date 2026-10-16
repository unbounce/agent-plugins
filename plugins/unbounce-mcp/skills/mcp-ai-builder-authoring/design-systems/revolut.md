# Design System: Revolut

## Overview

Revolut's marketing canvas operates in a high-contrast two-mode system: a
**near-black storytelling canvas** (`#000000` — `#000000`)
that hosts hero bands, product mockups, and the planning section, alternating
with **white catalogue bands** (`#ffffff` — `#ffffff`) that
host comparison tables, FAQ rows, and download tiles. The two modes switch
in full-bleed bands rather than soft transitions; sections slam against each
other to create the magazine-spread rhythm the brand is known for.

The display typography is **Aeonik Pro at weight 500**, used at sizes from
20px to 136px. The flagship hero ("Banking & Beyond", "Join the 70+ million
using Revolut") sits at 80–136px with `lineHeight: 1.0` and tight negative
letter-spacing. Body type is **Inter** at weight 400 — open-source,
no-nonsense, paired with positive tracking (`0.24px`) on UI labels for
slightly more mechanical precision.

The brand accent is `#494fdf` (`#494fdf`) — a saturated cobalt
violet — but it appears scarcely on marketing surfaces. The actual primary
CTA on the hero is the **white pill on black** ("Choose your subscription"),
and the cobalt violet is reserved for featured plan cards, secondary CTAs in
white sections, and the brand glyph itself. A wide secondary palette of deep
teal, light-blue, deep-pink, light-green, warning orange, and yellow appears
inside product mockups and feature illustrations — never as button surfaces.

**Key Characteristics:**
- Two-mode canvas system — `#000000` (true black) for storytelling, `#ffffff` (white) for browsing — switched in full-bleed bands.
- Display typography is **Aeonik Pro 500** at sizes 20–136px with tight `lineHeight: 1.0` and large negative letter-spacing on display sizes.
- The actual primary CTA is `{component.button-primary}` — a **white pill with black text**, sitting on the dark canvas as the brightest pixel. Cobalt-violet `#494fdf` is reserved for featured plan cards and secondary CTAs.
- Eight saturated accent colours live inside product mockups and illustrations only, never as button surfaces — teal, light-blue, deep-pink, light-green, warning orange, yellow, brown, danger red.
- All buttons are pill-shaped (`9999px`); content cards use `20px` (20px); inputs and small chips use `12px` (12px).
- Photography is product-led — phone mockups, card mockups, terminal mockups — shown full-bleed inside dark sections with no caption overlay.

## Colors

### Brand & Accent
- **Cobalt Violet** (`#494fdf` — `#494fdf`): the brand accent. Reserved for featured plan cards (`{component.plan-card-featured}`), the brand wordmark icon, and secondary CTAs in white-canvas regions.
- **Cobalt Bright** (`#4f55f1` — `#4f55f1`): a one-step-up bright variant used in inline link colour and accent-photo headers.
- **Cobalt Deep** (`#3a40c4` — `#3a40c4`): the active/pressed state of cobalt elements.
- **On-Primary** (`#ffffff` — `#ffffff`): label colour on top of `#494fdf` surfaces.

### Surface
- **Canvas Light** (`#ffffff` — `#ffffff`): the white catalogue mode for FAQ, download tiles, comparison tables.
- **Canvas Dark** (`#000000` — `#000000`): the storytelling canvas — true black, never near-black.
- **Surface Soft** (`#f4f4f4` — `#f4f4f4`): a subtle off-white used on download tiles, soft buttons, and inset card groups inside white bands.
- **Surface Card** (`#ffffff` — `#ffffff`): pure white card surface, used for feature cards in white-canvas regions.
- **Surface Deep** (`#0a0a0a` — `#0a0a0a`): a one-step-up dark surface for inset cards inside black-canvas regions.
- **Surface Elevated** (`#16181a` — `#16181a`): the planning-section card background — slightly luminous, lifts plan cards off the black canvas.
- **Hairline Light** (`#e2e2e7` — `#e2e2e7`): 1px dividers inside white bands.
- **Hairline Dark** (`rgba(255,255,255,0.12)` — `rgba(255,255,255,0.12)`): the corresponding low-contrast divider in dark regions.
- **Hairline Strong** (`#191c1f` — `#191c1f`): structural full-strength dividers and the outline of light cards.

### Text
- **Ink** (`#191c1f` — `#191c1f`): primary text colour. Notably warmer than pure black, paired with the white canvas for body legibility.
- **Body** (`#1f2226` — `#1f2226`): long-form body where `#191c1f` would feel slightly too sharp.
- **Charcoal** (`#3a3d40` — `#3a3d40`): captions, secondary nav.
- **Mute** (`#505a63` — `#505a63`): supporting text.
- **Ash** (`#5c5e60` — `#5c5e60`): tertiary text, footer copy.
- **Stone** (`#8d969e` — `#8d969e`): metadata, subtle captions.
- **Faint** (`#c9c9cd` — `#c9c9cd`): disabled foreground, hairline replacements.
- **On-Dark** (`#ffffff` — `#ffffff`): primary text on `#000000`.
- **On-Dark Mute** (`rgba(255,255,255,0.72)` — `rgba(255,255,255,0.72)`): secondary text in dark regions.

### Semantic
- **Accent Teal** (`#00a87e` — `#00a87e`): used in product mockup illustrations.
- **Accent Light Blue** (`#007bc2` — `#007bc2`): inline link colour in dark photo headers.
- **Accent Blue Link** (`#376cd5` — `#376cd5`): default inline link colour on white surfaces.
- **Accent Light Green** (`#428619` — `#428619`): success / positive product callouts.
- **Accent Green Text** (`#006400` — `#006400`): inline success text.
- **Accent Yellow** (`#b09000` — `#b09000`): caution / pending state in product mockups.
- **Accent Warning** (`#ec7e00` — `#ec7e00`): full-saturation orange used in warning illustrations.
- **Accent Pink** (`#e61e49` — `#e61e49`): deep pink — used inside product photography and category iconography.
- **Accent Danger** (`#e23b4a` — `#e23b4a`): destructive / error state.
- **Accent Deep Red** (`#8b0000` — `#8b0000`): inline error text.
- **Accent Brown** (`#936d62` — `#936d62`): a single warm-neutral used in metals tier card chrome.
- **Link** (`#376cd5` — `#376cd5`): default inline link colour. Same as `#376cd5`.

## Typography

### Font Family

Revolut ships a two-family stack:

- **Aeonik Pro** — proprietary humanist sans-serif used for all display sizes (20px+) at weight 500. Carries the brand's editorial confidence; tightens dramatically with negative letter-spacing at large sizes.
- **Inter** — open-source workhorse for body, button labels, captions, and metadata. Always at weight 400 or 600, with positive tracking (`0.16–0.24px`) on UI labels.

When Aeonik Pro cannot be licensed, **Inter Display**, **General Sans**, or **Söhne** are credible substitutes — all share the warm geometric character. Apply -1% letter-spacing on display sizes to match the original tightness.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 136px | 500 | 1.0 | -2.72px | The flagship hero ("Banking & Beyond"). One per page. |
| `{typography.display-xl}` | 80px | 500 | 1.0 | -0.8px | Section openers ("Join the 70+ million using Revolut"). |
| `{typography.display-lg}` | 48px | 500 | 1.21 | -0.48px | Sub-section titles. |
| `{typography.display-md}` | 40px | 500 | 1.2 | -0.4px | Feature card titles. |
| `{typography.heading-lg}` | 32px | 500 | 1.19 | -0.32px | Plan card titles. |
| `{typography.heading-md}` | 24px | 500 | 1.33 | 0 | Section sub-titles. |
| `{typography.heading-sm}` | 20px | 500 | 1.4 | 0 | List headers, prominent labels. |
| `{typography.body-lg}` | 18px | 400 | 1.56 | -0.09px | Marketing prose. |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0.24px | Default body. |
| `{typography.body-md-bold}` | 16px | 600 | 1.5 | 0.16px | Emphatic body. |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | Captions, metadata. |
| `{typography.button-lg}` | 20px | 500 | 1.4 | 0 | Hero CTAs (Aeonik Pro). |
| `{typography.button-md}` | 16px | 600 | 1.5 | 0.24px | Default button label. |
| `{typography.button-sm}` | 14px | 600 | 1.43 | 0 | Pill chips, sub-nav. |
| `{typography.caption}` | 13px | 400 | 1.4 | 0 | Footer disclosure, regulatory text. |
| `{typography.link-emph}` | 16px | 700 | 1.5 | 0.24px | Emphatic inline link in dark mode. |

### Principles
- Display sizes always run at weight 500 with `lineHeight: 1.0` (or 1.19–1.21 below 48px). The negative letter-spacing scales with size — bigger types tighten more.
- Body Inter sits at weight 400 with positive tracking (`0.24px`) — the small spacing nudge makes UI labels feel slightly mechanical, fitting fintech precision.
- Hero CTAs use the Aeonik Pro `{typography.button-lg}` variant; everything below the hero uses the Inter `{typography.button-md}`.
- Inline links inside dark photo regions step up to weight 700 (`{typography.link-emph}`) so they hold contrast against the canvas without using the cobalt accent.

### Note on Font Substitutes

When Aeonik Pro is unavailable, clamp display `lineHeight` to 1.0 explicitly and apply -1% letter-spacing on display sizes. Inter Display, General Sans, or Söhne will read closest to the original. Inter is open-source and should be used directly.

## Layout

### Spacing System
- **Base unit**: 4px, with the working scale on multiples of 4 / 8 / 16.
- **Tokens**: `4px` 4px · `6px` 6px · `8px` 8px · `14px` 14px · `16px` 16px · `24px` 24px · `32px` 32px · `48px` 48px · `80px` 80px · `88px` 88px · `120px` 120px.
- Section padding: `88px` (88px) vertical between bands; `120px` (120px) on the hero band and the closing planning section.
- Card internal padding: `32px` (32px) on `{component.feature-card-light}`, `{component.plan-card}`, `{component.feature-card-dark}`.

### Grid & Container
- **Max content width** ≈ 1200px on body sections; hero bands run full-bleed.
- **Plan grid**: 4-up plan cards on the home page, stacking 2-up at tablet and 1-up at small mobile.
- **Feature grid**: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Product mockup bands**: a single full-width hero photo of a phone or card mockup, no surrounding chrome — the asset itself is the section.

### Whitespace Philosophy
- Whitespace is generous and editorial — sections breathe at 88–120px so display headlines have room to register at 80–136px without feeling cramped.
- Inside cards, padding stays at 32px so feature copy and plan tiers have a consistent rhythm.
- Hairline `#e2e2e7` dividers replace shadow on white surfaces; `rgba(255,255,255,0.12)` carries the corresponding role in dark regions.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — flat | No shadow, no border | Default canvas bands (light or dark), full-bleed hero. |
| 1 — surface card | `#ffffff` (white) on `#f4f4f4` band | Feature cards inside light bands. |
| 2 — surface elevated dark | `#16181a` (`#16181a`) on `#000000` | Plan cards inside the planning section. |
| 3 — featured surface | `#494fdf` on `#000000` | Featured plan card (cobalt violet inversion). |
| 4 — product mockup | Full-bleed photo asset | Hero phone / card / terminal mockup bands. |

The system has **no traditional drop-shadow language**. Surfaces register depth via colour-blocking (light → dark band switches) and surface-luminance shifts (`#000000` → `#16181a`). Photography mockups carry their own depth from the asset itself.

### Decorative Depth
- **Product mockup hero bands** — the home page features a phone mockup full-bleed against `#000000`, with the device's own glow providing the only atmospheric depth. No additional gradients, no shadows.
- **Featured plan card** — the cobalt-violet `{component.plan-card-featured}` sits inside the otherwise dark planning grid as a single saturated colour block, marking the recommended tier visually.
- **Card metals tier** — the brand uses `#936d62` and a deep gradient on metals card mockups to signal premium without resorting to gold-on-black metallic effects.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Hero bands, full-bleed sections, footer. |
| `8px` | 8px | Inline tags, small chips. |
| `12px` | 12px | Form inputs, download tiles. |
| `20px` | 20px | Feature cards, plan cards. |
| `28px` | 28px | Product mockup containers. |
| `9999px` | 9999px | Buttons, pills, badges, tabs. |

### Photography Geometry
- Phone mockups: 9:19.5 (vertical) with `28px` corners on the device chrome.
- Card mockups: 1.586:1 (credit-card aspect) with `20px` corners.
- Terminal/POS mockups: 4:3 with `28px` corners and substantial padding around the device.
- Lifestyle photography (rare): 16:9 with `20px` corners.

## Components

### Buttons

**`button-primary`** — white CTA on dark
- Background `#ffffff`, label `#000000`, type `{typography.button-md}`, padding `14px 28px`, `rounded: 9999px`, height 48px.
- The brand's primary CTA, used on every dark hero band ("Choose your subscription", "Get started").
- Pressed state lives in `button-primary-pressed` (background `#c9c9cd`).

**`button-dark`** — dark CTA on light
- Background `#000000`, label `#ffffff`, type `{typography.button-md}`, `rounded: 9999px`.
- The reverse-canvas equivalent of `{component.button-primary}` — used inside white catalogue bands.

**`button-soft`** — soft surface CTA
- Background `#f4f4f4`, label `#191c1f`, type `{typography.button-md}`, `rounded: 9999px`.
- Tertiary action in white-canvas regions ("Learn more", "View FAQs").

**`button-outline-light`** — outlined CTA on light
- Background `#ffffff`, label `#191c1f`, 1px solid `#191c1f`, type `{typography.button-md}`, `rounded: 9999px`.
- Secondary action when paired with `{component.button-dark}`.

**`button-outline-dark`** — outlined CTA on dark
- Background `#000000`, label `#ffffff`, 1px solid `#ffffff`, type `{typography.button-md}`, `rounded: 9999px`, padding `13px 27px`, height 48px.
- Dark-canvas counterpart of `{component.button-outline-light}`; used inside dark hero bands as a tertiary action when paired with `{component.button-primary}`.

**`button-pill-sm`** — small pill chip
- Background `#f4f4f4`, label `#191c1f`, type `{typography.button-sm}`, `rounded: 9999px`, padding `8px 16px`, height 36px.
- Sub-nav chips, filter pills.

### Cards & Containers

**`hero-band-dark`** — full-bleed dark hero
- Background `#000000`, text `#ffffff`, type `{typography.display-xxl}` for the title, padding `88px` (88px) vertical, `rounded: 0px`.
- Used only on the home page hero band.

**`hero-band-photo`** — photo-led hero
- Background `#000000` with full-bleed product photography, text `#ffffff`, type `{typography.display-xl}`, `rounded: 0px`.
- Used on product pages — phone or card mockup as the full-band canvas.

**`feature-card-light`** — feature card on white
- Background `#ffffff`, text `#191c1f`, 1px solid `#e2e2e7`, type `{typography.body-md}`, `rounded: 20px`, padding `32px` (32px).
- Used in white catalogue bands for feature comparisons.

**`feature-card-dark`** — feature card on dark
- Background `#16181a`, text `#ffffff`, type `{typography.body-md}`, `rounded: 20px`, padding `32px`.
- Used inside dark storytelling sections.

**`plan-card`** — subscription plan card
- Background `#16181a`, text `#ffffff`, type `{typography.body-md}`, `rounded: 20px`, padding `32px` (32px).
- Plan name in `{typography.heading-lg}` ("Standard", "Plus", "Premium", "Metal", "Ultra").

**`plan-card-featured`** — featured plan card
- Background `#494fdf`, text `#ffffff`, type `{typography.body-md}`, `rounded: 20px`, padding `32px`.
- Cobalt-violet inversion of `{component.plan-card}` — used on the recommended tier.

**`product-mockup`** — full-bleed product asset
- Background `#000000`, the asset itself fills the band, `rounded: 28px` on the device chrome.
- Phone, card, and terminal mockups — no caption overlay, no surrounding chrome.

**`download-tile`** — app store download tile
- Background `#f4f4f4`, text `#191c1f`, type `{typography.body-sm}`, `rounded: 12px`, padding `12px 20px`, height 56px.
- App Store + Google Play download buttons, side-by-side.

### Inputs & Forms

**`text-input`** — default input
- Background `#ffffff`, text `#191c1f`, type `{typography.body-md}`, 1px solid `#e2e2e7`, `rounded: 12px`, padding `14px 16px`, height 56px.
- Generous height for fintech accessibility — comfortably exceeds WCAG AAA touch target.

### Navigation

**`nav-bar`** — top nav (desktop)
- Background `#000000`, text `#ffffff`, type `{typography.button-md}`, height 64px.
- Left: wordmark logo. Centre: top-level nav ("Personal", "Business", "Company"). Right: language switcher + "Log in" + `{component.button-primary}`.

**`nav-bar`** (mobile)
- Same height 64px, collapses centre nav into a hamburger icon. Logo stays left, sign-in CTA stays right.

**`sub-nav-pill`** — sub-nav chip
- Pill chips set in a horizontal row inside dark sections (e.g. "Personal", "Business", "Premium"), `{component.sub-nav-pill}` styling.

### Signature Components

**`badge-tag`** — neutral tag
- Background `#f4f4f4`, text `#191c1f`, type `{typography.caption}`, `rounded: 9999px`, padding `4px 12px`.
- Inline tags inside feature cards.

**`badge-feature`** — feature highlight badge
- Background `#494fdf`, text `#ffffff`, type `{typography.caption}`, `rounded: 9999px`, padding `4px 12px`.
- "New", "Most popular" badges anchored on plan cards.

**`footer`** — global footer
- Background `#000000`, text `rgba(255,255,255,0.72)`, type `{typography.body-sm}`, `rounded: 0px`, padding `80px 24px`.
- Multi-column quick-links grid above a copyright + regulatory disclosure block separated by `rgba(255,255,255,0.06)`.

## Do's and Don'ts

### Do
- Switch full bands between `#000000` (storytelling) and `#ffffff` (catalogue). The two-mode rhythm is core.
- Use `{component.button-primary}` (white pill on dark) as the primary CTA on every dark hero band. It's the brand's loudest action.
- Reserve `#494fdf` for the featured plan card and the brand wordmark — the cobalt should feel like a deliberate stamp, not a colour theme.
- Set hero headlines in **Aeonik Pro 500** at 80–136px with `lineHeight: 1.0` and large negative letter-spacing.
- Use **Inter** for body, button labels, captions — never substitute Aeonik Pro for body type.
- Apply `9999px` to every button and pill; `20px` (20px) to feature and plan cards; `12px` (12px) to inputs.
- Show product mockups full-bleed inside dark sections — the asset IS the section.
- Use the wide accent palette (`#00a87e`, `#e61e49`, `#428619`, etc.) inside product illustrations and iconography only.

### Don't
- Don't use accent colours (`#00a87e`, `#e61e49`, etc.) as button surfaces. They live inside illustrations only.
- Don't use a near-black canvas. The brand is `#000000`, not `#0a0a0a`.
- Don't pair white text with cobalt violet inside body content — `#494fdf` is for the featured plan card surface, not large prose.
- Don't add drop shadows on cards. Elevation is canvas + surface-luminance shifts.
- Don't introduce a secondary brand colour. Cobalt violet is the only brand stamp.
- Don't loosen Aeonik Pro `lineHeight` past 1.0 on display sizes. Tight stacking is structural.
- Don't bump body Inter to weight 500. Use 400 (default) or 600 (emphatic) — never the in-between.
- Don't pair `#000000` with another dark surface beyond `#16181a`. The surface ladder has only two dark steps.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop XL | ≥ 1440px | 4-up plan grid, full-bleed product mockup bands, max content 1200. |
| Desktop | 1280–1439px | Container shrinks; xl side padding. |
| Tablet Large | 1024–1279px | Plan grid 4-up; feature grid 3-up. |
| Tablet | 768–1023px | Plan grid 2-up; feature grid 2-up. |
| Mobile Large | 426–767px | Plan grid 1-up; feature grid 1-up; nav collapses to hamburger; hero `display-xxl` clamps to 64px. |
| Mobile | ≤ 425px | All grids 1-up; hero clamps to 48px; section padding `88px` collapses to 64px. |

### Touch Targets
- All buttons ship at minimum 48px tall — comfortably exceeds WCAG AAA (44px). Default `{component.button-primary}` is 48px.
- `{component.text-input}` is 56px tall — fintech-grade accessibility.
- `{component.button-pill-sm}` (36px) is bumped to 44px on mobile via padding adjustment.

### Collapsing Strategy
- Top-level nav collapses to hamburger at < 1024px; the wordmark and `{component.button-primary}` stay anchored.
- Hero `{typography.display-xxl}` clamps: 136px → 80px → 64px → 48px across the breakpoint ladder.
- Plan grid steps from 4-up to 2-up at < 1024px to 1-up at < 768px.
- Product mockup bands maintain full-bleed at every breakpoint; the asset crops inward rather than letterboxing.
- Sub-nav pills convert from a wrap row to a horizontal scroll-rail at < 768px.

### Image Behavior
- Phone and card mockups are served at 1.5× and 2× DPR; below 768px the system swaps to a smaller hero crop.
- Product photography retains its own atmospheric lighting at every breakpoint — no responsive variant assets.

## Iteration Guide

1. Focus on ONE component at a time. Most surfaces share the `#000000` / `#ffffff` pair with `9999px` for buttons and `20px` for cards.
2. Reference component names and tokens directly (`#494fdf`, `{component.plan-card-featured}`, `20px`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits; orphaned-tokens warnings will catch unused entries.
4. Add new variants as separate entries (`-pressed`, `-featured`, `-disabled`) — do not bury them in prose.
5. Default body type to `{typography.body-md}` (Inter 400 with positive tracking); reach for `{typography.body-md-bold}` only on emphasis.
6. Keep `#494fdf` scarce — if more than one cobalt-violet element appears per viewport, ask whether one should drop to `{component.plan-card}` (`#16181a`) instead.

## Known Gaps

- Pressed/active visual states are documented for `button-primary-pressed` only; other components rely on focus-ring (browser default) for interactive feedback.
- Logged-in app surfaces (transactions, transfers, account settings) are out of scope — only the public marketing canvas is documented.
- The wide accent palette (`#00a87e` through `#936d62`) is captured from the extracted token set, but exact usage inside product illustrations varies per market and product line; document per-illustration rather than as system buttons.
- Mobile-app screenshot art direction (phone bezels, status bars) is product-photography territory and not standardised as design tokens.
