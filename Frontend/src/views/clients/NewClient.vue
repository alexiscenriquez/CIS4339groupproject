<template>
    <div>
            <h1>Create Client</h1>
            <form @submit.prevent="handleSubmitForm">
                <fieldset class="form-control mb-5">
                    <legend>Personal Information</legend>
                    <div class="row mb-4">
                        <div class="col-sm-4">
                            <label>First Name</label>
                            <input type="text" class="form-control" v-model="clients.first_name" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Middle Name</label>
                            <input type="text" class="form-control" v-model="clients.mid_name" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Last Name</label>
                            <input type="text" class="form-control" v-model="clients.last_name"  required>
                        </div>
                        <div class="col-sm-4">
                            <label>Date of Birth</label>
                            <input type="date" class="form-control" placeholder='YYYY-MM-DD' v-model="clients.b_day" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Drivers License Number</label>
                            <input type="text" class="form-control" v-model="clients.DL"><br>
                        </div>
                        <div class="col-sm-4">
                            <label>Gender</label>
                            <fieldset class="form-control mb-5">
                                <select v-model="clients.gender">
                                    <option disabled value="">Select option</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                    <option>Do not wish to disclose</option>
                                </select>
                            </fieldset>
                        </div>
                        <div class="col-sm-4">
                            <label>Ethnicity</label>
                            <fieldset class="form-control mb-5">
                                <select v-model="clients.ethnicity">
                                    <option disabled value="">Select option</option>
                                    <option value="White">White</option>
                                    <option>Black/African American</option>
                                    <option>American Indian or Alaska Native</option>
                                    <option>Asian</option>
                                    <option>Native Hawaiian or Other Pacific Islander</option>
                                    <option>Other</option>
                                </select>
                                <!--input type="radio" class="form-check-input" id="White" value="White" v-model='clients.ethnicity'>White
                                <label class="form-check-label" for="White"></label>
                                <br>
                                <input type="radio" class="form-check-input" id="Black or African American" value="Black or African American" v-model='clients.ethnicity'>Black or African American
                                <label class="form-check-label" for="Black or African American"></label>
                                <br>
                                <input type="radio" class="form-check-input" id="American Indian or Alaska Native" value="American Indian or Alaska Native" v-model='clients.ethnicity'>American Indian or Alaska Native
                                <label class="form-check-label" for="American Indian or Alaska Native"></label>
                                <br>
                                <input type="radio" class="form-check-input" id="Asian" value="Asian" v-model='clients.ethnicity'>Asian
                                <label class="form-check-label" for="Asian"></label>
                                <br>
                                <input type="radio" class="form-check-input" id="Native Hawaiian or Other Pacific Islander" value="Native Hawaiian or Other Pacific Islander" v-model='clients.ethnicity'>Native Hawaiian or Other Pacific Islander
                                <label class="form-check-label" for="Native Hawaiian or Other Pacific Islander"></label>
                                <br>
                                <input type="radio" class="form-check-input" id="Other" value="Other" v-model='clients.ethnicity'>Other
                                <label class="form-check-label" for="Other"></label>-->
                            </fieldset>
                        </div>
                        <div class="col-sm-4">
                            <label>Language</label>
                            <input type="text" class="form-control" v-model="clients.language">
                        </div>
                        <div class="col-sm-4">
                            <label>Social Security Number</label>
                            <input type="text" class="form-control" v-model="clients.social_security" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Marital Status</label>
                            <fieldset class="form-control mb-5">
                                <select v-model="clients.marital_status">
                                    <option disabled value="">Select option</option>
                                    <option>Married</option>
                                    <option>Widowed</option>
                                    <option>Separated</option>
                                    <option>Single</option>
                                    <option>Divorced</option>
                                    <option>Other</option>
                                </select>
                            </fieldset>
                        </div>
                        <div class="col-sm-4">
                            <label>Veteran Status</label>
                            <fieldset class="form-control mb-5">
                                <select v-model="clients.veteran_status">
                                    <option disabled value="">Select option</option>
                                    <option>Veteran</option>
                                    <option>Not a Veteran</option>
                                </select>
                            </fieldset>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="form-control mb-5">
                    <legend>Address</legend>
                    <div class="row mb-4">
                        <div class="col-sm-6">
                            <label>Home Address</label>
                            <input type="text" class="form-control" v-model="clients.address" required>
                        </div>
                        <div class="col-sm-3">
                            <label>City</label>
                            <input type="text" class="form-control" v-model="clients.city" required>
                        </div>
                        <div class="col-sm-3">
                            <label>State</label>
                            <input type="text" class="form-control" v-model="clients.state" required>
                        </div>
                        <div class="col-sm-6">
                            <label>Country</label>
                            <input type="text" class="form-control" v-model="clients.country" required>
                        </div>
                        <div class="col-sm-3">
                            <label>Zip Code</label>
                            <input type="text" class="form-control" v-model="clients.zip_code"  required>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="form-control mb-5">
                    <legend>Contact Information</legend>
                    <div class="row mb-4">
                        <div class="col-sm-6">
                            <label>Phone Number</label>
                            <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="clients.phone_number" required>
                        </div>
                        <div class="col-sm-6">
                            <label>Home Phone Number</label>
                            <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="clients.home_phone_number">
                        </div>
                        <div class="col-sm-6">
                            <label>Emergency Contact Phone Number</label>
                            <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="clients.emergency_contact_phone_number" required>
                        </div>
                        <div class="col-sm-6">
                            <label>Email</label>
                            <input type="email" class="form-control" placeholder="Primary Email Address" v-model="clients.primary_email" required>
                        </div>
                        <div class="col-sm-6">
                            <label>Secondary Email</label>
                            <input type="email" class="form-control" v-model="clients.secondary_email">
                        </div>
                    </div>
                </fieldset>

                <fieldset class="form-control mb-5">
                    <legend>Education Information</legend>
                    <div class="row mb-4">
                        <div class="col-sm-4">
                            <label>Highest Completed Education</label>
                            <fieldset class="form-control mb-5">
                                <select v-model="clients.highest_grade">
                                    <option disabled value="">Select option</option>
                                    <option>Highschool Diploma</option>
                                    <option>GED</option>
                                    <option>Associate's Degree</option>
                                    <option>Bachelor's Degree</option>
                                </select>
                            </fieldset>
                        </div>
                        <div class="col-sm-4">
                            <label>College Graduation Status</label>
                                <fieldset class="form-control mb-5">
                                    <select v-model="clients.graduate">
                                        <option disabled value="">Select option</option>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                </fieldset>
                        </div>
                        <div class="col-sm-4">
                            <label>Degree Name</label>
                            <input type="text" class="form-control" v-model="clients.degree_name" required>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="form-control mb-5">
                    <legend>Housing Information</legend>
                    <div class="row mb-4">
                        <div class="col-sm-4">
                            <label>Residency</label>
                            <input type="text" class="form-control" placeholder="Amount of time spent in place of residence" v-model="clients.residency" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Head of Household</label>
                            <input type="text" class="form-control" v-model="clients.head_of_household" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Living Arrangements</label>
                            <input type="text" class="form-control" v-model="clients.living_arrangements"  required>
                        </div>
                        <div class="col-sm-4">
                            <label>No. of Children</label>
                            <input type="text" class="form-control" placeholder="Number of Children living in residence" v-model="clients.number_of_children" required>
                        </div>
                        <div class="col-sm-4">
                            <label>No. of Adults 65+</label>
                            <input type="text" class="form-control" placeholder="Number of Adults over the age of 65 living in residence" v-model="clients.number_of_adults_over_65" required>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="form-control mb-5">
                    <legend>Financial Information</legend>
                    <div class="row mb-4">
                        <div class="col-sm-4">
                            <label>Rent</label>
                            <input type="text" class="form-control" v-model="clients.rent" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Monthly Income</label>
                            <input type="text" class="form-control" v-model="clients.monthly_income" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Spousal Income Support</label>
                            <input type="text" class="form-control" v-model="clients.spousal_income_support" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Worker Compensation Benefits</label>
                            <input type="text" class="form-control" v-model="clients.worker_compensation" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Child Support Benefits</label>
                            <input type="text" class="form-control" v-model="clients.child_support" required>
                        </div>
                        <div class="col-sm-4">
                            <label>TANF Benefits</label>
                            <input type="text" class="form-control" placeholder="Texas Temporarry Assistance for Needy Families" v-model="clients.tanf" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Food Stamp Benefits</label>
                            <input type="text" class="form-control" placeholder="Total monetary amount of food stamps" v-model="clients.food_stamps" required>
                        </div>
                        <div class="col-sm-4">
                            <label>SSI Benefits</label>
                            <input type="text" class="form-control" placeholder="Supplemental Security Income" v-model="clients.ssi" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Unemployment Benefits</label>
                            <input type="text" class="form-control" placeholder="Total monetary amount of Unemployment benefits" v-model="clients.unemployment" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Other Income</label>
                            <input type="text" class="form-control" v-model="clients.other_income" required>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="form-control mb-5">
                    <legend>Employment Information</legend>
                    <div class="row mb-4">
                        <label>Employment Status</label>
                        <div class="col-sm-3">
                            <fieldset class="form-control mb-5">
                                <select v-model="clients.employment_status">
                                    <option disabled value="">Select option</option>
                                    <option>Employed</option>
                                    <option>Unemployed</option>
                                </select>
                            </fieldset>
                        </div>
                        <div class="col-sm-3">
                            <label>Employer Name</label>
                            <input type="text" class="form-control" v-model="clients.employer_name" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Occupation</label>
                            <input type="text" class="form-control" placeholder="Job Title" v-model="clients.occupation" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Length of Employment</label>
                            <input type="text" class="form-control" v-model="clients.length_of_employment" required>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="form-control mb-5">
                    <legend>Health Information</legend>
                    <div class="row mb-4">
                        <label>Health Insurance Status</label>
                        <div class="col-sm-4">
                            <fieldset class="form-control mb-5">
                                <select v-model="clients.health_insurance">
                                    <option disabled value="">Select option</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </fieldset>
                        </div>
                        <div class="col-sm-4">
                            <label>Insurance Program</label>
                            <input type="text" class="form-control" placeholder="Name of Healthcare Provider" v-model="clients.insurance_program" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Health Insurance Desc</label>
                            <input type="text" class="form-control" placeholder="Type of health insurance" v-model="clients.health_insurance_desc" required>
                        </div>
                        <div class="col-sm-4">
                            <label>Priority Population</label>
                            <fieldset class="form-control mb-5">
                                <select v-model="clients.priority_population">
                                    <option disabled value="">Select option</option>
                                    <option>Pregnant</option>
                                    <option>Single Parent</option>
                                    <option>Disabled</option>
                                    <option>Homeless</option>
                                    <option>None</option>
                                </select>
                            </fieldset>
                        </div>
                        <div class="col-sm-4">
                            <label>Covid Status</label>
                            <fieldset class="form-control mb-5">
                                <select v-model="clients.covid_status">
                                    <option disabled value="">Select option</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </fieldset>
                        </div>
            </div>
        </fieldset>
                
                <button class="btn btn-danger mt-3">Create</button>
        </form>
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
                  this.$router.push('/clients')
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