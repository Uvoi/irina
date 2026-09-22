import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/irina/',
  resolve: {
    alias: {
      // Привязываем символ @ к папке src
      '@': path.resolve(__dirname, './src'),
    },
  },
})
