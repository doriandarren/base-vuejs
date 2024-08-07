import { createRouter, createWebHistory } from 'vue-router';
// Auth
import LoginRoutes from '../modules/auth/router';
//Fake
import FakeRoutes from '../modules/fake/router';
//import { useAuthenticationStore } from '@/stores/auth/authentication';
//import { storeToRefs } from 'pinia';



const routes = [

  /** Public routes */
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
    
      /** Login */
      ...LoginRoutes
    ]
  },


  /** Private public */
  {
    path: '/',
    name: 'main',
    component: () => import('@/components/template/private/Main.vue'),
    redirect: '/dashboard',
    meta: { requiresAuth: true },
    // beforeEnter: requireAuth,
    children: [
      
      /** Fake Routes */
      ...FakeRoutes,

    ]
  },

  // Not found
  { 
    path: '/:path(.*)', 
    name: "NotFound",
    component: () => import('@/modules/auth/views/sessions/404.vue'), 
  },
];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


router.beforeEach(async (to, from, next) => {
  // Actualizar el título de la página
  document.title = `${to.name.charAt(0).toUpperCase() + to.name.slice(1)} - ${import.meta.env.VITE_APP_TITLE}`;
  next();


  // NO Delete - Validate Routes
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   const { currentUser } = useAuthenticationStore();
  //   let response = await currentUser();

  //   try {
  //     if (response) {
  //       next();
  //     } else {
  //       next({ name: "login" });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     next({ name: "login" });
  //   }
  // } else {
  //   next();
  // }
});


export default router
