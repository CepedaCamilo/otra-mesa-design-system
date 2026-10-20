// Antes de cada prueba del sistema de diseño: comprobaciones extra para el DOM (toBeInTheDocument, toHaveAttribute…)
// y limpiar la pantalla simulada entre prueba y prueba.
import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => cleanup())

// axe pregunta por un <canvas> que el DOM simulado no tiene; no hace falta para estas pruebas.
HTMLCanvasElement.prototype.getContext = (() => null) as unknown as HTMLCanvasElement['getContext']
