# Verification — audit completion, hard stops, delivery

There is no screenshot step: verification is deterministic checks you run
against your own output, plus the human's eyes on the preview. The act of
looking up actual values and counting things in your output IS the check —
"looks right" without evidence is the failure mode this file prevents.

## Audit completion check (before writing back)

Walk every row of the Step-4 audit and name the specific element in your output
that satisfies it. An audit row without a matching output element means the
rewrite is incomplete — add the element, don't rationalize.

- **Text walk** — grep your output for every audited source string
  (whitespace-insensitive). Any miss without a recorded phase-2 substitution
  pair is a fail.
- **Count walk** — per hint row, output items must equal `rows[i].length`;
  form field count and order must match; `<form>` count must match.
- **Multi-role assets** — the same image used as both a background and an inset,
  or the same string in two CTAs, needs BOTH uses. Dedupe by
  (source + role + position), never by source alone.

## Closure checks against the extracted signals

`get_layout_hints` hands you machine-checkable inventories; close each set
(exact string match) and show the counts:

- **Image-src closure** — the set of `src` values in your output equals the
  hints' `images[].src` set plus any background-image URLs from the audit. A
  hand-transcribed URL that dropped a path segment fails this; skimming does
  not catch it.
- **Link-href closure** — your `href` set equals the hints' `links[].href` set.
- **Palette closure** — every color literal in your CSS appears in the hints'
  `palette` (or carries an audit justification). See
  [color.md](color.md).
- **Font closure** — every `font-family` you declare is in `loaded_fonts` (plus
  generic fallbacks).
- **Structure** — section count and order match the hints' sections; per-row
  output item counts match `row_stats[].columns`.
- **Contrast table** — the per-section (background, text color) WCAG ratios
  from [color.md](color.md), with any background-image cases marked
  indeterminate. A ratio below threshold is a hard stop.
- **Hidden elements** — everything in `hidden_elements` is present in your
  output and still hidden.

If the hints came back without these fields (an older render service), fall
back to deriving the inventories from the source body by grep — the closure
checks still run, just against hand-extracted sets.

## Hard stops — countable checks on your output

Run these literally (grep/count your own HTML/CSS). Any failure ⇒ fix before
delivery, no exceptions:

- `position:absolute` count > 5 ⇒ FAIL (legitimate uses: overlays and genuine
  overlaps only). You carried the positioning model through — restructure from
  the hint rows.
- `display: flex` + `display: grid` declarations = 0 ⇒ FAIL. Not a
  modernization, however it looks at canvas width.
- Any `cbc-`-prefixed (or `lp-pom-`) class/id in markup or selectors YOU
  authored ⇒ FAIL — you copied source CSS instead of writing fresh. Content
  preserved verbatim as a black box is exempt: the `cfm-*` form-confirmation
  overlay + its script, and user custom-HTML embeds / custom scripts (which may
  legitimately reference old-namespace ids — those now-dead selectors get
  FLAGGED in the delivery summary per
  [replication.md](replication.md), never rewritten).
- No per-section inner wrapper with `max-width: <design_width>` ⇒ FAIL; a
  page-level max-width wrapper ⇒ FAIL (both invisible at canvas-width preview —
  see [layout.md](layout.md)).
- `cross_section_overlays` non-empty AND no shared structure reserving each
  overlay's space across the sections it spans ⇒ FAIL.
- Any source `srcset`/`image-set`/`@font-face`/`<ub:dynamic>` dropped ⇒ FAIL.
- Form fields: any name missing, retyped, or reordered ⇒ FAIL.
- Any closure check above (image-src, href, palette, font, contrast) failing
  without a recorded audit justification ⇒ FAIL.
- Page default text color not taken from `page_defaults.color` (e.g. promoted
  from one band's styling) ⇒ FAIL — see [color.md](color.md).

## Write-back

`update_variant_from_html` is a true full replace: pass the COMPLETE artifact
set (html + every css + every js) on every call — an omitted stream is
deleted, not kept. After writing, fetch a fresh `get_variant` and use its
`preview_ref` for the handover.

## Empty or missing layout hints

If `get_layout_hints` returns an empty structure for a variant whose body
plainly carries a positioned (`cbc-*`) tree, do NOT fall back to deriving
structure from coordinates — stop and report it (a stale render service
returns empty hints indistinguishably from a genuinely empty page). An empty
result for a variant authored as responsive HTML is truthful: there is nothing
to modernize; tell the user.

## Delivery summary (what the user sees)

Brief, product-voice, evidence-backed:

- What you did: "Made variant A responsive — an editable copy of your page;
  the original is untouched." (Adjust to the actual flow.)
- Phase-2 changes applied, each with the user's quoted request.
- Genuine differences from the original — concrete and specific ("hero heading
  wraps to 3 lines at 1280px vs 2 in the original"), or "none".
- One structural line: "position:absolute uses: 2 (overlays); flex/grid
  declarations: 47; all N text strings verified."
- The preview link(s), and the reminder that edits now go through MCP (never
  the Unbounce builder), and that publishing/traffic is their call.

**Prohibited:** "pixel-faithful match" / "no meaningful differences" without
having run the checks above; paraphrased text in difference reports (quote
verbatim); skipping the counts because they "feel structural".
