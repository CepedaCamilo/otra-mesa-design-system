// La tarjeta de una sorpresa (fila de Descubrir y "Sorpresas destacadas"): foto, etiqueta "Quedan N", nombre del local,
// una línea de detalle, cuándo se recoge y el precio con el original tachado.
// No sabe nada de la API ni de los idiomas: recibe los textos ya preparados y la foto como pieza. Así sirve en la app,
// en el catálogo y en cualquier pantalla futura.
import type { ReactNode } from 'react'
import Etiqueta from './Etiqueta'

type TarjetaSorpresaProps = {
  nombre: string
  foto: ReactNode            // <img> o <picture> (la app elige AVIF/WebP y el tamaño justo)
  linea?: ReactNode          // "Sorpresa de la noche · ★ 4,6"
  cuando: ReactNode          // "Hoy 9:30–11:00 p. m. · 450 m"
  precio: string             // lo que se paga
  precioAntes?: string       // el precio original, tachado
  etiqueta?: ReactNode       // "Quedan 3"
  agotada?: boolean          // etiqueta en gris
  destacada?: boolean        // más grande: "Sorpresas destacadas"
  accion?: ReactNode         // botón encima de la foto (el corazón de favoritos)
  onAbrir: () => void
}

export default function TarjetaSorpresa({ nombre, foto, linea, cuando, precio, precioAntes, etiqueta, agotada = false, destacada = false, accion, onAbrir }: TarjetaSorpresaProps) {
  return (
    <article className={destacada ? 'tarjeta-h tarjeta-h--grande' : 'tarjeta-h'}>
      <button type="button" className="tarjeta-h-abrir" onClick={onAbrir}>
        <span className="tarjeta-h-foto">
          {foto}
          {etiqueta && <Etiqueta tono={agotada ? 'agotada' : 'aviso'}>{etiqueta}</Etiqueta>}
        </span>
        <span className="tarjeta-h-cuerpo">
          <span className="tarjeta-h-nombre">{nombre}</span>
          {linea && <span className="tarjeta-h-linea">{linea}</span>}
          <span className="tarjeta-h-pie">
            <span className="tarjeta-h-linea">{cuando}</span>
            <span className="tarjeta-precio">{precioAntes && <s>{precioAntes}</s>}<strong>{precio}</strong></span>
          </span>
        </span>
      </button>
      {accion && <span className="tarjeta-h-accion">{accion}</span>}
    </article>
  )
}
