<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                client:[],
                employee:[],
                service:[],
                new_sid:{id:''},
                new_eid:{id:''},
                active: false

            }
        },
        created(){
            let apiURL = `http://localhost:8080/clients/client-history`;
            axios.get(apiURL).then(res => {
                this.client = res.data[0];
                this.employee = res.data[0].employees;
                this.service = res.data[0].services;
                
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            rem_employee(ID){
                let data = {
                    "id":ID,
                }
                let apiURL = `http://localhost:8080/clients/add-emp/${this.$route.params.id}`
                let indexOfArrayItem = this.employee.findIndex(i=>i.employeeID === ID);
                
                if(window.confirm('Remove Employee from Client?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.employee.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            },
            rem_service(ID){
                let data = {
                    "id":ID,
                }
                let apiURL = `http://localhost:8080/clients/del-service/${this.$route.params.id}`
                let indexOfArrayItem = this.service.findIndex(i=>i.sid === ID);
                
                if(window.confirm('Remove Service from Client?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.service.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            },
            add_employee() {
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
            },
            add_service() {
                let apiURL = `http://localhost:8080/clients/add-service/${this.$route.params.id}`;
                
                axios.post(apiURL, this.new_sid).then(() => {
                    //changing the view to the list
                  this.$router.push('/clients')
                  this.new_sid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
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
        <div class="row justify-content-center">
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
        </div>

        <div class="row justify-content-center">
            <h2 class='text-center'>Services</h2>
            <form @submit.prevent='add_service' class='form-inline'>
                    <div class='form-group'>
                        <label for="">SID#</label>
                        <input type="number" v-model='new_sid.id'  required>
                        <button class='btn btn-secondary'>Add Service</button>
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
                        <tr v-for="s in service" :key="s.sid">
                            <td>{{s.sid }}</td>
                            <td>{{s.name }}</td>
                            <td>{{s.renewal }}</td>
                            <td><button @click.prevent="rem_service(s.sid)" class="btn btn-secondary">Remove</button></td>
                        </tr> 
                    </tbody>
                </table>
            </div>
    </main>
</template>