# Otra Mesa Design System

The design system behind [Otra Mesa](https://otramesa.danies.trade), a food-rescue platform for restaurants
in Barranquilla, Colombia: a customer app, a business portal and a back office, all built on these tokens.

**Version 1.3.0** · [Changelog](CHANGELOG.md) · [Full documentation (PDF)](https://camilocepedadanies.com/pdf/otra-mesa-design-system.pdf)

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
