// El Campo del sistema con la piel de Yaku: la nota para la cocina.
import type { Meta, StoryObj } from '@storybook/react-vite'
import Campo from '../../componentes/Campo'

const meta = {
  title: 'Components/Campo',
  component: Campo,
  parameters: {
    docs: {
      description: {
        component: 'The same `Campo` as in Otra Mesa, in Yaku’s skin: the label is linked to its control, help and errors are announced, and the text is 16 px so iOS never zooms in. In Yaku it carries the guest’s note — highlighted again on the kitchen screen so nobody misses *“no coriander”*.',
      },
    },
  },
  args: { etiqueta: 'Note for the kitchen', children: <input placeholder="e.g. no coriander" maxLength={200} /> },
  decorators: [(Historia) => <div style={{ width: 340 }}><Historia /></div>],
} satisfies Meta<typeof Campo>

export default meta
type Story = StoryObj<typeof meta>

export const Note: Story = { name: 'Campo · note for the kitchen' }
export const WithHelp: Story = { name: 'Campo · with help', args: { ayuda: 'Allergies? Tell the waiter too.' } }
export const WithError: Story = { name: 'Campo · with error', args: { children: <input defaultValue="" />, error: 'Please write a short note.' } }
