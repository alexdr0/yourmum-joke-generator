import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Redirect from '../views/Redirect.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/redirect',
    name: 'Redirect',
    component: Redirect
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: "/redirect",
    name: 'redirect',
    redirect: "/"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
