<script>
    import axios from 'axios'
    //Used to export modujles, objects, functions and variables to be used elsewhere
    export default{
        //Storing the data being exported in a function
        data(){
            return{
                //Function returning
            //Several arrays for holding data
                organization:[],
                service:[],
                event:[],
                fullservices:[],
                new_sid:{id:''},
                new_evid:{id:''},
                active: false
            }
        },
        //grab organizations, events, and services data before mounting dom
        created(){
            let apiURL = `http://localhost:8080/organizations/organization-offers/${this.$route.params.id}`;
            let apiURL2 = `http://localhost:8080/services`;
            //add eevent or service from organization collection
            axios.get(apiURL).then(res => {
                this.organization = res.data[0]; //store org data
                //this.employee = res.data[0].employees;
                this.service = res.data[0].services; // store service data
                this.event = res.data[0].events; // store event data
            }).catch(error=>{
                console.log(error)
            });
            //display all services in organization collection
            axios.get(apiURL2).then(res =>{
                    this.fullservices = res.data //store service data
                    console.log(this.fullservices)
                }).catch(error =>{
                    console.log(error)
                })
        },
        methods:{
            // remove service from service and organization collection
            rem_service(ID){
                let data = {"id":ID}
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/organizations/del-service/${this.$route.params.id}`
                let indexOfArrayItem = this.service.findIndex(i=>i.sid === ID);
                //remove if true
                if(window.confirm('Remove service from organization?')){
                    //remove service from organization collection
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.service.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                    //remove organization from service collection
                    let apiURL2 = `http://localhost:8080/services/del-org/${ID}`
                    axios.post(apiURL2, data2).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }
            },
            // remove event from event and organization collection
            rem_event(ID){
                let data = {"id":ID}
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/organizations/del-event/${this.$route.params.id}`
                let indexOfArrayItem = this.event.findIndex(i=>i.evid === ID);
                let apiURL2 = `http://localhost:8080/events/del-org/${ID}`
                
                if(window.confirm('Remove event from organization?')){
                    //remove from events collection
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.event.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })

                    //remove from employees table
                    axios.post(apiURL2, data2).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }
            },
            // add service to service and org collections
            add_service() {
                
                let dis = this.new_sid.id
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/organizations/add-service/${this.$route.params.id}`;
                let apiURL2 = `http://localhost:8080/services/add-org/${dis}`
                //add service to organization collection
                axios.post(apiURL, this.new_sid).then(() => {
                    //changing the view to the list
                    this.$router.push('/organizations')
                    // this.volunteer.push(idv)
                  this.new_vid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log('line 59 attendees')
                    console.log(error)
                });
                //add organization to service collection
                axios.post(apiURL2, data2).then(()=>{
                    
                }).catch(error =>{
                    console.log(error)
                })
            },
            //add events to events and organziation collections
            add_event() {
                let vide = this.new_evid.id
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/organizations/add-event/${this.$route.params.id}`;
                //add event to organization collection
                axios.post(apiURL, this.new_evid).then(() => {
                    //changing the view to the list
                    this.$router.push('/organizations')
                  this.new_evid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
                // add organization to event collection
                let apiURL2 = `http://localhost:8080/events/add-org/${vide}`
                axios.post(apiURL2, data2).then(()=>{
                    // this.employee.push(ide)
                }).catch(error =>{
                    console.log(error)
                })
            },
        } 
    }
</script>

<template>
<div>
    <h1>Organization #{{organization.orgid}}</h1>
    <br>
    <div id="forms">
   <form class="col-sm-3 view-form">
       <!-- display event information and allow editing of organization, current events, current services, and addition of services and events -->
        <fieldset class='form-control mb-5 '>
            <legend class="mb-3"><strong>Organization</strong></legend>
                <!-- show organization info -->
                <div>
                    <input type="text" class='form-control mb-3' v-model='organization.org_name' disabled>
                    <!-- go to organization edits page -->
                    <router-link :to="{name: 'org_edit', params: { id: organization.orgid }}" class="btn create ">Edit</router-link>
                </div>
        </fieldset>
   </form>
                    <!-- add service to organization -->
                    <div class='col-sm-3 view-form '>
                        <form @submit.prevent='add_service'>
                           
                      <fieldset class="form-control">
                                    <legend class="mb-3"><strong>Service</strong></legend> 
                                    <!-- display information for each services in array -->
                                    <select v-model='new_sid.id' class="form-control mb-3">
                                        <option value="" selected disabled>Choose a Service</option>
                                        <option v-for="x in fullservices" :value="x.sid" :key="x.sid">{{x.sid}}{{" - "}}{{x.name}}</option>
                                    </select>
  
                                    <button class='btn create'>Apply for Service</button>
                              
                      </fieldset>
                        </form> 
                    </div>
                    
                        <!-- add event to organization -->
                        <form @submit.prevent='add_event' class="col-sm-3 view-form">
                           
                        <fieldset class="form-control">
                            <legend class="mb-3"><strong>Events</strong></legend>
                            <div class='form-group'>
                                
                                <input type="number" class='form-control mb-3' v-model='new_evid.id' placeholder="Enter the Event ID" required>
                                <button class='btn create'>Add Event</button>
                            </div>
                        </fieldset>
                        </form> 
                  
                </div>
    

        <!-- display services table and allow for editing -->
        <div class="row justify-content-center">
            <table class="table table-light table-hover caption-top">
                <caption><strong>Services</strong></caption>
                <thead class="table-dark">
                    <tr>
                        <th>SID#</th>
                        <th>Name</th>
                        <th>Renewal</th>
                        <th>Notes</th>
                        <th>Action</th>    
                    </tr>
                </thead>
                <tbody>
                    <!-- display information for each volunteer in array, allow user to remove volunteer by vid -->
                    <tr v-for="s in service" :key="s.vid">
                        <td>{{s.sid }}</td>
                        <td>{{s.name }}</td>
                        <td>{{s.renewal }}</td>
                        <td>{{s.notes }}</td>
                        <!-- go to services edit page -->
                        <td><router-link :to="{name: 'services_edit', params: { id: s.sid }}" class="btn btn-secondary ">Edit</router-link></td>
                
                    </tr> 
                </tbody>
            </table>
        </div>

        <!-- display events table and allow for editing -->
        <div class="row justify-content-center">
            <table class="table table-light table-hover caption-top">
                <caption><strong>Events</strong></caption>
                <thead class="table-dark">
                    <tr>
                        <th>EVID#</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- display information for each event in array, allow user to remove event by evid -->
                    <tr v-for="ev in event" :key="ev.evid">
                        <td>{{ev.evid }}</td>
                        <td>{{ev.ev_name }}</td>
                        <td>{{ev.ev_host }}</td>
                        <td>{{ev.ev_date}}</td>
                        <!-- go to events edit page -->
                        <td><router-link :to="{name: 'events_edit', params: { id: ev.evid }}" class="btn btn-secondary ">Edit</router-link></td>
                    </tr> 
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
 @import "../../assets/app.css";
</style>

