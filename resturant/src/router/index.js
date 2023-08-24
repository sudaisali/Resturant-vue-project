
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from  '../components/HomeView.vue'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import Add from '../components/Add.vue'
import Update from '../components/Update.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/add',
      name: 'Add',
      component: Add

    },
    {
      path: '/update/:id',
      name: 'Update',
      component: Update
    }
  
  ]
})

export default router
