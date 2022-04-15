<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                event:[],
                volunteer:[],
                client:[],
                employee:[],
                new_vid:{id:''},
                new_cid:{id:''},
                new_eid:{id:''},
                active: false
            }
        },
        created(){
            let apiURL = `http://localhost:8080/events/event-attendees/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.event = res.data[0];
                this.volunteer = res.data[0].volunteers;
                this.client = res.data[0].clients;
                this.employee = res.data[0].employees;
                
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            rem_volunteer(ID){
                let data = {
                    "id":ID,
                }
                let apiURL = `http://localhost:8080/events/del-volunteer/${this.$route.params.id}`
                let indexOfArrayItem = this.volunteer.findIndex(i=>i.vid === ID);
                
                if(window.confirm('Remove Volunteer from Event?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.volunteer.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                    //remove from volunteers table
                    let apiURL2 = `http://localhost:8080/volunteers/del-event/${ID}`
                    axios.post(apiURL2, this.$route.params.id).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }
            },
            // rem_client(ID){
            //     let data = {
            //         "id":ID,
            //     }
            //     let apiURL = `http://localhost:8080/events/del-client/${this.$route.params.id}`
            //     let indexOfArrayItem = this.client.findIndex(i=>i.cid === ID);
                
            //     if(window.confirm('Remove Client from event?')){
            //         axios.post(apiURL, data
            //         ).then(()=>{
            //             this.client.splice(indexOfArrayItem, 1);
            //         }).catch(error => {
            //             console.log(error)
            //         })
            //     }
            // },
            rem_employee(ID){
                let data = {
                    "id":ID,
                }
                let apiURL = `http://localhost:8080/events/del-employee/${this.$route.params.id}`
                let indexOfArrayItem = this.employee.findIndex(i=>i.employeeID === ID);
                
                if(window.confirm('Remove employee from event?')){
                    //remove from events collection
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.employee.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })

                    //remove from employees table
                    let apiURL2 = `http://localhost:8080/employees/del-event/${ID}`
                    axios.post(apiURL2, this.$route.params.id).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }
            },
            add_volunteer() {
                
                let idv = this.new_vid.id
                let apiURL = `http://localhost:8080/events/add-volunteer/${this.$route.params.id}`;
                axios.post(apiURL, this.new_vid).then(() => {
                    //changing the view to the list
                //   this.$router.push('/events')
                  this.new_vid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log('line 59 attendees')
                    console.log(error)
                });

                let apiURL2 = `http://localhost:8080/volunteers/add-event/${idv}`
                axios.post(apiURL2, this.$route.params.id).then(()=>{
                    
                }).catch(error =>{
                    console.log(error)
                })
            },
            // add_client() {
            //     let idc = this.new_cid.id
            //     let apiURL = `http://localhost:8080/events/add-client/${this.$route.params.id}`;
                
            //     axios.post(apiURL, this.new_cid).then(() => {
            //         //changing the view to the list
            //       this.$router.push('/events')
            //       this.new_cid = {
            //         id: ''
            //       }
            //     }).catch(error => {
            //         console.log(error)
            //     });
            // },
            add_employee() {
                let ide = this.new_eid.id
                let apiURL = `http://localhost:8080/events/add-employee/${this.$route.params.id}`;
                
                axios.post(apiURL, this.new_eid).then(() => {
                    //changing the view to the list
                //   this.$router.push('/events')
                  this.new_eid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });

                let apiURL2 = `http://localhost:8080/employees/add-event/${ide}`
                axios.post(apiURL2, this.$route.params.id).then(()=>{
                    
                }).catch(error =>{
                    console.log(error)
                })
            }
        } 
    }
    
</script>

<template>
    <main>
        <div class="row justify-content-center">
            
            <table class="table table-light table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>Event</th>
                        <th>Name</th>
                        <th>Host</th>
                        <th>Date</th>
                        <th>City</th> 
                        <th>State</th>
                        <th>Zip code</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{event.evid }}</td>
                        <td>{{event.ev_name }}</td>
                        <td>{{event.ev_host }}</td>
                        <td>{{event.ev_date }}</td>
                        <td>{{event.city }}</td>
                        <td>{{event.st }}</td>
                        <td>{{event.zip }}</td>
                        <td><router-link :to="{name: 'events_edit', params: { id: event.evid }}" class="btn btn-secondary ">Edit</router-link></td>
                    </tr> 
                </tbody>
            </table>
        </div>
        <!-- Volunteer table -->
        <div class="row justify-content-center">
            <h2 class='text-center'>Volunteers</h2>
            <form @submit.prevent='add_volunteer' class='form-inline'>
                    <div class='form-group'>
                        <label for="">VID#</label>
                        <input type="number" v-model='new_vid.id'  required>
                        <button class='btn btn-secondary'>Add Volunteer</button>
                    </div>
            </form> 
            <table class="table table-light table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>VID#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone#</th>
                        <th></th>    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="v in volunteer" :key="v.vid">
                        <td>{{v.vid }}</td>
                        <td>{{v.first_name }}</td>
                        <td>{{v.last_name }}</td>
                        <td>{{v.phone_num }}</td>
                        <td><button @click.prevent="rem_volunteer(v.vid)" class="btn btn-secondary">Remove</button></td>
                
                    </tr> 
                </tbody>
            </table>
        </div>

        <!-- <div class="row justify-content-center">
            <h2 class='text-center'>Clients</h2>
            <form @submit.prevent='add_client' class='form-inline'>
                    <div class='form-group'>
                        <label for="">CID#</label>
                        <input type="number" v-model='new_cid.id'  required>
                        <button class='btn btn-secondary'>Add Client</button>
                    </div>
            </form> 
                <table class="table table-light table-hover">
                    <thead class="table-dark">
                        <tr>
                        <th>CID#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone#</th>    
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="c in client" :key="c.cid">
                            <td>{{c.cid }}</td>
                            <td>{{c.first_name }}</td>
                            <td>{{c.last_name }}</td>
                            <td>{{c.phone_number }}</td>
                            <td><button @click.prevent="rem_client(c.cid)" class="btn btn-secondary">Remove</button></td>
                        </tr> 
                    </tbody>
                </table>
            </div> -->
    
        <div class="row justify-content-center">
            <h2 class='text-center'>Employees</h2>
            <form @submit.prevent='add_employee' class='form-inline'>
                    <div class='form-group'>
                        <label for="">EID#</label>
                        <input type="number" v-model='new_eid.id'  required>
                        <button class='btn btn-secondary'>Add Employee</button>
                    </div>
            </form> 
            <table class="table table-light table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>Emp#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone#</th>
                        <th></th>    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="e in employee" :key="e.employeeID">
                        <td>{{e.employeeID }}</td>
                        <td>{{e.firstName }}</td>
                        <td>{{e.lastName }}</td>
                        <td>{{e.phone}}</td>
                        <td><button @click.prevent="rem_employee(e.employeeID)" class="btn btn-secondary">Remove</button></td>
                    </tr> 
                </tbody>
            </table>
        </div>
    </main>
</template>


