<script>
   import axios from "axios";

    export default {
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
                data:{}
            }
        },
        created(){
            let id = ''
            let apiURL = `http://localhost:8080/organizations`
            axios.get(apiURL).then(res =>{
                    this.list = res.data
                }).catch(error =>{
                    console.log(error)
                })
        
            let api3 = `http://localhost:8080/events/last_id`
                axios.get(api3).then(res =>{
                    id = res.data[0].evid
                    this.data.id = parseInt(id)+1
                }).catch(error => {
                    console.log(error)
                });
        },
        methods: {
             
            handleSubmitForm() {

                this.event.ev_host=this.two[0]
                console.log('line 42 NewEvent',this.two[1])
                
                this.event['organizations.orgid']=parseInt(this.two[1])
                let apiURL = 'http://localhost:8080/events/new-event';
                
                axios.post(apiURL, this.event).then(() => {
                    //changing the view to the list
                    this.$router.push('/events')
                  this.event = {
                    ev_name: '',
                    ev_date: '',
                    addr: '',
                    city:'',
                    st:'',
                    country:'',
                    zip:''
                  }
                  this.two = []
                }).catch(error => {
                    console.log(error)
                });
                let apiURL2 = `http://localhost:8080/organizations/add-event/${this.two[1]}`
                
                axios.post(apiURL2, this.data).then(res =>{
                    console.log('line 65', this.data)
                    this.data={}
                    
                }).catch(error => {
                    console.log(error)
                });
            
                
            }}
           
           
    }
</script>

<template>
    <div>
        <h1 class="text-center">Create Event</h1>
        <form @submit.prevent="handleSubmitForm">
        <fieldset class='form-control mb-5'>
            
            <div class='row mb-4'>
                <div class='col-sm-4'>
                    <label for="" class='form-label'>*Name</label>
                    <input type="text" class='form-control' v-model="event.ev_name" required>
                </div>
                
                <div class='col-sm-4'>
                    <label for="" class='form-label'>*Host(Organization)</label>
                        <select class="form-select" aria-label="Default select example" v-model='two'>
                                <option value="" selected disabled>Choose an Organization</option>
                                <option v-for="x in list" :value="[x.org_name,x.orgid]" :key="x.orgid">{{x.orgid}}{{" - "}}{{x.org_name}}</option>
                        </select>
                </div>
                
                <div class='col-sm-4'>
                    <label for="" class='form-label'>*Date</label>
                    <input type="date" class='form-control' v-model="event.ev_date" required>
                </div>
            </div>
        </fieldset>

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
        <button class="btn mb-5 create">Create</button>
        </form>
    </div>  

</template>

<style scoped>
 @import "../../assets/app.css";
</style>