import type { Meta, StoryObj } from '@storybook/react-vite'
import { Leaf } from 'lucide-react'
import Etiqueta from './Etiqueta'

const meta = {
  title: 'Components/Etiqueta',
  component: Etiqueta,
  parameters: {
    themes: { themeOverride: 'Light' }, // solo en la app del cliente: siempre clara
    docs: {
      description: {
        component: 'Small pill label. **aviso** (default, peach with dark terracotta text, 5.5:1) draws attention without shouting (customer app only, always light); **blanca** sits on photos; **agotada** is sold-out grey with white text (4.9:1).',
      },
    },
  },
  argTypes: { tono: { control: 'inline-radio', options: ['aviso', 'blanca', 'agotada'] } },
  args: { children: '3 left' },
} satisfies Meta<typeof Etiqueta>

export default meta
type Story = StoryObj<typeof meta>

export const Aviso: Story = {}
export const Agotada: Story = { args: { tono: 'agotada', children: 'Sold out' } }
export const Blanca: Story = {
  name: 'Blanca (on a photo)',
  args: { tono: 'blanca', children: <><Leaf size={12} aria-hidden="true" /> Vegetarian</> },
  decorators: [(Historia) => <div style={{ padding: 24, borderRadius: 16, background: 'url(fotos/800/comida-de-mar.webp) center/cover' }}><Historia /></div>],
}
