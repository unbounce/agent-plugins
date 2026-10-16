# Design System: OpenCode

## Overview

OpenCode's marketing site is rendered entirely in Berkeley Mono — every word on the page, from the 38px hero headline down to the 14px footer fine print, sits in the same monospaced face. The visual identity comes from that single typographic decision: the page reads like a manpage or a static-site README, complete with bracketed `[+]` / `[-]` / `[x]` ASCII markers used in place of icons or bullets, and a wordmark rendered as block-pixel ASCII art at the top of the nav. There is no sans-serif anywhere, no display face, no italics, no decorative ornament — the system is one font and one weight away from being a 1990s `whatis` page rendered at modern resolutions.

The chrome is austere: warm cream canvas (`#fdfcfc` — `#fdfcfc` with a faint blush), nearly-black ink (`#201d1d` — `#201d1d`), and a 4-tier neutral gray ladder for body, metadata, and disabled text. Cards don't exist as raised surfaces — sections are just hairline-bordered text blocks (`rgba(15,0,0,0.12)` 1px) sitting directly on the canvas with `96px` (96px) air between them. The single "visual" moment in the entire system is a full-bleed dark hero card (`#201d1d` — true near-black) that mocks up the OpenCode TUI itself: a terminal frame with `tab` / `ctrl-p` keybinding hints, a "Build" command line, and the OpenCode wordmark rendered as a pixel-block ASCII title.

The semantic palette is unusual for a brand-marketing site: it ships the full Apple Human Interface Guidelines accent ramp — `#007aff` (Apple Blue `#007aff`), `#ff3b30` (`#ff3b30`), `#ff9f0a` (`#ff9f0a`), `#30d158` (`#30d158`) plus their hover/active deepenings — even though the marketing surfaces themselves only use these colors in the dark hero TUI mockup as syntax-highlight stand-ins. The wider palette belongs to the in-product TUI; the marketing pages mostly stay in monochrome.

**Key Characteristics:**
- 100% Berkeley Mono typography across every text role — no sans-serif fallback anywhere in the chrome
- Warm cream `#fdfcfc` (#fdfcfc) as the only body background — no surface alternation across sections
- Single dark surface (`#201d1d` — #201d1d) reserved exclusively for the hero TUI mockup
- 4px radius (`4px`) on every interactive element; sections themselves are sharp rectangles bordered in 1px hairline
- ASCII bracket markers (`[+]`, `[-]`, `[x]`) used as bullet glyphs in feature lists and FAQ rows
- Block-pixel ASCII wordmark in the primary nav and inside the hero TUI — the brand identity is its own ASCII art
- 96px `96px` rhythm between every section, with no decorative dividers; only thin 1px `rgba(15,0,0,0.12)` rules separate content blocks

## Colors

> **Source pages:** `/` (home), `/zen`, `/enterprise`. The chrome palette is identical across all three.

### Brand & Accent
- **Ink** (`#201d1d` / `#201d1d` — `#201d1d`): the brand's only "color." Headlines, body text, primary CTA fill, nav links, and every solid icon. Treats nearly-black as the brand color rather than pure black to keep type readable on the warm cream canvas.
- **Ink Deep** (`#0f0000` — `#0f0000`): pressed-state for the primary CTA. Carries a faint red undertone matching the canvas's warm cast.
- **Cream** (`#fdfcfc` — `#fdfcfc`): the brand's signature warm white. Used for every page body, every card surface, the on-primary text color, and the ASCII wordmark fill on dark.

### Surface
- **Canvas Cream** (`#fdfcfc` — `#fdfcfc`): every page body, every card.
- **Soft Surface** (`#f8f7f7` — `#f8f7f7`): text-input default background, testimonial row fill, alternating row tint.
- **Surface Card** (`#f1eeee` — `#f1eeee`): install-snippet pill, disabled button fill, slightly-elevated section row.
- **Surface Dark** (`#201d1d` — `#201d1d`): the hero TUI mockup background and the dark CTA pill on the home page. Identical to `#201d1d` — the brand uses one near-black for both text and dark surfaces.
- **Surface Dark Elevated** (`#302c2c` — `#302c2c`): the prompt-row inside the hero TUI mockup, one notch lighter than the dark surface itself.
- **Hairline** (`rgba(15,0,0,0.12)` — `rgba(15,0,0,0.12)`): 1px section divider. The translucent warm tint matches the cream canvas's undertone.
- **Hairline Strong** (`#646262` — `#646262`): tab strip's bottom rule and stronger inline divider.

### Text
- **Ink** (`#201d1d` — `#201d1d`): headlines, body text, primary nav links, button text on light surfaces.
- **Charcoal** (`#302c2c` — `#302c2c`): subtly softer body where pure ink is too heavy.
- **Body** (`#424245` — `#424245`): default paragraph text and FAQ answers.
- **Mute** (`#646262` — `#646262`): tab labels (default state), metadata, footer link text, in-list secondary annotations.
- **Stone** (`#6e6e73` — `#6e6e73`): least-emphasis utility text, breadcrumb separators.
- **Ash** (`#9a9898` — `#9a9898`): disabled text and secondary annotation in dark TUI mockup, also TUI mockup secondary color.

### Semantic
The full Apple Human Interface Guidelines semantic ramp ships with the system. On marketing pages these colors appear primarily inside the hero TUI mockup as syntax-highlight stand-ins; in the in-product TUI they carry their conventional meaning.

- **Accent** (`#007aff` — `#007aff`): primary informational signal, in-product link color, TUI command highlight.
- **Accent Hover** (`#0056b3` — `#0056b3`): pressed informational link.
- **Accent Active** (`#004085` — `#004085`): deeply-pressed informational state.
- **Danger** (`#ff3b30` — `#ff3b30`): destructive confirmation, error state.
- **Danger Hover** (`#d70015` — `#d70015`): pressed destructive.
- **Danger Active** (`#a50011` — `#a50011`): deeply-pressed destructive.
- **Warning** (`#ff9f0a` — `#ff9f0a`): caution callouts.
- **Warning Hover** (`#cc7f08` — `#cc7f08`): pressed caution.
- **Warning Active** (`#995f06` — `#995f06`): deeply-pressed caution.
- **Success** (`#30d158` — `#30d158`): positive confirmation, in-TUI success indicator.

## Typography

### Font Family
**Berkeley Mono** is the proprietary monospaced face used across every text role in the system. It carries weights 400 (regular), 500 (medium), and 700 (bold) and falls back through a long monospace stack — IBM Plex Mono → ui-monospace → SFMono-Regular → Menlo → Monaco → Consolas → Liberation Mono → Courier New.

The single-font decision is the brand. There is no display face, no body sans, no italic alternative, and no fallback to a proportional font anywhere — even the legal copyright row uses Berkeley Mono at 14px. This is the most aggressive typographic restraint of any site in the marketing-tools category: OpenCode's identity is "the marketing page is a man page."

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 38px | 700 | 1.5 | 0 | Hero headline ("The open source AI coding agent") |
| `{typography.heading-md}` | 16px | 700 | 1.5 | 0 | Section label ("What is OpenCode?", "FAQ", "Built for privacy first") |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Body copy, paragraph text, list-row text, install-snippet code |
| `{typography.body-strong}` | 16px | 500 | 1.5 | 0 | Inline emphasis, primary nav link, tab-label active |
| `{typography.body-tight}` | 16px | 500 | 1 | 0 | Compact label rendered without breathing room |
| `{typography.link-md}` | 16px | 400 | 1.5 | 0 | Inline anchor link in body prose |
| `{typography.button-md}` | 16px | 500 | 2 | 0 | Every button label across the system |
| `{typography.caption-md}` | 14px | 400 | 2 | 0 | Footer link text, badge label, copyright row, chart caption |

### Principles
The hierarchy is built almost entirely from size and weight contrast on a single face. The display headline (38px / 700) and the heading-md label (16px / 700) share a weight; the difference is just size. Body and link share size, weight, and line-height — only context distinguishes them. Buttons get a deliberately tall line-height (2.0) so labels feel calmly spaced inside the 4px-radius rectangle.

### Note on Font Substitutes
Berkeley Mono is a paid commercial font. Open-source substitutes that approximate its metrics within ~3% at body sizes:
- **JetBrains Mono** — closest match for stroke contrast and x-height; pair at weights 400 / 500 / 700.
- **IBM Plex Mono** — official secondary fallback in the documented font stack; slightly more open counters but matches line-height behavior.
- **Geist Mono** — modern alternative with similar geometric construction.

When substituting, line-height behavior is preserved by keeping `lineHeight: 1.5` for body and `lineHeight: 2` for buttons — adjusting weight is rarely needed.

## Layout

### Spacing System
- **Base unit:** 8px (with finer 1/2/4px steps available for tight inline gaps).
- **Tokens (front matter):** `1px` (1px) · `4px` (4px) · `8px` (8px) · `12px` (12px) · `16px` (16px) · `24px` (24px) · `32px` (32px) · `96px` (96px).
- **Universal section rhythm:** every page in the set uses `96px` (96px) as the vertical gap between major content blocks. This is the largest spacing token in the system and is the dominant layout cue across the home, `/zen`, and `/enterprise` pages.
- **Section internal padding:** content rows inside a section sit at `16px` (16px) vertical with no horizontal padding — text starts flush at the section's left edge.

### Grid & Container
- **Max width:** ~960px content column for body sections; the dark hero TUI mockup is full-bleed within an outer ~1100px content frame.
- **Two-column split:** `/enterprise` pairs a left text block (~360px wide) with a right-aligned form column (~480px wide). The home page is single-column reading.
- **Footer:** 5-up horizontal link row (GitHub / Docs / Changelog / Discord / X) at desktop, collapsing to 2-up at tablet and 1-up at mobile.

### Whitespace Philosophy
Whitespace is structural and generous. Sections sit 96px apart with no decorative dividers between them — the `rgba(15,0,0,0.12)` 1px rule is the only signal of separation. Inside a section, content is left-flush against the column edge with no internal indentation; bullets use ASCII bracket prefixes (`[+]` / `[-]`) instead of indent-based layout. The result is a page that feels like a printed code listing rather than a styled marketing layout.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No border, no shadow | Default for body sections, list rows, hero text block, footer |
| 1 — Hairline rule | 1px solid `rgba(15,0,0,0.12)` (translucent warm tint) | Section dividers, between major content blocks |
| 2 — Hairline strong | 1px solid `#646262` | Tab strip bottom rule, in-list emphasized divider |
| 3 — Inverted dark | `#201d1d` fill | Hero TUI mockup, dark CTA pill — the system's only "elevated" surface uses color, not shadow |

There are no drop shadows in the system. Nothing lifts, nothing floats. The only way an element registers as "above" another is the dark surface used in the hero mockup.

### Decorative Depth
Depth comes from typography density and the single dark TUI mockup, not from CSS effects:
- **ASCII block-pixel wordmark** — the OpenCode brand name rendered as a 5-row block of monospaced character cells, used in the primary nav and as the centerpiece of the hero TUI mockup.
- **Hero TUI mockup** — full-bleed `#201d1d` rectangle containing a faux terminal interface: ASCII wordmark, a `tui-prompt-row` showing a Build command line, and `tab switch agent` / `ctrl-p commands` keybinding hints in `#9a9898` at the bottom edge.
- **Chart tiles** — three thin-line ASCII charts inside the home page's "open source AI coding agent" stat block, with abstract dotted/sparse-line plots in `#424245` against the cream canvas. Captions sit beneath in `{typography.caption-md}` (`Fig 1. 150K GitHub Stars`, `Fig 2. 850 Contributors`, `Fig 3. 6.5M Monthly Devs`).

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `0px` | 0px | Sections, hero TUI mockup, primary nav, footer, list rows — every container that isn't a button |
| `4px` | 4px | Every interactive element — primary CTA, secondary CTA, text inputs, install snippet, badges, prompt rows |
| `9999px` | 9999px | Avatar circles in testimonials |

The radius vocabulary is two values: 4px for interactive elements and 0px for everything else. Avatar circles in testimonial rows are the only fully-rounded element in the system.

### Photography Geometry
There is no photography. Visual elements are limited to:
- **ASCII block-pixel wordmark** in the nav and hero TUI mockup.
- **Inline ASCII charts** inside the stat-block section — abstract sparse-line and dotted plots without specific data points.
- **Avatar dots** (~32px) inside testimonial rows on `/zen` — flat colored circles in `9999px`.
- **In-product icons** (kbd, A+, ⊕, ↻, K, Z) rendered as small monospaced character glyphs, not bitmaps or SVG.

## Components

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only.

### Buttons

**`button-primary`** — the universal OpenCode CTA
- Background `#201d1d`, text `#fdfcfc`, type `{typography.button-md}`, padding `4px 20px`, height ~36px, rounded `4px` (4px).
- Used for "Download" (top nav), "Get started with Zen", "Send" (enterprise contact form), "Subscribe" (newsletter footer), "Read docs →".
- Pressed state lives in `button-primary-active` — background drops to `#0f0000`.

**`button-secondary`** — outlined alternative
- Background `#fdfcfc`, text `#201d1d`, 1px solid `#646262` border, type `{typography.button-md}`, padding `4px 20px`, rounded `4px`.
- Lower-emphasis CTA — appears beside the primary fill where two actions are paired.

**`button-tab`** + **`button-tab-active`** — install-tab strip
- Default: transparent background, text `#646262`, type `{typography.button-md}`, padding `8px 16px`, rounded `0px`.
- Active: same surface, text `#201d1d`, with a 2px `#9a9898` bottom underline indicating selection.
- Used in the install-method tab strip on the home page (`curl` / `npm` / `bun` / `brew` / `yay`).

**`button-disabled`**
- Background `#f1eeee`, text `#9a9898`, rounded `4px`.

### Badges & Chips

**`badge-news`** — small dark chip in the news/announcement strip
- Background `#201d1d`, text `#fdfcfc`, type `{typography.caption-md}`, padding `2px 8px`, rounded `4px`.
- Sits inline with body copy as a "News" / "Beta" / "Live now" tag on the home page above the hero headline.

**`badge-section-label`** — bracketed section header
- Background transparent, text `#201d1d`, type `{typography.heading-md}`, rounded `0px`.
- Renders as a bare `**Heading**` line above a 1px `rgba(15,0,0,0.12)` rule with no chip background — but the way the text reads ("[+]", "[x]", `What is OpenCode?`) makes it function as a label component.

### Inputs & Forms

**`text-input`** + **`text-input-focused`**
- Default: background `#f8f7f7`, text `#201d1d`, 1px solid `rgba(15,0,0,0.12)`, type `{typography.body-md}`, padding `8px 12px`, height ~40px, rounded `4px`.
- Focused: background flips to `#fdfcfc`, border becomes 1px solid `#201d1d` (the canvas's flat focus signal — no halo, no glow).
- Used for every contact-form field on `/enterprise` (Full name, Role, Company, Company email, Phone number) and the newsletter email field at the home page footer.

**`textarea`**
- Background `#f8f7f7`, text `#201d1d`, 1px solid `rgba(15,0,0,0.12)`, type `{typography.body-md}`, padding `12px`, rounded `4px`.
- "What problem are you trying to solve?" multi-line textarea on `/enterprise`.

**`install-snippet`** — the home page's signature install code block
- Background `#f1eeee` (`#f1eeee`), text `#201d1d` rendered in `{typography.body-md}` (already monospaced — Berkeley Mono), padding `12px 16px`, rounded `4px`.
- Contains the literal `curl -fsSL https://opencode.ai/install | bash` command with a small copy-icon at the right edge. Sits below the install-method tab strip.

### Cards & Containers

**`hero-tui-mockup`** — the home page's signature TUI preview
- Container: full-bleed `#201d1d` (~near-black), padding `64px 32px`, rounded `0px`.
- Contents (top → bottom): ASCII block-pixel "OPENCODE" wordmark centered in `#fdfcfc`; a `{component.tui-prompt-row}` showing a "Build" command line with model selector text; an `tab switch agent  ctrl-p commands` keybinding hint row at the bottom in `#9a9898`.

**`tui-prompt-row`** — the inset command line inside the TUI mockup
- Background `#302c2c` (`#302c2c`), text `#fdfcfc` in `{typography.body-md}`, padding `8px 12px`, rounded `4px`.
- Renders an inline command (`Build  Claude Opus 4.5  OpenCode Zen`) with a leading vertical pipe and the model name styled as a bracketed token.

**`list-row`** — feature/benefit row with ASCII bracket bullet
- Background `#fdfcfc`, text `#424245` in `{typography.body-md}`, padding `8px 0`.
- Each row begins with a `[+]` / `[-]` / `[x]` ASCII marker followed by a bold label and a regular description: e.g., `[+] LSP enabled    Automatically loads the right LSPs for the IDE`. The bracket marker is part of the text content, not a separate icon.

**`faq-row`** — FAQ entry with bracket toggle
- Background `#fdfcfc`, text `#201d1d` in `{typography.body-md}`, padding `12px 0`, with a 1px `rgba(15,0,0,0.12)` bottom rule.
- Each row leads with `+` / `−` ASCII markers indicating expand/collapse state. Always rendered as plain text rows — no chevron icons, no animated accordion chrome.

**`testimonial-row`** — `/zen` peer-quote row
- Background `#f8f7f7`, text `#424245` in `{typography.body-md}`, padding `16px 20px`, rounded `4px`.
- Layout: a 32px avatar circle (`9999px`) at left, name + role + company in `{typography.body-strong}` on the first line, quote in `{typography.body-md}` `#424245` on the second line.

**`chart-tile`** — the stat-block sparse-line chart
- Background `#fdfcfc`, text `#424245` in `{typography.caption-md}`, rounded `0px`, padding `16px`.
- Contains an inline SVG/CSS-drawn ASCII-style sparse-line plot (dotted, abstract — never specific data points) with a `Fig N. <stat label>` caption beneath in `#646262`.

### Navigation

**`primary-nav`**
- Background `#fdfcfc`, text `#201d1d` in `{typography.body-strong}`, height ~56px, rounded `0px`, with a 1px `rgba(15,0,0,0.12)` bottom rule.
- Layout (desktop): block-pixel ASCII OpenCode wordmark at left (~120×24px), nav links cluster center-right ("GitHub [150K] · Docs · Zen · Go · Enterprise"), `{component.button-primary}` "Download" CTA at the far right with a small download glyph.

**Top Nav (Mobile)**
- ASCII wordmark stays at left, nav links collapse into a hamburger drawer at the right. The Download CTA remains visible at every breakpoint.

### Footer

**`footer-section`**
- Background `#fdfcfc`, text `#424245` in `{typography.caption-md}`, padding `32px 0`, with a 1px `rgba(15,0,0,0.12)` top rule.
- Top row: 5-column horizontal link grid (GitHub [150K] · Docs · Changelog · Discord · X), each rendered as a centered cell separated by 1px `rgba(15,0,0,0.12)` vertical rules.
- Bottom row: `©2026 Anomaly` copyright at left, `Brand · Privacy · Terms · English ▼` utility cluster at right, all in `{typography.caption-md}` `#646262`.

### Inline

**`link-inline`** — body-prose anchor link
- `#201d1d` text with underline. The brand's only link affordance — even links inside body paragraphs use ink color rather than `#007aff` blue. Apple Blue is reserved for the in-product TUI.

## Do's and Don'ts

### Do
- Render every text role in Berkeley Mono. The single-font decision is the entire identity.
- Keep `#fdfcfc` (`#fdfcfc`) as the only body background. Don't introduce gray section bands.
- Use ASCII bracket markers (`[+]`, `[-]`, `[x]`, `+`, `−`) as bullets, toggles, and section glyphs. They are the brand's only iconography.
- Anchor the dark `{component.hero-tui-mockup}` exactly once per landing page as the hero centerpiece. Never use the dark surface for body content.
- Reserve `#007aff` (Apple Blue) and the rest of the semantic ramp for in-TUI states; marketing chrome stays monochrome.
- Use `4px` (4px) on every interactive element and `0px` (0px) on every container.
- Stack content sections at `96px` (96px) rhythm with only 1px `rgba(15,0,0,0.12)` rules between them.

### Don't
- Don't introduce a sans-serif body font, a display face, or an italic style. Berkeley Mono carries everything.
- Don't add drop shadows, gradients, or atmospheric backgrounds. The system is flat-on-cream.
- Don't replace the ASCII bracket markers with SVG icons. The brackets are the icons.
- Don't use the semantic accent ramp (`#007aff`, `#ff9f0a`, `#ff3b30`, `#30d158`) on marketing CTAs. They belong to the in-product TUI.
- Don't pad cards with 24px+ internal padding. List rows sit at 8px vertical; FAQ rows at 12px.
- Don't render the OpenCode wordmark as a vector logo. It is always block-pixel ASCII.
- Don't fill the hero TUI mockup with photography or illustration. It is text-only and always shows a faux terminal command line.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| desktop-large | 1280px+ | Default — 960px content column, 5-up footer link grid |
| desktop | 1024px | Same layout; nav remains horizontal |
| tablet | 850px | Footer collapses to 2-up grid; `/enterprise` two-column form stacks |
| tablet-narrow | 768px | Primary nav becomes hamburger drawer; Download CTA stays visible |
| mobile | 640px | Single-column everything; hero display drops 38px → ~28px; section padding tightens |

### Touch Targets
All interactive elements meet WCAG AA at the ~36–40px height range. `{component.button-primary}` sits at ~36px with 20px horizontal padding. `{component.text-input}` and `{component.textarea}` sit at ~40px. `{component.button-tab}` rows in the install-method strip sit at ~32–36px depending on label length but extend to a full 44px tappable cell via inline padding. Footer links use `{typography.caption-md}` (14px) but receive ~28px line-height (caption-md is 2.0) plus 8px vertical padding for a comfortable ~44px tappable row.

### Collapsing Strategy
- **Primary nav:** desktop horizontal cluster → tablet-narrow hamburger drawer at 768px. The dark "Download" CTA stays visible at all widths.
- **Hero TUI mockup:** maintains its full-bleed dark surface at every breakpoint; the ASCII wordmark scales proportionally and the keybinding-hint row may wrap to two lines on narrow screens.
- **Install snippet + tab strip:** desktop fixed-width pill → mobile full-width pill with horizontal scroll on the tab strip if labels overflow.
- **Footer:** 5-up horizontal link grid → 2-up at tablet → 1-up at mobile (each link becomes a full-width row).
- **`/enterprise` two-column layout:** desktop 50/50 → tablet stacks to single-column with the form below the text block.
- **Section padding:** `96px` (96px) desktop → 64px tablet → 48px mobile.
- **Hero headline:** `{typography.display-xl}` (38px) at desktop, scaling to ~28px at mobile, line-height holding at 1.5.

### Image Behavior
There are no raster images in the system aside from the favicon and OG share image. Every visual element — wordmarks, charts, icons — is rendered as type or inline SVG and scales without aspect-ratio considerations.

## Iteration Guide

1. Focus on ONE component at a time. Pull its YAML entry and verify every property resolves.
2. Reference component names and tokens directly (`#201d1d`, `{component.hero-tui-mockup}`, `4px`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
4. Add new variants as separate component entries (`-active`, `-disabled`) — do not bury them inside prose.
5. Default body to `{typography.body-md}`; reach for `{typography.body-strong}` for emphasis; reserve `{typography.display-xl}` strictly for the page-top hero headline.
6. Keep `#201d1d` scarce — at most one full-bleed dark mockup per page. The dark surface is a narrative device, not a chrome treatment.
7. When introducing a new component, ask whether it can be expressed with the existing ASCII-bracket + 4px-radius + Berkeley-Mono vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.

## Known Gaps

- **Mobile screenshots not captured** — responsive behavior synthesizes OpenCode's mobile pattern (hamburger drawer, single-column, footer accordion) from desktop evidence and the breakpoint stack.
- **Hover states not documented** by system policy.
- **In-product TUI screenshots** beyond the marketing hero mockup are not in the captured set; the actual `opencode` terminal interface (full keybindings, panels, status bar) is not documented here.
- **`/go` page** not extracted — the marketing page for the Go SDK likely shares the same chrome but introduces code-sample blocks not documented above.
- **Form validation state styling** (success / error inline messages) not present in the captured surfaces.
