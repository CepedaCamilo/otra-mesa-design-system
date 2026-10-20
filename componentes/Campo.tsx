// Un campo de formulario completo: etiqueta, el control (input, select o textarea), una ayuda y el error.
// Lo que hace por ti (para que no se olvide nunca):
// · une la etiqueta con su control (htmlFor + id), así tocar la etiqueta enfoca el campo;
// · une la ayuda y el error al control (aria-describedby) y marca el control como inválido (aria-invalid);
// · el texto del control a 16 px: el iPhone no hace zoom al escribir.
import { cloneElement, isValidElement, useId, type ReactElement, type ReactNode } from 'react'

type Control = ReactElement<{ id?: string; 'aria-describedby'?: string; 'aria-invalid'?: boolean }>

type CampoProps = {
  etiqueta: ReactNode
  children: Control          // <input …/>, <select …/> o <textarea …/>
  ayuda?: ReactNode          // "Te mandamos un código de 6 cifras"
  error?: ReactNode          // "Ese email no parece válido"
}

export default function Campo({ etiqueta, children, ayuda, error }: CampoProps) {
  const id = useId()
  const describe = [ayuda && `${id}-ayuda`, error && `${id}-error`].filter(Boolean).join(' ') || undefined
  const control = isValidElement(children)
    ? cloneElement(children, { id, 'aria-describedby': describe, 'aria-invalid': error ? true : undefined })
    : children
  return (
    <div className="campo">
      <label htmlFor={id}>{etiqueta}</label>
      {control}
      {ayuda && <p className="campo-ayuda" id={`${id}-ayuda`}>{ayuda}</p>}
      {error && <p className="campo-error" id={`${id}-error`} role="alert">{error}</p>}
    </div>
  )
}
