import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/leyi.github.io/',  // 一定要是 /<你的 repo 名>/
})
