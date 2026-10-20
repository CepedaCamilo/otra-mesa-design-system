// La piel de Yaku: sus parejas de colores pasan AA en claro y en oscuro, y los dos bloques oscuros dicen lo mismo.
import { describe, expect, it } from 'vitest'
import css from './yaku.css?raw'
import { contraste } from '../fundamentos/tokens'

// Lee las variables de un bloque: el que empieza por "inicio" (hasta su llave de cierre).
function bloque(inicio: string): Record<string, string> {
  const desde = css.indexOf(inicio)
  expect(desde).toBeGreaterThan(-1)
  const cuerpo = css.slice(css.indexOf('{', desde) + 1, css.indexOf('}', desde))
  return Object.fromEntries([...cuerpo.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map((m) => [m[1]!, m[2]!.trim()]))
}
const claro = bloque("[data-marca='yaku'] {")
const oscuroMovil = bloque(":root:not([data-tema='claro'])[data-marca='yaku']")
const oscuro = { ...claro, ...bloque(":root[data-tema='oscuro'][data-marca='yaku']") }

describe('marca Yaku', () => {
  it('el oscuro del móvil y el del sol/luna son el mismo', () => {
    expect(oscuroMovil).toEqual(bloque(":root[data-tema='oscuro'][data-marca='yaku']"))
  })
  it.each([['claro', claro], ['oscuro', oscuro]] as const)('las parejas de texto pasan AA en %s', (_, t) => {
    const fondo = t['--fondo']!
    for (const texto of ['--texto', '--suave', '--aji-texto', '--vegan', '--veggie', '--peligro']) {
      expect(contraste(t[texto]!, fondo), texto).toBeGreaterThanOrEqual(4.5)
    }
    expect(contraste(t['--sobre-aji']!, t['--aji']!)).toBeGreaterThanOrEqual(4.5)         // botón principal
    expect(contraste(t['--sobre-invertido']!, t['--invertido']!)).toBeGreaterThanOrEqual(4.5) // idioma elegido
  })
})
