import {createRouter, createWebHistory} from 'vue router'

import Homepage from "./../components/Homepage.vue"
import Menu from "../components/Menu.vue"
import AboutUs from "./../components/AboutUs.vue"
import Cart from "./../components/Cart.vue"
const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu,
      },
      {
        path: '/about',
        name: 'about',
        component: AboutUs,
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
      },
     
      
      ]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router