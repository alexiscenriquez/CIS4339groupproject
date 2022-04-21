<script>
import Footer from '../../components/footer.vue'    
    import axios from 'axios'
    //Used to export modujles, objects, functions and variables to be used elsewhere
    export default{
        components:{
            Footer
        },
        //Storing the data being exported in a function
        data(){
            //Function returning
            //Several arrays for holding data
            return{
                client:[],
                service:[],
                fullservices:[],
                new_sid:{id:''},
                active: false

            }
        },
        created(){
            //Storing the route that gets a clients history (Services/Employees) in a var
            let apiURL = `http://localhost:8080/clients/client-history/${this.$route.params.id}`;
            //Storing the route that gets all services in a variable
            let apiURL2 = `http://localhost:8080/services`;
            //GET Method is used on the var
            axios.get(apiURL).then(res => {
                //Used to store data from the client table into the newly created client array
                this.client = res.data[0];
                //this.employee = res.data[0].employees;
                //Used to store data from the service table into the newly created service array
                this.service = res.data[0].services;
            }).catch(error=>{
                console.log(error)
            });
            //GET method is used on var
            axios.get(apiURL2).then(res =>{
                    //Used to store ALL data into fullservices array
                    this.fullservices = res.data
                    console.log(this.fullservices)
                }).catch(error =>{
                    console.log(error)
                })
        },
        methods:{
            //Function for removing service
            //The ID variable holds the selected "id" of the service and the function iis performed
            rem_service(ID){
                //"id" that is picked is stored in ID
                let data = {
                    "id":ID,
                }
                //Data for holding nested function
                //"id" that is picked is stored in ID
                let data2 = {"id":this.$route.params.id}
                //Var that holds client side deleting of a service
                let apiURL = `http://localhost:8080/clients/del-service/${this.$route.params.id}`
                //Var that holds service side deleting of a client
                let apiURL2 = `http://localhost:8080/services/del-applicant/${ID}`
                //Var that holds the method of finding the specific service id "sid"
                let indexOfArrayItem = this.service.findIndex(i=>i.sid === ID);
                //if the confirm button is clicked, this happens
                //ALERT MESSAGE
                if(window.confirm('Remove Service from Client?')){
                    //POST method used on the vars
                    axios.post(apiURL, data
                    ).then(()=>{
                        //Splicing out of one specific item from the indexOfArrayItem var
                        this.service.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                    //POST method used on the vars
                    axios.post(apiURL2, data2).then(()=>{
                        
                    }).catch(error =>{
                        console.log(error)
                    })
                }

                
            },
            //Function for adding service
            //The ID variable holds the selected "id" of the service and the function is performed
            add_service() {
                //var for storing newly created "new_sid" var
                let isd = this.new_sid.id
                //Var that stores a specific id
                let data = {"id":this.$route.params.id}
                //Var that stores the client side method of adding a service
                let apiURL = `http://localhost:8080/clients/add-service/${this.$route.params.id}`;
                //Var that stores the service side method of adding a client
                let apiURL2 = `http://localhost:8080/services/add-applicant/${isd}`
                //POST method used on the vars
                axios.post(apiURL, this.new_sid).then(() => {
                    //changing the view to the list
                  this.$router.push('/clients')
                  //"new_sid" is storing the specific id
                  this.new_sid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
                //POST method used on the vars
                axios.post(apiURL2, data).then(()=>{
                    
                }).catch(error =>{
                    console.log(error)
                })
            }
        } 
    }
    
</script>

<template>
    <div>
        <!--Outputs the specific client's "id" number-->
        <h1>Client #{{client.cid}}</h1>
        <br>
        <!-- Fieldset (Divider)-->
        <fieldset class="form-control mb-5">
            <!--Displays the client's first and last name connected to the "id" from line 119 (Bold)-->
            <legend><strong>{{client.first_name}}{{" "}}{{client.last_name}}</strong></legend>
                <div class="'row mb-3">
                    <div class="col-sm-2">
                        <label for="" class="form-label">First Name</label>
                        <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                        <!--"disabled" allows for the info to only be viewable-->
                        <input type="text" class="'form-control" v-model="client.first_name" disabled>
                    </div>
                    <div class="col-sm-2">
                        <label for="" class="form-label">Last Name</label>
                        <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                        <!--"disabled" allows for the info to only be viewable-->
                        <input type="text" class="'form-control" v-model="client.last_name" disabled>
                    </div>
                    <div class="col-sm-2">
                        <label for="" class="form-label">Phone Number</label>
                        <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                        <!--"disabled" allows for the info to only be viewable-->
                        <input type="text" class="'form-control" v-model="client.phone_number" disabled>
                    </div>
                </div>
                <!-- Edit button that routes to the Client edit page for the specified "id"-->
                <td><router-link :to="{name: 'clients_edit', params: { id: client.cid }}" class="btn btn-secondary ">Edit</router-link></td>
                <hr>
                <div class="row mb-4">
                    <div class="col-sm-4">
                        <!--performs the function upon the button "apply for service" being clicked-->
                        <form @submit.prevent='add_service'>
                            <div>
                                <!--Drop down menu that acts as a for loop, pulling all available options from the "fullservices" array -->
                                <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                <select v-model='new_sid.id' class="form-control">
                                    <option value="" selected disabled>Choose a Service</option>
                                    <option v-for="x in fullservices" :value="x.sid" :key="x.sid">{{x.sid}}{{" - "}}{{x.name}}</option>
                                </select>
                                <div class='form-helper'>SID# - Name</div>
                                <!--Button that activated the function "add_service"-->
                                <button class='btn btn-secondary'>Apply for Service</button>
                            </div>
                        </form>
                    </div>
                </div>
        </fieldset>
        <table class="table table-light table-hover caption-top">
            <!-- Bolded title -->
            <caption><strong>Services</strong></caption>
            <thead class="table-dark">
                <tr>
                <!--Table Headers -->
                <th>SID#</th>
                <th>Name</th>
                <th>Renewal</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <!-- V-for acts as a for loop and displays all applicants in the service array -->
                <tr v-for="applicants in service" :key="applicants.sid">
                    <td>{{applicants.sid }}</td>
                    <td>{{applicants.name }}</td>
                    <td>{{applicants.renewal }}</td>
                    <!-- Button that removes the service from the client -->
                    <td><button @click.prevent="rem_service(applicants.sid)" class="btn btn-secondary">Remove</button></td>
                </tr> 
            </tbody>
        </table>
        <Footer />
    </div>
</template>
<style scoped>
 @import "../../assets/app.css";

</style>