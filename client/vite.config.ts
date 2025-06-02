import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',                      // this can be left if using monorepo
  publicDir: 'public',            // makes Vite look here for index.html
  build: {
    outDir: 'dist',
  }
})
