# Layout rules — absolute positioning → responsive flex/grid

This is the actual modernization: replace the source's `position:absolute`
layout model with flexbox/grid such that desktop renders pixel-faithfully and
narrower viewports reflow. `get_layout_hints` gives you the structure; the
rules below give you the patterns.

## Use the hint rows — never translate coordinates

`get_layout_hints` returns each section's elements pre-clustered into `rows`
(top-to-bottom, ids left-to-right within a row). Those rows ARE your flex/grid
skeleton. Copying the source's `top`/`left` values onto new class names is the
canonical failure — visually fine at desktop width, collapsing at every other
viewport ("I migrated the values without migrating the layout model").

Worked example — hints for a hero section:

```json
{
  "section_id": "cbc-pom-block-12",
  "rows": [["cbc-pom-image-23"], ["cbc-pom-text-45", "cbc-pom-button-67"]]
}
```

WRONG rewrite (absolute translation — instant hard-stop fail):

```css
.hero-logo {
  position: absolute;
  top: 80px;
  left: 80px;
}
.hero-heading {
  position: absolute;
  top: 220px;
  left: 80px;
}
.hero-badge {
  position: absolute;
  top: 292px;
  left: 812px;
}
```

CORRECT rewrite (rows → flex; note the section/inner split below):

```css
.hero {
  background: #fff;
  width: 100%;
} /* full-bleed section */
.hero-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px;
}
.hero-row-1 {
  display: flex;
} /* row 1: logo */
.hero-logo {
  width: 169px;
  height: 48px;
}
.hero-row-2 {
  display: flex;
  gap: 32px;
  align-items: flex-end;
  margin-top: 92px;
}
.hero-heading {
  flex: 1;
  font-size: 92px;
  line-height: 90px;
}
.hero-badge {
  width: 365px;
  height: 68px;
}
@media (max-width: 768px) {
  .hero-row-2 {
    flex-direction: column;
  }
}
```

Numeric values (widths, gaps, padding, font sizes) come from the audit — the
hint geometry and the source CSS — not from taste. Use `clamp()` or media
queries for font sizes that would be too large on mobile. The hints hand you
these numbers measured: `content_extent.width` is the inner wrapper's
`max-width`, `row_stats` gives each row's column count, alignment, and
`gap_above` (the vertical rhythm), and `typography.font_size` anchors the top
of each `clamp()` range. They are reference values — anchors for the
responsive rules you author, never desktop literals to pin (see
[color.md](color.md) for the identity/reference split).

**Preserve sibling order and column assignment.** Rows read left-to-right as
the hints give them: logo-left + card-right stays [logo | card], even when the
familiar pattern is the reverse. Never promote an in-row element to a different
structural role (a box containing a logo at the top of the hero is a sibling,
not a page header). Row stacking order (top-to-bottom) matches the hints too.

**position:absolute is allowed only for genuine overlaps** — a color overlay on
a video, a badge pinned over an image corner. Budget: see the hard stops. If
you're fighting the layout with min-height tricks or magic-number margins, the
parent's flex/grid setup is wrong; fix it there.

## Full-bleed sections, constrained content (the max-width pattern)

The source pins content to a fixed canvas (`design_width`, typically
1280–1440px) while each section's background color/image runs edge-to-edge.
Reproduce that with a per-section pair:

```css
.section {
  width: 100%;
  background: <from source>;
} /* full-bleed */
.section-inner {
  max-width: 1440px; /* = design_width */
  margin: 0 auto;
  padding: <audit>;
}
```

EVERY section gets its own outer/inner pair. A single page-level
`max-width` wrapper is WRONG — it shrinks the section backgrounds with the
content, leaving white bars beside every hero and color band on wide screens.
No max-width at all is equally wrong — content sprawls on wide monitors. A
canvas-width preview shows neither failure, which is why this is a checklist
item, not a visual check: ask "at 1920px, what stops my content sprawling AND
what lets my backgrounds bleed?"

## Cross-section overlays — reserve the space they occupy

Every entry in `cross_section_overlays` is an element whose vertical span
crosses into later sections. Untreated, the receiving section's content sits
BEHIND the overlay and is hidden. Read the overlay's `page_left`/`width`
against the canvas and pick the pattern:

**Column overlay** (e.g. a form card pinned to one side of the hero, hanging
into the benefits section): the overlay claims a vertical strip on one side.
Lay out the source section AND every section in `spans_into_sections` on ONE
shared grid whose second column is reserved for the overlay:

```css
.hero-and-benefits {
  display: grid;
  grid-template-columns: 1fr 400px; /* overlay width */
  column-gap: 80px;
  max-width: 1440px;
  margin: 0 auto;
}
.hero-text {
  grid-column: 1;
}
.benefits-stack {
  grid-column: 1;
} /* NEVER the full inner width */
.form-card {
  grid-column: 2;
  grid-row: 1 / span 2;
  align-self: start;
  margin-top: <overlay top>;
  height: <overlay height>;
}
```

Section backgrounds stay per-section full-bleed — only the content grid spans.
On narrow viewports collapse the grid to one column (the card flows below);
never hide the overlay element.

**Centered / full-width overlay** (e.g. a video hanging from a teal section
into the white one below): it claims no column — it overflows downward. Keep
each section's height at its source boundary and let the element overflow via
negative margin:

```css
.video-frame {
  width: 940px;
  height: 529px;
  margin: 70px auto -265px;
} /* overflow = element bottom − section bottom */
```

The receiving section's padding-top comes from its OWN first element's
position — do NOT add padding "to make room": the overlay already lives there
via the negative margin. Double-counting produces the classic symptoms: a
colored band extending too far down plus a giant empty gap.

**Forbidden moves for any overlay:** absolute-positioning it inside its source
section alone (following sections won't respect its footprint); stretching the
source section to "contain" it (drags the background color past its boundary);
padding the receiving section to "skip past" it; hard-coded `padding-right`
dodges on following sections (break responsively).

## What the hints don't cover

Nested content inside a top-level element (text within a card, fields within a
form) doesn't appear in the rows — structure those from the source markup,
which nests them already. Hidden elements (e.g. the `cfm-*` confirmation
overlay) are invisible to measurement by design; preserve them verbatim per
[replication.md](replication.md).
