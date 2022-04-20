<script>
    import axios from 'axios'
    //export array
    export default{
        data(){
            return{
                services:[]
            }
        },
        //grab all services data before mounting dom
        created(){
            //get services data
            let apiURL = 'http://localhost:8080/services';
            axios.get(apiURL).then(res => {
                this.services = res.data;
            }).catch(error=>{
                console.log(error)
            });
        },
        //define functions
        methods:{
            //remove event from db
            del_service(id){
                let apiURL = `http://localhost:8080/services/del/${id}`
                let indexOfArrayItem = this.services.findIndex(i=>i.sid === id); //store sid index from array
                
                //remove only if true
                if(window.confirm('Delete?')){
                    //remove service from services collection
                    axios.delete(apiURL).then(()=>{
                        this.services.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }
</script>

<template>
    <main>
        <h1 class="text-center mb-5">All Services</h1>
       <!-- display service table -->
        <div class="row ">
            <router-link :to="{path:'new-service'}" class="btn btn-secondary col-md-3">Create New Service</router-link>
            <table class="table table-light table-hover">
            <thead class="table-dark">
                <tr>
                    <th>ID#</th>
                    <th>Name</th>
                    <th>Renewal</th>
                    <th>Host</th>
                    <th>Notes</th>
                    <th colspan="3">Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- display all services from services array -->
                <tr v-for="service in services" :key="service._id">
                    <td>{{service.sid}}</td>
                    <td>{{service.name }}</td>
                    <td>{{service.renewal}}</td>
                    <td>{{service.host}}</td>
                    <!-- notes textbox-->
                    <td><textarea name="" id="" cols="40" rows="3" v-model='service.notes' readonly></textarea></td>
                    <!-- go to applicants view based on sid -->
                    <td><router-link :to="{name: 'applicants', params: { id: service.sid }}" class="btn btn-secondary">Applicants</router-link></td>
                    <!-- edit services view by sid -->
                    <td><router-link :to="{name: 'services_edit', params: { id: service.sid }}" class="btn btn-secondary ">Edit</router-link></td>
                    <!-- call function to remove service from collection -->
                    <td><button @click.prevent="del_service(service.sid)" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    </main>
</template>

<style>
 @import "../../assets/app.css";
</style>