# Google Analytics click tracking — details

The short version lives in SKILL.md: **on every page, include
`scripts/ga-click-tracking.js` as a `scripts` entry.** This file is the _why_ and
the guardrails — read it if you need to explain the behaviour, or you hit an edge
case.

## What GA already does, and the gap

When a page's domain has the Google Analytics integration switched on (Script
Manager), the published page already tracks:

- **Pageviews** — every visit, including the per-variant pageview.
- **Form submissions** — an MCP page's form is wrapped so GA's form-submit event
  fires normally.

Both work with no help from you. What GA does **not** track on an MCP page is
**link/button clicks.** Unbounce's built-in GA link tracker only attaches to the
elements the Unbounce builder produces (its button, linked-text, and linked-image
elements); an MCP page is hand-written `<a>` tags, so the tracker never attaches
and those clicks go uncounted. To a customer, GA shows pageviews and form
submits but a hole where every link click should be — and they have no way to
know it's missing. That's why the script is **default-on**, not something to ask
about.

## What the script does

`scripts/ga-click-tracking.js` wires a click listener onto every `<a>` and sends
a GA event that mirrors what a builder page sends, so the customer's
**Social / Phone / Email / Download / Outbound** breakdowns line up across page
types. Specifics worth knowing:

- **Safe when GA is off.** It feature-detects `gtag` (GA4) and `ga` (Universal
  Analytics) and no-ops when neither is present — the case for every domain
  without the integration. It loads dormant and never errors.
- **Survives edits.** Once it's a `scripts` entry, omitting `scripts` on later
  `update_variant_from_html` calls keeps it (`scripts_preserved`). It wires links
  at runtime (`querySelectorAll("a")`), so links you add in a later edit are
  covered automatically — no per-link upkeep.
- **Beacon transport.** Events send with beacon transport so the hit survives the
  click navigating the page away.
- **Meaningful label.** The event label is the link's own text, so clicks are
  distinguishable in GA.

## Guardrails

- **Never add the GA loader.** Do **not** add the `gtag.js` / `analytics.js`
  script tag or a `gtag('config', …)` call. GA is injected by Script Manager; a
  second loader creates a duplicate tracker and double-counts pageviews (and may
  point at the wrong property). This script only sends _events_ — it never loads
  GA.
- **Don't re-track pageviews or form submits.** The platform already fires both;
  adding your own double-counts.
- **Coexists with conversion goals.** A CTA that's also an Unbounce conversion
  goal has its href rewritten to a redirect wrapper. The two systems are
  independent and both fire on click (Unbounce goal tracking + this GA event); the
  script unwraps the redirect so the GA "action" is the clean destination.

## Maintenance

The classifier in `scripts/ga-click-tracking.js` deliberately mirrors Unbounce's
built-in Google Analytics link tracker so the event categories match builder
pages. If that built-in tracker's categorisation changes, spot-sync this file.
Drift is a soft failure — a click may land in the wrong category, but events
still fire; it never regresses to sending nothing.

The mirror is intentionally verbatim, small quirks included — e.g. the
redirect-unwrap regex uses the character class `[n,g]` (matching `n`, `g`, or a
literal comma) exactly as upstream does, rather than the tighter `[ng]`. Keep it
matching upstream rather than "correcting" it locally; the difference is inert
(Unbounce only emits `clkn`/`clkg` wrappers) and matching upstream keeps future
spot-syncs a clean comparison.
