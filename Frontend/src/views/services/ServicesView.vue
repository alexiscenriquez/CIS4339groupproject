<template>
    <main>
        <h1>All Services</h1>
        <br>
        <div class="row justify-content-center">
            <router-link :to="{path:'new-service'}" class="btn btn-secondary">Create New Service</router-link>
            <table class="table table-light table-hover">
            <thead class="table-dark">
                <tr>
                <th>ID#</th>
                <th>Name</th>
                <th>Renewal</th>
                <th>Notes</th>
                <th></th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="service in services" :key="service._id">
                <td>{{service.sid}}</td>
                <td>{{service.name }}</td>
                <td>{{service.renewal}}</td>
                <td>{{service.notes}}</td>
                
                <td><router-link :to="{name: 'applicants', params: { id: service.sid }}" class="btn btn-secondary ">Applicants</router-link></td>
                <td><router-link :to="{name: 'services_edit', params: { id: service.sid }}" class="btn btn-secondary ">Edit</router-link></td>
                <td><button @click.prevent="del_event(service.sid)" class="btn btn-secondary">Delete</button></td>
                <td v-if="active">hello</td>
                
                </tr>
            </tbody>
            </table>
  </div>

    </main>
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                services:[],
                active: false

            }
        },
        created(){
            let apiURL = 'http://localhost:8080/services';
            axios.get(apiURL).then(res => {
                this.services = res.data;
            }).catch(error=>{
                console.log(error)
            });
        },
        methods:{
            del_event(id){
                let apiURL = `http://localhost:8080/services/del/${id}`
                let indexOfArrayItem = this.services.findIndex(i=>i.sid === id);

                if(window.confirm('Delete?')){
                    axios.delete(apiURL).then(()=>{
                        this.services.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }
</script>

