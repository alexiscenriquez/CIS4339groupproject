<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Student content -->
            <h3 class="text-center">Update Event</h3>
            <form @submit.prevent="UpdateEvent">

                <div class="form-group">
                    <label>ID #{{ev_list[0].evid}}</label>
                </div>

                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="ev_list[0].ev_name" required>
                </div>

                <div class="form-group">
                    <label>Host</label>
                    <input type="text" class="form-control" v-model="ev_list[0].ev_host" required>
                </div>

                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="ev_list[0].ev_date" required>
                </div>

                <div class="form-group">
                    <label>Street</label>
                    <input type="text" class="form-control" v-model="ev_list[0].addr" required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="ev_list[0].city" required>
                </div>

                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" v-model="ev_list[0].st" required>
                </div>

                <div class="form-group">
                    <label>Country</label>
                    <input type="text" class="form-control" v-model="ev_list[0].country" required>
                </div>

                <div class="form-group">
                    <label>Zip Code</label>
                    <input type="text" class="form-control" v-model="ev_list[0].st" required>
                </div>



                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
     data() {
        return {
            //events_list:{}
            ev_list: {}
        }
    },
    created() {
        let apiURL = `http://localhost:8080/events/find/${this.$route.params.id}`;

        axios.get(apiURL).then(res => {
            this.ev_list = res.data;
        }).catch(error =>{
            console.log(error)
        });
    },
    methods: {
        UpdateEvent() {
            let apiURL = `http://localhost:8080/events/update/${this.$route.params.id}`;

            axios.put(apiURL, this.ev_list[0]).then((res) => {
                console.log(res)
                this.$router.push('/events')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>