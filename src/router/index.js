import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/helloWorld',
    name: 'HelloWorld',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HelloWorld.vue')
  },
  {
    path: '/vanttest01',
    name: 'VantTest01',
    component: () => import(/* webpackChunkName: "VantTest01" */ '../views/VantTest01.vue')
  },
  {
    path: '/lodash02',
    name: 'Lodash02',
    component: () => import(/* webpackChunkName: "Lodash02" */ '../views/Lodash02.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
