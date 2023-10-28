import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'   // ./同级  ../上一级  @/根目录：src
import '@/assets/css/common.css'
import '@/assets/font/iconfont.css' // 全局引用

createApp(App).use(router).mount('#app')
