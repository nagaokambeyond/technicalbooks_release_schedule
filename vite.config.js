import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
  ],
  preview: {
    port: 8080,
  },
  build: {
    outDir: './docs',
  },
  base: process.env.NODE_ENV === "production"? '/technicalbooks_release_schedule/': '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    //...
  },})
