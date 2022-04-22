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
                event: {
                   ev_name: '',
                   ev_host: '',
                   addr: '',
                   city:'',
                   st:'',
                   country:'',
                   zip:''
                },
                list:[],
                two:[],
                data:{},
                num:''
            }
        },
        //grab id and organization data before mounting dom
        created(){
            //get list of organizations
            let apiURL = `http://localhost:8080/organizations`
            axios.get(apiURL).then(res =>{
                    this.list = res.data
                }).catch(error =>{
                    console.log(error)
                })

            //get seq number from counters collection and add one 
            let api3 = `http://localhost:8080/counters/last_evid`
                axios.get(api3).then(res =>{
                    this.num = res.data[0].seq + 1
                }).catch(error => {
                    console.log(error)
                });
        },
        //define functions
        methods: {
            //create new event
            handleSubmitForm() {
                this.event.ev_host=this.two[0] //add host name to event object
                this.event['organizations.orgid']=parseInt(this.two[1]) //add host # to event object
                this.data.id=this.num //add next vid to data obj
                let apiURL = 'http://localhost:8080/events/new-event'; //backend api
                
                //add event to events collection and reset event obj
                axios.post(apiURL, this.event).then(() => {
                    //changing the view to the list
                    this.$router.push('/events')    //go back to events home page
                    this.event = {
                        ev_name: '',
                        ev_date: '',
                        addr: '',
                        city:'',
                        st:'',
                        country:'',
                        zip:''
                    }
                }).catch(error => {
                    console.log(error)
                });

                //add event to organizations collection
                let apiURL2 = `http://localhost:8080/organizations/add-event/${this.two[1]}`
                axios.post(apiURL2, this.data).then(res =>{
                    this.data={},
                    this.two = []
                }).catch(error => {
                    console.log(error)
                });
            }
        }     
    }
</script>

<template>
    <div>
        <h1 class="text-center">Create Event</h1>
        <!-- creates new event -->
        <form @submit.prevent="handleSubmitForm">
            <!-- display fields for form creation: name, host with v-model-->
            <fieldset class='form-control mb-5'>
                <div class='row mb-4'>
                    <div class='col-sm-4'>
                        <label for="" class='form-label'>*Name</label>
                        <input type="text" class='form-control' v-model="event.ev_name" required>
                    </div>
                    
                    <div class='col-sm-4'>
                        <label for="" class='form-label'>*Host(Organization)</label>
                        <!-- organizations dropdown -->
                        <select class="form-select" aria-label="Default select example" v-model='two' required>
                                <option value="" selected disabled>Choose an Organization</option>
                                <!-- display organizations list, store in array -->
                                <option v-for="x in list" :value="[x.org_name,x.orgid]" :key="x.orgid">{{x.orgid}}{{" - "}}{{x.org_name}}</option>
                        </select>
                    </div>
                    <div class='col-sm-4'>
                        <label for="" class='form-label'>*Date</label>
                        <input type="date" class='form-control' v-model="event.ev_date" required>
                    </div>
                </div>
            </fieldset>
            
            <!-- display fields for form creation: address with v-model-->
            <fieldset class='form-control mb-5'>
                <legend>Address</legend>
                    <div class='row mb-3'>
                        <div class='col-sm-6'>
                            <label for="" class='form-label'>*Street</label>
                            <input type="text" class='form-control' v-model='event.addr' required>
                        </div>
                        <div class='col-sm-3'>
                            <label for="" class='form-label'>*City</label>
                            <input type="text" class='form-control' v-model='event.city' required>
                        </div>
                        <div class='col-sm-3'>
                            <label for="" class='form-label'>*State</label>
                            <input type="text" class='form-control' v-model='event.st' required>
                        </div>
                    </div>
                    <div class='row mb-3'>
                        <div class='col-sm-6'>
                            <label for="" class='form-label'>*Country</label>
                            <input type="text" class='form-control' v-model='event.country' required>
                        </div>
                        <div class='col-sm-3'>
                            <label for="" class='form-label'>*Zip</label>
                            <input type="text" class='form-control' v-model='event.zip' required>
                        </div>
                    </div>
            </fieldset>
            <!-- submit form -->
            <button class="btn mb-5 create">Create</button>
        </form>
        <Footer />
    </div>  
</template>

<style scoped>
 @import "../../assets/app.css";
</style>