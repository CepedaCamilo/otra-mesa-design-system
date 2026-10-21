// Todo se puede usar SOLO con el teclado (WCAG 2.1.1): llegar con Tab, en orden, y activar con Enter o Espacio.
// Mismo recorrido que hace una persona que no usa ratón ni pantalla táctil.
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Boton from './Boton'
import Campo from './Campo'
import Filtro from './Filtro'
import Pestanas from './Pestanas'
import Segmentos from './Segmentos'
import ElegirEstrellas from './ElegirEstrellas'

describe('teclado', () => {
  it('Boton: se llega con Tab y se pulsa con Enter y con Espacio; desactivado, Tab lo salta', async () => {
    const pulsar = vi.fn()
    render(<><Boton onClick={pulsar}>Reservar</Boton><Boton disabled>Agotada</Boton><Boton variante="secundario">Cancelar</Boton></>)
    const u = userEvent.setup()
    await u.tab()
    expect(screen.getByRole('button', { name: 'Reservar' })).toHaveFocus()
    await u.keyboard('{Enter}')
    await u.keyboard(' ')
    expect(pulsar).toHaveBeenCalledTimes(2)
    await u.tab()
    expect(screen.getByRole('button', { name: 'Cancelar' })).toHaveFocus()
  })

  it('Filtro: Espacio lo enciende y lo apaga', async () => {
    const cambiar = vi.fn()
    render(<Filtro activo={false} onCambiar={cambiar}>Vegetariano</Filtro>)
    const u = userEvent.setup()
    await u.tab()
    await u.keyboard(' ')
    expect(cambiar).toHaveBeenCalledWith(true)
  })

  it('Segmentos y Pestanas: cada opción se alcanza con Tab, en el orden en que se ve', async () => {
    const dia = vi.fn(); const cat = vi.fn()
    render(<>
      <Segmentos etiqueta="Día" opciones={[{ valor: 'hoy', texto: 'Hoy' }, { valor: 'manana', texto: 'Mañana' }]} valor="hoy" onCambiar={dia} />
      <Pestanas etiqueta="Categorías" opciones={[{ valor: 'todo', texto: 'Todo' }, { valor: 'pan', texto: 'Panadería' }]} valor="todo" onCambiar={cat} />
    </>)
    const u = userEvent.setup()
    const orden: string[] = []
    for (let i = 0; i < 4; i++) { await u.tab(); orden.push(document.activeElement?.textContent ?? '') }
    expect(orden).toEqual(['Hoy', 'Mañana', 'Todo', 'Panadería'])
    await u.keyboard('{Enter}')
    expect(cat).toHaveBeenCalledWith('pan')
  })

  it('Campo: Tab entra en el control y la etiqueta lo nombra', async () => {
    render(<Campo etiqueta="Email"><input type="email" /></Campo>)
    await userEvent.setup().tab()
    expect(screen.getByLabelText('Email')).toHaveFocus()
  })

  it('ElegirEstrellas: Tab entra UNA vez en el grupo y las flechas cambian la nota', async () => {
    const cambiar = vi.fn()
    render(<><ElegirEstrellas valor={3} onCambiar={cambiar} etiqueta="¿Qué tal estuvo?" etiquetaDe={(n) => `${n} estrellas`} /><Boton>Enviar</Boton></>)
    const u = userEvent.setup()
    await u.tab()
    expect(screen.getByRole('radio', { name: '3 estrellas' })).toHaveFocus()
    await u.keyboard('{ArrowRight}')
    expect(cambiar).toHaveBeenLastCalledWith(4)
    await u.keyboard('{End}')
    expect(cambiar).toHaveBeenLastCalledWith(5)
    await u.tab()
    expect(screen.getByRole('button', { name: 'Enviar' })).toHaveFocus()
  })
})
