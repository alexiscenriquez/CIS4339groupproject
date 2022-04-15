<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Student content -->
            <h3 class="text-center">Update Client</h3>
            <form @submit.prevent="UpdateClient">

                <div class="form-group">
                    <label>ID {{cls_list[0].cid}}</label>
                </div>

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="cls_list[0].first_name" required>
                </div>

                <div class="form-group">
                    <label>Middle Name</label>
                    <input type="text" class="form-control" v-model="cls_list[0].mid_name" required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="cls_list[0].last_name"  required>
                </div>

                <div class="form-group">
                    <label>Date of Birth</label>
                    <input type="text" class="form-control"  placeholder= "YYYY-MM-DD" v-model="cls_list[0].b_day" required>
                </div>

                <div class="form-group">
                    <label>Drivers License Number</label>
                    <input type="text" class="form-control" v-model="cls_list[0].DL">
                </div>

                <div class="form-group">
                    <label>Gender</label>
                    <input type="text" class="form-control" v-model="cls_list[0].gender">
                </div>

                <div class="form-group">
                    <label>Ethnicity</label>
                    <input type="text" class="form-control" v-model="cls_list[0].ethnicity">
                </div>

                <div class="form-group">
                    <label>Home Address</label>
                    <input type="text" class="form-control" v-model="cls_list[0].address" required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="cls_list[0].city" required>
                </div>

                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" v-model="cls_list[0].state" required>
                </div>

                <div class="form-group">
                    <label>Country</label>
                    <input type="text" class="form-control" v-model="cls_list[0].country" required>
                </div>

                <div class="form-group">
                    <label>Zip Code</label>
                    <input type="text" class="form-control" v-model="cls_list[0].zip_code"  required>
                </div>

                <div class="form-group">
                    <label>Rent</label>
                    <input type="text" class="form-control" v-model="cls_list[0].rent" required>
                </div>

                <div class="form-group">
                    <label>Residency</label>
                    <input type="text" class="form-control" placeholder="Amount of time spent in place of residence" v-model="cls_list[0].residency" required>
                </div>

                <div class="form-group">
                    <label>Living Arrangements</label>
                    <input type="text" class="form-control" v-model="cls_list[0].living_arrangements"  required>
                </div>

                <div class="form-group">
                    <label>No. of Children</label>
                    <input type="text" class="form-control" placeholder="Number of Children living in residence" v-model="cls_list[0].number_of_children" required>
                </div>

                <div class="form-group">
                    <label>No. of Adults 65+</label>
                    <input type="text" class="form-control" placeholder="Number of Adults over the age of 65 living in residence" v-model="cls_list[0].number_of_adults_over_65" required>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="cls_list[0].phone_number" required>
                </div>

                <div class="form-group">
                    <label>Home Phone Number</label>
                    <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="cls_list[0].home_phone_number">
                </div>

                <div class="form-group">
                    <label>Emergency Contact Phone Number</label>
                    <input type="text" class="form-control" placeholder="XXX-XXX-XXXX" v-model="cls_list[0].emergency_contact_phone_number" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" placeholder="Primary Email Address" v-model="cls_list[0].primary_email" required>
                </div>

                <div class="form-group">
                    <label>Secondary Email</label>
                    <input type="email" class="form-control" v-model="cls_list[0].secondary_email">
                </div>

                <div class="form-group">
                    <label>Marital Status</label>
                    <input type="text" class="form-control" v-model="cls_list[0].marital_status" required>
                </div>

                <div class="form-group">
                    <label>Language</label>
                    <input type="text" class="form-control" v-model="cls_list[0].language">
                </div>

                <div class="form-group">
                    <label>Priority Population</label>
                    <input type="text" class="form-control" v-model="cls_list[0].priority_population" required>
                </div>

                <div class="form-group">
                    <label>Employment Status</label>
                    <input type="text" class="form-control" v-model="cls_list[0].employment_status" required>
                </div>

                <div class="form-group">
                    <label>Length of Employment</label>
                    <input type="text" class="form-control" v-model="cls_list[0].length_of_employment" required>
                </div>

                <div class="form-group">
                    <label>Employer Name</label>
                    <input type="text" class="form-control" v-model="cls_list[0].employer_name" required>
                </div>

                <div class="form-group">
                    <label>Occupation</label>
                    <input type="text" class="form-control" placeholder="Job Title" v-model="cls_list[0].occupation" required>
                </div>

                <div class="form-group">
                    <label>Highest Grade</label>
                    <input type="text" class="form-control" v-model="cls_list[0].highest_grade" required>
                </div>

                <div class="form-group">
                    <label>Graduate</label>
                    <input type="text" class="form-control" placeholder="College Graduate? (T/F)" v-model="cls_list[0].graduate" required>
                </div>

                <div class="form-group">
                    <label>Degree Name</label>
                    <input type="text" class="form-control" placeholder="Please put 'none' if you don't have a College Degree" v-model="cls_list[0].degree_name" required>
                </div>
                
                <div class="form-group">
                    <label>Head of Household</label>
                    <input type="text" class="form-control" v-model="cls_list[0].head_of_household" required>
                </div>
                
                <div class="form-group">
                    <label>Monthly Income</label>
                    <input type="text" class="form-control" v-model="cls_list[0].monthly_income" required>
                </div>

                 <div class="form-group">
                    <label>Spousal Income Support</label>
                    <input type="text" class="form-control" v-model="cls_list[0].spousal_income_support" required>
                </div>

                <div class="form-group">
                    <label>Worker Compensation</label>
                    <input type="text" class="form-control" v-model="cls_list[0].worker_compensation" required>
                </div>

                <div class="form-group">
                    <label>Veteran Status</label>
                    <input type="text" class="form-control" v-model="cls_list[0].veteran_status" required>
                </div>

                 <div class="form-group">
                    <label>Child Support</label>
                    <input type="text" class="form-control" v-model="cls_list[0].child_support" required>
                </div>

                <div class="form-group">
                    <label>TANF</label>
                    <input type="text" class="form-control" placeholder="Texas Temporarry Assistance for Needy Families" v-model="cls_list[0].tanf" required>
                </div>

                <div class="form-group">
                    <label>Food Stamps</label>
                    <input type="text" class="form-control" placeholder="Total monetary amount of food stamps" v-model="cls_list[0].food_stamps" required>
                </div>

                <div class="form-group">
                    <label>SSI</label>
                    <input type="text" class="form-control" placeholder="Supplemental Security Income" v-model="cls_list[0].ssi" required>
                </div>

                <div class="form-group">
                    <label>Unemployment</label>
                    <input type="text" class="form-control" placeholder="Total monetary amount of Unemployment benefits" v-model="cls_list[0].unemployment" required>
                </div>

                <div class="form-group">
                    <label>Social Security</label>
                    <input type="text" class="form-control" placeholder="Social security number" v-model="cls_list[0].social_security" required>
                </div>

                <div class="form-group">
                    <label>Other Income</label>
                    <input type="text" class="form-control" v-model="cls_list[0].other_income" required>
                </div>

                <div class="form-group">
                    <label>Health Insurance</label>
                    <input type="text" class="form-control" placeholder="Do you have Health Insurance? (T/F)" v-model="cls_list[0].health_insurance" required>
                </div>

                <div class="form-group">
                    <label>Health Insurance Desc</label>
                    <input type="text" class="form-control" placeholder="Type of health insurance" v-model="cls_list[0].health_insurance_desc" required>
                </div>

                <div class="form-group">
                    <label>Insurance Program</label>
                    <input type="text" class="form-control" placeholder="Name of Healthcare Provider" v-model="cls_list[0].insurance_program" required>
                </div>

                <div class="form-group">
                    <label>Covid Status</label>
                    <input type="text" class="form-control" placeholder="Do you have COVID-19? (True/False)" v-model="cls_list[0].covid_status" required>
                </div>



                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
     data() {
        return {
            //clients_list:{}
            cls_list: {}
        }
    },
    created() {
        let apiURL = `http://localhost:8080/clients/find/${this.$route.params.id}`;

        axios.get(apiURL).then(res => {
            this.cls_list = res.data;
        }).catch(error =>{
            console.log(error)
        });
    },
    methods: {
        UpdateClient() {
            let apiURL = `http://localhost:8080/clients/update/${this.$route.params.id}`;

            axios.put(apiURL, this.cls_list[0]).then((res) => {
                console.log(res)
                this.$router.push('/clients')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>