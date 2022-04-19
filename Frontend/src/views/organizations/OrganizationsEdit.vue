<template>
    <div>
        <h1>Update Organization#{{organization.orgid}}</h1>
        <form @submit.prevent="UpdateOrganization">
            <fieldset class="form-control mb-5">
                <legend>Organization Information</legend>
                <div class="row mb-4">
                        <div class="col-sm-4">
                            <label>Organization Name</label>
                            <input type="text" class="form-control" v-model="organization.org_name" required>
                        </div>
                </div>
            </fieldset>
            <button class="btn btn-danger mt-3">Update</button>
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    import Footers from '../../components/footer.vue'

export default {
    components:{
        Footers
    },
    data() {
        return {
            organization: {}, 
        }
    },
    created() {
        let apiURL = `http://localhost:8080/organizations/find/${this.$route.params.id}`;
        axios.get(apiURL).then(res => {
            this.organization = res.data[0];
        }).catch(error =>{
            console.log(error)
        });
    },
    methods: {
        UpdateOrganization() {
            let apiURL = `http://localhost:8080/organizations/update/${this.$route.params.id}`;

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
h1 {
  font-size: 26px;
  text-align: center;
  margin-top: 80px;
}
form {
  margin-top: 50px;
}
#create{
  background-color: #A6A7A8;
}
#create:hover{
  background-color: #2E5902;
  color: white;
}
</style>