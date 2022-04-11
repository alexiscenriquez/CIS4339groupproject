<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Student</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>ID#</label>
                    <input type="text" class="form-control" v-model="services.sid" required>
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control"  v-model="services.name" required>
                </div>

                <div class="form-group">
                    <label>Host</label>
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
                   sid: '',
                    name: '',
                    renewal:'',
                    notes: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:8080/services/new-services';
                
                axios.post(apiURL, this.services).then(() => {
                    //changing the view to the list
                  this.$router.push('/events')
                  this.services = {
                    sid: '',
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