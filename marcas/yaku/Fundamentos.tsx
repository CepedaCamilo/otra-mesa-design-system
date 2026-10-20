// Fundamentos de Yaku, leídos TAL CUAL de marcas/yaku.css: si cambia un color allí, cambia aquí.
import css from '../yaku.css?raw'
import { contraste } from '../../fundamentos/tokens'

const variables = (inicio: string): Record<string, string> => {
  const desde = css.indexOf(inicio)
  const cuerpo = css.slice(css.indexOf('{', desde) + 1, css.indexOf('}', desde)).replace(/\/\*[\s\S]*?\*\//g, '')
  return Object.fromEntries([...cuerpo.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1]!, m[2]!.trim()]))
}
const claro = variables("[data-marca='yaku'] {")
const oscuro = { ...claro, ...variables(":root[data-tema='oscuro'][data-marca='yaku']") }
const MODOS = [['Light', claro], ['Dark', oscuro]] as const

const COLORES: [string, string][] = [
  ['--fondo', 'Canvas (light: with the restaurant’s texture)'], ['--superficie', 'Cards and fields'], ['--superficie-2', 'Quiet fills: counter, language switch'],
  ['--linea', 'Lines and borders'], ['--texto', 'Text'], ['--suave', 'Secondary text'], ['--aji', 'Ají amarillo: the next step, always'],
  ['--aji-texto', 'Ají as text'], ['--vegan', 'Vegan'], ['--veggie', 'Vegetarian'], ['--peligro', 'Errors'],
]
const PAREJAS: [string, string, string][] = [
  ['--texto', '--fondo', 'Text'], ['--suave', '--fondo', 'Secondary text'], ['--aji-texto', '--fondo', 'Ají as text'],
  ['--sobre-aji', '--aji', 'Primary button'], ['--vegan', '--fondo', 'Vegan'], ['--veggie', '--fondo', 'Vegetarian'], ['--peligro', '--fondo', 'Error'],
]
const mono = { fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: '#1a1714' }
const suave = { color: '#5e554c' } // las páginas de documentación son siempre claras
const solido = (v: string) => (v.startsWith('#') ? v : v.replace(/\s*\/\s*[\d.]+\)/, ')')) // las superficies translúcidas, sin transparencia para la muestra

export function Paleta() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 16 }}>
      {COLORES.map(([n, uso]) => (
        <div key={n}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: 12, overflow: 'hidden', boxShadow: '0 0 0 1px rgb(0 0 0 / .08)' }}>
            {MODOS.map(([m, t]) => <div key={m} title={`${m}: ${t[n]}`} style={{ height: 56, background: solido(t[n]!) }} />)}
          </div>
          <div style={{ ...mono, marginTop: 6 }}>{n}</div>
          <div style={{ ...mono, ...suave }}>{claro[n]} · {oscuro[n]}</div>
          <div style={{ fontSize: 13, ...suave }}>{uso}</div>
        </div>
      ))}
    </div>
  )
}

export function Contraste() {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 14 }}>
      <thead><tr><th style={{ textAlign: 'left' }}>Pair</th>{MODOS.map(([m]) => <th key={m} style={{ textAlign: 'left' }}>{m}</th>)}</tr></thead>
      <tbody>
        {PAREJAS.map(([t, f, uso]) => (
          <tr key={uso} style={{ borderTop: '1px solid rgb(0 0 0 / .08)' }}>
            <td style={{ padding: '8px 0' }}>{uso}</td>
            {MODOS.map(([m, tabla]) => {
              const r = contraste(tabla[t]!, tabla[f]!)
              return (
                <td key={m}><span style={{ padding: '4px 10px', borderRadius: 8, background: tabla[f], color: tabla[t], fontWeight: 600 }}>Aa</span>{' '}
                  <span style={mono}>{r.toFixed(1)}:1 {r >= 4.5 ? '✓ AA' : '✗'}</span></td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function Letras() {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div><p className="antetitulo">Display · Td Neumann</p><p className="display" style={{ fontSize: 40, color: 'var(--texto)' }}>Yaku Ceviche</p></div>
      <div><p className="antetitulo">Text · Jost 400 / 500 / 600</p>
        <p style={{ margin: 0, fontSize: 16 }}>Fresh fish, leche de tigre, sweet potato and choclo.</p>
        <p style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>Note for the kitchen</p>
        <p style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Add · 18,00 €</p></div>
    </div>
  )
}
