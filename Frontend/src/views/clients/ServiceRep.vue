<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                client:[],
                //employee:[],
                service:[],
                fullservices:[],
                new_sid:{id:''},
                //new_eid:{id:''},
                active: false

            }
        },
        created(){
            let apiURL = `http://localhost:8080/clients/client-history/${this.$route.params.id}`;
            let apiURL2 = `http://localhost:8080/services`;
            axios.get(apiURL).then(res => {
                this.client = res.data[0];
                //this.employee = res.data[0].employees;
                this.service = res.data[0].services;
            }).catch(error=>{
                console.log(error)
            });

            axios.get(apiURL2).then(res =>{
                    this.fullservices = res.data
                    console.log(this.fullservices)
                }).catch(error =>{
                    console.log(error)
                })
        },
        methods:{
           /* rem_employee(ID){
                let data = {
                    "id":ID,
                }
                let apiURL = `http://localhost:8080/clients/del-emp/${this.$route.params.id}`
                let indexOfArrayItem = this.employee.findIndex(i=>i.employeeID === ID);
                
                if(window.confirm('Remove Employee from Client?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.employee.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            },*/
            rem_service(ID){
                let data = {
                    "id":ID,
                }
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/clients/del-service/${this.$route.params.id}`
                let apiURL2 = `http://localhost:8080/services/del-applicant/${ID}`
                let indexOfArrayItem = this.service.findIndex(i=>i.sid === ID);
                
                if(window.confirm('Remove Service from Client?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.service.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })

                    axios.post(apiURL2, data2).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }

                
            },
            /*add_employee() {
                let apiURL = `http://localhost:8080/clients/add-emp/${this.$route.params.id}`;
                axios.post(apiURL, this.new_eid).then(() => {
                    //changing the view to the list
                  this.$router.push('/clients')
                  this.new_eid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            },*/
            add_service() {
                let isd = this.new_sid.id
                let data = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/clients/add-service/${this.$route.params.id}`;
                let apiURL2 = `http://localhost:8080/services/add-applicant/${isd}`
                
                axios.post(apiURL, this.new_sid).then(() => {
                    //changing the view to the list
                  this.$router.push('/clients')
                  this.new_sid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });

                axios.post(apiURL2, data).then(()=>{
                    
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
                        <th>Client</th>
                        <th>First Name</th>
                        <th>Last name</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{client.cid }}</td>
                        <td>{{client.first_name }}</td>
                        <td>{{client.last_name }}</td>
                        <td>{{client.phone_number }}</td>
                        <td><router-link :to="{name: 'clients_edit', params: { id: client.cid }}" class="btn btn-secondary ">Edit</router-link></td>
                    </tr> 
                </tbody>
            </table>
        </div>
        <!-- Volunteer table -->
        <!--<div class="row justify-content-center">
            <h2 class='text-center'>Employees</h2>
            <form @submit.prevent='add_employee' class='form-inline'>
                    <div class='form-group'>
                        <label for="">EmployeeID#</label>
                        <input type="number" v-model='new_eid.id'  required>
                        <button class='btn btn-secondary'>Add Employee</button>
                    </div>
            </form> 
            <table class="table table-light table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>EmployeeID#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Primary Email</th>
                        <th>Action</th>    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="e in employee" :key="e.employeeID">
                        <td>{{e.employeeID }}</td>
                        <td>{{e.firstName }}</td>
                        <td>{{e.lastName }}</td>
                        <td>{{e.phone }}</td>
                        <td>{{e.pEmail }}</td>
                        <td><button @click.prevent="rem_employee(e.employeeID)" class="btn btn-secondary">Remove</button></td>
                
                    </tr> 
                </tbody>
            </table>
        </div>-->

        <div class="row justify-content-center">
            <h2 class='text-center'>Services</h2>
            <form @submit.prevent='add_service' class='form-inline'>
                    <div class='form-group'>
                        <label for="">SID#</label>
                        <!--<input type="number" v-model='new_sid.id'  required>-->
                        <select v-model='new_sid.id'>
                        <option value="" selected disabled>Choose a Service</option>
                        <option v-for="x in fullservices" :value="x.sid" :key="x.sid">{{x.sid}}{{" - "}}{{x.name}}</option>
                        </select>
                        <button class='btn btn-secondary'>Apply for Service</button>
                    </div>
            </form> 
                <table class="table table-light table-hover">
                    <thead class="table-dark">
                        <tr>
                        <th>SID#</th>
                        <th>Name</th>
                        <th>Renewal</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="applicants in service" :key="applicants.sid">
                            <td>{{applicants.sid }}</td>
                            <td>{{applicants.name }}</td>
                            <td>{{applicants.renewal }}</td>
                            <td><button @click.prevent="rem_service(applicants.sid)" class="btn btn-secondary">Remove</button></td>
                        </tr> 
                    </tbody>
                </table>
            </div>
    </main>
</template>