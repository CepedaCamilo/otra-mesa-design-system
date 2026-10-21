# Otra Mesa Design System

[![CI](https://github.com/CepedaCamilo/otra-mesa-design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/CepedaCamilo/otra-mesa-design-system/actions/workflows/ci.yml) [![Catalogue](https://img.shields.io/badge/catalogue-storybook.danies.trade-2f6b4a)](https://storybook.danies.trade)

The design system behind [Otra Mesa](https://otramesa.danies.trade), a food-rescue platform for restaurants
in Barranquilla, Colombia: a customer app, a business portal and a back office, all built on these tokens.

**Version 1.11.1** · [Changelog](CHANGELOG.md) · [Full documentation (PDF)](https://camilocepedadanies.com/pdf/otra-mesa-design-system.pdf)

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

**Live catalogue: [storybook.danies.trade](https://storybook.danies.trade)** — every component in light and dark, with its
accessibility check, plus the foundations (colour, charts, type, space).

## Usage

```css
@import 'tokens.css';      /* custom properties on :root (light, and dark under [data-tema="oscuro"]) */
@import 'components.css';  /* the styles of the shared components */
```

```tsx
import Boton from 'otra-mesa-design-system/Boton'
import TarjetaSorpresa from 'otra-mesa-design-system/TarjetaSorpresa'

<Boton onClick={reserve}>Reserve</Boton>
<Boton variante="icono" aria-label="Close"><X /></Boton>   {/* aria-label is required: the types refuse it otherwise */}
```

Components ship as TypeScript source (React 19), so they need a bundler that understands `.tsx` (Vite, Next…).

Token names, component names and code comments are in **Spanish**, the language the product is built in. The tables below give the English meaning of each token; the catalogue documents every component in English.

## Tokens

### Color

| Token | Meaning | Value | Dark | Use |
|---|---|---|---|---|
| `--fondo` | background | ![](https://placehold.co/14x14/ffffff/ffffff.png) `#ffffff` | ![](https://placehold.co/14x14/0f1612/0f1612.png) `#0f1612` | Page background. |
| `--superficie` | surface | ![](https://placehold.co/14x14/ffffff/ffffff.png) `#ffffff` | ![](https://placehold.co/14x14/17201b/17201b.png) `#17201b` | Cards and panels, separated by a soft shadow. |
| `--superficie-2` | surface 2 | ![](https://placehold.co/14x14/f3f4f2/f3f4f2.png) `#f3f4f2` | ![](https://placehold.co/14x14/202b25/202b25.png) `#202b25` | Very light grey with a hint of green: chips, photo placeholders, rating bars. |
| `--linea` | line | ![](https://placehold.co/14x14/e6e8e5/e6e8e5.png) `#e6e8e5` | ![](https://placehold.co/14x14/2c3932/2c3932.png) `#2c3932` | Hairlines and borders. |
| `--marca` | brand | ![](https://placehold.co/14x14/2f6b4a/2f6b4a.png) `#2f6b4a` | ![](https://placehold.co/14x14/6fbf92/6fbf92.png) `#6fbf92` | Logo green: primary buttons and active states. |
| `--titulo` | heading | ![](https://placehold.co/14x14/1f2e26/1f2e26.png) `#1f2e26` | ![](https://placehold.co/14x14/e6ece8/e6ece8.png) `#e6ece8` | Headings. Same as body text: one text colour. |
| `--texto` | text | ![](https://placehold.co/14x14/1f2e26/1f2e26.png) `#1f2e26` | ![](https://placehold.co/14x14/e6ece8/e6ece8.png) `#e6ece8` | Body text. |
| `--suave` | muted | ![](https://placehold.co/14x14/5b635f/5b635f.png) `#5b635f` | ![](https://placehold.co/14x14/a4aea8/a4aea8.png) `#a4aea8` | Secondary text. |
| `--invertido` | inverted | ![](https://placehold.co/14x14/2f6b4a/2f6b4a.png) `#2f6b4a` | ![](https://placehold.co/14x14/6fbf92/6fbf92.png) `#6fbf92` | Filled areas in brand green. |
| `--sobre-invertido` | on inverted | ![](https://placehold.co/14x14/ffffff/ffffff.png) `#ffffff` | ![](https://placehold.co/14x14/0e2117/0e2117.png) `#0e2117` | Text on brand green, valid at any size. |
| `--acento` | accent | ![](https://placehold.co/14x14/d26e28/d26e28.png) `#d26e28` | ![](https://placehold.co/14x14/ee8a4a/ee8a4a.png) `#ee8a4a` | Cheerful terracotta, for small details only: stars, underlines, small icons. |
| `--sobre-acento` | on accent | ![](https://placehold.co/14x14/ffffff/ffffff.png) `#ffffff` | ![](https://placehold.co/14x14/1d0f05/1d0f05.png) `#1d0f05` | Icons on terracotta (round photo buttons). Enough for icons and large text only. |
| `--acento-suave` | accent soft | ![](https://placehold.co/14x14/f8dcc6/f8dcc6.png) `#f8dcc6` | ![](https://placehold.co/14x14/3e2a1b/3e2a1b.png) `#3e2a1b` | Peach for small labels ("3 left"). |
| `--sobre-acento-suave` | on accent soft | ![](https://placehold.co/14x14/8a4416/8a4416.png) `#8a4416` | ![](https://placehold.co/14x14/f6bd94/f6bd94.png) `#f6bd94` | Text on peach. |
| `--acento-texto` | accent text | ![](https://placehold.co/14x14/a4521b/a4521b.png) `#a4521b` | ![](https://placehold.co/14x14/f2a06a/f2a06a.png) `#f2a06a` | Terracotta for small text. |
| `--vegetariano` | vegetarian | ![](https://placehold.co/14x14/2f6b4a/2f6b4a.png) `#2f6b4a` | ![](https://placehold.co/14x14/6fbf92/6fbf92.png) `#6fbf92` | Vegetarian marker. Same as brand green. |
| `--agotado` | sold out | ![](https://placehold.co/14x14/6b726e/6b726e.png) `#6b726e` | ![](https://placehold.co/14x14/5c645f/5c645f.png) `#5c645f` | Sold-out grey, with white text on top. |
| `--peligro` | danger | ![](https://placehold.co/14x14/c0392b/c0392b.png) `#c0392b` | ![](https://placehold.co/14x14/f2806f/f2806f.png) `#f2806f` | Errors and destructive actions. |
| `--velo-foto` | photo veil | `linear-gradient(to top, rgb(0 0 0 / 0.62), rgb(0 0 0 / 0) 70%)` | same | Gradient that makes white text readable on photos. |
| `--filtro-planos` | map filter | `saturate(0.75) brightness(1.03)` | `invert(1) hue-rotate(180deg) brightness(0.92) contrast(0.88) saturate(0.55)` | Softens the colours of the map tiles. |

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

| Token | Meaning | Value | Dark | Use |
|---|---|---|---|---|
| `--sombra` | shadow | `0 2px 12px rgb(31 46 38 / 0.09), 0 1px 2px rgb(31 46 38 / 0.06)` | `0 0 0 1px var(--linea)` | Cards and panels. Always tinted with the text green. |
| `--sombra-borde` | edge shadow | `0 -1px 0 var(--linea), 0 -6px 18px rgb(31 46 38 / 0.05)` | `0 -1px 0 var(--linea)` | Bottom tab bar. |
| `--sombra-flotante` | floating shadow | `0 6px 24px rgb(31 46 38 / 0.16)` | `0 0 0 1px var(--linea), 0 8px 28px rgb(0 0 0 / 0.5)` | Booking bar, buttons over photos, toasts. |
| `--sombra-mapa` | map shadow | `0 1px 6px rgb(31 46 38 / 0.35)` | `0 1px 6px rgb(0 0 0 / 0.6)` | Pins, clusters and buttons on the map. |

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

| Token | Meaning | Value | Dark | Use |
|---|---|---|---|---|
| `--estado-bien` | status good | ![](https://placehold.co/14x14/1f8a4c/1f8a4c.png) `#1f8a4c` | ![](https://placehold.co/14x14/3fb873/3fb873.png) `#3fb873` | Reserved meaning. Always with an icon and a word, never colour alone. |
| `--estado-aviso` | status warning | ![](https://placehold.co/14x14/c98a00/c98a00.png) `#c98a00` | ![](https://placehold.co/14x14/e0a526/e0a526.png) `#e0a526` | Reserved meaning. Icon + word. |
| `--estado-serio` | status serious | ![](https://placehold.co/14x14/d9622b/d9622b.png) `#d9622b` | ![](https://placehold.co/14x14/ee8a4a/ee8a4a.png) `#ee8a4a` | Reserved meaning. Icon + word. |
| `--estado-critico` | status critical | ![](https://placehold.co/14x14/c0392b/c0392b.png) `var(--peligro)` | ![](https://placehold.co/14x14/f2806f/f2806f.png) `var(--peligro)` | Same as danger. Icon + word. |

## Contrast

Calculated with the WCAG 2.2 formula from the values above. AA needs 4.5:1 for normal text and 3:1 for large text and icons.

**Light**

| Pair | Tokens | Ratio | Needs | AA |
|---|---|---|---|---|
| Body text on background | `--texto` on `--fondo` | 14.2:1 | 4.5:1 | ✓ |
| Secondary text on background | `--suave` on `--fondo` | 6.2:1 | 4.5:1 | ✓ |
| Text on primary button | `--sobre-invertido` on `--marca` | 6.3:1 | 4.5:1 | ✓ |
| Terracotta text on background | `--acento-texto` on `--fondo` | 5.5:1 | 4.5:1 | ✓ |
| Text on peach labels | `--sobre-acento-suave` on `--acento-suave` | 5.5:1 | 4.5:1 | ✓ |
| White on sold-out grey | `#ffffff` on `--agotado` | 4.9:1 | 4.5:1 | ✓ |
| Danger text on background | `--peligro` on `--fondo` | 5.4:1 | 4.5:1 | ✓ |
| White icon on terracotta | `--sobre-acento` on `--acento` | 3.5:1 | 3:1 | ✓ |

**Dark**

| Pair | Tokens | Ratio | Needs | AA |
|---|---|---|---|---|
| Body text on background | `--texto` on `--fondo` | 15.3:1 | 4.5:1 | ✓ |
| Secondary text on background | `--suave` on `--fondo` | 8.0:1 | 4.5:1 | ✓ |
| Text on primary button | `--sobre-invertido` on `--marca` | 7.6:1 | 4.5:1 | ✓ |
| Terracotta text on background | `--acento-texto` on `--fondo` | 8.8:1 | 4.5:1 | ✓ |
| Text on peach labels | `--sobre-acento-suave` on `--acento-suave` | 8.1:1 | 4.5:1 | ✓ |
| White on sold-out grey | `#ffffff` on `--agotado` | 6.1:1 | 4.5:1 | ✓ |
| Danger text on background | `--peligro` on `--fondo` | 7.1:1 | 4.5:1 | ✓ |

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
- **Dark mode** keeps the same six hues with lightness tuned for the dark surface `#17201b`.

## Dark mode

Dark mode ("Noche verde", night green) is for the business portal and the back office. The customer app always stays light.
It switches on with `<html data-tema="oscuro">`: the panels follow the device setting until the person taps the sun/moon button,
then remember the choice. The background is a green-tinted near-black, the same surface the chart colours were validated on.
Primary buttons turn light green with dark text, because the usual brand green would sink into the background.
Cards are separated by a hairline instead of a shadow, and the map tiles are inverted and desaturated.
The **Dark** column in the tables above lists every value that changes; the contrast table below checks both modes.

## Components

| Component | What it is |
|---|---|
| [`Boton`](componentes/Boton.tsx) | The button: `principal`, `secundario`, `icono`. Icon-only buttons require an `aria-label`; never submits a form by accident. |
| [`BotonGoogle`](componentes/BotonGoogle.tsx) | "Continue with Google" skin with the "or with your email" divider. |
| [`Campo`](componentes/Campo.tsx) | A complete form field that wires label, help and error to the control. |
| [`ElegirEstrellas`](componentes/ElegirEstrellas.tsx) | Give a score: a real radio group with arrow keys and 44 px stars. |
| [`Estrellas`](componentes/Estrellas.tsx) | Read a score (★★★★☆) with a required accessible label. |
| [`Etiqueta`](componentes/Etiqueta.tsx) | Small pill label: `aviso`, `blanca`, `agotada`. |
| [`Filtro`](componentes/Filtro.tsx) | On/off filter chip. |
| [`Pestanas`](componentes/Pestanas.tsx) | Sticky category tabs. |
| [`ResumenValoraciones`](componentes/ResumenValoraciones.tsx) | "How people rate it": big score and 5→1 bars. |
| [`Segmentos`](componentes/Segmentos.tsx) | Pick one of 2–4 options. Generic over text, number or yes/no values. |
| [`TarjetaSorpresa`](componentes/TarjetaSorpresa.tsx) | The surprise-bag card of the customer app (row and featured). Text and photo come from outside. |

Each one is used by the real apps: buttons, cards, fields and ratings in the customer app, the business portal and the back office
come from here. A component knows nothing about the API or languages — it receives ready-made text — so it works anywhere.

## Two brands, one system

Since 1.10.0 the same components also run [Yaku](https://yaku.danies.trade/?mesa=demo), table ordering for a Peruvian–Nikkei
restaurant in Hamburg. Markup, behaviour, keyboard and accessibility are shared and tested once; a brand is only a skin —
its tokens and one CSS file, [`marcas/yaku.css`](marcas/yaku.css), switched on with `data-marca="yaku"`
(Yaku: canvas texture, ají yellow, Jost, its own dark mode). Shared rules travel with the components: a disabled button
is grey, never faded, in both brands. See them in Yaku's own
[Yaku catalogue](https://storybook.danies.trade/yaku/), each brand in its own catalogue.

## Quality

Every push runs the same checks as the private monorepo ([CI](.github/workflows/ci.yml)):

- **Types** (`npm run tipos`): strict TypeScript, plus type tests that must fail — e.g. an icon-only button without an accessible
  name, or a segmented control whose value does not match its options.
- **Unit tests** (`npm test`, Vitest + Testing Library): behaviour, keyboard (arrow keys in the rating control), ARIA wiring
  (labels, descriptions, pressed states) and an axe accessibility check for every component; token values and contrast ratios.
- **Catalogue build** (`npm run build-storybook`). The published catalogue is also scanned with axe (WCAG 2.2 AA) in light and dark.

```bash
npm install
npm run storybook   # catalogue on http://localhost:6006
npm test
```

## Versioning

[Semantic Versioning](https://semver.org): **MAJOR.MINOR.PATCH**.
PATCH fixes something without changing the look on purpose (e.g. a contrast that fell short).
MINOR adds tokens and keeps the old ones working (e.g. chart colours).
MAJOR removes or renames a token, so the apps have to adapt.

## Design decisions

Every big choice is written down on one page — what was decided, why, and what was given up — as an
[architecture decision record](https://adr.github.io). The three about the design system are public:

| No. | Decision |
|---|---|
| [0003](docs/decisions/0003-in-house-design-system.md) | An in-house design system |
| [0004](docs/decisions/0004-disabled-buttons-go-grey.md) | Disabled buttons go grey, not transparent |
| [0005](docs/decisions/0005-customer-app-light-tools-dark.md) | Customer app always light; business tools with a dark mode |

## How this repository is made

The source lives in the private Otra Mesa monorepo (`paquetes/diseno`), where the three apps use it. This public copy is
generated by a script: it copies the components, stories and tests, strips the internal comments from the CSS and rebuilds this
README from the real token values, so it cannot drift from the code.

## License

© Camilo Cepeda Danies. Shared as a portfolio piece. The Otra Mesa name and logo are not part of this repository.
