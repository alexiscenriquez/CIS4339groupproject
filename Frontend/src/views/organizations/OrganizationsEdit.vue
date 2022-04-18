<template>
    <div>
        <h1>Update Organization#{{org.orgid}}</h1>
        <form @submit.prevent="UpdateOrg">
            <fieldset class="form-control mb-5">
                <legend>Organization Information</legend>
                <div class="row mb-4">
                        <div class="col-sm-4">
                            <label>Organization Name</label>
                            <input type="text" class="form-control" v-model="org.org_name" required>
                        </div>
                </div>
            </fieldset>
            <button class="btn btn-danger mt-3">Create</button>
        </form>
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