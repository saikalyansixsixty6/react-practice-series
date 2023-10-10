import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
      proxy:{
        "/api":"https://friendly-sniffle-wj46r5v547rhr9-5173.app.github.dev"
      }
  },
  plugins: [react()],
})
