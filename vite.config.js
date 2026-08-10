import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 设为相对路径，确保在 GitHub Pages 的二级目录发布时静态资源正确加载
})
