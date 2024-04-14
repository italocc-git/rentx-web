import { defineConfig } from 'vite'
import Graphql from '@rollup/plugin-graphql'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Graphql()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
