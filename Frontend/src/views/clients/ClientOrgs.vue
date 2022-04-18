<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                client:[],
                //employee:[],
                organization:[],
                fullorganizations:[],
                new_orgid:{id:''},
                //new_eid:{id:''},
                active: false

            }
        },
        created(){
            let apiURL = `http://localhost:8080/clients/client-orgs/${this.$route.params.id}`;
            let apiURL2 = `http://localhost:8080/organizations`;
            axios.get(apiURL).then(res => {
                this.client = res.data[0];
                //this.employee = res.data[0].employees;
                this.organization = res.data[0].organizations;
            }).catch(error=>{
                console.log(error)
            });

            axios.get(apiURL2).then(res =>{
                    this.fullorganizations = res.data
                    console.log(this.fullorganizations)
                }).catch(error =>{
                    console.log(error)
                })
        },
        methods:{
            rem_organization(ID){
                let data = {
                    "id":ID,
                }
                let data2 = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/clients/del-org/${this.$route.params.id}`
                let apiURL2 = `http://localhost:8080/organizations/del-client/${ID}`
                let indexOfArrayItem = this.organization.findIndex(i=>i.orgid === ID);
                
                if(window.confirm('Remove Organization from Client?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.organization.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })

                    axios.post(apiURL2, data2).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }

                
            },
            add_organization() {
                let rog = this.new_orgid.id
                let data = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/clients/add-org/${this.$route.params.id}`;
                let apiURL2 = `http://localhost:8080/organizations/add-client/${rog}`
                
                axios.post(apiURL, this.new_orgid).then(() => {
                    //changing the view to the list
                  this.$router.push('/clients')
                  this.new_orgid = {
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
                        <form @submit.prevent='add_organization'>
                            <div class="form-outline">
                                <select v-model='new_orgid.id'>
                                    <option value="" selected disabled>Choose an Organization</option>
                                    <option v-for="x in fullorganizations" :value="x.orgid" :key="x.orgid">{{x.orgid}}{{" - "}}{{x.org_name}}</option>
                                </select>
                                <button class='btn btn-secondary'>Add Organization</button>
                            </div>
                        </form>
                    </div>
                </div>
        </fieldset>
        <table class="table table-light table-hover caption-top">
            <caption><strong>Organizations</strong></caption>
            <thead class="table-dark">
                <tr>
                <th>ORGANIZATION#</th>
                <th>Name</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="organizations in organization" :key="organizations.orgid">
                    <td>{{organizations.orgid }}</td>
                    <td>{{organizations.org_name }}</td>
                    <td><button @click.prevent="rem_organization(organizations.orgid)" class="btn btn-secondary">Remove</button></td>
                </tr> 
            </tbody>
        </table>
    </div>
</template>

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