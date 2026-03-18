import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const vitePort = Number(process.env.PORT ?? 5173)

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: vitePort,
    proxy: {
      '/user': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/health': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  preview: {
    host: '0.0.0.0',
    port: vitePort,
  },
})
