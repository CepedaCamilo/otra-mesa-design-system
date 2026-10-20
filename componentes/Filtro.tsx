// Un filtro que se enciende y se apaga ("Abierto ahora", "Vegetariano"): pastilla con borde; encendido, en verde de marca.
// Se anuncia como botón pulsado o no (aria-pressed). Varios filtros pueden estar encendidos a la vez.
import type { ReactNode } from 'react'

type FiltroProps = {
  activo: boolean
  onCambiar: (activo: boolean) => void
  children: ReactNode
}

export default function Filtro({ activo, onCambiar, children }: FiltroProps) {
  return <button type="button" className="filtro" aria-pressed={activo} onClick={() => onCambiar(!activo)}>{children}</button>
}
