// Lo que lleva cada historia del catálogo: la letra, los tokens, las piezas compartidas y el interruptor claro/oscuro.
import type { Preview } from '@storybook/react-vite'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import '@fontsource-variable/figtree'
import '../tokens.css'
import '../components.css'
import './catalogo.css'

const preview: Preview = {
  decorators: [
    // Igual que en Negocios y Gestión: <html data-tema="claro|oscuro">
    withThemeByDataAttribute({ themes: { Light: 'claro', Dark: 'oscuro' }, defaultTheme: 'Light', attributeName: 'data-tema' }),
  ],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    // Si una historia no pasa el revisor de accesibilidad, sale en rojo (no solo un aviso).
    a11y: { test: 'error' },
    options: { storySort: { order: ['Introduction', 'Foundations', ['Colour', 'Charts', 'Typography', 'Space & shape'], 'Components'] } },
  },
  tags: ['autodocs'],
}
export default preview
