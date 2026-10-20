// Pestanas, Filtro y Segmentos del sistema con la piel de Yaku: las secciones de la carta, vegano/vegetariano y DE · EN.
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import Pestanas from '../../componentes/Pestanas'
import Filtro from '../../componentes/Filtro'
import Segmentos from '../../componentes/Segmentos'

const meta = {
  title: 'Components/Choosing',
  component: Pestanas,
  parameters: {
    docs: {
      description: {
        component: [
          'The same choosing components as in Otra Mesa, in Yaku’s skin.',
          '',
          '- **`Pestanas`** — the menu sections. They stick to the top while scrolling; the current one gets an ají underline.',
          '- **`Filtro`** — *Vegan* and *Vegetarian*: a dashed outline when off, a solid green one when on. Announced as a pressed button.',
          '- **`Segmentos`** — the DE · EN switch: small, the chosen language filled in ink.',
        ].join('\n'),
      },
    },
  },
  args: { opciones: [], valor: '', onCambiar: () => {}, etiqueta: '' },
} satisfies Meta<typeof Pestanas>

export default meta
type Story = StoryObj<typeof meta>

export const Tabs: Story = {
  name: 'Pestanas · menu sections',
  parameters: { controls: { disable: true } },
  render: function Historia() {
    const [c, setC] = useState('abierto')
    const opciones = [['abierto', 'Yaku Abierto'], ['ceviches', 'Ceviches'], ['calientes', 'Warm dishes'], ['postres', 'Desserts']].map(([valor, texto]) => ({ valor: valor!, texto: texto! }))
    return <div style={{ width: 390 }}><Pestanas etiqueta="Menu sections" opciones={opciones} valor={c} onCambiar={setC} /></div>
  },
}

export const Filters: Story = {
  name: 'Filtro · vegan and vegetarian',
  parameters: { controls: { disable: true } },
  render: function Historia() {
    const [f, setF] = useState<'vegan' | 'veggie' | null>('veggie')
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        <Filtro activo={f === 'vegan'} onCambiar={(on) => setF(on ? 'vegan' : null)}>Vegan</Filtro>
        <Filtro activo={f === 'veggie'} onCambiar={(on) => setF(on ? 'veggie' : null)}>Vegetarian</Filtro>
      </div>
    )
  },
}

export const Language: Story = {
  name: 'Segmentos · language',
  parameters: { controls: { disable: true } },
  render: function Historia() {
    const [idioma, setIdioma] = useState<'de' | 'en'>('de')
    return <Segmentos etiqueta="Sprache / Language" opciones={[{ valor: 'de', texto: 'DE' }, { valor: 'en', texto: 'EN' }]} valor={idioma} onCambiar={setIdioma} />
  },
}
