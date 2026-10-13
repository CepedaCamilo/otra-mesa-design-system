# Otra Mesa Design System

The design system behind [Otra Mesa](https://otramesa.danies.trade), a food-rescue platform for restaurants
in Barranquilla, Colombia: a customer app, a business portal and a back office, all built on these tokens.

**Version 1.4.0** · [Changelog](CHANGELOG.md) · [Full documentation (PDF)](https://camilocepedadanies.com/pdf/otra-mesa-design-system.pdf)

Designed and built by [Camilo Cepeda Danies](https://camilocepedadanies.com), product and brand designer in Hamburg.

## Principles

- **Clean and white.** White background, one text colour (near-black with a hint of green).
- **Green does, terracotta decorates.** The logo green is for primary actions and active states.
  The terracotta only appears in small details: stars, underlines, small icons.
- **Every value is a token.** 9 type sizes (there used to be 20), 12 spacing steps, 5 radii (there used to be 12),
  4 shadows (there used to be 14). 710 loose values in the apps were replaced by their token.
- **Readable first.** Every text pair passes WCAG AA. The contrast table below is calculated from the real values
  every time this repository is generated.
- **One source of truth.** The three apps import the same file, so a change here changes all of them.

## Usage

```css
@import 'tokens.css';      /* custom properties on :root */
@import 'components.css';  /* shared pieces: Google button, "or" divider, stars */

.button {
  min-height: var(--alto-control);
  padding: 0 var(--e-16);
  border-radius: var(--radio-pildora);
  background: var(--marca);
  color: var(--sobre-invertido);
  font: var(--display-peso) var(--letra-grande) / 1.2 var(--display);
}
```

Token names are in **Spanish**, the language the product is built in. The tables below give the English meaning of each one.

## Tokens

### Color

| Token | Meaning | Value | Use |
|---|---|---|---|
| `--fondo` | background | ![](https://placehold.co/14x14/ffffff/ffffff.png) `#ffffff` | Page background. |
| `--superficie` | surface | ![](https://placehold.co/14x14/ffffff/ffffff.png) `#ffffff` | Cards and panels, separated by a soft shadow. |
| `--superficie-2` | surface 2 | ![](https://placehold.co/14x14/f3f4f2/f3f4f2.png) `#f3f4f2` | Very light grey with a hint of green: chips, photo placeholders, rating bars. |
| `--linea` | line | ![](https://placehold.co/14x14/e6e8e5/e6e8e5.png) `#e6e8e5` | Hairlines and borders. |
| `--marca` | brand | ![](https://placehold.co/14x14/2f6b4a/2f6b4a.png) `#2f6b4a` | Logo green: primary buttons and active states. |
| `--titulo` | heading | ![](https://placehold.co/14x14/1f2e26/1f2e26.png) `#1f2e26` | Headings. Same as body text: one text colour. |
| `--texto` | text | ![](https://placehold.co/14x14/1f2e26/1f2e26.png) `#1f2e26` | Body text. |
| `--suave` | muted | ![](https://placehold.co/14x14/5b635f/5b635f.png) `#5b635f` | Secondary text. |
| `--invertido` | inverted | ![](https://placehold.co/14x14/2f6b4a/2f6b4a.png) `#2f6b4a` | Filled areas in brand green. |
| `--sobre-invertido` | on inverted | ![](https://placehold.co/14x14/ffffff/ffffff.png) `#ffffff` | Text on brand green, valid at any size. |
| `--acento` | accent | ![](https://placehold.co/14x14/d26e28/d26e28.png) `#d26e28` | Cheerful terracotta, for small details only: stars, underlines, small icons. |
| `--sobre-acento` | on accent | ![](https://placehold.co/14x14/ffffff/ffffff.png) `#ffffff` | Icons on terracotta (round photo buttons). Enough for icons and large text only. |
| `--acento-suave` | accent soft | ![](https://placehold.co/14x14/f8dcc6/f8dcc6.png) `#f8dcc6` | Peach for small labels ("3 left"). |
| `--sobre-acento-suave` | on accent soft | ![](https://placehold.co/14x14/8a4416/8a4416.png) `#8a4416` | Text on peach. |
| `--acento-texto` | accent text | ![](https://placehold.co/14x14/a4521b/a4521b.png) `#a4521b` | Terracotta for small text. |
| `--vegetariano` | vegetarian | ![](https://placehold.co/14x14/2f6b4a/2f6b4a.png) `#2f6b4a` | Vegetarian marker. Same as brand green. |
| `--agotado` | sold out | ![](https://placehold.co/14x14/6b726e/6b726e.png) `#6b726e` | Sold-out grey, with white text on top. |
| `--peligro` | danger | ![](https://placehold.co/14x14/c0392b/c0392b.png) `#c0392b` | Errors and destructive actions. |
| `--velo-foto` | photo veil | `linear-gradient(to top, rgb(0 0 0 / 0.62), rgb(0 0 0 / 0) 70%)` | Gradient that makes white text readable on photos. |
| `--filtro-planos` | map filter | `saturate(0.75) brightness(1.03)` | Softens the colours of the map tiles. |

### Type

| Token | Meaning | Value | Use |
|---|---|---|---|
| `--display` | display family | `'Figtree Variable', system-ui, sans-serif` | Figtree, self-hosted. One family for everything. |
| `--display-peso` | display weight | `750` | Weight of headings. |
| `--display-ajustes` | display settings | `normal` | Font variation settings for headings. |
| `--texto-fuente` | text family | `'Figtree Variable', system-ui, sans-serif` | Body text family. |
| `--letra-mini` | size mini | `12px` | Pills, tab bar, eyebrows. |
| `--letra-detalle` | size detail | `13px` | Details, chips, filters. |
| `--letra-texto` | size text | `14px` | Field labels, notices, tables. |
| `--letra-base` | size base | `16px` | Body text and inputs (16 px stops iOS from zooming). |
| `--letra-grande` | size large | `17px` | Buttons, detail headings. |
| `--letra-titulo` | size title | `20px` | Section and sheet titles. |
| `--letra-cifra` | size figure | `26px` | Figures, ratings, back-office titles. |
| `--letra-pantalla` | size screen | `34px` | Screen titles. |
| `--letra-codigo` | size code | `46px` | Booking code. |

### Space

| Token | Meaning | Value | Use |
|---|---|---|---|
| `--e-2` | space 2 | `2px` |  |
| `--e-4` | space 4 | `4px` |  |
| `--e-6` | space 6 | `6px` |  |
| `--e-8` | space 8 | `8px` |  |
| `--e-10` | space 10 | `10px` |  |
| `--e-12` | space 12 | `12px` |  |
| `--e-16` | space 16 | `16px` |  |
| `--e-20` | space 20 | `20px` |  |
| `--e-24` | space 24 | `24px` |  |
| `--e-32` | space 32 | `32px` |  |
| `--e-40` | space 40 | `40px` |  |
| `--e-48` | space 48 | `48px` |  |
| `--lado` | side | `16px` | Side margin of the screen. |
| `--alto-control` | control height | `50px` | Primary button and text inputs, same in all three apps. |
| `--alto-control-s` | control height S | `46px` | Secondary button. |

### Radius

| Token | Meaning | Value | Use |
|---|---|---|---|
| `--radio-s` | radius S | `12px` | QR codes, small photos, rows. |
| `--radio` | radius | `16px` | Cards, inputs, maps. |
| `--radio-m` | radius M | `20px` | Booking bar, large cards. |
| `--radio-l` | radius L | `26px` | Bottom sheets, booking-code card. |
| `--radio-pildora` | pill | `999px` | Buttons, chips, pills. |

### Shadow

| Token | Meaning | Value | Use |
|---|---|---|---|
| `--sombra` | shadow | `0 2px 12px rgb(31 46 38 / 0.09), 0 1px 2px rgb(31 46 38 / 0.06)` | Cards and panels. Always tinted with the text green. |
| `--sombra-borde` | edge shadow | `0 -1px 0 var(--linea), 0 -6px 18px rgb(31 46 38 / 0.05)` | Bottom tab bar. |
| `--sombra-flotante` | floating shadow | `0 6px 24px rgb(31 46 38 / 0.16)` | Booking bar, buttons over photos, toasts. |
| `--sombra-mapa` | map shadow | `0 1px 6px rgb(31 46 38 / 0.35)` | Pins, clusters and buttons on the map. |

### Charts

| Token | Meaning | Value | Dark | Use |
|---|---|---|---|---|
| `--grafico-1` | chart 1 · green | ![](https://placehold.co/14x14/009456/009456.png) `#009456` | ![](https://placehold.co/14x14/22a56a/22a56a.png) `#22a56a` | First series. Categories always take slots in this fixed order. |
| `--grafico-2` | chart 2 · sea | ![](https://placehold.co/14x14/325ac2/325ac2.png) `#325ac2` | ![](https://placehold.co/14x14/5981e0/5981e0.png) `#5981e0` | Second series. |
| `--grafico-3` | chart 3 · terracotta | ![](https://placehold.co/14x14/e15f0a/e15f0a.png) `#e15f0a` | ![](https://placehold.co/14x14/dc692e/dc692e.png) `#dc692e` | Third series. Maps and scatter plots stop here (max. 3). |
| `--grafico-4` | chart 4 · turquoise | ![](https://placehold.co/14x14/009aa8/009aa8.png) `#009aa8` | ![](https://placehold.co/14x14/08a2af/08a2af.png) `#08a2af` | Fourth series. |
| `--grafico-5` | chart 5 · mango | ![](https://placehold.co/14x14/dfa700/dfa700.png) `#dfa700` | ![](https://placehold.co/14x14/b3880f/b3880f.png) `#b3880f` | Fifth series. 2.2:1 on white: always with a visible label or a table. |
| `--grafico-6` | chart 6 · bougainvillea | ![](https://placehold.co/14x14/cd4290/cd4290.png) `#cd4290` | ![](https://placehold.co/14x14/d15697/d15697.png) `#d15697` | Sixth series. A seventh category folds into "Other". |
| `--grafico-escala-100` | scale 100 | ![](https://placehold.co/14x14/d3f1de/d3f1de.png) `#d3f1de` | same | Magnitude, one hue from light to dark. Near zero. |
| `--grafico-escala-200` | scale 200 | ![](https://placehold.co/14x14/a5d9b9/a5d9b9.png) `#a5d9b9` | same |  |
| `--grafico-escala-300` | scale 300 | ![](https://placehold.co/14x14/71be93/71be93.png) `#71be93` | same | Lightest step for separate marks on white (2.2:1). |
| `--grafico-escala-400` | scale 400 | ![](https://placehold.co/14x14/3fa270/3fa270.png) `#3fa270` | same |  |
| `--grafico-escala-500` | scale 500 | ![](https://placehold.co/14x14/158353/158353.png) `#158353` | same | Darkest step for separate marks on dark (3.5:1). |
| `--grafico-escala-600` | scale 600 | ![](https://placehold.co/14x14/08633d/08633d.png) `#08633d` | same |  |
| `--grafico-escala-700` | scale 700 | ![](https://placehold.co/14x14/004427/004427.png) `#004427` | same | Most. |

### Status

| Token | Meaning | Value | Use |
|---|---|---|---|
| `--estado-bien` | status good | ![](https://placehold.co/14x14/1f8a4c/1f8a4c.png) `#1f8a4c` | Reserved meaning. Always with an icon and a word, never colour alone. |
| `--estado-aviso` | status warning | ![](https://placehold.co/14x14/c98a00/c98a00.png) `#c98a00` | Reserved meaning. Icon + word. |
| `--estado-serio` | status serious | ![](https://placehold.co/14x14/d9622b/d9622b.png) `#d9622b` | Reserved meaning. Icon + word. |
| `--estado-critico` | status critical | ![](https://placehold.co/14x14/c0392b/c0392b.png) `var(--peligro)` | Same as danger. Icon + word. |

## Contrast

Calculated with the WCAG 2.2 formula from the values above. AA needs 4.5:1 for normal text and 3:1 for large text and icons.

| Pair | Tokens | Ratio | Needs | AA |
|---|---|---|---|---|
| Body text on background | `--texto` on `--fondo` | 14.2:1 | 4.5:1 | ✓ |
| Secondary text on background | `--suave` on `--fondo` | 6.2:1 | 4.5:1 | ✓ |
| White on brand green (buttons) | `--sobre-invertido` on `--marca` | 6.3:1 | 4.5:1 | ✓ |
| Terracotta text on background | `--acento-texto` on `--fondo` | 5.5:1 | 4.5:1 | ✓ |
| Text on peach labels | `--sobre-acento-suave` on `--acento-suave` | 5.5:1 | 4.5:1 | ✓ |
| White on sold-out grey | `--sobre-invertido` on `--agotado` | 4.9:1 | 4.5:1 | ✓ |
| Danger text on background | `--peligro` on `--fondo` | 5.4:1 | 4.5:1 | ✓ |
| White icon on terracotta | `--sobre-acento` on `--acento` | 3.5:1 | 3:1 | ✓ |

## Charts

The chart palette ("Caribe") was chosen on 13 October 2026 from three candidates, all derived from the brand green and terracotta.
The brand green itself (`--marca`) is too muted for data (OKLCH chroma 0.083): next to other colours it reads as grey,
so charts use a livelier green of the same hue.

- **Fixed order, never cycled.** Series take `--grafico-1`, `-2`, `-3`… in order. The order is what keeps neighbours apart
  for colour-blind readers. A seventh category folds into "Other".
- **Validated, not eyeballed.** Simulated protanopia and deuteranopia (Machado, Oliveira & Fernandes 2009), OKLab ΔE×100:
  worst neighbouring pair 18.3 in light mode and 14.7 in dark mode (target ≥ 8). Normal vision: 26.7 and 20.8 (floor ≥ 15).
- **Maps and scatter plots: three colours at most.** There any two marks can sit side by side, so every pair must pass, not just neighbours.
- **Magnitude uses one hue.** The green scale goes from light to dark; never a rainbow.
- **Status colours are reserved** for good, warning, serious and critical, and always come with an icon and a word.
- **Dark mode** (`<html data-tema="oscuro">`) keeps the same six hues with lightness tuned for the dark surface `#17201b`.
  The customer app always stays light.

## Components

`components.css` holds the pieces that used to be copied in all three apps:
`.boton-google` (Google sign-in button), `.separador-o` (the "or" divider) and `.estrellas` / `.estrellas-vacias` (rating stars).

## Versioning

[Semantic Versioning](https://semver.org): **MAJOR.MINOR.PATCH**.
PATCH fixes something without changing the look on purpose (e.g. a contrast that fell short).
MINOR adds tokens and keeps the old ones working (e.g. chart colours).
MAJOR removes or renames a token, so the apps have to adapt.

## How this repository is made

The source lives in the private Otra Mesa monorepo (`paquetes/diseno`). This public copy is generated by a script
that strips the internal comments and rebuilds this README from the real token values, so it cannot drift from the code.

## License

© Camilo Cepeda Danies. Shared as a portfolio piece. The Otra Mesa name and logo are not part of this repository.
