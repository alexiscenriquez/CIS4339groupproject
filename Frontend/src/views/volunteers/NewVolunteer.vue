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
                },
                errors:[]
            }
        },
            //define functions
        methods: {
            //create new volunteer and reset values
            handleSubmitForm() {
                this.errors=[]
                const regex = new RegExp("^\\d{3}-\\d{3}-\\d{4}$"); //validate phone number regex
                const ssnregex =/^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/ //validate ssn regex
                //validate email regex
                const emailregex=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

                //validations for required or formatted fields
                if(!this.volunteers.first_name){
                    this.errors.push("First Name Required");
                    }

                if(!this.volunteers.last_name)
                this.errors.push("Last Name is Required")

                if(!this.volunteers.gender){
                    this.errors.push("Gender  is Required");
                    }
                if(!this.volunteers.ethnicity){
                    this.errors.push("Ethnicity is Required");
                    }
                
                if(!this.volunteers.addr){
                    this.errors.push("Address is Required");
                    }

                if(!this.volunteers.city){
                    this.errors.push("City is Required");
                    }
                
                if(!this.volunteers.st){
                    this.errors.push("State is Required");
                    }

                if(!this.volunteers.country){
                    this.errors.push("Country is Required");
                    }
                if(!this.volunteers.zip){
                    this.errors.push("Zip code is Required");
                    }

                if(!ssnregex.test(this.volunteers.ssn) && (this.volunteers.ssn.length!==0))
                this.errors.push("Please enter a valid ssn.")

                if (!regex.test(this.volunteers.phone_num))
                this.errors.push("Please use correct phone number format.");

                if (!regex.test(this.volunteers.emer_num) && (this.volunteers.emer_num.length!==0))
                this.errors.push("Please use correct phone number format.");

                if(!emailregex.test(this.volunteers.email))
                this.errors.push("Please enter a valid email.");

                if(!emailregex.test(this.volunteers.email2) &&(this.volunteers.email2.length!==0))
                this.errors.push("Please enter a valid emergency email.");

            //only run if no errors
            if(this.errors.length === 0){

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
    }
</script>

<template>
    <div>
        <h1 class="text-center">Create Volunteer</h1>
        <!-- create volunteer  -->
        <form @submit.prevent="handleSubmitForm" novalidate>
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
                        <input type="text" class="form-control" placeholder="XXX-XX-XXXX" v-model="volunteers.ssn">
                        <small id="phoneHelpBlock" class="form-text text-muted">
                            9 digit number with dashes
                        </small>
                    </div>

                    <div class="col-sm-4">
                        <label>Drivers License</label>
                        <input type="text" class="form-control" placeholder="XXXXXXXX" v-model="volunteers.DL">
                        <small id="phoneHelpBlock" class="form-text text-muted">
                            8 digit number
                        </small>
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
                        <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="volunteers.phone_num" required>
                        <small id="phoneHelpBlock" class="form-text text-muted">
                        9 digit phone number should be entered with dashes
                        </small>
                    </div>

                    <div class="col-sm-6">
                        <label>Emergency #</label>
                        <input type="text" class="form-control" placeholder="XXX-XX-XXXX" v-model="volunteers.emer_num">
                        <small id="phoneHelpBlock" class="form-text text-muted">
                        9 digit phone number should be entered with dashes
                        </small>
                    </div>
                </div>
                <div class='row mb-4'>
                    <div class="col-sm-6">
                        <label>*Email</label>
                        <input type="email" class="form-control" v-model="volunteers.email" required>
                        <small id="phoneHelpBlock" class="form-text text-muted">
                        example@email.com
                        </small>
                    </div>

                    <div class="col-sm-6">
                        <label>Email #2</label>
                        <input type="email" class="form-control" v-model="volunteers.email2">
                        <small id="phoneHelpBlock" class="form-text text-muted">
                        example@email.com
                        </small>
                    </div>
                </div>
            </fieldset>
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }} </li>
                </ul>
            </p>
            <button class="btn mb-5 create" >Create</button>
        </form>
        <!-- </div> -->
        <Footer />
    </div>
</template>

<style scoped>
    /* import css */
   @import "../../assets/app.css";
</style>