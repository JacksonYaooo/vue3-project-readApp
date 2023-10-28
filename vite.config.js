import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 导入path工具
import Components from 'unplugin-vue-components/vite'
import {VantResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,  // 自动浏览
    port: 8088,  //更改端口号
  },
  // 这里的resolve配置依赖path工具来使'@/'识别为'src/'，默认配置在此文件不生效所以手动配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers:[VantResolver()],
    })
  ],
})
