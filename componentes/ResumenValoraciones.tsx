// "Cómo lo valoran": la nota grande y, debajo, cuántas personas dieron 5, 4, 3, 2 y 1 estrellas.
// Las barras se miden contra la fila más alta (no contra el total), para que las diferencias se vean.
import { Star } from 'lucide-react'

type ResumenValoracionesProps = {
  titulo: string                                   // "Cómo lo valoran"
  subtitulo?: string                               // "Según 23 valoraciones"
  nota: string                                     // ya formateada: "4,6"
  etiquetaNota: string                             // "4,6 de 5"
  reparto?: number[]                               // [1★, 2★, 3★, 4★, 5★]; sin él, solo la nota
  etiquetaBarra: (estrellas: number, cuantas: number) => string // "5 estrellas: 14"
}

export default function ResumenValoraciones({ titulo, subtitulo, nota, etiquetaNota, reparto, etiquetaBarra }: ResumenValoracionesProps) {
  const mayor = reparto ? Math.max(...reparto, 1) : 1
  return (
    <section className="valoradas">
      <div className="valoradas-cabecera">
        <div>
          <h2>{titulo}</h2>
          {subtitulo && <p className="texto-suave">{subtitulo}</p>}
        </div>
        {/* La cifra se ve; el lector de pantalla oye la frase completa ("4,6 de 5") */}
        <p className="valoradas-nota"><Star size={22} aria-hidden="true" /> <span aria-hidden="true">{nota}</span><span className="solo-lector">{etiquetaNota}</span></p>
      </div>
      {reparto && (
        <ul className="valoradas-barras">
          {[5, 4, 3, 2, 1].map((n) => {
            const cuantas = reparto[n - 1] ?? 0
            return (
              <li key={n} aria-label={etiquetaBarra(n, cuantas)}>
                <span>{n} <Star size={12} aria-hidden="true" /></span>
                <span className="valoradas-barra"><span style={{ width: `${(cuantas / mayor) * 100}%` }} /></span>
                <span className="valoradas-cuenta">{cuantas}</span>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
