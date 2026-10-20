// El Boton del sistema con la piel de Yaku: píldora de ají (principal) y píldora de lienzo con borde fino (secundario).
import type { Meta, StoryObj } from '@storybook/react-vite'
import Boton from '../../componentes/Boton'

const meta = {
  title: 'Components/Boton',
  component: Boton,
  parameters: {
    docs: {
      description: {
        component: [
          'The same `Boton` as in Otra Mesa, in Yaku’s skin.',
          '',
          '- **Principal** — an ají-yellow pill for the one next step: *Add*, *Place order*.',
          '- **Secundario** — a canvas pill with a thin line, for the way back: *Keep browsing*, *Order something else*.',
          '- **Disabled never fades out** (the system rule): light grey for the primary button, a dashed border for the secondary one.',
          '- `type="button"` by default, so it never submits a form by accident.',
        ].join('\n'),
      },
    },
  },
  args: { children: 'Add · 13,00 €', onClick: () => {} },
} satisfies Meta<typeof Boton>

export default meta
type Story = StoryObj<typeof meta>

export const Principal: Story = {}
export const PrincipalDisabled: Story = { name: 'Principal · disabled', args: { disabled: true, children: 'Sending…' } }
export const Secundario: Story = { args: { variante: 'secundario', children: 'Keep browsing' } }
export const SecundarioDisabled: Story = { name: 'Secundario · disabled', args: { variante: 'secundario', disabled: true, children: 'Keep browsing' } }
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 10, width: 340 }}>
      <Boton ancho>Place order</Boton>
      <Boton ancho variante="secundario">Keep browsing</Boton>
      <Boton ancho disabled>Sending…</Boton>
    </div>
  ),
}
