# Failure catalog — real rejected attempts

Every entry below happened in a real run and was rejected by the user. Read
them before writing HTML; each names the rule that now catches it.

1. **Invented sticky header.** A rounded logo box that was a row sibling in the
   hero became `<header style="position:sticky">` with an invented "Home" nav
   link. It was never a header. _(No additions; preserve sibling order.)_

2. **Swapped hero columns.** Source read [logo + photo | green card]; the
   rewrite flipped them to match the familiar "headline-left, image-right"
   pattern. The hints' left-to-right order is the truth. _(Preserve sibling
   order.)_

3. **Aspect-ratio drift.** A 455×458 (near-square) photo container became
   `aspect-ratio: 4/5` because "portrait felt right". 4/5 is 455×569 — a
   category error, not a precision issue. _(Images: keep explicit dimensions.)_

4. **Button flipped from outline to solid.** Source: dark green, white border,
   inverts on hover. Rewrite: solid light-green pill, no border, no inversion —
   "felt more modern". A different control entirely. _(No creative changes;
   interaction states.)_

5. **Element name surfaced as content.** An image element internally named
   "Home" (the house photo) became a visible "Home" nav link. Builder-side
   labels are never user-facing copy. _(Element names are not content.)_

6. **Absolute-positioning translation.** Source `top/left` values copied onto
   new class names — pixel-faithful at desktop, collapsing everywhere else.
   "I migrated the values without migrating the layout model." _(Use the hint
   rows; hard stop on position:absolute count and zero flex/grid.)_

7. **Self-deceptive diff table.** The delivery said "pixel-faithful match — no
   meaningful differences" while the output was absolute-positioned with wrong
   fonts. Aggregate prose masked per-value drift; only counted, quoted evidence
   is allowed. _(Verification: prohibited phrases; hard stops.)_

8. **Page-level max-width shrank the backgrounds.** One `.page-wrap
{ max-width: 1280px }` around everything constrained every section's
   background with the content — heroes floating as "cards" in white space on
   wide screens. Per-section outer/inner is the pattern. _(Layout: full-bleed
   sections.)_

9. **Benefits hidden behind the form card** (column overlay missed). A hero
   form card hanging 500px into the benefits section; benefits laid out at full
   inner width sat behind it, invisible. The shared reserved-column grid is the
   fix. _(Cross-section overlays.)_

10. **Teal band + giant white gap** (centered overlay double-counted). A video
    hanging past its section got its section stretched to "contain" it AND the
    next section padded to "make room" — the overlay's span counted twice.
    Negative-margin overflow, no extra padding. _(Cross-section overlays.)_

11. **Invented body copy.** Asked for a headline A/B test, the rewrite came
    back with 3 fabricated feature cards, a bio rewritten with invented stats,
    a dropped pull-quote, and a hallucinated FAQ. Two enabling conditions:
    delegation to a subagent that lacked the verbatim source, and fusing the
    replication with the headline change in one pass. _(No subagent
    delegation; two-pass authoring; text walk.)_

12. **Card count 5 → 6.** "The layout looks more balanced with 6." The sixth
    card's copy was fabricated. Counts in source = counts in output, always.
    _(Count walk; no additions.)_

13. **Wrong ruleset applied.** The general landing-page authoring rules ("no
    nav, single goal, conversion best practices") were applied to a rewrite —
    the source's nav was stripped and "modern treatments" added. Those rules
    govern NEW pages; a rewrite replicates what exists. _(No additions;
    replication trumps landing-page best practices.)_

14. **Values reconstructed when the source was hard to read.** Blocked from
    reading the source cleanly, the agent binary-searched hex colors, eyeballed
    fonts from a screenshot, and fabricated image URLs. When you cannot read
    the source, STOP and report — declining is correct; inventing is not.
    _(Source of truth: the imported copy's body, nothing else.)_

15. **Hero's white text promoted to the page default.** The dark hero band's
    white text became the page-wide default color, so a light section's
    un-styled paragraphs rendered white-on-white — invisible. The source's
    actual default was black; no text diff can catch this class. Use
    `page_defaults.color` as the base and override only the sections whose
    extracted colors differ; the contrast table flags it deterministically.
    _(color.md: page default; contrast arithmetic.)_

16. **Decorative accent ballooned to `cover`.** A small box image the source
    positioned at natural size (no `background-size`) was rewritten as
    `background-size: cover` — it swamped the section and sat behind the body
    text. The extracted `background_image` carries the computed sizing model
    and the natural-vs-rendered size; reproduce it verbatim. _(color.md:
    background sizing model is content.)_
