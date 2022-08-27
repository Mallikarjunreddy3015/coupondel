import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'
import dns from 'dns'
// vite.config.js
import { splitVendorChunkPlugin } from 'vite'


dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/

export default defineConfig({
 base : "/coupondel/",
  plugins: [
    react(),

    ViteRestart.default({
      restart: [
        'my.config.[jt]s',
      ]
    }),

  splitVendorChunkPlugin()
  
  ],
  server: {
    port: 8000
  }

})
