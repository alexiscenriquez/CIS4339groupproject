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
                organizations:[],
                two:[]
                
            }
        },
        created(){
            
            let apiURL = `http://localhost:8080/organizations`
            axios.get(apiURL).then(res =>{
                    this.organizations = res.data
                }).catch(error =>{
                    console.log(error)
                })
        },
        methods: {
            handleSubmitForm() {
                this.event.ev_host=this.two[0]
                let apiURL = 'http://localhost:8080/events/new-event';
                let data={'id':''}
                let last_id = ''

                axios.post(apiURL, this.event).then(() => {
                    //changing the view to the list
                  
                  this.event = {
                    ev_name: '',
                    ev_date: '',
                    addr: '',
                    city:'',
                    st:'',
                    country:'',
                    zip:'',  
                  }
                  this.two = []
                }).catch(error => {
                    console.log(error)
                });

                let api3 = `http://localhost:8080/events/last_id`
                axios.get(api3).then(res =>{
                    last_id = res.data[0].evid
                    data.id = parseInt(last_id)
                }).catch(error => {
                    console.log(error)
                });

                let apiURL2 = `http://localhost:8080/organizations/add-event/${this.two[1]}`
                axios.post(apiURL2, data).then(res =>{
                    console.log('line 65', data)
                    this.$router.push('/events')
                }).catch(error => {
                    console.log(error)
                });
            
            }
        } 
           
    }
</script>

<template>
    <div>
        <h1>Create Event</h1>
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
                                <option v-for="x in organizations" :value="[x.org_name,x.orgid]" :key="x.orgid">{{x.orgid}}{{" - "}}{{x.org_name}}</option>
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
        <button class="btn mb-5" id="create">Create</button>
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