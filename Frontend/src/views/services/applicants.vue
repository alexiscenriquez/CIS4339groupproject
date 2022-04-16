<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                service:[],
                clients:[],
                new_cid:{id:''}
            }
        },
        created(){
            let apiURL = `http://localhost:8080/services/all-applicants/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.service = res.data[0];
                this.clients = res.data[0].clients
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            add_applicant(){
                let idc = this.new_cid.id
                let data = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/services/add-applicant/${this.$route.params.id}`;
                let apiURL2 = `http://localhost:8080/clients/add-service/${idc}`
                
                ///add client to applicants
                axios.post(apiURL, this.new_cid).then(() => {
                    //changing the view to the list
                //   this.$router.push('/services')
                    // this.volunteer.push(idv)
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
    <fieldset class='form-control mb-5'>
        <div>
            
            <div class='row mb-4'>
                <div class='col'>
                    <legend><strong>{{service.name}}</strong></legend>
                    
                </div>
                <div class='col'>
                    <label>Service# {{service.sid}}</label>
                    
                </div>
            </div>
            <div class='row-mb-4'>
                <div class='col-6'>
                    <label for="">Notes:</label>
                    <textarea class='form-control'  cols="5" rows="5" v-model='service.notes' disabled></textarea>
                </div>
            </div>
            <hr>

            <legend>Applicants</legend>
            <form @submit.prevent='add_applicant' class='form-inline'>
                    <div class='form-group'>
                        <label for="">CID#</label>
                        <input type="number" v-model='new_cid.id'  required>
                        <button class='btn btn-secondary'>Add</button>
                    </div>
            </form> 
            <table class="table table-light table-hover">
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

    </fieldset>
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