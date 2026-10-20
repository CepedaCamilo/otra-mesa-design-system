// Historias del Boton para el catálogo (Storybook). En inglés: el catálogo es público, como la vitrina.
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Check, LogOut, RefreshCw, X } from 'lucide-react'
import Boton from './Boton'

const meta = {
  title: 'Components/Boton',
  component: Boton,
  parameters: {
    docs: {
      description: {
        component: [
          'The one button of Otra Mesa, shared by the customer app, the business portal and the back office.',
          '',
          '- **Three variants**: `principal` (default, brand green), `secundario` (outlined) and `icono` (round, icon only).',
          '- **Sizes only where they exist**: `pequeno` for the primary button, `grande` (44 px touch target) for the icon button.',
          '- **An icon-only button must have an `aria-label`** — the type checker refuses it otherwise.',
          '- **`type="button"` by default**, so it never submits a form by accident. Use `type="submit"` when it should.',
          '- **Disabled never fades out**: light grey for the primary button, dashed grey border for the secondary one.',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    variante: { control: 'inline-radio', options: ['principal', 'secundario', 'icono'] },
    tamano: { control: 'inline-radio', options: ['normal', 'pequeno', 'grande'] },
    onClick: { action: 'click' },
  },
  args: { children: 'Reserve' },
} satisfies Meta<typeof Boton>

export default meta
type Story = StoryObj<typeof meta>

export const Principal: Story = {}

export const PrincipalDisabled: Story = { name: 'Principal · disabled', args: { disabled: true } }

export const PrincipalSmall: Story = { name: 'Principal · small', args: { tamano: 'pequeno', children: 'Rate it' } }

export const WithIcon: Story = {
  name: 'Principal · with icon',
  args: { children: <><Check size={18} aria-hidden="true" /> Hand over</> },
}

export const Secundario: Story = {
  args: { variante: 'secundario', children: <><RefreshCw size={16} aria-hidden="true" /> Refresh</> },
}

export const SecundarioDisabled: Story = {
  name: 'Secundario · disabled',
  args: { variante: 'secundario', disabled: true, children: <><RefreshCw size={16} aria-hidden="true" /> Refresh</> },
}

export const Icono: Story = {
  args: { variante: 'icono', 'aria-label': 'Close', children: <X size={16} /> },
}

export const IconoLarge: Story = {
  name: 'Icono · large (44 px)',
  args: { variante: 'icono', tamano: 'grande', 'aria-label': 'Sign out', children: <LogOut size={18} /> },
}

export const FullWidth: Story = {
  name: 'Full width',
  args: { ancho: true, children: 'Send me the code' },
  decorators: [(Historia) => <div style={{ width: 340 }}><Historia /></div>],
}

// Todas juntas: la "hoja de contacto" del botón, para ver de un vistazo cómo conviven.
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <div className="fila-catalogo"><Boton>Reserve</Boton><Boton disabled>Reserve</Boton><Boton tamano="pequeno">Rate it</Boton></div>
      <div className="fila-catalogo">
        <Boton variante="secundario"><X size={16} aria-hidden="true" /> Cancel</Boton>
        <Boton variante="secundario" disabled><X size={16} aria-hidden="true" /> Cancel</Boton>
      </div>
      <div className="fila-catalogo">
        <Boton variante="icono" aria-label="Close"><X size={16} /></Boton>
        <Boton variante="icono" tamano="grande" aria-label="Close"><X size={18} /></Boton>
        <Boton variante="icono" aria-label="Close" disabled><X size={16} /></Boton>
      </div>
    </div>
  ),
}
