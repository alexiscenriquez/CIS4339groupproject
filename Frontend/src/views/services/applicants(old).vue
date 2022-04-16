<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                service:[],
                applicants:[]
            }
        },
        created(){
            let apiURL = `http://localhost:8080/services/all-applicants/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.service = res.data[0];
                this.applicants = res.data[0].clients
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            rem_applicant(ID){
                let data = {
                    "id":ID,
                }
                let apiURL = `http://localhost:8080/events/del-volunteer/${this.$route.params.id}`
                let indexOfArrayItem = this.volunteer.findIndex(i=>i.vid === ID);
                
                if(window.confirm('Remove Volunteer from Event?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.volunteer.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            },
            rem_applicant(ID){
                let data = {
                    "id":ID,
                }
                let apiURL = `http://localhost:8080/events/del-client/${this.$route.params.id}`
                let indexOfArrayItem = this.client.findIndex(i=>i.cid === ID);
                
                if(window.confirm('Remove Client from event?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.client.splice(indexOfArrayItem, 1);
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
        <div class="row justify-content-center">
            
            <table class="table table-light table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                       
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{service.sid }}</td>
                        <td>{{service.name }}</td>
                        
                        <td><router-link :to="{name: 'services_edit', params: { id: service.sid }}" class="btn btn-secondary ">Edit</router-link></td>
                    </tr> 
                </tbody>
            </table>
        </div>
        <!-- Volunteer table -->
        <div class="row justify-content-center">
            <h2 class='text-center'>Applicants</h2>
            <!-- <form @submit.prevent='add_volunteer' class='form-inline'>
                    <div class='form-group'>
                        <label for="">VID#</label>
                        <input type="number" v-model='new_vid.id'  required>
                        <button class='btn btn-secondary'>Add Applicant</button>
                    </div>
            </form>  -->
            <table class="table table-light table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Phone#</th>
                        <th>Email</th>
                        <th></th>    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="applicant in applicants" :key="applicant.cid">
                        <td>{{applicant.cid }}</td>
                        <td>{{applicant.first_name }}</td>
                        <td>{{applicant.mid_name }}</td>
                        <td>{{applicant.last_name }}</td>
                        <td>{{applicant.phone_number }}</td>
                        <td>{{applicant.primary_email }}</td>
                        <td><button @click.prevent="rem_applicant(applicant.cid)" class="btn btn-secondary">Delete</button></td>
                
                    </tr> 
                </tbody>
            </table>
        </div>
    </main>
</template>

