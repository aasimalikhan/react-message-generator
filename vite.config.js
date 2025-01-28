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
  build: {
    outDir: 'src/dist',  // This will place the build files inside the `src/dist` folder
    rollupOptions: {
      input: {
        main: 'index.html', // Specify the main HTML file
      },
    },
  },
})

