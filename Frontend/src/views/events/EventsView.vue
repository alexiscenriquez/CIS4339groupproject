<template>
    <div>
        <h1>All Events</h1>
        <br>
        <div class="row justify-content-center">
            <router-link :to="{path:'new-event'}" class="btn btn-secondary">Create New Event</router-link>
            <table class="table table-light table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>Event</th>
                        <th>Name</th>
                        <th>Host</th>
                        <th>Date</th>
                        <th>Street</th>
                        <th>City</th> 
                        <th>State</th>
                        <th>Countyr</th>
                        <th>Zip code</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="evee in allevents" :key="evee._id">
                        <td>{{evee.evid }}</td>
                        <td>{{evee.ev_name }}</td>
                        <td>{{evee.ev_host }}</td>
                        <td>{{evee.ev_date }}</td>
                        <td>{{evee.addr }}</td>
                        <td>{{evee.city }}</td>
                        <td>{{evee.st }}</td>
                        <td>{{evee.country }}</td>
                        <td>{{evee.zip }}</td>
                        <td><router-link :to="{name:'attendees', params: {id: evee.evid}}" class= "btn btn-secondary"> Attendees</router-link></td>
                        <td><router-link :to="{name: 'events_edit', params: { id: evee.evid }}" class="btn btn-secondary ">Edit</router-link></td>
                        <td><button @click.prevent="del_event(evee.evid)" class="btn btn-secondary">Delete</button></td>
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
                allevents:[],
                active: false

            }
        },
        created(){
            let apiURL = 'http://localhost:8080/events';
            axios.get(apiURL).then(res => {
                this.allevents = res.data;
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            del_event(id){
                let apiURL = `http://localhost:8080/events/del/${id}`
                let indexOfArrayItem = this.allevents.findIndex(i=>i.evid === id);

                if(window.confirm('Delete?')){
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