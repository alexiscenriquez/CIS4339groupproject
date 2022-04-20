<script>
    import axios from 'axios'
    //Used to export modujles, objects, functions and variables to be used elsewhere
    export default{
        //Storing the data being exported in a function
        data(){
            //Function returning
            //Several arrays for holding data
            return{
                client:[],
                //employee:[],
                organization:[],
                fullorganizations:[],
                new_orgid:{id:''},
                //new_eid:{id:''},
                active: false

            }
        },
        created(){
            //VAR storing route that gets a clients history (Organizations)
            let apiURL = `http://localhost:8080/clients/client-orgs/${this.$route.params.id}`;
            //Storing the route that gets all organizations in a variable
            let apiURL2 = `http://localhost:8080/organizations`;
            //GET method is used on var
            axios.get(apiURL).then(res => {
                //Used to store data from the client table into the newly created client array
                this.client = res.data[0];
                //this.employee = res.data[0].employees;
                //Used to store data from the organization table into the newly created organization array
                this.organization = res.data[0].organizations;
            }).catch(error=>{
                console.log(error)
            });
            //GET method is used on var
            axios.get(apiURL2).then(res =>{
                    //Used to store ALL data into fullorganizations array
                    this.fullorganizations = res.data
                    console.log(this.fullorganizations)
                }).catch(error =>{
                    console.log(error)
                })
        },
        methods:{
            //Function for removing organization
            //The ID variable holds the selected "id" of the organization and the function iis performed
            rem_organization(ID){
                //"id" that is picked is stored in ID
                let data = {
                    "id":ID,
                }
                //"id" that is picked is stored in ID
                let data2 = {"id":this.$route.params.id}
                //var storing the client side method of deleting an organization
                let apiURL = `http://localhost:8080/clients/del-org/${this.$route.params.id}`
                //var storting the organization side method of deleting a client
                let apiURL2 = `http://localhost:8080/organizations/del-client/${ID}`
                //Var that holds the method of finding the specific service id "sid"
                let indexOfArrayItem = this.organization.findIndex(i=>i.orgid === ID);
                //if the confirm button is clicked, this happens
                //ALERT MESSAGE
                if(window.confirm('Remove Organization from Client?')){
                    //POST method used on the vars
                    axios.post(apiURL, data
                    ).then(()=>{
                        //Splicing out of one specific item from the indexOfArrayItem var
                        this.organization.splice(indexOfArrayItem, 1);
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
            //Function for adding organization
            //The ID variable holds the selected "id" of the organization and the function is performed
            add_organization() {
                //var for storing newly created "new_orgid" var
                let rog = this.new_orgid.id
                //Var that stores a specific id
                let data = {"id":this.$route.params.id}
                //var stroing client side method of adding an organization
                let apiURL = `http://localhost:8080/clients/add-org/${this.$route.params.id}`;
                //var storing org side method of adding a client
                let apiURL2 = `http://localhost:8080/organizations/add-client/${rog}`
                //POST method used on the vars
                axios.post(apiURL, this.new_orgid).then(() => {
                    //changing the view to the list
                  this.$router.push('/clients')
                  //"new_orgid" is storing the specific id
                  this.new_orgid = {
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
            <!--Displays the client's first and last name connected to the "id" from line 118 (Bold)-->
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
                <td><router-link :to="{name: 'clients_edit', params: { id: client.cid }}" class="btn create ">Edit</router-link></td>
                <hr>
                <div class="row mb-4">
                    <div class="col-sm-4">
                        <!--performs the function upon the button "add organization" being clicked-->
                        <form @submit.prevent='add_organization'>
                            <div>
                                <!--Drop down menu that acts as a for loop, pulling all available options from the "fullorganizations" array -->
                                <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                                <select v-model='new_orgid.id' class="form-control">
                                    <option value="" selected disabled>Choose an Organization</option>
                                    <option v-for="x in fullorganizations" :value="x.orgid" :key="x.orgid">{{x.orgid}}{{" - "}}{{x.org_name}}</option>
                                </select>
                                <div class='form-helper'>ORGID# - Name</div>
                                <!--Button that activated the function "add_organization"-->
                                <button class='btn create'>Add Organization</button>
                            </div>
                        </form>
                    </div>
                </div>
        </fieldset>
        <table class="table table-light table-hover caption-top">
            <!-- Bolded title -->
            <caption><strong>Organizations</strong></caption>
            <thead class="table-dark">
                <tr>
                    <!--Table Headers -->
                <th>Organization#</th>
                <th>Name</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <!-- V-for acts as a for loop and displays all organizations in the organization array -->
                <tr v-for="organizations in organization" :key="organizations.orgid">
                    <td>{{organizations.orgid }}</td>
                    <td>{{organizations.org_name }}</td>
                    <!-- Button that removes the org from the client -->
                    <td><button @click.prevent="rem_organization(organizations.orgid)" class="btn btn-danger">Remove</button></td>
                </tr> 
            </tbody>
        </table>
    </div>
</template>

<style scoped>
 @import "../../assets/app.css";
</style>