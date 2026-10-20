// Pasa axe (el mismo revisor de accesibilidad del catálogo) sobre lo que pinta un componente.
// En un DOM simulado no hay colores de verdad, así que el contraste se comprueba aparte (robot del catálogo y fundamentos).
import axe from 'axe-core'

export async function fallosDeAccesibilidad(contenedor: Element): Promise<string[]> {
  const r = await axe.run(contenedor, { rules: { 'color-contrast': { enabled: false }, region: { enabled: false } } })
  return r.violations.map((v) => `${v.id}: ${v.help}`)
}
