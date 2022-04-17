<template>
    <div>
            <!-- Update Student content -->
            <h1>Update Event#{{event.evid}} </h1>
            
            <form @submit.prevent="UpdateEvent">
                <fieldset class='form-control mb-5'>
                
                <div class='row mb-4'>
                <div class='col-sm-4'>
                    <label for="" class='form-label'>*Name</label>
                    <input type="text" class='form-control' v-model="event.ev_name" required>
                </div>
                
                <div class='col-sm-4'>
                    <label for="" class='form-label'>*Host</label>
                    <input type="text" class='form-control' v-model="event.ev_host" required>
                </div>
                
                <div class='col-sm-4'>
                    <label for="" class='form-label'>*Date</label>
                    <input type="date" class='form-control' v-model="date" required>
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
        
        <button class="btn mb-5" id="create">Update</button>
        </form>
       <Footers />
        
    </div>
</template>

<script>
    import axios from "axios";
    import Footers from '../../components/footer.vue'

export default {
    components:{
        Footers
    },
    data() {
        return {
            event: {}, 
            date:''
        }
    },
    created() {
        let apiURL = `http://localhost:8080/events/find/${this.$route.params.id}`;
        axios.get(apiURL).then(res => {
            this.event = res.data[0];
            this.date = res.data[0].ev_date.slice(0, 10)
        }).catch(error =>{
            console.log(error)
        });
    },
    methods: {
        UpdateEvent() {
            this.event.ev_date=this.date
            let apiURL = `http://localhost:8080/events/update/${this.$route.params.id}`;

            axios.put(apiURL, this.event).then((res) => {
                console.log(res)
                this.$router.push('/events')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>

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