<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Student content -->
            <h3 class="text-center">Update Service</h3>
            <form @submit.prevent="UpdateService">

                <div class="form-group">
                    <label>ID #{{services[0].evid}}</label>
                </div>

                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="services[0].sid" required>
                </div>

                <div class="form-group">
                    <label>Host</label>
                    <input type="text" class="form-control" v-model="services[0].name" required>
                </div>

                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="services[0].renewal" required>
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
            services: {}
        }
    },
    created() {
        let apiURL = `http://localhost:8080/services/find/${this.$route.params.id}`;

        axios.get(apiURL).then(res => {
            this.services = res.data;
        }).catch(error =>{
            console.log(error)
        });
    },
    methods: {
        UpdateService() {
            let apiURL = `http://localhost:8080/services/update/${this.$route.params.id}`;

            axios.put(apiURL, this.services[0]).then((res) => {
                console.log(res)
                this.$router.push('/services')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>