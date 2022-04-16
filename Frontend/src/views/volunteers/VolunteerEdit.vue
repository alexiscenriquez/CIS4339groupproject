<template>
    <div>
        <h1>Update Volunteer#{{volunteers.vid}}</h1>
        <form @submit.prevent="UpdateVolunteers">
            <fieldset class='form-control mb-5'>
                <legend>Personal Information</legend>
                <div class='row mb-4'>
                    <div class='col-sm-4'>
                            <label>First Name</label>
                            <input type="text" class="form-control" v-model="volunteers.first_name" required>
                    </div>
                    <div class='col-sm-4'>
                            <label>Middle Name</label>
                            <input type="text" class="form-control" v-model="volunteers.mid_name">
                    </div>    
                    <div class='col-sm-4'>
                            <label>Last Name</label>
                            <input type="text" class="form-control" v-model="volunteers.last_name" required>
                    </div>
                </div>
                <div class='row mb-4'>
                    <div class="col-sm-4">
                        <label>Birthday</label>
                        <input type="date" class="form-control" v-model="volunteers.b_day" required>
                    </div>

                    <div class="col-sm-4">
                        <label>Social Security</label>
                        <input type="text" class="form-control" v-model="volunteers.ssn">
                    </div>

                    <div class="col-sm-4">
                        <label>Drivers License</label>
                        <input type="text" class="form-control" v-model="volunteers.DL">
                    </div>
                </div>
                <div class='row mb-4'>
                    <div class="col-sm-4">
                        <label>Gender</label>
                        <input type="text" class="form-control" v-model="volunteers.gender">
                    </div>

                    <div class="col-sm-4">
                        <label>Ethnicity</label>
                        <input type="text" class="form-control" v-model="volunteers.ethnicity">
                    </div>
                    <div class="col-sm-4">
                        <label>Primary Language</label>
                        <input type="text" class="form-control" v-model="volunteers.prim_language">
                    </div>
                </div>
            </fieldset>

            <fieldset class='form-control mb-5'>
                <legend>Address</legend>
                <div class='row mb-4'>
                    <div class="col-sm-6">
                        <label>Street</label>
                        <input type="text" class="form-control" v-model="volunteers.addr" required>
                    </div>

                    <div class="col-sm-3">
                        <label>City</label>
                        <input type="text" class="form-control" v-model="volunteers.city" required>
                    </div>

                    <div class="col-sm-3">
                        <label>State</label>
                        <input type="text" class="form-control" v-model="volunteers.st" required>
                    </div>
                </div>
                <div class='row mb-4'>
                    <div class='col-sm-6'>
                        <label>Country</label>
                        <input type="text" class="form-control" v-model="volunteers.country" required>
                    </div>
                    <div class='col-sm-3'>
                        <label>Zip Code</label>
                        <input type="text" class="form-control" v-model="volunteers.zip" required>
                    </div>
                </div>
            </fieldset>

            <fieldset class='form-control mb-5'>
                <legend>Contact Information</legend>
                <div class='row mb-4'>
                    <div class="col-sm-6">
                        <label>Phone #</label>
                        <input type="text" class="form-control" v-model="volunteers.phone_num" required>
                    </div>

                    <div class="col-sm-6">
                        <label>Emergency #</label>
                        <input type="text" class="form-control" v-model="volunteers.emer_num">
                    </div>
                </div>
                <div class='row mb-4'>
                    <div class="col-sm-6">
                        <label>Primary Email</label>
                        <input type="email" class="form-control" v-model="volunteers.email" required>
                    </div>

                    <div class="col-sm-6">
                        <label>Seconadary Email</label>
                        <input type="email" class="form-control" v-model="volunteers.email2">
                    </div>
                </div>
            </fieldset>
            <button class="btn mb-5" id="create">Update</button>
        </form>
        <!-- </div> -->
        <Footer />
    </div>
</template>

<script>
import axios from "axios"
import Footer from '../../components/footer.vue'

export default {
    // components:{
    //     Footer
    // },
     data() {
        return {
            volunteers: {}
        }
    },
    created() {
        let apiURL = `http://localhost:8080/volunteers/find/${this.$route.params.id}`;

        axios.get(apiURL).then(res => {
            this.volunteers = res.data[0];
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