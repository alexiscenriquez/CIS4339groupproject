<template>
    <div>
        <h1 class="text-center">Create Organization</h1>
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
            <button class="btn mt-3 create">Create</button>
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
 @import "../../assets/app.css";
</style>