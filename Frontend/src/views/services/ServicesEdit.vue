<script>
import axios from "axios";
import Footer from '../../components/footer.vue'

export default {
    components:{
            Footer
        },
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
    //grab service data before mounting dom
    created() {
        //get single service information
        let apiURL = `http://localhost:8080/services/find/${this.$route.params.id}`;
        axios.get(apiURL).then(res => {
            this.services = res.data[0]; //store services data
            this.cur_host = res.data[0].ev_host //store current host in obj
            this.cur_host_num = res.data[0].organizations.orgid //store cuurent host# in obj
        }).catch(error =>{
            console.log(error)
        });
        
        //get list of organizations
        let apiURL2 = `http://localhost:8080/organizations`
            axios.get(apiURL2).then(res =>{
                    this.organizations = res.data
                }).catch(error =>{
                    console.log(error)
                })

    },
    //define functions
    methods: {
        //update services data on db
        UpdateService() {
            let data = {'id':this.$route.params.id} //add sid to obj
            this.services.host=this.two[0] //add host to services object
            this.services.organizations.orgid=parseInt(this.two[1]) //add host# to services obj
            
            //update service and services collection
            let apiURL = `http://localhost:8080/services/update/${this.$route.params.id}`;
            axios.put(apiURL, this.services).then((res) => {
                console.log(res)
            }).catch(error => {
                console.log(error)
            });

            //if not changes to the host
            if(this.cur_host == this.two[0]){
                this.$router.push('/services') //go to services view
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
        <!-- updates service information -->
        <form @submit.prevent="UpdateService">
        <!-- display and allow changes to name, host, renewal, notes data w/ v-model -->
        <fieldset class='form-control mb-5'>
            <div class=' mb-4'>
                <div>
                    <label class='form-label' for="">*Name</label>
                    <input type="text" class='form-control' v-model='services.name' required>
                </div>

                <div class='col-sm-4'>
                    <!-- allow user to pick from  dropdown-->
                    <label for="" class='form-label'>*Current Host: {{services.host}}</label>
                    <select class="form-select" aria-label="Default select example" v-model='two'>
                        <option value="" selected disabled>Choose an Organization</option>
                        <!-- display list of organizations from array and store choice in array -->
                        <option v-for="x in organizations" :value="[x.org_name,x.orgid]" :key="x.orgid">{{x.orgid}}{{" - "}}{{x.org_name}}</option>
                    </select>
                    <p>Select current or change host</p>
                </div>

            </div>
            <div class='row mb-4'>
                <div class='col'>
                    <!-- allow user to pick from radio buttons -->
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
        <button class="btn mb-5 create">Update</button>
        </form>
        <Footer />
    </div>  

</template>

<style scoped>
@import "../../assets/app.css";
</style>