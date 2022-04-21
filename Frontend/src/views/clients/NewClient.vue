<template>
<div>
    <div>
            <!--Title-->
            <h1 class="text-center">Create Client</h1>
            <!--When submit button is pressed, this function is executed-->
            <form @submit.prevent="handleSubmitForm"
            
            novalidate
            >
                <!--Personal Information Fieldset (Divider)-->
                <fieldset class="form-control mb-5">
                    <legend>Personal Information</legend>
                    <div class="row mb-3">
                        <div class="col-sm-4">
                            <label class="form-label">First Name*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.first_name" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Middle Name*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.mid_name" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Last Name*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.last_name"  required>
                        </div>
                         </div>
                           <div class="row mb-3">
                        <div class="col-sm-4">
                            <label class="form-label">Date of Birth*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="date" class="form-control" v-model="clients.b_day" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Drivers License Number*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.DL"><br>
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                8 digit Drivers License Number
                            </small>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Gender*</label>
                                <!--Drop down menu with hard coded options-->
                                <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                <select v-model="clients.gender" class="form-control" required>
                                    <option disabled value="">Select option</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                    <option>Do not wish to disclose</option>
                                </select>
                          
                        </div> </div> <div class="row mb-3">

                        <div class="col-sm-4">
                            <label class="form-label">Ethnicity*</label>

                                <!--Drop down menu with hard coded options-->
                                <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                <select v-model="clients.ethnicity" class="form-control" required>
                                    <option disabled value="">Select option</option>
                                    <option value="White">White</option>
                                    <option>Black/African American</option>
                                    <option>American Indian or Alaska Native</option>
                                    <option>Asian</option>
                                    <option>Native Hawaiian or Other Pacific Islander</option>
                                    <option>Other</option>
                                </select>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Language</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.language">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Social Security Number*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder= "XXX-XX-XXXX" v-model="clients.social_security" required>
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                9 digit phone number should be entered with dashes
                            </small>
                        </div>
                        </div>   <div class="row mb-3">
                        <div class="col-sm-4">
                            <label class="form-label">Marital Status*</label>
                                <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                <!--Drop down menu with hard coded options-->
                                <select v-model="clients.marital_status" class="form-control" required>
                                    <option disabled value="">Select option</option>
                                    <option>Married</option>
                                    <option>Widowed</option>
                                    <option>Separated</option>
                                    <option>Single</option>
                                    <option>Divorced</option>
                                    <option>Other</option>
                                </select>
                        
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Veteran Status*</label>
                                <!--Drop down menu with hard coded options (Boolean)-->
                                <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                <select v-model="clients.veteran_status" class="form-control">
                                    <option disabled value="">Select option</option>
                                    <option>Veteran</option>
                                    <option>Not a Veteran</option>
                                </select>
                            
                        </div>
                   </div>
                </fieldset>
                <!--Address Information Fieldset (Divider)-->
                <fieldset class="form-control mb-5">
                    <legend>Address</legend>
                    <div class="row mb-3">
                        <div class="col-sm-6">
                            <label class="form-label">Home Address*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.address" required>
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">City*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.city" required>
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">State*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.state" required>
                        </div>
                    </div>
                      <div class="row mb-3">
                        <div class="col-sm-6">
                            <label class="form-label">Country*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.country" required>
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Zip Code*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.zip_code"  required>
                        </div>
                    </div>
                </fieldset>
                <!--Contact Information Fieldset (Divider)-->
                <fieldset class="form-control mb-5">
                    <legend>Contact Information</legend>
                    <div class="row mb-3">
                        <div class="col-sm-4">
                            <label class="form-label">Phone Number*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="clients.phone_number" required>
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                10 digit phone number should be entered with dashes
                            </small>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Home Phone Number</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="clients.home_phone_number">
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                10 digit phone number should be entered with dashes
                            </small>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Emergency Contact Phone Number*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="clients.emergency_contact_phone_number" required>
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                10 digit phone number should be entered with dashes
                            </small>
                        </div>
                        </div>
                    <div class="row mb-3">
                        <div class="col-sm-6">
                            <label class="form-label">Email*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="email" class="form-control" placeholder="Primary Email Address" v-model="clients.primary_email" required>
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                example@email.com
                            </small>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label">Secondary Email</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="email" class="form-control" v-model="clients.secondary_email">
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                example@email.com
                            </small>
                        </div>
                    </div>
                </fieldset>
                <!--Education Information Fieldset (Divider)-->
                <fieldset class="form-control mb-5">
                    <legend>Education Information</legend>
                    <div class="row mb-4">
                        <div class="col-sm-4">
                            <label class="form-label">Highest Completed Education*</label>
                                <!--Drop down menu with hard coded options-->
                                <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                <select v-model="clients.highest_grade" class="form-control" required>
                                    <option disabled value="">Select option</option>
                                    <option>Highschool Diploma</option>
                                    <option>GED</option>
                                    <option>Associate's Degree</option>
                                    <option>Bachelor's Degree</option>
                                </select>
                           
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">College Graduation Status*</label>
                                    <!--Drop down menu with hard coded options (Boolean)-->
                                    <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                    <select v-model="clients.graduate" class="form-control" required>
                                        <option disabled value="">Select option</option>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                              
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Degree Name</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.degree_name" required>
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                    If false, input "none"
                                </small>
                        </div>
                    </div>
                </fieldset>
                <!--Housing Information Fieldset (Divider)-->
                <fieldset class="form-control mb-5">
                    <legend>Housing Information</legend>
                    <div class="row mb-4">
                        <div class="col-sm-4">
                            <label class="form-label">Residency*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Amount of time spent in place of residence" v-model="clients.residency" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Head of Household*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.head_of_household" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Living Arrangements*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.living_arrangements"  required>
                        </div>
                    </div>
                     <div class="row mb-4">
                        <div class="col-sm-4">
                            <label class="form-label">No. of Children*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" placeholder="Number of Children living in residence" v-model="clients.number_of_children" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">No. of Adults 65+*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" placeholder="Number of Adults over the age of 65 living in residence" v-model="clients.number_of_adults_over_65" required>
                        </div>
                    </div>
                </fieldset>
                <!--Financial Information Fieldset (Divider)-->
                <fieldset class="form-control mb-5">
                    <legend>Financial Information</legend>
                    <div class="row mb-4">
                        <div class="col-sm-4">
                            <label class="form-label">Rent*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" v-model="clients.rent" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Monthly Income*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" v-model="clients.monthly_income" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Spousal Income Support*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" v-model="clients.spousal_income_support" required>
                        </div>
                    </div>
                     <div class="row mb-4">
                        <div class="col-sm-4">
                            <label class="form-label">Worker Compensation Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" v-model="clients.worker_compensation" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Child Support Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" v-model="clients.child_support" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">TANF Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" placeholder="Texas Temporarry Assistance for Needy Families" v-model="clients.tanf" required>
                        </div>
                        </div>
                      
                       
                         <div class="row mb-4">
                               <div class="col-sm-4">
                            <label class="form-label">Food Stamp Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" placeholder="Total monetary amount of food stamps" v-model="clients.food_stamps" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">SSI Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" placeholder="Supplemental Security Income" v-model="clients.ssi" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Unemployment Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" placeholder="Total monetary amount of Unemployment benefits" v-model="clients.unemployment" required>
                        </div>
                        </div>
                         <div class="row mb-4">
                        <div class="col-sm-4">
                            <label>Other Income*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="number" class="form-control" v-model="clients.other_income" required>
                        </div>
                        </div>
                    
                </fieldset>
                <!--Employment Information Fieldset (Divider)-->
                <fieldset class="form-control mb-5">
                    <legend>Employment Information</legend>
                    <div class="row mb-4">
                        
                        <div class="col-sm-3">
                                <label class="form-label">Employment Status*</label>
                                <!--Drop down menu with hard coded options-->
                                <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                <select v-model="clients.employment_status" class="form-control" required>
                                    <option disabled value="">Select option</option>
                                    <option>Employed</option>
                                    <option>Unemployed</option>
                                </select>
                        </div>
                        <div class="col-sm-3">
                            <label class="form-label">Employer Name*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.employer_name" required>
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                    If unemployed, input "none"
                                </small>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Occupation*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Job Title" v-model="clients.occupation" required>
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                    If unemployed, input "none"
                                </small>
                        </div>
                    </div>
                           <div class="row mb-4">
                        <div class="col-sm-4">
                            <label class="form-label">Length of Employment*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.length_of_employment" required>
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                    If unemployed, input "none"
                                </small>
                        </div>
                    </div>
                </fieldset>
                <!--Health Information Fieldset (Divider)-->
                <fieldset class="form-control mb-5">
                    <legend>Health Information</legend>
                    <div class="row mb-4">
                       
                        <div class="col-sm-4">
                                <label class="form-label">Health Insurance Status*</label>
                                <!--Drop down menu with hard coded options (boolean)-->
                                <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                <select v-model="clients.health_insurance" class="form-control" required>
                                    <option disabled value="">Select option</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>   
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Insurance Program*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Name of Healthcare Provider" v-model="clients.insurance_program" required>
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                    If false, input "none"
                                </small>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Health Insurance Desc*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Type of health insurance" v-model="clients.health_insurance_desc" required>
                            <small id="phoneHelpBlock" class="form-text text-muted">
                                    If false, input "none"
                                </small>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-4">
                            <label class="form-label">Priority Population*</label>
                                <!--Drop down menu with hard coded options-->
                                <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                <select v-model="clients.priority_population" class="form-control">
                                    <option disabled value="">Select option</option>
                                    <option>Pregnant</option>
                                    <option>Single Parent</option>
                                    <option>Disabled</option>
                                    <option>Homeless</option>
                                    <option>None</option>
                                </select>
                        
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Covid Status*</label>
                                <!--Drop down menu with hard coded options (boolean)-->
                                <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                <select v-model="clients.covid_status" class="form-control" required>
                                    <option disabled value="">Select option</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                          
                        </div>
            </div>
        </fieldset>

        <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }} </li>
                    </ul>
                </p>
                <!-- Button that creates client -->
                <button class="btn mt-3 create">Create</button>
        </form>
        <br>
        <Footer />
    </div>
</div>


</template>

<script>
   import Footer from '../../components/footer.vue'
   import axios from "axios";
    //Used to export modules, objects, functions and variables to be used elsewhere
    export default {
        //footer
    components:{
            Footer
        },
        //Storing the data being exported in a function
        data() {
            //What the function is returning (Method for adding client) in postman
            return {
                errors:[],
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
                   secondary_email: '',
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
            //Function executed when "submit" is clicked (Used in line 6)
            handleSubmitForm() {
                //array populated by errors
                this.errors=[];

                const regex = new RegExp("^\\d{3}-\\d{3}-\\d{4}$"); //phone number validation
                const ssnregex =/^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/ //social security number validation
                //email address validatiion
                const emailregex=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

                //Validating each required field
                if(!this.clients.first_name){
                this.errors.push("First Name Required");
                }

                if(!this.clients.mid_name){
                this.errors.push("First Name Required");
                }

                if(!this.clients.last_name){
                this.errors.push("Last Name Required");
                }

                if(!this.clients.DL){
                this.errors.push("Drivers License Number Required");
                }

                if(!this.clients.gender){
                this.errors.push("Gender Required");
                }

                if(!this.clients.ethnicity){
                this.errors.push("First Name Required");
                }

                if(!this.clients.ssn){
                this.errors.push("SSN Required");
                }

                if(!ssnregex.test(this.clients.ssn))
                this.errors.push("Please enter a valid ssn.");


                if(!this.clients.marital_status){
                this.errors.push("Marital Status Required");
                }

                if(!this.clients.veteran_status){
                this.errors.push("Veteran Status Required");
                }

                if(!this.clients.address){
                this.errors.push("Home Address Required");
                }

                if(!this.clients.city){
                this.errors.push("City Required");
                }

                if(!this.clients.state){
                this.errors.push("State Required");
                }

                if(!this.clients.country){
                this.errors.push("country Required");
                }

                if(!this.clients.zip_code){
                this.errors.push("Zip Code Required");
                }

                if(!this.clients.phone_number){
                this.errors.push("Phone Number Required");
                }

                if(!this.clients.phone_number && (this.clients.phone_number.length!==0) )
                this.errors.push("Phone is Required")

                if (!regex.test(this.clients.phone_number)&&(this.clients.phone_number.length!==0))
                this.errors.push("Please use correct phone number format.");

                if(!this.clients.emergency_contact_phone_number){
                this.errors.push("Emergency Contact Phone Number Required");
                }

                if(!this.clients.emergency_contact_phone_number && (this.clients.emergency_contact_phone_number.length!==0) )
                this.errors.push("Emergency Contact Phone Number Required")

                if (!regex.test(this.clients.emergency_contact_phone_number)&&(this.clients.emergency_contact_phone_number.length!==0))
                this.errors.push("Please use correct phone number format.");

                if(!this.clients.primary_email)
                this.errors.push("Email is Required")

                if(!emailregex.test(this.clients.primary_email) &&(this.clients.primary_email.length!==0))
                this.errors.push("Please enter a valid email.");

                if(!emailregex.test(this.clients.secondary_email) &&(this.clients.secondary_email.length!==0))
                this.errors.push("Please enter a valid secondary email.");

                if(!this.clients.highest_grade)
                this.errors.push("Highest Completed Education is Required")

                if(!this.clients.degree_name)
                this.errors.push("Degree Name is Required")

                if(!this.clients.residency)
                this.errors.push("Residency is Required")

                if(!this.clients.head_of_household)
                this.errors.push("Head of Household is Required")

                if(!this.clients.primary_email)
                this.errors.push("Email is Required")

                if(!this.clients.living_arrangements)
                this.errors.push("Living Arrangements is Required")

                if(!this.clients.number_of_children)
                this.errors.push("No. of Children is Required")

                if(!this.clients.number_of_adults_over_65)
                this.errors.push("No. of Adults 65+ is Required")

                if(!this.clients.rent)
                this.errors.push("Rent is Required")

                if(!this.clients.monthly_income)
                this.errors.push("Monthly Income is Required")

                if(!this.clients.spousal_income_support)
                this.errors.push("Spousal Income Support is Required")

                if(!this.clients.worker_compensation)
                this.errors.push("Worker Compensation Benefits are Required")

                if(!this.clients.child_support)
                this.errors.push("Child Support Benefits are Required")

                if(!this.clients.tanf)
                this.errors.push("TANF Benefits are Required")

                if(!this.clients.food_stamps)
                this.errors.push("Food Stamp Benefits are Required")

                if(!this.clients.ssi)
                this.errors.push("SSI Benefits are Required")

                if(!this.clients.unemployment)
                this.errors.push("Unemployment Benefits are Required")

                if(!this.clients.other_income)
                this.errors.push("Other Income is Required")

                if(!this.clients.employer_name)
                this.errors.push("Employer Name is Required")

                if(!this.clients.occupation)
                this.errors.push("Occupation is Required")

                if(!this.clients.length_of_employment)
                this.errors.push("Length of Employment is Required")

                if(!this.clients.insurance_program)
                this.errors.push("Insurance Program is Required")

                if(!this.clients.health_insurance_desc)
                this.errors.push("Health Insurance Desc is Required")

                if(!this.clients.priority_population)
                this.errors.push("Priority Population is Required")

                if(this.errors.length===0){

                //Storing a route to add clients in "apiURL"
                let apiURL = 'http://localhost:8080/clients/new-client';
                //Recreating the POST Route from our back end ^^^^
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
                   secondary_email: '',
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
             } }
        } 
           
    }
</script>
<style scoped>
 @import "../../assets/app.css";
</style>