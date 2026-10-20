import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Boton from './Boton'
import { fallosDeAccesibilidad } from '../pruebas/accesible'

describe('Boton', () => {
  it('es principal por defecto y no envía formularios sin querer (type="button")', () => {
    render(<Boton>Reservar</Boton>)
    const b = screen.getByRole('button', { name: 'Reservar' })
    expect(b).toHaveClass('boton-principal')
    expect(b).toHaveAttribute('type', 'button')
  })

  it('pone las clases de cada variante y tamaño', () => {
    render(<><Boton variante="secundario" ancho>A</Boton><Boton tamano="pequeno">B</Boton><Boton variante="icono" tamano="grande" aria-label="Cerrar">x</Boton></>)
    expect(screen.getByText('A')).toHaveClass('boton-secundario', 'boton-ancho')
    expect(screen.getByText('B')).toHaveClass('boton-principal', 'boton-principal--pequeno')
    expect(screen.getByRole('button', { name: 'Cerrar' })).toHaveClass('boton-icono', 'boton-icono--grande')
  })

  it('con type="submit" envía su formulario', async () => {
    const enviar = vi.fn((e: SubmitEvent) => e.preventDefault())
    render(<form onSubmit={(e) => enviar(e.nativeEvent as SubmitEvent)}><Boton type="submit">Entrar</Boton></form>)
    await userEvent.click(screen.getByRole('button', { name: 'Entrar' }))
    expect(enviar).toHaveBeenCalledOnce()
  })

  it('desactivado no responde al clic', async () => {
    const clic = vi.fn()
    render(<Boton disabled onClick={clic}>Reservar</Boton>)
    await userEvent.click(screen.getByRole('button'))
    expect(clic).not.toHaveBeenCalled()
  })

  it('sin fallos de accesibilidad', async () => {
    const { container } = render(<><Boton>Reservar</Boton><Boton variante="icono" aria-label="Cerrar">x</Boton></>)
    expect(await fallosDeAccesibilidad(container)).toEqual([])
  })
})
