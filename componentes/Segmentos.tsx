// Segmentos: elegir UNA opción entre pocas (2–4), como un interruptor: "Hoy · Mañana", "Reales · Con ejemplo", "1 · 7 · 30 días".
// La opción elegida se pinta en verde de marca y se anuncia como pulsada (aria-pressed).
// Genérico: el valor puede ser texto, número o sí/no, y el inspector de tipos comprueba que coincide con las opciones.
type Opcion<T> = { valor: T; texto: string }

type SegmentosProps<T extends string | number | boolean> = {
  opciones: Opcion<T>[]
  valor: T
  onCambiar: (valor: T) => void
  etiqueta: string        // nombre del grupo para lectores de pantalla: "Periodo"
  ancho?: boolean         // ocupa todo el ancho, columnas iguales (formularios en el móvil)
}

export default function Segmentos<T extends string | number | boolean>({ opciones, valor, onCambiar, etiqueta, ancho = false }: SegmentosProps<T>) {
  return (
    <div className={ancho ? 'segmentos segmentos--ancho' : 'segmentos'} role="group" aria-label={etiqueta}
      style={ancho ? { gridTemplateColumns: `repeat(${opciones.length}, minmax(0, 1fr))` } : undefined}>
      {opciones.map((o) => (
        <button key={String(o.valor)} type="button" aria-pressed={o.valor === valor} onClick={() => onCambiar(o.valor)}>{o.texto}</button>
      ))}
    </div>
  )
}
