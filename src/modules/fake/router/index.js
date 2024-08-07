export default [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/modules/fake/views/dashboard/Dashboard.vue')
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('@/modules/fake/views/products/Product.vue')
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: () => import('@/modules/fake/views/products/Product.vue')
    },
    {
        path: '/documents',
        name: 'documents',
        component: () => import('@/modules/fake/views/products/Product.vue')
    },
    {
        path: '/reports',
        name: 'reports',
        component: () => import('@/modules/fake/views/products/Product.vue')
    },
    {
        path: '/engineering',
        name: 'engineering',
        component: () => import('@/modules/fake/views/enginnerings/Enginnering.vue')
    },
    {
        path: '/human-resources',
        name: 'human-resources',
        component: () => import('@/modules/fake/views/products/Product.vue')
    },
    {
        path: '/customer',
        name: 'customer',
        component: () => import('@/modules/fake/views/products/Product.vue')
    },
]