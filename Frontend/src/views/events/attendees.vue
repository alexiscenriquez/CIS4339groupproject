<script>
    import axios from 'axios'

    //exports arrays and objects
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
        //grab attendees data before mounting dom
        created(){
            //get attendee data from event
            let apiURL = `http://localhost:8080/events/event-attendees/${this.$route.params.id}`; //backend api
            axios.get(apiURL).then(res => {
                this.event = res.data[0]; //store event data
                this.volunteer = res.data[0].volunteers; //store volunteer data
                this.client = res.data[0].clients; //store client data
                this.employee = res.data[0].employees; //store employee data
            }).catch(error=>{
                console.log(error)
            });
        },
        //define functions
        methods:{
            //remove volunteer from volunteer and event collections
            rem_volunteer(ID){
                let data = {"id":ID}    //store vid
                let data2 = {"id":this.$route.params.id}    //store evid
                let apiURL = `http://localhost:8080/events/del-volunteer/${this.$route.params.id}`  //backend api
                let indexOfArrayItem = this.volunteer.findIndex(i=>i.vid === ID);   //store vid index from array
                
                //remove only if true
                if(window.confirm('Remove Volunteer from Event?')){
                    //remove volunteer from events collection
                    axios.post(apiURL, data).then(()=>{
                        this.volunteer.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })

                    //remove from volunteers collection
                    let apiURL2 = `http://localhost:8080/volunteers/del-event/${ID}`
                    axios.post(apiURL2, data2).then(()=>{
                    }).catch(error =>{
                        console.log(error)
                    })
                }
            },
            //remove employees from employee and event collections
            rem_employee(ID){
                let data = {"id":ID}    //store employeeID in obj
                let data2 = {"id":this.$route.params.id}    //store evid
                let apiURL = `http://localhost:8080/events/del-employee/${this.$route.params.id}`//backend api
                let indexOfArrayItem = this.employee.findIndex(i=>i.employeeID === ID);
                
                //remove only if true
                if(window.confirm('Remove employee from event?')){
                    //remove from events collection
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.employee.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })

                    //remove from employees collection
                    let apiURL2 = `http://localhost:8080/employees/del-event/${ID}`//backend api
                    axios.post(apiURL2, data2).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }
            },
            // add volunteer to event and volunteer collections
            add_volunteer() {
                let idv = this.new_vid.id   //store vid in object
                let data2 = {"id":this.$route.params.id}    //store evid
                
                //add volunteer to event collection
                let apiURL = `http://localhost:8080/events/add-volunteer/${this.$route.params.id}`;//backend api
                axios.post(apiURL, this.new_vid).then(() => {
                  this.$router.push('/events')  //back to events home page
                //reset 
                  this.new_vid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log('line 59 attendees')
                    console.log(error)
                });
                
                //add volunteer to volunteer collection
                let apiURL2 = `http://localhost:8080/volunteers/add-event/${idv}`//backend api
                axios.post(apiURL2, data2).then(()=>{
                }).catch(error =>{
                    console.log(error)
                })
            },
            //add employee to employee and event collections
            add_employee() {
                let ide = this.new_eid.id
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/events/add-employee/${this.$route.params.id}`;
                
                //add employee to event collection
                axios.post(apiURL, this.new_eid).then(() => {
                  this.$router.push('/events') //back to events home page
                  this.new_eid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });

                //add event to employees collection
                let apiURL2 = `http://localhost:8080/employees/add-event/${ide}`
                axios.post(apiURL2, data2).then(()=>{
                }).catch(error =>{
                    console.log(error)
                })
            }
        } 
    }
</script>

<template>
    <div>
        <h1>Event #{{event.evid}}</h1>
        <br>
        <!-- display event information and allow editing of event, and addition of volunteers and employees -->
        <fieldset class='form-control mb-5'>
            <legend><strong>{{event.ev_name}}</strong></legend>
                <!-- show event information -->
                <div class='row mb-3'>
                    <div class='col-sm-3'>
                        <label for="" class='form-label'>Host</label>
                        <input type="text" class='form-control' v-model='event.ev_host' disabled>
                    </div>
                    <div class='col-sm-3'>
                        <label for="" class='form-label'>Date</label>
                        <input type="text" class='form-control' v-model='event.ev_date' disabled>
                    </div>
                    <div class='col-sm-2'>
                        <label for="" class='form-label'>City</label>
                        <input type="text" class='form-control' v-model='event.city' disabled>
                    </div>
                    <div class='col-sm-2'>
                        <label for="" class='form-label'>State</label>
                        <input type="text" class='form-control' v-model='event.st' disabled>
                    </div>

                    <div class='col-sm-2'>
                        <label for="" class='form-label'>Zip</label>
                        <input type="text" class='form-control' v-model='event.zip' disabled>
                    </div>
                </div>
                <!-- go to events edit view -->
                <router-link :to="{name: 'events_edit', params: { id: event.evid }}" class="btn create ">Edit</router-link>
                <hr>
                <!-- add volunteer to event -->
                <div class='row mb-4'>
                    <div class='col-sm-4'>
                        <form @submit.prevent='add_volunteer'>
                            <div class='form-outline'>
                                <input type="number" id='form14' class='form-control' v-model='new_vid.id'  required>
                                <div class='form-helper'>VID#</div>
                                <button class='btn create'>Add Volunteer</button>
                            </div>
                        </form> 
                    </div>

                    <!-- add employee to event -->
                    <div class='col-sm-4'>
                        <form @submit.prevent='add_employee'>
                        <div class='form-group'>
                            <input type="number" class='form-control' v-model='new_eid.id'  required>
                            <div class='form-helper'>EID#</div>
                            <button class='btn create'>Add Employee</button>
                        </div>
                        </form> 
                    </div>  
                </div>
        </fieldset> 

        <!-- display volunteers table and allow removal -->
        <div class="row justify-content-center">
            <table class="table table-light table-hover caption-top">
                <caption><strong>Volunteers</strong></caption>  
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
                    <!-- display information for each volunteer in array, allow user to remove volunteer by vid -->
                    <tr v-for="v in volunteer" :key="v.vid">
                        <td>{{v.vid }}</td>
                        <td>{{v.first_name }}</td>
                        <td>{{v.last_name }}</td>
                        <td>{{v.phone_num }}</td>
                        <!-- call function to remove volunteer from collections -->
                        <td><button @click.prevent="rem_volunteer(v.vid)" class="btn btn-danger">Remove</button></td>
                    </tr> 
                </tbody>
            </table>
        </div>
        
        <!-- display employees table and allow removal -->
        <div class="row justify-content-center">
            <table class="table table-light table-hover caption-top">
                <caption><strong>Employees</strong></caption>
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
                     <!-- display information for each employee in array, allow user to remove employee by employeeID -->
                    <tr v-for="e in employee" :key="e.employeeID">
                        <td>{{e.employeeID }}</td>
                        <td>{{e.firstName }}</td>
                        <td>{{e.lastName }}</td>
                        <td>{{e.phone}}</td>
                        <!-- call function to remove employee from events collection -->
                        <td><button @click.prevent="rem_employee(e.employeeID)" class="btn btn-danger">Remove</button></td>
                    </tr> 
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
 @import "../../assets/app.css";
</style>

