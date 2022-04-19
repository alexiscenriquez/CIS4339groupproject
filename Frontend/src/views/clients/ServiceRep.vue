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
    <div>
        <h1>Client #{{client.cid}}</h1>
        <br>
        <fieldset class="form-control mb-5">
            <legend><strong>{{client.first_name}}{{" "}}{{client.last_name}}</strong></legend>
                <div class="'row mb-3">
                    <div class="col-sm-2">
                        <label for="" class="form-label">First Name</label>
                        <input type="text" class="'form-control" v-model="client.first_name" disabled>
                    </div>
                    <div class="col-sm-2">
                        <label for="" class="form-label">Last Name</label>
                        <input type="text" class="'form-control" v-model="client.last_name" disabled>
                    </div>
                    <div class="col-sm-2">
                        <label for="" class="form-label">Phone Number</label>
                        <input type="text" class="'form-control" v-model="client.phone_number" disabled>
                    </div>
                </div>
                <td><router-link :to="{name: 'clients_edit', params: { id: client.cid }}" class="btn btn-secondary ">Edit</router-link></td>
                <hr>
                <div class="row mb-4">
                    <div class="col-sm-4">
                        <form @submit.prevent='add_service'>
                            <div>
                                <select v-model='new_sid.id' class="form-control">
                                    <option value="" selected disabled>Choose a Service</option>
                                    <option v-for="x in fullservices" :value="x.sid" :key="x.sid">{{x.sid}}{{" - "}}{{x.name}}</option>
                                </select>
                                <div class='form-helper'>SID# - Name</div>
                                <button class='btn btn-secondary'>Apply for Service</button>
                            </div>
                        </form>
                    </div>
                </div>
        </fieldset>
        <table class="table table-light table-hover caption-top">
            <caption><strong>Services</strong></caption>
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
</template>

<!-- rem_employee(ID){-->
                <!--let data = {
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
            }, -->

<!--add_employee() {
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
            },-->

<!-- Employee table -->
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

<style scoped>
h1{
  font-size: 26px;
  text-align: center;
  margin-top: 80px;
}
form {
  margin-top: 50px;
}
#create{
  background-color: #A6A7A8;
}
#create:hover{
  background-color: #2E5902;
  color: white;
}

</style>