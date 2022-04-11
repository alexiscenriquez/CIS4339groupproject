<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Student</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>ID#</label>
                    <input type="text" class="form-control" v-model="event.evid" required>
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control"  v-model="event.ev_name" required>
                </div>

                <div class="form-group">
                    <label>Host</label>
                    <input type="text" class="form-control"  v-model="event.ev_host" required>
                </div>

                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="event.ev_date"  required>
                </div>

                <div class="form-group">
                    <label>Street</label>
                    <input type="text" class="form-control" v-model="event.addr" required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="event.city"  required>
                </div>

                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" v-model="event.st" required>
                </div>

                <div class="form-group">
                    <label>Zip Code</label>
                    <input type="text" class="form-control" v-model="event.zip" required>
                </div>

                <div class="form-group">
                    <label>Country</label>
                    <input type="text" class="form-control" v-model="event.country" required>
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
                event: {
                   evid: '',
                   ev_name: '',
                   ev_host: '',
                   ev_date: '',
                   addr: '',
                   city:'',
                   st:'',
                   country:'',
                   zip:''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:8080/events/new-event';
                
                axios.post(apiURL, this.event).then(() => {
                    //changing the view to the list
                  this.$router.push('/events')
                  this.event = {
                    ev_id: '',
                    ev_name: '',
                    ev_host: '',
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
            }
        } 
           
    }
</script>