<script>
    import axios from 'axios'
    import Footer from '../../components/footer.vue'
    
    //export arrays
    export default{
        components:{
            Footer
        },
        data(){
            return{
                volunteers:[],
                date:''
            }
        },
        //grab volunteers data before mounting dom
        created(){
            //get volunteer data from volunteer collection
            let apiURL = 'http://localhost:8080/volunteers';
            axios.get(apiURL).then(res => {
                this.volunteers = res.data; //store volunteer in array
                this.date =  res.data[0].b_day.slice(0, 10)
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            //del volunteer from db
            del_volunteer(id){
                let apiURL = `http://localhost:8080/volunteers/del/${id}`
                let indexOfArrayItem = this.volunteers.findIndex(i=>i.vid === id); //store vid index from array

                //if true
                if(window.confirm('Delete Volunteer?')){
                    //delete volunteer from volunteers collection
                    axios.delete(apiURL).then(()=>{
                        this.volunteers.splice(indexOfArrayItem, 1); //remove vid from array
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
        <h1 class="text-center mb-5">All Volunteers</h1>
        <br>
        <div class="row ">
            <!-- go to create new volunteer view -->
            <router-link :to="{path:'new-volunteers'}" class="btn btn-secondary col-md-3">Create New Volunteer</router-link>
            <!-- display volunteer information -->
            <table class="table table-light table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Birthday</th>
                        <th>Phone#</th>
                        <th colspan="6">Actions</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <!-- display all volunteers from volunteers array -->
                    <tr v-for="volunteer in volunteers" :key="volunteer._id">
                        <td>{{volunteer.vid}}</td>
                        <td>{{volunteer.first_name}}</td>
                        <td>{{volunteer.mid_name}}</td>
                        <td>{{volunteer.last_name}}</td>
                        <td>{{date}}</td>
                        <td>{{volunteer.phone_num}}</td>
                        <!-- go to volunteer information view -->
                        <td><router-link :to="{name: 'volunteer-info', params: { id: volunteer.vid }}" class="btn btn-secondary ">More...</router-link></td>
                        <!-- go to volunteer event information view -->
                        <td><router-link :to="{name: 'v_events', params: { id: volunteer.vid }}" class="btn btn-secondary ">Events</router-link></td>
                        <!-- go to volunteer organizations information view -->
                        <td><router-link :to="{name: 'v_organizations', params: { id: volunteer.vid }}" class="btn btn-secondary ">Organizations</router-link></td>
                        <!-- go to volunteer edit information view -->
                        <td><router-link :to="{name: 'volunteers_edit', params: { id: volunteer.vid }}" class="btn btn-secondary ">Edit</router-link></td>
                        <!-- call function to removed volunteer-->
                        <td><button @click.prevent="del_volunteer(volunteer.vid)" class="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Footer />
    </main>
</template>

<style scoped>
 @import "../../assets/app.css";
</style>