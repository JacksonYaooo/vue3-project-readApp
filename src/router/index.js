import { createRouter, createWebHashHistory } from "vue-router"; // 路由的模式：哈希

const routes = [
  {
    path: '/',
    redirect:'/index'  // 把‘/’重定向为首页
  },
  {
    path: '/index', // 首页
    name: 'index',
    component: () => import('../views/index/index.vue')
  },
  {
    path: '/community', // 社区
    name: 'community',
    component: () => import('../views/community/index.vue')
  },
  {
    path: '/welfare', // 福利
    name: 'welfare',
    component: () => import('../views/welfare/index.vue')
  },
  {
    path: '/my', // 我的
    name: 'my',
    component: () => import('../views/my/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // 相当于routes:routes的简写
  linkActiveClass:'selected'  // 自动添加active类名
})

export default router