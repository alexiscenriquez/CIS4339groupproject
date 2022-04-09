import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create/client',
      name: 'Create Client',
      component: () => import('../components/CreateClientComponent.vue')
    },
    {
      path: '/volunteers',
      name: 'view',
      component: () => import('../views/VolunteerView.vue')
    },
    
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../components/EditComponent.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
