import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'
import MillionCompiler from '@million/lint'

// https://vitejs.dev/config/
export default defineConfig({
  // MillionCompiler.vite() 
  plugins: [MillionCompiler.vite(), react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
