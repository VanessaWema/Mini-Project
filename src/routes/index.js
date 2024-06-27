import {createRouter, createWebHistory} from 'vue router'

import Homepage from "./../components/Homepage.vue"
import Menu from "../components/Menu.vue"
import AboutUs from "./../components/AboutUs.vue"
import ContactUs from "./../components/ContactUs.vue"
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
        path: '/contact',
        name: 'contact',
        component: ContactUs,
      },
     
      
      ]
const router = new VueRouter({
  mode:'history',
  routes,
})

export default router