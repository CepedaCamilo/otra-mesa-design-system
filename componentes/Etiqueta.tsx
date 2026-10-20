// Etiqueta pequeña en forma de pastilla: "Quedan 3", "Vegetariano", "Agotada".
// · aviso (por defecto): melocotón con texto terracota oscuro (5,5:1) — llama la atención sin gritar.
// · blanca: sobre fotos.  · agotada: gris con texto blanco (4,9:1).
import type { ComponentProps } from 'react'

type EtiquetaProps = ComponentProps<'span'> & {
  tono?: 'aviso' | 'blanca' | 'agotada'
}

export default function Etiqueta({ tono = 'aviso', className, ...resto }: EtiquetaProps) {
  const clases = ['pastilla', tono !== 'aviso' && `pastilla--${tono}`, className].filter(Boolean).join(' ')
  return <span className={clases} {...resto} />
}
