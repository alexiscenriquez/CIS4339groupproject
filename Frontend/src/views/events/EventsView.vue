<script>
    import axios from 'axios'
    import Footer from '../../components/footer.vue'
    // export array
    export default{
        components:{
            Footer
        },
        data(){
            return{
                allevents:[],
            }
        },
        //grab all event data before mounting dom
        created(){
            //get event information
            let apiURL = 'http://localhost:8080/events';
            axios.get(apiURL).then(res => {
                this.allevents = res.data;
            }).catch(error=>{
                console.log(error)
            });
        },
        //define functions
        methods:{
            //remove event data from db
            del_event(id){
                let apiURL = `http://localhost:8080/events/del/${id}` //backend api
                let indexOfArrayItem = this.allevents.findIndex(i=>i.evid === id); //store evid index from array
                
                //remove only if true
                if(window.confirm('Delete?')){
                    //remove event from events collection
                    axios.delete(apiURL).then(()=>{
                        this.allevents.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }
</script>

<template>
    <div>
        <h1 class="text-center mb-5">All Events</h1>
        <br>
        <!-- display event table -->
        <div class="row ">
            <!-- go to create event page -->
            <router-link :to="{path:'new-event'}" class="btn btn-secondary col-md-4">Create New Event</router-link>
            <table class="table table-light table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Host</th>
                        <th>Date</th>
                        <th>Street</th>
                        <th>City</th> 
                        <th>State</th>
                        <th>Country</th>
                        <th>Zip code</th>
                        <th colspan="3">Actions</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <!-- display all events from allevents array -->
                    <tr v-for="evee in allevents" :key="evee._id">
                        <td>{{evee.evid }}</td>
                        <td>{{evee.ev_name }}</td>
                        <td>{{evee.ev_host }}</td>
                        <td>{{evee.ev_date}}</td>
                        <td>{{evee.addr }}</td>
                        <td>{{evee.city }}</td>
                        <td>{{evee.st }}</td>
                        <td>{{evee.country }}</td>
                        <td>{{evee.zip }}</td>
                        <!-- go to attendees page based on evid -->
                        <td><router-link :to="{name:'attendees', params: {id: evee.evid}}" class= "btn btn-secondary"> Attendees</router-link></td>
                        <!-- go to events edit page based on evid -->
                        <td><router-link :to="{name: 'events_edit', params: { id: evee.evid }}" class="btn btn-secondary ">Edit</router-link></td>
                        <!-- call delete function and remove event from events collection -->
                        <td><button @click.prevent="del_event(evee.evid)" class="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
 @import "../../assets/app.css";
</style>