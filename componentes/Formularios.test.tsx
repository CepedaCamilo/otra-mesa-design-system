import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Campo from './Campo'
import BotonGoogle from './BotonGoogle'
import TarjetaSorpresa from './TarjetaSorpresa'
import { fallosDeAccesibilidad } from '../pruebas/accesible'

describe('Campo', () => {
  it('une la etiqueta con su control: tocar la etiqueta enfoca el campo', async () => {
    render(<Campo etiqueta="Email"><input type="email" /></Campo>)
    const input = screen.getByLabelText('Email')
    await userEvent.click(screen.getByText('Email'))
    expect(input).toHaveFocus()
  })
  it('une la ayuda y el error al control y lo marca inválido', () => {
    render(<Campo etiqueta="Email" ayuda="Te mandamos un código" error="Ese email no parece válido"><input type="email" /></Campo>)
    const input = screen.getByLabelText('Email')
    expect(input).toHaveAccessibleDescription('Te mandamos un código Ese email no parece válido')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByRole('alert')).toHaveTextContent('Ese email no parece válido')
  })
  it('sin error, el control no está marcado', () => {
    render(<Campo etiqueta="Nombre"><input /></Campo>)
    expect(screen.getByLabelText('Nombre')).not.toHaveAttribute('aria-invalid')
  })
  it('dos campos en la misma pantalla nunca comparten id', () => {
    render(<><Campo etiqueta="A"><input /></Campo><Campo etiqueta="B"><input /></Campo></>)
    expect(screen.getByLabelText('A').id).not.toBe(screen.getByLabelText('B').id)
  })
  it('sin fallos de accesibilidad', async () => {
    const { container } = render(<Campo etiqueta="Email" ayuda="Ayuda" error="Error"><input type="email" /></Campo>)
    expect(await fallosDeAccesibilidad(container)).toEqual([])
  })
})

describe('BotonGoogle', () => {
  it('llama a onClick y pone la rayita de debajo (o no)', async () => {
    const clic = vi.fn()
    const { rerender } = render(<BotonGoogle onClick={clic} />)
    await userEvent.click(screen.getByRole('button', { name: 'Continuar con Google' }))
    expect(clic).toHaveBeenCalledOnce()
    expect(screen.getByText('o con tu email')).toBeInTheDocument()
    rerender(<BotonGoogle onClick={clic} separador={null} />)
    expect(screen.queryByText('o con tu email')).not.toBeInTheDocument()
  })
})

describe('TarjetaSorpresa', () => {
  const props = { nombre: 'Bunker Burgers', foto: <img src="x.jpg" alt="" />, cuando: 'Hoy 9:30–11:00 p. m.', precio: '$23.000', precioAntes: '$69.000', etiqueta: 'Quedan 3' }
  it('toda la tarjeta abre la ficha; el corazón es otro botón y no la abre', async () => {
    const abrir = vi.fn(), guardar = vi.fn()
    render(<TarjetaSorpresa {...props} onAbrir={abrir} accion={<button type="button" aria-label="Guardar" onClick={guardar}>♥</button>} />)
    await userEvent.click(screen.getByRole('button', { name: /Bunker Burgers/ }))
    expect(abrir).toHaveBeenCalledOnce()
    await userEvent.click(screen.getByRole('button', { name: 'Guardar' }))
    expect(guardar).toHaveBeenCalledOnce()
    expect(abrir).toHaveBeenCalledOnce()
  })
  it('enseña el precio con el original tachado y la etiqueta', () => {
    render(<TarjetaSorpresa {...props} onAbrir={() => {}} />)
    expect(screen.getByText('$69.000').tagName).toBe('S')
    expect(screen.getByText('Quedan 3')).toHaveClass('pastilla')
  })
  it('agotada pinta la etiqueta en gris; destacada usa la tarjeta grande', () => {
    const { container } = render(<TarjetaSorpresa {...props} agotada destacada onAbrir={() => {}} />)
    expect(screen.getByText('Quedan 3')).toHaveClass('pastilla--agotada')
    expect(container.querySelector('article')).toHaveClass('tarjeta-h--grande')
  })
  it('sin fallos de accesibilidad', async () => {
    const { container } = render(<TarjetaSorpresa {...props} onAbrir={() => {}} accion={<button type="button" aria-label="Guardar">♥</button>} />)
    expect(await fallosDeAccesibilidad(container)).toEqual([])
  })
})
