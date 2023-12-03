import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView }
  ]
const router = createRouter({
  history: createWebHistory(),
  //references the routes array of paths above
  routes,
  //allow to change styling of nav links on hover.
  linkActiveClass: 'vue-school-active-link'
  })

export default router
