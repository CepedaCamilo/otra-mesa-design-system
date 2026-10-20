import { describe, expect, it, vi } from 'vitest'
import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Estrellas from './Estrellas'
import ElegirEstrellas from './ElegirEstrellas'
import ResumenValoraciones from './ResumenValoraciones'
import { fallosDeAccesibilidad } from '../pruebas/accesible'

describe('Estrellas', () => {
  it('se anuncia como una imagen con su frase, no como "★★★★"', () => {
    render(<Estrellas valor={4} etiqueta="4 de 5 estrellas" />)
    const e = screen.getByRole('img', { name: '4 de 5 estrellas' })
    expect(e.textContent).toBe('★★★★★')
    expect(e.querySelector('.estrellas-vacias')?.textContent).toBe('★')
  })
  it('se queda entre 0 y 5 y puede no pintar las vacías', () => {
    render(<><Estrellas valor={9} etiqueta="nueve" /><Estrellas valor={2} vacias={false} etiqueta="dos" /></>)
    expect(screen.getByRole('img', { name: 'nueve' }).textContent).toBe('★★★★★')
    expect(screen.getByRole('img', { name: 'dos' }).textContent).toBe('★★')
  })
})

function Elegir({ alCambiar = () => {} }: { alCambiar?: (n: number) => void }) {
  const [v, setV] = useState(0)
  return <ElegirEstrellas valor={v} onCambiar={(n) => { setV(n); alCambiar(n) }} etiqueta="¿Qué tal estuvo?" etiquetaDe={(n) => `${n} estrellas`} />
}

describe('ElegirEstrellas', () => {
  it('es un grupo de opciones con 5 estrellas y ninguna elegida al empezar', () => {
    render(<Elegir />)
    expect(screen.getByRole('radiogroup', { name: '¿Qué tal estuvo?' })).toBeInTheDocument()
    const radios = screen.getAllByRole('radio')
    expect(radios).toHaveLength(5)
    radios.forEach((r) => expect(r).toHaveAttribute('aria-checked', 'false'))
  })
  it('se elige con el dedo', async () => {
    const alCambiar = vi.fn()
    render(<Elegir alCambiar={alCambiar} />)
    await userEvent.click(screen.getByRole('radio', { name: '4 estrellas' }))
    expect(alCambiar).toHaveBeenLastCalledWith(4)
    expect(screen.getByRole('radio', { name: '4 estrellas' })).toHaveAttribute('aria-checked', 'true')
  })
  it('con teclado: Tab entra una vez y las flechas cambian la nota (sin pasar de 1 a 5)', async () => {
    render(<Elegir />)
    await userEvent.tab()
    expect(screen.getByRole('radio', { name: '1 estrellas' })).toHaveFocus()
    await userEvent.keyboard('{ArrowRight}{ArrowRight}')
    expect(screen.getByRole('radio', { name: '2 estrellas' })).toHaveAttribute('aria-checked', 'true')
    await userEvent.keyboard('{End}{ArrowRight}')
    expect(screen.getByRole('radio', { name: '5 estrellas' })).toHaveFocus()
    await userEvent.keyboard('{Home}{ArrowLeft}')
    expect(screen.getByRole('radio', { name: '1 estrellas' })).toHaveAttribute('aria-checked', 'true')
    // solo la elegida está en el orden del tabulador
    expect(screen.getAllByRole('radio').filter((r) => r.getAttribute('tabindex') === '0')).toHaveLength(1)
  })
  it('sin fallos de accesibilidad', async () => {
    const { container } = render(<Elegir />)
    expect(await fallosDeAccesibilidad(container)).toEqual([])
  })
})

describe('ResumenValoraciones', () => {
  const props = { titulo: 'Cómo lo valoran', nota: '4,6', etiquetaNota: '4,6 de 5', etiquetaBarra: (n: number, c: number) => `${n} estrellas: ${c}` }
  it('mide las barras contra la fila más alta, no contra el total', () => {
    const { container } = render(<ResumenValoraciones {...props} reparto={[0, 1, 1, 7, 14]} />)
    const anchos = [...container.querySelectorAll<HTMLElement>('.valoradas-barra > span')].map((s) => s.style.width)
    expect(anchos[0]).toBe('100%') // 5★ = 14, la más alta
    expect(anchos[1]).toBe('50%')  // 4★ = 7
    expect(anchos[4]).toBe('0%')   // 1★ = 0
    expect(screen.getByRole('listitem', { name: '5 estrellas: 14' })).toBeInTheDocument()
  })
  it('sin reparto, solo la nota; el lector oye la frase completa', () => {
    render(<ResumenValoraciones {...props} />)
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
    expect(screen.getByText('4,6 de 5')).toHaveClass('solo-lector')
  })
  it('sin fallos de accesibilidad', async () => {
    const { container } = render(<ResumenValoraciones {...props} reparto={[0, 1, 1, 7, 14]} />)
    expect(await fallosDeAccesibilidad(container)).toEqual([])
  })
})
