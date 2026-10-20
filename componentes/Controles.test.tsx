import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Segmentos from './Segmentos'
import Pestanas from './Pestanas'
import Filtro from './Filtro'
import Etiqueta from './Etiqueta'
import { fallosDeAccesibilidad } from '../pruebas/accesible'

describe('Segmentos', () => {
  it('marca la elegida y devuelve el valor con su tipo (aquí, número)', async () => {
    const cambiar = vi.fn()
    render(<Segmentos etiqueta="Periodo" opciones={[{ valor: 1, texto: '24 h' }, { valor: 7, texto: '7 días' }]} valor={1} onCambiar={cambiar} />)
    expect(screen.getByRole('group', { name: 'Periodo' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '24 h' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: '7 días' })).toHaveAttribute('aria-pressed', 'false')
    await userEvent.click(screen.getByRole('button', { name: '7 días' }))
    expect(cambiar).toHaveBeenCalledWith(7)
  })
  it('dentro de un formulario no lo envía, y "ancho" reparte columnas iguales', async () => {
    const enviar = vi.fn((e: Event) => e.preventDefault())
    const { container } = render(<form onSubmit={(e) => enviar(e.nativeEvent)}><Segmentos ancho etiqueta="Día" opciones={[{ valor: 'hoy', texto: 'Hoy' }, { valor: 'manana', texto: 'Mañana' }]} valor="hoy" onCambiar={() => {}} /></form>)
    await userEvent.click(screen.getByRole('button', { name: 'Mañana' }))
    expect(enviar).not.toHaveBeenCalled()
    expect(container.querySelector('.segmentos--ancho')).toHaveStyle({ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' })
  })
})

describe('Pestanas', () => {
  it('solo la elegida lleva aria-current', async () => {
    const cambiar = vi.fn()
    render(<Pestanas etiqueta="Categorías" opciones={[{ valor: 'todas', texto: 'Todo' }, { valor: 'dulces', texto: 'Dulces' }]} valor="todas" onCambiar={cambiar} />)
    expect(screen.getByRole('navigation', { name: 'Categorías' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Todo' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Dulces' })).not.toHaveAttribute('aria-current')
    await userEvent.click(screen.getByRole('button', { name: 'Dulces' }))
    expect(cambiar).toHaveBeenCalledWith('dulces')
  })
})

describe('Filtro', () => {
  it('se enciende y se apaga', async () => {
    const cambiar = vi.fn()
    const { rerender } = render(<Filtro activo={false} onCambiar={cambiar}>Vegetariano</Filtro>)
    await userEvent.click(screen.getByRole('button', { name: 'Vegetariano' }))
    expect(cambiar).toHaveBeenLastCalledWith(true)
    rerender(<Filtro activo onCambiar={cambiar}>Vegetariano</Filtro>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(screen.getByRole('button'))
    expect(cambiar).toHaveBeenLastCalledWith(false)
  })
})

describe('Etiqueta', () => {
  it('pone el tono como clase', () => {
    render(<><Etiqueta>Quedan 3</Etiqueta><Etiqueta tono="agotada">Agotada</Etiqueta></>)
    expect(screen.getByText('Quedan 3')).toHaveClass('pastilla')
    expect(screen.getByText('Quedan 3')).not.toHaveClass('pastilla--aviso')
    expect(screen.getByText('Agotada')).toHaveClass('pastilla', 'pastilla--agotada')
  })
})

it('controles sin fallos de accesibilidad', async () => {
  const { container } = render(<>
    <Segmentos etiqueta="Periodo" opciones={[{ valor: 1, texto: '24 h' }, { valor: 7, texto: '7 días' }]} valor={1} onCambiar={() => {}} />
    <Pestanas etiqueta="Categorías" opciones={[{ valor: 'todas', texto: 'Todo' }]} valor="todas" onCambiar={() => {}} />
    <Filtro activo onCambiar={() => {}}>Abierto ahora</Filtro>
  </>)
  expect(await fallosDeAccesibilidad(container)).toEqual([])
})
