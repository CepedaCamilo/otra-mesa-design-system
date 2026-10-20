import { describe, expect, it } from 'vitest'
import { contraste, esColor, simular, valor } from './tokens'

describe('tokens leídos de tokens.css', () => {
  it('saca el valor de claro y de oscuro', () => {
    expect(valor('--marca', 'claro')).toBe('#2f6b4a')
    expect(valor('--marca', 'oscuro')).toBe('#6fbf92')
    expect(valor('--letra-base')).toBe('16px')
  })
  it('sigue los var(--otro) hasta el valor de verdad', () => {
    expect(valor('--estado-critico', 'claro')).toBe(valor('--peligro', 'claro'))
    expect(valor('--estado-critico', 'oscuro')).toBe('#f2806f')
  })
  it('lo que no cambia en oscuro, se hereda de claro', () => {
    expect(valor('--radio', 'oscuro')).toBe('16px')
  })
})

describe('contraste WCAG', () => {
  it('negro sobre blanco = 21:1 y un color consigo mismo = 1:1', () => {
    expect(contraste('#000000', '#ffffff')).toBeCloseTo(21, 5)
    expect(contraste('#2f6b4a', '#2f6b4a')).toBe(1)
  })
  it('las parejas que usan las apps pasan AA (y coinciden con lo documentado)', () => {
    expect(contraste(valor('--texto'), valor('--fondo'))).toBeCloseTo(14.2, 1)
    expect(contraste(valor('--sobre-invertido'), valor('--marca'))).toBeGreaterThanOrEqual(4.5)
    expect(contraste(valor('--sobre-invertido', 'oscuro'), valor('--marca', 'oscuro'))).toBeGreaterThanOrEqual(4.5)
    expect(contraste(valor('--sobre-acento-suave'), valor('--acento-suave'))).toBeGreaterThanOrEqual(4.5)
  })
})

describe('simulación de daltonismo', () => {
  it('devuelve un color válido y deja igual el gris', () => {
    expect(esColor(simular('#009456', 'deuteranopia'))).toBe(true)
    expect(simular('#808080', 'protanopia')).toBe('#808080')
  })
})
