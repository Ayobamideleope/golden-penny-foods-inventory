import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignIn from '../views/SignIn.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },

  {
    path: '/',
    name: 'home',
    redirect: '/sign-in'
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (sign-in.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sign-in" */ '../views/Dashboard.vue')
  },

  {
    path: '/stocks',
    name: 'stocks',
    // route level code-splitting
    // this generates a separate chunk (sign-in.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sign-in" */ '../views/Stocks.vue')
  },

  {
    path: '/Sales',
    name: 'sales',
    // route level code-splitting
    // this generates a separate chunk (sign-in.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sign-in" */ '../views/Sales.vue')
  },

  {
    path: '/sign-in',
    name: 'sign-in',
    // route level code-splitting
    // this generates a separate chunk (sign-in.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignIn
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',

  routes
});

export default router;
