# Craft — what makes an AI Builder page good

A landing page exists to convert, and it has to look individually designed to
do that. The rules below are what separates a finished page from one assembled
from a kit. They apply to a new page and to every section you add to an
existing one.

## Replace every demo default

Catalog components carry demo content so they render something in the editor:
placeholder copy and brand names, demo nav and footer links, stock images,
placeholder logos, helper text. None of it belongs on a real page. A component
is not finished until every visible default in it — including deep inside a
compound component's children — is replaced with content about this page's
subject:

- **Text and names.** Headings, body copy, button labels, footer taglines,
  wordmarks. When the user names a brand or product, that name replaces the demo
  brand everywhere.
- **Links.** Nav, footer, and CTA links point at the sections you built (anchor
  links) and the user's real URLs, not the demo destinations.
- **Images and logos.** Subject-relevant photos (see "Photography") and text
  wordmarks instead of placeholder logo images.
- **Form fields.** Label, placeholder, and helper text on every control,
  dropdowns included — an unset dropdown keeps its demo options. A placeholder
  is copy too: name the choice instead of "Select an option…".

Read each component's full definition (`get_ai_builder_catalog` with
`component_types`) to find its editable fields, set them when you place the
component, and before you finish, sweep the document for surviving demo text,
demo links, and default imagery.

## Copy

- Write real, specific copy. No placeholder text, no lorem ipsum.
- When the user names the product or brand, the exact name appears in the hero
  — headline, subheadline, or CTA — not only in the nav.
- When the user names an industry or audience, reflect it concretely in the
  hero heading or CTA. "Grow faster" could describe any business; name the
  thing the page is actually about.

## Nav, footer, and ready-made sections

- **Compose sections yourself** from the structural and content components,
  varying the layout from section to section and page to page.
- **Nav and footer components are fine, but never as shipped.** Each time you
  place one: replace the logo slot with a text wordmark unless the user gave you
  a real logo URL (the default logo renders as a grey box); set its links to the
  sections you actually built; put the page's primary CTA in its action slot;
  and restyle the bar to sit in this page's world rather than keeping the stock
  white bar.
- **Ready-made section components** (fixed-layout heroes, pricing, FAQ,
  galleries, carousels, logo bars, testimonial sections, CTA banners) go in only
  when the user names that pattern. "Build me a landing page" is not a request
  for one. Editing one that is already on the page is always fine.
- **A wall or strip of customer logos**, ready-made or built by hand, goes in
  only when the user asks for one and supplies the logos.

## Bespoke details

Add two to four small visual details per page, chosen for its subject and
tone, so it reads as designed rather than templated:

- a wave, curve, or angled divider between two sections instead of a flat edge;
- hero atmosphere — a layered gradient, duotone, soft glow, or subtle pattern
  behind the headline;
- a typographic accent — a gradient or highlighted key word in the headline;
- a decorative shape — a blurred colour orb, dotted grid, or corner accent.

Keep them to accents: structure, copy, forms, buttons, and navigation stay
catalog components. Colour them with the style guide's `var(--…)` variables so
they follow the brand, and don't repeat the same flourish on every page.

How to build them on this route. The validator accepts catalog types and the
editor's built-in types only, so a detail is a plain `default` node — no `type`,
a `tagName` such as `div` or `span`, and an `attributes.id` — styled by its own
`#id` rule in CSS alone:

- **Divider:** an empty `div` between two sections with a `clip-path` polygon
  (angled) or an `ellipse()` (curve), filled with the next section's
  background.
- **Glow or orb:** an absolutely positioned `div` inside a `position: relative`
  section, with a `radial-gradient` background, a large `border-radius`, and
  `filter: blur(…)`; keep it behind the content with `z-index` and
  `pointer-events: none`.
- **Dotted grid or pattern:** a `background-image` of a small repeating
  `radial-gradient` with a `background-size`, on the section or on an
  overlay `div`.
- **Typographic accent:** wrap the key word in a `span` styled with a background
  highlight or `background-clip: text`.
- **Mock product UI:** see "Photography" below.

The validator also accepts `svg`, but nothing checks that its attributes and
children render, so prefer CSS. Do not use `custom-html-body` or
`custom-html-after-body`: they are the page's custom-code slots, not
decoration. If a detail cannot be built this way, leave it out.

## Layout density and alignment

Wide empty bands inside and between sections are the most common "unfinished"
tell.

- Section padding and large margins on a section's first or last child add up.
  A padded section does not also need 100px outer margins or a decorative
  minimum height.
- Scale padding to content: a heading and a button do not need half a viewport.
- Balance two-column layouts. When one column runs much taller, grow the short
  one (a bigger image, a list, a quote) or change the layout; a half-empty
  column reads as broken.
- In a row of cards, make each card a flex column and push its last element
  (button, avatar row, tag) to the bottom with `margin-top: auto`, and keep the
  copy lengths similar so the CTAs line up.
- An eyebrow or kicker label takes its heading's alignment.
- Every section ships with its content. A "What's happening" heading followed
  by nothing is worse than no section; a planned grid arrives with its items.

## Photography

Real, subject-relevant imagery is one of the biggest contributors to a page
feeling professional.

- Prefer the client's own images: `list_assets` returns the client's asset
  library with a hosted `cdn_url` per image.
- Otherwise use Unsplash photography — a direct `images.unsplash.com` image URL
  that fits the subject — for every image the client's assets do not cover:
  hero images, product shots, testimonial avatars, and backgrounds. Nothing on
  this route checks that an image URL loads, so check it yourself — fetch it
  and confirm it returns an image — and if you cannot, say so to the user.
- Every image gets a descriptive `alt`. Never keep a component's default image,
  leave a slot empty, or fall back to a grey box or placeholder service. A
  component with an image slot is not finished until its image is set — through
  the root's `data-src` when the component takes data-* traits (as `ub-image`
  does), otherwise through `src`.
- If the catalog has `ub-image`: it always renders at a 16:9 aspect ratio. Its
  height follows its width, and a fixed height on its wrapper is not filled —
  the photo renders 16:9 inside the box and the rest stays empty. Never size an
  `ub-image` wrapper taller than 9/16 of its width, and anchor overlays (badges,
  captions) to the image itself, not to a taller wrapper. For portrait, square,
  or full-height imagery use a built-in `image` with an explicit `height` or
  `aspect-ratio` and `object-fit: cover` instead.

Art direction — a wrong photo hurts trust more than no photo:

- No visible third-party brands, logos, or branded packaging. A competitor's
  bottle as the "product shot" wrecks the page's credibility. Prefer unbranded
  subjects: hands, textures, environments, unlabeled products.
- The photo's subject matches the claim beside it. A plumber's service-area
  section gets the city or a plumber at work, not a building site.
- For software, don't use a stock laptop photo as the product shot — its screen
  always shows somebody else's app. Build a small mock UI instead: a card of
  `default` `div`s with a few `text` labels — chart bars as fixed-width `div`s
  of varying height, rows as flex rows, numbers as text — styled in the page's
  palette. Keep it to a few dozen nodes; if it would take more, use the
  client's own product image or leave the shot out.
- Size hero imagery to fill its band; a small photo floating in a tall hero
  column leaves a void. Use a full-bleed column, a larger image, or a shorter
  band.
- Keep photo corner radii modest — a radius near half the photo's height turns
  it into an oval.

## Icons

- Use Iconify for every icon, as an image from its CDN:
  `https://api.iconify.design/{prefix}/{name}.svg?color=%23RRGGBB` (`%23` is
  `#`). Match the colour to the page's accent and size it with width and height.
- Good default sets: `lucide` (clean strokes), `heroicons`, `mdi` (very large),
  `ph` (several weights). `simple-icons` carries brand logos — use them only as
  decorative integration marks, never to present the page as that company's.
- No emoji anywhere: not as logos, star ratings, list markers, or on buttons.
  Wordmarks are styled text; star ratings are a rating component or `★` glyphs
  with an explicit colour; phone, calendar, and location markers are icons. One
  icon system per page.

## Colour, contrast, and dark backgrounds

Nothing on this route checks contrast, so you have to.

- Target at least 4.5:1 between text and its background.
- Follow the styling rule in SKILL.md "Styling": the style guide's `var(--…)`
  variables for colour, text, borders, surfaces, shadows, radii, fonts, type
  sizes, and spacing; literal values only for a section or decorative
  background that harmonizes with the palette, and for a layout dimension the
  style guide has no variable for.
- Accent and brand colours (saturated oranges, golds, limes) are for fills,
  borders, and highlights — not running text, eyebrows, or labels on a light
  background, where they fall below a readable contrast. Colour small text with
  the muted-text colour or a darkened shade of the accent.
- Component defaults assume a light background. When you give a section or card
  a dark or strongly tinted fill, restyle every text element, link, and button
  inside it to a readable light colour at the same time — including small ones
  like a row of rating stars. Text you leave unstyled inherits the page's dark
  default.
- Cards keep their light surface fill whatever the section behind them. Inside a
  dark section, give each card an explicit background, or light text turns
  white-on-white.
- Footer components pair their text and link colours with their default
  background. On a light page, don't repaint a footer's background — its links
  become unreadable. On a dark page, where the dark footer can render light,
  give the footer an explicit dark background and light text on its children.
