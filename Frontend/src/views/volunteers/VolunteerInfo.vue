<template>
    <main>
        <h1>{{volunteer.first_name}} #{{volunteer.vid}}</h1>
        <br>
            <!--change to differenct views or remove event-->
            <div class='wrapper'>
                <!-- go to volunteer event view with vid -->
                <td><router-link :to="{name: 'v_events', params: { id: volunteer.vid }}" class="btn btn-secondary ">Events</router-link></td>
                <!-- go to volunteer edit view with vid -->
                <td><router-link :to="{name: 'volunteers_edit', params: { id: volunteer.vid }}" class="btn btn-secondary ">Edit</router-link></td>
                <!-- call function to remove volunteer-->
                <td><button @click.prevent="del_volunteer(volunteer.vid)" class="btn btn-danger">Delete</button></td>
            </div>
        <!-- display table with volunteer information w/ v-model-->
        <div class="table1">
            <table class="table table-light caption-top">
                <caption><strong>Information</strong></caption>
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <td>{{volunteer.first_name}}</td>
                    </tr>
                    <tr>    
                        <th>Middle Name</th>
                         <td>{{volunteer.mid_name}}</td>
                    </tr>
                    <tr>    
                        <th>Last Name</th>
                        <td>{{volunteer.last_name}}</td>
                    </tr>
                    <tr>    
                        <th>Birthday</th>
                        <td>{{volunteer.b_day}}</td> 
                    </tr>
                    <tr>    
                        <th>Social Security</th>
                        <td>{{volunteer.ssn}}</td>
                    </tr>
                    <tr>    
                        <th>Drivers License</th>
                        <td>{{volunteer.DL}}</td>
                    </tr>
                    <tr>    
                        <th>Gender</th>
                        <td>{{volunteer.gender}}</td>
                    </tr>
                    <tr>    
                        <th>Ethnicity</th>
                        <td>{{volunteer.ethnicity}}</td>
                    </tr>
                    <tr>    
                        <th>Phone#</th>
                        <td>{{volunteer.phone_num}}</td>
                    </tr>
                    <tr>    
                        <th>Emergency#</th>
                        <td>{{volunteer.emer_num}}</td>
                    </tr>
                    <tr>    
                        <th>Email</th>
                        <td>{{volunteer.email}}</td>
                    </tr>
                    <tr>    
                        <th>Email#2</th>
                        <td>{{volunteer.email2}}</td>
                    </tr>
                    <tr>    
                        <th>Primary Language</th>
                        <td>{{volunteer.prim_language}}</td>
                    </tr>
                    <tr>    
                        <th>Street</th>
                        <td>{{volunteer.addr}}</td>
                    </tr>
                    <tr>    
                        <th>City</th>
                        <td>{{volunteer.city}}</td>
                    </tr>
                    <tr>    
                        <th>State</th>
                        <td>{{volunteer.st}}</td>
                    </tr>
                    <tr>    
                        <th>Zip code</th>
                        <td>{{volunteer.zip}}</td>
                    </tr>
                    <tr>    
                        <th>Country</th>
                        <td>{{volunteer.country}}</td>
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
    
    //export components and objects
    export default{
        components:{
            Footer
        },
        data(){
            return{
                volunteer:{}
            }
        },
        //grab volunteer data before mounting dom
        created(){
            //get volunteer data
            let apiURL = `http://localhost:8080/volunteers/find/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.volunteer = res.data[0]; //store volunteer data
            }).catch(error=>{
                console.log(error)
            });
        },
        //define functions
        methods:{
            //remove event from 
            del_volunteer(id){
                let apiURL = `http://localhost:8080/volunteers/del/${id}`
                //if true
                if(window.confirm('Delete?')){
                    //delete volunteer from volunteers collection
                    axios.delete(apiURL).then(()=>{
                        this.$router.push('/volunteers') //go to volunteer home view
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