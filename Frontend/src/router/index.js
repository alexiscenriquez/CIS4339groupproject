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
      path: '/clients',
      name: 'clients',
      component: () => import('../views/ClientsView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/events/EventsView.vue')
    },
    {
      path: '/clients_edit',
      name: 'clients_edit',
      component: () => import('../views/ClientsEdit.vue')
    },
    {
      path: '/events_edit',
      name: 'events_edit',
      component: () => import('../views/events/EventsEdit.vue')
    },
    {
      path: '/new-client',
      name: 'new-client',
      component: () => import('../views/NewClient.vue')
    },
    {
      path:'/new-event',
      name:'new-event',
      component: ()=> import('../views/events/NewEvent.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/services/ServicesView.vue')
    },
    {
      path: '/services_edit',
      name: 'services_edit',
      component: () => import('../views/services/ServicesEdit.vue')
    },
    {
      path:'/new-service',
      name:'new-service',
      component: ()=> import('../views/services/NewService.vue')
    }
    ,
    {
      path: '/volunteers',
      name: 'volunteers',
      component: () => import('../views/volunteers/VolunteerView.vue')
    },
    {
      path: '/volunteers_edit',
      name: 'volunteers_edit',
      component: () => import('../views/volunteers/VolunteerEdit.vue')
    },
    {
      path:'/new-volunteers',
      name:'new-volunteers',
      component: ()=> import('../views/volunteers/NewVolunteer.vue')
    }
    //,
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
