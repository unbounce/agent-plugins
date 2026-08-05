# Color & fidelity signals — extracted values are ground truth

`get_layout_hints` measures the rendered source page and returns its computed
colors, typography, text/image/link inventories, fonts, and derived layout
stats alongside the geometry. These are not suggestions — they are what the
page actually renders. Author from them; never re-derive a value from the
source CSS by inference, and never assume one.

## Identity values vs reference values

The signals split into two kinds, and the split decides how you may use them:

**Identity values — carry over verbatim, byte-for-byte:**

- text (`text_excerpt` / `text_length` size the content; the source body is
  still the verbatim copy source)
- image `src` and link `href` strings (extracted via attribute reads — they
  match the source markup exactly, so they string-diff)
- colors: `page_defaults.color` / `background_color`, per-section
  `background_color`, per-element `color` / `text_colors` / `background_color`
- font families (`loaded_fonts`, `typography.font_family`)

Per-element `color` and `typography` are measured on the element's **dominant
text node** (the one covering the most type area — font-size x characters), not
its positioned container — so they report the type that actually renders (e.g. a
100px Oswald heading), not the container's inherited page defaults. Where one
element paints more than one color, `text_colors` lists them all.

Four consequences of that measurement worth knowing:

- An element that paints no text of its own (an image, a plain box) carries
  **no** `color` and **no** `typography`. Absence means "nothing renders here",
  not "defaults" — do not author type against it.
- One source element can hold several type styles (a display headline plus a
  sub-headline in the same text block). The two most prominent are reported:
  `typography` and `secondary_typography`. **Size both** — together they are that
  block's internal hierarchy (typically a heading and its body copy), and a
  rewrite that applies only the first flattens it. Neither field names a role:
  ranking is by painted area (font-size x characters), so the body copy is
  commonly the one in `typography` and the heading the one in
  `secondary_typography`. Read the sizes, not the field names, and never average
  the two. If
  the block clearly holds more than two styles (`text_length` far exceeds what
  two styles explain), read the source body for the rest.
- `typography.line_height` is the leading that governs the dominant node, which
  the source may declare on a block ancestor rather than the node itself.
- A fully transparent fill is omitted rather than reported: a section with a
  `background_image` and no `background_color` paints the image, not a color.
  Never invent a fill for it.

**Reference values — anchors for responsive decisions, never desktop literals
to reproduce:**

- `typography.font_size` → the TOP end of a `clamp()` range, not a fixed size
- `content_extent.width` → the section inner wrapper's `max-width`, instead of
  a guessed 960/1000px
- `row_stats.columns` / `alignment` → the desktop grid/flex column count and
  justification
- `row_stats.gap_above` → the vertical rhythm (margins/padding scale)
- `images[].rendered_width/height` vs `natural_width/height` → explicit
  display dimensions

Nothing here changes HOW the rewrite goes responsive — the hint rows are still
the flex/grid skeleton per [layout.md](layout.md). The reference values replace
eyeballed numbers with measured ones.

## The page default is explicit — use it

`page_defaults.color` is the page's real base text color. Set it as your
page-level default, and add per-section overrides ONLY where a section's
extracted colors differ. The canonical failure this prevents: promoting the
hero's white text to the page default, leaving a light section's un-styled
paragraphs white-on-white — invisible, and uncatchable by any text diff.

## Background images: sizing model is content, not taste

Per-section `background_image` carries the computed `size`/`position`/
`repeat`/`attachment` AND the image's natural size vs the section's rendered
size. Reproduce the sizing model verbatim:

- computed size `auto` + small natural size ⇒ a decorative accent at natural
  size, positioned as the source positions it — do NOT "upgrade" it to `cover`
  (a small accent ballooned to cover swamps the section and sits behind text)
- `cover`/`100% auto` etc. ⇒ keep exactly
- keep `background-attachment` (e.g. `fixed`) as extracted

## Palette closure

`palette` lists every color the rendered page carries, with usage counts —
including colors painted by inner nodes, so an element that mixes (say) white
body text with an accent-colored span contributes both, and also reports them
on that element as `text_colors`.

Every color literal in your authored CSS must appear in the palette, or be
explicitly justified in the audit. A color you "remember" or "improve" is a
replication failure.

The palette describes the **rendered default state** only. These legitimately
fall outside it and need an audit line rather than a code change:

- `:hover`/`:focus`/`:active` colors — read them from the source CSS; a static
  render cannot show them
- colors inside images (the palette covers CSS-painted color, not pixels)
- colors on elements the render found hidden (see `hidden_elements`)

## Contrast arithmetic (mandatory self-check)

For EVERY section, state the authored (background color, text color) pair(s)
and compute the WCAG contrast ratio. This is plain math on your own declared
values — no rendering, no screenshot:

1. For each channel of each color, with c = channel/255:
   lin = c ≤ 0.04045 ? c/12.92 : ((c+0.055)/1.055)^2.4
2. Relative luminance L = 0.2126·R + 0.7152·G + 0.0722·B
3. Ratio = (L_lighter + 0.05) / (L_darker + 0.05)

Thresholds: flag anything below **4.5:1** for normal text, **3:1** for large
text (≥ 24px, or ≥ 18.66px bold). Where a background image sits behind text,
report "indeterminate: background image" — never silently pass it; check the
extracted image (natural size, positioning) and the fallback background color
instead.

Show the table in your self-check output. A flagged pair is a hard stop: fix
the color (against the extracted source values) before write-back. This
catches the wrong-assumed-default class deterministically; it does not catch a
CSS specificity mistake that changes the effective color — keep selectors flat
enough that declared = effective.

## Hidden elements

`hidden_elements` lists positioned elements present in the source but not
rendered (e.g. a form-confirmation overlay). Preserve them verbatim per
[replication.md](replication.md); never surface them as visible content, and
never drop them because they "weren't in the layout".
