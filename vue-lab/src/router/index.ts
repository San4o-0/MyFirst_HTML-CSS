import { createRouter, createWebHistory } from 'vue-router'
// Ми використовуємо "ліниве завантаження" (lazy loading) для всіх сторінок
// щоб код кожної сторінки завантажувався лише за потреби.

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
