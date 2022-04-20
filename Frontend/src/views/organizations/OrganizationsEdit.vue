<template>
    <div>
        <h1>Update Organization#{{organization.orgid}}</h1>
        <!-- edit organization -->
        <form @submit.prevent="UpdateOrganization">
            <fieldset class="form-control mb-5">
                <legend>Organization Information</legend>
                <div class="row mb-4">
                        <!-- display organization and allow for editing -->
                        <div class="col-sm-4">
                            <label>Organization Name</label>
                            <input type="text" class="form-control" v-model="organization.org_name" required>
                        </div>
                </div>
            </fieldset>
            <button class="btn create mt-3">Update</button>
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    import Footers from '../../components/footer.vue'
//exports arrays and objects
export default {
    components:{
        Footers
    },
    data() {
        return {
            organization: {}, 
        }
    },
    //grab organization info before mounting dom
    created() {
        //get and set arrays
        let apiURL = `http://localhost:8080/organizations/find/${this.$route.params.id}`;
        axios.get(apiURL).then(res => {
            this.organization = res.data[0];
        }).catch(error =>{
            console.log(error)
        });
    },
    //define functions
    methods: {
        //update/edit organization info
        UpdateOrganization() {
            let apiURL = `http://localhost:8080/organizations/update/${this.$route.params.id}`;
            //update organization info
            axios.put(apiURL, this.organization).then((res) => {
                console.log(res)
                this.$router.push('/organizations')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>

<style scoped>

 @import "../../assets/app.css";
</style>