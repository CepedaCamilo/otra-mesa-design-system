// Estrellas para LEER una nota: ★★★★☆ (las vacías en gris).
// "etiqueta" es obligatoria: un lector de pantalla no lee bien "★★★★"; con ella dice "4 de 5 estrellas".
type EstrellasProps = {
  valor: number          // 0–5, entero
  etiqueta: string       // "4 de 5 estrellas" (en el idioma de la app)
  vacias?: boolean       // pintar las que faltan hasta 5 (por defecto sí)
}

export default function Estrellas({ valor, etiqueta, vacias = true }: EstrellasProps) {
  const n = Math.max(0, Math.min(5, Math.round(valor)))
  return (
    <span className="estrellas" role="img" aria-label={etiqueta}>
      {'★'.repeat(n)}
      {vacias && <span className="estrellas-vacias">{'★'.repeat(5 - n)}</span>}
    </span>
  )
}
