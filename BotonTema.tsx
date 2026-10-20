// Botón sol/luna de Negocios y Gestión. Enseña el icono del modo al que CAMBIA (luna en claro, sol en oscuro).
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cambiarTema, seguirDispositivo, temaActual } from './tema'

// La "ficha técnica" del botón: qué se le puede pasar desde fuera. El "?" quiere decir opcional.
type BotonTemaProps = {
  className?: string
}

export default function BotonTema({ className = 'boton-icono' }: BotonTemaProps) {
  const [tema, setTema] = useState(temaActual)
  useEffect(() => seguirDispositivo(setTema), [])
  const oscuro = tema === 'oscuro'
  return (
    <button type="button" className={`boton-tema ${className}`} onClick={() => setTema(cambiarTema())}
      aria-label={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} title={oscuro ? 'Modo claro' : 'Modo oscuro'}>
      {oscuro ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}
