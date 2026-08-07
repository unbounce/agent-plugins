---
name: mcp-modernize
description: Rewrite an imported (absolutely-positioned) Unbounce page variant as clean responsive HTML through Unbounce MCP. Use when the user asks to modernize a page, make a page responsive, get rid of absolute positioning, make a clean-HTML version of an existing Unbounce page, or edit a page that was built in the Unbounce builder — phrasings like "modernize this page", "make my page responsive", "convert my old page", "clean HTML version". Replication-faithful — this is a layout rewrite, never a redesign.
requires:
  mcpServers:
    - unbounce-mcp
---

# Modernizing an Unbounce page (responsive rewrite)

Turn a page built in the Unbounce builder into clean, responsive flexbox/grid
HTML — **pixel-faithful to the original on desktop, reflowing sensibly on
mobile**. This is a REPLICATION task with zero creative latitude: same copy,
same images, same fonts, same colors, same element counts. The only thing that
changes is the layout model (absolute positioning → flex/grid).

The pipeline is two deliberate stages:

1. **Import** — `create_variant_from_existing_variant` clones the builder-built
   source into an MCP-managed variant that renders identically (deterministic;
   every string, image URL, font, and form field lands in the copy verbatim).
2. **Rewrite** (this skill) — read that copy, restructure its layout to
   responsive flex/grid, and write it back **in place** with
   `update_variant_from_html`.

Extraction fidelity is stage 1's job and it is deterministic — never work from
the original builder page directly, and never re-derive content from screenshots
or memory. Your job is only the layout transformation.

## Language with the user

Never say "modernize", "modernization", "replica", or platform-internal terms
to the user. Their page is fine; say "make your page responsive" and "an
editable copy of your page". The result cannot be edited in the Unbounce
builder — all future edits go through MCP tools; say so at handover, and never
suggest the builder.

## Workflow

**Step 1 — Resolve the target.** Identify the page (`list_client_pages`) and
variant (`list_page_variants`). If the target variant is builder-built (not
MCP-managed), tell the user in one line what is about to happen — e.g. _"I'll
create an editable copy of your page, then make that copy responsive — your
original stays untouched"_ — then run `create_variant_from_existing_variant`
(no `target_page` ⇒ new page). No further permission ceremony is needed; the
copy is additive and safe. Relay any conversion warnings honestly. A
fixed-width "autoscale" source converts fine — the conversion report notes that
runtime viewport scaling isn't preserved; that is expected and harmless here,
because you rewrite the page responsive from scratch (Step 4), discarding the
scaling entirely. If the target is already an MCP-managed imported copy, skip
straight to Step 2.

**Step 2 — Read the copy.** `get_variant` on the imported variant. Download the
`html_ref` / `css_refs` / `js_refs` sources (via `download`, or
`download_inband` if you cannot run shell commands). This body is the **sole
source of truth** for every value: copy strings, image URLs (with their
`srcset`), `@font-face` blocks, colors, dimensions, form fields, `<ub:dynamic>`
tags. Never guess a value, never take one from a screenshot, never reconstruct
from memory. If the copy came from an autoscale source, its CSS wraps lengths in
`calc(<px> * var(--scale, 1))` and it may carry a viewport scale script —
ignore both: read the plain px value (the `* var(--scale)` is the fixed-width
scaling you are removing) and never copy the scale script into the rewrite. Your
responsive layout comes from the Step 3 rows, not these fixed dimensions.

**Step 3 — Get the layout skeleton and fidelity signals.** `get_layout_hints`
on the same variant. It returns, per section: `rows` (element ids clustered
into visual rows, left-to-right), per-element geometry,
`cross_section_overlays` (elements whose vertical span crosses into later
sections), and `design_width` (the fixed canvas width). **The rows are your
flex/grid structure.** Do not derive structure from the absolute coordinates
yourself, and never translate `top`/`left` values through into the rewrite.
It also returns measured fidelity signals — `page_defaults` (the page's real
base text color and typography), per-section backgrounds, per-element
colors/typography/text/image/link inventories, `palette`, `loaded_fonts`,
`row_stats`, `content_extent`, `hidden_elements`. Those are ground truth:
author from them per [rules/color.md](rules/color.md), never from assumption.
If hints come back empty for a variant that plainly has a positioned tree,
stop and report it (see [rules/verification.md](rules/verification.md)).

**Step 4 — Audit, in writing, before any HTML.** Post a compact audit into the
conversation (it must survive context compaction): per section — the row
structure from hints, the element **counts** per row, every text string
(verbatim), every image URL + srcset, fonts, colors, form fields
(name/type/order/options/submit label), interaction states (`:hover`/`:focus`),
and every cross-section overlay with its pattern (column vs centered). Every
value in your output must trace back to an audit row.

**Step 5 — Write the responsive HTML.** Follow
[rules/layout.md](rules/layout.md) (section/inner max-width pattern, flex/grid
from hint rows, overlay handling) and
[rules/replication.md](rules/replication.md) (verbatim preservation). If the
user also asked for a change ("modernize it and swap the headline"), use
two-pass authoring: pass 1 is a content-identical rewrite, verified; only then
apply their change (see TWO-PASS in rules/replication.md).

**Step 6 — Self-check before writing back.** Run the checklist in
[rules/verification.md](rules/verification.md) — text walk, count checks, the
closure checks against the extracted signals (image-src, link-href, palette,
font sets; the WCAG contrast table from [rules/color.md](rules/color.md)), and
the hard stops (`position:absolute` budget, zero authored `cbc-*` references,
flex/grid present, per-section max-width, overlay columns reserved). Fix
failures before delivering; never rationalize past a hard stop.

**Step 7 — Write back in place and hand over.** `update_variant_from_html` on
the same variant. It is a TRUE FULL REPLACE: pass the complete artifact set
(html + all css + all js) every time — anything omitted is dropped. The change
is staged, never published by you. Hand the user: what you did (one line), the
`preview_ref` from a fresh `get_variant` (plus the builder preview link from
`list_page_variants` for the original, so they can compare), the evidence
summary from the self-check, and any genuine differences — concrete and
specific, or "none". Publishing, traffic, and goals are the user's call.

## Hard invariants (the load-bearing rules)

- **No creative changes. No additions.** Same typo, same order, same counts.
  Nothing added that has no source element — no nav, no sticky header, no hover
  effects the source lacks. Conversion-optimization defaults from
  `mcp-page-authoring` do NOT apply to a rewrite — replication trumps
  landing-page best practices.
- **Every source text string appears verbatim** in the rewrite (whitespace-
  insensitive). Element names, ids, and image filenames are NOT content.
- **Reuse every asset by its exact URL**, keeping `srcset`/`image-set` and
  `background-position`/`size`/`repeat` verbatim. Copy `@font-face` blocks and
  `<ub:dynamic>` tags through unchanged.
- **Forms:** plain `<form>` in your output; preserve field names, types, order,
  options, and the submit label exactly (the server re-wires submission on
  write). Preserve the hidden form-confirmation overlay (`cfm-*` markup) and
  its trigger script verbatim if the copy has one.
- **Preserve user customizations verbatim**: custom-HTML embeds, tracking
  scripts, hand-applied CSS classes. Flag (don't rewrite) any script selectors
  that target old ids.
- **No subagent delegation.** The source must stay in the same context as the
  build — a subagent without the verbatim source invents copy.
- **Stay in your lane at delivery**: staged in-place update, no publish, no
  traffic, no goal changes.

Long-form rules, worked examples, and the catalog of real past failures:
[rules/replication.md](rules/replication.md) ·
[rules/layout.md](rules/layout.md) ·
[rules/color.md](rules/color.md) ·
[rules/verification.md](rules/verification.md) ·
[rules/failure-catalog.md](rules/failure-catalog.md)
