// El botón de Otra Mesa, UNA sola pieza para las 3 apps (fase 1.2 de la ruta 2).
// De momento pone las mismas clases de siempre (boton-principal, boton-secundario…), así cada app se ve igual que antes.
// Más adelante juntaremos también el CSS (hoy está repetido en cada app, con pequeñas diferencias).
//
// Uso:
//   <Boton onClick={…}>Reservar</Boton>                          → principal (verde)
//   <Boton variante="secundario">Cancelar</Boton>                 → con borde
//   <Boton variante="icono" aria-label="Cerrar"><X /></Boton>      → redondo, solo icono (el nombre es OBLIGATORIO)
//   <Boton type="submit" ancho>Entrar</Boton>                      → dentro de un formulario, a todo el ancho
import type { ComponentProps } from 'react'

// Todo lo que acepta un <button> normal (onClick, disabled, type…), más "ancho".
type Comun = ComponentProps<'button'> & {
  ancho?: boolean
}

// La ficha técnica cambia según la variante: el inspector de tipos no deja mezclar cosas que no existen.
// · "pequeno" solo existe en el principal; "grande", solo en el icono.
// · Un botón de solo icono no tiene texto: sin aria-label, quien usa lector de pantalla no sabría qué hace → obligatorio.
type BotonProps = Comun & (
  | { variante?: 'principal'; tamano?: 'normal' | 'pequeno' }
  | { variante: 'secundario'; tamano?: never }
  | { variante: 'icono'; tamano?: 'normal' | 'grande'; 'aria-label': string }
)

export default function Boton({ variante = 'principal', tamano, ancho = false, className, type = 'button', ...resto }: BotonProps) {
  const clases = [
    variante === 'principal' && 'boton-principal',
    variante === 'principal' && tamano === 'pequeno' && 'boton-principal--pequeno',
    variante === 'secundario' && 'boton-secundario',
    variante === 'icono' && 'boton-icono',
    variante === 'icono' && tamano === 'grande' && 'boton-icono--grande',
    ancho && 'boton-ancho',
    className,
  ].filter(Boolean).join(' ')

  // type="button" por defecto: un botón NO envía el formulario sin querer. Para enviar, se pide: type="submit".
  return <button type={type} className={clases} {...resto} />
}
