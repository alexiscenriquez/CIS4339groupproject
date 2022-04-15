<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Student content -->
            <h3 class="text-center">Update Service</h3>
            <form @submit.prevent="UpdateService">

                <div>
                    <label>ID #{{services.sid}}</label>
                </div>

                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="services.name" required>
                </div>

                <label for="">Renewal</label>
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

                <div class="form-group">
                    <label>Notes</label>
                    <input type="text" class="form-control" v-model="services.notes">
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