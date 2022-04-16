<script>
   import axios from "axios";

    export default {
        data() {
            return {
                services: {
                    name: '',
                    renewal:'',
                    notes: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
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
            }
        } 
           
    }
</script>

<template>
    <div>
        <h1>Create Service</h1>
        <form @submit.prevent="handleSubmitForm">
        <fieldset class='form-control mb-5'>
            <div class='form-control mb-4'>
                <div>
                    <label class='form-label' for="">Name</label>
                    <input type="text" class='form-control' v-model='services.name' required>
                </div>

            </div>
            <div class='row mb-4'>
                <div class='col'>
                    <label>Renewal</label>
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