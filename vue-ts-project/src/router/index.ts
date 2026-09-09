import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// Definition typée du tableau de routes
const routes: RouteRecordRaw[] = [
    // Nouvelle manière avec lazy loading
    {
        path: '/',
        alias: '/home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/about',
        meta: {
            title: 'About',
        },
        component: () => import('../views/About.vue'),
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('../views/Cookies.vue'),
    },
    {
        path: '/contact',
        component: () => import('../views/Contact.vue'),
    },
    {
        path: '/interpol',
        component: () => import('../views/ExTextInterpolation.vue'),
    },
    {
        path: '/profile',
        component: () => import('../views/User.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;