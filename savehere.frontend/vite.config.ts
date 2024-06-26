import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../frontend',
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    proxy: {
      '^/api': {
        target: "http://localhost",
        secure: false
      },
      '^/swagger': {
        target: "http://localhost",
        secure: false
      },
      '^/files': {
        target: "http://localhost",
        secure: false
      },
      '^/filemanager': {
        target: "http://localhost",
        secure: false
      },
      '^/ws': {
        target: "ws://localhost",
        ws: true
      }
    },
    host: '0.0.0.0',
    port: 5173
  },
})
