// Lo que lleva cada historia del catálogo: las letras, los tokens, las piezas compartidas, el interruptor claro/oscuro
// y el de MARCA (1.10.0): Otra Mesa o Yaku. Mismos componentes; la marca solo cambia la piel (marcas/yaku.css).
import type { Preview } from '@storybook/react-vite'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import '@fontsource-variable/figtree'
import '@fontsource/jost/400.css'
import '@fontsource/jost/500.css'
import '@fontsource/jost/600.css'
import '../tokens.css'
import '../components.css'
import '../marcas/yaku.css'
import './catalogo.css'

const preview: Preview = {
  globalTypes: {
    marca: {
      description: 'Brand',
      toolbar: { title: 'Brand', icon: 'paintbrush', dynamicTitle: true, items: [{ value: 'otra-mesa', title: 'Otra Mesa' }, { value: 'yaku', title: 'Yaku' }] },
    },
  },
  initialGlobals: { marca: 'otra-mesa' },
  decorators: [
    // Igual que en la app de Yaku: <html data-marca="yaku">. Una historia puede fijar la suya (parameters.marca).
    (Historia, { globals, parameters }) => {
      const marca = (parameters.marca as string | undefined) ?? (globals.marca as string | undefined) ?? 'otra-mesa'
      if (marca === 'yaku') document.documentElement.dataset.marca = 'yaku'
      else delete document.documentElement.dataset.marca
      return <Historia />
    },
    // Igual que en Negocios y Gestión: <html data-tema="claro|oscuro">
    withThemeByDataAttribute({ themes: { Light: 'claro', Dark: 'oscuro' }, defaultTheme: 'Light', attributeName: 'data-tema' }),
  ],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    // Si una historia no pasa el revisor de accesibilidad, sale en rojo (no solo un aviso).
    a11y: { test: 'error' },
    options: { storySort: { order: ['Introduction', 'Brands', 'Foundations', ['Colour', 'Charts', 'Typography', 'Space & shape'], 'Components'] } },
  },
  tags: ['autodocs'],
}
export default preview
