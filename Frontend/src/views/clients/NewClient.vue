<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Client</h3>
            <form @submit.prevent="handleSubmitForm">
                <!-- <div class="form-group">
                    <label>ID</label>
                    <input type="text" class="form-control" v-model="clients.cid" required>
                </div>-->

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="clients.first_name" required>
                </div>

                <div class="form-group">
                    <label>Middle Name</label>
                    <input type="text" class="form-control" v-model="clients.mid_name" required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="clients.last_name"  required>
                </div>

                <div class="form-group">
                    <label>Date of Birth</label>
                    <input type="text" class="form-control" placeholder='YYYY-MM-DD' v-model="clients.b_day" required>
                </div>

                <div class="form-group">
                    <label>Drivers License Number</label>
                    <input type="text" class="form-control" v-model="clients.DL"><br>
                </div>

                <label>Gender</label>
                <fieldset class="form-control mb-5">
                <div class="form-check">
                    <!--<label>Gender</label>
                    <input type="text" class="form-control" v-model="clients.gender">-->
                    <input type="radio" class="form-check-input" id="Male" value="Male" v-model='clients.gender'>Male
                    <label class="form-check-label" for="Male"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Female" value="Female" v-model='clients.gender'>Female
                    <label class="form-check-label" for="Female"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Other" value="Other" v-model='clients.gender'>Other
                    <label class="form-check-label" for="Other"></label>
                    <br>
                </div>
                </fieldset>

                <label>Ethnicity</label>
                <fieldset class="form-control mb-5">
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="White" value="White" v-model='clients.ethnicity'>White
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
                    <label class="form-check-label" for="Other"></label>
                    <br>
                </div>
                </fieldset>

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

                <label>Marital Status</label>
                <fieldset class="form-control mb-5">
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="Married" value="Married" v-model='clients.marital_status'>Married
                    <label class="form-check-label" for="Married"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Widowed" value="Widowed" v-model='clients.marital_status'>Widowed
                    <label class="form-check-label" for="Widowed"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Separated" value="Separated" v-model='clients.marital_status'>Separated
                    <label class="form-check-label" for="Separated"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Divorced" value="Divorced" v-model='clients.marital_status'>Divorced
                    <label class="form-check-label" for="Divorced"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Single" value="Single" v-model='clients.marital_status'>Single
                    <label class="form-check-label" for="Single"></label>
                    <br>
                </div>
                </fieldset>

                <div class="form-group">
                    <label>Language</label>
                    <input type="text" class="form-control" v-model="clients.language">
                </div>

                <label>Priority Population</label>
                <fieldset class="form-control mb-5">
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="Pregnant" value="Pregnant" v-model='clients.priority_population'>Pregnant
                    <label class="form-check-label" for="Pregnant"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Single Parent" value="Single Parent" v-model='clients.priority_population'>Single Parent
                    <label class="form-check-label" for="Single Parent"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Disabled" value="Disabled" v-model='clients.priority_population'>Disabled
                    <label class="form-check-label" for="Disabled"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Homeless" value="Homeless" v-model='clients.priority_population'>Homeless
                    <label class="form-check-label" for="Homeless"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="None" value="None" v-model='clients.priority_population'>None
                    <label class="form-check-label" for="None"></label>
                    <br>
                </div>
                </fieldset>

                <label>Employment Status</label>
                <fieldset class="form-control mb-5">
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="Employed" value="Employed" v-model='clients.employment_status'>Employed
                    <label class="form-check-label" for="Employed"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Unemployed" value="Unemployed" v-model='clients.employment_status'>Unemployed
                    <label class="form-check-label" for="Unemployed"></label>
                    <br>
                </div>
                </fieldset>

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

                <label>Highest Grade Completed</label>
                <fieldset class="form-control mb-5">
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="Highschool" value="Highschool" v-model='clients.highest_grade'>Highschool
                    <label class="form-check-label" for="Highschool"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="College" value="College" v-model='clients.highest_grade'>College
                    <label class="form-check-label" for="College"></label>
                    <br>
                </div>
                </fieldset>

                <label>Graduation Status</label>
                <fieldset class="form-control mb-5">
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="true" value="true" v-model='clients.graduate'>true
                    <label class="form-check-label" for="true"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="false" value="false" v-model='clients.graduate'>false
                    <label class="form-check-label" for="false"></label>
                    <br>
                </div>
                </fieldset>

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
                    <input type="text" class="form-control" v-model="clients.worker_compensation" required>
                </div>

                <label>Veteran Status</label>
                <fieldset class="form-control mb-5">
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="Veteran" value="Veteran" v-model='clients.veteran_status'>Veteran
                    <label class="form-check-label" for="Veteran"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="Not a Veteran" value="Not a Veteran" v-model='clients.veteran_status'>Not a Veteran
                    <label class="form-check-label" for="Not a Veteran"></label>
                    <br>
                </div>
                </fieldset>

                 <div class="form-group">
                    <label>Child Support Benefits</label>
                    <input type="text" class="form-control" v-model="clients.child_support" required>
                </div>

                <div class="form-group">
                    <label>TANF Benefits</label>
                    <input type="text" class="form-control" placeholder="Texas Temporarry Assistance for Needy Families" v-model="clients.tanf" required>
                </div>

                <div class="form-group">
                    <label>Food Stamp Benefits</label>
                    <input type="text" class="form-control" placeholder="Total monetary amount of food stamps" v-model="clients.food_stamps" required>
                </div>

                <div class="form-group">
                    <label>SSI Benefits</label>
                    <input type="text" class="form-control" placeholder="Supplemental Security Income" v-model="clients.ssi" required>
                </div>

                <div class="form-group">
                    <label>Unemployment Benefits</label>
                    <input type="text" class="form-control" placeholder="Total monetary amount of Unemployment benefits" v-model="clients.unemployment" required>
                </div>

                <div class="form-group">
                    <label>Social Security Number</label>
                    <input type="text" class="form-control" v-model="clients.social_security" required>
                </div>

                <div class="form-group">
                    <label>Other Income</label>
                    <input type="text" class="form-control" v-model="clients.other_income" required>
                </div>

                <label>Health Insurance Status</label>
                <fieldset class="form-control mb-5">
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="true" value="true" v-model='clients.health_insurance'>true
                    <label class="form-check-label" for="true"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="false" value="false" v-model='clients.health_insurance'>false
                    <label class="form-check-label" for="false"></label>
                    <br>
                </div>
                </fieldset>

                <div class="form-group">
                    <label>Health Insurance Desc</label>
                    <input type="text" class="form-control" placeholder="Type of health insurance" v-model="clients.health_insurance_desc" required>
                </div>

                <div class="form-group">
                    <label>Insurance Program</label>
                    <input type="text" class="form-control" placeholder="Name of Healthcare Provider" v-model="clients.insurance_program" required>
                </div>

                <label>Covid Status</label>
                <fieldset class="form-control mb-5">
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="true" value="true" v-model='clients.covid_status'>true
                    <label class="form-check-label" for="true"></label>
                    <br>
                    <input type="radio" class="form-check-input" id="false" value="false" v-model='clients.covid_status'>false
                    <label class="form-check-label" for="false"></label>
                    <br>
                </div>
                </fieldset>
                
                <!--<div class="form-group">
                    <label for="Early Childhood">Early Childhood</label>
                    <input type="checkbox" id="Early Childhood" v-model="services.sid"><br>
                    <label>Housing</label>
                    <input type="checkbox" v-model="clients.services"><br>
                    <label>Adult Education</label>
                    <input type="checkbox" v-model="clients.services"><br>
                    <label>Loans</label>
                    <input type="checkbox" v-model="clients.services"><br>
                    <label>Meals</label>
                    <input type="checkbox" v-model="clients.services"><br>
                    <label>Family Support</label>
                    <input type="checkbox" v-model="clients.services"><br>
                </div>-->
                <!--<td><button><router-link :to="{name: 'client', params: { id: cls.cid }}" class="btn btn-secondary ">Create Client</router-link></button></td>-->
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