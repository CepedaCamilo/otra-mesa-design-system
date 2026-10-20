// Modo claro / oscuro de Negocios y Gestión (la app del cliente NO lo usa: siempre clara).
// Regla: sigue el ajuste del dispositivo hasta que la persona pulsa el sol/luna; desde ahí recuerda su elección
// (localStorage "om-tema-panel", compartido por Negocios y Gestión porque viven en el mismo dominio).
// Pone <html data-tema="claro|oscuro"> y el color de la barra del navegador (meta theme-color).

export type Tema = 'claro' | 'oscuro'

const CLAVE = 'om-tema-panel'
const COLOR_BARRA: Record<Tema, string> = { claro: '#ffffff', oscuro: '#0f1612' }
const sistema = (): Tema => (typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro')

export function temaElegido(): Tema | null {
  try {
    const t = localStorage.getItem(CLAVE)
    return t === 'oscuro' || t === 'claro' ? t : null
  } catch {
    return null
  }
}

export function temaActual(): Tema {
  return temaElegido() ?? sistema()
}

export function aplicarTema(tema: Tema = temaActual()): Tema {
  document.documentElement.dataset.tema = tema
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'theme-color'
    document.head.append(meta)
  }
  meta.content = COLOR_BARRA[tema]
  return tema
}

export function cambiarTema() {
  const nuevo = temaActual() === 'oscuro' ? 'claro' : 'oscuro'
  try { localStorage.setItem(CLAVE, nuevo) } catch { /* sin almacenamiento: vale solo para esta visita */ }
  return aplicarTema(nuevo)
}

// Sigue los cambios del dispositivo (por ejemplo, el modo oscuro automático al anochecer) mientras la persona
// no haya elegido. Devuelve la función que deja de escuchar (para el useEffect del botón).
export function seguirDispositivo(alCambiar?: (tema: Tema) => void) {
  if (typeof matchMedia !== 'function') return () => {}
  const consulta = matchMedia('(prefers-color-scheme: dark)')
  const oyente = () => { if (!temaElegido()) alCambiar?.(aplicarTema()) }
  consulta.addEventListener('change', oyente)
  return () => consulta.removeEventListener('change', oyente)
}
