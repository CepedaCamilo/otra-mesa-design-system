// Las piezas juntas, como en la app de Yaku: la cabecera de la carta y la hoja de un plato.
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import Boton from '../../componentes/Boton'
import Campo from '../../componentes/Campo'
import Filtro from '../../componentes/Filtro'
import Pestanas from '../../componentes/Pestanas'
import Segmentos from '../../componentes/Segmentos'

const meta = {
  title: 'In context',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'The components together, as the guest sees them in the app.' } } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Menu: Story = {
  name: 'Menu',
  render: function Historia() {
    const [idioma, setIdioma] = useState<'de' | 'en'>('en')
    const [c, setC] = useState('abierto')
    const [f, setF] = useState<'vegan' | 'veggie' | null>(null)
    return (
      <div style={{ maxWidth: 420, margin: '0 auto', paddingBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 18px 6px' }}>
          <img src="marca/y.png" alt="Yaku" style={{ height: 34, filter: 'var(--logo-filtro)' }} />
          <Segmentos etiqueta="Sprache / Language" opciones={[{ valor: 'de', texto: 'DE' }, { valor: 'en', texto: 'EN' }]} valor={idioma} onCambiar={setIdioma} />
        </div>
        <Pestanas etiqueta="Menu sections" valor={c} onCambiar={setC}
          opciones={[['abierto', 'Yaku Abierto'], ['ceviches', 'Ceviches'], ['postres', 'Desserts']].map(([valor, texto]) => ({ valor: valor!, texto: texto! }))} />
        <div style={{ display: 'flex', gap: 8, padding: '14px 18px 0' }}>
          <Filtro activo={f === 'vegan'} onCambiar={(on) => setF(on ? 'vegan' : null)}>Vegan</Filtro>
          <Filtro activo={f === 'veggie'} onCambiar={(on) => setF(on ? 'veggie' : null)}>Vegetarian</Filtro>
        </div>
      </div>
    )
  },
}

export const Dish: Story = {
  name: 'Dish',
  render: () => (
    <div style={{ maxWidth: 420, minHeight: '100vh', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
      <img src="fotos/mar-nikkei.jpg" alt="Mar Nikkei: crispy pani puri with tuna tartare and trout caviar" style={{ display: 'block', width: '100%', height: 200, objectFit: 'cover' }} />
      <section style={{ flex: 1, position: 'relative', marginTop: -30, padding: '24px 22px 24px', borderRadius: '30px 30px 0 0', background: 'var(--fondo) var(--fondo-imagen)', backgroundSize: 500, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <p className="antetitulo">Yaku Abierto</p><span style={{ fontSize: 18, fontWeight: 500 }}>10,00 €</span>
        </div>
        <h1 className="display" style={{ fontSize: 38 }}>Mar Nikkei</h1>
        <p style={{ margin: 0, color: 'var(--suave)' }}>Crispy pani puri filled with Nikkei-style tuna tartare, miso foam and trout caviar.</p>
        <Campo etiqueta="Note for the kitchen"><input placeholder="e.g. no coriander" maxLength={200} /></Campo>
        <div style={{ display: 'flex', gap: 10, paddingTop: 10 }}>
          <Boton ancho>Add · 10,00 €</Boton>
        </div>
      </section>
    </div>
  ),
}
