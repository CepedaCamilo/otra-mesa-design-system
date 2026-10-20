// Lee tokens.css TAL CUAL (como texto) y saca los valores de claro y de oscuro. Así las páginas de fundamentos del catálogo
// nunca se quedan atrás: si cambia un color en tokens.css, cambia aquí. También calcula contrastes y simula daltonismo.
import css from '../tokens.css?raw'

const bloque = (selector: string): Record<string, string> => {
  const inicio = css.indexOf(selector + ' {')
  const cuerpo = css.slice(css.indexOf('{', inicio) + 1, css.indexOf('\n}', inicio)).replace(/\/\*[\s\S]*?\*\//g, '')
  return Object.fromEntries([...cuerpo.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1]!, m[2]!.trim()]))
}

const claro = bloque(':root')
const oscuro = { ...claro, ...bloque(':root[data-tema="oscuro"]') }
export type Modo = 'claro' | 'oscuro'

// Valor final de un token en un modo (sigue los var(--otro) hasta llegar al valor de verdad).
export function valor(nombre: string, modo: Modo = 'claro'): string {
  const tabla = modo === 'claro' ? claro : oscuro
  let v = nombre.startsWith('--') ? tabla[nombre] ?? '' : nombre
  for (let i = 0; i < 5 && v.includes('var('); i++) v = v.replace(/var\((--[\w-]+)\)/g, (_, n: string) => tabla[n] ?? '')
  return v
}

export const esColor = (v: string) => /^#[0-9a-f]{6}$/i.test(v)

// ---- Contraste WCAG ----
const canal = (c: number) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4 }
const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)) as [number, number, number]
const luz = (hex: string) => { const [r, g, b] = rgb(hex).map(canal) as [number, number, number]; return 0.2126 * r + 0.7152 * g + 0.0722 * b }
export function contraste(a: string, b: string): number {
  const [x, y] = [luz(a), luz(b)].sort((p, q) => q - p) as [number, number]
  return (x + 0.05) / (y + 0.05)
}

// ---- Cómo ve los colores una persona daltónica (Machado, Oliveira y Fernandes 2009, intensidad máxima) ----
export const VISIONES = {
  protanopia: [[0.152286, 1.052583, -0.204868], [0.114503, 0.786281, 0.099216], [-0.003882, -0.048116, 1.051998]],
  deuteranopia: [[0.367322, 0.860646, -0.227968], [0.280085, 0.672501, 0.047413], [-0.01182, 0.04294, 0.968881]],
  tritanopia: [[1.255528, -0.076749, -0.178779], [-0.078411, 0.930809, 0.147602], [0.004733, 0.691367, 0.3039]],
} as const
export type Vision = keyof typeof VISIONES

const aSrgb = (c: number) => Math.round(255 * Math.min(1, Math.max(0, c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055)))
export function simular(hex: string, vision: Vision): string {
  const lineal = rgb(hex).map(canal)
  return '#' + VISIONES[vision].map((fila) => aSrgb(fila.reduce((s, k, i) => s + k * lineal[i]!, 0)).toString(16).padStart(2, '0')).join('')
}
