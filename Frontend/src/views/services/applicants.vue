<script>
    import axios from 'axios'
    
    //exports arrays and objects
    export default{
        data(){
            return{
                service:[],
                clients:[],
                new_cid:{id:''}
            }
        },
        //grab applicants data info before mounting dom
        created(){
            let apiURL = `http://localhost:8080/services/all-applicants/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.service = res.data[0];
                this.clients = res.data[0].clients
            }).catch(error=>{
                console.log(error)
            });
        },
        //define functions
        methods:{
            //add client to client and event collection
            add_applicant(){
                let idc = this.new_cid.id //add cid to obj
                let data = {"id":this.$route.params.id} //store sid
                //apis required from backend
                let apiURL = `http://localhost:8080/services/add-applicant/${this.$route.params.id}`;
                let apiURL2 = `http://localhost:8080/clients/add-service/${idc}`
                
                ///add client to 
                axios.post(apiURL, this.new_cid).then(() => {
                  this.$router.push('/services')
                  this.new_cid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });

                //add to clients table
                    axios.post(apiURL2, data).then(()=>{
                    }).catch(error =>{
                        console.log(error)
                    })
            },
            
            rem_applicant(ID){
                let data = {"id":ID}
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/services/del-applicant/${this.$route.params.id}`
                let apiURL2 = `http://localhost:8080/clients/del-service/${ID}`
                let indexOfArrayItem = this.clients.findIndex(i=>i.cid === ID);
                
                if(window.confirm('Remove Client from event?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.clients.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                
                    //remove from clients table
                    axios.post(apiURL2, data2).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }
            }
        } 
    
    }
</script>

<template>
    <div>
        <h1>{{service.name}} #{{service.sid}}</h1>
        <br>
    <fieldset class='form-control mb-5'>
        <div>
            
            <div class='row mb-4'>
                <div class='col'>
                    <legend><strong>{{service.name}}</strong></legend>
                    
                </div>
                <div class='col'>
                    <label>Renewal type: {{service.renewal}}</label>
                    
                </div>
            </div>
            <div class='row-mb-4'>
                <div class='col-6'>
                    <label for="">Notes:</label>
                    <textarea class='form-control'  cols="5" rows="5" v-model='service.notes' disabled></textarea>
                </div>
            </div>
            <router-link :to="{name:'services_edit', params:{id:service.sid}}" class='btn btn-secondary'>Edit</router-link>
            <hr>

            <div class='row-mb-4'>
                <div class='col-sm-4'>
            <form @submit.prevent='add_applicant'>
                    <div class='form-group'>
                        <input type="number" class='form-control' v-model='new_cid.id'  required>
                        <div class='form-helper'>CID#</div>
                        <button class='btn btn-secondary'>Add Client</button>
                    </div>
            </form> 
                </div>
            </div>
        </div>
    </fieldset>
        <table class="table table-light table-hover caption-top">
            <caption><strong>Applicants</strong></caption>
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Phone#</th>
                        <th>Email</th>
                        <th></th>    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in clients" :key="client.cid">
                        <td>{{client.cid }}</td>
                        <td>{{client.first_name }}</td>
                        <td>{{client.mid_name }}</td>
                        <td>{{client.last_name }}</td>
                        <td>{{client.phone_number }}</td>
                        <td>{{client.primary_email }}</td>
                        <td><button @click.prevent="rem_applicant(client.cid)" class="btn btn-secondary">Delete</button></td>
                
                    </tr> 
                </tbody>
            </table>
    
    </div>
    
</template>

<style scoped>
@import "../../assets/app.css";
</style>