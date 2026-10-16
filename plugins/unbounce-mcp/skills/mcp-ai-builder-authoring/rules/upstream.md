# Upstream source

The craft guide is taken from the AI Builder team's generation-agent prompt in
the `unbounce/ai-builder` repository. `rules/craft.md` is adapted, not copied:
it keeps the portable page-craft rules and leaves out the prompt's tool
signatures, patch protocol, selection and planning flows, policy text, and
anything that depends on tools this route does not have.

The design-system references are **not** the AI Builder team's own work. They
are derived from VoltAgent's
[`awesome-design-md`](https://github.com/VoltAgent/awesome-design-md) (MIT;
the `ai-builder` style-guide files say "derived from … (awesome-design-md)"),
and this skill takes them from the `ai-builder` copy. The licence notice ships
beside them as `design-systems/LICENSE`, so it travels into every plugin
artifact with the files.

## The design-system files are kept verbatim

The 56 `design-systems/*.md` files are byte-for-byte copies of the `ai-builder`
files, so a re-sync is a clean overwrite (`.prettierignore` keeps the formatter
off them). Their known defects are **not** fixed in the files. SKILL.md
corrects them instead — the menu and the "Reading a design-system file" rules:

- **Wrong theme labels in the upstream registry.** `design_systems.yaml` labels
  17 systems with a theme their own file contradicts. The SKILL.md menu uses
  the theme the file describes:
  - labelled dark, light canvas: `lovable`, `webflow`, `nike`, `kraken`,
    `posthog`, `clay`, `minimax`, `elevenlabs`, `cursor`, `supabase`,
    `opencode`, `mistral`;
  - labelled light, near-black canvas: `clickhouse`, `sanity`;
  - dark and light bands, menu says `hybrid`: `together` (registry: dark),
    `mongodb` (light), `revolut` (dark).

  The aesthetic text is also corrected where it names the wrong canvas
  (`webflow`, `clay`, `elevenlabs`, `cursor`, `mistral`, `together`).

- **Tool instructions.** 24 files say to run `npx @google/design.md lint`;
  16 point at YAML front matter that is not shipped; 7 (`together`, `uber`,
  `voltagent`, `warp`, `webflow`, `wise`, `xai`) reference
  `scripts/derive-examples-block.mjs` and `/preview-design`; 30 say to focus
  on one component at a time.
- **Typos:** "Spasex" (`spacex`), "Sentri" (`sentry`, 3 times), "Superhumon"
  (`superhuman`).
- **Undefined token references:** `{components.button-primary}` (`hashicorp`),
  `{colors.cream-soft}` (`mistral`), `{typography.body-md-medium}` (`mongodb`).
- **Doubled values:** 243 of the form "`96px` (96px)".
- **Rules this route overrides:** proprietary fonts (about 30 files lead with
  one), emoji markers (`posthog`), logo walls (`clickhouse`, `mintlify`, and
  others), and brand-identity do's (for example `kraken` "Use Kraken Purple
  for CTAs and links").

These are reported to the AI Builder team rather than patched here.

## Reference index

Permalinks pinned to the corpus commit at time of writing: `ai-builder`
`00e12d4` (2026-10-01).

**ai-builder** (`00e12d4d04aea2821aacdc32b0008d921a749545`)

- Navigation prefabs and the prefab-section rule → craft "Nav, footer, and ready-made sections" — [`services/ai-service/app/prompts/system_prompt.md:244-260`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/prompts/system_prompt.md#L244-L260)
- Default content is demo content → craft "Replace every demo default" — [`.../prompts/system_prompt.md:282-312`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/prompts/system_prompt.md#L282-L312)
- Craft and uniqueness → craft "Bespoke details" — [`.../prompts/system_prompt.md:313-339`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/prompts/system_prompt.md#L313-L339)
- Layout density and alignment → craft "Layout density and alignment" — [`.../prompts/system_prompt.md:340-363`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/prompts/system_prompt.md#L340-L363)
- Design-system base map vs identity overrides → SKILL.md "Design systems" — [`.../prompts/system_prompt.md:813-830`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/prompts/system_prompt.md#L813-L830)
- Fonts: only Google Fonts load → SKILL.md "Reading a design-system file" (the style guide cannot be edited on this route, so the family is suggested to the user, not set) — [`.../prompts/system_prompt.md:831-846`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/prompts/system_prompt.md#L831-L846)
- Icons → craft "Icons" — [`.../prompts/system_prompt.md:1019-1048`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/prompts/system_prompt.md#L1019-L1048)
- Photography sourcing (Unsplash only, plus "check the URL loads", since nothing on this route checks it) → craft "Photography" — [`.../prompts/system_prompt.md:1061-1075`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/prompts/system_prompt.md#L1061-L1075)
- `ub-image` renders 16:9 (taken once; the paragraph is repeated at 1104-1110) → craft "Photography" (an `html` insert becomes a built-in `image`) — [`.../prompts/system_prompt.md:1077-1083`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/prompts/system_prompt.md#L1077-L1083)
- Photography art direction (taken once; the block is repeated at 1112-1129) → craft "Photography" (the mock UI is built from `default` nodes, not an `html` insert) — [`.../prompts/system_prompt.md:1085-1102`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/prompts/system_prompt.md#L1085-L1102)
- Rules (copy, style variables, dark backgrounds, contrast; not the GrapesJS id rule) → craft "Copy" and "Colour, contrast, and dark backgrounds" — [`.../prompts/system_prompt.md:1136-1182`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/prompts/system_prompt.md#L1136-L1182)
- Design-system registry → SKILL.md menu (one line per entry: slug, name, theme, aesthetic, best for; themes corrected as listed above) — [`services/ai-service/app/config/design_systems.yaml`](https://github.com/unbounce/ai-builder/blob/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/config/design_systems.yaml)
- Design-system references → `design-systems/<slug>.md`, all 56, verbatim (licence: `design-systems/LICENSE`, from awesome-design-md's `LICENSE`, blob `5cea5d7`) — [`services/ai-service/app/config/design_systems/`](https://github.com/unbounce/ai-builder/tree/00e12d4d04aea2821aacdc32b0008d921a749545/services/ai-service/app/config/design_systems)

Not taken: the `*.styleguide.json` files beside each reference (this route
cannot apply a design system's style guide; pages use the client's style guide
from `get_ai_builder_catalog`, and SKILL.md "Applying a system on this route"
says how to map a reference onto it), and the style-guide vocabulary file
(`style_guide_vocabulary.json`, which the `ai-builder` repo generates from
`ai-builder-ui` with `scripts/extract_style_guide_vocabulary.py`; the same `get_ai_builder_catalog` result carries the variables a page
may use, read live, so there is no hand copy here to drift).

## Re-syncing

1. Pick the new `ai-builder` commit and diff the files above against
   `00e12d4d04aea2821aacdc32b0008d921a749545`
   (`git diff 00e12d4d04aea2821aacdc32b0008d921a749545 <new> -- services/ai-service/app/prompts/system_prompt.md services/ai-service/app/config/design_systems.yaml services/ai-service/app/config/design_systems/`).
2. Fold any change to the sections listed above into `rules/craft.md` in this
   route's terms, keeping the exclusions in the first paragraph.
3. Re-copy changed `design_systems/<slug>.md` files byte for byte, add or remove
   files to match the registry, and regenerate the SKILL.md menu from
   `design_systems.yaml` in registry order. Then re-apply the theme and
   aesthetic corrections listed above (check each against its file: drop one
   the registry has fixed, add one for a new mismatch), and re-check the
   "Reading a design-system file" rules against any new tool instructions,
   fonts, or brand-identity rules in the files.
4. Re-check that awesome-design-md's licence is unchanged and still MIT; if it
   changed, update `design-systems/LICENSE`.
5. Update the commit, date, line ranges, and permalinks in this file.
