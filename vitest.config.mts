import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { environment: 'jsdom', css: { include: [/tokens\.css/] }, include: ['**/*.test.{ts,tsx}'], exclude: ['node_modules/**'], setupFiles: ['pruebas/preparar.ts'] },
})
