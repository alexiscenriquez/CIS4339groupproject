<template>
    <div>
        <h1 class="text-center mb-5">All Organizations</h1>
        <br>
        <!-- display organization table -->
        <div class="row ">
            <!-- go to create organization page -->
            <router-link :to="{path:'new-org'}" class="btn btn-secondary col-md-3">Create New Organization</router-link>
            <table class="table table-light table-hover ">
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th colspan="4">Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <!-- display all events form allorganizations array -->
                    <tr v-for="orgee in allorganizations" :key="orgee._id">
                        <td>{{orgee.orgid }}</td>
                        <td>{{orgee.org_name }}</td>
                        <!-- go to offers page based on orgid -->
                        <td><router-link :to="{name:'offers', params: {id: orgee.orgid}}" class= "btn btn-secondary"> Offers</router-link></td>
                        <!-- go to peoples page based on orgid -->
                        <td><router-link :to="{name:'peoples', params: {id: orgee.orgid}}" class= "btn btn-secondary"> Peoples</router-link></td>
                        <!-- go to organizationg edit page based on orgid -->
                        <td><router-link :to="{name: 'org_edit', params: { id: orgee.orgid }}" class="btn btn-secondary ">Edit</router-link></td>
                        <!-- call delete function and remove org from organization collection -->
                        <td><button @click.prevent="del_org(orgee.orgid)" class="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    //export array
    export default{
        data(){
            return{
                allorganizations:[],
                active: false

            }
        },
        //grab all org data before mounting
        created(){
            let apiURL = 'http://localhost:8080/organizations';
            axios.get(apiURL).then(res => {
                this.allorganizations = res.data;
            }).catch(error=>{
                console.log(error)
            });
        },
        //define functions
        methods:{
            //remove org data from db
            del_org(id){
                let apiURL = `http://localhost:8080/organizations/del/${id}`//backend api
                let indexOfArrayItem = this.allorganizations.findIndex(i=>i.orgid === id);//store orgid index from array
                //remove only if true
                if(window.confirm('Delete?')){
                    //remove organization from organization collection
                    axios.delete(apiURL).then(()=>{
                        this.allorganizations.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }
</script>

<style scoped>
 @import "../../assets/app.css";
</style>