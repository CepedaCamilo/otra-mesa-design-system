// Dos marcas, un sistema (1.10.0): los MISMOS componentes con la piel de Otra Mesa y con la de Yaku, uno al lado del otro.
// La caja de cada marca lleva data-marca: los tokens y las reglas de marcas/yaku.css solo valen dentro de la suya.
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type CSSProperties } from 'react'
import Boton from './Boton'
import Campo from './Campo'
import Filtro from './Filtro'
import Pestanas from './Pestanas'
import Segmentos from './Segmentos'

type Textos = { nombre: string; idiomas: [string, string]; pestanas: [string, string, string]; filtros: [string, string]; principal: string; secundario: string; agotado: string; campo: string; ejemplo: string }

const OTRA_MESA: Textos = {
  nombre: 'Otra Mesa', idiomas: ['ES', 'EN'], pestanas: ['All', 'Meals', 'Bakery'], filtros: ['Open now', 'Vegetarian'],
  principal: 'Reserve · $8,900', secundario: 'Cancel', agotado: 'Sold out', campo: 'Email', ejemplo: 'you@example.com',
}
const YAKU: Textos = {
  nombre: 'Yaku', idiomas: ['DE', 'EN'], pestanas: ['Yaku Abierto', 'Ceviches', 'Desserts'], filtros: ['Vegan', 'Vegetarian'],
  principal: 'Add · 13,00 €', secundario: 'Keep browsing', agotado: 'Sending…', campo: 'Note for the kitchen', ejemplo: 'e.g. no coriander',
}

const caja: CSSProperties = {
  width: 360, padding: '20px 0 24px', borderRadius: 24, border: '1px solid var(--linea)', overflow: 'hidden',
  background: 'var(--fondo) var(--fondo-imagen, none)', backgroundSize: 500, color: 'var(--texto)', fontFamily: 'var(--texto-fuente)',
}
const fila: CSSProperties = { display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', padding: '0 18px' }

function Muestra({ marca, t }: { marca: 'otra-mesa' | 'yaku'; t: Textos }) {
  const [idioma, setIdioma] = useState(t.idiomas[0])
  const [pestana, setPestana] = useState(t.pestanas[0])
  const [filtros, setFiltros] = useState<string[]>([t.filtros[1]])
  return (
    <section data-marca={marca} style={caja} aria-label={t.nombre}>
      <div style={{ ...fila, justifyContent: 'space-between' }}>
        <strong style={{ fontSize: 18 }}>{t.nombre}</strong>
        <Segmentos etiqueta="Language" opciones={t.idiomas.map((i) => ({ valor: i, texto: i }))} valor={idioma} onCambiar={setIdioma} />
      </div>
      <Pestanas etiqueta="Categories" opciones={t.pestanas.map((p) => ({ valor: p, texto: p }))} valor={pestana} onCambiar={setPestana} />
      <div style={{ ...fila, marginTop: 14 }}>
        {t.filtros.map((f) => (
          <Filtro key={f} activo={filtros.includes(f)} onCambiar={(on) => setFiltros(on ? [...filtros, f] : filtros.filter((x) => x !== f))}>{f}</Filtro>
        ))}
      </div>
      <div style={{ padding: '18px 18px 0' }}>
        <Campo etiqueta={t.campo}><input placeholder={t.ejemplo} /></Campo>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '18px 18px 0' }}>
        <Boton ancho>{t.principal}</Boton>
        <Boton variante="secundario" ancho>{t.secundario}</Boton>
        <Boton ancho disabled>{t.agotado}</Boton>
      </div>
    </section>
  )
}

const meta = {
  title: 'Brands/Two brands, one system',
  parameters: {
    layout: 'padded',
    marca: 'otra-mesa', // cada caja lleva su propia marca: el interruptor de arriba no hace falta aquí
    docs: {
      description: {
        component: [
          'The **same components** — `Segmentos`, `Pestanas`, `Filtro`, `Campo` and `Boton` — dressed in two brands.',
          'Markup, behaviour, keyboard and accessibility are shared and tested once; a brand is only a skin:',
          'its tokens plus one CSS file (`marcas/yaku.css`), switched on with `data-marca="yaku"`.',
          '',
          'Otra Mesa: green and terracotta, Figtree. Yaku (a Peruvian–Nikkei restaurant in Hamburg): canvas texture,',
          'ají yellow, Jost, and a dark mode of its own. Shared rules travel too — a disabled button is grey, never faded, in both.',
          'Use the **Brand** switch in the toolbar to see every other component in Yaku’s skin.',
        ].join('\n'),
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SideBySide: Story = {
  name: 'Side by side',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
      <Muestra marca="otra-mesa" t={OTRA_MESA} />
      <Muestra marca="yaku" t={YAKU} />
    </div>
  ),
}
