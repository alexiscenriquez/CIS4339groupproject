<template>
    <div>
            <!--Displays Title and the associated Client #-->
            <h1>Edit Client{{" #"}}{{clients.cid}}</h1>
            <!--When submit button is pressed, this function is executed-->
            <form @submit.prevent="UpdateClient">
                <!--Creates a field that separates from other parts of the page-->
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
                            <input type="text" class="form-control" v-model="clients.social_security" required>
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
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Home Phone Number</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="clients.home_phone_number">
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Emergency Contact Phone Number*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="clients.emergency_contact_phone_number" required>
                        </div>
                        </div>
                    <div class="row mb-3">
                        <div class="col-sm-6">
                            <label class="form-label">Email*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="email" class="form-control" placeholder="Primary Email Address" v-model="clients.primary_email" required>
                        </div>
                        <div class="col-sm-6">
                            <label class="form-label">Secondary Email</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="email" class="form-control" v-model="clients.secondary_email">
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
                            <label class="form-label">Degree Name</label>\
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.degree_name" required>
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
                            <label class="form-label">Living Arrangement*s</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.living_arrangements"  required>
                        </div>
                    </div>
                     <div class="row mb-4">
                        <div class="col-sm-4">
                            <label class="form-label">No. of Children*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Number of Children living in residence" v-model="clients.number_of_children" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">No. of Adults 65+*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Number of Adults over the age of 65 living in residence" v-model="clients.number_of_adults_over_65" required>
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
                            <input type="text" class="form-control" v-model="clients.rent" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Monthly Income*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.monthly_income" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Spousal Income Support*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.spousal_income_support" required>
                        </div>
                    </div>
                     <div class="row mb-4">
                        <div class="col-sm-4">
                            <label class="form-label">Worker Compensation Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.worker_compensation" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Child Support Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.child_support" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">TANF Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Texas Temporarry Assistance for Needy Families" v-model="clients.tanf" required>
                        </div>
                        </div>
                      
                       
                         <div class="row mb-4">
                               <div class="col-sm-4">
                            <label class="form-label">Food Stamp Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Total monetary amount of food stamps" v-model="clients.food_stamps" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">SSI Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Supplemental Security Income" v-model="clients.ssi" required>
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Unemployment Benefits*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Total monetary amount of Unemployment benefits" v-model="clients.unemployment" required>
                        </div>
                        </div>
                         <div class="row mb-4">
                        <div class="col-sm-4">
                            <label>Other Income*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.other_income" required>
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
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Occupation*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Job Title" v-model="clients.occupation" required>
                        </div>
                    </div>
                           <div class="row mb-4">
                        <div class="col-sm-4">
                            <label class="form-label">Length of Employment*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="clients.length_of_employment" required>
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
                        </div>
                        <div class="col-sm-4">
                            <label class="form-label">Health Insurance Desc*</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" placeholder="Type of health insurance" v-model="clients.health_insurance_desc" required>
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
        </form>
    </div>
</template>

<script>
import axios from "axios";
//Used to export modujles, objects, functions and variables to be used elsewhere
export default {
    //Storing the data being exported in a function
     data() {
         //Function returning
        // arrays for holding data
        return {
            //clients_list:{}
            clients: {}
        }
    },
    created() {
        //VAR that holds the find a specific client route
        let apiURL = `http://localhost:8080/clients/find/${this.$route.params.id}`;
        //GET method is used on var
        axios.get(apiURL).then(res => {
            //Used to store data from the client table into the newly created clients array
            this.clients = res.data[0];
            //Stores the date picked upon creation when you edit a client
            this.date = res.data[0].b_day.slice(0, 10)
        }).catch(error =>{
            console.log(error)
        });
    },
    methods: {
        //function for updating a clients information
        UpdateClient() {
            //Stores the date picked upon creation when you edit a client
            this.clients.b_day=this.date
            //VAR stores route to update/edit a specific clients information
            let apiURL = `http://localhost:8080/clients/update/${this.$route.params.id}`;
            //PUT method is used on the vars
            axios.put(apiURL, this.clients).then((res) => {
                console.log(res)
                //changes view to clients view
                this.$router.push('/clients')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>

<style scoped>
@import "../../assets/app.css";
</style>