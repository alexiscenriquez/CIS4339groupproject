<template>
    <div>
        <!--Title-->
        <h1 class="text-center">Create Organization</h1>
        <!--When submit button is pressed, this function is executed-->
        <form @submit.prevent="handleSubmitForm">
            <fieldset class="form-control mb-5">
                <!--organization Information Fieldset (Divider)-->
                <legend>Organization Information</legend>
                <div class="row mb-4">
                        <div class="col-sm-4">
                            <label>Organization Name</label>
                            <!--V-model creates a 2-way data binding, which gathers the input, storing it where specified-->
                            <input type="text" class="form-control" v-model="organizations.org_name" required>
                        </div>
                </div>
            </fieldset>
            <!-- Button that creates org -->
            <button class="btn mt-3 create">Create</button>
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    //Used to export modujles, objects, functions and variables to be used elsewhere
    export default {
        //Storing the data being exported in a function
        data() {
            //What the function is returning (Method for adding org) in postman
            return {
                organizations: {
                    orgid: '',
                    org_name: ''
                }
            }
        },
        methods: {
            //Function executed when "submit" is clicked (Used in line 6)
        handleSubmitForm() {
            //Var storing route for creating new org
            let apiURL = 'http://localhost:8080/organizations/new-org';
            //POST method on vars
            axios.post(apiURL, this.organizations).then(() => {
                //changing the view to the org list
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