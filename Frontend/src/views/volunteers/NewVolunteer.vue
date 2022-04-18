<template>
    <div>
            <h1>Create Volunteer</h1>
            
            <form @submit.prevent="handleSubmitForm" class='was-validated' nonvalidate>
                <fieldset class='form-control mb-5'>
                    <legend>Personal Information</legend>
                    <div class='row mb-4'>
                        <div class='col-sm-4'>
                                <label for='fName' class='form-label'>*First Name</label>
                                <input type="text" id='fName' class="form-control is-invalid" v-model="volunteers.first_name" required>
                                <div class='invalid-feedback'>nice!</div>
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
                <button class="btn mb-5" id="create">Create</button>

            </form>
        <!-- </div> -->
        <Footer />
    </div>
</template>

<script>
   import axios from "axios";
    import Footer from '../../components/footer.vue'
    import AboutView from '../AboutView.vue';

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        console.log('hello')
        form.classList.add('was-validated')
      }, false)
    })
})()



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
            created(){

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