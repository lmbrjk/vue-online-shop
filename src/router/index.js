import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: {
      name: 'Backpacks',
      component: () => import('../views/Backpacks.vue')
    }
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
