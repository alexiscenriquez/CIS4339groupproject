import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";

//page routes, allows change between components without refreshing the page
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      //home page
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      //about page
      {
        path: "/about",
        name: "about",
        component: AboutView,
      },
      //clients home page
      {
        path: '/clients',
        name: 'clients',
        component: () => import('../views/clients/ClientsView.vue')
      },
      //events home page
      {
        path: '/events',
        name: 'events',
        component: () => import('../views/events/EventsView.vue')
      },
      //edit clients information
      {
        path: '/clients_edit',
        name: 'clients_edit',
        component: () => import('../views/clients/ClientsEdit.vue')
      },
      //edit events information
      {
        path: '/events_edit',
        name: 'events_edit',
        component: () => import('../views/events/EventsEdit.vue')
      },
      //create new client
      {
        path: '/new-client',
        name: 'new-client',
        component: () => import('../views/clients/NewClient.vue')
      },
      //create new event
      {
        path:'/new-event',
        name:'new-event',
        component: ()=> import('../views/events/NewEvent.vue')
      },
      //edit events information
      {
        path: "/events_edit",
        name: "events_edit",
        component: () => import("../views/events/EventsEdit.vue"),
      },
      //create new client
      {
        path: "/new-client",
        name: "new-client",
        component: () => import("../views/clients/NewClient.vue"),
      },
      //create new event
      {
        path: "/new-event",
        name: "new-event",
        component: () => import("../views/events/NewEvent.vue"),
      },
      //services home page
      {
        path: "/services",
        name: "services",
        component: () => import("../views/services/ServicesView.vue"),
      },
      //edit services information
      {
        path: "/services_edit",
        name: "services_edit",
        component: () => import("../views/services/ServicesEdit.vue"),
      },
      //create new service
      {
        path: "/new-service",
        name: "new-service",
        component: () => import("../views/services/NewService.vue"),
      },
      //volunteers home page
      {
        path: "/volunteers",
        name: "volunteers",
        component: () => import("../views/volunteers/VolunteerView.vue"),
      },
      //edit volunteers information
      {
        path: "/volunteers_edit",
        name: "volunteers_edit",
        component: () => import("../views/volunteers/VolunteerEdit.vue"),
      },
      //create new volunteer
      {
        path:'/new-volunteers',
        name:'new-volunteers',
        component: ()=> import('../views/volunteers/NewVolunteer.vue')
      },
      //organizations home page
      {
        path:'/organizations',
        name:'organizations',
        component: ()=> import('../views/organizations/OrganizationsView.vue')
      },
      //edit organizations page
      {
        path: "/org_edit",
        name: "org_edit",
        component: () => import("../views/organizations/OrganizationsEdit.vue"),
      },
      //create new organization
      {
        path:'/new-org',
        name:'new-org',
        component: ()=> import('../views/organizations/NewOrganization.vue')
      },
      //attendees of events
      {
        path:'/attendees',
        name:'attendees',
        component: ()=> import('../views/events/attendees.vue')
      },
      //events and services offered by organizations
      {
        path:'/offers',
        name:'offers',
        component: ()=> import('../views/organizations/offers.vue')
      },
      //volunteers, employees, and clients listed under organizations
      {
        path:'/peoples',
        name:'peoples',
        component: ()=> import('../views/organizations/peoples.vue')
      },
      //organizations tied to client
      {
        path:'/client-orgs',
        name:'client-orgs',
        component: ()=> import('../views/clients/ClientOrgs.vue')
      },
      //services by client
      {
        path:'/servicereps',
        name:'servicereps',
        component: ()=> import('../views/clients/ServiceRep.vue')
      },
      //clients page information
      {
        path:'/custinfo',
        name:'custinfo',
        component: ()=> import('../views/clients/MoreInfo.vue')

      },
      //create new employee
      {

        path: "/new-emp",
        name: "new-emp",
        component: () => import("../views/Employees/NewEmp.vue"),

      },
      //employees home page
      {

        path: "/employees",
        name: "employees",
        component: () => import("../views/Employees/EmployeeView.vue"),

      },
      //edit employees information
      {

        path: "/edit-emp",
        name: "edit-emp",
        component: () => import("../views/Employees/EmployeeEdit.vue"),

      },
      //events tied to volunteers
      {
        path:'/v_events',
        name:'v_events',
        component: ()=> import('../views/volunteers/v_events.vue')
      },
      //organizations by volunteers
      {
        path:'/v_organizations',
        name:'v_organizations',
        component: ()=> import('../views/volunteers/v_organizations.vue')
      },
      //employee affilitions
      {
        path:'/events-clients',
        name:'events-clients',
        component:()=>import('../views/Employees/empaffiliations.vue')
      },
      //volunteer information
      {
        path:'/volunteer-info',
        name:'volunteer-info',
        component:()=>import('../views/volunteers/VolunteerInfo.vue')
      },
      //employee information
      { path:'/seemore-emp',
        name:'seemore-emp',
        component:()=>import('../views/Employees/SeeMore-emp.vue')
      },
      //graph reports
      {
        path:'/graphs',
        name:'graphs',
        component:()=>import('../components/graph.vue')
      },
      //service applicants
      {
        path:'/applicants',
        name:'applicants',
        component: ()=>import('../views/services/applicants.vue')
      }
    ]
})

export default router;
