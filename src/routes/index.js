import Homepage from "./../components/Homepage.vue"
import Recipe from "../components/Menu.vue"
import AboutUs from "./../components/AboutUs.vue"
import ContactUs from "./../components/ContactUs.vue"
const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/recipe',
        name: 'recipe',
        component: Recipe,
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
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router