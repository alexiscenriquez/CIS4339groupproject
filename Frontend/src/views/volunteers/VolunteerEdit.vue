<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Student content -->
            <h3 class="text-center">Update Volunteers</h3>
            <form @submit.prevent="UpdateVolunteers">

                <div class="form-group">
                    <label>ID#</label>
                    <input type="text" class="form-control" v-model="volunteers[0].vid" required>
                </div>

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="volunteers[0].first_name" required>
                </div>

                <div class="form-group">
                    <label>Middle Name</label>
                    <input type="text" class="form-control" v-model="volunteers[0].mid_name" required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="volunteers[0].last_name" required>
                </div>

                <div class="form-group">
                    <label>Birthday</label>
                    <input type="text" class="form-control" v-model="volunteers[0].b_day" required>
                </div>

                <div class="form-group">
                    <label>Social Security</label>
                    <input type="text" class="form-control" v-model="volunteers[0].ssn" required>
                </div>

                <div class="form-group">
                    <label>Drivers License</label>
                    <input type="text" class="form-control" v-model="volunteers[0].DL" required>
                </div>

                <div class="form-group">
                    <label>Gender</label>
                    <input type="text" class="form-control" v-model="volunteers[0].gender" required>
                </div>

                <div class="form-group">
                    <label>Ethnicity</label>
                    <input type="text" class="form-control" v-model="volunteers[0].ethnicity" required>
                </div>

                <div class="form-group">
                    <label>Phone #</label>
                    <input type="text" class="form-control" v-model="volunteers[0].phone_num" required>
                </div>

                <div class="form-group">
                    <label>Emergency #</label>
                    <input type="text" class="form-control" v-model="volunteers[0].emer_num" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="volunteers[0].email" required>
                </div>

                <div class="form-group">
                    <label>Email #2</label>
                    <input type="text" class="form-control" v-model="volunteers[0].email2" required>
                </div>

                <div class="form-group">
                    <label>Primary Language</label>
                    <input type="text" class="form-control" v-model="volunteers[0].prim_language" required>
                </div>

                <div class="form-group">
                    <label>Street</label>
                    <input type="text" class="form-control" v-model="volunteers[0].addr" required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="volunteers[0].city" required>
                </div>

                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" v-model="volunteers[0].st" required>
                </div>

                <div class="form-group">
                    <label>Zip Code</label>
                    <input type="text" class="form-control" v-model="volunteers[0].zip" required>
                </div>

                <div class="form-group">
                    <label>Country</label>
                    <input type="text" class="form-control" v-model="volunteers[0].country" required>
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
            volunteers: {}
        }
    },
    created() {
        let apiURL = `http://localhost:8080/volunteers/find/${this.$route.params.id}`;

        axios.get(apiURL).then(res => {
            this.volunteers = res.data;
        }).catch(error =>{
            console.log(error)
        });
    },
    methods: {
        UpdateVolunteers() {
            let apiURL = `http://localhost:8080/volunteers/update/${this.$route.params.id}`;

            axios.put(apiURL, this.volunteers[0]).then((res) => {
                console.log(res)
                this.$router.push('/volunteers')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>