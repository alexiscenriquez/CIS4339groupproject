<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                service:[],
                applicants:[]
            }
        },
        created(){
            let apiURL = `http://localhost:8080/services/all-applicants/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.service = res.data[0];
                this.applicants = res.data[0].clients
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            rem_applicant(ID){
                let data = {
                    "id":ID,
                }
                let apiURL = `http://localhost:8080/events/del-volunteer/${this.$route.params.id}`
                let indexOfArrayItem = this.volunteer.findIndex(i=>i.vid === ID);
                
                if(window.confirm('Remove Volunteer from Event?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.volunteer.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            },
            rem_applicant(ID){
                let data = {
                    "id":ID,
                }
                let apiURL = `http://localhost:8080/events/del-client/${this.$route.params.id}`
                let indexOfArrayItem = this.client.findIndex(i=>i.cid === ID);
                
                if(window.confirm('Remove Client from event?')){
                    axios.post(apiURL, data
                    ).then(()=>{
                        this.client.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        } 
    }
    
</script>

<template>
    <fieldset class='form-control mb-5'></fieldset>
</template>