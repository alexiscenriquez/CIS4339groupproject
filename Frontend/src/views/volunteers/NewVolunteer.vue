<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Volunteer</h3>
            <form @submit.prevent="handleSubmitForm">

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="volunteers.first_name" required>
                </div>

                <div class="form-group">
                    <label>Middle Name</label>
                    <input type="text" class="form-control" v-model="volunteers.mid_name" required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="volunteers.last_name" required>
                </div>

                <div class="form-group">
                    <label>Birthday</label>
                    <input type="date" class="form-control" v-model="volunteers.b_day" required>
                </div>

                <div class="form-group">
                    <label>Social Security</label>
                    <input type="text" class="form-control" v-model="volunteers.ssn" required>
                </div>

                <div class="form-group">
                    <label>Drivers License</label>
                    <input type="text" class="form-control" v-model="volunteers.DL" required>
                </div>

                <div class="form-group">
                    <label>Gender</label>
                    <input type="text" class="form-control" v-model="volunteers.gender" required>
                </div>

                <div class="form-group">
                    <label>Ethnicity</label>
                    <input type="text" class="form-control" v-model="volunteers.ethnicity" required>
                </div>

                <div class="form-group">
                    <label>Phone #</label>
                    <input type="text" class="form-control" v-model="volunteers.phone_num" required>
                </div>

                <div class="form-group">
                    <label>Emergency #</label>
                    <input type="text" class="form-control" v-model="volunteers.emer_num" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="volunteers.email" required>
                </div>

                <div class="form-group">
                    <label>Email #2</label>
                    <input type="email" class="form-control" v-model="volunteers.email2" required>
                </div>

                <div class="form-group">
                    <label>Primary Language</label>
                    <input type="text" class="form-control" v-model="volunteers.prim_language" required>
                </div>

                <div class="form-group">
                    <label>Street</label>
                    <input type="text" class="form-control" v-model="volunteers.addr" required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="volunteers.city" required>
                </div>

                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" v-model="volunteers.st" required>
                </div>

                <div class="form-group">
                    <label>Zip Code</label>
                    <input type="text" class="form-control" v-model="volunteers.zip" required>
                </div>

                <div class="form-group">
                    <label>Country</label>
                    <input type="text" class="form-control" v-model="volunteers.country" required>
                </div>

                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
        <Footer />
    </div>
</template>

<script>
   import axios from "axios";
import Footer from '../../components/footer.vue'

export default {
    components:{
        Footer
    },
        data() {
            return {
                volunteers: {
                   vid: '',
                    first_name: '',
                    mid_name: '',
                    last_name: '',
                    b_day:'',
                    ssn:'',
                    DL:'',
                    gender:'',
                    ethnicity:'',
                    phone_num:'',
                    emer_num:'',
                    email:'',
                    email2:'',
                    prim_language:'',
                    addr:'',
                    city:'',
                    st:'',
                    zip:'',
                    country:''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:8080/volunteers/new-user';
                
                axios.post(apiURL, this.volunteers).then(() => {
                    //changing the view to the list
                  this.$router.push('/volunteers')
                  this.volunteers = {
                    vid: '',
                    first_name: '',
                    mid_name: '',
                    last_name: '',
                    b_day:'',
                    ssn:'',
                    DL:'',
                    gender:'',
                    ethnicity:'',
                    phone_num:'',
                    emer_num:'',
                    email:'',
                    email2:'',
                    prim_language:'',
                    addr:'',
                    city:'',
                    st:'',
                    zip:'',
                    country:''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        } 
           
    }
</script>