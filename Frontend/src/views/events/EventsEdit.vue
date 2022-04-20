<script>
    import axios from "axios";
    import Footers from '../../components/footer.vue'
//exports arrays, objects and variables
export default {
    components:{
        Footers
    },
    data() {
        return {
            event: {}, 
            date:'',
            organizations:[],
            two:[],
            cur_host:'',
            cur_host_num:''
        }
    },
    //grab event and organization data before mouting dom
    created() {
        //get single event information 
        let apiURL = `http://localhost:8080/events/find/${this.$route.params.id}`; //backdend api
        axios.get(apiURL).then(res => {
            this.event = res.data[0]; //store events data
            this.date = res.data[0].ev_date.slice(0, 10) //store date without time
            this.cur_host = res.data[0].ev_host //store current host name
            this.cur_host_num = res.data[0].organizations.orgid //store host number

        }).catch(error =>{
            console.log(error)
        });
        //get organization list
        let apiURL2 = `http://localhost:8080/organizations`
            axios.get(apiURL2).then(res =>{
                    this.organizations = res.data
                }).catch(error =>{
                    console.log(error)
                })
    },
    //define functions
    methods: {
        //update event data on db
        UpdateEvent() {
            let data = {'id':this.$route.params.id} //store evid
            this.event.ev_date=this.date    //add date to event object
            this.event.ev_host=this.two[0]  //add host to event object
            this.event.organizations.orgid=parseInt(this.two[1])  //add orgid to event object
            
            //update events table and host id and array
            let apiURL = `http://localhost:8080/events/update/${this.$route.params.id}`;
            axios.put(apiURL, this.event).then((res) => {
                console.log(res)
                
            }).catch(error => {
                console.log(error)
            });

            //if no changes to host
            if(this.cur_host == this.two[0]){
                this.$router.push('/events')
            }else{
                //delete current organization from event
                let api3 = `http://localhost:8080/organizations/del-event/${this.cur_host_num}`
                axios.post(api3, data).then((res)=>{
                    console.log(res)
                }).catch(error=>{
                    console.log(error)
                })

                //add event to organization
                let api4 = `http://localhost:8080/organizations/add-event/${this.two[1]}`
                axios.post(api4, data).then(res =>{
                    this.$router.push('/events')
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
        <h1>Update Event#{{event.evid}} </h1>
        <!-- updates event information -->
        <form @submit.prevent="UpdateEvent">
            <!-- display and allow changes to name, host and date data w/ v-model -->
            <fieldset class='form-control mb-5'>
                <div class='row mb-4'>
                    <div class='col-sm-4'>
                        <label for="" class='form-label'>*Name</label>
                        <input type="text" class='form-control' v-model="event.ev_name" required>
                    </div>
                    
                    <div class='col-sm-4'>
                        <label for="" class='form-label'>*Current Host: {{event.ev_host}}</label>
                        <!-- organizations dropdown -->
                        <select class="form-select" aria-label="Default select example" v-model='two'>
                                <option value="" selected disabled>Choose an Organization</option>
                                <!-- display organizations list, store in array -->
                                <option v-for="x in organizations" :value="[x.org_name,x.orgid]" :key="x.orgid">{{x.orgid}}{{" - "}}{{x.org_name}}</option>
                        </select>
                        <p>Select current or change host</p>
                    </div>
                    
                    <div class='col-sm-4'>
                        <label for="" class='form-label'>*Date</label>
                        <input type="date" class='form-control' v-model="date" required>
                    </div>
                </div>
            </fieldset>
            
            <!-- display and allow changes address data w/ v-model -->
            <fieldset class='form-control mb-5'>
                <legend>Address</legend>
                <!-- row 1 -->
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
                    <!-- row 2 -->
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
            <button class="btn mb-5" id="create">Update</button>
        </form>
        <Footers />
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