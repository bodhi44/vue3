import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 8099
    // proxy: {}
  },
  // 配置别名
  // alias: {
  //   '@': path.join(__dirname, './src'),
  //   '@components': path.join(__dirname, './src/components'),
  //   '@utils': path.join(__dirname, './src/utils')
  // },
  plugins: [vue()]
})
