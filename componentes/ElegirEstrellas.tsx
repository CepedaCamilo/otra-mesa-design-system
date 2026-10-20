// Estrellas para PONER una nota (de 1 a 5): un grupo de opciones de verdad (radiogroup).
// Teclado como manda la norma: Tab entra en el grupo una sola vez y las flechas cambian la nota.
// Cada estrella mide 44 × 44 px (tamaño cómodo para el dedo).
import { useRef, type KeyboardEvent } from 'react'
import { Star } from 'lucide-react'

type ElegirEstrellasProps = {
  valor: number                      // 0 = aún sin elegir
  onCambiar: (n: number) => void
  etiqueta: string                   // nombre del grupo: "¿Qué tal estuvo?"
  etiquetaDe: (n: number) => string  // nombre de cada estrella: "4 estrellas"
}

export default function ElegirEstrellas({ valor, onCambiar, etiqueta, etiquetaDe }: ElegirEstrellasProps) {
  const grupo = useRef<HTMLDivElement>(null)
  const ir = (n: number) => {
    const destino = Math.max(1, Math.min(5, n))
    onCambiar(destino)
    grupo.current?.querySelectorAll('button')[destino - 1]?.focus()
  }
  const teclas = (e: KeyboardEvent) => {
    const paso = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 }[e.key]
    if (paso) { e.preventDefault(); ir((valor || 0) + paso) }
    if (e.key === 'Home') { e.preventDefault(); ir(1) }
    if (e.key === 'End') { e.preventDefault(); ir(5) }
  }
  return (
    <div className="valorar-estrellas" role="radiogroup" aria-label={etiqueta} ref={grupo} onKeyDown={teclas}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} type="button" role="radio" aria-checked={valor === n} aria-label={etiquetaDe(n)}
          tabIndex={valor === n || (valor === 0 && n === 1) ? 0 : -1} onClick={() => onCambiar(n)}>
          <Star size={28} aria-hidden="true" className={n <= valor ? 'llena' : ''} />
        </button>
      ))}
    </div>
  )
}
