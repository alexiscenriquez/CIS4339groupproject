<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">New Service</h3>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control"  v-model="services.name" required>
                </div>

                <div class="form-group">
                    <label>Renewal</label>
                    <input type="text" class="form-control"  v-model="services.renewal" required>
                </div>

                <div class="form-group">
                    <label>Notes</label>
                    <input type="text" class="form-control" v-model="services.notes">
                </div>
                <button class="btn btn-danger mt-3">Create</button>
            </form>
        </div>
    </div>
</template>

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