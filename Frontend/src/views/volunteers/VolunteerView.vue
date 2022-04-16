<template>
    <main>
        <h1>All Volunteers</h1>
        <br>
        <div class="row justify-content-center">
            <router-link :to="{path:'new-volunteers'}" class="btn btn-secondary">Create New Volunteer</router-link>
            <!-- allows table to scroll horizontally -->
            
            <!-- table-hover adds gray hover -->
            <table class="table table-light table-hover">
            
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Birthday</th>
                        <!-- <th>Social Security</th> -->
                        <!-- <th>Drivers License</th>
                        <th>Gender</th>
                        <th>Ethnicity</th>-->
                        <th>Phone#</th>
                        <!--<th>Emergency#</th>
                        <th>Email</th>
                        <th>Email#2</th>
                        <th>Primary Language</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Zip Code</th>
                        <th>Country</th> -->
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="volunteer in volunteers" :key="volunteer._id">
                        <td>{{volunteer.vid}}</td>
                        <td>{{volunteer.first_name}}</td>
                        <td>{{volunteer.mid_name}}</td>
                        <td>{{volunteer.last_name}}</td>
                        <td>{{volunteer.b_day}}</td>
                        <!-- <td>{{volunteer.ssn}}</td> -->
                        <!-- <td>{{volunteer.DL}}</td>
                        <td>{{volunteer.gender}}</td>
                        <td>{{volunteer.ethnicity}}</td>-->
                        <td>{{volunteer.phone_num}}</td>
                        <!--<td>{{volunteer.emer_num}}</td>
                        <td>{{volunteer.email}}</td>
                        <td>{{volunteer.email2}}</td>
                        <td>{{volunteer.prim_language}}</td>
                        <td>{{volunteer.addr}}</td>
                        <td>{{volunteer.city}}</td>
                        <td>{{volunteer.st}}</td>
                        <td>{{volunteer.zip}}</td>
                        <td>{{volunteer.country}}</td> -->
                        
                        <td><button @click.prevent="" class="btn btn-secondary">More...</button></td>
                        <td><router-link :to="{name: 'v_events', params: { id: volunteer.vid }}" class="btn btn-secondary ">Events</router-link></td>
                        <td><router-link :to="{name: 'volunteers_edit', params: { id: volunteer.vid }}" class="btn btn-secondary ">Edit</router-link></td>
                        <td><button @click.prevent="del_event(volunteer.vid)" class="btn btn-secondary">Delete</button></td>

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
                volunteers:[],
                active: false

            }
        },
        created(){
            let apiURL = 'http://localhost:8080/volunteers';
            axios.get(apiURL).then(res => {
                this.volunteers = res.data;
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            del_event(id){
                let apiURL = `http://localhost:8080/volunteers/del/${id}`
                let indexOfArrayItem = this.volunteers.findIndex(i=>i.vid === id);

                if(window.confirm('Delete?')){
                    axios.delete(apiURL).then(()=>{
                        this.volunteers.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }
</script>

