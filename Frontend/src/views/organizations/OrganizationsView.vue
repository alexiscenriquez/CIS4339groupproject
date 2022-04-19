<template>
    <div>
        <h1>All Organizations</h1>
        <br>
        <div class="row ">
            <router-link :to="{path:'new-org'}" class="btn btn-secondary col-md-3">Create New Organization</router-link>
            <table class="table table-light table-hover ">
                <thead class="table-dark">
                    <tr>
                        <th>Organization</th>
                        <th>Name</th>
                        <th colspan="4">Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="orgee in allorganizations" :key="orgee._id">
                        <td>{{orgee.orgid }}</td>
                        <td>{{orgee.org_name }}</td>
                        <td><router-link :to="{name:'offers', params: {id: orgee.orgid}}" class= "btn btn-secondary"> Offers</router-link></td>
                        <td><router-link :to="{name:'peoples', params: {id: orgee.orgid}}" class= "btn btn-secondary"> Peoples</router-link></td>
                        <td><router-link :to="{name: 'org_edit', params: { id: orgee.orgid }}" class="btn btn-secondary ">Edit</router-link></td>
                        <td><button @click.prevent="del_org(orgee.orgid)" class="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                allorganizations:[],
                active: false

            }
        },
        created(){
            let apiURL = 'http://localhost:8080/organizations';
            axios.get(apiURL).then(res => {
                this.allorganizations = res.data;
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            del_org(id){
                let apiURL = `http://localhost:8080/organizations/del/${id}`
                let indexOfArrayItem = this.allorganizations.findIndex(i=>i.orgid === id);

                if(window.confirm('Delete?')){
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