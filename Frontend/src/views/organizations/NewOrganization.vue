<template>
    <div>
        <h1>Create Organization</h1>
        <form @submit.prevent="handleSubmitForm">
            <fieldset class="form-control mb-5">
                <legend>Organization Information</legend>
                <div class="row mb-4">
                        <div class="col-sm-4">
                            <label>Organization Name</label>
                            <input type="text" class="form-control" v-model="organizations.org_name" required>
                        </div>
                </div>
            </fieldset>
            <button class="btn btn-danger mt-3">Create</button>
        </form>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                organizations: {
                    orgid: '',
                    org_name: ''
                }
            }
        },
        methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:8080/organizations/new-org';

            axios.post(apiURL, this.organizations).then(() => {

                this.$router.push('/organizations')
                this.organizations = {
                    orgid: '',
                    org_name: ''
                }
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