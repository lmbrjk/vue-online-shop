import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/backpacks',
    name: 'Backpacks',
    component: () => import('../views/Backpacks.vue')
  },
  {
    path: '/briefcases',
    name: 'Briefcases',
    component: () => import('../views/Briefcases.vue')
  },
  {
    path: '/bags',
    name: 'Bags',
    component: () => import('../views/Bags.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
