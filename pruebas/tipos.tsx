// Pruebas de TIPOS: no se ejecutan, las comprueba el inspector (npm run tipos).
// Cada línea marcada con @ts-expect-error TIENE que dar error; si un día deja de darlo, el inspector avisa.
// Así las reglas de la ficha técnica de los componentes no se pueden romper sin que nadie se entere.
import Boton from '../componentes/Boton'
import Segmentos from '../componentes/Segmentos'
import Estrellas from '../componentes/Estrellas'

export const bien = [
  <Boton key="1">Reservar</Boton>,
  <Boton key="2" tamano="pequeno">Valorar</Boton>,
  <Boton key="3" variante="icono" aria-label="Cerrar" tamano="grande">x</Boton>,
  <Segmentos key="4" etiqueta="Periodo" opciones={[{ valor: 1, texto: '24 h' }]} valor={1} onCambiar={() => {}} />,
]

export const mal = [
  // @ts-expect-error un botón de solo icono sin nombre para lectores de pantalla
  <Boton key="a" variante="icono">x</Boton>,
  // @ts-expect-error "grande" no existe en el botón principal
  <Boton key="b" tamano="grande">x</Boton>,
  // @ts-expect-error el secundario no tiene tamaños
  <Boton key="c" variante="secundario" tamano="pequeno">x</Boton>,
  // @ts-expect-error variante inventada
  <Boton key="d" variante="terciario">x</Boton>,
  // @ts-expect-error el valor elegido tiene que ser del mismo tipo que las opciones
  <Segmentos key="e" etiqueta="Periodo" opciones={[{ valor: 1, texto: '24 h' }]} valor="1" onCambiar={() => {}} />,
  // @ts-expect-error unas estrellas sin frase para lectores de pantalla
  <Estrellas key="f" valor={4} />,
]
