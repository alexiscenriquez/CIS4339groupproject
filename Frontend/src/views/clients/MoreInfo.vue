<template>
    <main>
        <!-- Displays the clients id, first and last name -->
        <h1>{{clients.first_name}} {{clients.last_name}} #{{clients.cid}}</h1>
        <br>
        
           
                <div class='wrapper'>
                    <!-- Button that routs back to the clients view -->
                    <td><router-link :to="{name: 'clients', params: { id: clients.cid }}" id="" class="btn btn-secondary ">Clients View</router-link></td>
                    <!-- Button that routes back to the client edit page for specific client -->
                    <td><router-link :to="{name: 'clients_edit', params: { id: clients.cid }}" id="" class="btn btn-secondary ">Edit Client</router-link></td>
                    <!-- Button that deletes a client -->
                    <td><button @click.prevent="del_client(clients.cid)" id="" class="btn btn-danger">Delete Client</button></td>
                </div>  
          
   
    
        <div class="table1">
            
            <table class="table table-light  caption-top">
                <!-- title -->
                <caption><strong>All Client Information</strong></caption>
                <thead class="table-dark">
                    <tr>
                    
                    </tr>
                </thead>
                <!-- This comment will apply for the entire body -->
                <!-- Every row is pulling data from the clients table specified after the "." -->
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <td>{{clients.first_name}}</td>
                    </tr>
                    <tr>
                        <th>Middle Name</th>
                        <td>{{clients.mid_name}}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{{clients.last_name}}</td>
                    </tr>
                    <tr>
                        <th>Birth Date</th>
                        <td>{{date}}</td>
                    </tr>
                    <tr>
                        <th>Driver's License Number</th>
                        <td>{{clients.DL}}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{{clients.gender}}</td>
                    </tr>
                    <tr>
                        <th>Ethnicity</th>
                        <td>{{clients.ethnicity}}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{{clients.address}}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{{clients.city}}</td>
                    </tr>
                    <tr>
                        <th>State</th>
                        <td>{{clients.state}}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{{clients.country}}</td>
                    </tr>
                    <tr>
                        <th>Zip Code</th>
                        <td>{{clients.zip_code}}</td>
                    </tr>
                    <tr>
                        <th>Monthly Rent</th>
                        <td>{{clients.rent}}</td>
                    </tr>
                    <tr>
                        <th>Length of Residency</th>
                        <td>{{clients.residency}}</td>
                    </tr>
                    <tr>
                        <th>Current Living Arrangement</th>
                        <td>{{clients.living_arrangements}}</td>
                    </tr>
                    <tr>
                        <th>Number of Children</th>
                        <td>{{clients.number_of_children}}</td>
                    </tr>
                    <tr>
                        <th>Number of Adults over 65</th>
                        <td>{{clients.number_of_adults_over_65}}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>{{clients.phone_number}}</td>
                    </tr>
                    <tr>
                        <th>Home Phone Number</th>
                        <td>{{clients.home_phone_number}}</td>
                    </tr>
                    <tr>
                        <th>Emergency Contact Phone Number</th>
                        <td>{{clients.emergency_contact_phone_number}}</td>
                    </tr>
                    <tr>
                        <th>Primary Email Address</th>
                        <td>{{clients.primary_email}}</td>
                    </tr>
                    <tr>
                        <th>Secondary Email Address</th>
                        <td>{{clients.secondary_email}}</td>
                    </tr>
                    <tr>
                        <th>Marital Status</th>
                        <td>{{clients.marital_status}}</td>
                    </tr>
                    <tr>
                        <th>Language</th>
                        <td>{{clients.language}}</td>
                    </tr>
                    <tr>
                        <th>Priority Population</th>
                        <td>{{clients.priority_population}}</td>
                    </tr>
                    <tr>
                        <th>Employment Status</th>
                        <td>{{clients.employment_status}}</td>
                    </tr>
                    <tr>
                        <th>Length of Employment</th>
                        <td>{{clients.length_of_employment}}</td>
                    </tr>
                    <tr>
                        <th>Employer's Name</th>
                        <td>{{clients.employer_name}}</td>
                    </tr>
                    <tr>
                        <th>Occupation</th>
                        <td>{{clients.occupation}}</td>
                    </tr>
                    <tr>
                        <th>Highest Completed Grade</th>
                        <td>{{clients.highest_grade}}</td>
                    </tr>
                    <tr>
                        <th>College Graduate</th>
                        <td>{{clients.graduate}}</td>
                    </tr>
                    <tr>
                        <th>Name of Degree</th>
                        <td>{{clients.degree_name}}</td>
                    </tr>
                    <tr>
                        <th>Head of Household</th>
                        <td>{{clients.head_of_household}}</td>
                    </tr>
                    <tr>
                        <th>Monthly Income</th>
                        <td>{{clients.monthly_income}}</td>
                    </tr>
                    <tr>
                        <th>Spousal Income Support</th>
                        <td>{{clients.spousal_income_support}}</td>
                    </tr>
                    <tr>
                        <th>Worker Compensation Benefits</th>
                        <td>{{clients.worker_compensation}}</td>
                    </tr>
                    <tr>
                        <th>Veteran Status</th>
                        <td>{{clients.veteran_status}}</td>
                    </tr>
                    <tr>
                        <th>Child Support Benefits</th>
                        <td>{{clients.child_support}}</td>
                    </tr>
                    <tr>
                        <th>Temporary Assistance for Needy Families Benefits</th>
                        <td>{{clients.tanf}}</td>
                    </tr>
                    <tr>
                        <th>Food Stamp Benefits</th>
                        <td>{{clients.food_stamps}}</td>
                    </tr>
                    <tr>
                        <th>Supplemental Security Income</th>
                        <td>{{clients.ssi}}</td>
                    </tr>
                    <tr>
                        <th>Unemployment Benefits</th>
                        <td>{{clients.unemployment}}</td>
                    </tr>
                    <tr>
                        <th>Social Security Number</th>
                        <td>{{clients.social_security}}</td>
                    </tr>
                    <tr>
                        <th>Other Income</th>
                        <td>{{clients.other_income}}</td>
                    </tr>
                    <tr>
                        <th>Health Insurance Owner</th>
                        <td>{{clients.health_insurance}}</td>
                    </tr>
                    <tr>
                        <th>Type of Health Insurance</th>
                        <td>{{clients.health_insurance_desc}}</td>
                    </tr>
                    <tr>
                        <th>Health Insurance Name</th>
                        <td>{{clients.insurance_program}}</td>
                    </tr>
                    <tr>
                        <th>Covid Status</th>
                        <td>{{clients.covid_status}}</td>
                    </tr>
                    <!-- Every row is pulling data from the clients table specified after the "." -->
                </tbody>
            </table>
    </div>
    <Footer />
        </main>
</template>

<script>
    import Footer from '../../components/footer.vue'
    import axios from 'axios'
    //Used to export modules, objects, functions and variables to be used elsewhere
    export default{
        //footer
        components:{
            Footer
        },
        //Storing the data being exported in a function
        data(){
            //What the function is returning
            return{
                //clients array
                clients:{},
                date:''
            }
        },
        //created function
        created(){
            //VAR that stores the "find specific client" route
            let apiURL = `http://localhost:8080/clients/find/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                //populates the clients array with data using the route in "apiURL"
                this.clients = res.data[0];
                this.date =  res.data[0].b_day.slice(0, 10)
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            //Function for removing a client
            //The ID variable holds the selected "id" of the client and the function is performed
            del_client(id){
                //Var storing route for deleting specified client
                let apiURL = `http://localhost:8080/clients/del/${id}`
                //if the confirm button is clicked, this happens
                //ALERT MESSAGE
                if(window.confirm('Delete Client?')){
                    //DELETE method used on variable
                    axios.delete(apiURL).then(()=>{
                        //changes view to all clients view
                        this.$router.push('/clients')
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }
</script>

<style>

@import "../../assets/app.css";



</style>
