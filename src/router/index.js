import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home } from '../views/Home'

// import otherRouters from 'path-to-file';

Vue.use(VueRouter)

const routes = [

  // ...otherRouters,

  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
