import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open: true,  // 自动浏览
    port: 8088,  //更改端口号
  },
  plugins: [vue()],
})
