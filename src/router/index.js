import { createRouter, createWebHistory } from 'vue-router';
//import { useAuthenticationStore } from '@/stores/auth/authentication';
//import { storeToRefs } from 'pinia';


/**
 * RequiredAuth
 */
// const requireAuth = async(to, from, next) => {

//   //document.title = `${to.name} - ${import.meta.env.VITE_APP_TITLE}`;
//   // if(!localStorage.getItem('locale')){
//   //   localStorage.setItem('locale', 'ES');
//   // }

//   const authStore = useAuthenticationStore();
//   const { currentUser } = authStore;
//   const { user } = storeToRefs(authStore); 

//   await currentUser();

//   console.log(user.value);

//   if(!user.value){
//     next({name: "login" });
//   }else{
//     next();
//   }

// }




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
    
      {
        path: '/login',
        name: 'login',
        component: () => import('@/modules/auth/views/login/Login.vue')
      },
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
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue')
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('@/views/products/Product.vue')
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: () => import('@/views/products/Product.vue')
      },
      {
        path: '/documents',
        name: 'documents',
        component: () => import('@/views/products/Product.vue')
      },
      {
        path: '/reports',
        name: 'reports',
        component: () => import('@/views/products/Product.vue')
      },
      {
        path: '/engineering',
        name: 'engineering',
        component: () => import('@/views/enginnerings/Enginnering.vue')
      },
      {
        path: '/human-resources',
        name: 'human-resources',
        component: () => import('@/views/products/Product.vue')
      },
      {
        path: '/customer',
        name: 'customer',
        component: () => import('@/views/products/Product.vue')
      },
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

export default router
