<script>
   import axios from "axios";

    export default {
        data() {
            return {
                services: {
                    name: '',
                    renewal:'',
                    notes: ''
                },
                list:[],
                two:[],
                data:{},
                num:''
            }
        },
        created(){
            let apiURL = `http://localhost:8080/organizations`
            axios.get(apiURL).then(res =>{
                this.list = res.data
                }).catch(error =>{
                    console.log(error)
                })
        
            let api3 = `http://localhost:8080/counters/last_sid`
                axios.get(api3).then(res =>{
                    this.num = res.data[0].seq+1
                }).catch(error => {
                    console.log(error)
                });
        },
        methods: {
            handleSubmitForm() {
                this.services.host=this.two[0]
                this.services['organizations.orgid']=parseInt(this.two[1])
                this.data.id=this.num
                let apiURL = 'http://localhost:8080/services/new-service';
                
                axios.post(apiURL, this.services).then(() => {
                    //changing the view to the list
                  this.$router.push('/services')
                  this.services = {
                    name: '',
                    renewal: '',
                    notes: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
                //add service to organization
                let apiURL2 = `http://localhost:8080/organizations/add-service/${this.two[1]}`
                
                axios.post(apiURL2, this.data).then(res =>{
                    console.log('line 52 newservice', this.data)
                    this.data={},
                    this.two=[]

                }).catch(error => {
                    console.log(error)
                });
            
            }
        } 
           
    }
</script>

<template>
    <div>
        <h1 class="text-center">Create Service</h1>
        <form @submit.prevent="handleSubmitForm">
        <fieldset class='form-control mb-5'>
                <div class="col-sm-4">
                    <label class='form-label ' for="">*Name</label>
                    <input type="text" class='form-control' v-model='services.name' required>
                </div>
            <br>
            <div class='row mb-4'>
                <div class='col mb-4 '>
                    <label class="form-label">*Renewal</label>
                    <div class="form-check">
                    <input type="radio" class="form-check-input" id="Monthly" value="Monthly" v-model="services.renewal">Monthly
                    <label class="form-check-label" for="Monthly"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="SemiAnually" value="SemiAnnually" v-model="services.renewal">SemiAnnually
                    <label class="form-check-label" for="SemiAnually"></label>
                    <br>
                    <input type="radio" class="form-check-input " id="Annually" value="Yearly" v-model="services.renewal">Yearly  
                    <label class="form-check-label" for="Annually"></label>
                </div>
                <div class='col'>
                    <div class='col-sm-4 mt-4'>
                    <label for="" class='form-label'>*Host</label>
                    <select class="form-select" aria-label="Default select example" v-model='two'>
                            <option value="" selected disabled>Choose an Organization</option>
                            <option v-for="x in list" :value="[x.org_name,x.orgid]" :key="x.orgid">{{x.orgid}}{{" - "}}{{x.org_name}}</option>
                    </select>
                    </div>
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
        <button class="btn mb-5 create">Create</button>
        </form>
    </div>  

</template>

<style scoped>
 @import "../../assets/app.css";
</style>