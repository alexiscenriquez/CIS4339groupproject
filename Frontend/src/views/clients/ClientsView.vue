<template>
    <main>
        <h1 class='text-center mb-5'>All Clients</h1>
        <div class="row ">
            <!-- Button that routes to create client view -->
            <router-link :to="{path:'new-client'}" class="btn btn-secondary col-md-3">Create New Client</router-link>
            <table class="table table-light table-hover">
            <thead class="table-dark">
                <tr>
                <!-- Table headers -->
                <th>#</th>    
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth Date</th>
                <th>Phone Number</th>
                <th colspan="6">Actions</th>
  
                </tr>
            </thead>
            <tbody>
            <!-- v-for acts as a for loop that goes through all the data in allclients array -->
            <tr v-for="cls in allclients" :key="cls._id">
                <!-- All table data display specified information within the cls variable -->
                <td>{{cls.cid }}</td>
                <td>{{cls.first_name }}</td>
                <td>{{cls.last_name }}</td>
                <td>{{cls.b_day }}</td>
                <td>{{cls.phone_number }}</td>
                <!-- button that routes to clients-org view (shows which clients are related to organizations) -->
                <td><router-link :to="{name: 'client-orgs', params: { id: cls.cid }}" class="btn btn-secondary ">Organizations</router-link></td>
                <!-- button that routes to servicereps view (shows which clients are related to services) -->
                <td><router-link :to="{name: 'servicereps', params: { id: cls.cid }}" class="btn btn-secondary ">Services</router-link></td>
                <!-- button that routes to custinfo view (shows all information pertaining to client) -->
                <td><router-link :to="{name: 'custinfo', params: { id: cls.cid }}" class="btn btn-secondary ">More..</router-link></td>
                <!-- button that routes to clients_edit (Allows specific client info to be edited) -->
                <td><router-link :to="{name: 'clients_edit', params: { id: cls.cid }}" class="btn btn-secondary ">Edit</router-link></td>
                <!-- buttton that deletes a client from the clients view -->
                <td><button @click.prevent="del_client(cls.cid)" class="btn btn-danger">Delete</button></td>
                <td v-if="active">hello</td>
                
                </tr>
            </tbody>
            </table>
          </div>

    </main>
</template>

<script>
    import axios from 'axios'
    //Used to export modujles, objects, functions and variables to be used elsewhere
    export default{
        //Storing the data being exported in a function
        data(){
            //Function returning
            //arrays for holding data
            return{
                allclients:[],
                active: false

            }
        },
        created(){
            //var storing the route to show all clients
            let apiURL = 'http://localhost:8080/clients/all';
            //GET Method is used on the var
            axios.get(apiURL).then(res => {
                //Used to store ALL data into allclients array
                this.allclients = res.data;
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            //function to delet client
            del_client(id){
                //var holding delete client route
                let apiURL = `http://localhost:8080/clients/del/${id}`
                //Var that holds the method of finding the specific service id "cid"
                let indexOfArrayItem = this.allclients.findIndex(i=>i.cid === id);
                //if the confirm button is clicked, this happens
                //ALERT MESSAGE
                if(window.confirm('Delete Client?')){
                    //DELETE method used on the vars
                    axios.delete(apiURL).then(()=>{
                        //Splicing out of one specific item from the indexOfArrayItem var
                        this.allclients.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }
</script>


