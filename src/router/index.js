import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddAnnonce from '../views/annonce/AddAnnonce.vue'
import Annonce from '../views/annonce/Annonce.vue'
import Login from '../views/auth/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/annonce',
    name: 'Annonce',
    component: Annonce
  },
  {
    path: '/add-annonce',
    name: 'AddAnnonce',
    component: AddAnnonce
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
