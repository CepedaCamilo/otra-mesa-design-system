// Storybook = el CATÁLOGO VIVO del sistema de diseño: cada componente de verdad, con sus variantes, en claro y oscuro.
// Mac:  npm run catalogo          → http://localhost:6006
//       npm run catalogo:compilar → carpeta paquetes/diseno/catalogo/ (web estática para publicar)
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../componentes/**/*.mdx', '../fundamentos/**/*.mdx', '../componentes/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-docs', // página de documentación por componente
    '@storybook/addon-a11y', // revisor de accesibilidad (axe) en cada historia
    '@storybook/addon-themes', // interruptor claro / oscuro
  ],
  // El logo sale de la carpeta de la app del cliente (no se copia: una sola fuente).
  staticDirs: ['../public'],
  core: { disableTelemetry: true, disableWhatsNewNotifications: true }, // sin datos de uso ni avisos de novedades
}
export default config
