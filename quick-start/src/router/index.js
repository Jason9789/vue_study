import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'defaultLayout',
    component: () => import('@/layout/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/bar',
        name: 'bar',
        component: () => import('@/components/Bar.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'emptylayout',
    component: () => import('@/layout/EmptyLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/Login.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
