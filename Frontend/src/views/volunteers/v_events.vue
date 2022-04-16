<template>
    <main>
        <h1>Events for Volunteer#{{vid}}</h1>
        <div class="row justify-content-center">
            <!-- <router-link :to="{path:'new-volunteers'}" class="btn btn-secondary">Create New Volunteer</router-link> -->
            <!-- allows table to scroll horizontally -->
            <div class='table-responsive'>
            <!-- table-hover adds gray hover -->
            <table class="table table-light table-hover">
            
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>City</th>
                        <th>State</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event in events" :key="event.evid">
                        <td>{{event.evid}}</td>
                        <td>{{event.ev_name}}</td>
                        <td>{{event.ev_date}}</td>
                        <td>{{event.city}}</td>
                        <td>{{event.st}}</td>
                        <td><button @click.prevent="del_event(event.evid)" class="btn btn-secondary">Delete</button></td>
                    </tr>
                </tbody>
            </table>
    </div>
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
                v_list:[],
                events:[],
                active: false,
                vid:this.$route.params.id

            }
        },
        created(){
            let apiURL = `http://localhost:8080/volunteers/events/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.v_list = res.data[0];
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
                
            }
        }
    }
</script>

