import { createRouter, createWebHashHistory } from "vue-router"; // 路由的模式：哈希

const routes = [
  {
    path:'/', // 路径
    name:'Home', // 名字
    component:()=>import('')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes // 相当于routes:routes的简写
})

export default router