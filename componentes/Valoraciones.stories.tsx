// Historias de las piezas de valoraciones: leer estrellas, poner nota y "Cómo lo valoran".
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import Estrellas from './Estrellas'
import ElegirEstrellas from './ElegirEstrellas'
import ResumenValoraciones from './ResumenValoraciones'

const meta = {
  title: 'Components/Ratings',
  component: ResumenValoraciones,
  parameters: {
    themes: { themeOverride: 'Light' }, // "Cómo lo valoran" y poner nota viven en la app del cliente (siempre clara)
    docs: {
      description: {
        component: [
          'Three pieces around ratings.',
          '',
          '- **`ResumenValoraciones`** ("How people rate it"): the big score and how many people gave 5, 4, 3, 2 and 1 stars. Bars are measured against the tallest row, not the total, so differences stay visible.',
          '- **`ElegirEstrellas`**: giving a score, built as a real radio group — Tab enters once, arrow keys change the score, Home/End jump to 1 and 5. Every star is a 44 px touch target.',
          '- **`Estrellas`**: reading a score (★★★★☆). The `etiqueta` is required, because a screen reader does not read "★★★★" well; with it, it says "4 out of 5 stars".',
        ].join('\n'),
      },
    },
  },
  args: {
    titulo: 'How people rate it',
    subtitulo: 'Based on 23 ratings',
    nota: '4.6',
    etiquetaNota: '4.6 out of 5',
    reparto: [0, 1, 1, 7, 14],
    etiquetaBarra: (n: number, c: number) => `${n} stars: ${c}`,
  },
  decorators: [(Historia) => <div style={{ width: 358 }}><Historia /></div>],
} satisfies Meta<typeof ResumenValoraciones>

export default meta
type Story = StoryObj<typeof meta>

export const Summary: Story = { name: 'How people rate it' }

export const ScoreOnly: Story = { name: 'Score only (no breakdown)', args: { reparto: undefined, subtitulo: 'Based on 3 ratings' } }

export const GiveAScore: Story = {
  name: 'Give a score',
  parameters: { controls: { disable: true } },
  render: function Historia() {
    const [valor, setValor] = useState(0)
    return (
      <div style={{ display: 'grid', gap: 8 }}>
        <strong>How was it?</strong>
        <ElegirEstrellas valor={valor} onCambiar={setValor} etiqueta="How was it?" etiquetaDe={(n) => `${n} star${n > 1 ? 's' : ''}`} />
        <span style={{ color: 'var(--suave)', fontSize: 13 }}>{valor ? `You chose ${valor}.` : 'Tap a star, or use the arrow keys.'}</span>
      </div>
    )
  },
}

export const ReadAScore: Story = {
  name: 'Read a score',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 8, fontSize: 18 }}>
      {[5, 4, 3, 1].map((n) => <Estrellas key={n} valor={n} etiqueta={`${n} out of 5 stars`} />)}
    </div>
  ),
}
