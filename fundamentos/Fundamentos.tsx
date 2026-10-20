// Las piezas de las páginas de fundamentos del catálogo (color, gráficos, letra, espacio y forma).
// Pintan cada token en claro Y en oscuro a la vez, con su valor real sacado de tokens.css.
import type { CSSProperties, ReactNode } from 'react'
import { DESCRIPCIONES, PAREJAS } from '../descripciones'
import { contraste, esColor, simular, valor, type Modo, type Vision } from './tokens'

const FONDO: Record<Modo, string> = { claro: valor('--fondo', 'claro'), oscuro: valor('--fondo', 'oscuro') }
const TEXTO: Record<Modo, string> = { claro: valor('--texto', 'claro'), oscuro: valor('--texto', 'oscuro') }
const fuente = "'Figtree Variable', system-ui, sans-serif"
const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace'

const caja: CSSProperties = { fontFamily: fuente, display: 'grid', gap: 10, margin: '16px 0 32px' }
const nombreToken: CSSProperties = { fontFamily: mono, fontSize: 12.5 }
const nota: CSSProperties = { fontSize: 13, color: '#5b635f', lineHeight: 1.4 }

function Muestra({ color, alto = 44, borde }: { color: string; alto?: number; borde?: string }) {
  return <div style={{ height: alto, borderRadius: 10, background: color, boxShadow: `inset 0 0 0 1px ${borde ?? 'rgb(0 0 0 / 0.08)'}` }} />
}

// Paleta de un grupo: una fila por token con muestra en claro, en oscuro y para qué sirve.
export function Paleta({ grupo }: { grupo: string }) {
  const tokens = Object.entries(DESCRIPCIONES[grupo] ?? {}).filter(([n]) => esColor(valor(n)))
  return (
    <div style={caja}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr 2fr', gap: 12, fontSize: 12, color: '#5b635f', textTransform: 'uppercase', letterSpacing: '.06em' }}>
        <span>Token</span><span>Light</span><span>Dark</span><span>Use</span>
      </div>
      {tokens.map(([n, [nombre, uso]]) => (
        <div key={n} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr 2fr', gap: 12, alignItems: 'center' }}>
          <div><div style={{ fontWeight: 600, fontSize: 14 }}>{nombre}</div><div style={nombreToken}>{n}</div></div>
          {(['claro', 'oscuro'] as const).map((m) => (
            <div key={m} style={{ background: FONDO[m], padding: 6, borderRadius: 14 }}>
              <Muestra color={valor(n, m)} borde={m === 'oscuro' ? 'rgb(255 255 255 / 0.12)' : undefined} />
              <div style={{ ...nombreToken, color: TEXTO[m], padding: '4px 2px 0' }}>{valor(n, m)}</div>
            </div>
          ))}
          <div style={nota}>{uso}</div>
        </div>
      ))}
    </div>
  )
}

// Tabla de contraste calculada (WCAG 2.2): cada pareja de texto y fondo que de verdad se usa, en claro y oscuro.
export function Contraste() {
  return (
    <div style={caja}>
      {PAREJAS.map(([t, f, para, minimo]) => (
        <div key={para} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 12, alignItems: 'center' }}>
          <div style={{ fontSize: 14 }}>{para}<div style={nombreToken}>{t} on {f}</div></div>
          {(['claro', 'oscuro'] as const).map((m) => {
            if (m === 'oscuro' && t === '--sobre-acento') return <div key={m} style={nota}>Light only (customer app)</div>
            const [ct, cf] = [valor(t, m), valor(f, m)]
            const r = contraste(ct, cf)
            return (
              <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ background: cf, color: ct, borderRadius: 999, padding: '6px 12px', fontWeight: 700, fontSize: 14, boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 0.1)' }}>Aa</span>
                <span style={{ fontSize: 14, fontVariantNumeric: 'tabular-nums' }}>{r.toFixed(1)}:1 {r >= minimo ? '✓' : '✗'}</span>
                <span style={nota}>{m === 'claro' ? 'light' : 'dark'} · needs {minimo}</span>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

const SERIES = ['--grafico-1', '--grafico-2', '--grafico-3', '--grafico-4', '--grafico-5', '--grafico-6']
const VISTAS: [Vision | null, string][] = [[null, 'Normal vision'], ['protanopia', 'Protanopia (red-blind)'], ['deuteranopia', 'Deuteranopia (green-blind)'], ['tritanopia', 'Tritanopia (blue-blind)']]

// La paleta "Caribe": los 6 colores en su orden fijo, y cómo los ve una persona daltónica (simulado).
export function PaletaGraficos({ modo = 'claro' }: { modo?: Modo }) {
  return (
    <div style={{ ...caja, background: FONDO[modo], color: TEXTO[modo], padding: 20, borderRadius: 18 }}>
      {VISTAS.map(([vision, titulo]) => (
        <div key={titulo} style={{ display: 'grid', gridTemplateColumns: '190px 1fr', gap: 14, alignItems: 'center' }}>
          <div style={{ fontSize: 13 }}>{titulo}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6 }}>
            {SERIES.map((s, i) => {
              const c = valor(s, modo)
              return <div key={s} style={{ height: 40, borderRadius: 8, background: vision ? simular(c, vision) : c, display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700, fontSize: 13, textShadow: '0 1px 2px rgb(0 0 0 / .45)' }}>{i + 1}</div>
            })}
          </div>
        </div>
      ))}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6, marginLeft: 204 }}>
        {SERIES.map((s) => <div key={s} style={{ ...nombreToken, fontSize: 11 }}>{valor(s, modo)}</div>)}
      </div>
    </div>
  )
}

// Escala de un solo tono para cantidades (mapas de calor).
export function EscalaGraficos() {
  const pasos = [100, 200, 300, 400, 500, 600, 700].map((p) => `--grafico-escala-${p}`)
  return (
    <div style={caja}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {pasos.map((p, i) => <div key={p} style={{ height: 48, background: valor(p), borderRadius: i === 0 ? '10px 0 0 10px' : i === 6 ? '0 10px 10px 0' : 0 }} />)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {pasos.map((p) => <div key={p} style={nombreToken}>{p.replace('--grafico-escala-', '')}<br />{valor(p)}</div>)}
      </div>
    </div>
  )
}

// Estados: significado reservado, siempre con icono + palabra.
export function Estados() {
  const estados: [string, string, string][] = [['--estado-bien', '✓', 'Running fine'], ['--estado-aviso', '!', 'Late'], ['--estado-serio', '▲', 'Failing'], ['--estado-critico', '✕', 'Down']]
  return (
    <div style={{ ...caja, gridTemplateColumns: '1fr 1fr' }}>
      {(['claro', 'oscuro'] as const).map((m) => (
        <div key={m} style={{ background: FONDO[m], color: TEXTO[m], padding: 16, borderRadius: 16, display: 'grid', gap: 10, boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / .06)' }}>
          {estados.map(([t, icono, palabra]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
              <span style={{ width: 24, height: 24, borderRadius: 999, background: valor(t, m), color: m === 'claro' ? '#fff' : '#0f1612', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 13 }}>{icono}</span>
              <span style={{ fontWeight: 600 }}>{palabra}</span>
              <span style={{ ...nombreToken, opacity: 0.7 }}>{t}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

// Escala de letra: cada tamaño con una frase de la marca.
export function EscalaLetra() {
  const tamanos = Object.entries(DESCRIPCIONES.Type ?? {}).filter(([n]) => n.startsWith('--letra-')).reverse()
  return (
    <div style={caja}>
      {tamanos.map(([n, [, uso]]) => {
        const px = valor(n)
        const grande = parseInt(px) >= 20
        return (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, alignItems: 'baseline', borderBottom: '1px solid #e6e8e5', paddingBottom: 10 }}>
            <div><div style={nombreToken}>{n}</div><div style={nota}>{px} · {uso}</div></div>
            <div style={{ fontFamily: fuente, fontSize: px, fontWeight: grande ? 750 : 400, color: '#1f2e26', lineHeight: 1.15, letterSpacing: n === '--letra-codigo' ? '0.2em' : undefined }}>
              {n === '--letra-codigo' ? 'K7MQ' : n === '--letra-cifra' ? '$51.000 saved' : 'Good food deserves another table'}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const fila = (n: string, uso: string, muestra: ReactNode) => (
  <div key={n} style={{ display: 'grid', gridTemplateColumns: '150px 70px 1fr 1.4fr', gap: 16, alignItems: 'center' }}>
    <span style={nombreToken}>{n}</span><span style={{ ...nombreToken, color: '#5b635f' }}>{valor(n)}</span>{muestra}<span style={nota}>{uso}</span>
  </div>
)

export function Espacios() {
  const tokens = Object.entries(DESCRIPCIONES.Space ?? {})
  return (
    <div style={caja}>
      {tokens.map(([n, [, uso]]) => {
        const px = parseInt(valor(n))
        const alto = n.startsWith('--alto')
        return fila(n, uso || ' ', <div style={alto
          ? { width: 140, height: px, borderRadius: 999, background: valor('--marca') }
          : { width: px * 3, height: 14, borderRadius: 4, background: valor('--grafico-escala-300') }} />)
      })}
      <div style={nota}>Space bars are drawn at 3× so the small steps stay visible.</div>
    </div>
  )
}

export function Radios() {
  return (
    <div style={caja}>
      {Object.entries(DESCRIPCIONES.Radius ?? {}).map(([n, [, uso]]) => fila(n, uso,
        <div style={{ width: 120, height: 64, background: valor('--superficie-2'), border: `2px solid ${valor('--marca')}`, borderRadius: valor(n) }} />))}
    </div>
  )
}

export function Sombras() {
  return (
    <div style={{ ...caja, gridTemplateColumns: '1fr 1fr' }}>
      {(['claro', 'oscuro'] as const).map((m) => (
        <div key={m} style={{ background: FONDO[m], color: TEXTO[m], padding: 24, borderRadius: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {Object.entries(DESCRIPCIONES.Shadow ?? {}).map(([n, [nombre]]) => (
            <div key={n} style={{ background: valor('--superficie', m), boxShadow: valor(n, m), borderRadius: 16, padding: 16, minHeight: 64 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{nombre}</div><div style={{ ...nombreToken, opacity: 0.7 }}>{n}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
