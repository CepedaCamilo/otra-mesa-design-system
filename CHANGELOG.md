# Changelog

All notable changes to the Otra Mesa Design System are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) · Versions: [Semantic Versioning](https://semver.org).

## [Unreleased]

_Nothing yet._

## [1.10.1] · 2026-10-20

### Changed
- **Each brand has its own catalogue.** Yaku's lives at [storybook.danies.trade/yaku](https://storybook.danies.trade/yaku/): the same
  components with Yaku's skin, copy, logo and dark mode, its colour and type foundations read from `marcas/yaku.css`, and the pieces
  in context (menu and dish). The *Two brands, one system* side-by-side page and the Brand switch are gone; each catalogue links to the other.
- The accessibility robot checks both catalogues, light and dark (0 violations). No component changed.

## [1.10.0] · 2026-10-20

### Added
- **A second brand: Yaku.** The same components (`Boton`, `Pestanas`, `Filtro`, `Campo`, `Segmentos`) now run
  [Yaku](https://yaku.danies.trade/?mesa=demo), table ordering for a Peruvian–Nikkei restaurant in Hamburg, with its own skin:
  `marcas/yaku.css` holds Yaku's tokens (light canvas and warm-black dark mode) and the component rules, switched on with
  `data-marca="yaku"` on `<html>` or on any container. Yaku's app was migrated pixel-identical (7 screens, light and dark).
- Shared rules travel with the components: Yaku's disabled buttons follow the system rule (grey, never faded; dashed secondary).
- Yaku gets an accessible error colour for fields (`--peligro`, 5.4:1 light, 7.9:1 dark).
- **Catalogue:** a *Brand* switch in the toolbar (Otra Mesa · Yaku) and a *Two brands, one system* page with both side by side.
  The accessibility robot now checks every story in both brands, light and dark (0 violations).
- Tests for the Yaku tokens: AA contrast for every text pair in both modes; the two dark blocks must stay identical.

### Changed
- `lucide-react` is now an optional peer dependency (only some components use icons).
- The catalogue uses `box-sizing: border-box`, like the apps.

## [1.9.0] · 2026-10-20

### Added
- **The public repository now holds the code**, not only the CSS: every React + TypeScript component, the Storybook catalogue
  (foundations and stories), the unit tests and a CI workflow (types, tests and catalogue build on every push).
  A minor version on purpose: nothing was removed or renamed, so nothing breaks for anyone using the CSS.
- **Unit tests** (Vitest + Testing Library): behaviour, keyboard, ARIA wiring and an axe check for every component;
  token values and contrast ratios; the light/dark theme logic. **Type tests**: wrong usages that must not compile.

### Changed
- All text, number, select and textarea fields in the three apps now use `Campo` (27 fields). Same position, size and colours;
  typed text uses the regular weight.

## [1.8.0] · 2026-10-20

### Added
- **`BotonGoogle`** — "Continue with Google" skin (the coloured G and the "or with your email" divider). The logic moved to one
  shared file (`@otra-mesa/comun/EntrarConGoogle`): **three identical copies became one**.
- **`Estrellas`** (read a score; the accessible label is required), **`ElegirEstrellas`** (give a score: a real radio group with
  arrow keys, Home/End and 44 px stars) and **`ResumenValoraciones`** ("How people rate it": big score + 5→1 bars).
- **`Segmentos`** — pick one of 2–4 options. Generic over text, number or yes/no values; `ancho` for full width.
- **`Pestanas`** — sticky category tabs. **`Filtro`** — on/off filter chip.
- **`Campo`** — a complete form field that links label, help and error to the control (`htmlFor`, `aria-describedby`, `aria-invalid`).
- `.solo-lector` helper for text that is heard but not seen.

### Changed
- Styles for ratings, tabs, filters and segments moved from the apps into `components.css`. Pixel-identical, checked before and
  after on Discover, the detail screen, Explore and both sign-in screens. `.barra` became `.valoradas-barra` (in the business portal
  `.barra` is the bottom tab bar).
- Sign-in inputs in the back office now use 16 px text (was 14 px), so iOS never zooms in.

## [1.7.0] · 2026-10-20

### Added
- **`TarjetaSorpresa` component** — the surprise-bag card of the customer app (Discover rows and "Featured surprises").
  It knows nothing about the API or languages: it receives ready-made text and the photo as a slot. The whole card opens
  the details; the favourites heart is a separate button on top. Customer app only, so always light.
- **`Etiqueta` component** — small pill label: `aviso` (peach, 5.5:1), `blanca` (on photos) and `agotada` (sold-out grey, 4.9:1).
- **Catalogue foundations**: Colour (light and dark, with calculated contrast), Charts "Caribe" (with a colour-blindness
  simulation), Typography and Space & shape — all read straight from `tokens.css`, so they never fall behind.

### Changed
- Card, label, rating and round-photo-button styles moved from the customer app into `components.css`. Pixel-identical
  (every card element compared before and after on Discover, the detail screen and Explore).
- Token descriptions now live in `descripciones.ts`, shared by the public README and the catalogue.

## [1.6.0] · 2026-10-16

### Added
- **`Boton` component** (React + TypeScript): variants `principal`, `secundario` and `icono`; sizes only where they exist
  (`pequeno` for the primary button, `grande` for the icon button); `ancho` for full width. An icon-only button **requires
  an `aria-label`**: the type checker refuses it otherwise, so it can never ship without an accessible name.
  `type="button"` by default, so a button never submits a form by accident (`type="submit"` when it should).
- `tema.ts` and `BotonTema.tsx` are now TypeScript (strict), checked with `npm run tipos`.

### Changed
- **One button style for all three apps.** Button styles were copied in each app with small differences; they now live once
  in `components.css`. Base: centred content, icon button 32 px and large 44 px (comfortable touch target).
- **Disabled buttons no longer fade out.** A semi-transparent green still looked active, especially in dark mode.
  Disabled primary: light grey with muted text. Disabled secondary: **dashed grey border** with muted text. Disabled icon: muted icon.
- The secondary button now has a gap between icon and label in every app.

## [1.5.0] · 2026-10-13

### Added
- **Dark mode "Noche verde"** for the business portal and the back office, chosen from two candidates.
  Every colour token has a dark value under `:root[data-tema="oscuro"]`: green-tinted near-black background `#0f1612`,
  cards `#17201b`, text `#e6ece8` (15.3:1), light-green primary buttons `#6fbf92` with dark text (7.6:1).
  Cards use a hairline instead of a shadow; map tiles are inverted and desaturated; map controls and credits restyled.
- **Theme switch**: `tema.js` follows the device setting until the person taps the sun/moon button, then remembers the choice
  (`localStorage`), and updates the browser bar colour. `BotonTema.jsx` is the shared sun/moon button.
- **White-letter logos** for dark mode (letters white, table terracotta), following the official logo 02.
- **Dark contrast table** in this README, calculated on every export like the light one.

### Notes
- The customer app never sets `data-tema`, so it always stays light.
- A test robot checks the switch, the memory, the logo and the contrast of every visible text in all eight back-office tabs, in both modes.

## [1.4.0] · 2026-10-13

### Added
- **Chart palette "Caribe"**: six categorical colours in a fixed order, `--grafico-1` (green) · `-2` (sea) · `-3` (terracotta) ·
  `-4` (turquoise) · `-5` (mango) · `-6` (bougainvillea). Chosen from three candidates derived from the brand colours.
  Validated with simulated protanopia and deuteranopia: worst neighbouring pair ΔE 18.3 light / 14.7 dark (target ≥ 8).
- **Magnitude scale** `--grafico-escala-100` … `-700`: one green hue from light to dark.
- **Status colours** `--estado-bien`, `--estado-aviso`, `--estado-serio`, `--estado-critico` (= `--peligro`), always paired with icon and label.
- **First dark-mode block** `:root[data-tema="oscuro"]` with the dark steps of the chart palette.
  The rest of the dark palette follows in a later release. The customer app stays light.

### Notes
- The brand green `--marca` is not used in charts: its chroma (0.083) is too low and reads as grey next to other colours.
- `--grafico-5` (mango) is 2.2:1 on white: always show a visible label or a table next to it.

## [1.3.0] · 2026-10-13

First release as a **standalone package** and public repository. Values are identical to the
"Design System 1.3" document of 8 October 2026: no colour or measurement changes.

### Changed
- Tokens and shared components moved out of the shared business package into their own package.
  The three apps now import `tokens.css` and `components.css` from it. Compiled CSS verified byte-identical before and after.

### Added (8 Oct 2026, document version 1.3)
- Scales as tokens: 9 type sizes (`--letra-mini` … `--letra-codigo`), 12 spacing steps (`--e-2` … `--e-48`),
  5 radii (`--radio-s` … `--radio-pildora`), 4 shadows (`--sombra`, `--sombra-borde`, `--sombra-flotante`, `--sombra-mapa`)
  and control heights (`--alto-control`, `--alto-control-s`). 710 loose values in the apps replaced by their token.
- `--peligro` `#c0392b`: one named red for errors and destructive actions.
- Shared components: Google sign-in button, "or" divider and rating stars, defined once for all three apps.

### Changed (8 Oct 2026)
- `--vegetariano` is now the brand green `#2f6b4a` (the previous `#2f6b2f` was almost indistinguishable from it).
- `--agotado` `#6b726e`: white on top reaches 4.9:1 (the previous `#a3a6a2` reached 2.5:1 and was hard to read).

### Removed (8 Oct 2026)
- A second, hand-written red (`#d14b3c`).

## Earlier history (reconstructed from git)

Before 13 October the tokens had no version number of their own.

- **7 Oct 2026 · Clean redesign.** White background, a single text colour `#1f2e26`, Figtree as the only typeface,
  green primary buttons `#2f6b4a`, terracotta for details only. New `--sombra`, `--superficie-2` `#f3f4f2`, `--lado` 16 px.
- **6 Oct 2026 · Cheerful palette, no dark mode.** Dark mode and the sun/moon toggle removed; terracotta `#bd6227` → `#d26e28`;
  peach labels `--acento-suave` `#f8dcc6` with text `--sobre-acento-suave` `#8a4416`.
- **5 Oct 2026 · First shared tokens.** `tokens.css` created with the logo colours (green `#2f6b4a` + terracotta).
