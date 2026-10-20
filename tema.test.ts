// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { aplicarTema, cambiarTema, temaActual, temaElegido } from './tema'

const dispositivo = (oscuro: boolean) => vi.stubGlobal('matchMedia', (q: string) => ({ matches: oscuro && q.includes('dark'), addEventListener() {}, removeEventListener() {} }))

describe('tema claro / oscuro', () => {
  beforeEach(() => { localStorage.clear(); document.head.innerHTML = '' })

  it('sin elección, sigue al dispositivo', () => {
    dispositivo(true)
    expect(temaElegido()).toBeNull()
    expect(temaActual()).toBe('oscuro')
    dispositivo(false)
    expect(temaActual()).toBe('claro')
  })
  it('aplicar pone data-tema y el color de la barra del navegador', () => {
    aplicarTema('oscuro')
    expect(document.documentElement.dataset.tema).toBe('oscuro')
    expect(document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.content).toBe('#0f1612')
  })
  it('al pulsar el sol/luna cambia y lo recuerda (aunque el dispositivo diga otra cosa)', () => {
    dispositivo(false)
    expect(cambiarTema()).toBe('oscuro')
    expect(localStorage.getItem('om-tema-panel')).toBe('oscuro')
    expect(temaActual()).toBe('oscuro')
  })
  it('un valor raro guardado no rompe nada', () => {
    localStorage.setItem('om-tema-panel', 'violeta')
    expect(temaElegido()).toBeNull()
  })
})
