import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import arraysApp from '../components/Arrays.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Arrays',
    component: arraysApp
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
