import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact'),
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('@/views/Construction'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Construction'),
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('@/views/NotFound'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
