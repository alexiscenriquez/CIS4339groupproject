<template>
  <div class="mb-5">
    <!-- Using pie-chart tag to display pie chart on /reports/graph -->
    <!-- 'graph' represents json data from backend from route /reports/graph-->
    <pie-chart :data="graph"></pie-chart>
  </div>
</template>

<script>
import axios from "axios"; //importing and using axios to actually display backend data onto frontend
export default {
    name: 'graph1', //name of component
    data() {
        return {
            graph:'' //graph returns json data from backend route /reports/graph
        }
    },
    created() {
        let apiURL = `http://localhost:3000/reports/graph`; //same route as backend so vue knows where to display data

        axios.get(apiURL).then((res) => {
            this.graph = res.data; //sending 'graph' data from server to client side
        })
    }
}
</script>

