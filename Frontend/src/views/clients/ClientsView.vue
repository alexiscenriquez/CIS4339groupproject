<template>
    <main>
        <div class="row justify-content-center">
            <router-link :to="{path:'new-client'}" class="btn btn-secondary">Create New Client</router-link>
            <table class="table table-light table-hover">
            <thead class="table-dark">
                <tr>
                <th>Client</th>    
                <th>First Name</th>
                <!--<th>Middle Name</th>-->
                <th>Last Name</th>
                <th>Birth Date</th>
                <!--<th>Drivers License Number</th>-->
                <!--<th>Gender</th>--> 
                <!--<th>Ethnicity</th>-->
                <!--<th>Address</th>
                <th>City</th>
                <th>State</th>-->
                <!--<th>Country</th>-->
                <!--<th>Zip Code</th>-->
                <!--<th>Monthly Rent</th>-->
                <!--<th>Length of Residency</th>-->
                <!--<th>Living Arrangements</th>-->
                <!--<th>Number of Children</th>-->
                <!--<th>Number of Adults over 65</th>-->
                <th>Phone Number</th>
                <!--<th>Home Phone Number</th>-->
                <!--<th>Emergency Contact Phone Number</th>-->
                <!--<th>Primary Email</th>-->
                <!--<th>Secondary Email</th>-->
                <!--<th>Marital Status</th>-->
                <!--<th>Language</th>-->
                <!--<th>Priority Population</th>-->
                <!--<th>Employment Status</th>-->
                <!--<th>Length of Employment</th>-->
                <!--<th>Employer Name</th>-->
                <!--<th>Occupation</th>-->
                <!--<th>Highest Grade</th>-->
                <!--<th>Graduate</th>-->
                <!--<th>Degree Name</th>-->
                <!--<th>Head of Household</th>-->
                <!--<th>Monthly Income</th>-->
                <!--<th>Spousal Income Support</th>-->
                <!--<th>Worker Compensation</th>-->
                <!--<th>Veteran Status</th>-->
                <!--<th>Child Support</th>-->
                <!--<th>TANF</th>-->
                <!--<th>Food Stamps</th>-->
                <!--<th>SSI</th>-->
                <!--<th>Unemployment</th>-->
                <!--<th>Social Security</th>-->
                <!--<th>Other Income</th>-->
                <!--<th>Health Insurance</th>-->
                <!--<th>Insurance Program</th>-->
                <!--<th>Health Insurance Description</th>-->
                <!--<th>Covid Status</th>-->
                <th>Actions</th>
                <th>Actions</th>
                <th>Actions</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="cls in allclients" :key="cls._id">
                <td>{{cls.cid }}</td>
                <td>{{cls.first_name }}</td>
                <!--<td>{{cls.mid_name }}</td>-->
                <td>{{cls.last_name }}</td>
                <td>{{cls.b_day }}</td>
                <!--<td>{{cls.DL }}</td>-->
                <!--<td>{{cls.gender }}</td>-->
                <!--<td>{{cls.ethnicity }}</td>-->
                <!--<td>{{cls.address }}</td>-->
                <!--<td>{{cls.city }}</td>-->
                <!--<td>{{cls.state }}</td>-->
                <!--<td>{{cls.country }}</td>-->
                <!--<td>{{cls.zip_code }}</td>-->
                <!--<td>{{cls.rent }}</td>-->
                <!--<td>{{cls.residency }}</td>-->
                <!--<td>{{cls.living_arrangements }}</td>-->
                <!--<td>{{cls.number_of_children }}</td>-->
                <!--<td>{{cls.number_of_adults_over_65 }}</td>-->
                <td>{{cls.phone_number }}</td>
                <!--<td>{{cls.home_phone_number }}</td>-->
                <!--<td>{{cls.emergency_contact_phone_number }}</td>-->
                <!--<td>{{cls.primary_email }}</td>-->
                <!--<td>{{cls.secondary_email }}</td>-->
                <!--<td>{{cls.marital_status }}</td>-->
                <!--<td>{{cls.language }}</td>-->
                <!--<td>{{cls.priority_population }}</td>-->
                <!--<td>{{cls.employment_status }}</td>-->
                <!--<td>{{cls.length_of_employment }}</td>-->
                <!--<td>{{cls.employer_name }}</td>-->
                <!--<td>{{cls.occupation }}</td>-->
                <!--<td>{{cls.highest_grade }}</td>-->
                <!--<td>{{cls.graduate }}</td>-->
                <!--<td>{{cls.degree_name }}</td>-->
                <!--<td>{{cls.head_of_household }}</td>-->
                <!--<td>{{cls.monthly_income }}</td>-->
                <!--<td>{{cls.spousal_income_support }}</td>-->
                <!--<td>{{cls.worker_compensation }}</td>-->
                <!--<td>{{cls.veteran_status }}</td>-->
                <!--<td>{{cls.child_support }}</td>-->
                <!--<td>{{cls.tanf }}</td>-->
                <!--<td>{{cls.food_stamps }}</td>-->
                <!--<td>{{cls.ssi }}</td>-->
                <!--<td>{{cls.unemployment }}</td>-->
                <!--<td>{{cls.social_security }}</td>-->
                <!--<td>{{cls.other_income }}</td>-->
                <!--<td>{{cls.health_insurance }}</td>-->
                <!--<td>{{cls.health_insurance_desc }}</td>-->
                <!--<td>{{cls.insurance_program }}</td>-->
                <!--<td>{{cls.covid_status }}</td>-->
                <td><router-link :to="{name: 'servicereps', params: { id: cls.cid }}" class="btn btn-secondary ">Services</router-link></td>
                <td><router-link :to="{name: 'custinfo', params: { id: cls.cid }}" class="btn btn-secondary ">More..</router-link></td>
                <td><router-link :to="{name: 'clients_edit', params: { id: cls.cid }}" class="btn btn-secondary ">Edit</router-link></td>
                <td><button @click.prevent="del_client(cls.cid)" class="btn btn-secondary">Delete</button></td>
                <td v-if="active">hello</td>
                
                </tr>
            </tbody>
            </table>
          </div>
  

    </main>
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                allclients:[],
                active: false

            }
        },
        created(){
            let apiURL = 'http://localhost:8080/clients/all';
            axios.get(apiURL).then(res => {
                this.allclients = res.data;
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            del_client(id){
                let apiURL = `http://localhost:8080/clients/del/${id}`
                let indexOfArrayItem = this.allclients.findIndex(i=>i.cid === id);

                if(window.confirm('Delete Client?')){
                    axios.delete(apiURL).then(()=>{
                        this.allclients.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }
</script>

