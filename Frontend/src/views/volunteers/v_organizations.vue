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
                organization:[],
                fullorganizations:[],
                new_orgid:{id:''}
            }
        },
        //get volunteer and organization data before the mounting dom
        created(){
            let apiURL = `http://localhost:8080/volunteers/org-attendees/${this.$route.params.id}`;
            let apiURL2 = `http://localhost:8080/organizations`;
            
            //get list of attendees by organization
            axios.get(apiURL).then(res => {
                this.volunteer = res.data[0]; //store volunteer data in array
                this.organization = res.data[0].organizations; //store organization data in array
            }).catch(error=>{
                console.log(error)
            });
            
            //get list of organizations
            axios.get(apiURL2).then(res =>{
                    this.fullorganizations = res.data //store organizations in array
                }).catch(error =>{
                    console.log(error)
                })
        },
        //define functions
        methods:{
            //remove host from volunteers and organizations collections
            del_organization(id){
                let data = {"id":id}
                let data2 = {"id":this.$route.params.id}
                
                let apiURL = `http://localhost:8080/volunteers/del-org/${this.$route.params.id}`
                let apiURL2 = `http://localhost:8080/organizations/del-vol/${id}`
                let indexOfArrayItem = this.organization.findIndex(i=>i.orgid === id);//store orgid index from array
                
                //delete form volunteers collection
                if(window.confirm('Delete Organization from Client?')){
                    axios.post(apiURL, data).then(()=>{
                        this.organization.splice(indexOfArrayItem, 1);
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
            //add host to volunteers and organizations collections
            add_organization(){
                let orgeee = this.new_orgid.id
                let data = {"id":this.$route.params.id}
                let apiURL = `http://localhost:8080/volunteers/add-org/${this.$route.params.id}`;
                let apiURL2 = `http://localhost:8080/organizations/add-vol/${orgeee}`
                
                //add to volunteers collection
                axios.post(apiURL, this.new_orgid).then(() => {
                    //changing the view to the list
                  this.$router.push('/volunteers')
                  this.new_orgid = {
                    id: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
                //add to organizations collection
                axios.post(apiURL2, data).then(()=>{
                }).catch(error =>{
                    console.log(error)
                })
                
            }
        }
    }
</script>

<template>
    <div>
        <h1>Organizations for Volunteer#{{volunteer.vid}}</h1>
        <br>
        <!-- display organizations associated with volunteer-->
        <fieldset class="form-control mb-5">
            <legend><strong>{{volunteer.first_name}}{{" "}}{{volunteer.last_name}}</strong></legend>
                <!-- show organization information -->
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
                        <input type="text" class="'form-control" v-model="volunteer.phone_num" disabled>
                    </div>
                </div>
                <!-- go to volunteers edit view -->
                <td><router-link :to="{name: 'volunteers_edit', params: { id: volunteer.vid }}" class="btn btn-secondary ">Edit</router-link></td>
                <hr>
                <div class="row mb-4">
                    <div class="col-sm-4">
                        <!-- add volunteer to organization -->
                        <form @submit.prevent='add_organization'>
                            <div>
                                <select v-model='new_orgid.id' class="form-control">
                                    <option value="" selected disabled>Choose an Organization</option>
                                    <option v-for="x in fullorganizations" :value="x.orgid" :key="x.orgid">{{x.orgid}}{{" - "}}{{x.org_name}}</option>
                                </select>
                                <div class='form-helper'>ORGID# - Name</div>
                                <button class='btn btn-secondary'>Add Organization</button>
                            </div>
                        </form>
                    </div>
                </div>
        </fieldset>
        <!-- display organizations table and allow removal -->
        <table class="table table-light table-hover caption-top">
            <caption><strong>Organizations</strong></caption>
            <thead class="table-dark">
                <tr>
                <th>ORGANIZATION#</th>
                <th>Name</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <!-- display information for each organization in array, allow user to remove org by orgid -->
                <tr v-for="organizations in organization" :key="organizations.orgid">
                    <td>{{organizations.orgid }}</td>
                    <td>{{organizations.org_name }}</td>
                    <td><button @click.prevent="del_organization(organizations.orgid)" class="btn btn-secondary">Remove</button></td>
                </tr> 
            </tbody>
        </table>
        <Footer />
    </div>
</template>

<style scoped>
 @import "../../assets/app.css";
</style>