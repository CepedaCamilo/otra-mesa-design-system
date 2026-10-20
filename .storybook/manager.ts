// La "piel" del catálogo (barra lateral y cabecera): la marca de Otra Mesa en vez de la de Storybook.
import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Otra Mesa · Design System',
    brandUrl: 'https://camilocepedadanies.com',
    brandImage: 'marca/logo.svg',
    brandTarget: '_blank',
    colorPrimary: '#2f6b4a',
    colorSecondary: '#2f6b4a',
    appBg: '#f3f4f2',
    appContentBg: '#ffffff',
    appBorderRadius: 12,
    textColor: '#1f2e26',
    barSelectedColor: '#2f6b4a',
  }),
})
