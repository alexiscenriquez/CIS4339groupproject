<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Client</h3>
            <form @submit.prevent="handleSubmitForm">
                 <div class="form-group">
                    <label>ID</label>
                    <input type="text" class="form-control" v-model="clients.cid" required>
                </div>

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="clients.first_name" required>
                </div>

                <div class="form-group">
                    <label>Middle Name</label>
                    <input type="text" class="form-control" v-model="clients.middle_name" required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="clients.last_name"  required>
                </div>

                <div class="form-group">
                    <label>Date of Birth</label>
                    <input type="date" class="form-control"  placeholder= "YYYY-MM-DD" v-model="clients.b_day" required>
                </div>

                <div class="form-group">
                    <label>Drivers License Number</label>
                    <input type="text" class="form-control" v-model="clients.DL">
                </div>

                <div class="form-group">
                    <label>Gender</label>
                    <input type="text" class="form-control" v-model="clients.gender">
                </div>

                <div class="form-group">
                    <label>Ethnicity</label>
                    <input type="text" class="form-control" v-model="clients.ethnicity">
                </div>

                <div class="form-group">
                    <label>Home Address</label>
                    <input type="text" class="form-control" v-model="clients.address" required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="clients.city" required>
                </div>

                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" v-model="clients.state" required>
                </div>

                <div class="form-group">
                    <label>Country</label>
                    <input type="text" class="form-control" v-model="clients.country" required>
                </div>

                <div class="form-group">
                    <label>Zip Code</label>
                    <input type="text" class="form-control" v-model="clients.zip_code"  required>
                </div>

                <div class="form-group">
                    <label>Rent</label>
                    <input type="text" class="form-control" v-model="clients.rent" required>
                </div>

                <div class="form-group">
                    <label>Residency</label>
                    <input type="text" class="form-control" placeholder="Amount of time spent in place of residence" v-model="clients.residency" required>
                </div>

                <div class="form-group">
                    <label>Living Arrangements</label>
                    <input type="text" class="form-control" v-model="clients.living_arrangements"  required>
                </div>

                <div class="form-group">
                    <label>No. of Children</label>
                    <input type="text" class="form-control" placeholder="Number of Children living in residence" v-model="clients.number_of_children" required>
                </div>

                <div class="form-group">
                    <label>No. of Adults 65+</label>
                    <input type="text" class="form-control" placeholder="Number of Adults over the age of 65 living in residence" v-model="clients.number_of_adults_over_65" required>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="clients.phone_number" required>
                </div>

                <div class="form-group">
                    <label>Home Phone Number</label>
                    <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="clients.home_phone_number">
                </div>

                <div class="form-group">
                    <label>Emergency Contact Phone Number</label>
                    <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="clients.emergency_contact_phone_number" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" placeholder="Primary Email Address" v-model="clients.primary_email" required>
                </div>

                <div class="form-group">
                    <label>Secondary Email</label>
                    <input type="email" class="form-control" v-model="clients.secondary_email">
                </div>

                <div class="form-group">
                    <label>Marital Status</label>
                    <input type="text" class="form-control" v-model="clients.marital_status" required>
                </div>

                <div class="form-group">
                    <label>Language</label>
                    <input type="text" class="form-control" v-model="clients.language">
                </div>

                <div class="form-group">
                    <label>Priority Population</label>
                    <input type="text" class="form-control" v-model="clients.priority_population" required>
                </div>

                <div class="form-group">
                    <label>Employment Status</label>
                    <input type="text" class="form-control" v-model="clients.employment_status" required>
                </div>

                <div class="form-group">
                    <label>Length of Employment</label>
                    <input type="text" class="form-control" v-model="clients.length_of_employment" required>
                </div>

                <div class="form-group">
                    <label>Employer Name</label>
                    <input type="text" class="form-control" v-model="clients.employer_name" required>
                </div>

                <div class="form-group">
                    <label>Occupation</label>
                    <input type="text" class="form-control" placeholder="Job Title" v-model="clients.occupation" required>
                </div>

                <div class="form-group">
                    <label>Highest Grade</label>
                    <input type="text" class="form-control" v-model="clients.highest_grade" required>
                </div>

                <div class="form-group">
                    <label>Graduate</label>
                    <input type="text" class="form-control" placeholder="College Graduate? (T/F)" v-model="clients.graduate" required>
                </div>

                <div class="form-group">
                    <label>Degree Name</label>
                    <input type="text" class="form-control" placeholder="Please put 'none' if you don't have a College Degree" v-model="clients.degree_name" required>
                </div>
                
                <div class="form-group">
                    <label>Head of Household</label>
                    <input type="text" class="form-control" v-model="clients.head_of_household" required>
                </div>
                
                <div class="form-group">
                    <label>Monthly Income</label>
                    <input type="text" class="form-control" v-model="clients.monthly_income" required>
                </div>

                 <div class="form-group">
                    <label>Spousal Income Support</label>
                    <input type="text" class="form-control" v-model="clients.spousal_income_support" required>
                </div>

                <div class="form-group">
                    <label>Worker Compensation</label>
                    <input type="text" class="form-control" v-model="clients.spousal_income_support" required>
                </div>

                <div class="form-group">
                    <label>Veteran Status</label>
                    <input type="text" class="form-control" v-model="clients.veteran_status" required>
                </div>

                 <div class="form-group">
                    <label>Child Support</label>
                    <input type="text" class="form-control" v-model="clients.child_support" required>
                </div>

                <div class="form-group">
                    <label>TANF</label>
                    <input type="text" class="form-control" placeholder="Texas Temporarry Assistance for Needy Families" v-model="clients.tanf" required>
                </div>

                <div class="form-group">
                    <label>Food Stamps</label>
                    <input type="text" class="form-control" placeholder="Total monetary amount of food stamps" v-model="clients.food_stamps" required>
                </div>

                <div class="form-group">
                    <label>SSI</label>
                    <input type="text" class="form-control" placeholder="Supplemental Security Income" v-model="clients.ssi" required>
                </div>

                <div class="form-group">
                    <label>Unemployment</label>
                    <input type="text" class="form-control" placeholder="Total monetary amount of Unemployment benefits" v-model="clients.unemployment" required>
                </div>

                <div class="form-group">
                    <label>Social Security</label>
                    <input type="text" class="form-control" placeholder="Social security number" v-model="clients.social_secturity" required>
                </div>

                <div class="form-group">
                    <label>Other Income</label>
                    <input type="text" class="form-control" v-model="clients.other_income" required>
                </div>

                <div class="form-group">
                    <label>Health Insurance</label>
                    <input type="text" class="form-control" placeholder="Do you have Health Insurance? (T/F)" v-model="clients.health_insurance" required>
                </div>

                <div class="form-group">
                    <label>Health Insurance Desc</label>
                    <input type="text" class="form-control" placeholder="Type of health insurance" v-model="clients.health_insurance_desc" required>
                </div>

                <div class="form-group">
                    <label>Insurance Program</label>
                    <input type="text" class="form-control" placeholder="Name of Healthcare Provider" v-model="clients.insurance_program" required>
                </div>

                <div class="form-group">
                    <label>Covid Status</label>
                    <input type="text" class="form-control" placeholder="Do you have COVID-19? (True/False)" v-model="clients.covid_status" required>
                </div>
                <button class="btn btn-danger mt-3">Create Client</button>
            </form>
        </div>
    </div>
</template>

<script>
   import axios from "axios";

    export default {
        data() {
            return {
                clients: {
                   cid: '',
                   first_Name: '',
                   mid_name: '',
                   last_Name: '',
                   b_day: '',
                   DL: '',
                   gender: '',
                   ethnicity: '',
                   address: '',
                   city: '',
                   state: '',
                   country: '',
                   zip_code: '',
                   rent: '',
                   residency: '',
                   living_arrangements: '',
                   number_of_children: '',
                   number_of_adults_over_65: '',
                   phone_number: '',
                   home_phone_number: '',
                   emergency_contact_phone_number: '',
                   primary_email: '',
                   marital_status: '',
                   language: '',
                   priority_population: '',
                   employment_status: '',
                   length_of_employment: '',
                   employer_name: '',
                   occupation: '',
                   highest_grade: '',
                   graduate: '',
                   degree_name: '',
                   head_of_household: '',
                   monthly_income: '',
                   spousal_income_support: '',
                   worker_compensation: '',
                   veteran_status: '',
                   child_support: '',
                   tanf: '',
                   food_stamps: '',
                   ssi: '',
                   unemployment: '',
                   social_secturity: '',
                   other_income: '',
                   health_insurance: '',
                   health_insurance_desc: '',
                   insurance_program: '',
                   covid_status: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:8080/clients/new-client';
                
                axios.post(apiURL, this.clients).then(() => {
                    //changing the view to the list
                  this.$router.push('/view')
                  this.clients = {
                   cid: '',
                   first_Name: '',
                   mid_name: '',
                   last_Name: '',
                   b_day: '',
                   DL: '',
                   gender: '',
                   ethnicity: '',
                   address: '',
                   city: '',
                   state: '',
                   country: '',
                   zip_code: '',
                   rent: '',
                   residency: '',
                   living_arrangements: '',
                   number_of_children: '',
                   number_of_adults_over_65: '',
                   phone_number: '',
                   home_phone_number: '',
                   emergency_contact_phone_number: '',
                   primary_email: '',
                   marital_status: '',
                   language: '',
                   priority_population: '',
                   employment_status: '',
                   length_of_employment: '',
                   employer_name: '',
                   occupation: '',
                   highest_grade: '',
                   graduate: '',
                   degree_name: '',
                   head_of_household: '',
                   monthly_income: '',
                   spousal_income_support: '',
                   worker_compensation: '',
                   veteran_status: '',
                   child_support: '',
                   tanf: '',
                   food_stamps: '',
                   ssi: '',
                   unemployment: '',
                   social_secturity: '',
                   other_income: '',
                   health_insurance: '',
                   health_insurance_desc: '',
                   insurance_program: '',
                   covid_status: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        } 
           
    }
</script>