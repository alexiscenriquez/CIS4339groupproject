<script>
import axios from "axios";

export default {
     data() {
        return {
            //events_list:{}
            services: {},
            organizations:[],
            two:[],
            cur_host:'',
            cur_host_num:''
        }
    },
    created() {
        let apiURL = `http://localhost:8080/services/find/${this.$route.params.id}`;

        axios.get(apiURL).then(res => {
            this.services = res.data[0];
            this.cur_host = res.data[0].ev_host
            this.cur_host_num = res.data[0].organizations.orgid
        }).catch(error =>{
            console.log(error)
        });
        let apiURL2 = `http://localhost:8080/organizations`
            axios.get(apiURL2).then(res =>{
                    this.organizations = res.data
                }).catch(error =>{
                    console.log(error)
                })

    },
    methods: {
        UpdateService() {
            let data = {'id':this.$route.params.id}
            this.services.host=this.two[0]
            this.services.organizations.orgid=parseInt(this.two[1])
            let apiURL = `http://localhost:8080/services/update/${this.$route.params.id}`;

            axios.put(apiURL, this.services).then((res) => {
                console.log(res)
                this.$router.push('/services')
            }).catch(error => {
                console.log(error)
            });

            if(this.cur_host == this.two[0]){
                this.$router.push('/services')
            }else{
                //delete current organization from event
                let api3 = `http://localhost:8080/organizations/del-service/${this.cur_host_num}`
                axios.post(api3, data).then((res)=>{
                    console.log(res)
                }).catch(error=>{
                    console.log(error)
                })

                //add event to organization
                let api4 = `http://localhost:8080/organizations/add-service/${this.two[1]}`
                axios.post(api4, data).then(res =>{
                    this.$router.push('/services')
                }).catch(error => {
                    console.log(error)
                });

            }
        }
    }
    }
</script>

<template>
    <div>
        <h1>Edit Service #{{services.sid}}</h1>
        <form @submit.prevent="UpdateService">
        <fieldset class='form-control mb-5'>
            <div class='form-control mb-4'>
                <div>
                    <label class='form-label' for="">*Name</label>
                    <input type="text" class='form-control' v-model='services.name' required>
                </div>

                <div class='col-sm-4'>
                    <label for="" class='form-label'>*Current Host: {{services.host}}</label>
                    <select class="form-select" aria-label="Default select example" v-model='two'>
                            <option value="" selected disabled>Choose an Organization</option>
                            <option v-for="x in organizations" :value="[x.org_name,x.orgid]" :key="x.orgid">{{x.orgid}}{{" - "}}{{x.org_name}}</option>
                    </select>
                    <p>Select current or change host</p>
                </div>

            </div>
            <div class='row mb-4'>
                <div class='col'>
                    <label>*Renewal</label>
                    <div class="form-check">
                    <input type="radio" class="form-check-input" id="Monthly" value="Monthly" v-model="services.renewal">Monthly
                    <label class="form-check-label" for="Monthly"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="SemiAnually" value="SemiAnnually" v-model="services.renewal">SemiAnnually
                    <label class="form-check-label" for="SemiAnually"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Annually" value="Yearly" v-model="services.renewal">Yearly  
                    <label class="form-check-label" for="Annually"></label>
                </div>
                    
                </div>
                <div class='col'>
                    <div class='form-group'>
                        <label for="">Notes</label>
                        <textarea class='form-control'  cols="5" rows="5" v-model="services.notes"></textarea>

                    </div>
                   
                </div>
            </div>

        </fieldset>
        <button class="btn mb-5" id="create">Update</button>
        </form>
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