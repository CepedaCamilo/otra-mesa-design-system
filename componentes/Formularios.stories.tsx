// Historias de las piezas de formulario: Campo y BotonGoogle.
import type { Meta, StoryObj } from '@storybook/react-vite'
import Campo from './Campo'
import BotonGoogle from './BotonGoogle'
import Boton from './Boton'

const meta = {
  title: 'Components/Forms',
  component: Campo,
  parameters: {
    docs: {
      description: {
        component: [
          '- **`Campo`** — a complete form field: label, control, help and error. It wires everything for you so it is never forgotten: the label is linked to its control (`htmlFor` + `id`), help and error are linked with `aria-describedby`, and an error marks the control `aria-invalid`. Text inside is 16 px so iOS never zooms in.',
          '- **`BotonGoogle`** — "Continue with Google" with the coloured G (as Google’s brand rules ask) and the "or with your email" divider. Only the skin: the logic (is Google enabled, where to go) lives in the apps’ shared package.',
        ].join('\n'),
      },
    },
  },
  args: { etiqueta: 'Email', children: <input type="email" placeholder="you@email.com" /> },
  decorators: [(Historia) => <div style={{ width: 340 }}><Historia /></div>],
} satisfies Meta<typeof Campo>

export default meta
type Story = StoryObj<typeof meta>

export const Field: Story = { name: 'Campo' }
export const WithHelp: Story = { name: 'Campo · with help', args: { ayuda: 'We send a 6-digit code to your email.' } }
export const WithError: Story = { name: 'Campo · with error', args: { children: <input type="email" defaultValue="maria@" />, error: 'That email does not look right.' } }
export const Code: Story = {
  name: 'Campo · 6-digit code',
  args: { etiqueta: 'Code', children: <input className="codigo" inputMode="numeric" maxLength={6} placeholder="000000" style={{ fontSize: 26, letterSpacing: 8, textAlign: 'center', fontWeight: 700 }} /> },
}

export const SignIn: Story = {
  name: 'Sign in (all together)',
  parameters: { controls: { disable: true } },
  render: () => (
    <form style={{ display: 'grid', gap: 16 }} onSubmit={(e) => e.preventDefault()}>
      <BotonGoogle texto="Continue with Google" separador="or with your email" onClick={() => {}} />
      <Campo etiqueta="Email"><input type="email" autoComplete="email" placeholder="you@email.com" /></Campo>
      <Boton type="submit" ancho>Send me the code</Boton>
    </form>
  ),
}
