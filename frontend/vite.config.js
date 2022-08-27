import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),

    ViteRestart.default({
      restart: [
        'my.config.[jt]s',
      ]
    }),
  
  ],
  server: {
    port: 8000
  }

})
