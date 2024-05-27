import { createRouter, createWebHistory } from 'vue-router'





const routes = [


  {
    path: '/',
    name: 'public',
    component: () => import('@/components/template/public/Main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/HomeView.vue')
      },
    
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Login.vue')
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue')
      },
    ]
  },


  



  /** Rutas protegidas */
  {
    path: '/',
    name: 'main',
    component: () => import('@/components/template/private/Main.vue'),
    redirect: '/dashboard',
    meta: { requiresAuth: true },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue')
      },
    ]
  },

  // Not found
  { 
    path: '/:path(.*)', 
    name: "NotFound",
    component: () => import('@/views/sessions/404.vue'), 
  },
];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
