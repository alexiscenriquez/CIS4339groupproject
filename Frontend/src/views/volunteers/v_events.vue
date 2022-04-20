<template>
    <main>
        <h1>Events for Volunteer #{{volunteer.vid}}</h1>
        <br>
        <div class="row justify-content-center">
            <!-- <router-link :to="{path:'new-volunteers'}" class="btn btn-secondary">Create New Volunteer</router-link> -->
            <!-- allows table to scroll horizontally -->
            <!-- table-hover adds gray hover -->
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
                    <tr v-for="event in events" :key="event.evid">
                        <td>{{event.evid}}</td>
                        <td>{{event.ev_name}}</td>
                        <td>{{event.ev_date}}</td>
                        <td>{{event.city}}</td>
                        <td>{{event.st}}</td>
                        <td><button @click.prevent="del_event(event.evid)" class="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
  </div>
    <Footer />
    </main>

    
</template>

<script>
    import axios from 'axios'
    import Footer from '../../components/footer.vue'

    export default{
        components:{
            Footer
        },
        data(){
            return{
                volunteer:[],
                events:[],
                new_vid:{id:''},
                //fullorganizations:[],
                //organization:[],
                active: false,

            }
        },
        created(){
            let apiURL = `http://localhost:8080/volunteers/events/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.volunteer = res.data[0];
                this.events = res.data[0].events;
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            
            del_event(id){
                let data = {"id":id}
                let data2 = {"id":this.$route.params.id}
                
                let apiURL = `http://localhost:8080/volunteers/del-event/${this.$route.params.id}`
                let apiURL2 = `http://localhost:8080/events/del-volunteer/${id}`
                let indexOfArrayItem = this.events.findIndex(i=>i.vid === id);
                
                //delete form volunteers collection
                if(window.confirm('Delete?')){
                    axios.post(apiURL, data).then(()=>{
                        this.events.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                //delete from events table
                    axios.post(apiURL2, data2).then(()=>{
                    }).catch(error =>{
                        console.log(error)
                    })

                }
            },
            add_event(){
                let ivd = this.new_vid.id
                let data = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/volunteers/add-event/${this.$route.params.id}`;
                let apiURL2 = `http://localhost:8080/events/add-volunteer/${ivd}`
                
                axios.post(apiURL, this.new_sid).then(() => {
                    //changing the view to the list
                  this.$router.push('/volunteers')
                  this.new_vid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });

                axios.post(apiURL2, data).then(()=>{
                    
                }).catch(error =>{
                    console.log(error)
                })
                
            }
        }
    }
</script>

<style scoped>
@import "../../assets/app.css";
</style>