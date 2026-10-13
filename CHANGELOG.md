# Changelog

All notable changes to the Otra Mesa Design System are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) · Versions: [Semantic Versioning](https://semver.org).

## [Unreleased]

_Nothing yet._

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
