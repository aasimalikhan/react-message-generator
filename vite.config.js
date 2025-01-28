import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // This assumes your components are in the `src` folder
    }
  },
  plugins: [react(), tailwindcss()],
})

