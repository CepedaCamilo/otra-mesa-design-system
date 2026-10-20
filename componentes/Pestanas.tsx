// Pestañas de texto que se quedan pegadas arriba al bajar (categorías de Descubrir y Explorar, como las secciones de la
// carta de Yaku). La elegida va en negrita con una raya terracota debajo; las demás, en gris. Se deslizan si no caben.
type PestanasProps<T extends string> = {
  opciones: { valor: T; texto: string }[]
  valor: T
  onCambiar: (valor: T) => void
  etiqueta: string           // nombre del grupo para lectores de pantalla
}

export default function Pestanas<T extends string>({ opciones, valor, onCambiar, etiqueta }: PestanasProps<T>) {
  return (
    <nav className="pestanas" aria-label={etiqueta}>
      {opciones.map((o) => (
        <button key={o.valor} type="button" aria-current={o.valor === valor ? 'true' : undefined} onClick={() => onCambiar(o.valor)}>{o.texto}</button>
      ))}
    </nav>
  )
}
