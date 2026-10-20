// Historias de los controles de elegir: Segmentos, Pestanas y Filtro.
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import Segmentos from './Segmentos'
import Pestanas from './Pestanas'
import Filtro from './Filtro'

const meta = {
  title: 'Components/Choosing',
  component: Segmentos,
  parameters: {
    docs: {
      description: {
        component: [
          'Three ways to choose, each with its own job.',
          '',
          '- **`Segmentos`** — pick exactly **one** of 2–4 options, like a switch ("Today · Tomorrow", "Real · With sample data"). Generic: the value can be text, a number or yes/no, and the type checker makes sure it matches the options. `ancho` fills the width with equal columns (forms on mobile).',
          '- **`Pestanas`** — category tabs that stick to the top while scrolling and slide sideways when they do not fit. Customer app only (always light).',
          '- **`Filtro`** — an on/off filter chip; several can be on at once. Announced as a pressed button.',
        ].join('\n'),
      },
    },
  },
  args: { opciones: [], valor: '', onCambiar: () => {}, etiqueta: '' },
} satisfies Meta<typeof Segmentos>

export default meta
type Story = StoryObj<typeof meta>

export const SegmentsInline: Story = {
  name: 'Segmentos · inline (back office)',
  parameters: { controls: { disable: true } },
  render: function Historia() {
    const [dias, setDias] = useState(7)
    const [ejemplo, setEjemplo] = useState(false)
    return (
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Segmentos etiqueta="Period" opciones={[{ valor: 1, texto: '24 h' }, { valor: 7, texto: '7 days' }, { valor: 30, texto: '30 days' }]} valor={dias} onCambiar={setDias} />
        <Segmentos etiqueta="Which data" opciones={[{ valor: false, texto: 'Real' }, { valor: true, texto: 'With sample data' }]} valor={ejemplo} onCambiar={setEjemplo} />
      </div>
    )
  },
}

export const SegmentsWide: Story = {
  name: 'Segmentos · full width (business portal)',
  parameters: { controls: { disable: true } },
  render: function Historia() {
    const [dia, setDia] = useState<'hoy' | 'manana'>('hoy')
    return <div style={{ width: 340 }}><Segmentos ancho etiqueta="Day" opciones={[{ valor: 'hoy', texto: 'Today' }, { valor: 'manana', texto: 'Tomorrow' }]} valor={dia} onCambiar={setDia} /></div>
  },
}

export const Tabs: Story = {
  name: 'Pestanas (customer app)',
  parameters: { controls: { disable: true }, themes: { themeOverride: 'Light' } },
  render: function Historia() {
    const [c, setC] = useState('todas')
    const opciones = [['todas', 'All'], ['comidas', 'Meals'], ['panaderia', 'Bakery'], ['mercado', 'Groceries'], ['dulces', 'Sweets'], ['mayor', 'Wholesale']].map(([valor, texto]) => ({ valor: valor!, texto: texto! }))
    return <div style={{ width: 390 }}><Pestanas etiqueta="Categories" opciones={opciones} valor={c} onCambiar={setC} /></div>
  },
}

export const Filters: Story = {
  name: 'Filtro (customer app)',
  parameters: { controls: { disable: true }, themes: { themeOverride: 'Light' } },
  render: function Historia() {
    const [f, setF] = useState({ abierto: true, vegetariano: false, ya: false })
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Filtro activo={f.abierto} onCambiar={(si) => setF({ ...f, abierto: si })}>Open now</Filtro>
        <Filtro activo={f.vegetariano} onCambiar={(si) => setF({ ...f, vegetariano: si })}>Vegetarian</Filtro>
        <Filtro activo={f.ya} onCambiar={(si) => setF({ ...f, ya: si })}>Pick up now</Filtro>
      </div>
    )
  },
}
