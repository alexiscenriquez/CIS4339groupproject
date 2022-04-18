<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                organization:[],
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
            let apiURL = `http://localhost:8080/organizations/organization-peoples/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.organization = res.data[0];
                this.volunteer = res.data[0].volunteers;
                this.client = res.data[0].clients;
                this.employee = res.data[0].employees;
                
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            rem_volunteer(ID){
                let data = {"id":ID}
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/organizations/del-vol/${this.$route.params.id}`
                let indexOfArrayItem = this.volunteer.findIndex(i=>i.vid === ID);
                
                if(window.confirm('Remove Volunteer from Event?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.volunteer.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                    //remove from volunteers table
                    let apiURL2 = `http://localhost:8080/volunteers/del-org/${ID}`
                    axios.post(apiURL2, data2).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }
            },
            //remove employees from organization
            rem_employee(ID){
                let data = {"id":ID}
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/organizations/del-emp/${this.$route.params.id}`
                let indexOfArrayItem = this.employee.findIndex(i=>i.employeeID === ID);
                
                if(window.confirm('Remove employee from organization?')){
                    //remove from events collection
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.employee.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })

                    //remove from employees table
                    let apiURL2 = `http://localhost:8080/employees/del-org/${ID}`
                    axios.post(apiURL2, data2).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }
            },

            rem_client(ID){
                let data = {"id":ID}
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/organizations/del-client/${this.$route.params.id}`
                let indexOfArrayItem = this.client.findIndex(i=>i.cid === ID);
                
                if(window.confirm('Remove client from organization?')){
                    //remove from events collection
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.client.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })

                    //remove from employees table
                    let apiURL2 = `http://localhost:8080/clients/del-org/${ID}`
                    axios.post(apiURL2, data2).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }
            },
            // add volunteers to events
            add_volunteer() {
                
                let idv = this.new_vid.id
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/organizations/add-vol/${this.$route.params.id}`;
                axios.post(apiURL, this.new_vid).then(() => {
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

                let apiURL2 = `http://localhost:8080/volunteers/add-org/${idv}`
                axios.post(apiURL2, data2).then(()=>{
                    
                }).catch(error =>{
                    console.log(error)
                })
            },
            //add employees to events
            add_employee() {
                let ide = this.new_eid.id
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/organizations/add-emp/${this.$route.params.id}`;
                
                axios.post(apiURL, this.new_eid).then(() => {
                    //changing the view to the list
                    this.$router.push('/organizations')
                  this.new_eid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });

                let apiURL2 = `http://localhost:8080/employees/add-org/${ide}`
                axios.post(apiURL2, data2).then(()=>{
                    // this.employee.push(ide)
                }).catch(error =>{
                    console.log(error)
                })
            },

            // add volunteers to events
            add_client() {
                
                let dic = this.new_cid.id
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/organizations/add-client/${this.$route.params.id}`;
                let apiURL2 = `http://localhost:8080/clients/add-org/${dic}`
                axios.post(apiURL, this.new_cid).then(() => {
                    //changing the view to the list
                    this.$router.push('/organizations')
                    // this.volunteer.push(idv)
                  this.new_cid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log('line 59 attendees')
                    console.log(error)
                });

                axios.post(apiURL2, data2).then(()=>{
                    
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
        <fieldset class='form-control mb-5'>
            <legend><strong>{{organization.org_name}}</strong></legend>
                <div class='row mb-3'>
                    <div class='col-sm-3'>
                        <label for="" class='form-label'>Organization</label>
                        <input type="text" class='form-control' v-model='organization.org_name' disabled>
                    </div>
                    <div class='col-sm-4'>
                        <form @submit.prevent='add_volunteer'>
                            <div class='form-outline'>
                                <input type="number" id='form14' class='form-control' v-model='new_vid.id'  required>
                                <div class='form-helper'>VID#</div>
                                <button class='btn btn-secondary'>Add Volunteer</button>
                            </div>
                        </form> 
                    </div>
                    
                    <div class='col-sm-4'>
                        <form @submit.prevent='add_employee'>
                        <div class='form-group'>
                            <input type="number" class='form-control' v-model='new_eid.id'  required>
                            <div class='form-helper'>EID#</div>
                            <button class='btn btn-secondary'>Add Employee</button>
                        </div>
                        </form> 
                    </div>

                    <div class='col-sm-4'>
                        <form @submit.prevent='add_client'>
                        <div class='form-group'>
                            <input type="number" class='form-control' v-model='new_cid.id'  required>
                            <div class='form-helper'>CID#</div>
                            <button class='btn btn-secondary'>Add Client</button>
                        </div>
                        </form> 
                    </div>
                    
                </div>
        </fieldset> 

        <!-- Volunteer table -->
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

        <div class="row justify-content-center">
           
            <table class="table table-light table-hover caption-top">
                <caption><strong>Clients</strong></caption>
                <thead class="table-dark">
                    <tr>
                        <th>Client#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone#</th>
                        <th></th>    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="c in client" :key="c.cid">
                        <td>{{c.cid }}</td>
                        <td>{{c.first_name }}</td>
                        <td>{{c.last_name}}</td>
                        <td>{{c.phone}}</td>
                        <td><button @click.prevent="rem_client(c.cid)" class="btn btn-secondary">Remove</button></td>
                    </tr> 
                </tbody>
            </table>
        </div>
    </div>

    
</template>

<style scoped>
h1 {
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

