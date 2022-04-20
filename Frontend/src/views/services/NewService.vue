<script>
    import Footer from '../../components/footer.vue'
   import axios from "axios";
    //exports arrays, objects and variables
    export default {
        components:{
            Footer
        },
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
        //grab organizaton list and id before mounting dom
        created(){
            //get organization list
            let apiURL = `http://localhost:8080/organizations`
            axios.get(apiURL).then(res =>{
                this.list = res.data
                }).catch(error =>{
                    console.log(error)
                })
            //get last seq from counters colletion and add one
            let api3 = `http://localhost:8080/counters/last_sid`
                axios.get(api3).then(res =>{
                    this.num = res.data[0].seq+1
                }).catch(error => {
                    console.log(error)
                });
        },
        //define functions
        methods: {
            //create new service
            handleSubmitForm() {
                this.services.host=this.two[0] //add host name to services obj
                this.services['organizations.orgid']=parseInt(this.two[1]) //add host # to services obj
                this.data.id=this.num //add next sid to obj
                let apiURL = 'http://localhost:8080/services/new-service'; //backend api
                
                //add new service to services collection, and reset values
                axios.post(apiURL, this.services).then(() => {
                  this.$router.push('/services') //go to services view
                  this.services = {
                    name: '',
                    renewal: '',
                    notes: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
                //add service to organizations collction
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
        <!-- create new service -->
        <form @submit.prevent="handleSubmitForm">
            <!-- display fields for form creation and edit name, renewal, host, notes with v-model-->
            <fieldset class='form-control mb-5'>
                <div class="col-sm-4">
                    <label class='form-label ' for="">*Name</label>
                    <input type="text" class='form-control' v-model='services.name' required>
                </div>
                <br>
                <div class='row mb-4'>
                    <div class='col mb-4 '>
                        <!-- allow user to pick from radio buttons -->
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
                        <!-- allow user to pick from  dropdown-->
                        <label for="" class='form-label'>*Host</label>
                        <select class="form-select" aria-label="Default select example" v-model='two'>
                                <option value="" selected disabled>Choose an Organization</option>
                                <!-- display list of organizations from array and store choice in array -->
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
        <Footer />
    </div>  
</template>

<style scoped>
 @import "../../assets/app.css";
</style>