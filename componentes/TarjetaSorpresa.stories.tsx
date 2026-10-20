// Historias de la tarjeta de sorpresa para el catálogo (en inglés, como el resto del catálogo público).
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heart, Star } from 'lucide-react'
import TarjetaSorpresa from './TarjetaSorpresa'

const foto = (nombre: string) => (
  <picture>
    <source type="image/avif" srcSet={`fotos/800/${nombre}.avif`} />
    <img src={`fotos/800/${nombre}.webp`} alt="" />
  </picture>
)
const nota = (n: string) => <span className="nota" aria-label={`${n} out of 5`}><Star size={12} aria-hidden="true" /> {n}</span>
const corazon = <button type="button" className="boton-redondo" aria-label="Save to favourites"><Heart size={18} aria-hidden="true" /></button>

const meta = {
  title: 'Components/TarjetaSorpresa',
  component: TarjetaSorpresa,
  parameters: {
    layout: 'centered',
    themes: { themeOverride: 'Light' }, // la app del cliente es siempre clara
    docs: {
      description: {
        component: [
          'The card of a surprise bag — the core of the customer app. Photo, "3 left" label, venue, one line of detail,',
          'pick-up window and price with the original struck through.',
          '',
          '- **Knows nothing about the API or languages**: it receives ready-made text and the photo as a slot, so it works in the app, here, and on any future screen.',
          '- **`destacada`** is the larger card of "Featured surprises" (2.3:1 photo, bigger price, time and price always on one line).',
          '- **The whole card is one button** to open the details; the favourites heart is a separate button on top, so the two never fight.',
          '- **Long names never break the layout**: they end with an ellipsis.',
          '- **Customer app only, so always light** (a decision of the design system): the theme switch does not apply here.',
        ].join('\n'),
      },
    },
  },
  args: {
    nombre: 'Bunker Burgers',
    foto: foto('hamburguesas'),
    linea: <>Evening surprise · {nota('4.6')}</>,
    cuando: 'Today 9:30–11:00 p.m. · 450 m',
    precio: '$23.000',
    precioAntes: '$69.000',
    etiqueta: '3 left',
    accion: corazon,
    onAbrir: () => {},
  },
  argTypes: { foto: { control: false }, linea: { control: false }, accion: { control: false }, onAbrir: { action: 'open' } },
  // Ancho fijo de móvil, salvo en la historia que va incrustada en la web (parameters.anchoCompleto)
  decorators: [(Historia, ctx) => (ctx.parameters.anchoCompleto ? <Historia /> : <div style={{ display: 'flex', width: 400 }}><Historia /></div>)],
} satisfies Meta<typeof TarjetaSorpresa>

export default meta
type Story = StoryObj<typeof meta>

export const Row: Story = { name: 'Row card' }

export const Featured: Story = { args: { destacada: true } }

export const SoldOut: Story = { name: 'Sold out', args: { etiqueta: '0 left', agotada: true } }

export const NewVenue: Story = {
  name: 'New venue (no ratings yet)',
  args: { nombre: 'Crumb Bakery', foto: foto('panaderia'), linea: 'Bakery surprise', cuando: 'Today 5:15–5:45 p.m. · 1.2 km', precio: '$12.000', precioAntes: '$36.000', etiqueta: '5 left' },
}

export const LongName: Story = {
  name: 'Long name',
  args: { nombre: 'Distribuidora Mayorista del Caribe Barranquillita', foto: foto('al-por-mayor'), linea: 'Wholesale surprise · 10 kg box', cuando: 'Today 3:00–5:00 p.m. · 4.8 km', precio: '$98.000', precioAntes: '$294.000' },
}

// Una fila de Descubrir de verdad: tarjetas que se deslizan con el dedo.
export const InARow: Story = {
  name: 'In a row (Discover)',
  decorators: [(Historia) => <div style={{ width: 390 }}><Historia /></div>],
  parameters: { controls: { disable: true } },
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollPaddingInline: 16, padding: '4px 16px 16px' }}>
      <TarjetaSorpresa {...args} />
      <TarjetaSorpresa {...args} nombre="Inka Brisa" foto={foto('peruana')} linea={<>Lunch surprise · {nota('4.8')}</>} cuando="Now, until 3:00 p.m. · 800 m" precio="$18.000" precioAntes="$54.000" etiqueta="2 left" />
      <TarjetaSorpresa {...args} nombre="Nuna Coffee" foto={foto('cafe')} linea="Breakfast surprise" cuando="Today 6:00–7:00 p.m. · 1.1 km" precio="$9.000" precioAntes="$27.000" etiqueta="4 left" />
    </div>
  ),
}

// La fila a todo lo ancho: es la que va incrustada en el caso de Otra Mesa de camilocepedadanies.com.
export const FullWidthRow: Story = {
  name: 'In a row · full width',
  parameters: { layout: 'fullscreen', anchoCompleto: true, controls: { disable: true } },
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollPaddingInline: 16, padding: 16, background: 'var(--fondo)' }}>
      <TarjetaSorpresa {...args} />
      <TarjetaSorpresa {...args} nombre="Inka Brisa" foto={foto('peruana')} linea={<>Lunch surprise · {nota('4.8')}</>} cuando="Now, until 3:00 p.m. · 800 m" precio="$18.000" precioAntes="$54.000" etiqueta="2 left" />
      <TarjetaSorpresa {...args} nombre="Crumb Bakery" foto={foto('panaderia')} linea="Bakery surprise" cuando="Today 5:15–5:45 p.m. · 1.2 km" precio="$12.000" precioAntes="$36.000" etiqueta="5 left" />
      <TarjetaSorpresa {...args} nombre="Nuna Coffee" foto={foto('cafe')} linea={<>Breakfast surprise · {nota('4.5')}</>} cuando="Today 6:00–7:00 p.m. · 1.1 km" precio="$9.000" precioAntes="$27.000" etiqueta="4 left" />
      <TarjetaSorpresa {...args} nombre="Mar y Brasa" foto={foto('comida-de-mar')} linea={<>Evening surprise · {nota('4.7')}</>} cuando="Today 9:00–10:00 p.m. · 2.3 km" precio="$26.000" precioAntes="$78.000" etiqueta="0 left" agotada />
    </div>
  ),
}
