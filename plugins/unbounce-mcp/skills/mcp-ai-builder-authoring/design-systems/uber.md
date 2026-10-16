# Design System: Uber

## Overview

Uber is a transportation-and-delivery super-app — ride, eats, freight, the whole urban logistics layer — and the brand's web surface signals that scale through restraint: no third colour, no accent palette, no illustration that fights the headline. The page is structurally a black-and-white duet, where black `#000000` is the conversion anchor (every CTA pill, every nav login button, the footer fill) and `#ffffff` white carries everything else. The only consistent decoration is a body of editorial 4:3 illustrations — riders, drivers, parking lots, cars-on-highway — that ground the marketing without leaking accent colour into the system.

Type is the second decisive voice. Two custom faces carry every page: `UberMove` at weight 700 for headlines (32 – 52 px display sizes with tight 1.22 – 1.25 line-height, never letter-spaced), and `UberMoveText` at weights 400 / 500 for body, button, and link. The pairing reads as engineering-grade — no italic, no decorative weight, no tracking flourish. Headlines are sentence-case; eyebrows are uppercase only when used as the section eyebrow ("WHY BECOME"); buttons are sentence-case.

The single shape signature is the pill. Every interactive element rounds to `999px` 999 px — primary CTA, secondary CTA, subtle gray pill, white floating pill, category chip, app-download badge. Cards and surfaces round to `16px` 16 px; the larger "Go Get 2026" annual-showcase card uses the same 16 px shape, just at scale. The tab-toggle on the hero ride-request form uses an off-shape `36px` 36 px — barely-pill, deliberately tighter than the canonical 999 px pill.

**Key Characteristics:**
- A two-colour CTA hierarchy: black `#000000` pill for primary conversion targets; white `#ffffff` pill (sometimes with a soft drop shadow) for secondary; subtle gray `#efefef` pill for tertiary or chip variants.
- The pill is the single signature shape — `999px` 999 px on every interactive element except the tab-toggle (`36px` 36 px) and the larger product cards (`16px` 16 px).
- Every headline is sentence-case in `{typography.display-xl}` / `{typography.display-xxl}` weight 700; no all-caps display.
- Editorial 4:3 illustrations of riders / drivers / cars are the only consistent decorative system; no gradients, no atmospheric backdrops, no shadows that aren't card-elevation hints.
- A signature alternating-band rhythm: white feature card → black promo card (with white text and white CTA) → white feature card → black footer. The black bands are NOT hero-only; they appear mid-page as promo callouts.
- A signature ride-request form card on the hero: pickup pin input + destination input + date/time chip + black "See prices" pill, all stacked inside a `16px` shadowed card.

## Colors

### Brand & Accent
- **Ink Black** (`#000000` — `#000000`): The brand's only conversion colour. Every primary CTA pill, the footer fill, every dark promo band, every nav login button. The system has no secondary accent.
- **Surface Pressed** (`#e2e2e2` — `#e2e2e2`): The pressed-state fill for white pills — a soft grey that's used only in active / pressed states.
- **Black Elevated** (`#282828` — `#282828`): A near-black used on hover for the translucent white tab-toggle pill. Documented as a system colour because it appears on a recurring brand control.

### Surface
- **Canvas** (`#ffffff` — `#ffffff`): The default page background.
- **Canvas Soft** (`#efefef` — `#efefef`): The soft gray fill for category chips, form-input rows inside the ride-request card, and subtle pill buttons.
- **Canvas Softer** (`#f3f3f3` — `#f3f3f3`): A slightly lighter gray used as a nested-input fill on white surfaces.

### Text
- **Ink** (`#000000` — `#000000`): Every heading and body paragraph on light surfaces.
- **Body** (`#5e5e5e` — `#5e5e5e`): Secondary text — captions, sub-headings, supporting copy.
- **Hairline Mid** (`#4b4b4b` — `#4b4b4b`): A mid-gray used for muted link text inside footer columns and breadcrumb-style nav.
- **Mute** (`#afafaf` — `#afafaf`): The lightest text role — placeholder text, fine print, low-priority metadata.
- **On Dark** (`#ffffff` — `#ffffff`): All text on `#000000` surfaces (footer, dark promo bands).

### Semantic
The brand does not maintain a separate error / success / warning palette in its public marketing surface. Validation cues come from the primary black or from the brand's editorial illustrations. The `#0000ee` link colour is the system's only chromatic — it's the browser-default link blue, appearing in body-copy inline links inside legal / footer text.

## Typography

### Font Family
Two custom faces carry the entire system:

1. **A custom geometric display sans** (extracted as `UberMove`) for every headline. Weight 700 only; no italic; no tracking variation. Sizes range from `display-sm` 20 px up to `display-xxl` 52 px on the hero. Line-heights tighten to 1.22 – 1.25 at display sizes for a poured-on-the-page look.
2. **A custom text sans** (extracted as `UberMoveText`) for body, button, link, and small headings. Weights 400 and 500 are the working pair. Used at 12 – 18 px; 24 px maximum for ride-request form labels. Tracking is always neutral.

The two faces share a family DNA but never overlap roles — the display face never carries a body paragraph; the text face never carries a hero headline.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xxl}` | 52px | 700 | 64px | Hero headline ("Go anywhere with Uber", "Drive when you want"). |
| `{typography.display-xl}` | 36px | 700 | 44px | Page section headlines ("Plan for later", "Safety, simplified"). |
| `{typography.display-lg}` | 32px | 700 | 40px | Promo-card headlines. |
| `{typography.display-md}` | 24px | 700 | 32px | Card titles, illustrated-promo headlines. |
| `{typography.display-sm}` | 20px | 700 | 28px | Sub-card headings. |
| `{typography.body-lg}` | 18px | 500 | 24px | Lead paragraphs and larger body. |
| `{typography.body-md}` | 16px | 400 | 24px | Default paragraph body. |
| `{typography.body-md-strong}` | 16px | 500 | 20px | Bolded inline body and most button labels. |
| `{typography.body-sm}` | 14px | 400 | 20px | Captions, secondary metadata. |
| `{typography.body-sm-strong}` | 14px | 500 | 16px | Bold caption / chip labels. |
| `{typography.caption}` | 12px | 400 | 20px | Fine print, footer secondary lines. |
| `{typography.button-large}` | 18px | 500 | 24px | Large rounded buttons inside the ride-request form. |
| `{typography.button-md}` | 16px | 500 | 20px | Default button label. |

### Principles
- **Sentence-case is the voice.** No all-caps headlines. Eyebrow tags ("WHY BECOME") are the rare exception.
- **Weight 700 is for headlines; weight 500 is for buttons and emphasis.** Don't promote button labels to 700.
- **No tracking flourish.** The display face is never letter-spaced, positive or negative.
- **Two faces, two roles.** UberMove for display; UberMoveText for everything else. Never cross the streams.

### Note on Font Substitutes
The two faces are proprietary. Open-source substitutes:
- **Display sans** — *Inter* weight 700 with `font-feature-settings: "ss01"` enabled comes closest. *Geist* weight 700 is the second-best option.
- **Text sans** — *Inter* weights 400 / 500 match the geometric width and x-height. *Plus Jakarta Sans* is a softer alternative if the brand wants a less neutral feel.

## Layout

### Spacing System
- **Base unit**: 4 px. Most captured values are multiples of 4 with a few 6-px sub-multiples (10, 14) inside button padding.
- **Tokens**: `4px` 4 px · `6px` 6 px · `8px` 8 px · `12px` 12 px · `16px` 16 px · `20px` 20 px · `24px` 24 px · `32px` 32 px.
- **Section padding**: marketing bands sit at `32px` 32 px top/bottom on tighter pages and `32px 32px` for hero bands; promo cards inset at `24px` 24 px.
- **Card interior padding**: content cards sit at `24px` 24 px; the ride-request form uses `16px` 16 px to keep the form compact.
- **Inline gap**: button rows, category chip rows, app-store pill rows use `12px` 12 px between siblings.

### Grid & Container
- **Max width**: ~1200 px container; centred with horizontal gutters of `32px` 32 px on desktop, `16px` 16 px on mobile.
- **Column patterns**:
  - Promo-card rows: 2-up at desktop (image left + content right, alternating sides), 1-up at mobile.
  - Category chips: horizontal flex with wrap.
  - FAQ rows: full-width single-column.
  - App-download pills: 2-up at desktop (Rider + Driver), 1-up at mobile.

### Whitespace Philosophy
Card-to-card spacing carries the rhythm — between two stacked promo cards there's roughly a full `32px` 32 px gutter; inside a card the headline / paragraph / CTA stack is tight (`8px` 8 px between siblings). The black promo bands and the footer have no internal hairlines — content sits on flat ink with white text.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 600px | Nav collapses to hamburger; promo cards stack; ride-request form becomes full-width. |
| Mobile-Large | 600–767px | Same as Mobile; chip rows enable horizontal scroll. |
| Tablet | 768–1119px | 2-up promo grid at upper widths; nav stays horizontal until ≥ 1120 px. |
| Desktop | 1120–1135px | Full nav row visible; promo cards 2-up. |
| Desktop-Large | ≥ 1136px | Container caps at ~1200 px; bands stay edge-to-edge while content centres. |

#### Touch Targets
The pill `button-primary` renders at ~44 px tall (10 px vertical padding + 24 px label line-height); the larger `button-large-rounded` at ~56 px. Both meet WCAG AAA at all breakpoints. Category chips inflate to ≥ 44 px tall through extra padding on touch viewports.

#### Collapsing Strategy
- **Nav**: full link row + Help / Log in / Sign up pills at desktop. Collapses to logo + hamburger at mobile; menu overlays full-screen with the same link list stacked.
- **Ride-request form card**: at desktop, the form sits inside a max-490-px `16px` card with shadow. At mobile, full-width with edge-to-edge.
- **Promo cards**: at desktop, image-left + content-right (or alternating). At mobile, image always above content.
- **Annual showcase card**: scales from a 2:3 desktop frame to a 4:3 mobile frame; date text resizes proportionally.

#### Image Behavior
- **Editorial illustrations**: 4:3 or 16:9 hard-edge rectangles; never cropped to a circle, never tilted. Aspect preserved.
- **Photography**: same — square or landscape; framed inside `16px` card chrome.
- **Maps in ride-request flow**: full-bleed inside a card; rounded corners follow the parent card.
- **Logo bar**: SVG vector, monochrome, consistent height.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default — most cards and surfaces lean on hairline-of-canvas contrast. |
| Level 1 — Subtle Drop | `rgba(0, 0, 0, 0.12) 0px 4px 16px 0px` | Card-elevated frames around promo cards on light bands. |
| Level 2 — Card Drop | `rgba(0, 0, 0, 0.16) 0px 4px 16px 0px` | The ride-request form card on the hero; large content cards with embedded forms. |
| Level 3 — Pill Float | `rgba(0, 0, 0, 0.16) 0px 2px 8px 0px` | The floating white pill button (the one that floats over hero photography). |

### Decorative Depth
- **Black bands as polarity-flip depth**: the brand uses pure black `#000000` mid-page bands to break the white-on-white rhythm. The polarity shift IS the depth cue.
- **Editorial illustrations as in-card depth**: every promo card has a single 4:3 illustration as its left or right column. The illustration's visual weight is part of the card's elevation read.
- **Pill geometry as micro-depth**: `999px` 999 px applied at varying button heights creates a stack of nested pills that reads as visual hierarchy.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Full-bleed hero bands, footer fill, raw image edges. |
| `8px` | 8px | Form-input fields inside the ride-request card. |
| `12px` | 12px | Smaller secondary card chrome. |
| `16px` | 16px | Canonical card radius — promo cards, content cards, ride-request form card, annual-showcase card, large rounded buttons. |
| `999px` | 999px | The brand's signature interactive shape — every pill button, category chip, app-download pill, icon button. |
| `36px` | 36px | The translucent-white tab-toggle pill on the hero (Ride / Drive). |
| `9999px` | 9999px | Identical effect to `999px` for circular icon containers. |

### Photography Geometry
- **Editorial illustrations**: 4:3 landscape inside promo cards; 16:9 for full-width showcase frames.
- **Driver / rider portraits**: 4:5 portrait crop; framed by `16px` 16 px card chrome.
- **Annual showcase image**: 2:3 portrait at desktop, scaling to 4:3 at mobile. The image fills the card; the headline overlays the bottom.
- **Logo bar**: monochrome SVG vectors at consistent ~24 px height.
- **Avatars** (where used): square or `9999px` circle, never `12px` rounded-square.

## Components

### Buttons

**`button-primary`** — the canonical black pill, the brand's conversion target.
- Background `#000000`, text `#ffffff`, label set in `{typography.button-md}`, padding `12px 12px`, shape `999px` 999 px.

**`button-secondary`** — the white pill paired with the black primary.
- Background `#ffffff`, text `#000000`, same label and padding as `button-primary`, shape `999px`.

**`button-subtle`** — the gray secondary pill used for tertiary actions inside cards (e.g., "Learn more" / "Use Reserve").
- Background `#efefef` (`#efefef`), text `#000000`, label in `{typography.button-md}`, padding `12px 16px`, shape `999px`.

**`button-floating`** — the white pill with a subtle drop-shadow that floats over a dark or photographic surface.
- Background `#ffffff`, text `#000000`, padding `12px`, shape `999px`. Carries a Level 3 pill-float shadow.

**`button-large-rounded`** — the bigger black call-to-action used inside the ride-request flow ("Yes, help me").
- Background `#000000`, text `#ffffff`, label in `{typography.button-large}`, padding `16px 20px`, shape `16px` 16 px (not pill — the only black CTA that breaks the pill rule, used in the larger form context).

**`button-tab-translucent`** — the tab-toggle on the hero ride-request form (Ride / Drive).
- Background `#ffffff`, text `#000000`, label in `{typography.body-md-strong}`, shape `36px` 36 px (off-shape, deliberately tighter than the canonical 999 px pill).

### Cards & Containers

**`card-content`** — the canonical content card.
- Background `#ffffff`, text `#000000`, padding `24px`, shape `16px` 16 px. No shadow on the default state.

**`card-elevated`** — the content card with Level 1 subtle drop.
- Background `#ffffff`, text `#000000`, same padding + shape as `card-content`. Shadow at Level 1.

**`card-soft-tinted`** — the gray-tinted card used as a sub-region inside the page (e.g., "Plan for later" callout).
- Background `#efefef`, text `#000000`, padding `24px`, shape `16px`.

**`promo-card-illustrated`** — the 2-column promo card with illustration on one side and copy on the other.
- Background `#ffffff`, text `#000000`, padding `24px`, shape `16px`. Headline in `{typography.display-md}` or larger.

**`promo-card-on-dark`** — the polarity-flipped promo card in black.
- Background `#000000`, text `#ffffff`, padding `24px`, shape `16px`. Used for the "Drive with Uber" mid-page band.

**`request-form-card`** — the hero ride-request form chrome.
- Background `#ffffff`, text `#000000`, padding `16px`, shape `16px`. Carries Level 2 card drop shadow.

**`request-form-input-row`** — the per-field row inside the request-form card.
- Background `#efefef`, text `#000000`, padding `16px`, shape `8px` 8 px. Hosts an icon + label + value.

**`showcase-image-card`** — the giant "GO•GET 2026" annual showcase card.
- Background `#000000`, text `#ffffff` overlay, padding `32px`, shape `16px`. Display-xxl headline overlays the bottom of the image.

### Inputs & Forms

**`text-input`** — the canonical text input.
- Background `#efefef`, text `#000000`, body in `{typography.body-md}`, padding `16px`, shape `8px` 8 px.

**`text-input-on-soft`** — the nested input on a white card (slightly lighter fill).
- Background `#f3f3f3`, otherwise identical to `text-input`.

### Navigation

**`nav-bar`** — the sticky top nav.
- Background `#ffffff` on light pages, switches to `#000000` on the rare dark page (e.g., Uber Eats hero). Padding `16px 32px`.

**`nav-link`** — the link row inside `nav-bar`.
- Text `#000000`, set in `{typography.body-md-strong}` 500 weight.

**`footer`** — the deep-black footer band.
- Background `#000000` (the brand's only true black surface), text `#ffffff`, padding `32px 32px`. Body in `{typography.body-sm}`; column eyebrows in `{typography.body-md-strong}`.

### Signature Components

**`hero-band-light`** — the white hero with the ride-request card.
- Background `#ffffff`, text `#000000`, padding `32px 32px`. Headline in `{typography.display-xxl}` (52 px / 700) on the left; `request-form-card` on the right.

**`hero-band-dark`** — the rare black hero (used on Uber Eats and Drive landing).
- Background `#000000`, text `#ffffff`, padding `32px 32px`. Same display-xxl headline scale; CTA inverts to `button-secondary` white pill.

**`category-button`** — the horizontal-scroll category row ("Reserve / Rentals / Teens / Group rides").
- Background `#efefef`, text `#000000`, label in `{typography.body-sm-strong}`, padding `8px 16px`, shape `999px`. An icon precedes the label.

**`faq-row`** — the FAQ accordion item.
- Background `#ffffff`, text `#000000`, question in `{typography.body-md-strong}`, padding `16px` 0. No card chrome — hairline dividers between rows.

**`app-download-pill`** — the "Download the Rider app" / "Download the Driver app" pill.
- Background `#000000`, text `#ffffff`, label in `{typography.body-md-strong}`, padding `12px 20px`, shape `999px`.

**`icon-button-circular`** — the round icon container used in the nav and inside the ride-request card.
- Background `#efefef`, dark icon, shape `9999px`. No label.

### Links

**`link-blue`** — the system-default browser-blue link inside legal / footer fine print.
- Text `#0000ee` (`#0000ee`), body in `{typography.body-md}`.

**`link-on-dark`** — the white link inside dark bands.
- Text `#ffffff`, body in `{typography.body-md}`.

**`link-mute`** — the muted gray link inside footer columns.
- Text `#4b4b4b`, body in `{typography.body-md}`.

**`link-mute-soft`** — the lightest gray link, used for low-priority secondary text on dark surfaces.
- Text `#afafaf`, body in `{typography.body-md}`.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces (`scripts/derive-examples-block.mjs`). Each `ex-*` entry references brand-native primitives so downstream consumers (`/preview-design`, `/generate-kit`) re-skin the same 10 surfaces consistently. `TO_FILL` markers indicate missing primitives — resolve in the LLM judgment pass.

**`ex-pricing-tier`** — Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-pricing-tier-featured`** — Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode).
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-product-selector`** — What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery).
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-cart-drawer`** — Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart).
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-app-shell-row`** — Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-auth-form-card`** — Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — same chrome as feature-card with elevated shadow.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — Empty-state illustration frame.
- Properties: `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast notification surface — feature-card shape + medium shadow.
- Properties: `backgroundColor`, `rounded`, `padding`, `typography`


## Do's and Don'ts

### Do
- Reserve `#000000` (`#000000`) for every primary CTA pill. One black pill per visible viewport is the brand's whole conversion story.
- Use `999px` 999 px on every interactive element (buttons, chips, app pills). The pill IS the brand's geometric signature.
- Render cards in `16px` 16 px — promo cards, content cards, the ride-request form card, the annual-showcase card all share this radius.
- Set every headline in `{typography.display-*}` weight 700 in sentence-case. The display face never carries body copy.
- Use polarity-flipped black promo bands mid-page to break up white-on-white rhythm. The polarity shift IS the depth cue.
- Anchor every promo card with a 4:3 editorial illustration; never use generic stock imagery.

### Don't
- Don't introduce a second brand accent colour (orange, blue, green). The brand's entire UI is black-and-white plus grayscale; new accents flatten the system.
- Don't render the primary CTA as a `16px` rectangle except inside the larger ride-request flow (where `button-large-rounded` is the documented exception).
- Don't use all-caps display headlines. Sentence-case is the voice; uppercase is restricted to rare eyebrow tags.
- Don't drop a soft drop-shadow on every card. The brand uses Level 0 flat as the default; shadow is reserved for the floating pill and the ride-request form.
- Don't reduce the brand to its illustration system alone. The pill geometry + black/white duet carries the brand even without illustrations.
- Don't tighten or loosen letter-spacing on the display face. The brand never letter-spaces; default tracking is part of the voice.
- Don't use `9999px` 9999 px for square cards — the pill 999 px and full 9999 px effects are identical for interactive elements, but cards stay at `16px` 16 px.
