import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        component: AboutView,
      },
      {
        path: '/clients',
        name: 'clients',
        component: () => import('../views/clients/ClientsView.vue')
      },
      {
        path: '/events',
        name: 'events',
        component: () => import('../views/events/EventsView.vue')
      },
      {
        path: '/clients_edit',
        name: 'clients_edit',
        component: () => import('../views/clients/ClientsEdit.vue')
      },
      {
        path: '/events_edit',
        name: 'events_edit',
        component: () => import('../views/events/EventsEdit.vue')
      },
      {
        path: '/new-client',
        name: 'new-client',
        component: () => import('../views/clients/NewClient.vue')
      },
      {
        path:'/new-event',
        name:'new-event',
        component: ()=> import('../views/events/NewEvent.vue')
      },
      {
        path: "/events_edit",
        name: "events_edit",
        component: () => import("../views/events/EventsEdit.vue"),
      },
      {
        path: "/new-client",
        name: "new-client",
        component: () => import("../views/clients/NewClient.vue"),
      },
      {
        path: "/new-event",
        name: "new-event",
        component: () => import("../views/events/NewEvent.vue"),
      },
      {
        path: "/services",
        name: "services",
        component: () => import("../views/services/ServicesView.vue"),
      },
      {
        path: "/services_edit",
        name: "services_edit",
        component: () => import("../views/services/ServicesEdit.vue"),
      },
      {
        path: "/new-service",
        name: "new-service",
        component: () => import("../views/services/NewService.vue"),
      },
      {
        path: "/volunteers",
        name: "volunteers",
        component: () => import("../views/volunteers/VolunteerView.vue"),
      },
      {
        path: "/volunteers_edit",
        name: "volunteers_edit",
        component: () => import("../views/volunteers/VolunteerEdit.vue"),
      },
      {
        path:'/new-volunteers',
        name:'new-volunteers',
        component: ()=> import('../views/volunteers/NewVolunteer.vue')
      },
      {
        path:'/organizations',
        name:'organizations',
        component: ()=> import('../views/organizations/OrganizationsView.vue')
      },
      {
        path: "/org_edit",
        name: "org_edit",
        component: () => import("../views/organizations/OrganizationsEdit.vue"),
      },
      {
        path:'/new-org',
        name:'new-org',
        component: ()=> import('../views/organizations/NewOrganization.vue')
      },
      {
        path:'/attendees',
        name:'attendees',
        component: ()=> import('../views/events/attendees.vue')
      },
      {
        path:'/offers',
        name:'offers',
        component: ()=> import('../views/organizations/offers.vue')
      },
      {
        path:'/peoples',
        name:'peoples',
        component: ()=> import('../views/organizations/peoples.vue')
      },
      {
        path:'/client-orgs',
        name:'client-orgs',
        component: ()=> import('../views/clients/ClientOrgs.vue')
      },
      {
        path:'/servicereps',
        name:'servicereps',
        component: ()=> import('../views/clients/ServiceRep.vue')
      },
      {
        path:'/custinfo',
        name:'custinfo',
        component: ()=> import('../views/clients/MoreInfo.vue')

      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {

        path: "/new-emp",
        name: "new-emp",
        component: () => import("../views/Employees/NewEmp.vue"),

      },
      {

        path: "/employees",
        name: "employees",
        component: () => import("../views/Employees/EmployeeView.vue"),

      },

      {

        path: "/edit-emp",
        name: "edit-emp",
        component: () => import("../views/Employees/EmployeeEdit.vue"),

      },
      {
        path:'/v_events',
        name:'v_events',
        component: ()=> import('../views/volunteers/v_events.vue')
      },
    {
      path:'/events-clients',
      name:'events-clients',
      component:()=>import('../views/Employees/empaffiliations.vue')
    },
    {
      path:'/volunteer-info',
      name:'volunteer-info',
      component:()=>import('../views/volunteers/VolunteerInfo.vue')
    },
    { path:'/seemore-emp',
      name:'seemore-emp',
      component:()=>import('../views/Employees/SeeMore-emp.vue')
    },
    {
      path:'/graphs',
      name:'graphs',
      component:()=>import('../components/graph.vue')
    },
    {
      path:'/applicants',
      name:'applicants',
      component: ()=>import('../views/services/applicants.vue')
    }
  ]
})

export default router;
