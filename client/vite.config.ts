 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // optional since you're already in client/
  build: {
    outDir: 'dist'
  }
})
