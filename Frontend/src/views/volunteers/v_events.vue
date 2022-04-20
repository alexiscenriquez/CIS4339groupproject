<script>
    import axios from 'axios'
    import Footer from '../../components/footer.vue'

    //export arrays, objects, components
    export default{
        components:{
            Footer
        },
        data(){
            return{
                volunteer:[],
                events:[],
                new_vid:{id:''}
            }
        },
        //get events data before mounting dom
        created(){
            //get events data from volunteer
            let apiURL = `http://localhost:8080/volunteers/events/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.volunteer = res.data[0]; //store volunteer data in array
                this.events = res.data[0].events; //store event data in array
            }).catch(error=>{
                console.log(error)
            });
        },
        //define functions
        methods:{
            //remove event from volunteers and events collections
            del_event(id){
                let data = {"id":id} //add vid to obj
                let data2 = {"id":this.$route.params.id} //add evid to obj
                let apiURL = `http://localhost:8080/volunteers/del-event/${this.$route.params.id}`
                let apiURL2 = `http://localhost:8080/events/del-volunteer/${id}`
                let indexOfArrayItem = this.events.findIndex(i=>i.vid === id); //store vid index from array
                
                //delete form volunteers collection
                if(window.confirm('Delete?')){
                    axios.post(apiURL, data).then(()=>{
                        this.events.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                //delete from events collection
                    axios.post(apiURL2, data2).then(()=>{
                    }).catch(error =>{
                        console.log(error)
                    })

                }
            },
            //add event to volunteers and events collections
            add_event(){
                let ivd = this.new_vid.id //store evid
                let data = {"id":this.$route.params.id} //add evid to obj
                let apiURL = `http://localhost:8080/volunteers/add-event/${this.$route.params.id}`;
                let apiURL2 = `http://localhost:8080/events/add-volunteer/${ivd}`
                
                //add event to volunteer collection
                axios.post(apiURL, this.new_vid).then(() => {
                  this.$router.push('/volunteers') //goes to volunteers view
                  this.new_vid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });

                //add event to events collection
                axios.post(apiURL2, data).then(()=>{
                }).catch(error =>{
                    console.log(error)
                })
                
            }
        }
    }
</script>

<template>
    <main>
        <h1>Events for Volunteer #{{volunteer.vid}}</h1>
        <br>
        <div class="row justify-content-center">
            <!-- display volunteer information and button to edit info -->
            <fieldset class="form-control mb-5">
            <legend><strong>{{volunteer.first_name}} {{volunteer.last_name}}</strong></legend>
                <div class="'row mb-3">
                    <div class="col-sm-2">
                        <label for="" class="form-label">First Name</label>
                        <input type="text" class="'form-control" v-model="volunteer.first_name" disabled>
                    </div>
                    <div class="col-sm-2">
                        <label for="" class="form-label">Last Name</label>
                        <input type="text" class="'form-control" v-model="volunteer.last_name" disabled>
                    </div>
                    <div class="col-sm-2">
                        <label for="" class="form-label">Phone Number</label>
                        <input type="text" class="'form-control" v-model="volunteer.st" disabled>
                    </div>
                </div>
                
                <!-- go to volunteers edit view -->
                <td><router-link :to="{name: 'volunteers_edit', params: { id: volunteer.vid }}" class="btn btn-secondary ">Edit</router-link></td>
                <hr>
                
                <div class='row mb-4'>
                    <div class='col-sm-4'>
                        <form @submit.prevent='add_event'>
                            <div class='form-outline'>
                                <input type="number" id='form14' class='form-control' v-model='new_vid.id'  required>
                                <div class='form-helper'>EVID#</div>
                                <button class='btn btn-secondary'>Add Event</button>
                            </div>
                        </form> 
                    </div>
                </div> 
            </fieldset>

            <!-- display event table and allow  addition of events -->
            <table class="table table-light table-hover caption-top">
                <caption><strong>Events</strong></caption>
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- display information for each event in array, allow user to remove event by evid -->
                    <tr v-for="event in events" :key="event.evid">
                        <td>{{event.evid}}</td>
                        <td>{{event.ev_name}}</td>
                        <td>{{event.ev_date}}</td>
                        <td>{{event.city}}</td>
                        <td>{{event.st}}</td>
                        <!-- call function to remove event from collections -->
                        <td><button @click.prevent="del_event(event.evid)" class="btn btn-danger">Delete</button></td>
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