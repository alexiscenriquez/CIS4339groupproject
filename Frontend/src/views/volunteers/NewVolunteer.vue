<script>
    import axios from "axios";
    import Footer from '../../components/footer.vue'
    import AboutView from '../AboutView.vue';
    
    //exports object
    export default {
        components:{
            Footer,
            AboutView
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
            //define functions
        methods: {
            //create new volunteer and reset values
            handleSubmitForm() {
                let apiURL = 'http://localhost:8080/volunteers/new-user';
                axios.post(apiURL, this.volunteers).then(() => {
                this.$router.push('/volunteers') //goes to volunteers view
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

<template>
    <div>
        <h1 class="text-center">Create Volunteer</h1>
        <!-- create volunteer  -->
        <form @submit.prevent="handleSubmitForm">
            <!-- display fields for personal information form creation and update with v-model-->
            <fieldset class='form-control mb-5'>
                <legend>Personal Information</legend>
                <div class='row mb-4'>
                    <div class='col-sm-4'>
                        <label for='fName'>*First Name</label>
                        <input type="text" id='fName' class="form-control" v-model="volunteers.first_name" required>
                    </div>
                    <div class='col-sm-4'>
                        <label>Middle Name</label>
                        <input type="text" class="form-control" v-model="volunteers.mid_name">
                    </div>    
                    <div class='col-sm-4'>
                        <label>*Last Name</label>
                        <input type="text" class="form-control" v-model="volunteers.last_name" required>
                        <div class='valid-feedback'></div>
                    </div>
                </div>

                <div class='row mb-4'>
                    <div class="col-sm-4">
                        <label>*Birthday</label>
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
                        <label>*Gender</label>
                        <!-- allow user to pick from  dropdown-->
                        <select class='form-select' v-model="volunteers.gender" required>
                                <option disabled value=''>Select option</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                                <option>Prefer not to disclose</option>
                        </select>
                    </div>

                    <div class="col-sm-4">
                        <label>*Ethnicity</label>
                        <!-- allow user to pick from  dropdown-->
                        <select class='form-select' v-model="volunteers.ethnicity" required>
                                <option disabled value="">Select option</option>
                                <option >White</option>
                                <option>Black/African American</option>
                                <option>American Indian or Alaska Native</option>
                                <option>Asian</option>
                                <option>Native Hawaiian or Other Pacific Islander</option>
                                <option>Other</option>
                                <option>Prefer not to disclose</option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <label>Primary Language</label>
                        <input type="text" class="form-control" v-model="volunteers.prim_language">
                    </div>
                </div>
            </fieldset>
            <!-- display fields for address form creation and update with v-model-->
            <fieldset class='form-control mb-5'>
                <legend>Address</legend>
                <div class='row mb-4'>
                    <div class="col-sm-6">
                        <label>*Street</label>
                        <input type="text" class="form-control" v-model="volunteers.addr" required>
                    </div>

                    <div class="col-sm-3">
                        <label>*City</label>
                        <input type="text" class="form-control" v-model="volunteers.city" required>
                    </div>

                    <div class="col-sm-3">
                        <label>*State</label>
                        <input type="text" class="form-control" v-model="volunteers.st" required>
                    </div>
                </div>
                <div class='row mb-4'>
                    <div class='col-sm-6'>
                        <label>*Country</label>
                        <input type="text" class="form-control" v-model="volunteers.country" required>
                    </div>
                    <div class='col-sm-3'>
                        <label>*Zip Code</label>
                        <input type="text" class="form-control" v-model="volunteers.zip" required>
                    </div>
                </div>
            </fieldset>

            <!-- display fields for contact information form creation and update with v-model-->
            <fieldset class='form-control mb-5'>
                <legend>Contact Information</legend>
                <div class='row mb-4'>
                    <div class="col-sm-6">
                        <label>*Phone #</label>
                        <input type="text" class="form-control" v-model="volunteers.phone_num" required>
                    </div>

                    <div class="col-sm-6">
                        <label>Emergency #</label>
                        <input type="text" class="form-control" v-model="volunteers.emer_num">
                    </div>
                </div>
                <div class='row mb-4'>
                    <div class="col-sm-6">
                        <label>*Email</label>
                        <input type="email" class="form-control" v-model="volunteers.email" required>
                    </div>

                    <div class="col-sm-6">
                        <label>Email #2</label>
                        <input type="email" class="form-control" v-model="volunteers.email2">
                    </div>
                </div>
            </fieldset>
            <button class="btn mb-5 create" >Create</button>
        </form>
        <!-- </div> -->
        <Footer />
    </div>
</template>

<style scoped>
   @import "../../assets/app.css";
</style>