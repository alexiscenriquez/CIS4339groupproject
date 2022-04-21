<script>
import axios from "axios"
import Footer from '../../components/footer.vue'

//exports components, objects, variables
export default {
    components:{
            Footer
        },
     data() {
        return {
            volunteers: {},
            date:''
        }
    },
    //grab volunteer data before mounting dom
    created() {
        //get single volunteer information
        let apiURL = `http://localhost:8080/volunteers/find/${this.$route.params.id}`;
        axios.get(apiURL).then(res => { 
            this.volunteers = res.data[0];  //store volunteers data  
            this.date = res.data[0].b_day.slice(0, 10) //store date without time
        }).catch(error =>{
            console.log(error)
        });
    },
    //define functions
    methods: {
        //update volunteers collection
        UpdateVolunteers() {
            this.volunteers.b_day=this.date //add date to obj
            //update volunteer in volunteers collection
            let apiURL = `http://localhost:8080/volunteers/update/${this.$route.params.id}`;
            axios.put(apiURL, this.volunteers).then((res) => {
                console.log(res)
                this.$router.push('/volunteers') //go to volunteers view
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>

<template>
    <div>
        <h1>Update Volunteer#{{volunteers.vid}}</h1>
        <!--updates volunteer information  -->
        <form @submit.prevent="UpdateVolunteers">
            <!-- display and allow changes to personal information w/ v-model -->
            <fieldset class='form-control mb-5'>
                <legend>Personal Information</legend>
                <div class='row mb-4'>
                    <div class='col-sm-4'>
                            <label>*First Name</label>
                            <input type="text" class="form-control" v-model="volunteers.first_name" required>
                    </div>
                    <div class='col-sm-4'>
                            <label>Middle Name</label>
                            <input type="text" class="form-control" v-model="volunteers.mid_name">
                    </div>    
                    <div class='col-sm-4'>
                            <label>*Last Name</label>
                            <input type="text" class="form-control" v-model="volunteers.last_name" required>
                    </div>
                </div>
                <div class='row mb-4'>
                    <div class="col-sm-4">
                        <label>*Birthday</label>
                        <input type="date" class="form-control" v-model="date" required>
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
                            <option>White</option>
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
                        <input type="text" class="form-control" placeholder='XXX-XXX-XXX' model="volunteers.phone_num" required>
                        <small id="phoneHelpBlock" class="form-text text-muted">
                        9 digit phone number should be entered with dashes
                        </small>
                    </div>

                    <div class="col-sm-6">
                        <label>Emergency #</label>
                        <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="volunteers.emer_num">
                        <small id="phoneHelpBlock" class="form-text text-muted">
                        9 digit phone number should be entered with dashes
                        </small>
                    </div>
                </div>
                <div class='row mb-4'>
                    <div class="col-sm-6">
                        <label>*Primary Email</label>
                        <input type="email" class="form-control" v-model="volunteers.email" required>
                        <small id="phoneHelpBlock" class="form-text text-muted">
                        example@email.com
                        </small>
                    </div>

                    <div class="col-sm-6">
                        <label>Seconadary Email</label>
                        <input type="email" class="form-control" v-model="volunteers.email2">
                        <small id="phoneHelpBlock" class="form-text text-muted">
                        example@email.com
                        </small>
                    </div>
                </div>
            </fieldset>
            <button class="btn mb-5 create" >Update</button>
        </form>
       <Footer />
    </div>
</template>

<style scoped>
    /* import css */
    @import "../../assets/app.css";
</style>