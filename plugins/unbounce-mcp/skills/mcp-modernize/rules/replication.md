# Replication rules — what must survive the rewrite unchanged

The imported copy arrives with **baked-in correctness**: the import step already
put every string, image URL (with correct `srcset`), `@font-face` block,
validated form field, and `<ub:dynamic>` tag into the body verbatim. Your
rewrite changes the LAYOUT MODEL — everything else copies through.

## No creative changes — replication only

You have ZERO creative latitude. Do not change copy, "tighten" wording, swap
CTA verbs ("Get Started" → "Start Now" is forbidden), adjust color contrast,
change image crops, or reorder form fields. If the source has a typo, the
rewrite has the same typo. Creative changes are a separate task, done after the
rewrite is approved (or as an explicit phase-2 request — see TWO-PASS below).

## No additions — nothing without a source element

Before adding any element, container, or behavior, locate the specific source
markup that creates it. If you cannot, do not add it. Specifically forbidden
when the source lacks them: sticky/fixed navigation bars (a logo box at the top
of the hero is a row sibling, NOT a header), nav links, breadcrumbs,
back-to-top buttons, footers, hover effects/transitions/transforms, "modern app
shell" wrappers, accessibility additions that change layout. Reasonable `alt`
text on images is the one allowed addition. The `mcp-page-authoring`
conversion-first defaults (single goal, no nav, etc.) apply to NEW pages — a
rewrite replicates what exists; if the source has a nav, the rewrite has the
same nav.

## Text — every string verbatim

Every visible text string in the source body must appear in your rewrite,
verbatim (whitespace-insensitive substring match; rewrites and paraphrases are
not). Don't compress copy "to fit", don't translate unasked, don't drop strings
that look like placeholders, don't invent strings to "balance" a section —
5 cards in the source means 5 cards in the rewrite, never 6 because 3×2 looks
neater.

**Element names are not content.** Ids, CSS class names, and image filenames
(`happy-businesswoman-commuting.png`) are author-side metadata — never surface
them as headings, nav links, alt text, or any visible string.

## Images — reuse, never substitute

Copy every image URL exactly as the source has it, including `srcset` (retina
variants) and, for CSS backgrounds, `background-image` with its
`background-position` / `background-size` / `background-repeat` verbatim —
defaulting a position crops the focal subject out of hero photos. Keep explicit
pixel dimensions; never replace them with templated `aspect-ratio` values
(455×458 is not `4/5`). Account for both foreground `<img>`s and CSS
backgrounds — a missing background is a silent failure that leaves blank
sections.

## Fonts

Copy every `@font-face` block from the source CSS verbatim — they define
custom-uploaded fonts that share names with different Google Fonts; dropping
one silently swaps the typeface. Keep font-family/size/weight per element as
the source computes them, and do not add fallback stacks the source doesn't
have.

## Interaction states

For every `<a>`, `<button>`, `<input>`, `<textarea>`, `<select>`: replicate the
source's `:hover`, `:focus`, `:active`, `::placeholder` rules exactly. A
dark button with a white border that inverts on hover is a different control
from a solid button that darkens — even if the resting states match. If the
source has no `:hover` rule, the rewrite has none.

## Forms

Write a plain `<form>`; `update_variant_from_html` wires submission (identity
fields, honeypot, confirmation) on write — never hand-build that wiring.
Preserve exactly: every field name (renaming silently breaks the lead-data
pipeline), type, required-ness, order, every select's options in order, and the
submit button label verbatim. If the copy carries a hidden form-confirmation
overlay (markup prefixed `cfm-` plus a script that reveals it via
`window.ub.hooks.afterFormSubmit.push(...)`), preserve both verbatim — the
`cfm-*` markup and its script are an exception to the "no old-namespace classes
in output" hard stop. (If you must touch such a hook: always `.push()`, never
assign — assignment breaks the platform's hook runner.)

## User customizations — black boxes

Custom HTML embeds (Calendly, chat widgets, tracking pixels), custom scripts,
and hand-applied CSS classes are code the user wrote. Copy them through
verbatim, in equivalent positions. Don't minify, "improve", or inline them
differently. After the rewrite, scan custom scripts for selectors targeting old
auto-generated ids and LIST those in your delivery summary for the user — do
not rewrite their JS yourself.

## Video backgrounds / embeds

Same provider, same video id, same embed query parameters (mute, autoplay,
loop, controls, …) — each is a design decision. Replicate any color overlay's
background-color and opacity verbatim; if none exists, don't add one.

## Drift correction — the one sanctioned normalization

Builder pages are hand-dragged, so visually-identical siblings often differ by
a few pixels of noise. Normalize ONLY when all hold: same parent and role;
differences small (≤2% and ≤8px); values jittery (198, 201, 199) rather than
patterned (200, 220, 240 = intentional). Take the median and record what you
changed in the audit ("normalized card widths [298, 301, 300] → 300"). Values
already on a 4/8/12/16/24/32/48/64 scale are intentional — leave them. When in
doubt, don't normalize.

## TWO-PASS authoring — when the user also asked for a change

"Make it responsive AND swap the headline / translate it / change the CTA
color" must be TWO strict passes, never one fused pass:

- **Pass 1** — rewrite with content byte-identical to the source. Run the full
  verification (text walk, counts). Fix failures first.
- **Pass 2** — apply exactly what the user asked, nothing more, tracking each
  change as a (source string → replacement) pair you can quote back. Re-run the
  text walk with those pairs excluded.

Why: once the phase-2 goal is the build target it contaminates the replication
— a "Sell Smarter" headline swap has, in real runs, mutated body copy, card
titles, and section purposes the user never asked to change. The pass-1
verified state is the forcing function. If the phase-2 request is ambiguous
("make it feel more summery"), ask what specifically to change before
extrapolating.
