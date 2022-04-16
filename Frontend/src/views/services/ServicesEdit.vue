<script>
import axios from "axios";

export default {
     data() {
        return {
            //events_list:{}
            services: {}
        }
    },
    created() {
        let apiURL = `http://localhost:8080/services/find/${this.$route.params.id}`;

        axios.get(apiURL).then(res => {
            this.services = res.data[0];
        }).catch(error =>{
            console.log(error)
        });
    },
    methods: {
        UpdateService() {
            let apiURL = `http://localhost:8080/services/update/${this.$route.params.id}`;

            axios.put(apiURL, this.services).then((res) => {
                console.log(res)
                this.$router.push('/services')
            }).catch(error => {
                console.log(error)
            });
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