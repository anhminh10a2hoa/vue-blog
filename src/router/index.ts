import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/work',
    name: 'WorkPage',
    component: () => import('@/pages/WorkPage.vue')
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: () => import('@/pages/BlogPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
